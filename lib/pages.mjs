// Registre unique des pages publiques : métas SEO, sitemap et pré-rendu (build.js) + <title>/<meta> côté client (useSeo).
// Toute nouvelle route publique doit être déclarée ici (et dans index.tsx) : build.js échoue sinon.

export const SITE_URL = 'https://www.eagle-prod.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Page d'accueil (méta par défaut, aussi présentes dans index.html). */
export const HOME = {
  path: '/',
  title: 'EAGLE PRODUCTION | Drone Angoulême, Vidéo & Photo | + Eagle Digital (Site Web, SEO)',
  description:
    'Eagle Production : télépilote drone certifié DGAC à Angoulême (Charente). Inspection de toiture, suivi de chantier BTP, photo/vidéo immobilier, Reels & Shorts, sport et événementiel. Eagle Digital : site web, SEO local et maintenance.',
  priority: 1.0,
};

/** Pages statiques (hors accueil et articles de blog). */
export const PAGES = [
  {
    path: "/blog",
    title: "Blog Drone, Vidéo & Digital | Eagle Production Angoulême",
    description: "Articles sur la captation drone, le montage vidéo professionnel et la présence digitale locale à Angoulême et en Nouvelle-Aquitaine.",
    priority: 0.9,
  },
  {
    path: "/faq",
    title: "FAQ Drone & Vidéo Angoulême | Questions Fréquentes | Eagle Production",
    description: "Toutes les réponses sur nos prestations drone, vidéo et digital à Angoulême : réglementation DGAC, qualité 4K, tarifs, délais, livrables. Télépilote certifié en Charente et Nouvelle-Aquitaine.",
    priority: 0.9,
  },
  {
    path: "/contact",
    title: "Contact & Devis Gratuit | Eagle Production Angoulême - Drone & Vidéo",
    description: "Contactez Eagle Production pour un devis gratuit : captation drone, montage vidéo, suivi de chantier ou inspection à Angoulême et en Nouvelle-Aquitaine. Réponse sous 24h.",
    priority: 0.7,
  },
  {
    path: "/chantier",
    title: "Suivi de chantier par drone | Eagle Production Angoulême",
    description: "Suivi de chantier BTP par drone: orthophotos, vues comparatives, rapports PDF et conformité DGAC. Intervention en Charente et Nouvelle-Aquitaine.",
    keywords: "suivi de chantier par drone, drone BTP Angoulême, orthophoto chantier, comparatif T-1 T, rapport PDF chantier, télépilote drone certifié DGAC, Charente, Nouvelle-Aquitaine",
    priority: 0.8,
  },
  {
    path: "/eagle-production",
    title: "Eagle Production | Drone Angoulême : inspection toiture, suivi chantier, immobilier & vidéos",
    description: "Eagle Production à Angoulême (Charente) : inspection de toiture et bâtiments par drone, suivi de chantier BTP (orthophotos, comparatifs, rapports PDF), photo/vidéo immobilier, contenus réseaux sociaux (Reels, Shorts, TikTok), sport & événementiel. Images 4K, livrables propres, devis gratuit.",
    keywords: "drone Angoulême, inspection de toiture par drone, inspection bâtiment drone, suivi de chantier par drone, photo immobilière drone, vidéo immobilière drone, Instagram Reels vidéo, YouTube Shorts vidéo, TikTok vidéo, sport automobile vidéo, événementiel drone, Charente, Nouvelle-Aquitaine",
    priority: 0.8,
  },
  {
    path: "/inspection",
    title: "Inspection de Bâtiments par Drone Angoulême | Eagle Production",
    description: "Eagle Production inspecte vos toitures, façades et structures par drone à Angoulême et en Charente. Vues 4K, rapport illustré PDF, télépilote certifié DGAC. Devis gratuit.",
    keywords: "inspection de toiture par drone, inspection bâtiment drone, inspection façade drone, télépilote drone certifié DGAC, rapport inspection PDF, drone Angoulême, Charente, Nouvelle-Aquitaine",
    priority: 0.8,
  },
  {
    path: "/inspection-suivi",
    title: "Inspection toiture & suivi de chantier par drone | Angoulême (Charente) | Eagle Production",
    description: "Inspection de toiture/bâtiments et suivi de chantier par drone à Angoulême : vues 4K, orthophotos, comparatifs T-1/T, rapport PDF illustré. Télépilote certifié DGAC. Devis gratuit.",
    keywords: "inspection toiture drone, suivi de chantier drone, drone BTP Angoulême, orthophoto chantier, rapport PDF inspection, télépilote drone certifié DGAC, Charente, Nouvelle-Aquitaine",
    priority: 0.8,
  },
  {
    path: "/immobilier-drone",
    title: "Drone Immobilier Angoulême | Photos & Vidéos (vente/location) | Eagle Production",
    description: "Immobilier à Angoulême : photo immobilière et vidéo immobilière par drone (4K). Mise en valeur de biens vente/location, formats annonces + Reels/Shorts. Télépilote certifié DGAC. Devis gratuit.",
    keywords: "drone immobilier Angoulême, photo immobilière drone, vidéo immobilière drone, mise en valeur bien immobilier, vente location, agence immobilière, promoteur immobilier, photos aériennes, vidéo 4K, annonce immobilière, Charente, Nouvelle-Aquitaine",
    priority: 0.8,
  },
  {
    path: "/reels-shorts",
    title: "Reels Instagram & YouTube Shorts | Vidéos courtes à Angoulême | Eagle Production",
    description: "Création de Reels/Shorts à Angoulême : tournage drone + au sol, montage vertical 9:16, sous-titres, déclinaisons TikTok/Facebook. Vidéos prêtes à publier, pensées pour performer.",
    keywords: "reels instagram angouleme, youtube shorts angouleme, videos courtes, montage vertical 9:16, tiktok video, sous-titres reels, drone reels, tournage video charente, contenu réseaux sociaux, vidéo entreprise réseaux sociaux",
    priority: 0.75,
  },
  {
    path: "/sport-action",
    title: "Vidéo Sport & Action (drone + au sol) | Angoulême | Eagle Production",
    description: "Sport automobile et événement sportif à Angoulême : vidéo drone + caméra au sol, montage rythmé, plans d’action et formats Reels/Shorts. Télépilote certifié DGAC. Devis gratuit.",
    keywords: "video sport angouleme, sport automobile video, drone sport, video evenement sportif, montage rythme, reels sport, shorts sport, tournage charente, captation evenement, aftermovie sport",
    priority: 0.75,
  },
  {
    path: "/photo-video",
    title: "Photo & vidéo artistique par drone | Angoulême (Charente) | Eagle Production",
    description: "Vidéo de paysages et photographie aérienne à Angoulême : plans drone 4K, montage cinématique, étalonnage, livrables premium. Charente et Nouvelle-Aquitaine. Devis gratuit.",
    keywords: "photographie aerienne angouleme, photo drone charente, video paysages drone, video cinematique 4k, etalonnage video, contenu artistique drone, tourisme, patrimoine, nouvelle aquitaine",
    priority: 0.75,
  },
  {
    path: "/evenementiel",
    title: "Vidéos événementielles à Angoulême | Soirées d’entreprise & souvenirs | Eagle Production",
    description: "Événementiel à Angoulême : vidéos pour soirées d’entreprise et souvenirs familiaux. Drone + au sol, montage, teaser, Reels/Shorts. Livrables prêts à publier. Devis gratuit.",
    keywords: "video evenementiel angouleme, soiree entreprise video, aftermovie, video souvenir familial, drone evenementiel, montage video, teaser evenement, reels evenement, charente",
    priority: 0.75,
  },
  {
    path: "/zone",
    title: "Zone d’intervention drone à Angoulême (16) | Eagle Production Charente",
    description: "Zone d’intervention drone à Angoulême et en Charente (16). Télépilote certifié DGAC pour photo/vidéo 4K, inspection et suivi de chantier. Déplacements en Nouvelle-Aquitaine selon mission.",
    priority: 0.8,
  },
  {
    path: "/a-propos",
    title: "À propos - Télépilote drone à Angoulême | Eagle Production",
    description: "Découvrez Eagle Production, télépilote drone certifié DGAC à Angoulême (Charente): vidéo aérienne 4K, photo drone, photogrammétrie, inspection technique et suivi de chantier BTP en Nouvelle-Aquitaine.",
    priority: 0.6,
  },
  {
    path: "/eagle-digital",
    title: "Eagle Digital - Identité Visuelle, Site Web & SEO à Angoulême | Eagle Production",
    description: "Eagle Digital, le pôle communication d'Eagle Production à Angoulême. Création de logo, site web, SEO local, réseaux sociaux, maintenance. Devis gratuit sous 24h pour les TPE et PME de Charente.",
    keywords: "agence digitale Angoulême, création site web Charente, logo sur-mesure, SEO local Angoulême, Eagle Digital, Eagle Production",
    priority: 0.8,
  },
  {
    path: "/eagle-digital/creation-site-web",
    title: "Création Site Web Angoulême - Vitrine & E-commerce | Eagle Digital",
    description: "Eagle Digital conçoit votre site web professionnel à Angoulême : site vitrine, multi-pages ou e-commerce. Rapide, optimisé SEO, RGPD conforme. Domaine, hébergement et e-mails pro inclus la 1ère année. Devis gratuit sous 24h.",
    keywords: "création site web Angoulême, site vitrine Charente, site e-commerce Angoulême, agence web Charente, site professionnel pas cher, Eagle Digital",
    priority: 0.7,
  },
  {
    path: "/eagle-digital/referencement-seo",
    title: "SEO Local Angoulême - Référencement Google & Visibilité | Eagle Digital",
    description: "Eagle Digital améliore votre référencement Google à Angoulême : audit SEO, fiche Google Business Profile, e-mailing professionnel et campagnes mensuelles. Apparaissez en 1ère position sur les recherches locales. Devis gratuit sous 24h.",
    keywords: "SEO Angoulême, référencement local Charente, Google Business Profile, audit SEO, e-mailing pro, Eagle Digital, visibilité locale",
    priority: 0.7,
  },
  {
    path: "/eagle-digital/hebergement-mail",
    title: "Hébergement Web & E-mails Professionnels à Angoulême | Eagle Digital",
    description: "Eagle Digital gère votre hébergement web, nom de domaine et e-mails professionnels à Angoulême. SSL inclus, uptime 99,9%, migration offerte, adresses @votreentreprise.fr configurées. Devis gratuit sous 24h.",
    keywords: "hébergement web Angoulême, nom de domaine Charente, e-mail professionnel entreprise, adresse e-mail personnalisée, Eagle Digital, SSL, migration domaine",
    priority: 0.7,
  },
  {
    path: "/eagle-digital/maintenance",
    title: "Contrat Maintenance Site Web Angoulême - Tout-inclus | Eagle Digital",
    description: "Eagle Digital propose des contrats de maintenance site web à Angoulême dès 49€/mois : sécurité, sauvegardes, SEO mensuel, e-mails pro, support informatique. Un seul interlocuteur, zéro gestion. Devis gratuit sous 24h.",
    keywords: "contrat maintenance site web Angoulême, maintenance informatique Charente, SEO mensuel, sauvegardes site web, support informatique TPE PME, Eagle Digital",
    priority: 0.7,
  },
];

/** URL canonique (avec slash final, comme servi par Netlify). */
export const canonicalFor = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path.replace(/\/+$/, '')}/`);

export const findPage = (path) => {
  const clean = path === '/' ? '/' : path.replace(/\/+$/, '');
  return clean === '/' ? HOME : PAGES.find((p) => p.path === clean);
};
