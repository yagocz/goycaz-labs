# GoyCaz Labs — sitio web

Sitio corporativo de **GoyCaz Labs** (IA, software e infraestructura que sí llegan a producción).
Construido con [Astro](https://astro.build) · multi-página · bilingüe ES/EN · estático · sin dependencias externas en runtime (fuentes embebidas).

## Estructura

```
src/
  layouts/Layout.astro     ← <head>, header, footer, script global (idioma, menú, animaciones)
  components/              ← Header, Footer, CtaBand
  pages/                   ← index, servicios, casos, precios, nosotros, contacto, 404
  lib/site.ts             ← datos de contacto + helper de rutas (base URL)
  lib/content.ts          ← contenido de servicios y casos (una sola fuente de verdad)
  styles/global.css       ← sistema de diseño + fuentes (Archivo + JetBrains Mono) embebidas
public/favicon.svg
```

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321/goycaz-labs
npm run build      # genera dist/
npm run preview    # sirve dist/ localmente
```

## Despliegue

Automático a **GitHub Pages** en cada `push` a `main`, vía `.github/workflows/deploy.yml`.

## Personalizar

- **Datos de contacto** (WhatsApp, correo, Instagram): editar `src/lib/site.ts`.
- **Servicios / casos / precios**: editar `src/lib/content.ts` y `src/pages/precios.astro`.
- **Dominio propio**: crear `public/CNAME` con el dominio, en `astro.config.mjs` poner
  `site: 'https://tudominio.com'` y `base: '/'`, y configurar el DNS hacia GitHub Pages.
