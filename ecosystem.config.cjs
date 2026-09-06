// Procesos pm2 de GoyCaz Labs.
//
//   pm2 start ecosystem.config.cjs
//   pm2 save
//
// El sitio corre como Astro SSR (adapter @astrojs/node, modo standalone) y se
// expone por cloudflared, igual que el resto de los proyectos.
//
// Usar 127.0.0.1 (no "localhost"): el adapter escucha solo en IPv4, y
// "localhost" puede resolver a ::1 (IPv6) -> connection refused desde el tunel.
module.exports = {
  apps: [
    {
      name: 'goycazlabs-web',
      namespace: 'goycazlabs',
      script: 'dist/server/entry.mjs',
      cwd: '/Users/devapple1.dominiotech/goycaz-labs',
      env: {
        HOST: '127.0.0.1',
        PORT: 8796,
        NODE_ENV: 'production',
      },
    },
    {
      name: 'cloudflared-goycazlabs',
      namespace: 'goycazlabs',
      script: '/opt/homebrew/bin/cloudflared',
      args: 'tunnel --config /Users/devapple1.dominiotech/.cloudflared/config-goycazlabs.yml run',
      autorestart: true,
    },
  ],
};
