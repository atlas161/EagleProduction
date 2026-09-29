import fs from 'fs';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const MEDIA_DIR = path.resolve(__dirname, 'media');

// Sert `media/*` sous `/media/*` en dev, comme le fait la copie statique au build.
// Les requêtes avec query (`?import`, `?url`…) sont laissées à Vite : sinon les images importées
// dans les composants sont renvoyées brutes comme « modules » et l'app reste blanche.
const serveMediaInDev = (): Plugin => ({
  name: 'serve-media-in-dev',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url || '';
      if (!url.startsWith('/media/') || url.includes('?')) return next();
      const file = path.join(MEDIA_DIR, decodeURIComponent(url.slice('/media/'.length)));
      if (!file.startsWith(MEDIA_DIR) || !fs.existsSync(file) || !fs.statSync(file).isFile()) return next();
      res.setHeader('Cache-Control', 'no-cache');
      fs.createReadStream(file).pipe(res);
    });
  },
});

// Au build : seuls les médias référencés par URL (images du blog/CMS, logos du JSON-LD) sont copiés tels quels
// dans dist/media. Les autres images sont importées par les composants et donc traitées/hashées par Vite.
const PUBLIC_MEDIA = ['blog', 'logo_beige.png', 'aigle_beige.png'];
const copyMediaAtBuild = (): Plugin => ({
  name: 'copy-media-at-build',
  apply: 'build',
  closeBundle() {
    const out = path.resolve(__dirname, 'dist', 'media');
    fs.mkdirSync(out, { recursive: true });
    for (const entry of PUBLIC_MEDIA) {
      const src = path.join(MEDIA_DIR, entry);
      if (fs.existsSync(src)) fs.cpSync(src, path.join(out, entry), { recursive: true });
    }
  },
});

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [
    react(),
    serveMediaInDev(),
    copyMediaAtBuild(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Seuls React + routeur sont isolés (cache long, partagés par toutes les pages) ; le reste suit le code splitting
        // par route (Leaflet avec la carte, Vimeo/Framer Motion avec l'accueil, Headless UI avec le formulaire…).
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
