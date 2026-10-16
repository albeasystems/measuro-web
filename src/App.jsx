import { content } from './content.js';
import { pairBySlug } from './convert.js';
import { counterpart } from './seo.js';
import { BASE } from './site.js';
import Convert from './Convert.jsx';
import Home from './Home.jsx';
import Legal from './Legal.jsx';

/** Build a route record from what the HTML says about itself (see headHtml / the prerender script). */
export function routeFrom({ lang, page, slug }) {
  const l = lang in content ? lang : 'en';
  if (page === 'convert') {
    const pair = pairBySlug(l, slug);
    return { lang: l, page, pair, route: `${l}/convert/${slug}/` };
  }
  const p = page || 'home';
  return { lang: l, page: p, route: p === 'home' ? `${l}/` : `${l}/${p}/` };
}

export default function App({ route }) {
  const t = content[route.lang];
  const alt = `${BASE}${counterpart(route).route}`;
  if (route.page === 'home') return <Home lang={route.lang} t={t} alt={alt} />;
  if (route.page === 'convert') return <Convert lang={route.lang} t={t} pair={route.pair} alt={alt} />;
  return <Legal page={route.page} t={t} alt={alt} />;
}
