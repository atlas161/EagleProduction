import React from 'react';
import { useSeo } from '../hooks/useSeo';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { InspectionBuildings } from './InspectionBuildings';

export const InspectionBuildingsPage: React.FC = () => {

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Inspection de bâtiments par drone',
    serviceType: 'Inspection technique par drone',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Eagle Production',
      url: 'https://www.eagle-prod.com'
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Charente (16), Nouvelle-Aquitaine'
    },
    description: 'Inspection de toitures, façades, charpentes et structures par drone à Angoulême. Vues 4K haute définition, rapport illustré PDF. Télépilote certifié DGAC, intervention sans échafaudage.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Inspection par drone',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspection de toiture par drone', description: 'Détection de défauts, infiltrations et dégâts sans échafaudage' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspection de façade par drone', description: 'Vues 4K des façades, cartographie des désordres et fissures' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rapport illustré PDF', description: 'Synthèse des observations avec photos annotées et recommandations' } },
      ]
    }
  };

  useSeo('/inspection');

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <Navbar />
      <main id="main-content">
        <InspectionBuildings />
      </main>
      <Footer />
    </div>
  );
};
