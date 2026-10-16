// One place that knows how every page presents itself to a crawler: <head> data, JSON-LD, sitemap
// entries and the llms.txt files. The prerender script and the components both read from here.
import { APP_STORE, DIVIX_STORE, CONTACT, content } from './content.js';
import { PAIRS, describe, pairById } from './convert.js';
import { APP_ID, LANGS, LOCALES, ORIGIN, PUBLISHER, SITE_NAME, BASE, url } from './site.js';

const other = (lang) => (lang === 'en' ? 'es' : 'en');
const LEGAL = ['privacy', 'terms', 'support'];

const homeMeta = {
  en: {
    title: 'Measuro: Free Unit Converter for iPhone, Offline',
    description:
      'Measuro is a free unit converter for iPhone. Type a value once and see it in every unit. 29 categories, 271 units, a calculator and a widget. Works offline.',
  },
  es: {
    title: 'Measuro: Conversor de Unidades Gratis para iPhone',
    description:
      'Measuro es un conversor de unidades gratis para iPhone. Escribe un valor una vez y míralo en todas las unidades. 29 categorías, 271 unidades, calculadora y widget. Sin conexión.',
  },
};
const legalMeta = {
  privacy: { en: ['Privacy Policy | Measuro', 'How Measuro handles your data: conversions stay on your iPhone, ads and purchases explained.'], es: ['Política de privacidad | Measuro', 'Cómo trata Measuro tus datos: las conversiones se quedan en tu iPhone; anuncios y compras explicados.'] },
  terms: { en: ['Terms of Use | Measuro', 'Terms for using the Measuro unit converter app and this website.'], es: ['Términos de uso | Measuro', 'Condiciones de uso de la app conversora de unidades Measuro y de este sitio.'] },
  support: { en: ['Support and FAQ | Measuro', 'Get help with Measuro: how to convert, remove ads, offline use and contact.'], es: ['Soporte y preguntas | Measuro', 'Ayuda con Measuro: cómo convertir, quitar anuncios, uso sin conexión y contacto.'] },
};

/** Every page of the site as a route record. */
export function routes() {
  const out = [];
  for (const lang of LANGS) {
    out.push({ lang, page: 'home', route: `${lang}/` });
    for (const p of LEGAL) out.push({ lang, page: p, route: `${lang}/${p}/` });
    for (const pair of PAIRS) out.push({ lang, page: 'convert', pair, route: `${lang}/convert/${pair.slug[lang]}/` });
  }
  return out;
}

/** The same page in the other language, for hreflang and the language switch. */
export function counterpart(r) {
  const lang = other(r.lang);
  if (r.page === 'convert') return { ...r, lang, route: `${lang}/convert/${r.pair.slug[lang]}/` };
  return { ...r, lang, route: r.page === 'home' ? `${lang}/` : `${lang}/${r.page}/` };
}

export function pageMeta(r) {
  if (r.page === 'home') return { ...homeMeta[r.lang] };
  if (r.page === 'convert') {
    const d = describe(r.pair, r.lang);
    return { title: `${d.metaTitle} | ${SITE_NAME}`, description: d.description };
  }
  const [title, description] = legalMeta[r.page][r.lang];
  return { title, description };
}

const faqSchema = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

const app = (lang) => {
  const t = content[lang];
  return {
    '@type': ['SoftwareApplication', 'MobileApplication'],
    '@id': `${url('')}#app`,
    name: SITE_NAME,
    alternateName: lang === 'en' ? 'Measuro unit converter' : 'Measuro conversor de unidades',
    description: homeMeta[lang].description,
    operatingSystem: 'iOS',
    applicationCategory: 'UtilitiesApplication',
    inLanguage: ['en', 'es', 'fr', 'de', 'it', 'pt-BR', 'ru', 'ar', 'hi', 'th', 'vi', 'ja', 'ko', 'zh-Hans'],
    countriesSupported: undefined,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    downloadUrl: APP_STORE,
    installUrl: APP_STORE,
    image: url('icon-256.png'),
    screenshot: ['02-length', '03-mass', '04-calculator', '05-widget'].map((n) => url(`media/${lang}/${n}.webp`)),
    featureList: t.features.items.map(([label, text]) => `${label}: ${text}`),
    author: { '@id': `${url('')}#publisher` },
    publisher: { '@id': `${url('')}#publisher` },
  };
};

