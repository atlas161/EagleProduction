import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { EagleDigital } from './EagleDigital';
import '../index.css';
import { Section } from '../types';

export const EagleDigitalPage: React.FC = () => {
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

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

  useEffect(() => {
    const title = 'Eagle Digital - Identité Visuelle, Site Web & SEO à Angoulême | Eagle Production';
    const desc =
      'Eagle Digital, le pôle communication d\'Eagle Production à Angoulême. Création de logo, site web, SEO local, réseaux sociaux, maintenance. Devis gratuit sous 24h pour les TPE et PME de Charente.';
    document.title = title;

    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', 'https://www.eagle-prod.com/eagle-digital/');
    setMeta('property', 'og:image', 'https://www.eagle-prod.com/Photo_de_paul_bardin.webp');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'keywords', 'agence digitale Angoulême, création site web Charente, logo sur-mesure, SEO local Angoulême, Eagle Digital, Eagle Production');

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.eagle-prod.com/eagle-digital/');
  }, []);

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <Navbar activeSection={null} scrollToSection={goToHomeSection} />
      <main>
        <EagleDigital />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
