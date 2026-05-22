import React, { useEffect } from 'react';
import { ArrowRight, Home, Camera, Film, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Reveal } from './Reveal';
import '../index.css';
import { Section } from '../types';

export const ImmobilierDronePage: React.FC = () => {
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

  const canonical = 'https://www.eagle-prod.com/immobilier-drone/';

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Immobilier : photo & vidéo par drone',
    serviceType: 'Photo immobilière / vidéo immobilière par drone',
    provider: { '@type': 'LocalBusiness', name: 'Eagle Production', url: 'https://www.eagle-prod.com' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Charente (16), Nouvelle-Aquitaine' },
    description:
      "Mise en valeur de biens immobiliers (vente/location) par drone à Angoulême : photos aériennes, plans 4K, vidéo immobilière montée, formats réseaux sociaux. Télépilote certifié DGAC, livrables prêts à publier.",
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Immobilier',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Photos aériennes immobilier', description: 'Photos HD pour annonces et dossiers (vente/location)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vidéo immobilière 4K', description: 'Vidéo montée courte et dynamique, prête à publier' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formats réseaux sociaux', description: 'Reels/Shorts : déclinaisons verticales + sous-titres' } },
      ],
    },
  };

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.eagle-prod.com/' },
      { '@type': 'ListItem', position: 2, name: 'Immobilier', item: canonical },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Pourquoi utiliser le drone pour un bien immobilier ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le drone montre l’environnement, l’accès, le terrain et les volumes. C’est idéal pour valoriser une maison, un immeuble ou un domaine, et améliorer le taux de clic d’une annonce.',
        },
      },
      {
        '@type': 'Question',
        name: 'Livrez-vous des formats prêts pour les portails et les réseaux sociaux ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. Photos HD pour annonces, vidéo 16:9, et déclinaisons verticales (Reels/Shorts/TikTok) avec sous-titres si besoin.',
        },
      },
      {
        '@type': 'Question',
        name: 'Intervenez-vous autour d’Angoulême ?',
        acceptedAnswer: { '@type': 'Answer', text: 'Oui : Angoulême, Charente (16) et Nouvelle-Aquitaine selon mission.' },
      },
      {
        '@type': 'Question',
        name: 'Êtes-vous certifié DGAC ?',
        acceptedAnswer: { '@type': 'Answer', text: 'Oui, télépilote certifié. On sécurise le vol et on respecte la réglementation.' },
      },
    ],
  };

  useEffect(() => {
    const title = 'Drone Immobilier Angoulême | Photos & Vidéos (vente/location) | Eagle Production';
    const desc =
      'Immobilier à Angoulême : photo immobilière et vidéo immobilière par drone (4K). Mise en valeur de biens vente/location, formats annonces + Reels/Shorts. Télépilote certifié DGAC. Devis gratuit.';
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
    setMeta('name', 'keywords', 'drone immobilier Angoulême, photo immobilière drone, vidéo immobilière drone, mise en valeur bien immobilier, vente location, agence immobilière, promoteur immobilier, photos aériennes, vidéo 4K, annonce immobilière, Charente, Nouvelle-Aquitaine');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', 'https://www.eagle-prod.com/Photo_de_paul_bardin.webp');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', desc);

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical);
  }, []);

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <Navbar activeSection={null} scrollToSection={goToHomeSection} />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

        <section className="pt-28 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-5">Immobilier</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
                Photos & vidéos immobilières par drone
                <br />
                <span className="text-accent">à Angoulême</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-3xl text-lg text-white/55 leading-relaxed">
                Pour vendre ou louer plus vite : plans drone 4K, photos aériennes HD, vidéo courte montée et formats adaptés aux réseaux sociaux. Un rendu propre, moderne, et orienté conversion.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-all duration-200 text-sm shadow-lg shadow-accent/20">
                  Devis gratuit <ArrowRight size={15} />
                </a>
                <a href="/eagle-production" className="inline-flex items-center gap-2 text-white/55 font-medium px-5 py-3 rounded-full border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200 text-sm">
                  Voir toutes les prestations <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="text-center text-white/30 text-xs font-semibold tracking-[0.3em] uppercase mb-16">Pourquoi ça marche</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Home size={24} className="text-accent" />, title: 'Contexte & volumes', desc: 'Le drone montre l’environnement, l’accès, le terrain et les volumes.' },
                { icon: <Sparkles size={24} className="text-accent" />, title: 'Rendu premium', desc: 'Cadrage, mouvement, colorimétrie : une image qui donne confiance.' },
                { icon: <Film size={24} className="text-accent" />, title: 'Formats qui convertissent', desc: 'Annonce, site, Reels/Shorts : le bon format au bon endroit.' },
              ].map((b) => (
                <div key={b.title} className="rounded-3xl border border-white/[0.10] bg-white/5 p-7">
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">{b.icon}</div>
                  <div className="mt-4 text-white font-extrabold">{b.title}</div>
                  <div className="mt-2 text-sm text-white/65 leading-relaxed">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">SEO & conversion</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">Pensé pour vendre et louer plus vite</h2>
              <p className="text-center text-textSecondary max-w-3xl mx-auto">
                Une photo immobilière ou une vidéo immobilière bien montée augmente la confiance et le taux de clic. Les plans drone mettent en valeur l’environnement, l’accès, le terrain et les volumes.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Agences immobilières', desc: 'Photos aériennes + vidéo courte pour annonces, vitrines, réseaux sociaux.' },
                { title: 'Promoteurs / programmes neufs', desc: 'Mise en valeur du site, des volumes, du quartier et des accès.' },
                { title: 'Locations saisonnières', desc: 'Gîtes, domaines, Airbnb : images premium pour se démarquer.' },
                { title: 'Prestige', desc: 'Rendu cinématique, colorimétrie, plan de tournage propre et cohérent.' },
              ].map((c) => (
                <div key={c.title} className="rounded-3xl border border-white/[0.10] bg-white/5 p-7">
                  <div className="text-white font-extrabold">{c.title}</div>
                  <div className="mt-2 text-sm text-white/65 leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a href="/reels-shorts" className="inline-flex items-center gap-2 bg-white/[0.06] text-white px-6 py-3 rounded-full font-semibold hover:bg-white/[0.1] transition-colors border border-white/[0.08]">
                Reels & Shorts <ArrowRight size={16} />
              </a>
              <a href="/photo-video" className="inline-flex items-center gap-2 bg-white/[0.06] text-white px-6 py-3 rounded-full font-semibold hover:bg-white/[0.1] transition-colors border border-white/[0.08]">
                Photo & vidéo <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <Reveal>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
                  <div className="flex items-center gap-3 text-accent mb-4">
                    <ShieldCheck size={18} />
                    <span className="tracking-[0.25em] text-xs font-bold uppercase">Process</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Simple, rapide, efficace.</h2>
                  <div className="mt-8 space-y-4">
                    {[
                      { n: '01', title: 'Brief', desc: 'Type de bien, points à mettre en valeur, formats attendus.' },
                      { n: '02', title: 'Tournage', desc: 'Plans drone + (si besoin) caméra au sol, en sécurité.' },
                      { n: '03', title: 'Montage', desc: 'Vidéo courte, dynamique, calibrée pour le support.' },
                      { n: '04', title: 'Livraison', desc: 'Photos + vidéo + versions verticales si demandées.' },
                    ].map((s) => (
                      <div key={s.n} className="rounded-2xl border border-white/[0.08] bg-black/20 p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-extrabold">{s.n}</div>
                          <div>
                            <div className="text-white font-bold">{s.title}</div>
                            <div className="mt-1 text-sm text-white/65 leading-relaxed">{s.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
                  <div className="flex items-center gap-3 text-accent mb-4">
                    <Camera size={18} />
                    <span className="tracking-[0.25em] text-xs font-bold uppercase">Livrables</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Un pack prêt à publier.</h2>
                  <div className="mt-8 space-y-3">
                    {[
                      'Photos HD optimisées pour annonces et site.',
                      'Vidéo 4K montée (teaser / présentation).',
                      'Formats verticaux Reels/Shorts si besoin.',
                      'Livraison par lien sécurisé, fichiers triés.',
                    ].map((it) => (
                      <div key={it} className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                        <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                        <div className="text-sm text-white/70 leading-relaxed">{it}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-colors border border-accent/40">
                      Demander un devis <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
