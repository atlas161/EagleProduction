import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { EagleDigital } from './EagleDigital';

export const EagleDigitalPage: React.FC = () => {

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Eagle Digital - Communication & Web',
    serviceType: 'Agence digitale locale',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Eagle Production',
      url: 'https://www.eagle-prod.com',
      telephone: '+33699361715',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Angoulême',
        addressRegion: 'Charente',
        addressCountry: 'FR',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Charente (16), Nouvelle-Aquitaine',
    },
    description:
      'Eagle Digital, pôle communication d\'Eagle Production à Angoulême : création de logo, site web, référencement SEO, réseaux sociaux, maintenance. Solutions clé en main pour TPE et PME en Charente.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Eagle Digital',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Création de logo sur-mesure', description: 'Logo professionnel avec charte graphique complète, droits inclus' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Création de site web', description: 'Site vitrine one-page, multi-pages ou e-commerce, optimisé SEO' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Référencement SEO local', description: 'Fiche Google Business, audit SEO, visibilité locale à Angoulême' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Réseaux sociaux', description: 'Setup, stratégie de contenu, templates et animation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance & accompagnement', description: 'Forfait mensuel, banque d\'heures, assistance technique' } },
      ],
    },
  };

  useSeo('/eagle-digital');

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <Navbar />
      <main id="main-content">
        <EagleDigital />
      </main>
      <Footer />
    </div>
  );
};
