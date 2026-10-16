// Where the site lives. Change ORIGIN (and build with BASE_PATH=/) when a custom domain is connected;
// every canonical URL, hreflang, sitemap entry and JSON-LD value follows from these two lines.
export const ORIGIN = 'https://albeasystems.github.io';
export const BASE = import.meta.env.BASE_URL;
export const SITE_NAME = 'Measuro';
export const PUBLISHER = 'Albea Systems';
export const APP_ID = '6760968030';
export const LANGS = ['en', 'es'];
export const LOCALES = { en: 'en_US', es: 'es_ES' };

/** `route` is relative to the base, e.g. "en/convert/km-to-miles/". */
export const url = (route = '') => `${ORIGIN}${BASE}${route}`;
export const href = (route = '') => `${BASE}${route}`;
