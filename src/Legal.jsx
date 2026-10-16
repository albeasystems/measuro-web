import { CONTACT } from './content.js';
import { Arrow, Footer, Header } from './ui.jsx';

export default function Legal({ page, t, alt }) {
  const L = t.legal;
  const doc = L[page];
  return (
    <>
      <a className="btn btn-sm skip" href="#main">{t.a11y.skip}</a>
      <Header t={t} alt={alt} />
      <main id="main" className="wrap-narrow pt-12 pb-24 grid gap-10">
        <a className="link justify-self-start" href={t.home}><Arrow dir="left" />{L.back}</a>
        <div className="grid gap-3">
          <h1 className="title">{doc.title}</h1>
          {page !== 'support' && <p className="text-muted">{L.updated}</p>}
        </div>

        {page === 'support' ? (
          <div className="grid gap-10">
            <p className="subtitle">{doc.lead}</p>
            <a className="btn justify-self-start" href={`mailto:${CONTACT}`}>{doc.mail}</a>
            <dl className="grid gap-0 m-0">
              {doc.faq.map(([q, a]) => (
                <div key={q} className="border-t border-line py-6 grid gap-2">
                  <dt className="font-semibold text-[1.15rem] tracking-tight">{q}</dt>
                  <dd className="m-0 text-muted">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        ) : (
          <div className="grid gap-0">
            {doc.sections.map(([h, body]) => (
              <section key={h} className="border-t border-line py-6 grid gap-2">
                <h2 className="text-[1.25rem] tracking-tight">{h}</h2>
                <p className="text-muted">{body}</p>
              </section>
            ))}
          </div>
        )}
      </main>
      <Footer t={t} />
    </>
  );
}
