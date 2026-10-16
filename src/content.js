// All copy lives here so Spanish and English are written side by side, not translated after the fact.
// Facts come from the app itself: 29 categories, 271 units, works offline, calculator, widget, Shortcuts.

// Prefix for every internal URL, so the site works at a domain root or under /repo-name/.
export const BASE = import.meta.env.BASE_URL;

export const APP_STORE = 'https://apps.apple.com/app/id6760968030';
export const DIVIX_STORE = 'https://apps.apple.com/app/id6776141769';
export const CONTACT = 'albeasystems@gmail.com';

// Each category's accent as defined in the app (UnitCategory.swift), in the order of `cats.list`.
export const CATEGORY_COLORS = ['#0a84ff', '#30d158', '#64d2ff', '#ff9f0a', '#ff453a', '#ff375f', '#ed6b5c', '#33bf59', '#9e6bd9', '#bf5af2', '#ffd60a', '#5e5ce6', '#40c8e0', '#63e6e2', '#1a8cf2', '#ac8e68', '#8e8e93', '#cc1a1a', '#738099', '#f24c8c', '#8c5933', '#00a6bf', '#ffd900', '#0099ff', '#e66600', '#339966', '#9900cc', '#bfcc1a', '#e69900'];

export const content = {
  en: {
    htmlLang: 'en',
    otherLang: { code: 'es', label: 'ES', name: 'Español', href: `${BASE}es/` },
    home: `${BASE}en/`,
    nav: { features: 'What it does', categories: 'Categories', faq: 'FAQ', get: 'Get the app' },
    hero: {
      headline: ['Type once.', 'Every unit answers.'],
      sub: 'Measuro is a free unit converter for iPhone. Enter a value and see it in every unit of the category at the same time. A calculator is built in, and it works offline.',
      cta: 'Get the free app',
      more: 'See how it works',
      pause: 'Pause animation',
      play: 'Play animation',
      facts: ['29 categories', '271 units', 'Works offline'],
      phoneAlt:
        'Measuro on iPhone: pick Length, type 100 meters, and see kilometers, centimeters, millimeters and inches update at once. Then Mass, then the calculator.',
      phoneAltStill:
        'Measuro on iPhone: 100 meters converted into kilometers, centimeters, millimeters and inches at once.',
    },
    demo: {
      title: 'One value in. Every unit out.',
      lead: 'There is no from and to to set. You type 100 m and the whole list of lengths fills in. Tap another unit and it becomes the source.',
      rows: [
        ['100 m', 'You type'],
        ['0.1 km', 'Kilometer'],
        ['10,000 cm', 'Centimeter'],
        ['100,000 mm', 'Millimeter'],
        ['3,937.00787 in', 'Inch'],
      ],
      stillAlt: 'Length screen with 100 meters typed and the conversions listed below.',
      massTitle: 'Change category, the color follows.',
      massLead: 'Each category has its own color. Mass turns orange, length stays blue, and you always know where you are.',
      massAlt: 'Mass screen with 42 kilograms converted into tons, grams, milligrams and micrograms.',
      calcTitle: 'A calculator sits one tap away.',
      calcLead: 'Work out 12 × 8 without leaving the app. Measuro also evaluates expressions straight in the converter.',
      calcAlt: 'Calculator showing 12 times 8 equals 96.',
    },
    features: {
      title: 'Built for the quick answer',
      items: [
        ['Metric and imperial', 'Side by side, from millimeters to light-years, so you never convert in two steps.'],
        ['Works offline', 'Conversions run on your iPhone. No signal in the workshop or the supermarket is no problem.'],
        ['Kitchen to workshop', 'Cups, shoe sizes and running pace sit next to pressure, torque and voltage.'],
        ['Your own list', 'Star the units you use and reorder them. Recent conversions wait on the home screen.'],
        ['Shortcuts and widget', 'Ask Siri or build a Shortcut. Put a conversion on your Home Screen.'],
        ['Speaks your language', 'Available in 14 languages.'],
      ],
    },
    cats: {
      title: 'Every category in the app',
      lead: 'From length to radiation dose.',
      list: [
        'Length', 'Area', 'Volume', 'Mass', 'Speed', 'Temperature', 'Cooking', 'Pace', 'Shoe size', 'Pressure',
        'Energy', 'Power', 'Time', 'Digital Storage', 'Data rate', 'Fuel Efficiency', 'Angle', 'Force', 'Torque',
        'Frequency', 'Density', 'Flow rate', 'Illuminance', 'Electric Current', 'Voltage', 'Viscosity',
        'Acceleration', 'Radioactivity', 'Radiation dose',
      ],
    },
    widget: {
      title: 'Your Home Screen, converted.',
      lead: 'Add the Measuro widget and see a conversion without opening the app. Leave it empty to follow your favorite units, or pick a pair and a value. There are Lock Screen versions too.',
      alt: 'iPhone Home Screen with the Measuro widget converting 1 metric ton into kilograms, grams, milligrams and micrograms.',
    },
    popular: { title: 'Popular conversions', lead: 'Quick answers, with the formula and a chart.' },
    faq: {
      title: 'Questions about Measuro',
      items: [
        ['What is Measuro?', 'Measuro is a free unit converter for iPhone. You type a value once and see it converted into every unit of the category at the same time. It covers 29 categories and 271 units, includes a calculator, and works offline.'],
        ['Is Measuro free?', 'Yes. Measuro is free to download and use, and it is supported by ads. A one-time Remove Ads purchase takes them away for good.'],
        ['Does Measuro work offline?', 'Yes. Every conversion is calculated on your iPhone, so you do not need an internet connection.'],
        ['Which units can Measuro convert?', 'Twenty-nine categories: length, area, volume, mass, speed, temperature, cooking, pace, shoe size, pressure, energy, power, time, digital storage, data rate, fuel efficiency, angle, force, torque, frequency, density, flow rate, illuminance, electric current, voltage, viscosity, acceleration, radioactivity and radiation dose.'],
        ['Can Measuro convert currencies?', 'No. Measuro converts units, not money. For exchange rates, Albea Systems also makes Divix, a free currency converter.'],
        ['Does Measuro have a widget?', 'Yes. A Home Screen widget shows a conversion. Leave it empty to follow your favorite units, or choose a pair of units and a value. Lock Screen widgets, Siri and Shortcuts are supported too.'],
        ['Which languages does Measuro support?', 'Fourteen: English, Spanish, French, German, Italian, Portuguese (Brazil), Russian, Arabic, Hindi, Thai, Vietnamese, Japanese, Korean and Simplified Chinese.'],
        ['Who makes Measuro?', 'Measuro is made by Albea Systems, an independent developer.'],
      ],
    },
    convert: { back: 'All conversions', home: 'Measuro' },
    free: {
      title: 'Free to use',
      body: 'Measuro is free and supported by ads. A one-time Remove Ads purchase takes them away for good.',
    },
    divix: {
      title: 'Need currencies?',
      body: 'Measuro covers units, not money. For exchange rates there is Divix, our free currency converter.',
      cta: 'See Divix',
    },
    final: { title: 'Ready when you are.', cta: 'Get the free app' },
    footer: {
      by: 'Measuro is made by Albea Systems.',
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
      legal:
        'Apple, iPhone and App Store are trademarks of Apple Inc. Measuro is an independent app and is not affiliated with or endorsed by Apple.',
    },
    legal: {
      back: 'Back to Measuro',
      updated: 'Last updated: October 2026',
      draft: 'Draft text for review before publishing.',
      privacy: {
        title: 'Privacy policy',
        sections: [
          ['What stays on your device', 'Conversions, favorites, recent conversions and settings are stored on your iPhone. Measuro has no account system and does not upload what you convert.'],
          ['Ads', 'The free version shows ads served by third-party advertising networks through a mediation service. These networks may use your device advertising identifier and similar data. On first launch Measuro asks for your consent where the law requires it, and asks permission under Apple’s App Tracking Transparency before any tracking. You can change your choice in iOS Settings.'],
          ['Purchases', 'The Remove Ads purchase is processed by Apple. Measuro does not receive your payment details.'],
          ['Children', 'Measuro is a general-audience utility and is not directed at children under 13.'],
          ['Contact', 'Questions about privacy: albeasystems@gmail.com.'],
        ],
      },
      terms: {
        title: 'Terms of use',
        sections: [
          ['Use of the app', 'Measuro is provided for personal conversions of units. Results are computed from standard conversion factors and are provided as-is.'],
          ['Accuracy', 'Check results before relying on them for medical, structural, safety-critical or legal purposes. Albea Systems is not liable for losses arising from the use of conversions.'],
          ['Purchases', 'Remove Ads is a one-time, non-consumable purchase handled by the App Store and subject to Apple’s terms.'],
          ['Changes', 'We may update the app and these terms. Continued use means you accept the current version.'],
          ['Contact', 'albeasystems@gmail.com.'],
        ],
      },
      support: {
        title: 'Support',
        lead: 'Something not working, or a unit missing? Write to us and we will reply as soon as we can.',
        mail: 'Email support',
        faq: [
          ['How do I convert a value?', 'Open a category, type a number on the keypad and read every unit in the list. Tap another unit to make it the source.'],
          ['How do I remove ads?', 'Use the Remove Ads banner in the converter or Settings. Restore Purchases brings it back on a new device.'],
          ['Does it need internet?', 'No. Conversions work offline.'],
          ['Can I convert currencies?', 'Not in Measuro. Our sister app Divix converts currencies.'],
        ],
      },
    },
    a11y: { skip: 'Skip to content', langSwitch: 'Switch to Spanish' },
  },

  es: {
    htmlLang: 'es',
    otherLang: { code: 'en', label: 'EN', name: 'English', href: `${BASE}en/` },
    home: `${BASE}es/`,
    nav: { features: 'Qué hace', categories: 'Categorías', faq: 'Preguntas', get: 'Descargar' },
    hero: {
      headline: ['Escribe una vez.', 'Responden todas las unidades.'],
      sub: 'Measuro es un conversor de unidades gratis para iPhone. Escribe un valor y míralo a la vez en todas las unidades de la categoría. Lleva calculadora integrada y funciona sin conexión.',
      cta: 'Descarga la app gratis',
      more: 'Ver cómo funciona',
      pause: 'Pausar animación',
      play: 'Reproducir animación',
      facts: ['29 categorías', '271 unidades', 'Sin conexión'],
      phoneAlt:
        'Measuro en iPhone: elige Longitud, escribe 100 metros y mira cómo se actualizan kilómetros, centímetros, milímetros y pulgadas a la vez. Después Masa y la calculadora.',
      phoneAltStill:
        'Measuro en iPhone: 100 metros convertidos a la vez en kilómetros, centímetros, milímetros y pulgadas.',
    },
    demo: {
      title: 'Entra un valor. Salen todas las unidades.',
      lead: 'No hay un origen y un destino que configurar. Escribes 100 m y se rellena toda la lista de longitudes. Toca otra unidad y pasa a ser el origen.',
      rows: [
        ['100 m', 'Escribes'],
        ['0,1 km', 'Kilómetro'],
        ['10.000 cm', 'Centímetro'],
        ['100.000 mm', 'Milímetro'],
        ['3937,00787 in', 'Pulgada'],
      ],
      stillAlt: 'Pantalla de Longitud con 100 metros escritos y las conversiones listadas debajo.',
      massTitle: 'Cambias de categoría, cambia el color.',
      massLead: 'Cada categoría tiene su color. Masa se vuelve naranja, Longitud sigue azul, y siempre sabes dónde estás.',
      massAlt: 'Pantalla de Masa con 42 kilogramos convertidos a toneladas, gramos, miligramos y microgramos.',
      calcTitle: 'La calculadora, a un toque.',
      calcLead: 'Resuelve 12 × 8 sin salir de la app. Measuro también evalúa expresiones directamente en el conversor.',
      calcAlt: 'Calculadora que muestra 12 por 8 igual a 96.',
    },
    features: {
      title: 'Hecha para la respuesta rápida',
      items: [
        ['Métrico e imperial', 'Juntos, de milímetros a años luz, para no convertir nunca en dos pasos.'],
        ['Sin conexión', 'Las conversiones se calculan en tu iPhone. Sin cobertura en el taller o en el súper no pasa nada.'],
        ['De la cocina al taller', 'Tazas, tallas de calzado y ritmo de carrera conviven con presión, par motor y tensión.'],
        ['Tu propia lista', 'Marca con estrella las unidades que usas y reordénalas. Las conversiones recientes te esperan en la pantalla de inicio.'],
        ['Atajos y widget', 'Pídeselo a Siri o crea un atajo. Pon una conversión en tu pantalla de inicio.'],
        ['En tu idioma', 'Disponible en 14 idiomas.'],
      ],
    },
    cats: {
      title: 'Todas las categorías de la app',
      lead: 'De la longitud a la dosis de radiación.',
      list: [
        'Longitud', 'Área', 'Volumen', 'Masa', 'Velocidad', 'Temperatura', 'Cocina', 'Ritmo', 'Talla de calzado', 'Presión',
        'Energía', 'Potencia', 'Tiempo', 'Almacenamiento digital', 'Velocidad de datos', 'Consumo de combustible', 'Ángulo', 'Fuerza', 'Par motor',
        'Frecuencia', 'Densidad', 'Caudal', 'Luminosidad', 'Intensidad eléctrica', 'Tensión eléctrica', 'Viscosidad',
        'Aceleración', 'Radiactividad', 'Dosis de radiación',
      ],
    },
    widget: {
      title: 'Tu pantalla de inicio, convertida.',
      lead: 'Añade el widget de Measuro y mira una conversión sin abrir la app. Déjalo vacío para seguir tus unidades favoritas, o elige un par de unidades y un valor. También hay versiones para la pantalla de bloqueo.',
      alt: 'Pantalla de inicio de iPhone con el widget de Measuro convirtiendo 1 tonelada métrica en kilogramos, gramos, miligramos y microgramos.',
    },
    popular: { title: 'Conversiones populares', lead: 'Respuestas rápidas, con la fórmula y una tabla.' },
    faq: {
      title: 'Preguntas sobre Measuro',
      items: [
        ['¿Qué es Measuro?', 'Measuro es un conversor de unidades gratis para iPhone. Escribes un valor una vez y lo ves a la vez en todas las unidades de la categoría. Tiene 29 categorías y 271 unidades, incluye calculadora y funciona sin conexión.'],
        ['¿Measuro es gratis?', 'Sí. Measuro es gratis para descargar y usar, y se financia con anuncios. Una compra única de «Sin publicidad» los elimina para siempre.'],
        ['¿Measuro funciona sin conexión?', 'Sí. Todas las conversiones se calculan en tu iPhone, así que no necesitas internet.'],
        ['¿Qué unidades convierte Measuro?', 'Veintinueve categorías: longitud, área, volumen, masa, velocidad, temperatura, cocina, ritmo, talla de calzado, presión, energía, potencia, tiempo, almacenamiento digital, velocidad de datos, consumo de combustible, ángulo, fuerza, par motor, frecuencia, densidad, caudal, luminosidad, intensidad eléctrica, tensión eléctrica, viscosidad, aceleración, radiactividad y dosis de radiación.'],
        ['¿Measuro convierte divisas?', 'No. Measuro convierte unidades, no dinero. Para tipos de cambio, Albea Systems también hace Divix, un conversor de divisas gratuito.'],
        ['¿Measuro tiene widget?', 'Sí. Un widget en la pantalla de inicio muestra una conversión. Déjalo vacío para seguir tus unidades favoritas, o elige un par de unidades y un valor. También admite widgets en la pantalla de bloqueo, Siri y Atajos.'],
        ['¿En qué idiomas está Measuro?', 'En catorce: inglés, español, francés, alemán, italiano, portugués (Brasil), ruso, árabe, hindi, tailandés, vietnamita, japonés, coreano y chino simplificado.'],
        ['¿Quién hace Measuro?', 'Measuro lo hace Albea Systems, un desarrollador independiente.'],
      ],
    },
    convert: { back: 'Todas las conversiones', home: 'Measuro' },
    free: {
      title: 'Gratis para usar',
      body: 'Measuro es gratis y se financia con anuncios. Una compra única de «Sin publicidad» los elimina para siempre.',
    },
    divix: {
      title: '¿Necesitas divisas?',
      body: 'Measuro convierte unidades, no dinero. Para tipos de cambio está Divix, nuestro conversor de divisas gratuito.',
      cta: 'Ver Divix',
    },
    final: { title: 'Lista para cuando la necesites.', cta: 'Descarga la app gratis' },
    footer: {
      by: 'Measuro es obra de Albea Systems.',
      privacy: 'Privacidad',
      terms: 'Términos',
      support: 'Soporte',
      legal:
        'Apple, iPhone y App Store son marcas de Apple Inc. Measuro es una app independiente y no está afiliada ni respaldada por Apple.',
    },
    legal: {
      back: 'Volver a Measuro',
      updated: 'Última actualización: octubre de 2026',
      draft: 'Texto en borrador, a revisar antes de publicar.',
      privacy: {
        title: 'Política de privacidad',
        sections: [
          ['Lo que se queda en tu dispositivo', 'Las conversiones, favoritos, conversiones recientes y ajustes se guardan en tu iPhone. Measuro no tiene cuentas y no sube lo que conviertes.'],
          ['Anuncios', 'La versión gratuita muestra anuncios de redes publicitarias de terceros a través de un servicio de mediación. Estas redes pueden usar el identificador publicitario de tu dispositivo y datos similares. Al abrir la app por primera vez, Measuro pide tu consentimiento cuando la ley lo exige y solicita permiso con la Transparencia de Seguimiento de Apps antes de cualquier seguimiento. Puedes cambiar tu elección en los Ajustes de iOS.'],
          ['Compras', 'La compra de «Sin publicidad» la procesa Apple. Measuro no recibe tus datos de pago.'],
          ['Menores', 'Measuro es una utilidad de uso general y no está dirigida a menores de 13 años.'],
          ['Contacto', 'Dudas sobre privacidad: albeasystems@gmail.com.'],
        ],
      },
      terms: {
        title: 'Términos de uso',
        sections: [
          ['Uso de la app', 'Measuro se ofrece para conversiones personales de unidades. Los resultados se calculan con factores de conversión estándar y se ofrecen tal cual.'],
          ['Exactitud', 'Comprueba los resultados antes de usarlos en ámbitos médicos, estructurales, de seguridad o legales. Albea Systems no responde de las pérdidas derivadas del uso de las conversiones.'],
          ['Compras', '«Sin publicidad» es una compra única no consumible gestionada por el App Store y sujeta a las condiciones de Apple.'],
          ['Cambios', 'Podemos actualizar la app y estos términos. Seguir usando la app implica aceptar la versión vigente.'],
          ['Contacto', 'albeasystems@gmail.com.'],
        ],
      },
      support: {
        title: 'Soporte',
        lead: '¿Algo no funciona o falta una unidad? Escríbenos y te respondemos en cuanto podamos.',
        mail: 'Escribir a soporte',
        faq: [
          ['¿Cómo convierto un valor?', 'Abre una categoría, escribe un número en el teclado y lee todas las unidades de la lista. Toca otra unidad para que sea el origen.'],
          ['¿Cómo quito los anuncios?', 'Usa el banner «Sin publicidad» en el conversor o en Ajustes. Restaurar compras la recupera en un dispositivo nuevo.'],
          ['¿Necesita internet?', 'No. Las conversiones funcionan sin conexión.'],
          ['¿Puedo convertir divisas?', 'No en Measuro. Nuestra app hermana Divix convierte divisas.'],
        ],
      },
    },
    a11y: { skip: 'Saltar al contenido', langSwitch: 'Cambiar a inglés' },
  },
};
