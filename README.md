# Hasanagha Bayramov portfolio

Static, bilingual Astro + TypeScript portfolio based on the approved Figma design. English is at `/`; Azerbaijani is at `/az`. Project overviews are at `/projects` and `/az/projects`, with localized CampusSecure case studies one route deeper. Dark mode opens by default, and an explicit theme choice is saved locally.

## Local development

Requires Node.js 22.23.4 or newer (or a supported 24.x release).

```sh
npm install
npm run dev
npm run check
npm run build
```

The contact form uses Web3Forms. Set `PUBLIC_WEB3FORMS_ACCESS_KEY` in the local environment or Vercel project settings to enable its Send button. The key is public in the client bundle by Web3Forms design. The owner reports that the live form works; account recipient, retention, and allowed host settings should still be reviewed when needed.

The hero's View CV action opens `/cv/hasanagha-bayramov.pdf` in a new tab on both language routes; visitors can download it from their browser's PDF viewer. Replace `public/cv/hasanagha-bayramov.pdf` when the owner updates the CV; the action stays disabled if the file is absent.

The build is static and needs no Vercel adapter. Configure Vercel with `npm run build` and output directory `dist` if automatic Astro detection is unavailable. Home content lives in `src/data/en.ts` and `src/data/az.ts`; case-study copy lives in `src/data/projectPages.ts`. Verified project and certificate links live in `src/data/projects.ts` and `src/data/certificates.ts`.

Unknown URLs use `src/pages/404.astro`, which Astro builds as `dist/404.html` for Vercel's static 404 fallback. The page follows the site's theme, offers home and project links, and shows Azerbaijani copy for missing `/az/...` paths. It is excluded from the sitemap and marked `noindex`.

The production origin is `https://hasanaghas.com`, configured once in `astro.config.mjs`. Astro uses it for canonical, alternate-language, Open Graph, and sitemap URLs; `/robots.txt` points to the generated `/sitemap-index.xml`. The shared layout includes the new domain's Google Search Console verification tag. Vercel Project Settings → Domains serves the apex domain as Production and permanently redirects `www.hasanaghas.com` to it with 308. The former `hasanaghabayramov.vercel.app` address was intentionally removed; it is not part of the public site. Favicon source is `public/favicon.svg`; the single linked search/browser favicon is its 96 px PNG version, and the Apple touch icon uses the same artwork. Google Search may take days or weeks to recrawl the homepage and display the favicon.

The domain homepage provides `WebSite` JSON-LD with the preferred Google site name `Hasanagha Bayramov`; all routes publish the same `og:site_name`. This is a preference signal, not a guarantee that Google will display it.

Vercel applies the security headers in `vercel.json` to all responses. The CSP allows local scripts, styles, fonts, images, and Terminal audio, and permits contact-form requests only to `https://api.web3forms.com`. Astro's processed scripts are emitted as external files so Vercel's build-time Analytics and Speed Insights settings do not invalidate inline-script hashes. The two small early head scripts retain exact CSP hashes. `npm run build` automatically runs `scripts/verify-security-headers.mjs` and fails if a future change adds an unapproved inline script or changes either hash. Vercel's existing HSTS header is left untouched.

The CampusSecure Projects index shows the real login screen supplied by the owner. Its case study describes only documented repository behavior and includes three cropped captures from isolated local lab runs. The captures open in an in-page gallery with previous/next controls, keyboard navigation, and a zoom toggle. Session cookies, CSRF values, and local IP addresses are masked in the published captures; the relevant request paths, response codes, and results remain visible. No demonstration video is published yet.

English and Azerbaijani share previews are committed as PNGs under `public/og/`. If the name, role, or focus copy changes, run `npm run social:generate` to regenerate both images from the localized content. The shared layout derives absolute preview URLs from Astro's configured production origin.

## Audio credit

The Terminal typing audio is an original synthesized digital text effect stored locally as a small MP3. It plays when the visitor opens Terminal, can be muted with its sound button, and does not play before that click.
