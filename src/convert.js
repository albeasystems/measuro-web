// Popular conversions. Every number on these pages is computed from exact definitions
// (international mile, avoirdupois pound, US gallon, US customary cup), never typed by hand.

const MILE = 1609.344;
const POUND = 0.45359237;
const INCH = 0.0254;
const FOOT = 0.3048;
const GALLON = 3.785411784;
const CUP = 236.5882365;

const unit = (sym, en, es, g = 'm') => ({ sym, en, es, g });

const km = unit('km', ['kilometer', 'kilometers'], ['kilómetro', 'kilómetros']);
const mi = unit('mi', ['mile', 'miles'], ['milla', 'millas'], 'f');
const kg = unit('kg', ['kilogram', 'kilograms'], ['kilogramo', 'kilogramos']);
const lb = unit('lb', ['pound', 'pounds'], ['libra', 'libras'], 'f');
const inch = unit('in', ['inch', 'inches'], ['pulgada', 'pulgadas'], 'f');
const cm = unit('cm', ['centimeter', 'centimeters'], ['centímetro', 'centímetros']);
const ft = unit('ft', ['foot', 'feet'], ['pie', 'pies']);
const m = unit('m', ['meter', 'meters'], ['metro', 'metros']);
const L = unit('L', ['liter', 'liters'], ['litro', 'litros']);
const gal = unit('gal', ['US gallon', 'US gallons'], ['galón estadounidense', 'galones estadounidenses']);
const cup = unit('cup', ['US cup', 'US cups'], ['taza estadounidense', 'tazas estadounidenses'], 'f');
const ml = unit('mL', ['milliliter', 'milliliters'], ['mililitro', 'mililitros']);
const c = { ...unit('°C', ['degree Celsius', 'degrees Celsius'], ['grado Celsius', 'grados Celsius']), title: { en: 'Celsius', es: 'Celsius' } };
const f = { ...unit('°F', ['degree Fahrenheit', 'degrees Fahrenheit'], ['grado Fahrenheit', 'grados Fahrenheit']), title: { en: 'Fahrenheit', es: 'Fahrenheit' } };

const linear = (factor) => ({ kind: 'linear', factor, apply: (v) => v * factor });

export const PAIRS = [
  { id: 'km-mi', from: km, to: mi, ...linear(1000 / MILE), values: [1, 2, 5, 10, 20, 50, 100], rev: 'mi-km',
    slug: { en: 'km-to-miles', es: 'kilometros-a-millas' } },
  { id: 'mi-km', from: mi, to: km, ...linear(MILE / 1000), values: [1, 2, 5, 10, 20, 50, 100], rev: 'km-mi',
    slug: { en: 'miles-to-km', es: 'millas-a-kilometros' } },
  { id: 'kg-lb', from: kg, to: lb, ...linear(1 / POUND), values: [1, 2, 5, 10, 20, 50, 100], rev: 'lb-kg',
    slug: { en: 'kg-to-lbs', es: 'kilogramos-a-libras' } },
  { id: 'lb-kg', from: lb, to: kg, ...linear(POUND), values: [1, 2, 5, 10, 20, 50, 100], rev: 'kg-lb',
    slug: { en: 'lbs-to-kg', es: 'libras-a-kilogramos' } },
  { id: 'c-f', from: c, to: f, kind: 'c-f', apply: (v) => (v * 9) / 5 + 32, values: [-40, 0, 10, 20, 25, 30, 37, 100], rev: 'f-c',
    slug: { en: 'celsius-to-fahrenheit', es: 'celsius-a-fahrenheit' } },
  { id: 'f-c', from: f, to: c, kind: 'f-c', apply: (v) => ((v - 32) * 5) / 9, values: [-40, 0, 32, 50, 68, 77, 98.6, 212], rev: 'c-f',
    slug: { en: 'fahrenheit-to-celsius', es: 'fahrenheit-a-celsius' } },
  { id: 'in-cm', from: inch, to: cm, ...linear((INCH * 100)), values: [1, 2, 5, 10, 12, 24, 36], rev: 'cm-in',
    slug: { en: 'inches-to-cm', es: 'pulgadas-a-centimetros' } },
  { id: 'cm-in', from: cm, to: inch, ...linear(1 / (INCH * 100)), values: [1, 5, 10, 25, 50, 100, 180], rev: 'in-cm',
    slug: { en: 'cm-to-inches', es: 'centimetros-a-pulgadas' } },
  { id: 'ft-m', from: ft, to: m, ...linear(FOOT), values: [1, 3, 5, 6, 10, 20, 100], rev: 'm-ft',
    slug: { en: 'feet-to-meters', es: 'pies-a-metros' } },
  { id: 'm-ft', from: m, to: ft, ...linear(1 / FOOT), values: [1, 2, 5, 10, 50, 100, 1000], rev: 'ft-m',
    slug: { en: 'meters-to-feet', es: 'metros-a-pies' } },
  { id: 'l-gal', from: L, to: gal, ...linear(1 / GALLON), values: [1, 2, 5, 10, 20, 50, 100], rev: null,
    slug: { en: 'liters-to-gallons', es: 'litros-a-galones' } },
  { id: 'cup-ml', from: cup, to: ml, ...linear(CUP), values: [0.25, 0.5, 1, 2, 3, 4, 8], rev: null,
    slug: { en: 'cups-to-ml', es: 'tazas-a-mililitros' } },
];

