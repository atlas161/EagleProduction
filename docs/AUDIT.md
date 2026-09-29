# Audit du site Eagle Production — septembre 2026

Audit technique, fonctionnel et design de https://www.eagle-prod.com, avec corrections appliquées dans le code.
Rien n'a été commité ni poussé : `git diff` pour relire, `npm run typecheck && npm run build` pour valider.

## Résultats en chiffres

| Mesure | Avant | Après |
|---|---|---|
| `npm run dev` | page blanche (imports d'images cassés) | fonctionne |
| `tsc --noEmit` | 1 erreur (`Services.tsx`) | 0 erreur |
| JS initial (accueil) | 1 bundle de 798 Ko (210 Ko gzip) + preload absurde de 3 Ko | ~195 Ko (62 Ko gzip) + chunks par route ; carte Leaflet chargée à la demande |
| Poids de `dist/` | 50 Mo (photos brutes de 4 à 7 Mo, 22 Mo de médias inutilisés) | 4,5 Mo |
| Image Open Graph | portrait de 6,4 Mo (refusé par X/Twitter > 5 Mo) | `og-image.jpg` 1200×630, 227 Ko |
| Couvertures de blog | 2,3 à 4 Mo chacune | 82 à 287 Ko |
| Logos | PNG 6812×1381 pour un affichage de 48 px | 1282×260 (68 Ko) |
| GeoJSON de la carte | 555 Ko | 220 Ko |
| Navigation entre pages | rechargement complet à chaque clic | navigation interne (SPA), preloader une seule fois par session |
| URL inconnue | page blanche, statut 200 (soft 404) | vraie page 404 avec statut 404, `noindex` |

## Bugs corrigés

### Bloquants / fonctionnels
- **`npm run dev` cassé** : `vite-plugin-static-copy` servait `/media/*` en brut, donc les images importées (`?import`) revenaient avec un mauvais type MIME → page blanche. Remplacé par un plugin dev/build maison (`vite.config.ts`).
- **Erreur TypeScript** `highlight` dans `Services.tsx`.
- **Footer** : le lien « contact » affichait `angelo-pro.fr` avec une icône e-mail à la place de `contact@eagle-prod.com`. Corrigé ; le crédit du créateur est en bas de page.
- **Footer/Navbar sur les sous-pages** : « Formules », « Avis & FAQ »… ne faisaient rien hors de l'accueil (footer) ou passaient par un hack `sessionStorage` + rechargement (navbar). Remplacé par des liens `/#section` gérés par le routeur.
- **Articles de blog** : le parseur de frontmatter (site **et** build) tronquait les extraits/descriptions SEO écrits sur plusieurs lignes (format produit par Pages CMS) et perdait les tags en liste YAML — l'article « Suivi de chantier » avait un extrait coupé avec un guillemet en tête. Nouveau parseur partagé `lib/frontmatter.mjs`.
- **Formulaire de contact** : `localStorage` non protégé (navigation privée / stockage bloqué → l'envoi plantait avant de partir). Ajout de `try/catch`, annonce vocale de l'état, `autocomplete`, `aria-invalid`.
- **FAQ de l'accueil / FAQ** : les réponses longues étaient coupées (`max-h-96`, `max-h-[1200px]`). Animation en `grid-rows` qui suit la hauteur réelle ; contenu fermé retiré du parcours clavier.
- **Carte de la zone** : seulement 6 départements sur 7 affichés (la Gironde manquait) alors que le texte annonce 7 ; boutons non utilisables au clavier ; pas de message si le GeoJSON échoue.
- **Bouton « retour en haut »** superposé à la bannière cookies (même coin) → déplacé à gauche ; bannière cookies compacte sur mobile.
- **Code mort** : modal « Options » de `Services.tsx` (jamais ouvert, mais son `useEffect` remettait `body.style.overflow = 'unset'` à chaque démontage), `Toast.tsx`, `marked`, `@vitejs/plugin-react-swc`, `vite-plugin-static-copy`, fichiers de notes (`commande.txt`), doublons de favicons.
- **Cartes cliquables sans lien** (`div onClick → window.location.href`) : remplacées par de vrais `<a>` (ou retirées quand un lien CTA existait déjà).

### SEO / technique
- `index.html` : un `<link rel="preload" href="/index.tsx" as="script">` devenait, au build, un **data-URI base64 du fichier source** inséré dans chaque page. Supprimé, ainsi que ~15 balises `<meta>` inventées (ignorées des moteurs), les preconnect en double et le CSS « critique » inutilisé.
- **Métas incohérentes** : le pré-rendu (`build.js`) et chaque page définissaient des titres/descriptions **différents** (le titre changeait après le chargement du JS). Nouveau registre unique `lib/pages.mjs` (sitemap + pré-rendu + `useSeo`) ; build en échec si `index.tsx` et le registre divergent. ~800 lignes dupliquées supprimées dans les 19 pages.
- **Page Blog** : aucune méta côté client (le titre de la page précédente restait). Corrigé.
- **404** : le fallback SPA `/* → /index.html` renvoyait un statut 200 pour toute URL. Retiré (toutes les routes sont pré-rendues) ; `404.html` généré, `NotFoundPage` dans l'app.
- **Sitemap** : `lastmod` = date du build pour toutes les pages (ignoré/trompeur) → seulement les vraies dates d'articles ; plus de `sitemap.xml` statique concurrent dans `public/`.
- **JSON-LD** : prix incohérents avec le site (formules 50/150/500 € vs 160 €/h et 60 €/h affichés), FAQ différente de celle affichée, réseaux sociaux `sameAs` faux, adresse fictive « Centre-ville d'Angoulême », microdata cachée qui doublonnait le JSON-LD. Tout est aligné sur `siteConfig.ts` et le contenu CMS. Fichiers `public/schema-*.json` (numéro de téléphone `XX-XX`, non référencés) supprimés.
- **og:type** `business.business` (invalide sans propriétés) → `website`.
- **Cache Netlify** : `/*.webp`, `/*.png` et `/media/*` en `immutable` 1 an sur des noms non hashés (une image remplacée restait périmée un an) ; HTML en `max-age=3600` (risque d'HTML périmé pointant vers des assets purgés après un déploiement). Corrigé ; HSTS ajouté ; `X-XSS-Protection` (obsolète) retiré ; `[build.processing]` (déprécié) retiré ; `NODE_VERSION` 18 → 22 (Vite 6 / react-router 7 / plugin-react 5 exigent Node ≥ 20).
- **Vite** : `define` qui injectait `GEMINI_API_KEY` dans le bundle client si la variable existait, option `historyApiFallback` inexistante, `external: ['@types/leaflet']` sans effet → supprimés.
- `robots.txt` allégé (`Crawl-delay` ignoré par Google, `Host` obsolète, `Disallow` fantômes) ; `site.webmanifest` complété (`start_url`, icônes `any` + `maskable`, `lang`).
- `favicon.svg` de 530 Ko (PNG en base64) chargé par tous les navigateurs modernes → on ne référence plus que le PNG/ICO.
- **Polices** : Google Fonts (appel tiers, souci RGPD + blocage du rendu) → Inter auto-hébergée.
- `mentions-legales.html` : dépendait du **CDN Tailwind** en production (script tiers de 300 Ko, page non stylée le temps du chargement, icône 404 après le nettoyage) → utilise la feuille de style compilée du site ; ajout d'un encart « contenus tiers » (Vimeo, Elfsight, CARTO).

### Performance
- Code splitting par route (`React.lazy`), carte Leaflet + GeoJSON et widget Instagram chargés seulement à l'approche de la section (`LazyMount`).
- Preloader : délai artificiel de 1,5 s à **chaque** visite de l'accueil → uniquement à la 1ʳᵉ visite de la session, 0,7 s maximum.
- Scroll spy : 7 lectures de layout + un `setState` par événement de scroll → une passe par frame. Navbar : listener `passive`.
- `TechSpecs` : particules `Math.random()` recalculées à chaque rendu (elles « sautaient »), animations SVG SMIL tournant en permanence même masquées → mémoïsées / masquées (`visibility`).
- Elfsight rechargé à chaque montage → script chargé une seule fois, widget ré-initialisé au retour.
- Images du hero/du blog : dimensions explicites, `eager` + `fetchpriority` sur l'image de couverture d'article, `eager` sur le logo du preloader (il était en `lazy`).

## Design & accessibilité
- **Hero** : texte gris (#A0A0A0) sur vidéo claire illisible → voile sombre progressif, texte blanc, bloc aligné sur la grille du site ; badge Google et boutons sur fond flouté ; `100svh` (la barre d'adresse mobile ne coupe plus le hero) ; auto-ouverture immersive **sans le son** (elle activait le son après 60 s d'inactivité) ; Échap ferme la vidéo.
- **Navbar** : entre 1024 et ~1280 px « Avis & FAQ » et « À propos » passaient sur 2-3 lignes → `whitespace-nowrap` + espacements réduits sous `xl` ; menu « Formules » accessible au clavier (`aria-expanded`, contenu fermé retiré du focus) + entrée « Tarifs & toutes les prestations » ; menu mobile : `dvh`, verrouillage du scroll, `aria-expanded`, logo réel (`<a>`), Échap.
- **Lien d'évitement** « Aller au contenu principal », `id="main-content"` sur chaque page, `aria-current`, `aria-label` sur les boutons-icônes, focus clavier visible partout.
- **Barre de défilement** masquée globalement (aucun repère de position, saisie à la souris impossible) → visible, fine et sombre.
- **Contraste** : ~90 occurrences de `text-white/30|35|40` et `text-textSecondary/50-70` (ratio < 4,5:1 sur #111) relevées à /55-/60 ; placeholders du formulaire.
- **`prefers-reduced-motion`** respecté (transitions, animations, défilement fluide, Reveal, balayage de la carte).
- Un seul `<h1>` par page (la page Contact utilisait un `<h2>`), `role="status"` pour le formulaire, étoiles des avis lisibles par les lecteurs d'écran, `alt` de la photo de Paul décrivant réellement l'image.

## Décisions prises avec toi
- **Prix** : l'accueil fait foi (tournage 160 € HT/h, montage 60 € HT/h, 0,50 €/km, 3 modifications de montage). FAQ et articles alignés ; les anciennes formules Essentiel/Altitude/Horizon ont été retirées des contenus.
- **Statut de l'entreprise** et **consentement Vimeo/Elfsight/CARTO** : laissés en l'état (mentions légales à mettre à jour de ton côté).
- Le compte Twitter `@eagleproduction` a été retiré.

## Restant (optionnel)
- Titres SEO > 70 caractères et description de 292 caractères sur `/eagle-production` (ajustables dans `lib/pages.mjs`).
- `media/images_formules/` (~20 Mo) n'est plus déployé ; à supprimer du dépôt si inutile.
- Pas de CSP ; `npm audit` signale des vulnérabilités de dépendances de dev.
- `SEOSchema.tsx` énumère ~50 quartiers dans `areaServed` (risque de bourrage de mots-clés).

## Comment vérifier

```bash
npm run typecheck   # 0 erreur attendue
npm run build       # doit finir par « Build terminé » (échoue si routes et lib/pages.mjs divergent)
npm run dev         # http://localhost:3000
```

Après déploiement : ouvrir une URL inexistante (statut 404), tester le formulaire, partager une URL sur LinkedIn/X pour vérifier `og-image.jpg` (vider le cache du débogueur Facebook/LinkedIn), et contrôler `/sitemap.xml` dans la Search Console.
