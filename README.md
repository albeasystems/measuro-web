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

## Custom domain

1. Buy or pick the domain, then in the repo go to Settings > Pages > Custom domain and enter it. Add the DNS records GitHub lists (an `A`/`AAAA` set for an apex domain, or a `CNAME` to `albeasystems.github.io` for a subdomain such as `www`). Tick Enforce HTTPS once it is offered.
2. In Settings > Secrets and variables > Actions > Variables, create `SITE_ORIGIN` (for example `https://measuro.app`) and `BASE_PATH` with the value `/`.
3. Re-run the "Deploy site" workflow. Canonical URLs, `hreflang`, the sitemap, JSON-LD, `robots.txt` (now at the domain root, where crawlers read it) and the `CNAME` file all follow.
4. In Search Console add the domain and submit `sitemap.xml`.
