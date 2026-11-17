import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
assert.equal(config.headers?.length, 1, 'Use one Vercel header rule to avoid conflicting policies');
assert.equal(config.headers[0].source, '/(.*)');

const headers = new Map(config.headers[0].headers.map(({ key, value }) => [key.toLowerCase(), value]));
assert.equal(headers.size, config.headers[0].headers.length, 'Do not repeat header names');
for (const name of ['content-security-policy', 'x-frame-options', 'x-content-type-options', 'referrer-policy', 'permissions-policy']) {
  assert.ok(headers.has(name), `Missing ${name}`);
}
assert.ok(!headers.has('strict-transport-security'), 'Leave Vercel-managed HSTS unchanged');

const policy = headers.get('content-security-policy');
assert.ok(!/unsafe-inline|unsafe-eval|\*/i.test(policy), 'CSP must not allow unrestricted inline code or eval');
const directives = new Map(policy.split(';').map((part) => {
  const [name, ...values] = part.trim().split(/\s+/);
  return [name, values.join(' ')];
}));
assert.ok(directives.get('script-src')?.includes("'self'"));
assert.ok(directives.get('connect-src')?.includes('https://api.web3forms.com'));

function* htmlFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(file);
    else if (entry.name.endsWith('.html')) yield file;
  }
}

const files = [...htmlFiles(fileURLToPath(new URL('../dist/', import.meta.url)))];
assert.ok(files.length > 0, 'Build output must contain HTML');
const actualHashes = new Set();
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  assert.ok(!/<style\b|\sstyle\s*=|\son[a-z]+\s*=/i.test(html), `${file} contains inline styles or event handlers`);
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const [, attributes, body] = match;
    if (/\bsrc\s*=/.test(attributes)) {
      const source = attributes.match(/\bsrc\s*=\s*["']([^"']+)["']/)?.[1];
      assert.ok(source?.startsWith('/'), `${file} loads a script outside the allowed origin`);
    } else if (/\btype\s*=\s*["']application\/ld\+json["']/i.test(attributes)) {
      JSON.parse(body); // Structured data is a non-executable data block, not a CSP script hash.
    } else if (body.length) {
      actualHashes.add(`'sha256-${createHash('sha256').update(body).digest('base64')}'`);
    }
  }
}

const allowedHashes = new Set(directives.get('script-src').match(/'sha256-[^']+'/g) ?? []);
assert.deepEqual([...allowedHashes].sort(), [...actualHashes].sort(), 'CSP hashes must match every emitted inline script; update vercel.json after changing inline scripts');
console.log(`Security header policy matches ${files.length} built HTML pages and ${actualHashes.size} inline scripts.`);
