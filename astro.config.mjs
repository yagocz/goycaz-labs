import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// SSR sobre Node: el sitio corre como proceso bajo pm2 y se expone por
// cloudflared, igual que el resto de los proyectos. El adapter 'standalone'
// levanta su propio servidor HTTP (puerto via env PORT/HOST).
export default defineConfig({
  site: 'https://goycazlabs.com',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
