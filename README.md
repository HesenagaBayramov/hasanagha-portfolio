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

The current CV is available from the hero's Download CV action at `/cv/hasanagha-bayramov.pdf` on both language routes. Replace `public/cv/hasanagha-bayramov.pdf` when the owner updates the CV; the action stays disabled if the file is absent.

The build is static and needs no Vercel adapter. Configure Vercel with `npm run build` and output directory `dist` if automatic Astro detection is unavailable. Home content lives in `src/data/en.ts` and `src/data/az.ts`; case-study copy lives in `src/data/projectPages.ts`. Verified project and certificate links live in `src/data/projects.ts` and `src/data/certificates.ts`.

The Astro sitemap integration writes `/sitemap-index.xml` and localized page entries at build time; `/robots.txt` points to the index. The shared layout includes the Google Search Console URL-prefix verification tag, which must remain in place to retain ownership verification. Favicon source is `public/favicon.svg`, with 48 px PNG and 180 px Apple touch icon versions generated from the same artwork. Update the configured production origin in `astro.config.mjs`, the shared layout, and the Search Console property if the site moves to another domain.

The CampusSecure Projects index shows the real login screen supplied by the owner. Its case study describes only documented repository behavior and includes three cropped captures from isolated local lab runs. The captures open in an in-page gallery with previous/next controls, keyboard navigation, and a zoom toggle. Session cookies, CSRF values, and local IP addresses are masked in the published captures; the relevant request paths, response codes, and results remain visible. No demonstration video is published yet.

English and Azerbaijani share previews are committed as PNGs under `public/og/`. If the name, role, or focus copy changes, run `npm run social:generate` to regenerate both images from the localized content. The page metadata in `src/layouts/SiteLayout.astro` uses the production origin; update it if the public domain changes.

## Audio credit

The Terminal typing audio is an original synthesized digital text effect stored locally as a small MP3. It plays when the visitor opens Terminal, can be muted with its sound button, and does not play before that click.
