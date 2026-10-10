import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rzh-espacesverts.ch',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('mentions-legales') })],
  build: { format: 'directory' },
});
