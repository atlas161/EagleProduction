# CLAUDE.md

Site vitrine **Eagle Production / Eagle Digital** (drone, vidéo, web) — https://www.eagle-prod.com. Repo GitHub `atlas161/EagleProduction`, branche `main`, déployé sur Netlify (auto-deploy au push).

## Commandes

- `npm run dev` — Vite dev server (port 3000)
- `npm run build` — `node build.js` : `vite build` puis post-traitement (voir ci-dessous) → `dist/`
- `npm run preview` — prévisualise `dist/`
- `npm run typecheck` — `tsc --noEmit`
- Pas de tests ni de linter configurés. Vérifier avec `npm run typecheck` puis `npm run build` (le build échoue si routes et registre SEO divergent).
- Node ≥ 20.19 (Netlify : `NODE_VERSION = "22"` dans `netlify.toml`).

## Architecture

- **SPA React 19 + Vite + Tailwind 3 + react-router-dom 7**, TypeScript. Les fichiers sources sont **à la racine** (pas de `src/` applicatif) : `index.tsx` (routeur, toutes les routes, chargées à la demande via `React.lazy`), `App.tsx` (page d'accueil), `components/` (sections + une `*Page.tsx` par route), `hooks/`, `lib/`, `types.ts`.
- Alias `@` → racine du projet.
- **Navigation interne sans rechargement** : `components/RouterHelpers.tsx` intercepte les clics sur les `<a href="/…">` (liens normaux, pas besoin de `<Link>`), et remonte en haut à chaque nouvelle page. Les fichiers (`/mentions-legales.html`), liens externes et clics modifiés gardent le comportement natif. Liens vers une section de l'accueil : `href="/#services"` (ids dans `types.ts` → `Section`).
- **Ajouter une page publique** (3 étapes, sinon `npm run build` échoue) :
  1. créer `components/XxxPage.tsx` (structure : `<Navbar />`, `<main id="main-content">`, `<Footer />`, un seul `<h1>`), qui appelle `useSeo('/ma-route')` ;
  2. ajouter la `<Route>` + le `lazy` dans `index.tsx` ;
  3. ajouter l'entrée (`path`, `title`, `description`, `keywords`, `priority`) dans **`lib/pages.mjs`** — registre unique utilisé par le sitemap, le pré-rendu SEO (`build.js`) et `hooks/useSeo.ts`. Puis lier la page depuis la navigation (`Navbar.tsx` / `Footer.tsx`) si besoin.
- **Métas SEO** : `hooks/useSeo.ts` (côté client, à chaque navigation) + `build.js` (HTML statique par route, pour les robots). Ne pas réécrire de `document.title`/`setMeta` à la main dans les pages.
- **Contenu éditable sans code** : `config/siteConfig.ts` (vidéo Vimeo du hero, note Google, tarifs de l'accueil `RATES`/`DIGITAL_RATES`, coordonnées et réseaux, section À propos — voir `config/README.md`). `SEOSchema.tsx` génère le JSON-LD de l'accueil depuis cette config + la FAQ CMS.
- **Blog / CMS** : articles Markdown (corps en HTML) avec frontmatter dans `content/posts/`, FAQ dans `content/faqs/`, avis dans `content/reviews/`. Édités via Pages CMS (`.pages.yml`) — les commits « via Pages CMS » viennent de là, donc `git pull` avant de travailler. Images blog dans `media/blog`. Le frontmatter est lu par `lib/frontmatter.mjs` (partagé site + build : gère les valeurs repliées sur plusieurs lignes et les listes YAML).
- **`build.js`** (après `vite build`) : vérifie que `index.tsx` et `lib/pages.mjs` sont synchronisés, génère `sitemap.xml` (incl. articles), pré-rend une copie de `index.html` par route (metas, canonical, OG, `<noscript>`, JSON-LD des articles), génère `dist/404.html`, et branche la feuille de style compilée sur `mentions-legales.html`.
- **`netlify.toml`** : build `npm run build`, publish `dist`, headers de sécurité/cache, redirections non-www→www (`eagle-prod.com` → `www.eagle-prod.com`). **Pas de fallback SPA `/* → /index.html`** : toutes les routes sont pré-rendues ; toute autre URL reçoit `404.html` avec un vrai statut 404 (l'app y affiche `NotFoundPage`).
- `public/` : copié tel quel par Vite (favicons, geojson, robots.txt, mentions-legales.html, `og-image.jpg`…). `media/` : seuls `media/blog/*`, `logo_beige.png` et `aigle_beige.png` sont copiés dans `dist/media` (le reste est importé par les composants et hashé par Vite). Le `sitemap.xml` est généré : ne pas en créer un dans `public/`.
- **Images** : viser < 300 Ko (les couvertures de blog sont en 1600 px de large, WebP qualité ~78). Ne pas déposer de photos brutes de plusieurs Mo dans `media/` ou `public/`.

## Captcha, analytics et RGPD

Détails dans `docs/CAPTCHA-ANALYTICS-RGPD.md`. En bref :
- Formulaire de contact → Cloudflare Turnstile (thème sombre) → fonction `netlify/functions/contact.mjs` (vérifie le jeton avec `TURNSTILE_SECRET_KEY`, défini dans Netlify) → Netlify Forms. En local, Turnstile affiche l'erreur 110200 (domaine `localhost` non autorisé) : normal.
- `CookieBanner.tsx` (monté une seule fois dans `index.tsx`) : GTM et Clarity ne se chargent qu'après consentement (`eagle_consent_v2`, 6 mois) ; « Gérer mes cookies » dans le footer. Toute modification des traceurs implique de mettre à jour `public/mentions-legales.html`.
- Contenus tiers chargés sans consentement (déclarés dans les mentions légales) : Vimeo (`dnt=1`), Elfsight/Instagram (chargé seulement à l'approche de la section), tuiles CARTO. La police Inter est **auto-hébergée** (`@fontsource-variable/inter`) : ne pas remettre Google Fonts.
- `public/mentions-legales.html` est en `noindex` (meta + header Netlify) et absent du sitemap : ne pas la rajouter dans `lib/pages.mjs`, ne pas la bloquer dans `robots.txt`.

## Notes

- Textes du site en français ; garder le ton et les accents.
- `dist/`, `node_modules/`, `*.log` sont gitignorés.
- Un push sur `main` = mise en production Netlify : ne pas pousser sans accord de l'utilisateur.
- Audit complet et points restant à trancher côté contenu/juridique : `docs/AUDIT.md`.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
