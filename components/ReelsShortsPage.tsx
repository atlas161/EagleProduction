import React, { useEffect } from 'react';
import { ArrowRight, Smartphone, Film, Captions, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Reveal } from './Reveal';
import '../index.css';
import { Section } from '../types';

export const ReelsShortsPage: React.FC = () => {
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

  const canonical = 'https://www.eagle-prod.com/reels-shorts/';

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Reels Instagram & YouTube Shorts',
    serviceType: 'Vidéos courtes réseaux sociaux',
    provider: { '@type': 'LocalBusiness', name: 'Eagle Production', url: 'https://www.eagle-prod.com' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Charente (16), Nouvelle-Aquitaine' },
    description:
      "Création de Reels Instagram et YouTube Shorts à Angoulême : tournage drone + au sol, montage vertical, sous-titres, déclinaisons TikTok/Facebook. Des vidéos courtes prêtes à publier, pensées pour la rétention.",
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Contenu Réseaux Sociaux',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reels Instagram', description: 'Tournage + montage vertical optimisé, rythme et accroche' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'YouTube Shorts', description: 'Format short : hook, structure, export adapté' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok / Facebook', description: 'Déclinaisons de formats + versions' } },
      ],
    },
  };

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.eagle-prod.com/' },
      { '@type': 'ListItem', position: 2, name: 'Reels & Shorts', item: canonical },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Faites-vous du montage vertical (9:16) ?',
        acceptedAnswer: { '@type': 'Answer', text: 'Oui. Reels/Shorts/TikTok : cadrage vertical, rythme, sous-titres si besoin, exports optimisés.' },
      },
      {
        '@type': 'Question',
        name: 'Pouvez-vous filmer au drone + caméra au sol ?',
        acceptedAnswer: { '@type': 'Answer', text: 'Oui. On combine drone + au sol pour avoir une vidéo plus dynamique et plus complète.' },
      },
      {
        '@type': 'Question',
        name: 'Combien de versions fournissez-vous ?',
        acceptedAnswer: { '@type': 'Answer', text: 'On peut décliner une vidéo en plusieurs hooks / formats. Le nombre de versions dépend du brief.' },
      },
      {
        '@type': 'Question',
        name: 'Où intervenez-vous ?',
        acceptedAnswer: { '@type': 'Answer', text: 'Base à Angoulême : Charente (16) et Nouvelle-Aquitaine selon mission.' },
      },
    ],
  };

  useEffect(() => {
    const title = 'Reels Instagram & YouTube Shorts | Vidéos courtes à Angoulême | Eagle Production';
    const desc =
      'Création de Reels/Shorts à Angoulême : tournage drone + au sol, montage vertical 9:16, sous-titres, déclinaisons TikTok/Facebook. Vidéos prêtes à publier, pensées pour performer.';
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
    setMeta('name', 'keywords', 'reels instagram angouleme, youtube shorts angouleme, videos courtes, montage vertical 9:16, tiktok video, sous-titres reels, drone reels, tournage video charente, contenu réseaux sociaux, vidéo entreprise réseaux sociaux');
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
              <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-5">Réseaux sociaux</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
                Reels Instagram & YouTube Shorts
                <br />
                <span className="text-accent">tournage + montage</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-3xl text-lg text-white/55 leading-relaxed">
                Des vidéos courtes qui retiennent : hook clair, rythme, plans drone + au sol, et déclinaisons prêtes à publier (Reels, Shorts, TikTok).
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-all duration-200 text-sm shadow-lg shadow-accent/20">
                  Devis gratuit <ArrowRight size={15} />
                </a>
                <a href="/eagle-production" className="inline-flex items-center gap-2 text-white/55 font-medium px-5 py-3 rounded-full border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200 text-sm">
                  Production vidéo <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="text-center text-white/30 text-xs font-semibold tracking-[0.3em] uppercase mb-16">Ce qui fait performer</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Sparkles size={24} className="text-accent" />, title: 'Hook + rythme', desc: 'Accroche dès les premières secondes, montage dynamique, structure claire.' },
                { icon: <Film size={24} className="text-accent" />, title: 'Montage vertical', desc: 'Format 9:16, exports optimisés, versions adaptées à chaque plateforme.' },
                { icon: <Captions size={24} className="text-accent" />, title: 'Sous-titres', desc: 'Lisible sans son, meilleure rétention, plus de conversions.' },
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
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Structure</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">Des vidéos courtes qui gardent l’attention</h2>
              <p className="text-center text-textSecondary max-w-3xl mx-auto">
                Reels Instagram, YouTube Shorts, TikTok : on travaille le hook, la clarté du message, et la répétition. L’objectif est simple : plus de vues, plus de clics, plus de demandes.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Entreprises locales', desc: 'Présentation de service, preuves, réalisations : un contenu régulier qui renforce la confiance.' },
                { title: 'Artisans & BTP', desc: 'Avant/après, coulisses, chantiers : formats courts très efficaces en local.' },
                { title: 'Immobilier', desc: 'Visites rapides, détails clés, plan drone : idéal pour annonces et réseaux.' },
                { title: 'Événementiel', desc: 'Teasers et best-of : contenu réutilisable sur plusieurs plateformes.' },
              ].map((c) => (
                <div key={c.title} className="rounded-3xl border border-white/[0.10] bg-white/5 p-7">
                  <div className="text-white font-extrabold">{c.title}</div>
                  <div className="mt-2 text-sm text-white/65 leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a href="/immobilier-drone" className="inline-flex items-center gap-2 bg-white/[0.06] text-white px-6 py-3 rounded-full font-semibold hover:bg-white/[0.1] transition-colors border border-white/[0.08]">
                Immobilier <ArrowRight size={16} />
              </a>
              <a href="/evenementiel" className="inline-flex items-center gap-2 bg-white/[0.06] text-white px-6 py-3 rounded-full font-semibold hover:bg-white/[0.1] transition-colors border border-white/[0.08]">
                Événementiel <ArrowRight size={16} />
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
                    <span className="tracking-[0.25em] text-xs font-bold uppercase">Méthode</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Un process simple, orienté résultat.</h2>
                  <div className="mt-8 space-y-4">
                    {[
                      { n: '01', title: 'Brief', desc: 'Objectif, offre, cible, style, plateformes.' },
                      { n: '02', title: 'Tournage', desc: 'Drone + au sol, séquences courtes et variées.' },
                      { n: '03', title: 'Montage', desc: 'Hook, rythme, sous-titres, export par plateforme.' },
                      { n: '04', title: 'Déclinaisons', desc: 'Versions (A/B), formats et durées si besoin.' },
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
                    <Smartphone size={18} />
                    <span className="tracking-[0.25em] text-xs font-bold uppercase">Livraison</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Prêt à poster.</h2>
                  <div className="mt-8 space-y-3">
                    {[
                      'Exports optimisés : Reels / Shorts / TikTok.',
                      'Sous-titres intégrés si besoin.',
                      'Plusieurs versions possibles (hook, durée, format).',
                      'Fichiers triés + lien sécurisé.',
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
