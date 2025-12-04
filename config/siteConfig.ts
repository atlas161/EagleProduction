/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * 🦅 EAGLE PRODUCTION - FICHIER DE CONFIGURATION CENTRALISÉ
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Ce fichier permet de modifier rapidement les éléments clés du site :
 * - Vidéo d'accueil (Hero)
 * - Avis clients (Google Reviews)
 * - Questions fréquentes (FAQ)
 * - Tarifs des prestations
 * - Options et suppléments
 * 
 * 📝 INSTRUCTIONS :
 * 1. Modifie les valeurs ci-dessous
 * 2. Sauvegarde le fichier
 * 3. Push le projet → Le site est mis à jour !
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════════════════
// 🎬 VIDÉO D'ACCUEIL (HERO)
// ═══════════════════════════════════════════════════════════════════════════════

export const HERO_VIDEO = {
  // ID de la vidéo Vimeo (le numéro dans l'URL vimeo.com/video/XXXXXXX)
  vimeoId: "1142391820",
  
  // URL complète générée automatiquement (ne pas modifier)
  get embedUrl() {
    return `https://player.vimeo.com/video/${this.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&badge=0&autopause=0&portrait=0&quality=auto`;
  },
  
  // Délai avant ouverture automatique en mode immersif (en ms) - 60000 = 1 minute
  autoOpenDelay: 60000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ⭐ AVIS CLIENTS (GOOGLE REVIEWS)
// ═══════════════════════════════════════════════════════════════════════════════

export const REVIEWS = [
  {
    id: 1,
    name: "Client",
    role: "Projet Immobilier/Architecture",
    content: "Travail de très grande qualité, réalisé avec sérieux et professionnalisme. Les prises de vue par drone sont superbes et mettent parfaitement en valeur le projet. Je recommande vivement EagleProduction !",
    stars: 5
  },
  {
    id: 2,
    name: "Organisateur",
    role: "Mariage & Événement",
    content: "Super travail et de qualité qui plus est je recommande vivement si vous avez un mariage ou autre événement 👍",
    stars: 5
  },
  {
    id: 3,
    name: "Entreprise Frigoriste",
    role: "Communication d'entreprise",
    content: "Paul de Eagle Production a réalisé un réels Instagram pour mon entreprise de frigoriste. Très bonne réalisation qui m'a permis de gagner en visibilité. Je recommande",
    stars: 5
  },
  {
    id: 4,
    name: "Paddock Saint-Palais-sur-Mer",
    role: "Événement Automobile",
    content: "Paul est venu filmer notre événement « Paddock Saint-Palaisien » à Saint-Palais-sur-Mer. Très pro, il connaît son métier et sait s'adapter. Nous le recommandons fortement 🏎️",
    stars: 5
  }
];

// Lien pour laisser un avis Google
export const GOOGLE_REVIEW_LINK = "https://g.page/r/Cc7LhwWcIYG9EBM/review";

// ═══════════════════════════════════════════════════════════════════════════════
// ❓ QUESTIONS FRÉQUENTES (FAQ)
// ═══════════════════════════════════════════════════════════════════════════════

export const FAQ_ITEMS = [
  {
    question: "Vos pilotes de drone sont-ils agréés et respectez-vous la réglementation ?",
    answer: "Absolument. Chez Eagle Production, la sécurité est notre priorité. Nos pilotes sont agréés par la DGAC (Direction Générale de l'Aviation Civile) et disposent de tous les brevets nécessaires pour opérer en scénarios STS01 et STS02. Nous nous occupons de toutes les démarches administratives et demandes d'autorisations de vol (préfectures, mairies) avant chaque mission."
  },
  {
    question: "Quelle est la qualité des vidéos et photos livrées (4K, RAW) ?",
    answer: "Nous utilisons des drones de dernière génération capables de filmer en 4K, voire 6K, offrant une qualité cinéma. Pour la photographie, nous livrons des fichiers en haute définition et en format RAW (brut) ou JPEG retouché, idéal pour l'impression grand format ou l'intégration sur votre site web."
  },
  {
    question: "Dans quels secteurs et pour quels types de projets intervenez-vous ?",
    answer: "Chez Eagle Production, nous pouvons intervenir dans de nombreux domaines : immobilier, suivi de chantier, associatif, sportif, événementiel et bien d'autres.\nNos prestations couvrent aussi bien la vidéo, la photo, que des relevés visuels ou observations techniques pour accompagner vos projets.\nBref, dans chaque métier, chaque domaine et chaque projet, un drone peut être un précieux allié."
  },
  {
    question: "Quelles sont les contraintes météorologiques pour un tournage aérien ?",
    answer: "Pour garantir des images stables et la sécurité du matériel, nous ne volons pas sous la pluie ou par vents violents (généralement supérieurs à 30-40 km/h). Nous surveillons la météo en temps réel. En cas de mauvaises conditions, la séance de prise de vue aérienne est reportée sans frais supplémentaires à une date ultérieure."
  },
  {
    question: "Quel est le processus typique pour la création de mon identité visuelle ou de mon site web ?",
    answer: "Notre processus se déroule en 4 phases :\nDécouverte & Stratégie : Échange initial pour définir vos objectifs, vos cibles et votre positionnement.\nConception : Création des maquettes, du design, de la charte graphique et du contenu (photos/vidéos incluses si besoin).\nDéveloppement & Validation : Intégration du site, développement des fonctionnalités ou finalisation des supports.\nLancement & Formation : Mise en ligne du site, livraison des fichiers et formation à l'utilisation si nécessaire."
  },
  {
    question: "Mon site sera-t-il vraiment conforme aux normes actuelles (RGPD) et sécurisé contre les failles ?",
    answer: "Oui, c'est une priorité absolue. Nous intégrons dès la conception la conformité RGPD (gestion des cookies, politiques de confidentialité) et la sécurité technique (certificats SSL, pare-feux). Votre site est livré sur une base solide et à jour. De plus, nos services de Maintenance sont disponibles pour assurer la sécurité et la conformité sur le long terme (mises à jour, sauvegardes et surveillance active)."
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// 💰 TARIFS - FORMULES DRONE
// ═══════════════════════════════════════════════════════════════════════════════

export const PRICING = {
  // ─────────────────────────────────────────────────────────────────────────────
  // FORMULE ESSENTIEL (Images brutes)
  // ─────────────────────────────────────────────────────────────────────────────
  essentiel: {
    name: "Essentiel",
    description: "Images drone brutes de haute qualité, prêtes pour votre post‑production.",
    prices: [
      { label: "1h de prise de vue", price: 50 },
      { label: "2h de prise de vue", price: 100 },
    ],
    features: [
      "Images brutes non retouchées",
      "Liberté totale de montage",
      "Livraison rapide des fichiers",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // FORMULE ALTITUDE (Vidéo montée)
  // ─────────────────────────────────────────────────────────────────────────────
  altitude: {
    name: "Altitude",
    description: "Vidéo montée sur mesure, immersive et prête à publier sur vos canaux.",
    isPopular: true, // Affiche le badge "Populaire"
    prices: [
      { label: "Classique", sublabel: "0 à 3 minutes", price: 150 },
      { label: "Altitude +", sublabel: "3 à 5 minutes", price: 250 },
    ],
    features: [
      "Montage dynamique et rythmé",
      "Musique libre de droits incluse",
      "Étalonnage pro, prêt à diffuser",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // FORMULE HORIZON (Réalisation complète)
  // ─────────────────────────────────────────────────────────────────────────────
  horizon: {
    name: "Horizon",
    description: "Réalisation complète: écriture, tournage et montage pour un rendu cinéma.",
    prices: [
      { label: "Classique", sublabel: "5 à 10 minutes", price: 500 },
      { label: "Horizon +", sublabel: "10 à 20 minutes", price: 1000 },
    ],
    features: [
      "Scénarisation et storytelling",
      "Montage dynamique inclus",
      "Musique libre de droits",
      "Étalonnage couleur professionnel",
      "Sound Design immersif",
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 🔧 OPTIONS & SUPPLÉMENTS
// ═══════════════════════════════════════════════════════════════════════════════

export const OPTIONS = {
  deplacement: { price: 0.50, unit: "/km", label: "Déplacement" },
  photoDrone: { price: 2, unit: "/unité", label: "Photo drone" },
  supportUsb: { price: 12, unit: "/clé", label: "Support USB" },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 🎨 TARIFS - SERVICES COMPLÉMENTAIRES
// ═══════════════════════════════════════════════════════════════════════════════

export const SERVICES_COMPLEMENTAIRES = {
  // ─────────────────────────────────────────────────────────────────────────────
  // MONTAGE VIDÉO
  // ─────────────────────────────────────────────────────────────────────────────
  montageVideo: {
    name: "Montage vidéo",
    description: "Montage intégral pour une vidéo 100% sur-mesure :",
    pricePerHour: 50,
    features: [
      "Montage dynamique",
      "Étalonnage professionnel",
      "Sound design et mixage immersif",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // IDENTITÉ VISUELLE
  // ─────────────────────────────────────────────────────────────────────────────
  identiteVisuelle: {
    name: "Identité visuelle",
    items: [
      { label: "Création de Logo sur-mesure", price: 600 },
      { label: "Charte graphique complète", price: 400 },
      { label: "Templates réseaux sociaux prêts à publier", price: 110 },
      { label: "Design de supports de communication", sublabel: "Cartes, flyers, affiches, kakemonos, brochures", price: 90 },
      { label: "Signature mail professionnelle", price: 100, extra: "+15€ par collab" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // PRÉSENCE DIGITALE
  // ─────────────────────────────────────────────────────────────────────────────
  presenceDigitale: {
    name: "Présence digitale",
    items: [
      { label: "Création de site internet vitrine clé en main", price: 500 },
      { label: "Fiche Google et pack visibilité locale", sublabel: "Fiche google business profile, solocal", price: 250 },
      { label: "Référencement SEO", price: 250 },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // RÉSEAUX SOCIAUX
  // ─────────────────────────────────────────────────────────────────────────────
  reseauxSociaux: {
    name: "Réseaux sociaux",
    items: [
      { label: "Mise en place Instagram / Facebook / TikTok", price: 250 },
      { label: "Stratégie de contenu et templates", price: 170 },
      { label: "Shooting photo et tournage vidéo", sublabel: "Drone + au sol", price: "Sur demande" },
      { label: "Montage courts formats, reels, tiktok et films d'entreprise", price: "50€/h" },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 📞 INFORMATIONS DE CONTACT
// ═══════════════════════════════════════════════════════════════════════════════

export const CONTACT = {
  email: "contact@eagle-prod.com",
  phone: "+33 6 00 00 00 00", // À mettre à jour
  location: "Angoulême, Nouvelle-Aquitaine",
  socialLinks: {
    instagram: "https://www.instagram.com/eagleproduction",
    facebook: "https://www.facebook.com/eagleproduction",
    linkedin: "https://www.linkedin.com/company/eagleproduction",
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 👤 À PROPOS
// ═══════════════════════════════════════════════════════════════════════════════

export const ABOUT = {
  // ─────────────────────────────────────────────────────────────────────────────
  // TITRE & SOUS-TITRE
  // ─────────────────────────────────────────────────────────────────────────────
  sectionLabel: "À Propos",
  title: "Paul Bardin :",
  subtitle: "La vidéo vue d'en haut.",
  
  // ─────────────────────────────────────────────────────────────────────────────
  // PHOTO
  // ─────────────────────────────────────────────────────────────────────────────
  photo: {
    src: "/Photo_de_paul_bardin.webp",
    alt: "Paul Bardin Pilote Drone",
  },
  
  // ─────────────────────────────────────────────────────────────────────────────
  // BADGE SUR LA PHOTO
  // ─────────────────────────────────────────────────────────────────────────────
  badge: {
    title: "Basé à Angoulême",
    subtitle: "Intervention Nouvelle-Aquitaine",
  },
  
  // ─────────────────────────────────────────────────────────────────────────────
  // PARAGRAPHES (chaque élément = un paragraphe)
  // Utilise <strong> pour mettre en gras (sera affiché en blanc)
  // ─────────────────────────────────────────────────────────────────────────────
  paragraphs: [
    "J'ai fondé <strong>Eagle Production</strong> à 23 ans, poussé par une passion profonde pour le pilotage et la <strong>création de vidéos</strong>. Cette passion m'a naturellement conduit à devenir <strong>télépilote certifié et diplômé</strong>, et à transformer ce savoir-faire en un véritable projet professionnel.",
    "Eagle Production est né de cette envie : capturer le monde sous un autre angle, raconter des histoires, et offrir des images uniques.",
    "Notre objectif chez Eagle Production est clair : intervenir dans un maximum de domaines.<br/>Qu'il s'agisse <strong>d'événements</strong>, de <strong>sport</strong>, de <strong>construction</strong>, de <strong>tourisme</strong>, de projets artistiques, et bien d'autres domaines encore, nous voulons toucher un maximum de métiers et d'univers différents.",
    "Parce que la créativité n'a pas de limites, et parce que le <strong>drone</strong> (tout comme la vidéo) permet d'explorer des perspectives nouvelles, Eagle Production a été pensé pour <strong>s'adapter à tous les besoins</strong> et intervenir partout où une vision aérienne ou créative peut faire la différence.",
  ],
  
  // ─────────────────────────────────────────────────────────────────────────────
  // CITATION
  // ─────────────────────────────────────────────────────────────────────────────
  quote: {
    text: "Comme un aigle, nous visons la précision pour ne jamais manquer l'instant décisif.",
    author: "PAUL BARDIN",
    role: "FONDATEUR",
  },
};
