import { useEffect, useState } from 'react';
import { APP_STORE, BASE, CONTACT } from './content.js';

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return reduced;
}

export function Phone({ src, alt, width = 600, height = 1304, eager = false, w }) {
  return (
    <div className="phone" style={w ? { '--phone-w': w } : undefined}>
      <img src={src} alt={alt} width={width} height={height} loading="eager" decoding="async" />
    </div>
  );
}

export function Arrow({ dir = 'right' }) {
  return (
    <svg className="inline-block size-[0.8em] -mt-px ml-1" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={dir === 'left' ? { transform: 'scaleX(-1)', marginLeft: 0, marginRight: '0.25rem' } : undefined}>
      <path d="M4 1.5 8.5 6 4 10.5" />
    </svg>
  );
}

/** The happy-path GIF. It can be paused, and reduced-motion visitors start on the still. */
export function HappyPath({ lang, t }) {
  const reduced = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);
  const base = `${BASE}media/${lang}`;
  const still = reduced || paused;
  return (
    <div className="grid justify-items-center gap-4">
      {still ? (
        <Phone src={`${base}/02-length.webp`} alt={t.hero.phoneAltStill} />
      ) : (
        <Phone src={`${base}/measuro-happy-path.gif`} alt={t.hero.phoneAlt} width={640} height={1391} />
      )}
      {!reduced && (
        <button type="button" className="pause" onClick={() => setPaused((p) => !p)} aria-pressed={paused}>
          <svg viewBox="0 0 12 12" className="size-3" fill="currentColor" aria-hidden="true">
            {paused ? <path d="M3 1.8v8.4L10 6z" /> : <path d="M2.5 1.5h2.6v9H2.5zm4.4 0h2.6v9H6.9z" />}
          </svg>
          {paused ? t.hero.play : t.hero.pause}
        </button>
      )}
    </div>
  );
}

export function StoreLink({ children, t }) {
  return (
    <a className="btn" href={APP_STORE} rel="noopener">
      {children ?? t.hero.cta}
    </a>
  );
}

export function Header({ t, alt }) {
  const otherLang = alt ? { ...t.otherLang, href: alt } : t.otherLang;
  return (
    <header className="border-b border-line bg-paper sticky top-0 z-40">
      <div className="wrap flex h-14 items-center justify-between gap-4">
        <a href={t.home} className="flex items-center gap-2.5 min-h-11 text-ink no-underline font-semibold text-[1.05rem] tracking-tight" aria-label="Measuro">
          <img src={`${BASE}icon-176.png`} alt="" width="28" height="28" className="size-7 rounded-[0.4rem]" />
          Measuro
        </a>
        <nav className="flex items-center gap-4 sm:gap-6" aria-label="Measuro">
          <a className="nav-link hidden md:inline-flex" href={`${t.home}#features`}>{t.nav.features}</a>
          <a className="nav-link hidden md:inline-flex" href={`${t.home}#categories`}>{t.nav.categories}</a>
          <a className="nav-link hidden lg:inline-flex" href={`${t.home}#faq`}>{t.nav.faq}</a>
          <div className="lang-switch" role="group" aria-label={t.a11y.langGroup}>
            {[
              { code: 'en', label: 'EN', name: 'English' },
              { code: 'es', label: 'ES', name: 'Español' },
            ].map((l) =>
              l.code === t.htmlLang ? (
                <span key={l.code} className="lang-current" aria-current="true" lang={l.code} title={l.name}>
                  {l.label}
                </span>
              ) : (
                <a key={l.code} className="lang-link" href={otherLang.href} hrefLang={l.code} lang={l.code} aria-label={t.a11y.langSwitch} title={l.name}>
                  {l.label}
                </a>
              ),
            )}
          </div>
          <a className="btn btn-sm" href={APP_STORE} rel="noopener">{t.nav.get}</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer({ t }) {
  const base = t.home;
  return (
    <footer className="band border-t border-line">
      <div className="wrap py-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end text-[0.92rem] text-muted">
        <div className="grid gap-2 max-w-[62ch]">
          <p className="text-ink font-medium">{t.footer.by}</p>
          <p className="leading-snug">{t.footer.legal}</p>
        </div>
        <ul className="flex flex-wrap gap-x-4 list-none p-0 m-0">
          <li><a className="link foot-link" href={`${base}privacy/`}>{t.footer.privacy}</a></li>
          <li><a className="link foot-link" href={`${base}terms/`}>{t.footer.terms}</a></li>
          <li><a className="link foot-link" href={`${base}support/`}>{t.footer.support}</a></li>
          <li><a className="link foot-link" href={`mailto:${CONTACT}`}>{CONTACT}</a></li>
        </ul>
      </div>
    </footer>
  );
}
