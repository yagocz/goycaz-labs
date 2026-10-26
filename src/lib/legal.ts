// Contenido de las páginas legales (privacidad, eliminación de datos, términos).
// Mismo patrón bilingüe que content.ts: los datos viven acá y el componente
// LegalDoc.astro los pinta. Los textos admiten HTML inline (<strong>, <a>,
// <span class="mono">), porque el switch ES/EN del Layout intercambia innerHTML.
//
// Regla del proyecto (NEGOCIO.md §5): nada inventado. Lo que se declara acá
// es lo que el sitio hace de verdad — verificado en el código:
//   · Sin cookies, sin analítica, sin píxel de Meta ni de nadie.
//   · Solo dos claves en localStorage: goycaz-lang y goycaz-theme.
//   · El formulario de contacto NO envía a ningún servidor: abre wa.me.
// Si algún día se agrega analítica o un píxel, hay que actualizar §02 y §03
// de privacidad ANTES de activarlo (Meta compara lo declarado con lo real).

import { EMAIL, WHATSAPP_PRETTY } from './site';

export interface LegalSection {
  id: string;
  es: string; en: string;                 // título de la sección
  bodyEs: string[]; bodyEn: string[];     // párrafos
  listEs?: string[]; listEn?: string[];   // viñetas opcionales
  noteEs?: string; noteEn?: string;       // caja destacada opcional
  linkHref?: string;                      // ruta interna (pasa por url())
  linkEs?: string; linkEn?: string;
}

export interface LegalDoc {
  labelEs: string; labelEn: string;       // eyebrow
  h1Es: string; h1En: string;             // admite <span class="ac">
  leadEs: string; leadEn: string;
  titleEs: string; titleEn: string;       // <title>
  description: string;                    // meta description
  sections: LegalSection[];
}

// Fecha de última revisión de los tres documentos.
export const LEGAL_UPDATED_ES = '8 de septiembre de 2026';
export const LEGAL_UPDATED_EN = 'September 8, 2026';

// Razón social / responsable, repetido en los tres documentos.
export const LEGAL_OWNER = 'Ernesto Yago Caldas Zapata y Nelson Fabrizzio Pereira';
export const LEGAL_OWNER_EN = 'Ernesto Yago Caldas Zapata and Nelson Fabrizzio Pereira';
export const LEGAL_CITY_ES = 'Miraflores, Lima, Perú';
export const LEGAL_CITY_EN = 'Miraflores, Lima, Peru';

