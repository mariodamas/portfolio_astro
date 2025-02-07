// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://portfolio_astro.github.io',
  base: 'portfolio_astro',
});