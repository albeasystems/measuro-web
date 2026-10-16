// Turns the client build into real HTML for every page, so search engines and AI crawlers
// read the content without running JavaScript. Also writes sitemap, robots, llms and 404 files.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssr = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const base = process.env.BASE_PATH || '/';

// Asset tags (hashed CSS and JS) come from the page Vite already built.
const built = fs.readFileSync(path.join(dist, 'en', 'index.html'), 'utf8');
const tags = (re) => [...built.matchAll(re)].map((m) => m[0]);
const css = tags(/<link rel="stylesheet"[^>]*>/g);
const js = tags(/<script type="module"[^>]*><\/script>/g);
const preload = tags(/<link rel="modulepreload"[^>]*>/g);
const font = fs.readdirSync(path.join(dist, 'assets')).find((f) => /geist-latin-wght-normal.*\.woff2$/.test(f));
const fontTag = font ? `<link rel="preload" href="${base}assets/${font}" as="font" type="font/woff2" crossorigin />` : '';
const assets = [fontTag, ...css, ...preload, ...js].filter(Boolean).join('\n    ');

const write = (file, text) => {
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, text);
};

let count = 0;
for (const r of ssr.routes()) {
  const body = ssr.render(r);
  const slug = r.page === 'convert' ? ` data-slug="${r.pair.slug[r.lang]}"` : '';
  write(
    `${r.route}index.html`,
    `<!doctype html>
<html lang="${r.lang}">
  <head>
    ${ssr.headHtml(r, assets)}
  </head>
  <body>
    <div id="root" data-lang="${r.lang}" data-page="${r.page}"${slug}>${body}</div>
  </body>
</html>
`,
  );
  count++;
}

// Root: language chooser with real links, redirects by browser language for people.
const origin = new URL(ssr.sitemapXml('x').match(/<loc>([^<]+)<\/loc>/)[1]).origin;
const rootUrl = `${origin}${base}`;
write(
  'index.html',
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Measuro: Free Unit Converter for iPhone</title>
    <meta name="description" content="Measuro is a free unit converter for iPhone. English and Spanish versions." />
    <link rel="canonical" href="${rootUrl}" />
    <link rel="alternate" hreflang="en" href="${rootUrl}en/" />
    <link rel="alternate" hreflang="es" href="${rootUrl}es/" />
    <link rel="alternate" hreflang="x-default" href="${rootUrl}" />
    <link rel="icon" type="image/png" href="${base}favicon.png" />
    <script>
      var l = (navigator.languages && navigator.languages[0] || navigator.language || "en").slice(0, 2);
      location.replace(l === "es" ? "es/" : "en/");
    </script>
  </head>
  <body style="font-family:system-ui,sans-serif;max-width:32rem;margin:4rem auto;padding:0 1.25rem">
    <h1>Measuro</h1>
    <p>Free unit converter for iPhone. Conversor de unidades gratis para iPhone.</p>
    <p><a href="en/">English</a> · <a href="es/">Español</a></p>
  </body>
</html>
`,
);
write(
  '404.html',
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Page not found | Measuro</title>
  </head>
  <body style="font-family:system-ui,sans-serif;max-width:32rem;margin:4rem auto;padding:0 1.25rem">
    <h1>Page not found</h1>
    <p><a href="${base}en/">Measuro</a> · <a href="${base}es/">Measuro en español</a></p>
  </body>
</html>
`,
);

const today = new Date().toISOString().slice(0, 10);
write('sitemap.xml', ssr.sitemapXml(today));
write('robots.txt', ssr.robotsTxt());
write('llms.txt', ssr.llmsTxt('en'));
write('llms-es.txt', ssr.llmsTxt('es'));
write('llms-full.txt', ssr.llmsFull());
console.log(`prerendered ${count} pages + root, 404, sitemap, robots, llms`);
