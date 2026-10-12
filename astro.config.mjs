// @ts-check
import { defineConfig } from 'astro/config';
import { readdir, readFile, mkdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

import tailwindcss from '@tailwindcss/vite';

// Also serve each page at its trailing-slash address (team.html → team/index.html). Browsers that saw the
// first deploy cached GitHub's permanent redirect from /team to /team/, and would otherwise get a 404.
const slashCopies = {
  name: 'slash-copies',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const root = dir.pathname;
      for (const f of await readdir(root, { recursive: true })) {
        if (!f.endsWith('.html') || /(^|\/)(index|404)\.html$/.test(f)) continue;
        if ((await readFile(join(root, f), 'utf8')).includes('http-equiv="refresh"')) continue; // forwarding page
        const target = join(root, f.slice(0, -5));
        await mkdir(target, { recursive: true });
        await copyFile(join(root, f), join(target, 'index.html'));
      }
    },
  },
};

// https://astro.build/config
export default defineConfig({
  // Build each page as one file (team.html, software/osiris.html). GitHub Pages serves /team from team.html,
  // and the old site's addresses (/team.html) then reach the new pages directly.
  build: { format: 'file' },
  integrations: [slashCopies],
  vite: {
    plugins: [tailwindcss()]
  }
});
