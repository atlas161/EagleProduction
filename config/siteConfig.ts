/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * 🦅 EAGLE PRODUCTION - FICHIER DE CONFIGURATION CENTRALISÉ
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Ce fichier permet de modifier rapidement les éléments clés du site :
 * - Vidéo d'accueil (Hero) et note Google affichée
 * - Tarifs de base (section « Prestations » de l'accueil + données structurées Google)
 * - Coordonnées et réseaux sociaux (footer, page contact, JSON-LD)
 * - Section « À propos »
 *
 * Les avis clients, la FAQ et le blog ne sont PAS ici : ils s'éditent via Pages CMS
 * (dossiers content/reviews, content/faqs, content/posts).
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

  // URL complète générée automatiquement (ne pas modifier). `dnt=1` : pas de suivi Vimeo.
  get embedUrl() {
    return `https://player.vimeo.com/video/${this.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&badge=0&autopause=0&portrait=0&quality=auto&dnt=1`;
  },

  // Délai avant ouverture automatique en mode immersif (en ms) - 60000 = 1 minute
  autoOpenDelay: 60000,
};

// ═══════════════════════════════════════════════════════════════════════════════
// ⭐ NOTE GOOGLE (badge du hero) & LIEN POUR LAISSER UN AVIS
// ═══════════════════════════════════════════════════════════════════════════════

export const GOOGLE_RATING = {
  score: "5/5",
  count: "37+",
};

// Lien pour laisser un avis Google
export const GOOGLE_REVIEW_LINK = "https://g.page/r/Cc7LhwWcIYG9EBM/review";

// ═══════════════════════════════════════════════════════════════════════════════
// 💰 TARIFS DE BASE (section « Prestations drone & vidéo » de l'accueil)
// ═══════════════════════════════════════════════════════════════════════════════

export const RATES = {
  tournage: {
    name: "Tournage",
    pricePerHour: 160, // € / heure
    minimumHours: 1,
  },
  montage: {
    name: "Montage vidéo",
    pricePerHour: 60, // € / heure
    usbKey: 12, // € par clé USB
    delay: "5 à 10 jours ouvrés",
    maxRevisions: 3,
  },
  travelPerKm: 0.5, // € / km (frais kilométriques)
};

// Eagle Digital : prix « à partir de » affichés sur l'accueil et dans les données structurées
export const DIGITAL_RATES = {
  siteWeb: { name: "Création de site web", from: 1200, href: "/eagle-digital/creation-site-web" },
  seo: { name: "SEO & visibilité locale", from: 150, href: "/eagle-digital/referencement-seo" },
  maintenance: { name: "Maintenance de site web", fromPerMonth: 49, href: "/eagle-digital/maintenance" },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 📞 INFORMATIONS DE CONTACT & RÉSEAUX SOCIAUX
// ═══════════════════════════════════════════════════════════════════════════════

export const CONTACT = {
  email: "contact@eagle-prod.com",
  phone: "+33 6 99 36 17 15",
  phoneDisplay: "06 99 36 17 15",
  phoneHref: "tel:+33699361715",
  location: "Angoulême, Nouvelle-Aquitaine",
  postalCode: "16000",
  socialLinks: {
    instagram: "https://www.instagram.com/eagleproduction.video",
    tiktok: "https://www.tiktok.com/@eagleproductionvideo",
    linkedin: "https://www.linkedin.com/company/eagle-production-video",
  },
  instagramHandle: "@eagleproduction.video",
  tiktokHandle: "@eagleproductionvideo",
};

// Crédit du créateur du site (footer)
export const SITE_CREDIT = {
  label: "AngeloPro",
  href: "https://angelo-pro.fr",
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
    alt: "Paul Bardin, télépilote de drone, pilotant un drone devant une maison en pierre",
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
