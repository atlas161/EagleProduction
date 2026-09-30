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
- **GTM uniquement après consentement** : le conteneur `GTM-P6ZWJ8RQ` n'est **pas** dans `index.html`, il est injecté par `injectGtm()` seulement après clic sur « Accepter » (ou consentement déjà stocké). Ne jamais remettre le snippet GTM dans `index.html` ni son `<noscript>` : ils chargeraient GTM dès l'ouverture de la page.

### Google Analytics 4 : configuré (30/09/2026)

Fait via Claude in Chrome (session Google de Paul), sans test en navigation privée (demande explicite : publication directe).

| Élément | Valeur |
|---|---|
| Compte / propriété GA4 | AngeloPro / **EagleProd** (ID propriété `556791499`) |
| Flux de données web | « Eagle Production - Site web », `https://www.eagle-prod.com`, ID de flux `15890174722` |
| **ID de mesure** | `G-YGCJS92XGC` |
| Conteneur GTM | `www.eagle-prod.com`, `GTM-P6ZWJ8RQ` (compte EagleProduction), espace de travail 3 |
| Balise GTM | « Google Tag - GA4 EagleProd » : type *Balise Google*, ID `G-YGCJS92XGC`, déclencheur *Initialization - All Pages* |
| Paramètres de la balise | `allow_google_signals = false`, `allow_ad_personalization_signals = false` |
| Publication | **Version 3** du conteneur GTM, publiée le 30/09/2026 |
| Conservation des données GA4 | 2 mois (minimum, déjà le réglage par défaut : rien modifié) |
| Mesures améliorées | activées par défaut à la création du flux (pages vues, défilements, clics sortants, etc.). Les changements d'URL de la SPA React génèrent les `page_view` via l'historique du navigateur. |

Déroulé :
1. analytics.google.com → sélection de la propriété **EagleProd** (le compte ouvert par défaut était VPRR, pas le bon) → Admin → Flux de données : aucun flux existant, création du flux web ci-dessus.
2. tagmanager.google.com → conteneur `GTM-P6ZWJ8RQ` (espace vide, 0 modification) → nouvelle balise *Balise Google* avec l'ID de mesure, deux paramètres de configuration pour couper les signaux Google et la personnalisation publicitaire, déclencheur par défaut *Initialization - All Pages*.
3. Enregistrement puis **Envoyer → Publier** (version 3).
4. `public/mentions-legales.html` : cookies `_ga` / `_ga_YGCJS92XGC`, conservation 2 mois, signaux désactivés. Finalités inchangées (mesure d'audience, déjà annoncée) : clé de consentement laissée en `_v2`.

Aucune modification du code du site n'était nécessaire : `CookieBanner.tsx` injecte déjà GTM après consentement. Le tag GA4 n'existe donc que derrière le consentement.

À savoir / à vérifier plus tard :
- Vérification du 30/09/2026 (navigateur Playwright vierge, sans bloqueur, équivalent navigation privée) : avant clic, rien ne se charge ; après « Accepter », `gtm.js` (GTM-P6ZWJ8RQ), `gtag/js?id=G-YGCJS92XGC` et Clarity se chargent, et des `POST region1.google-analytics.com/g/collect` (`en=page_view`, `tid=G-YGCJS92XGC`, `npa=1`) répondent 204 sur `/` puis sur `/faq/` (navigation SPA comprise). Le temps réel GA4 affichait encore 0 utilisateur quelques minutes après (retard de traitement, trafic automatisé possiblement filtré, ou rapport bloqué par le bloqueur de pub du Chrome de Paul) : à recontrôler depuis un vrai navigateur.
- **Validé en conditions réelles (30/09/2026)** : visite depuis un téléphone en 4G, bannière acceptée → GA4 > Temps réel affiche 1 utilisateur actif et les événements `first_visit`, `page_view`, `scroll`. Le temps réel restait à 0 pour le navigateur automatisé (trafic probablement filtré par Google), ce n'est pas un défaut du site.
- Reste optionnel : événements clés (formulaire de contact, clic téléphone / e-mail) et filtre de trafic interne GA4 pour exclure les visites de Paul.
- (Avant vérification) Non testé en navigation privée (choix assumé). Vérification possible : accepter la bannière sur www.eagle-prod.com puis GA4 > Rapports > Temps réel, ou GTM > Aperçu.
- Le flux GA4 affichait « Aucune donnée reçue » au moment de la création : normal tant qu'aucun visiteur n'a accepté les cookies.
- Les modifications de `mentions-legales.html` sont locales tant que le site n'est pas redéployé (push sur `main` = mise en production Netlify).
- Événements clés (envoi du formulaire de contact, clic téléphone / e-mail) : pas encore créés.
- Le conteneur GTM contenait aussi une entrée « {{Page URL}} » dans le schéma « Balises Google » : c'est l'affichage d'une destination, pas une balise à nettoyer (0 balise avant l'ajout).

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