const publisher = {
  '@type': 'Organization',
  '@id': `${url('')}#publisher`,
  name: PUBLISHER,
  email: CONTACT,
  contactPoint: { '@type': 'ContactPoint', email: CONTACT, contactType: 'customer support' },
};

export function jsonLd(r) {
  const t = content[r.lang];
  const here = url(r.route);
  const graph = [];
  if (r.page === 'home') {
    graph.push(
      { '@type': 'WebSite', '@id': `${url('')}#site`, url: url(r.route), name: SITE_NAME, inLanguage: r.lang, publisher: { '@id': `${url('')}#publisher` } },
      publisher,
      app(r.lang),
      { '@type': 'WebPage', '@id': `${here}#page`, url: here, name: pageMeta(r).title, inLanguage: r.lang, isPartOf: { '@id': `${url('')}#site` }, about: { '@id': `${url('')}#app` } },
      faqSchema(t.faq.items),
    );
  } else if (r.page === 'convert') {
    const d = describe(r.pair, r.lang);
    graph.push(
      { '@type': 'WebPage', '@id': `${here}#page`, url: here, name: d.h1, description: d.description, inLanguage: r.lang, about: { '@id': `${url('')}#app` }, isPartOf: { '@id': `${url('')}#site` } },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE_NAME, item: url(`${r.lang}/`) },
          { '@type': 'ListItem', position: 2, name: d.breadcrumb, item: url(`${r.lang}/#popular`) },
          { '@type': 'ListItem', position: 3, name: d.h1, item: here },
        ],
      },
      faqSchema(d.faq),
    );
  } else {
    graph.push({ '@type': 'WebPage', url: here, name: pageMeta(r).title, inLanguage: r.lang, isPartOf: { '@id': `${url('')}#site` } });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function headHtml(r, assets) {
  const m = pageMeta(r);
  const alt = counterpart(r);
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const canonical = url(r.route);
  const og = url(`og-${r.lang}.jpg`);
  const ld = JSON.stringify(jsonLd(r)).replace(/</g, '\\u003c');
  return `<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(m.title)}</title>
    <meta name="description" content="${esc(m.description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="${r.lang}" href="${canonical}" />
    <link rel="alternate" hreflang="${alt.lang}" href="${url(alt.route)}" />
    <link rel="alternate" hreflang="x-default" href="${url(r.page === 'convert' ? `en/convert/${r.pair.slug.en}/` : r.page === 'home' ? 'en/' : `en/${r.page}/`)}" />
    <meta name="theme-color" content="#fdfdfe" />
    <meta name="apple-itunes-app" content="app-id=${APP_ID}" />
    <meta property="og:type" content="${r.page === 'home' ? 'website' : 'article'}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:title" content="${esc(m.title)}" />
    <meta property="og:description" content="${esc(m.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:locale" content="${LOCALES[r.lang]}" />
    <meta property="og:locale:alternate" content="${LOCALES[alt.lang]}" />
    <meta property="og:image" content="${og}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(content[r.lang].hero.phoneAltStill)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(m.title)}" />
    <meta name="twitter:description" content="${esc(m.description)}" />
    <meta name="twitter:image" content="${og}" />
    <link rel="icon" type="image/png" href="${BASE}favicon.png" />
    <link rel="apple-touch-icon" href="${BASE}icon-256.png" />
    ${assets}
    <script type="application/ld+json">${ld}</script>`;
}

// ---- llms.txt: a plain-text map of the site for language models ----

const bullet = (title, r, note) => `- [${title}](${url(r)})${note ? `: ${note}` : ''}`;

export function llmsTxt(lang) {
  const t = content[lang];
  const L = {
    en: { sum: 'Measuro is a free unit converter app for iPhone by Albea Systems. Type a value once and see it in every unit of the category at the same time. 29 categories, 271 units, built-in calculator, Home Screen and Lock Screen widgets, Siri and Shortcuts, 14 languages, works offline. It converts units, not currencies.', app: 'The app', conv: 'Popular conversions', legal: 'Legal and support', opt: 'Optional' },
    es: { sum: 'Measuro es una app gratuita de conversión de unidades para iPhone, de Albea Systems. Escribes un valor una vez y lo ves a la vez en todas las unidades de la categoría. 29 categorías, 271 unidades, calculadora integrada, widgets de pantalla de inicio y de bloqueo, Siri y Atajos, 14 idiomas, funciona sin conexión. Convierte unidades, no divisas.', app: 'La app', conv: 'Conversiones populares', legal: 'Legal y soporte', opt: 'Opcional' },
  }[lang];
  const lines = [
    `# ${SITE_NAME}`,
    '',
    `> ${L.sum}`,
    '',
    `## ${L.app}`,
    bullet(lang === 'en' ? 'Measuro home' : 'Inicio de Measuro', `${lang}/`, homeMeta[lang].description),
    `- [App Store](${APP_STORE}): ${lang === 'en' ? 'download Measuro, free' : 'descargar Measuro, gratis'}`,
    '',
    `## ${L.conv}`,
    ...PAIRS.map((p) => bullet(describe(p, lang).h1, `${lang}/convert/${p.slug[lang]}/`, describe(p, lang).answer)),
    '',
    `## ${L.legal}`,
    ...LEGAL.map((p) => bullet(legalMeta[p][lang][0].replace(' | Measuro', ''), `${lang}/${p}/`)),
    '',
    `## ${L.opt}`,
    `- [Divix](${DIVIX_STORE}): ${lang === 'en' ? 'free currency converter by the same developer' : 'conversor de divisas gratuito del mismo desarrollador'}`,
    `- [${lang === 'en' ? 'Spanish version' : 'English version'}](${url(`${other(lang)}/`)})`,
    '',
  ];
  void t;
  return lines.join('\n');
}

export function llmsFull() {
  const out = [`# ${SITE_NAME}: full text`, ''];
  for (const lang of LANGS) {
    const t = content[lang];
    out.push(`## ${lang === 'en' ? 'English' : 'Español'}`, '', homeMeta[lang].description, '', `### ${t.faq.title}`, '');
    for (const [q, a] of t.faq.items) out.push(`**${q}**`, a, '');
    out.push(`### ${t.features.title}`, '');
    for (const [l, tx] of t.features.items) out.push(`- **${l}**: ${tx}`);
    out.push('', `### ${t.cats.title}`, '', t.cats.list.join(', '), '');
    out.push(`### ${t.popular.title}`, '');
    for (const p of PAIRS) {
      const d = describe(p, lang);
      out.push(`#### ${d.h1}`, d.answer, d.how, `${d.cols[0]} → ${d.cols[1]}: ${d.rows.map(([a, b]) => `${a} = ${b}`).join('; ')}`, '');
    }
  }
  return out.join('\n');
}

export function sitemapXml(lastmod) {
  const list = routes();
  const entries = list
    .map((r) => {
      const alt = counterpart(r);
      return `  <url>
    <loc>${url(r.route)}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="${r.lang}" href="${url(r.route)}" />
    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${url(alt.route)}" />
    <priority>${r.page === 'home' ? '1.0' : r.page === 'convert' ? '0.7' : '0.3'}</priority>
  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;
}

export function robotsTxt() {
  const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Google-Extended', 'Applebot', 'Applebot-Extended'];
  return `User-agent: *
Allow: /

${bots.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n')}

Sitemap: ${url('sitemap.xml')}
`;
}

export { pairById, ORIGIN };
