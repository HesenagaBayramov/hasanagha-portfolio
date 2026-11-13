import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hasanaghabayramov.vercel.app',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap({
    i18n: { defaultLocale: 'en', locales: { en: 'en', az: 'az' } }
  })]
});
