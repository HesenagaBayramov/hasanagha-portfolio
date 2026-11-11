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

The contact form uses Web3Forms. Set `PUBLIC_WEB3FORMS_ACCESS_KEY` in the local environment or Vercel project settings to enable its Send button. The key is public in the client bundle by Web3Forms design. Before launch, verify the Web3Forms account recipient, retention setting, allowed `vercel.app` address, and actual inbox delivery. No live delivery has been tested yet.

Place the current, user-approved CV at `public/cv/hasanagha-bayramov.pdf`. Until that file exists, the hero shows a disabled CV action and publishes no download link.

The build is static and needs no Vercel adapter. Configure Vercel with `npm run build` and output directory `dist` if automatic Astro detection is unavailable. Content lives in `src/data/en.ts` and `src/data/az.ts`; verified project and certificate links live in `src/data/projects.ts` and `src/data/certificates.ts`.

## Audio credit

The optional Terminal typing audio is adapted from [IBM M2 sound](https://commons.wikimedia.org/wiki/File:IBM_M2_sound.ogg) by Anonimski, released under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). It is stored locally as a small MP3 and starts muted.
