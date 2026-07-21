// Central site config + a base-aware URL helper so links work under the
// GitHub Pages sub-path (/goycaz-labs/) and under a custom domain (/) alike.
const RAW_BASE = import.meta.env.BASE_URL; // e.g. "/goycaz-labs/" or "/"

export function url(path = '/'): string {
  const b = RAW_BASE.replace(/\/$/, '');
  if (path === '/' || path === '') return b + '/';
  return b + (path.startsWith('/') ? path : '/' + path);
}

// ── Contact details — REEMPLAZA por los reales ──────────────
export const WHATSAPP = '51999999999';                 // sin +, sin espacios
export const WHATSAPP_PRETTY = '+51 999 999 999';
export const EMAIL = 'hola@goycazlabs.com';
export const INSTAGRAM = 'goycaz.labs';
export const INSTAGRAM_URL = 'https://instagram.com/goycaz.labs';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/yagocaldas';

export const NAV = [
  { href: '/servicios', es: 'Servicios', en: 'Services' },
  { href: '/casos', es: 'Casos', en: 'Work' },
  { href: '/precios', es: 'Precios', en: 'Pricing' },
  { href: '/nosotros', es: 'Nosotros', en: 'About' },
  { href: '/contacto', es: 'Contacto', en: 'Contact' },
];
