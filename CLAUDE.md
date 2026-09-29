# CLAUDE.md

Site vitrine **Eagle Production / Eagle Digital** (drone, vidéo, web) — https://www.eagle-prod.com. Repo GitHub `atlas161/EagleProduction`, branche `main`, déployé sur Netlify (auto-deploy au push).

## Commandes

- `npm run dev` — Vite dev server (port 3000)
- `npm run build` — `node build.js` : `vite build` puis post-traitement (voir ci-dessous) → `dist/`
- `npm run preview` — prévisualise `dist/`
- Pas de tests ni de linter configurés. Vérifier avec `npm run build` (le typecheck se fait via `npx tsc --noEmit`).

## Architecture

- **SPA React 19 + Vite + Tailwind 3 + react-router-dom 7**, TypeScript. Les fichiers sources sont **à la racine** (pas de `src/` applicatif) : `index.tsx` (router, toutes les routes), `App.tsx` (page d'accueil), `components/` (sections + une `*Page.tsx` par route), `types.ts`.
- Alias `@` → racine du projet.
- **Ajouter une page** : créer `components/XxxPage.tsx`, ajouter la `<Route>` dans `index.tsx`, puis l'ajouter dans `build.js` (sitemap + pré-rendu SEO) et dans la navigation (`Navbar.tsx` / `Footer.tsx`) si besoin.
- **Contenu éditable sans code** : `config/siteConfig.ts` (tarifs, avis, FAQ, contact, vidéo Vimeo hero… voir `config/README.md`). `SEOSchema.tsx` génère le JSON-LD depuis cette config.
- **Blog / CMS** : articles Markdown avec frontmatter dans `content/posts/`, FAQ dans `content/faqs/`, avis dans `content/reviews/`. Édités via Pages CMS (`.pages.yml`) — les commits « via Pages CMS » viennent de là, donc `git pull` avant de travailler. Images blog dans `media/blog`.
- **`build.js`** (après `vite build`) : copie `public/`, génère `sitemap.xml` (incl. articles), et pré-rend des pages HTML statiques avec metas SEO injectées (title, description, canonical, OG, schema). Toute nouvelle route publique doit y être déclarée sinon elle n'a pas de meta SEO ni d'entrée sitemap.
- **`netlify.toml`** : build `npm run build`, publish `dist`, headers de sécurité/cache, redirections non-www→www (`eagle-prod.com` → `www.eagle-prod.com`), fallback SPA `/* → /index.html` (doit rester **en dernier**).
- `public/` : fichiers statiques copiés tels quels (favicons, geojson, mentions-legales.html…). `tarif eagle digitale/` : documents de tarifs (hors build).

## Notes

- Textes du site en français ; garder le ton et les accents.
- `dist/`, `node_modules/`, `*.log` sont gitignorés (`vite-output.log` à la racine est un artefact).
- Un push sur `main` = mise en production Netlify : ne pas pousser sans accord de l'utilisateur.
