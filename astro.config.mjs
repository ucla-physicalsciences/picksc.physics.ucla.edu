// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Build each page as one file (team.html, software/osiris.html). GitHub Pages serves /team from team.html,
  // and the old site's addresses (/team.html) then reach the new pages directly.
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()]
  }
});