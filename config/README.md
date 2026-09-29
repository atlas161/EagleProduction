# 🦅 Configuration Eagle Production

Ce dossier contient le fichier de configuration centralisé du site : `siteConfig.ts`.

## ✨ Mise à jour automatique du SEO

Quand tu modifies `siteConfig.ts`, le **schéma JSON-LD** de l'accueil (données structurées Google) est **automatiquement mis à jour** grâce au composant `SEOSchema.tsx` (tarifs, coordonnées, réseaux sociaux, FAQ). Plus besoin de toucher à `index.html` !

## 📁 Ce qui se modifie dans `siteConfig.ts`

| Section          | Description                                                        |
|------------------|--------------------------------------------------------------------|
| `HERO_VIDEO`     | Vidéo d'accueil (ID Vimeo, délai d'ouverture automatique)          |
| `GOOGLE_RATING`  | Note et nombre d'avis affichés dans le badge du hero               |
| `GOOGLE_REVIEW_LINK` | Lien pour laisser un avis Google                               |
| `RATES`          | Tarifs de base affichés sur l'accueil (tournage, montage, déplacement) |
| `DIGITAL_RATES`  | Prix « à partir de » d'Eagle Digital (site web, SEO, maintenance)  |
| `CONTACT`        | E-mail, téléphone, réseaux sociaux (footer, page contact, JSON-LD) |
| `SITE_CREDIT`    | Crédit du créateur du site (footer)                                |
| `ABOUT`          | Section À propos (photo, textes, citation)                         |

## 📝 Ce qui ne se modifie PAS ici (Pages CMS)

| Contenu          | Dossier            |
|------------------|--------------------|
| Articles de blog | `content/posts/`   |
| FAQ              | `content/faqs/`    |
| Avis clients     | `content/reviews/` |
| Images du blog   | `media/blog/`      |

Ils s'éditent via Pages CMS (voir `.pages.yml`). La FAQ et les avis de l'accueil sont les premiers éléments de ces dossiers (4 questions, tous les avis).

> ⚠️ Les tarifs de `RATES` / `DIGITAL_RATES` sont ceux de la section « Prestations » de l'accueil et du JSON-LD. Les pages détaillées (Eagle Digital, etc.) et certains textes de la FAQ/du blog ont leurs propres montants : pense à les garder cohérents.

---

## 🎬 Changer la vidéo d'accueil

```typescript
export const HERO_VIDEO = {
  vimeoId: "1142391820",  // ← Remplace par le nouvel ID Vimeo
  autoOpenDelay: 60000,   // ← Délai en ms avant l'ouverture immersive automatique (0 = jamais)
};
```

**Comment trouver l'ID Vimeo ?**
- URL de ta vidéo : `https://vimeo.com/1142391820`
- L'ID est le numéro à la fin : `1142391820`

L'ouverture automatique se fait **sans le son** ; le visiteur peut l'activer avec le bouton dédié.

---

## 💰 Modifier les tarifs de l'accueil

```typescript
export const RATES = {
  tournage: { name: "Tournage", pricePerHour: 160, minimumHours: 1 },
  montage: { name: "Montage vidéo", pricePerHour: 60, usbKey: 12, delay: "5 à 10 jours ouvrés", maxRevisions: 3 },
  travelPerKm: 0.5,
};

export const DIGITAL_RATES = {
  siteWeb: { name: "Création de site web", from: 1200, href: "/eagle-digital/creation-site-web" },
  seo: { name: "SEO & visibilité locale", from: 150, href: "/eagle-digital/referencement-seo" },
  maintenance: { name: "Maintenance de site web", fromPerMonth: 49, href: "/eagle-digital/maintenance" },
};
```

---

## 👤 Modifier la section À propos

```typescript
export const ABOUT = {
  sectionLabel: "À Propos",
  title: "Paul Bardin :",
  subtitle: "La vidéo vue d'en haut.",

  photo: {
    src: "/Photo_de_paul_bardin.webp",  // ← Chemin de l'image (dans public/) — garder une image légère (< 400 Ko)
    alt: "Description de la photo",
  },

  badge: { title: "Basé à Angoulême", subtitle: "Intervention Nouvelle-Aquitaine" },

  // Chaque élément = un paragraphe
  // Utilise <strong>texte</strong> pour mettre en gras (blanc) et <br/> pour un saut de ligne
  paragraphs: ["Premier paragraphe avec <strong>texte en gras</strong>...", "Deuxième paragraphe..."],

  quote: { text: "Ta citation ici...", author: "PAUL BARDIN", role: "FONDATEUR" },
};
```

---

## 🚀 Déployer les modifications

1. Modifie `siteConfig.ts`
2. Vérifie : `npm run typecheck` puis `npm run build`
3. Commit & Push (le push met en production via Netlify) :
   ```bash
   git add .
   git commit -m "Mise à jour config"
   git push
   ```

---

## ⚠️ Important

- Ne supprime pas les virgules entre les éléments
- Garde les guillemets autour des textes
- Pour les prix, utilise des nombres sans le symbole € (ex: `150` pas `"150€"`)
