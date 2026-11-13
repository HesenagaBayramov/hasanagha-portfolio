import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { en } from '../src/data/en.ts';
import { az } from '../src/data/az.ts';

const outputDir = fileURLToPath(new URL('../public/og/', import.meta.url));
const escapeXml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function imageMarkup(copy) {
  const [firstName, ...lastName] = copy.name.split(' ');
  const focus = copy.eyebrow.split('  /  ').slice(0, 2).join('  /  ');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#10222d"/><stop offset="1" stop-color="#0b1520"/></linearGradient>
      <radialGradient id="glow"><stop stop-color="#85b5b6" stop-opacity=".11"/><stop offset="1" stop-color="#85b5b6" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#0b1520"/>
    <rect x="24" y="24" width="1152" height="582" rx="24" fill="url(#background)" stroke="#2b4750" stroke-width="2"/>
    <circle cx="982" cy="320" r="264" fill="url(#glow)"/>
    <circle cx="985" cy="320" r="170" fill="none" stroke="#2b4750" stroke-width="2"/>
    <circle cx="985" cy="320" r="130" fill="#12232d" stroke="#3a555c" stroke-width="2"/>
    <path d="M985 133v36M985 471v36M798 320h36M1136 320h36" stroke="#85b5b6" stroke-width="2" opacity=".45"/>
    <text x="985" y="347" text-anchor="middle" fill="#e8eff0" font-family="Arial, sans-serif" font-size="86" font-weight="700">HB.</text>
    <circle cx="79" cy="91" r="6" fill="#79c998"/>
    <text x="100" y="98" fill="#85b5b6" font-family="Consolas, monospace" font-size="18" letter-spacing="3">PORTFOLIO</text>
    <path d="M72 129h642" stroke="#2b4750" stroke-width="2"/>
    <text x="72" y="269" fill="#e8eff0" font-family="Arial, sans-serif" font-size="75" font-weight="700" letter-spacing="-2">${escapeXml(firstName)}</text>
    <text x="72" y="352" fill="#e8eff0" font-family="Arial, sans-serif" font-size="75" font-weight="700" letter-spacing="-2">${escapeXml(lastName.join(' '))}</text>
    <text x="75" y="421" fill="#85b5b6" font-family="Arial, sans-serif" font-size="28" font-weight="500">${escapeXml(copy.role)}</text>
    <path d="M72 484h642" stroke="#2b4750" stroke-width="2"/>
    <text x="74" y="539" fill="#b6c8ca" font-family="Consolas, monospace" font-size="16" letter-spacing=".5">${escapeXml(focus)}</text>
  </svg>`;
}

await mkdir(outputDir, { recursive: true });
for (const [locale, copy] of [['en', en], ['az', az]]) {
  await sharp(Buffer.from(imageMarkup(copy))).png({ compressionLevel: 9 }).toFile(`${outputDir}portfolio-${locale}.png`);
}
