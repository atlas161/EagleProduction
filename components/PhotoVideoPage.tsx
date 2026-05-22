import React, { useEffect } from 'react';
import { ArrowRight, Mountain, Camera, Film, Palette, CheckCircle2, Sparkles } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Reveal } from './Reveal';
import '../index.css';
import { Section } from '../types';

export const PhotoVideoPage: React.FC = () => {
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

  const canonical = 'https://www.eagle-prod.com/photo-video/';

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Photo & vidéo artistique par drone',
    serviceType: 'Photographie aérienne / vidéo de paysages',
    provider: { '@type': 'LocalBusiness', name: 'Eagle Production', url: 'https://www.eagle-prod.com' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Charente (16), Nouvelle-Aquitaine' },
    description:
      "Photo aérienne et vidéo artistique par drone à Angoulême : paysages, patrimoine, contenus cinématiques 4K, montage et étalonnage. Livrables premium, prêts à publier.",
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Photo & Vidéo Artistique',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vidéos de paysages', description: 'Plans cinématiques 4K, montage et colorimétrie' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Photographie aérienne', description: 'Photos haute résolution, cadrage, retouches légères' } },
      ],
    },
  };

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.eagle-prod.com/' },
      { '@type': 'ListItem', position: 2, name: 'Photo & Vidéo', item: canonical },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Livrez-vous des photos retouchées ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, retouches légères (contraste, couleur) selon le besoin. Le style est défini au brief.' } },
      { '@type': 'Question', name: 'Peut-on avoir une vidéo cinématique ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Plans fluides, montage, étalonnage et export adapté à votre usage.' } },
      { '@type': 'Question', name: 'Intervenez-vous en Charente ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui : Angoulême, Charente (16) et Nouvelle-Aquitaine selon mission.' } },
      { '@type': 'Question', name: 'Quels formats de livraison ?', acceptedAnswer: { '@type': 'Answer', text: 'Photo HD + vidéo 4K, et déclinaisons verticales si besoin.' } },
    ],
  };

  useEffect(() => {
    const title = 'Photo & vidéo artistique par drone | Angoulême (Charente) | Eagle Production';
    const desc =
      'Vidéo de paysages et photographie aérienne à Angoulême : plans drone 4K, montage cinématique, étalonnage, livrables premium. Charente et Nouvelle-Aquitaine. Devis gratuit.';
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
    setMeta('name', 'keywords', 'photographie aerienne angouleme, photo drone charente, video paysages drone, video cinematique 4k, etalonnage video, contenu artistique drone, tourisme, patrimoine, nouvelle aquitaine');
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
              <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-5">Photo & vidéo artistique</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
                Vidéos de paysages & photographie aérienne
                <br />
                <span className="text-accent">rendu cinématique</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-3xl text-lg text-white/55 leading-relaxed">
                Quand le rendu compte : cadrage, mouvement, lumière, colorimétrie. Une image premium pour votre communication, votre portfolio ou un projet artistique.
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
              <p className="text-center text-white/30 text-xs font-semibold tracking-[0.3em] uppercase mb-16">Approche</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Camera size={24} className="text-accent" />, title: 'Cadrage', desc: 'Composition propre, mouvements fluides, cohérence des plans.' },
                { icon: <Palette size={24} className="text-accent" />, title: 'Colorimétrie', desc: 'Étalonnage pour un rendu cinéma, sans “sur-traiter”.' },
                { icon: <Film size={24} className="text-accent" />, title: 'Montage', desc: 'Rythme, musique, rendu final prêt à publier.' },
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
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Usages</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">Paysages, patrimoine, communication</h2>
              <p className="text-center text-textSecondary max-w-3xl mx-auto">
                Photo aérienne et vidéo cinématique pour collectivités, tourisme, lieux et marques. Un rendu propre, cohérent, et exploitable sur site web, réseaux sociaux et supports de com.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Tourisme', desc: 'Valorisation d’un lieu : vidéo de paysages, plans drone 4K, rendu premium.' },
                { title: 'Patrimoine', desc: 'Mise en valeur du bâti : plans esthétiques, angles propres, cohérence de montage.' },
                { title: 'Marques', desc: 'Contenu de marque : esthétique + message clair, prêt à publier.' },
                { title: 'Portfolio', desc: 'Images fortes, cohérentes, travaillées (cadrage + colorimétrie).' },
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
              <a href="/immobilier-drone" className="inline-flex items-center gap-2 bg-white/[0.06] text-white px-6 py-3 rounded-full font-semibold hover:bg-white/[0.1] transition-colors border border-white/[0.08]">
                Immobilier <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="rounded-[2rem] border border-accent/25 bg-gradient-to-br from-accent/12 via-accent/5 to-transparent p-8 md:p-10 shadow-[0_0_40px_rgba(212,175,55,0.12)]">
                <div className="flex items-center gap-3 text-accent mb-4">
                  <Mountain size={18} />
                  <span className="tracking-[0.25em] text-xs font-bold uppercase">Livrables</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Un pack premium.</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Photos haute résolution (et déclinaisons si besoin).',
                    'Vidéo 4K montée + export adapté.',
                    'Option formats verticaux (Reels/Shorts).',
                    'Fichiers triés + lien sécurisé.',
                  ].map((it) => (
                    <div key={it} className="flex items-start gap-3 rounded-2xl border border-white/[0.10] bg-black/20 p-5">
                      <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                      <div className="text-sm text-white/70 leading-relaxed">{it}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-colors border border-accent/40">
                    Demander un devis <ArrowRight size={16} />
                  </a>
                  <a href="/" className="inline-flex items-center gap-2 bg-white/[0.06] text-white px-6 py-3 rounded-full font-semibold hover:bg-white/[0.1] transition-colors border border-white/[0.08]">
                    Retour à l’accueil <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 rounded-3xl border border-white/[0.10] bg-white/5 p-6">
                <div className="flex items-center gap-3 text-white font-extrabold">
                  <Sparkles size={18} className="text-accent" />
                  Style
                </div>
                <div className="mt-2 text-sm text-white/65 leading-relaxed">
                  Le style (cinématique, plus “social”, plus “corporate”) est défini au brief. Le but : une image cohérente avec votre marque et vos objectifs.
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
