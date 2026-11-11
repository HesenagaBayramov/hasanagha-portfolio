import test from 'node:test';
import assert from 'node:assert/strict';
import { sendContact } from '../src/lib/web3forms.ts';

const form = () => {
  const data = new FormData();
  data.set('name', 'Test Person');
  data.set('email', 'test@example.com');
  data.set('message', 'A testing message');
  return data;
};

test('sends only expected fields and accepts a provider success', async () => {
  let sent;
  const fakeFetch = async (url, options) => {
    sent = { url, options };
    return Response.json({ success: true });
  };
  assert.deepEqual(await sendContact(form(), 'test-key', fakeFetch), { ok: true });
  assert.equal(sent.url, 'https://api.web3forms.com/submit');
  assert.deepEqual([...sent.options.body.keys()], ['access_key', 'name', 'email', 'message']);
  assert.equal(sent.options.body.get('email'), 'test@example.com');
});

test('treats provider rejection, network failure, and timeout as failures', async () => {
  assert.deepEqual(await sendContact(form(), 'test-key', async () => Response.json({ success: false }, { status: 400 })), { ok: false });
  assert.deepEqual(await sendContact(form(), 'test-key', async () => { throw new Error('offline'); }), { ok: false });
  const waitForAbort = (_, { signal }) => new Promise((_, reject) => signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true }));
  assert.deepEqual(await sendContact(form(), 'test-key', waitForAbort, 1), { ok: false });
});

test('does not send without a key or when the honeypot is checked', async () => {
  let calls = 0;
  const fakeFetch = async () => { calls++; return Response.json({ success: true }); };
  assert.deepEqual(await sendContact(form(), undefined, fakeFetch), { ok: false });
  const trapped = form(); trapped.set('botcheck', 'on');
  assert.deepEqual(await sendContact(trapped, 'test-key', fakeFetch), { ok: false });
  assert.equal(calls, 0);
});
