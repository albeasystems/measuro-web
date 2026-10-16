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
