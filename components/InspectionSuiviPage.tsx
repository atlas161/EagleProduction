import React, { useEffect } from 'react';
import { ArrowRight, Building2, MapPinned, FileText, ShieldCheck, Camera, Scan, Layers, CheckCircle2 } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Reveal } from './Reveal';
import '../index.css';
import { Section } from '../types';

export const InspectionSuiviPage: React.FC = () => {
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

  const canonical = 'https://www.eagle-prod.com/inspection-suivi/';

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Inspection & suivi par drone',
    serviceType: 'Inspection toiture / bâtiment et suivi de chantier par drone',
    provider: { '@type': 'LocalBusiness', name: 'Eagle Production', url: 'https://www.eagle-prod.com' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Charente (16), Nouvelle-Aquitaine' },
    description:
      "Inspection de toiture et suivi de chantier par drone à Angoulême (Charente). Vues 4K, photos haute résolution, orthophotos, comparatifs T-1/T, rapport PDF illustré. Télépilote certifié DGAC, missions cadrées et livrables exploitables.",
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Inspection & Suivi',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspection de toiture par drone', description: 'Contrôle toiture sans échafaudage : détails, zones sensibles, rapport PDF' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspection de bâtiment par drone', description: 'Façades, structures, accès difficile : vues 4K, photos annotées' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Suivi de chantier par drone', description: 'Orthophotos, comparatifs, points fixes, reporting et archivage' } },
      ],
    },
  };

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.eagle-prod.com/' },
      { '@type': 'ListItem', position: 2, name: 'Inspection & Suivi', item: canonical },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels livrables pour une inspection de toiture par drone ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Photos haute résolution, vues 4K, sélection des zones critiques, et rapport PDF illustré (annoté) selon le besoin. Les fichiers sont livrés via lien sécurisé.',
        },
      },
      {
        '@type': 'Question',
        name: 'Le suivi de chantier par drone inclut-il des comparatifs ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. On peut définir des points fixes et reproduire les cadrages à chaque session : comparatifs T-1/T, chronologie, et orthophoto si nécessaire.',
        },
      },
      {
        '@type': 'Question',
        name: 'Intervenez-vous à Angoulême et en Charente ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, base à Angoulême. Intervention en Charente (16) et plus largement en Nouvelle-Aquitaine selon la mission.',
        },
      },
      {
        '@type': 'Question',
        name: 'Êtes-vous certifié DGAC ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. Les vols sont réalisés par télépilote certifié, avec un cadre pro (sécurité, réglementation, assurance RC Pro).',
        },
      },
    ],
  };

  useEffect(() => {
    const title = 'Inspection toiture & suivi de chantier par drone | Angoulême (Charente) | Eagle Production';
    const desc =
      'Inspection de toiture/bâtiments et suivi de chantier par drone à Angoulême : vues 4K, orthophotos, comparatifs T-1/T, rapport PDF illustré. Télépilote certifié DGAC. Devis gratuit.';
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
    setMeta('name', 'keywords', 'inspection toiture drone, suivi de chantier drone, drone BTP Angoulême, orthophoto chantier, rapport PDF inspection, télépilote drone certifié DGAC, Charente, Nouvelle-Aquitaine');
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
              <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-5">Inspection & suivi par drone</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
                Inspection de toiture & suivi de chantier
                <br />
                <span className="text-accent">par drone à Angoulême</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-3xl text-lg text-white/55 leading-relaxed">
                Pour le BTP, l’immobilier et la maintenance : on capture des images <span className="text-white">utiles</span> (détails toiture, zones sensibles, points fixes) et on livre des formats <span className="text-white">exploitables</span>
                (comparatifs, orthophotos, rapport PDF illustré). Idéal pour diagnostiquer, documenter, suivre et communiquer.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-all duration-200 text-sm shadow-lg shadow-accent/20">
                  Devis gratuit <ArrowRight size={15} />
                </a>
                <a href="/inspection" className="inline-flex items-center gap-2 text-white/55 font-medium px-5 py-3 rounded-full border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200 text-sm">
                  Inspection toiture <ArrowRight size={15} />
                </a>
                <a href="/chantier" className="inline-flex items-center gap-2 text-white/55 font-medium px-5 py-3 rounded-full border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200 text-sm">
                  Suivi de chantier <ArrowRight size={15} />
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Certifié DGAC', 'RC Pro', '4K', 'Orthophoto', 'Rapport PDF'].map((b) => (
                  <span key={b} className="text-[10px] text-white/30 border border-white/8 px-2.5 py-1 rounded-full">{b}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Cas d’usage</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">Pour qui, et pour quoi ?</h2>
              <p className="text-center text-textSecondary max-w-3xl mx-auto">
                Ces prestations sont utilisées par des entreprises BTP, maîtres d’ouvrage, maîtres d’œuvre, syndics, collectivités et particuliers dès qu’il faut une preuve visuelle claire et un reporting propre.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Inspection de toiture', desc: 'Contrôle des tuiles, faîtage, gouttières, points d’infiltration, zones difficiles d’accès.' },
                { title: 'Inspection bâtiment', desc: 'Façades, structures, charpente : vues 4K et photos de détails, sans échafaudage.' },
                { title: 'Suivi de chantier', desc: 'Points fixes, comparatifs T-1/T, chronologie : idéal pour MOA/MOE et conducteurs de travaux.' },
                { title: 'Reporting & assurance', desc: 'Photos annotées et rapport PDF : utile pour dossiers, litiges, expertises, maintenance.' },
              ].map((c) => (
                <div key={c.title} className="rounded-3xl border border-white/[0.10] bg-white/5 p-7">
                  <div className="text-white font-extrabold">{c.title}</div>
                  <div className="mt-2 text-sm text-white/65 leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a href="/inspection" className="inline-flex items-center gap-2 bg-white/[0.06] text-white px-6 py-3 rounded-full font-semibold hover:bg-white/[0.1] transition-colors border border-white/[0.08]">
                Page inspection <ArrowRight size={16} />
              </a>
              <a href="/chantier" className="inline-flex items-center gap-2 bg-white/[0.06] text-white px-6 py-3 rounded-full font-semibold hover:bg-white/[0.1] transition-colors border border-white/[0.08]">
                Page chantier <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="text-center text-white/30 text-xs font-semibold tracking-[0.3em] uppercase mb-16">Ce que vous obtenez</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
              {[
                { icon: <Scan size={28} className="text-accent" />, title: 'Inspection sans échafaudage', desc: 'Vues 4K et photos de détails : rapide, sûr, lisible pour décider et documenter.' },
                { icon: <Layers size={28} className="text-accent" />, title: 'Comparatifs & points fixes', desc: 'Même cadrage session après session : évolution claire, historique propre, reporting simple.' },
                { icon: <FileText size={28} className="text-accent" />, title: 'Rapport PDF illustré', desc: 'Synthèse claire, photos annotées, organisation par zones. Prêt à transmettre.' },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="bg-surfaceHighlight/20 p-10 flex flex-col gap-5 h-full hover:bg-surfaceHighlight/35 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">{item.icon}</div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
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
                    <span className="tracking-[0.25em] text-xs font-bold uppercase">Cadre pro</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Une mission carrée, de la demande à la livraison.</h2>
                  <div className="mt-8 space-y-4">
                    {[
                      { n: '01', title: 'Brief', desc: 'Lieu, contraintes, objectifs, livrables attendus.' },
                      { n: '02', title: 'Préparation', desc: 'Météo, réglementation, sécurité, plan de vol.' },
                      { n: '03', title: 'Capture', desc: 'Vues globales + détails, points fixes, zones sensibles.' },
                      { n: '04', title: 'Livraison', desc: 'Lien sécurisé + organisation claire + rapport si demandé.' },
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
                    <Building2 size={18} />
                    <span className="tracking-[0.25em] text-xs font-bold uppercase">Livrables</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Des fichiers prêts à exploiter.</h2>
                  <p className="mt-4 text-textSecondary leading-relaxed">
                    Le but : gagner du temps. Vous recevez un pack trié, nommé, et facile à partager (MOA/MOE, client, assureur, syndic).
                  </p>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: <Camera size={18} className="text-accent" />, title: 'Photos HD', desc: 'Détails + vues d’ensemble.' },
                      { icon: <Scan size={18} className="text-accent" />, title: 'Orthophoto', desc: 'Lecture “plan” si besoin.' },
                      { icon: <Layers size={18} className="text-accent" />, title: 'Comparatifs', desc: 'Avant / après, T-1/T.' },
                      { icon: <FileText size={18} className="text-accent" />, title: 'Rapport PDF', desc: 'Illustré, annoté, clair.' },
                    ].map((c) => (
                      <div key={c.title} className="rounded-2xl border border-white/[0.08] bg-black/20 p-5">
                        <div className="flex items-center gap-3 text-white font-bold">
                          <span className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">{c.icon}</span>
                          {c.title}
                        </div>
                        <div className="mt-2 text-sm text-white/65 leading-relaxed">{c.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-colors border border-accent/40">
                      Devis gratuit <ArrowRight size={16} />
                    </a>
                    <a href="/faq" className="inline-flex items-center gap-2 bg-white/[0.06] text-white px-6 py-3 rounded-full font-semibold hover:bg-white/[0.1] transition-colors border border-white/[0.08]">
                      Voir la FAQ <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">FAQ</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">Questions fréquentes</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: 'Inspection toiture : c’est utile pour qui ?', a: 'Syndics, entreprises, artisans, particuliers : pour diagnostiquer, chiffrer, documenter et sécuriser.' },
                { q: 'Suivi de chantier : quelle fréquence ?', a: 'Ponctuel, mensuel, hebdomadaire : on s’adapte au rythme et à vos contraintes de planning.' },
                { q: 'Faut-il être sur place ?', a: 'Pas forcément. On peut travailler avec un brief clair et un contact sur site si nécessaire.' },
                { q: 'Quels délais de livraison ?', a: 'Selon mission : souvent rapide (48h à quelques jours) avec fichiers triés et lien sécurisé.' },
              ].map((f) => (
                <div key={f.q} className="rounded-3xl border border-white/[0.10] bg-white/5 p-6">
                  <div className="text-white font-extrabold flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    {f.q}
                  </div>
                  <div className="mt-2 text-sm text-white/65 leading-relaxed">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
