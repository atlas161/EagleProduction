import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ConstructionTracking } from './ConstructionTracking';

export const ConstructionTrackingPage: React.FC = () => {
  useSeo('/chantier');
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Suivi de chantier par drone',
    serviceType: 'Suivi de chantier BTP',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Eagle Production',
      url: 'https://www.eagle-prod.com'
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Charente (16), Nouvelle-Aquitaine'
    },
    description:
      "Suivi de chantier par drone avec orthophotos, vues comparatives et rapports illustrés. Télépilote certifié, conformité DGAC, interventions planifiées.",
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fréquences',
      itemListElement: [
        { '@type': 'Offer', name: 'Visite ponctuelle' },
        { '@type': 'Offer', name: 'Mensuel' },
        { '@type': 'Offer', name: 'Hebdomadaire' }
      ]
    }
  };
  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.eagle-prod.com/' },
      { '@type': 'ListItem', position: 2, name: 'Suivi de chantier BTP', item: 'https://www.eagle-prod.com/chantier/' }
    ]
  };
  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <Navbar />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
        <ConstructionTracking />
      </main>
      <Footer />
    </div>
  );
};
