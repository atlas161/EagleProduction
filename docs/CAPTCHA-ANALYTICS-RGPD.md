# Captcha, mesure d'audience et conformité RGPD

Documentation des ajouts de septembre 2026 : Cloudflare Turnstile, Microsoft Clarity, gestion du consentement cookies, mentions légales.

## 1. Captcha Cloudflare Turnstile (formulaire de contact)

**Fichiers** : `components/Contact.tsx`, `netlify/functions/contact.mjs`

Flux :
1. `Contact.tsx` charge `challenges.cloudflare.com/turnstile/v0/api.js` au montage (uniquement sur les pages avec le formulaire) et affiche le widget en **thème sombre**, langue `fr`. La clé publique (`TURNSTILE_SITE_KEY`) est dans le composant.
2. À l'envoi, le formulaire refuse la soumission sans jeton (« Validez le captcha »), puis POST vers `/.netlify/functions/contact` avec le champ `cf-turnstile-response`.
3. La fonction vérifie le jeton auprès de `siteverify` avec la clé secrète, puis **retransmet** la demande à Netlify Forms (POST vers `/` avec `form-name=contact`). Les demandes arrivent donc toujours dans Netlify > Forms.
4. Le widget est réinitialisé après succès ou erreur (jeton à usage unique).

**Configuration requise (Netlify > Site settings > Environment variables)** :
- `TURNSTILE_SECRET_KEY` — clé secrète Turnstile (ne jamais la commiter).
- Dans le dashboard Cloudflare, le widget doit autoriser le hostname `www.eagle-prod.com`.

Sans la variable, la fonction répond `500 Captcha non configuré`. En local (`npm run dev`), la fonction n'existe pas : tester sur Netlify (ou avec `netlify dev`).

Le formulaire caché pour la détection Netlify reste dans `index.html` ; le honeypot `bot-field` et le rate limiting (1 min) sont conservés.

## 2. Microsoft Clarity + Google Tag Manager (avec consentement)

**Fichier** : `components/CookieBanner.tsx`

- Aucun traceur avant consentement. « Accepter » charge GTM (`GTM-P6ZWJ8RQ`) et Clarity (projet `ypwrw3ymck`, avec le signal Consent Mode `consentv2`). « Refuser » (aussi visible qu'« Accepter ») ne charge rien.
- Choix stocké dans `localStorage` sous `eagle_consent_v2` (`{analytics, date}`), **redemandé après 6 mois**. L'ancienne clé `ga_consent` est ignorée : tous les visiteurs sont réinterrogés.
- **Retrait du consentement** : lien « Gérer mes cookies » dans le footer (événement `eagle:open-cookie-settings`) ou `/?gestion-cookies=1` depuis la page légale. Un refus après acceptation coupe Clarity, supprime les cookies (`_clck`, `_clsk`, `_ga*`, etc.) et recharge la page.
- Pour modifier les finalités ou ajouter un outil : mettre à jour la bannière **et** la section « Cookies et traceurs » des mentions légales, puis changer la clé (`_v3`) pour redemander le consentement.

## 3. Mentions légales

**Fichier** : `public/mentions-legales.html` (page statique, hors React)

- Éditeur : Paul Bardin, entrepreneur individuel, nom commercial Eagle Production, SIRET 988 574 067 00027, APE 74.20Z, 19 rue du Béarn 16000 Angoulême, directeur de publication Paul Bardin. Source : annuaire-entreprises.data.gouv.fr (INSEE).
- Section cookies détaillant Google, Clarity, Cloudflare Turnstile (sécurité, intérêt légitime), et le retrait du consentement. Section RGPD mise à jour (bases légales, destinataires).
- **Non indexée** : `<meta robots noindex, follow>` + en-tête `X-Robots-Tag` dans `netlify.toml` + retrait du sitemap (`build.js` et `public/sitemap.xml`). Ne pas ajouter de `Disallow` dans `robots.txt` (le noindex ne serait plus lu).

## 4. Services tiers chargés sans consentement (à connaître)

Déclarés dans la section « Cookies et traceurs » des mentions légales :
- **Vimeo** (vidéo d'accueil) : paramètre `dnt=1` activé (`HERO_VIDEO.embedUrl`).
- **Elfsight** (fil Instagram, page d'accueil) : script chargé uniquement quand la section approche de l'écran (`LazyMount` + `Gallery.tsx`).
- La carte de la zone est dessinée localement (GeoJSON) : plus aucun fond de carte tiers.
- La police **Inter est auto-hébergée** (`@fontsource-variable/inter`) : plus aucun appel à Google Fonts.

Ces services reçoivent l'adresse IP du visiteur. Si un conseil juridique impose un consentement préalable, l'étape suivante est de les charger derrière le même choix que la mesure d'audience (`CookieBanner.tsx`).

## Points de vigilance

- L'annuaire officiel indique l'entreprise individuelle comme **cessée le 25/07/2026** (radiée du RNE). Les mentions légales doivent être mises à jour si l'activité continue sous une nouvelle immatriculation. Aucun numéro de TVA n'est affiché (non publié par l'annuaire).
- La transmission de la fonction vers Netlify Forms doit être validée par un envoi de test après déploiement.
