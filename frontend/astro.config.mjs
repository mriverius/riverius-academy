// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // IMPORTANTE: cambia esto por tu dominio real antes del deploy.
  // El sitemap, el canonical y las metas Open Graph dependen de este valor.
  site: 'https://riverius.academy',
  integrations: [sitemap()],
});
