# Hasanagha Bayramov portfolio

Static, bilingual Astro + TypeScript portfolio based on the approved Figma design. English is at `/`; Azerbaijani is at `/az`. Dark mode opens by default, and an explicit theme choice is saved locally.

## Local development

Requires Node.js 22.23.4 or newer (or a supported 24.x release).

```sh
npm install
npm run dev
npm run check
npm run build
```

The contact form uses Web3Forms. Set `PUBLIC_WEB3FORMS_ACCESS_KEY` in the local environment or Vercel project settings to enable its Send button. The key is public in the client bundle by Web3Forms design. The owner reports that the live form works; account recipient, retention, and allowed host settings should still be reviewed when needed.

Place the current, user-approved CV at `public/cv/hasanagha-bayramov.pdf`. Until that file exists, the hero shows a disabled CV action and publishes no download link.

The build is static and needs no Vercel adapter. Configure Vercel with `npm run build` and output directory `dist` if automatic Astro detection is unavailable. Content lives in `src/data/en.ts` and `src/data/az.ts`; verified project and certificate links live in `src/data/projects.ts` and `src/data/certificates.ts`.

English and Azerbaijani share previews are committed as PNGs under `public/og/`. If the name, role, or focus copy changes, run `npm run social:generate` to regenerate both images from the localized content. The page metadata in `src/layouts/SiteLayout.astro` uses the production origin; update it if the public domain changes.

## Audio credit

The Terminal typing audio is an original synthesized digital text effect stored locally as a small MP3. It plays when the visitor opens Terminal, can be muted with its sound button, and does not play before that click.
