// Shared content for services and cases, reused across pages.
// SVG icon markup is rendered with set:html.

export interface Service {
  icon: string;
  es: string; en: string;
  descEs: string; descEn: string;
  bulletsEs: string[]; bulletsEn: string[];
  price: string;
}

export const services: Service[] = [
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M8 2h8M9 14h.01M15 14h.01"/></svg>',
    es: 'Agentes de IA', en: 'AI agents',
    descEs: 'Asistentes que atienden, venden y ejecutan tareas 24/7 — en WhatsApp, tu web o dentro de tu operación.',
    descEn: 'Assistants that answer, sell and run tasks 24/7 — on WhatsApp, your website, or inside your operation.',
    bulletsEs: ['Atención y ventas por WhatsApp', 'Integrados a tus sistemas reales', 'Con permisos y trazabilidad'],
    bulletsEn: ['Support & sales on WhatsApp', 'Wired into your real systems', 'Permissions & traceability'],
    price: 'desde US$ 600',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
    es: 'IA sobre tus datos', en: 'AI over your data',
    descEs: '“Habla con tus datos”: pregunta en lenguaje natural y obtén respuestas de tus bases y documentos en segundos.',
    descEn: '“Talk to your data”: ask in plain language and get answers from your databases and documents in seconds.',
    bulletsEs: ['RAG sobre tus documentos y BD', 'Control de acceso por rol', 'En la nube o en tu servidor'],
    bulletsEn: ['RAG over your docs & databases', 'Access control by role', 'Cloud or on your own server'],
    price: 'desde US$ 6,000',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.5 3.5 6 3.5 9s-1.1 6.5-3.5 9c-2.4-2.5-3.5-6-3.5-9s1.1-6.5 3.5-9z"/></svg>',
    es: 'Desarrollo web', en: 'Web development',
    descEs: 'Sitios y plataformas web modernas, rápidas y a medida: landings, e-commerce, portales y paneles.',
    descEn: 'Modern, fast, custom websites and platforms: landing pages, e-commerce, portals and dashboards.',
    bulletsEs: ['Diseño moderno y responsive', 'E-commerce y pagos (Yape, tarjeta)', 'Paneles y portales a medida'],
    bulletsEn: ['Modern, responsive design', 'E-commerce & payments (Yape, card)', 'Custom dashboards & portals'],
    price: 'desde US$ 800',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/></svg>',
    es: 'Apps móviles', en: 'Mobile apps',
    descEs: 'Apps Android e iOS con Flutter — incluso con hardware: impresión, pagos y kioscos de autoservicio.',
    descEn: 'Android and iOS apps with Flutter — even with hardware: printing, payments and self-service kiosks.',
    bulletsEs: ['Una base para Android e iOS', 'Integración con hardware y pagos', 'Kioscos y puntos de venta'],
    bulletsEn: ['One codebase, Android & iOS', 'Hardware & payment integration', 'Kiosks & points of sale'],
    price: 'desde US$ 1,500',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/></svg>',
    es: 'Infraestructura & DevOps', en: 'Infrastructure & DevOps',
    descEs: 'De “manual y frágil” a estable, reproducible y documentado. Alta disponibilidad, nube u on-premise.',
    descEn: 'From “manual and fragile” to stable, reproducible and documented. High availability, cloud or on-prem.',
    bulletsEs: ['Despliegue automático (CI/CD)', 'Alta disponibilidad y respaldos', 'Monitoreo y diagnóstico de caídas'],
    bulletsEn: ['Automated deploys (CI/CD)', 'High availability & backups', 'Monitoring & incident diagnosis'],
    price: 'a medida',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8M20 4v4h-4M20 12a8 8 0 0 1-13.7 5.6L4 16M4 20v-4h4"/></svg>',
    es: 'Modernización de sistemas', en: 'Legacy modernization',
    descEs: 'Rescatamos, documentamos y modernizamos sistemas viejos que nadie entiende — sin romper lo que funciona.',
    descEn: 'We rescue, document and modernize old systems nobody understands — without breaking what works.',
    bulletsEs: ['Ingeniería inversa y documentación', 'Migraciones sin downtime', 'Modernización por fases'],
    bulletsEn: ['Reverse engineering & docs', 'Zero-downtime migrations', 'Modernization in phases'],
    price: 'a medida',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 6H18M6 8.5v7A2.5 2.5 0 0 0 8.5 18h7"/></svg>',
    es: 'Automatización', en: 'Automation',
    descEs: 'Conectamos tus sistemas y automatizamos procesos manuales — facturación, back-office y reportes — con IA.',
    descEn: 'We connect your systems and automate manual work — invoicing, back-office and reports — with AI.',
    bulletsEs: ['Integración entre tus sistemas', 'Facturación y reportes automáticos', 'Ahorro de horas medible'],
    bulletsEn: ['Integration across your systems', 'Automated invoicing & reports', 'Measurable hours saved'],
    price: 'desde US$ 400',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>',
    es: 'Soporte & mantenimiento', en: 'Support & maintenance',
    descEs: 'Planes mensuales: mantenemos, actualizamos y respondemos cuando algo falla. Tú te olvidas del tema.',
    descEn: 'Monthly plans: we maintain, update and respond when something breaks. You stop worrying about it.',
    bulletsEs: ['Actualizaciones y mejoras', 'Respuesta a incidentes con SLA', 'Reportes mensuales'],
    bulletsEn: ['Updates & improvements', 'Incident response with SLA', 'Monthly reports'],
    price: 'US$ 150–500/mes',
  },
];

