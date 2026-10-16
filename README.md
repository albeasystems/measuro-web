# Measuro web

Landing page for the Measuro iOS app, in English (`/en/`) and Spanish (`/es/`), plus privacy, terms and support pages for each language. Vite, React and Tailwind v4, set in Geist.

```bash
npm install
npm run dev      # http://localhost:5173/en/
npm run build    # static site in dist/
```

- Copy for both languages lives in `src/content.js`.
- Phone images and the looping happy-path GIF in `public/media/` are real screenshots of the app taken in the iPhone simulator without ads. Source PNGs are in `capture/`.
- The privacy and terms texts are drafts: review them before publishing.
- `hreflang` and `og:image` need the final domain, so they are not set yet.

Apple, iPhone and App Store are trademarks of Apple Inc. Measuro is an independent app and is not affiliated with Apple.

## SEO

- Every page is prerendered to static HTML at build time (`scripts/prerender.mjs`), so crawlers and AI assistants read the content without running JavaScript. The browser then hydrates it.
- Per page: title, description, canonical, `hreflang` (en/es/x-default), Open Graph and Twitter cards, and JSON-LD (`SoftwareApplication`, `FAQPage`, `BreadcrumbList`). There is no fake rating.
- `sitemap.xml`, `robots.txt` (AI crawlers allowed), `llms.txt`, `llms-es.txt` and `llms-full.txt` are generated from the same data as the pages (`src/seo.js`).
- 12 conversion pages per language (`src/convert.js`); every number is computed from exact definitions.
- The site address lives in `src/site.js` (`ORIGIN`). With a custom domain, change it and build with `BASE_PATH=/`.
- Crawlers only read `robots.txt` at the domain root. On `albeasystems.github.io/measuro-web/` that file is ignored; submit `sitemap.xml` in Search Console instead, or use a custom domain.
