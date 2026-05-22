import React, { useEffect } from 'react';
import { ArrowRight, Users, Film, Camera, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Reveal } from './Reveal';
import '../index.css';
import { Section } from '../types';

export const EvenementielPage: React.FC = () => {
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

  const canonical = 'https://www.eagle-prod.com/evenementiel/';

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Événementiel & souvenirs : vidéo',
    serviceType: 'Vidéos événementielles (entreprise / famille)',
    provider: { '@type': 'LocalBusiness', name: 'Eagle Production', url: 'https://www.eagle-prod.com' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Charente (16), Nouvelle-Aquitaine' },
    description:
      "Vidéos événementielles à Angoulême : soirées d’entreprise, souvenirs familiaux, reportages et teasers. Drone + au sol, montage, formats réseaux sociaux. Livrables propres et prêts à publier.",
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Événementiel',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Soirées d’entreprise', description: 'Teaser + aftermovie, communication interne/externe' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Souvenirs familiaux', description: 'Film souvenir, moments clés, montage émotionnel' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formats réseaux sociaux', description: 'Reels/Shorts : extraits courts, sous-titres si besoin' } },
      ],
    },
  };

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.eagle-prod.com/' },
      { '@type': 'ListItem', position: 2, name: 'Événementiel', item: canonical },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Faites-vous des teasers courts ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Teaser court + version principale, et déclinaisons Reels/Shorts si besoin.' } },
      { '@type': 'Question', name: 'Drone + caméra au sol ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Le combo donne une vidéo plus vivante et plus “cinéma”.' } },
      { '@type': 'Question', name: 'Combien de temps pour la livraison ?', acceptedAnswer: { '@type': 'Answer', text: 'Selon l’event et le volume de rush : souvent quelques jours, avec un pack trié et un lien sécurisé.' } },
      { '@type': 'Question', name: 'Où intervenez-vous ?', acceptedAnswer: { '@type': 'Answer', text: 'Base à Angoulême : Charente (16) et Nouvelle-Aquitaine selon mission.' } },
    ],
  };

  useEffect(() => {
    const title = 'Vidéos événementielles à Angoulême | Soirées d’entreprise & souvenirs | Eagle Production';
    const desc =
      'Événementiel à Angoulême : vidéos pour soirées d’entreprise et souvenirs familiaux. Drone + au sol, montage, teaser, Reels/Shorts. Livrables prêts à publier. Devis gratuit.';
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
    setMeta('name', 'keywords', 'video evenementiel angouleme, soiree entreprise video, aftermovie, video souvenir familial, drone evenementiel, montage video, teaser evenement, reels evenement, charente');
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
              <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-5">Événementiel</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
                Vidéos événementielles & souvenirs
                <br />
                <span className="text-accent">teaser + film</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-3xl text-lg text-white/55 leading-relaxed">
                Soirée d’entreprise ou souvenir familial : on capte l’ambiance, les moments clés, et on livre une vidéo prête à partager (et des formats courts si besoin).
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
              <p className="text-center text-white/30 text-xs font-semibold tracking-[0.3em] uppercase mb-16">Format</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Sparkles size={24} className="text-accent" />, title: 'Teaser', desc: 'Court, efficace, parfait pour communiquer rapidement.' },
                { icon: <Film size={24} className="text-accent" />, title: 'Aftermovie', desc: 'Vidéo principale : histoire, ambiance, moments clés.' },
                { icon: <Camera size={24} className="text-accent" />, title: 'Captation', desc: 'Drone + au sol selon la mission, rendu propre.' },
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
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Objectif</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">Un contenu réutilisable, qui se partage</h2>
              <p className="text-center text-textSecondary max-w-3xl mx-auto">
                Pour une soirée d’entreprise ou un souvenir familial : on livre un teaser court, une vidéo principale, et des formats réseaux sociaux si nécessaire.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Entreprises', desc: 'Séminaires, inaugurations, soirées : communication interne/externe, partenaires, marque employeur.' },
                { title: 'Famille', desc: 'Souvenirs : moments clés, montage émotionnel, rendu propre et durable.' },
                { title: 'Collectivités', desc: 'Événements locaux : teaser + reportage court pour communiquer efficacement.' },
                { title: 'Réseaux sociaux', desc: 'Extraits verticaux Reels/Shorts pour maximiser la portée.' },
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
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Sans friction.</h2>
                  <div className="mt-8 space-y-3">
                    {[
                      'Brief : objectif, timing, moments clés.',
                      'Captation : plans drone + au sol selon contexte.',
                      'Montage : rythme, musique, colorimétrie.',
                      'Livraison : teaser + vidéo + versions si besoin.',
                    ].map((it) => (
                      <div key={it} className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                        <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                        <div className="text-sm text-white/70 leading-relaxed">{it}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
                  <div className="flex items-center gap-3 text-accent mb-4">
                    <Users size={18} />
                    <span className="tracking-[0.25em] text-xs font-bold uppercase">Livrables</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Prêt à partager.</h2>
                  <div className="mt-8 space-y-3">
                    {[
                      'Teaser court pour annoncer/relancer.',
                      'Vidéo principale (aftermovie / souvenir).',
                      'Exports Reels/Shorts/TikTok si besoin.',
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