export interface CaseStudy {
  tagEs: string; tagEn: string;
  es: string; en: string;
  problemEs: string; problemEn: string;
  approachEs: string; approachEn: string;
  resultEs: string; resultEn: string;
  metrics: { big: string; capEs: string; capEn: string }[];
}

export const cases: CaseStudy[] = [
  {
    tagEs: 'Minería · IA sobre datos', tagEn: 'Mining · AI over data',
    es: 'Un asistente de IA sobre 20 años de datos', en: 'An AI assistant over 20 years of data',
    problemEs: 'El equipo perdía días buscando información en dos décadas de reportes ambientales y normativa dispersa. Cada consulta dependía de una persona y de archivos que casi nadie sabía leer.',
    problemEn: 'The team lost days digging through two decades of environmental reports and scattered regulation. Every query depended on one person and files almost nobody could read.',
    approachEs: 'Construimos un asistente con RAG sobre sus datos y documentos, desplegado en su propia infraestructura, con control de acceso por rol y trazabilidad de cada respuesta.',
    approachEn: 'We built a RAG assistant over their data and documents, deployed on their own infrastructure, with role-based access and traceability on every answer.',
    resultEs: 'Hoy cualquier persona autorizada pregunta en lenguaje natural y obtiene la respuesta con su fuente, en segundos — sin salir de la empresa.',
    resultEn: 'Now any authorized person asks in plain language and gets the answer with its source, in seconds — without data leaving the company.',
    metrics: [
      { big: 'Días → segundos', capEs: 'Tiempo para obtener una respuesta', capEn: 'Time to get an answer' },
      { big: '20 años', capEs: 'De datos consultables', capEn: 'Of queryable data' },
      { big: 'On-prem', capEs: 'Los datos nunca salen', capEn: 'Data never leaves' },
    ],
  },
  {
    tagEs: 'Retail · Apps & hardware', tagEn: 'Retail · Apps & hardware',
    es: 'Kioscos de autoservicio con facturación', en: 'Self-service kiosks with e-invoicing',
    problemEs: 'En horas pico se formaban colas y se perdían ventas por depender del cajero. La facturación manual sumaba errores y tiempo.',
    problemEn: 'At peak hours queues formed and sales were lost by depending on the cashier. Manual invoicing added errors and time.',
    approachEs: 'Desarrollamos kioscos táctiles con Flutter integrados a hardware real: pedidos, cobros con tarjeta y QR, e impresión de comprobantes válidos ante SUNAT.',
    approachEn: 'We built touch kiosks with Flutter integrated to real hardware: orders, card and QR payments, and printed SUNAT-valid receipts.',
    resultEs: 'El local atiende y cobra 24/7 sin necesidad de un cajero en cada punto, con comprobantes electrónicos automáticos.',
    resultEn: 'The store serves and charges 24/7 with no cashier needed at each point, with automatic electronic receipts.',
    metrics: [
      { big: '24/7', capEs: 'Atención y venta sin cajero', capEn: 'Service & sales with no cashier' },
      { big: 'SUNAT', capEs: 'Facturación electrónica válida', capEn: 'Valid electronic invoicing' },
      { big: 'Tarjeta + QR', capEs: 'Pagos integrados', capEn: 'Integrated payments' },
    ],
  },
  {
    tagEs: 'Operaciones · Infraestructura', tagEn: 'Operations · Infrastructure',
    es: 'Deploys frágiles → automáticos y estables', en: 'Fragile deploys → automated & stable',
    problemEs: 'Cada release era manual, distinto y con riesgo de tumbar producción. Nadie quería desplegar un viernes.',
    problemEn: 'Every release was manual, different and risky enough to take down production. Nobody wanted to deploy on a Friday.',
    approachEs: 'Estandarizamos el despliegue de una flota de apps: CI/CD reproducible, alta disponibilidad, respaldos y monitoreo con diagnóstico de caídas.',
    approachEn: 'We standardized deployment for a fleet of apps: reproducible CI/CD, high availability, backups and monitoring with incident diagnosis.',
    resultEs: 'Los releases que antes daban miedo ahora salen en un comando, y el sistema se sostiene solo con visibilidad de lo que pasa.',
    resultEn: 'Releases that used to be scary now go out in one command, and the system holds up on its own with full visibility.',
    metrics: [
      { big: '99.9%', capEs: 'Uptime sostenido', capEn: 'Sustained uptime' },
      { big: '1 comando', capEs: 'Para desplegar', capEn: 'To deploy' },
      { big: 'CI/CD', capEs: 'Reproducible y documentado', capEn: 'Reproducible & documented' },
    ],
  },
];
