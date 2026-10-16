import { BASE, CATEGORY_COLORS, DIVIX_STORE } from './content.js';
import { PAIRS, describe } from './convert.js';
import { Arrow, Footer, HappyPath, Header, Phone, StoreLink } from './ui.jsx';

export default function Home({ lang, t, alt }) {
  const media = `${BASE}media/${lang}`;
  return (
    <>
      <a className="btn btn-sm skip" href="#main">{t.a11y.skip}</a>
      <Header t={t} alt={alt} />
      <main id="main">
        <Hero lang={lang} t={t} />
        <Demo media={media} t={t} />
        <Widget media={media} t={t} />
        <Features t={t} />
        <Categories t={t} />
        <Popular lang={lang} t={t} />
        <Faq t={t} />
        <FreeAndDivix t={t} />
        <FinalCta t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}

function Hero({ lang, t }) {
  const [l1, l2] = t.hero.headline;
  return (
    <section className="wrap pt-8 md:pt-10 text-center grid justify-items-center gap-4 overflow-x-clip">
      <h1 className="display settle max-w-[24ch]" style={{ '--i': 0 }}>
        <span className="block">{l1}</span>{' '}
        <span className="block text-action">{l2}</span>
      </h1>
      <p className="subtitle max-w-[52ch] settle" style={{ '--i': 1 }}>{t.hero.sub}</p>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 settle" style={{ '--i': 2 }}>
        <StoreLink t={t} />
        <a className="link text-[1.05rem] inline-flex items-center min-h-11" href="#demo">{t.hero.more}<Arrow /></a>
      </div>
      <p className="text-[0.95rem] text-muted settle -mt-1" style={{ '--i': 3 }}>
        {t.hero.facts.join('  ·  ')}
      </p>
      <div className="settle relative z-10 mt-2 -mb-24 md:-mb-32" style={{ '--i': 4 }}>
        <HappyPath lang={lang} t={t} />
      </div>
    </section>
  );
}

function Demo({ media, t }) {
  const d = t.demo;
  return (
    <section id="demo" className="band section pt-36 md:pt-48 scroll-mt-14" aria-labelledby="demo-title">
      <div className="wrap grid gap-24 md:gap-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <div className="grid gap-6 md:order-2">
            <h2 id="demo-title" className="title max-w-[14ch]">{d.title}</h2>
            <p className="lead">{d.lead}</p>
            <dl className="m-0 mt-2 border-t border-line" aria-label={d.title}>
              {d.rows.map(([value, label], i) => (
                <div key={label} className="flex items-baseline justify-between gap-6 border-b border-line py-3">
                  <dt className="text-muted">{label}</dt>
                  <dd className={`m-0 font-semibold tracking-tight ${i === 0 ? 'text-action text-[2rem]' : 'text-[1.6rem]'}`}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="justify-self-center md:order-1">
            <Phone src={`${media}/02-length.webp`} alt={d.stillAlt} />
          </div>
        </div>

        <div className="grid gap-20 md:grid-cols-2 md:gap-16 md:items-start">
          <figure className="m-0 grid gap-8 justify-items-center text-center">
            <figcaption className="grid gap-3 justify-items-center">
              <h3 className="title !text-[clamp(1.7rem,3.4vw,2.4rem)] max-w-[16ch]">{d.massTitle}</h3>
              <p className="lead">{d.massLead}</p>
            </figcaption>
            <Phone src={`${media}/03-mass.webp`} alt={d.massAlt} w="17rem" />
          </figure>
          <figure className="m-0 grid gap-8 justify-items-center text-center">
            <figcaption className="grid gap-3 justify-items-center">
              <h3 className="title !text-[clamp(1.7rem,3.4vw,2.4rem)] max-w-[16ch]">{d.calcTitle}</h3>
              <p className="lead">{d.calcLead}</p>
            </figcaption>
            <Phone src={`${media}/04-calculator.webp`} alt={d.calcAlt} w="17rem" />
          </figure>
        </div>
      </div>
    </section>
  );
}

function Features({ t }) {
  return (
    <section id="features" className="wrap section scroll-mt-14" aria-labelledby="features-title">
      <h2 id="features-title" className="title mb-14 max-w-[18ch]">{t.features.title}</h2>
      <ul className="list-none p-0 m-0 grid gap-x-16 gap-y-0 md:grid-cols-2">
        {t.features.items.map(([label, text]) => (
          <li key={label} className="border-t border-line py-7 grid gap-2">
            <h3 className="text-[1.3rem] tracking-tight">{label}</h3>
            <p className="text-muted max-w-[44ch]">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Categories({ t }) {
  return (
    <section id="categories" className="band section scroll-mt-14" aria-labelledby="cats-title">
      <div className="wrap grid gap-10">
        <div className="grid gap-3">
          <h2 id="cats-title" className="title max-w-[18ch]">{t.cats.title}</h2>
          <p className="lead">{t.cats.lead}</p>
        </div>
        <ul className="list-none p-0 m-0 grid gap-x-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {t.cats.list.map((name, i) => (
            <li key={name} className="border-t border-line py-3 flex items-center gap-3">
              <span className="dot" style={{ '--dot': CATEGORY_COLORS[i] }} aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FreeAndDivix({ t }) {
  return (
    <section className="wrap section grid gap-6 justify-items-start">
      <h2 className="title !text-[clamp(1.7rem,3.4vw,2.4rem)]">{t.free.title}</h2>
      <p className="lead">{t.free.body}</p>
      <p className="text-muted text-[0.95rem]">
        {t.divix.body}{' '}
        <a className="link link-inline" href={DIVIX_STORE} rel="noopener">{t.divix.cta}<Arrow /></a>
      </p>
    </section>
  );
}

function FinalCta({ t }) {
  return (
    <section className="band section text-center">
      <div className="wrap grid justify-items-center gap-8">
        <img src={`${BASE}icon-176.png`} alt="" width="88" height="88" className="size-[5.5rem] rounded-[1.3rem] shadow-[0_10px_30px_-8px_rgb(0_0_0/0.35)]" />
        <h2 className="display !text-[clamp(2.2rem,5.5vw,4rem)] max-w-[16ch]">{t.final.title}</h2>
        <StoreLink t={t}>{t.final.cta}</StoreLink>
      </div>
    </section>
  );
}

function Widget({ media, t }) {
  return (
    <section className="wrap section grid gap-12 md:grid-cols-2 md:items-center md:gap-20" aria-labelledby="widget-title">
      <div className="grid gap-5 content-center">
        <h2 id="widget-title" className="title max-w-[14ch]">{t.widget.title}</h2>
        <p className="lead">{t.widget.lead}</p>
      </div>
      <div className="justify-self-center">
        <Phone src={`${media}/05-widget.webp`} alt={t.widget.alt} />
      </div>
    </section>
  );
}

function Popular({ lang, t }) {
  return (
    <section id="popular" className="band section scroll-mt-14" aria-labelledby="popular-title">
      <div className="wrap grid gap-10">
        <div className="grid gap-3">
          <h2 id="popular-title" className="title max-w-[18ch]">{t.popular.title}</h2>
          <p className="lead">{t.popular.lead}</p>
        </div>
        <ul className="list-none p-0 m-0 grid gap-x-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PAIRS.map((p) => (
            <li key={p.id} className="border-t border-line">
              <a className="link link-block" href={`${BASE}${lang}/convert/${p.slug[lang]}/`}>{describe(p, lang).h1}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq({ t }) {
  return (
    <section id="faq" className="wrap-narrow section scroll-mt-14" aria-labelledby="faq-title">
      <h2 id="faq-title" className="title mb-10">{t.faq.title}</h2>
      <dl className="m-0">
        {t.faq.items.map(([q, a]) => (
          <div key={q} className="border-t border-line py-6 grid gap-2">
            <dt className="font-semibold text-[1.15rem] tracking-tight">{q}</dt>
            <dd className="m-0 text-muted">{a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
