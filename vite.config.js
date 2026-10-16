import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

const pages = ['', 'en/', 'es/', 'en/privacy/', 'en/terms/', 'en/support/', 'es/privacy/', 'es/terms/', 'es/support/'];

export default defineConfig(({ isSsrBuild }) => ({
  // Set BASE_PATH=/measuro-web/ when building for GitHub Pages project sites.
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          input: Object.fromEntries(pages.map((p) => [p || 'root', resolve(import.meta.dirname, p, 'index.html')])),
        },
      },
}));
