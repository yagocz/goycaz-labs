import { defineConfig } from 'astro/config';

// Deploy target controls the base path:
//   - default (goycazlabs.com on Cloudflare):  served at root  → base '/'
//   - GitHub Pages project site:        served at /goycaz-labs/  (set DEPLOY_TARGET=ghpages)
const ghpages = process.env.DEPLOY_TARGET === 'ghpages';

export default defineConfig({
  site: ghpages ? 'https://yagocz.github.io' : 'https://goycazlabs.com',
  base: ghpages ? '/goycaz-labs' : '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