// ── Privacidad ────────────────────────────────────────────────────────────
export const privacy: LegalDoc = {
  labelEs: 'Privacidad', labelEn: 'Privacy',
  h1Es: 'Qué hacemos con tus <span class="ac">datos</span>.',
  h1En: 'What we do with your <span class="ac">data</span>.',
  leadEs: 'En una frase: este sitio no te rastrea. No usa cookies, no tiene analítica ni píxel de publicidad. Lo único que sabemos de ti es lo que tú decidas escribirnos.',
  leadEn: 'In one line: this site does not track you. No cookies, no analytics, no advertising pixel. The only thing we know about you is what you choose to write to us.',
  titleEs: 'Política de privacidad — GoyCaz Labs',
  titleEn: 'Privacy policy — GoyCaz Labs',
  description: 'Política de privacidad de GoyCaz Labs: qué datos recogemos, para qué los usamos, con quién los compartimos y cómo pedir que los eliminemos.',
  sections: [
    {
      id: 'responsable',
      es: 'Quién responde por tus datos', en: 'Who is responsible for your data',
      bodyEs: [
        `<strong>GoyCaz Labs</strong> es la marca comercial de ${LEGAL_OWNER}, con base en ${LEGAL_CITY_ES}. Somos responsables del tratamiento de los datos personales que recibimos por este sitio y por nuestros canales de contacto.`,
        `Para cualquier tema de datos personales escribe a <a href="mailto:${EMAIL}">${EMAIL}</a> o al WhatsApp ${WHATSAPP_PRETTY}. Responde una persona, no un formulario automático.`,
      ],
      bodyEn: [
        `<strong>GoyCaz Labs</strong> is the trade name of ${LEGAL_OWNER_EN}, based in ${LEGAL_CITY_EN}. We are the controller of the personal data we receive through this website and our contact channels.`,
        `For anything related to personal data, write to <a href="mailto:${EMAIL}">${EMAIL}</a> or WhatsApp ${WHATSAPP_PRETTY}. A person answers, not an automated form.`,
      ],
      noteEs: 'Esta política cubre el sitio <strong>www.goycazlabs.com</strong> y las conversaciones que tengas con nosotros por WhatsApp, correo o redes. Si contratas un servicio, el contrato de ese proyecto añade sus propias reglas sobre los datos a los que nos des acceso.',
      noteEn: 'This policy covers the site <strong>www.goycazlabs.com</strong> and any conversation you have with us over WhatsApp, email or social media. If you hire us, that project’s contract adds its own rules about the data you give us access to.',
    },
    {
      id: 'que-datos',
      es: 'Qué datos recogemos', en: 'What data we collect',
      bodyEs: [
        'Este sitio <strong>no tiene registro ni inicio de sesión</strong>. No hay cuentas de usuario, no pedimos documento de identidad y no procesamos pagos en la web.',
        'Solo llega a nosotros lo que tú nos envías, por uno de estos caminos:',
      ],
      bodyEn: [
        'This site has <strong>no sign-up and no login</strong>. There are no user accounts, we don’t ask for ID documents, and we don’t process payments on the web.',
        'The only data that reaches us is what you send us, through one of these paths:',
      ],
      listEs: [
        '<strong>Formulario de contacto.</strong> Pide nombre, negocio, qué necesitas y un mensaje. Al pulsar “Enviar por WhatsApp” <strong>no se envía nada a un servidor nuestro</strong>: se abre WhatsApp en tu dispositivo con el mensaje ya escrito. Los datos nos llegan solo si tú pulsas enviar dentro de WhatsApp.',
        '<strong>WhatsApp.</strong> Tu número, el nombre de tu perfil y el contenido de la conversación.',
        '<strong>Correo.</strong> Tu dirección y el contenido del correo.',
        '<strong>Instagram y LinkedIn.</strong> Lo que la propia red nos muestra de tu perfil público cuando nos escribes.',
        '<strong>Datos técnicos de conexión.</strong> Como cualquier servidor web, se procesan la dirección IP, el navegador y la página solicitada — solo para entregarte la página y mantener el servicio en pie y protegido.',
      ],
      listEn: [
        '<strong>Contact form.</strong> It asks for name, business, what you need and a message. When you press “Send via WhatsApp”, <strong>nothing is sent to a server of ours</strong>: WhatsApp opens on your device with the message pre-written. It reaches us only if you press send inside WhatsApp.',
        '<strong>WhatsApp.</strong> Your number, your profile name and the content of the conversation.',
        '<strong>Email.</strong> Your address and the content of the message.',
        '<strong>Instagram and LinkedIn.</strong> Whatever the platform shows us of your public profile when you write to us.',
        '<strong>Technical connection data.</strong> Like any web server, IP address, browser and requested page are processed — only to serve you the page and keep the service up and protected.',
      ],
      noteEs: 'Guardamos <strong>dos preferencias en tu propio navegador</strong> (localStorage): el idioma que elegiste (<span class="mono">goycaz-lang</span>) y si prefieres tema claro u oscuro (<span class="mono">goycaz-theme</span>). No son cookies, no salen de tu dispositivo y no nos llegan. Las borras limpiando los datos del sitio en tu navegador.',
      noteEn: 'We store <strong>two preferences in your own browser</strong> (localStorage): the language you picked (<span class="mono">goycaz-lang</span>) and whether you prefer light or dark theme (<span class="mono">goycaz-theme</span>). They are not cookies, they never leave your device and they never reach us. Clear the site data in your browser to delete them.',
    },
    {
      id: 'lo-que-no',
      es: 'Lo que no hacemos', en: 'What we don’t do',
      bodyEs: [
        'Vale la pena decirlo explícito, porque casi todos los sitios sí lo hacen:',
      ],
      bodyEn: [
        'Worth stating explicitly, because most sites do the opposite:',
      ],
      listEs: [
        'No usamos <strong>cookies</strong>, ni propias ni de terceros.',
        'No tenemos <strong>analítica web</strong> (Google Analytics ni equivalente).',
        'No tenemos el <strong>píxel de Meta</strong> ni el de ninguna otra plataforma publicitaria instalado en el sitio.',
        'No construimos perfiles publicitarios con tu navegación.',
        'No compramos, vendemos ni alquilamos bases de datos personales.',
        'No pedimos datos sensibles. Te agradecemos que no nos envíes información de salud, financiera o de terceros que no sea necesaria para lo que nos pides.',
      ],
      listEn: [
        'We use no <strong>cookies</strong>, first-party or third-party.',
        'We have no <strong>web analytics</strong> (no Google Analytics or equivalent).',
        'We have no <strong>Meta pixel</strong> — or any other advertising platform’s pixel — installed on the site.',
        'We don’t build advertising profiles from your browsing.',
        'We don’t buy, sell or rent personal databases.',
        'We don’t ask for sensitive data. Please don’t send us health, financial or third-party information that isn’t needed for what you’re asking.',
      ],
      noteEs: 'Si algún día activamos analítica o un píxel, lo diremos <strong>en esta página antes de hacerlo</strong>, no después.',
      noteEn: 'If we ever enable analytics or a pixel, we will say so <strong>on this page before doing it</strong>, not after.',
    },
    {
      id: 'finalidad',
      es: 'Para qué los usamos', en: 'What we use them for',
      bodyEs: ['Usamos lo que nos escribes únicamente para:'],
      bodyEn: ['We use what you write to us only to:'],
      listEs: [
        'Responder tu consulta y hacerte el diagnóstico gratuito de 10 minutos.',
        'Preparar y enviarte una propuesta con alcance, plazo y precio.',
        'Prestar, mantener y dar soporte a los servicios que contrates.',
        'Cumplir obligaciones legales, contables y tributarias cuando ya eres cliente.',
      ],
      listEn: [
        'Answer your enquiry and run the free 10-minute diagnosis.',
        'Prepare and send you a proposal with scope, timeline and price.',
        'Deliver, maintain and support the services you hire.',
        'Meet legal, accounting and tax obligations once you are a client.',
      ],
      noteEs: 'No tomamos decisiones automatizadas que te afecten y no usamos tus datos para segmentar publicidad. Si llegaste desde un anuncio nuestro en Facebook o Instagram, la plataforma nos entrega <strong>estadísticas agregadas</strong> — cuántas personas vieron el anuncio y cuántas escribieron — nunca tu identidad.',
      noteEn: 'We make no automated decisions that affect you, and we don’t use your data for ad targeting. If you arrived from one of our Facebook or Instagram ads, the platform gives us <strong>aggregate statistics</strong> — how many people saw the ad and how many wrote in — never your identity.',
    },
    {
      id: 'terceros',
      es: 'Con quién los compartimos', en: 'Who we share them with',
      bodyEs: [
        'No vendemos ni alquilamos datos personales. Compartimos lo mínimo necesario con los proveedores que hacen funcionar nuestra operación:',
      ],
      bodyEn: [
        'We don’t sell or rent personal data. We share the minimum necessary with the providers that keep our operation running:',
      ],
      listEs: [
        '<strong>WhatsApp (Meta Platforms).</strong> Es nuestro canal principal de conversación: tus mensajes pasan por su infraestructura y se rigen también por las políticas de Meta.',
        '<strong>Meta — Facebook e Instagram.</strong> Publicamos anuncios que llevan a WhatsApp. Meta trata los datos dentro de sus plataformas bajo su propia política; nosotros solo vemos el resultado agregado de la campaña.',
        '<strong>Google (Gmail).</strong> Nuestro correo corre en Gmail, así que los correos que nos envías se almacenan ahí.',
        '<strong>Cloudflare.</strong> Entrega y protege este sitio; procesa los datos técnicos de conexión descritos arriba.',
        '<strong>Autoridades competentes.</strong> Solo cuando una norma o una orden formal lo exija.',
      ],
      listEn: [
        '<strong>WhatsApp (Meta Platforms).</strong> Our main conversation channel: your messages travel through their infrastructure and are also governed by Meta’s policies.',
        '<strong>Meta — Facebook and Instagram.</strong> We run ads that lead to WhatsApp. Meta processes data inside its platforms under its own policy; we only see the aggregate campaign result.',
        '<strong>Google (Gmail).</strong> Our email runs on Gmail, so the emails you send us are stored there.',
        '<strong>Cloudflare.</strong> Delivers and protects this site; processes the technical connection data described above.',
        '<strong>Competent authorities.</strong> Only when a legal rule or formal order requires it.',
      ],
      noteEs: 'Estos proveedores pueden almacenar información en servidores fuera del Perú. Al escribirnos por esos canales, ese flujo transfronterizo es inevitable — es cómo funcionan WhatsApp y el correo. Si prefieres evitarlo, escríbenos por otro medio y lo coordinamos.',
      noteEn: 'These providers may store information on servers outside Peru. Writing to us through those channels makes that cross-border flow unavoidable — it’s how WhatsApp and email work. If you’d rather avoid it, tell us and we’ll arrange another channel.',
    },
    {
      id: 'plazos',
      es: 'Cuánto tiempo los conservamos', en: 'How long we keep them',
      bodyEs: ['No guardamos nada “por si acaso”:'],
      bodyEn: ['We don’t keep anything “just in case”:'],
      listEs: [
        '<strong>Consultas que no se convierten en proyecto:</strong> hasta 12 meses desde tu último mensaje. Después se eliminan.',
        '<strong>Clientes:</strong> mientras dure el servicio y, terminado este, únicamente lo que las normas contables y tributarias del Perú nos obliguen a conservar.',
        '<strong>Conversaciones de WhatsApp:</strong> el mismo criterio. Ten en cuenta que una copia queda también en tu propio dispositivo, y esa la controlas tú.',
      ],
      listEn: [
        '<strong>Enquiries that don’t become a project:</strong> up to 12 months from your last message. Then they are deleted.',
        '<strong>Clients:</strong> for as long as the service lasts and, once finished, only what Peruvian accounting and tax rules require us to keep.',
        '<strong>WhatsApp conversations:</strong> same criteria. Note a copy also stays on your own device, and that one is under your control.',
      ],
      noteEs: 'Puedes pedirnos que borremos antes de esos plazos y lo hacemos, salvo en la parte que una norma nos obligue a conservar.',
      noteEn: 'You can ask us to delete before those deadlines and we will, except for whatever a legal rule forces us to keep.',
      linkHref: '/eliminacion-datos',
      linkEs: 'Cómo pedir que borremos tus datos',
      linkEn: 'How to ask us to delete your data',
    },
    {
      id: 'derechos',
      es: 'Tus derechos', en: 'Your rights',
      bodyEs: [
        'La <strong>Ley N.° 29733, Ley de Protección de Datos Personales del Perú</strong>, y su reglamento te dan derecho a saber qué datos tuyos tenemos, a corregirlos si están mal, a pedir que los eliminemos, a oponerte a que los usemos y a retirar tu consentimiento cuando quieras.',
        `Para ejercerlos, escribe a <a href="mailto:${EMAIL}">${EMAIL}</a> con el asunto <strong>“Datos personales”</strong>, o al WhatsApp ${WHATSAPP_PRETTY}. Dinos qué necesitas y desde qué canal nos contactaste.`,
        'Podemos pedirte una verificación mínima de identidad — por ejemplo, que escribas desde el mismo número o correo con el que nos hablaste — solo para no entregarle tu información a otra persona.',
      ],
      bodyEn: [
        'Peru’s <strong>Law No. 29733 on Personal Data Protection</strong> and its regulations give you the right to know what data of yours we hold, to correct it if it’s wrong, to ask us to delete it, to object to our use of it, and to withdraw your consent at any time.',
        `To exercise them, write to <a href="mailto:${EMAIL}">${EMAIL}</a> with the subject <strong>“Personal data”</strong>, or WhatsApp ${WHATSAPP_PRETTY}. Tell us what you need and which channel you contacted us from.`,
        'We may ask for a minimal identity check — for instance, that you write from the same number or email you originally used — purely so we don’t hand your information to someone else.',
      ],
      noteEs: 'Respondemos dentro de los plazos que fija la ley peruana y, en la práctica, en menos de 10 días hábiles. Si no quedas conforme con nuestra respuesta, puedes reclamar ante la <strong>Autoridad Nacional de Protección de Datos Personales</strong> del Ministerio de Justicia y Derechos Humanos del Perú.',
      noteEn: 'We reply within the deadlines set by Peruvian law and, in practice, in under 10 business days. If you’re not satisfied with our answer, you can file a claim with Peru’s <strong>National Authority for Personal Data Protection</strong>, part of the Ministry of Justice and Human Rights.',
    },
    {
      id: 'seguridad',
      es: 'Cómo protegemos la información', en: 'How we protect the information',
      bodyEs: [
        'El sitio se sirve cifrado (HTTPS). El acceso a las conversaciones y a los sistemas de cada proyecto está restringido a las personas que trabajan en él, desde equipos con contraseña y cifrado de disco.',
        'Somos un equipo pequeño, y eso corta en los dos sentidos: hay muy pocas personas con acceso, y también sabemos que ningún sistema es infalible. Si ocurriera un incidente que afecte tus datos, te avisamos y notificamos a la autoridad cuando corresponda.',
      ],
      bodyEn: [
        'The site is served over HTTPS. Access to conversations and to each project’s systems is restricted to the people working on it, from password-protected machines with disk encryption.',
        'We’re a small team, and that cuts both ways: very few people have access, and we also know no system is infallible. If an incident affecting your data ever happened, we would tell you and notify the authority where required.',
      ],
    },
    {
      id: 'menores',
      es: 'Menores de edad', en: 'Minors',
      bodyEs: [
        'Este sitio y nuestros servicios se dirigen a empresas y a personas mayores de edad. No recogemos datos de menores a sabiendas. Si crees que un menor nos envió información personal, escríbenos y la eliminamos.',
      ],
      bodyEn: [
        'This site and our services are aimed at businesses and adults. We don’t knowingly collect data from minors. If you believe a minor sent us personal information, write to us and we will delete it.',
      ],
    },
    {
      id: 'cambios',
      es: 'Cambios en esta política', en: 'Changes to this policy',
      bodyEs: [
        'Si esta política cambia, actualizamos la fecha que aparece al inicio de la página. Cuando el cambio sea de fondo — activar analítica, un píxel publicitario o un proveedor nuevo que trate tus datos — lo dejaremos escrito aquí de forma explícita antes de aplicarlo.',
      ],
      bodyEn: [
        'If this policy changes, we update the date shown at the top of the page. When the change is substantive — enabling analytics, an advertising pixel, or a new provider that processes your data — we will state it explicitly here before applying it.',
      ],
    },
  ],
};

