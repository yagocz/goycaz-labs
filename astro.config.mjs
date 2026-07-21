import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages under a project repo → served at /goycaz-labs/.
// When a custom domain is set, change `site` and set `base: '/'`.
export default defineConfig({
  site: 'https://yagocz.github.io',
  base: '/goycaz-labs',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
