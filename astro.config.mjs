import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  devToolbar: {
    enabled: false
  },
  site: 'https://mohakcodes.github.io',
  base: '/Portfolio/',
});