// ── Eliminación de datos ──────────────────────────────────────────────────
export const deletion: LegalDoc = {
  labelEs: 'Eliminación de datos', labelEn: 'Data deletion',
  h1Es: 'Cómo pedir que <span class="ac">borremos</span> tus datos.',
  h1En: 'How to ask us to <span class="ac">delete</span> your data.',
  leadEs: 'No necesitas una cuenta ni un formulario especial: basta un mensaje. Acá está exactamente qué pedir, a dónde escribir y qué pasa después.',
  leadEn: 'You don’t need an account or a special form: one message is enough. Here’s exactly what to ask for, where to send it, and what happens next.',
  titleEs: 'Eliminación de datos — GoyCaz Labs',
  titleEn: 'Data deletion — GoyCaz Labs',
  description: 'Cómo solicitar a GoyCaz Labs la eliminación de tus datos personales: a dónde escribir, qué incluir en el mensaje y en cuánto tiempo respondemos.',
  sections: [
    {
      id: 'que-tenemos',
      es: 'Qué tenemos de ti', en: 'What we hold about you',
      bodyEs: [
        'Este sitio <strong>no tiene cuentas de usuario</strong>, así que no existe un perfil que dar de baja. Lo único que puede existir es la conversación que hayas tenido con nosotros: mensajes de WhatsApp, correos o mensajes por Instagram o LinkedIn, junto con el nombre y el número o dirección desde los que escribiste.',
        'Si además eres cliente, existe la documentación del proyecto y los comprobantes de pago.',
      ],
      bodyEn: [
        'This site has <strong>no user accounts</strong>, so there is no profile to deactivate. The only thing that may exist is the conversation you had with us: WhatsApp messages, emails or Instagram/LinkedIn messages, plus the name and the number or address you wrote from.',
        'If you are also a client, there is project documentation and payment records.',
      ],
      linkHref: '/privacidad',
      linkEs: 'Ver la política de privacidad completa',
      linkEn: 'Read the full privacy policy',
    },
    {
      id: 'como-pedirlo',
      es: 'Cómo pedirlo', en: 'How to request it',
      bodyEs: ['Elige el canal que prefieras e incluye estos tres datos:'],
      bodyEn: ['Pick whichever channel you prefer and include these three things:'],
      listEs: [
        `<strong>Escribe</strong> a <a href="mailto:${EMAIL}?subject=Eliminaci%C3%B3n%20de%20datos">${EMAIL}</a> con el asunto <strong>“Eliminación de datos”</strong>, o al WhatsApp <strong>${WHATSAPP_PRETTY}</strong> con el mensaje “Quiero que eliminen mis datos”.`,
        '<strong>Dinos desde qué canal nos contactaste</strong> — número de WhatsApp, correo o usuario de Instagram — para poder encontrar tu información.',
        '<strong>Indica si quieres borrar todo</strong> o solo una parte (por ejemplo, solo la conversación de WhatsApp).',
      ],
      listEn: [
        `<strong>Write</strong> to <a href="mailto:${EMAIL}?subject=Data%20deletion">${EMAIL}</a> with the subject <strong>“Data deletion”</strong>, or WhatsApp <strong>${WHATSAPP_PRETTY}</strong> with the message “I want my data deleted”.`,
        '<strong>Tell us which channel you contacted us from</strong> — WhatsApp number, email address or Instagram handle — so we can find your information.',
        '<strong>Say whether you want everything deleted</strong> or only part of it (for example, only the WhatsApp conversation).',
      ],
      noteEs: 'Puede que te pidamos una verificación mínima — por ejemplo, que el pedido salga del mismo número o correo con el que nos escribiste. Es para no borrar (ni entregar) la información de la persona equivocada.',
      noteEn: 'We may ask for a minimal check — for example, that the request comes from the same number or email you originally wrote from. It’s so we don’t delete (or hand over) the wrong person’s information.',
    },
    {
      id: 'que-pasa',
      es: 'Qué pasa después', en: 'What happens next',
      bodyEs: ['El proceso es corto y te lo confirmamos por escrito:'],
      bodyEn: ['The process is short and we confirm it to you in writing:'],
      listEs: [
        'Confirmamos que recibimos tu pedido dentro de <strong>2 días hábiles</strong>.',
        'Eliminamos la información en un máximo de <strong>10 días hábiles</strong>.',
        'Te avisamos cuando esté hecho, indicando qué se borró y qué debimos conservar, si fuera el caso.',
      ],
      listEn: [
        'We confirm we received your request within <strong>2 business days</strong>.',
        'We delete the information within a maximum of <strong>10 business days</strong>.',
        'We let you know when it’s done, stating what was deleted and what we had to keep, if anything.',
      ],
    },
    {
      id: 'limites',
      es: 'Qué no podemos borrar', en: 'What we can’t delete',
      bodyEs: ['Hay tres cosas fuera de nuestro alcance, y preferimos decirlo antes de que las pidas:'],
      bodyEn: ['Three things are out of our reach, and we’d rather say so before you ask:'],
      listEs: [
        '<strong>Lo que la ley obliga a conservar.</strong> Si fuiste cliente, los comprobantes de pago y la documentación contable deben mantenerse por el plazo que exigen las normas tributarias del Perú.',
        '<strong>Los mensajes en tu propio dispositivo.</strong> La copia de la conversación que está en tu teléfono la controlas tú, desde la propia aplicación.',
        '<strong>Lo que guardan las plataformas.</strong> Meta (Facebook, Instagram, WhatsApp) y Google conservan datos en sus propios sistemas bajo sus políticas. Eso se gestiona desde la configuración de tu cuenta en cada plataforma, no desde acá.',
      ],
      listEn: [
        '<strong>What the law requires us to keep.</strong> If you were a client, payment records and accounting documentation must be retained for the period Peruvian tax rules require.',
        '<strong>Messages on your own device.</strong> The copy of the conversation on your phone is under your control, from the app itself.',
        '<strong>What the platforms store.</strong> Meta (Facebook, Instagram, WhatsApp) and Google keep data in their own systems under their own policies. That is managed from your account settings on each platform, not from here.',
      ],
    },
    {
      id: 'anuncios',
      es: 'Si llegaste desde un anuncio', en: 'If you arrived from an ad',
      bodyEs: [
        'Publicamos anuncios en Facebook e Instagram que abren una conversación de WhatsApp. <strong>No tenemos acceso a tu perfil</strong> de esas plataformas: de la campaña solo vemos números agregados — cuántas personas vieron el anuncio y cuántas escribieron.',
        'Por eso, si lo que quieres es borrar tu actividad dentro de Facebook o Instagram, eso se hace desde la configuración de tu cuenta en esas plataformas. Lo que sí podemos borrar — y borramos si nos lo pides — es la conversación que tuviste con nosotros.',
      ],
      bodyEn: [
        'We run ads on Facebook and Instagram that open a WhatsApp conversation. <strong>We have no access to your profile</strong> on those platforms: from a campaign we only see aggregate numbers — how many people saw the ad and how many wrote in.',
        'So if what you want is to delete your activity inside Facebook or Instagram, that’s done from your account settings on those platforms. What we can delete — and do delete if you ask — is the conversation you had with us.',
      ],
    },
  ],
};

