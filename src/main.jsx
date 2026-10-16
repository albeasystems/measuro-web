import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App, { routeFrom } from './App.jsx';

const root = document.getElementById('root');
const route = routeFrom({ lang: root.dataset.lang, page: root.dataset.page, slug: root.dataset.slug });
const app = (
  <StrictMode>
    <App route={route} />
  </StrictMode>
);

// Pages are prerendered at build time, so crawlers get real HTML; the browser then takes it over.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