export const pairById = (id) => PAIRS.find((p) => p.id === id);
export const pairBySlug = (lang, slug) => PAIRS.find((p) => p.slug[lang] === slug);

/** Number as a person would write it: up to 4 decimals, no trailing zeros, locale separators. */
export function fmt(value, lang) {
  const rounded = Math.round(value * 1e9) / 1e9;
  return new Intl.NumberFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    maximumSignificantDigits: 7,
    useGrouping: Math.abs(rounded) >= 10000,
  }).format(rounded);
}

const name = (u, lang, plural) => u[lang][plural ? 1 : 0];
const title = (u, lang) => (u.title ? u.title[lang] : cap(u[lang][1]));
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/** Everything the page needs, in one language. Pure data, so the same text feeds HTML, JSON-LD and llms.txt. */
export function describe(pair, lang) {
  const { from, to } = pair;
  const one = pair.apply(1);
  const factorText = fmt(pair.factor ?? one, lang);
  const t = {
    en: {
      h1: `${title(from, 'en')} to ${title(to, 'en')} converter`,
      metaTitle: `${title(from, 'en')} to ${title(to, 'en')} Converter (${from.sym} to ${to.sym})`,
      answer: `1 ${name(from, 'en')} equals ${fmt(one, 'en')} ${name(to, 'en', true)}.`,
      how:
        pair.kind === 'c-f'
          ? 'To convert Celsius to Fahrenheit, multiply by 9/5 and add 32.'
          : pair.kind === 'f-c'
            ? 'To convert Fahrenheit to Celsius, subtract 32 and multiply by 5/9.'
            : `To convert ${name(from, 'en', true)} to ${name(to, 'en', true)}, multiply the number of ${name(from, 'en', true)} by ${factorText}.`,
      formula: pair.kind === 'c-f' ? '°F = °C × 9/5 + 32' : pair.kind === 'f-c' ? '°C = (°F − 32) × 5/9' : `${to.sym} = ${from.sym} × ${factorText}`,
      chart: `${title(from, 'en')} to ${title(to, 'en')} chart`,
      cols: [cap(name(from, 'en', true)), cap(name(to, 'en', true))],
      reverse: (r) => `Convert ${title(r.from, 'en')} to ${title(r.to, 'en')} instead`,
      related: 'More conversions',
      cta: 'Convert any unit, offline',
      ctaText: 'Measuro converts 271 units in 29 categories on your iPhone. Type a value once and see every unit.',
      faq: [
        [`How many ${name(to, 'en', true)} are in a ${name(from, 'en')}?`, `There ${/s$/.test(name(to, 'en', true)) ? 'are' : 'is'} ${fmt(one, 'en')} ${name(to, 'en', true)} in 1 ${name(from, 'en')}.`],
        [`How do I convert ${name(from, 'en', true)} to ${name(to, 'en', true)}?`, `${pair.kind === 'c-f' ? 'Multiply by 9/5 and add 32.' : pair.kind === 'f-c' ? 'Subtract 32 and multiply by 5/9.' : `Multiply by ${factorText}.`} The formula is ${pair.kind === 'c-f' ? '°F = °C × 9/5 + 32' : pair.kind === 'f-c' ? '°C = (°F − 32) × 5/9' : `${to.sym} = ${from.sym} × ${factorText}`}.`],
      ],
      breadcrumb: 'Conversions',
    },
    es: {
      h1: `Conversor de ${title(from, 'es').toLowerCase()} a ${title(to, 'es').toLowerCase()}`,
      metaTitle: `Convertir ${title(from, 'es').toLowerCase()} a ${title(to, 'es').toLowerCase()} (${from.sym} a ${to.sym})`,
      answer: `1 ${name(from, 'es')} equivale a ${fmt(one, 'es')} ${name(to, 'es', true)}.`,
      how:
        pair.kind === 'c-f'
          ? 'Para pasar de Celsius a Fahrenheit, multiplica por 9/5 y suma 32.'
          : pair.kind === 'f-c'
            ? 'Para pasar de Fahrenheit a Celsius, resta 32 y multiplica por 5/9.'
            : `Para convertir ${name(from, 'es', true)} a ${name(to, 'es', true)}, multiplica el número de ${name(from, 'es', true)} por ${factorText}.`,
      formula: pair.kind === 'c-f' ? '°F = °C × 9/5 + 32' : pair.kind === 'f-c' ? '°C = (°F − 32) × 5/9' : `${to.sym} = ${from.sym} × ${factorText}`,
      chart: `Tabla de ${title(from, 'es').toLowerCase()} a ${title(to, 'es').toLowerCase()}`,
      cols: [cap(name(from, 'es', true)), cap(name(to, 'es', true))],
      reverse: (r) => `Convertir ${title(r.from, 'es').toLowerCase()} a ${title(r.to, 'es').toLowerCase()}`,
      related: 'Más conversiones',
      cta: 'Convierte cualquier unidad, sin conexión',
      ctaText: 'Measuro convierte 271 unidades de 29 categorías en tu iPhone. Escribe un valor una vez y mira todas las unidades.',
      faq: [
        [`¿Cuánt${to.g === 'f' ? 'as' : 'os'} ${name(to, 'es', true)} hay en ${from.g === 'f' ? 'una' : 'un'} ${name(from, 'es')}?`, `En 1 ${name(from, 'es')} hay ${fmt(one, 'es')} ${name(to, 'es', true)}.`],
        [`¿Cómo se convierten ${name(from, 'es', true)} a ${name(to, 'es', true)}?`, `${pair.kind === 'c-f' ? 'Multiplica por 9/5 y suma 32.' : pair.kind === 'f-c' ? 'Resta 32 y multiplica por 5/9.' : `Multiplica por ${factorText}.`} La fórmula es ${pair.kind === 'c-f' ? '°F = °C × 9/5 + 32' : pair.kind === 'f-c' ? '°C = (°F − 32) × 5/9' : `${to.sym} = ${from.sym} × ${factorText}`}.`],
      ],
      breadcrumb: 'Conversiones',
    },
  }[lang];

  return {
    ...t,
    one,
    description:
      lang === 'en'
        ? `Convert ${name(from, 'en', true)} to ${name(to, 'en', true)}: ${t.answer} Formula, quick chart and a free offline unit converter for iPhone.`
        : `Convierte ${name(from, 'es', true)} a ${name(to, 'es', true)}: ${t.answer} Fórmula, tabla rápida y un conversor de unidades gratis y sin conexión para iPhone.`,
    rows: pair.values.map((v) => [fmt(v, lang), fmt(pair.apply(v), lang)]),
  };
}
