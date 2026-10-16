import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export { routes, headHtml, llmsTxt, llmsFull, sitemapXml, robotsTxt } from './seo.js';
export const render = (route) => renderToString(<App route={route} />);
