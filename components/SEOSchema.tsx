/**
 * Composant SEO Schema - Génère les données structurées JSON-LD
 * depuis le fichier de configuration siteConfig.ts
 * 
 * Les schémas sont automatiquement mis à jour quand tu modifies :
 * - FAQ_ITEMS → Schema FAQPage
 * - PRICING → Schema Offers
 * - SERVICES_COMPLEMENTAIRES → Schema Offers
 */

import React from 'react';
import { FAQ_ITEMS, PRICING, SERVICES_COMPLEMENTAIRES, CONTACT } from '../config/siteConfig';

export const SEOSchema: React.FC = () => {
  // Génération du schéma complet
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ─────────────────────────────────────────────────────────────────────
      // ORGANIZATION
      // ─────────────────────────────────────────────────────────────────────
      {
        "@type": "Organization",
        "@id": "https://www.eagle-prod.com/#organization",
        "name": "Eagle Production",
        "url": "https://www.eagle-prod.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.eagle-prod.com/media/logo_beige.png",
          "width": 512,
          "height": 512
        },
        "image": "https://www.eagle-prod.com/Photo_de_paul_bardin.webp",
        "description": "Société experte en prises de vues aériennes par drone, production vidéo, identité visuelle et présence digitale.",
        "founder": {
          "@type": "Person",
          "name": "Paul Bardin",
          "jobTitle": "Télépilote de drone certifié et fondateur"
        },
        "foundingDate": "2024",
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "45.6484",
            "longitude": "0.1562"
          },
          "geoRadius": "150000"
        },
        "sameAs": Object.values(CONTACT.socialLinks)
      },

      // ─────────────────────────────────────────────────────────────────────
      // LOCAL BUSINESS avec OFFRES DYNAMIQUES
      // ─────────────────────────────────────────────────────────────────────
      {
        "@type": "LocalBusiness",
        "@id": "https://www.eagle-prod.com/#localbusiness",
        "name": "Eagle Production",
        "image": "https://www.eagle-prod.com/Photo_de_paul_bardin.webp",
        "description": "Services de drone professionnels : vidéo aérienne 6K, photographie, inspection technique. Montage vidéo, identité visuelle et création de sites web.",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Angoulême",
          "addressRegion": "Nouvelle-Aquitaine",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "45.6484",
          "longitude": "0.1562"
        },
        "telephone": CONTACT.phone,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "12:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services de Drone et Production",
          "itemListElement": [
            // Formule Essentiel
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Formule ${PRICING.essentiel.name}`,
                "description": PRICING.essentiel.description
              },
              "price": PRICING.essentiel.prices[0].price.toString(),
              "priceCurrency": "EUR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": PRICING.essentiel.prices[0].price.toString(),
                "priceCurrency": "EUR",
                "unitText": "heure"
              }
            },
            // Formule Altitude
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Formule ${PRICING.altitude.name}`,
                "description": PRICING.altitude.description
              },
              "price": PRICING.altitude.prices[0].price.toString(),
              "priceCurrency": "EUR"
            },
            // Formule Horizon
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Formule ${PRICING.horizon.name}`,
                "description": PRICING.horizon.description
              },
              "price": PRICING.horizon.prices[0].price.toString(),
              "priceCurrency": "EUR"
            },
            // Montage vidéo
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": SERVICES_COMPLEMENTAIRES.montageVideo.name,
                "description": SERVICES_COMPLEMENTAIRES.montageVideo.description
              },
              "price": SERVICES_COMPLEMENTAIRES.montageVideo.pricePerHour.toString(),
              "priceCurrency": "EUR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": SERVICES_COMPLEMENTAIRES.montageVideo.pricePerHour.toString(),
                "priceCurrency": "EUR",
                "unitText": "heure"
              }
            },
            // Création de logo
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Création de logo",
                "description": "Logo sur-mesure pour votre identité visuelle"
              },
              "price": SERVICES_COMPLEMENTAIRES.identiteVisuelle.items[0].price.toString(),
              "priceCurrency": "EUR"
            },
            // Site internet
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Site internet vitrine",
                "description": "Création de site web professionnel clé en main"
              },
              "price": SERVICES_COMPLEMENTAIRES.presenceDigitale.items[0].price.toString(),
              "priceCurrency": "EUR"
            }
          ]
        }
      },

      // ─────────────────────────────────────────────────────────────────────
      // WEBSITE
      // ─────────────────────────────────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": "https://www.eagle-prod.com/#website",
        "url": "https://www.eagle-prod.com",
        "name": "Eagle Production",
        "description": "Services de drone, production vidéo et création digitale",
        "publisher": {
          "@id": "https://www.eagle-prod.com/#organization"
        },
        "inLanguage": "fr-FR"
      },

      // ─────────────────────────────────────────────────────────────────────
      // WEBPAGE
      // ─────────────────────────────────────────────────────────────────────
      {
        "@type": "WebPage",
        "@id": "https://www.eagle-prod.com/#webpage",
        "url": "https://www.eagle-prod.com",
        "name": "Eagle Production | Vidéo Drone, Photos, Digitale",
        "isPartOf": {
          "@id": "https://www.eagle-prod.com/#website"
        },
        "about": {
          "@id": "https://www.eagle-prod.com/#organization"
        },
        "description": "Expert en services de drone : photographie aérienne, vidéo 4K/6K, montage vidéo et création digitale. Devis gratuit.",
        "inLanguage": "fr-FR"
      },

      // ─────────────────────────────────────────────────────────────────────
      // FAQ PAGE - DYNAMIQUE depuis siteConfig
      // ─────────────────────────────────────────────────────────────────────
      {
        "@type": "FAQPage",
        "@id": "https://www.eagle-prod.com/#faq",
        "mainEntity": FAQ_ITEMS.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer.replace(/\n/g, ' ') // Nettoie les sauts de ligne pour le schema
          }
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
