import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { en } from '../src/data/en.ts';
import { az } from '../src/data/az.ts';

const outputDir = fileURLToPath(new URL('../public/og/', import.meta.url));
const escapeXml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function imageMarkup(copy) {
  const focus = copy.eyebrow.split('  /  ').slice(0, 2).join('  /  ');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#10222d"/><stop offset="1" stop-color="#0b1520"/></linearGradient>
      <radialGradient id="glow"><stop stop-color="#85b5b6" stop-opacity=".12"/><stop offset="1" stop-color="#85b5b6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#0b1520"/>
    <rect x="24" y="24" width="1152" height="582" rx="24" fill="url(#background)" stroke="#2b4750" stroke-width="2"/>
    <ellipse cx="600" cy="316" rx="488" ry="275" fill="url(#glow)"/>
    <path d="M72 132h387M741 132h387M72 493h1056" stroke="#2b4750" stroke-width="2"/>
    <circle cx="517" cy="125" r="5" fill="#79c998"/>
    <text x="616" y="132" text-anchor="middle" fill="#85b5b6" font-family="Consolas, monospace" font-size="18" letter-spacing="3">PORTFOLIO</text>
    <text x="600" y="312" text-anchor="middle" fill="#e8eff0" font-family="Arial, sans-serif" font-size="72" font-weight="700" letter-spacing="-2">${escapeXml(copy.name)}</text>
    <text x="600" y="389" text-anchor="middle" fill="#85b5b6" font-family="Arial, sans-serif" font-size="30" font-weight="500">${escapeXml(copy.role)}</text>
    <text x="600" y="545" text-anchor="middle" fill="#b6c8ca" font-family="Consolas, monospace" font-size="16" letter-spacing=".5">${escapeXml(focus)}</text>
  </svg>`;
}

await mkdir(outputDir, { recursive: true });
for (const [locale, copy] of [['en', en], ['az', az]]) {
  await sharp(Buffer.from(imageMarkup(copy))).png({ compressionLevel: 9 }).toFile(`${outputDir}portfolio-${locale}-v2.png`);
}
