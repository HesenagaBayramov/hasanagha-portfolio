import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hasanaghas.com',
  output: 'static',
  trailingSlash: 'never',
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [sitemap({
    i18n: { defaultLocale: 'en', locales: { en: 'en', az: 'az' } }
  })]
});
