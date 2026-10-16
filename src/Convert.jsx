import { BASE } from './content.js';
import { PAIRS, describe, pairById } from './convert.js';
import { Arrow, Footer, Header, StoreLink } from './ui.jsx';

export default function Convert({ lang, t, pair, alt }) {
  const d = describe(pair, lang);
  const rev = pair.rev ? pairById(pair.rev) : null;
  const to = (p) => `${BASE}${lang}/convert/${p.slug[lang]}/`;
  return (
    <>
      <a className="btn btn-sm skip" href="#main">{t.a11y.skip}</a>
      <Header t={t} alt={alt} />
      <main id="main" className="wrap-narrow pt-12 pb-24 grid gap-12">
        <nav aria-label="Breadcrumb">
          <a className="link inline-flex items-center min-h-11" href={`${t.home}#popular`}>
            <Arrow dir="left" />{t.convert.back}
          </a>
        </nav>

        <header className="grid gap-5">
          <h1 className="title">{d.h1}</h1>
          <p className="subtitle text-ink">{d.answer}</p>
          <p className="lead">{d.how}</p>
          <p className="font-semibold tracking-tight text-[1.25rem]">{d.formula}</p>
        </header>

        <section aria-labelledby="chart-title">
          <table className="chart">
            <caption id="chart-title">{d.chart}</caption>
            <thead>
              <tr><th scope="col">{d.cols[0]} ({pair.from.sym})</th><th scope="col">{d.cols[1]} ({pair.to.sym})</th></tr>
            </thead>
            <tbody>
              {d.rows.map(([a, b]) => (
                <tr key={a}><td>{a}</td><td>{b}</td></tr>
              ))}
            </tbody>
          </table>
          {rev && (
            <p className="mt-6">
              <a className="link inline-flex items-center min-h-11" href={to(rev)}>{d.reverse(rev)}<Arrow /></a>
            </p>
          )}
        </section>

        <section className="grid gap-5 border-t border-line pt-10" aria-labelledby="cta-title">
          <h2 id="cta-title" className="title !text-[clamp(1.6rem,3vw,2.2rem)]">{d.cta}</h2>
          <p className="lead">{d.ctaText}</p>
          <div><StoreLink t={t} /></div>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="title !text-[clamp(1.6rem,3vw,2.2rem)] mb-6">{lang === 'en' ? 'Common questions' : 'Preguntas frecuentes'}</h2>
          <dl className="m-0">
            {d.faq.map(([q, a]) => (
              <div key={q} className="border-t border-line py-6 grid gap-2">
                <dt className="font-semibold text-[1.15rem] tracking-tight">{q}</dt>
                <dd className="m-0 text-muted">{a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="more-title" className="border-t border-line pt-10">
          <h2 id="more-title" className="title !text-[clamp(1.6rem,3vw,2.2rem)] mb-4">{d.related}</h2>
          <ul className="list-none p-0 m-0 grid gap-x-8 sm:grid-cols-2">
            {PAIRS.filter((p) => p.id !== pair.id).map((p) => (
              <li key={p.id}>
                <a className="link link-block" href={to(p)}>{describe(p, lang).h1}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