// ── Términos ──────────────────────────────────────────────────────────────
export const terms: LegalDoc = {
  labelEs: 'Términos', labelEn: 'Terms',
  h1Es: 'Las reglas del <span class="ac">trato</span>.',
  h1En: 'The rules of the <span class="ac">deal</span>.',
  leadEs: 'Cortas y en español claro: qué ofrecemos, cómo funcionan los precios, qué esperamos de ti y qué pasa si algo sale mal.',
  leadEn: 'Short and in plain language: what we offer, how pricing works, what we expect from you, and what happens if something goes wrong.',
  titleEs: 'Términos y condiciones — GoyCaz Labs',
  titleEn: 'Terms and conditions — GoyCaz Labs',
  description: 'Términos y condiciones de uso del sitio y de los servicios de GoyCaz Labs: alcance, precios referenciales, entregables, responsabilidad y ley aplicable.',
  sections: [
    {
      id: 'quienes',
      es: 'Quiénes somos y qué cubre esto', en: 'Who we are and what this covers',
      bodyEs: [
        `<strong>GoyCaz Labs</strong> es la marca comercial de ${LEGAL_OWNER}, con base en ${LEGAL_CITY_ES}.`,
        'Estos términos cubren el uso del sitio <strong>www.goycazlabs.com</strong> y el contacto comercial inicial. Cada proyecto se rige además por su propia propuesta o contrato firmado; si ese documento dice algo distinto a lo de acá, manda el documento del proyecto.',
      ],
      bodyEn: [
        `<strong>GoyCaz Labs</strong> is the trade name of ${LEGAL_OWNER_EN}, based in ${LEGAL_CITY_EN}.`,
        'These terms cover the use of <strong>www.goycazlabs.com</strong> and the initial commercial contact. Each project is additionally governed by its own signed proposal or contract; if that document says something different from this page, the project document prevails.',
      ],
    },
    {
      id: 'uso',
      es: 'Uso del sitio', en: 'Use of the site',
      bodyEs: [
        'Puedes navegar el sitio, leerlo y compartir sus enlaces libremente. Los textos, el diseño, la marca y el código son nuestros: no se pueden copiar para publicarlos como propios ni reutilizar comercialmente sin permiso escrito.',
        'Tampoco está permitido intentar vulnerar el servidor, saturarlo o extraer contenido de forma automatizada a gran escala.',
      ],
      bodyEn: [
        'You may browse the site, read it and share its links freely. The copy, design, brand and code are ours: they may not be copied and published as your own, or reused commercially, without written permission.',
        'Attempting to breach the server, overload it, or scrape content in bulk is not permitted either.',
      ],
    },
    {
      id: 'precios',
      es: 'Cómo definimos el precio', en: 'How we set the price',
      bodyEs: [
        'En el sitio <strong>no publicamos montos</strong>: el precio depende del diagnóstico y del alcance real de tu caso, y lo definimos contigo en una llamada sin costo.',
        'Nada de lo publicado en la web constituye una oferta cerrada. El precio en firme, con alcance y plazo, va siempre en la propuesta escrita que te enviamos.',
      ],
      bodyEn: [
        'We <strong>do not publish amounts</strong> on the site: the price depends on the diagnosis and the real scope of your case, and we define it with you on a free call.',
        'Nothing published on the site is a binding offer. The firm price, with scope and timeline, always comes in the written proposal we send you.',
      ],
    },
    {
      id: 'como-trabajamos',
      es: 'Cómo trabajamos', en: 'How we work',
      bodyEs: [
        'El diagnóstico inicial de 10 minutos es gratuito y sin compromiso.',
        'Los plazos que estimamos asumen que recibimos a tiempo los accesos, contenidos, aprobaciones y respuestas que dependen de ti. Si eso se retrasa, el plazo se corre en la misma medida — te lo decimos apenas ocurra, no al final.',
      ],
      bodyEn: [
        'The initial 10-minute diagnosis is free and carries no commitment.',
        'Our estimated timelines assume we receive the accesses, content, approvals and answers that depend on you on time. If those are delayed, the timeline shifts by the same amount — and we tell you as soon as it happens, not at the end.',
      ],
    },
    {
      id: 'entregables',
      es: 'Lo que entregamos y de quién es', en: 'What we deliver and who owns it',
      bodyEs: [
        'Al completarse el pago acordado, <strong>el trabajo hecho a medida para ti es tuyo</strong>: corre en tu infraestructura y tus cuentas, con documentación y estándares abiertos. No usamos ataduras técnicas para retenerte.',
        'Conservamos la propiedad de nuestras herramientas internas y de los componentes reutilizables desarrollados antes de tu proyecto; sobre esos te damos una licencia de uso indefinida dentro de tu proyecto.',
      ],
      bodyEn: [
        'Once the agreed payment is complete, <strong>the custom work built for you is yours</strong>: it runs on your infrastructure and your accounts, with documentation and open standards. We don’t use technical lock-in to keep you.',
        'We retain ownership of our internal tooling and of reusable components built before your project; for those we grant you an indefinite licence to use them within your project.',
      ],
    },
    {
      id: 'proveedores',
      es: 'Servicios de terceros', en: 'Third-party services',
      bodyEs: [
        'Buena parte de lo que instalamos se apoya en proveedores externos: WhatsApp Business, proveedores de modelos de IA, servicios de nube y pasarelas de pago. Sus precios, límites y condiciones los fija cada proveedor y pueden cambiar.',
        'No respondemos por sus caídas, cambios de política o subidas de precio, pero sí te avisamos apenas los detectamos y te proponemos alternativas.',
      ],
      bodyEn: [
        'A good part of what we install relies on external providers: WhatsApp Business, AI model providers, cloud services and payment gateways. Their prices, limits and terms are set by each provider and can change.',
        'We are not liable for their outages, policy changes or price increases, but we do warn you as soon as we detect them and propose alternatives.',
      ],
    },
    {
      id: 'responsabilidad',
      es: 'Responsabilidad', en: 'Liability',
      bodyEs: [
        'Hacemos el trabajo con estándar profesional y respondemos por él. Lo que <strong>no</strong> garantizamos son resultados comerciales concretos — un número de ventas, de citas o de clientes — porque dependen de tu operación, tus precios y tu mercado.',
        'Salvo pacto distinto en el contrato del proyecto, nuestra responsabilidad se limita al monto que nos hayas pagado por el servicio en cuestión. Nada de esto limita la responsabilidad por dolo o culpa inexcusable.',
      ],
      bodyEn: [
        'We do the work to a professional standard and we stand behind it. What we do <strong>not</strong> guarantee are specific commercial outcomes — a number of sales, appointments or customers — because those depend on your operation, your pricing and your market.',
        'Unless the project contract says otherwise, our liability is limited to the amount you have paid us for the service in question. None of this limits liability for wilful misconduct or gross negligence.',
      ],
    },
    {
      id: 'confidencialidad',
      es: 'Confidencialidad', en: 'Confidentiality',
      bodyEs: [
        'Lo que veamos de tu negocio — datos, procesos, precios, sistemas — es confidencial. No lo compartimos ni lo usamos como ejemplo público sin tu permiso escrito.',
      ],
      bodyEn: [
        'Whatever we see of your business — data, processes, prices, systems — is confidential. We don’t share it or use it as a public example without your written permission.',
      ],
    },
    {
      id: 'mantenimiento',
      es: 'Mantenimiento y término', en: 'Maintenance and termination',
      bodyEs: [
        'El mantenimiento mensual es <strong>opcional</strong>: se contrata aparte y se puede cancelar avisando por escrito con la anticipación indicada en tu propuesta.',
        'Al terminar la relación te entregamos accesos, credenciales y documentación para que otro equipo — o el tuyo — pueda continuar. Sin rehenes.',
      ],
      bodyEn: [
        'Monthly maintenance is <strong>optional</strong>: it is contracted separately and can be cancelled with written notice, within the period stated in your proposal.',
        'When the relationship ends we hand over accesses, credentials and documentation so another team — or yours — can carry on. No hostages.',
      ],
    },
    {
      id: 'ley',
      es: 'Ley aplicable', en: 'Governing law',
      bodyEs: [
        'Estos términos se rigen por las leyes de la República del Perú. Si surge una controversia, primero intentamos resolverla conversando; si no se logra, se somete a los jueces y tribunales de Lima.',
      ],
      bodyEn: [
        'These terms are governed by the laws of the Republic of Peru. If a dispute arises we first try to resolve it by talking; failing that, it is submitted to the courts of Lima.',
      ],
    },
    {
      id: 'cambios-terminos',
      es: 'Cambios en estos términos', en: 'Changes to these terms',
      bodyEs: [
        'Podemos actualizar estos términos; cuando lo hagamos, cambia la fecha del inicio de la página. Los proyectos ya contratados se rigen por la versión vigente al momento de firmar su propuesta.',
      ],
      bodyEn: [
        'We may update these terms; when we do, the date at the top of the page changes. Projects already under contract are governed by the version in force when their proposal was signed.',
      ],
    },
  ],
};
