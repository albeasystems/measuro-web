import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { content } from './content.js';
import Home from './Home.jsx';
import Legal from './Legal.jsx';

const root = document.getElementById('root');
const lang = root.dataset.lang in content ? root.dataset.lang : 'en';
const page = root.dataset.page || 'home';
const t = content[lang];

createRoot(root).render(
  <StrictMode>{page === 'home' ? <Home lang={lang} t={t} /> : <Legal page={page} t={t} />}</StrictMode>,
);
