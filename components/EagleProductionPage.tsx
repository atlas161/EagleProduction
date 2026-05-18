import React, { useEffect } from 'react';
import { ArrowRight, FileDown, FileText, MapPinned, ShieldCheck, Building2, Clock, Scan, Camera, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Reveal } from './Reveal';
import chantierImg from '../media/images_formules/IMG_3658.webp';
import inspectionImg from '../media/images_formules/IMG_4258.webp';
import droneImg from '../media/Photo_DJI/drone_mavic_4.webp';
import '../index.css';
import { Section } from '../types';

export const EagleProductionPage: React.FC = () => {
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
    name: 'Eagle Production',
    serviceType: 'Prestations drone & audiovisuel',
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
      "Eagle Production accompagne les professionnels à Angoulême avec des prestations drone orientées terrain: suivi de chantier BTP et inspection de bâtiments par drone. Livrables 4K et rapports illustrés, télépilote certifié.",
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Eagle Production',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Suivi de chantier BTP par drone', description: 'Suivi régulier, comparatifs, orthophotos et rapports PDF' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspection de bâtiments par drone', description: 'Toitures, façades, structures, vues 4K et rapport illustré' } },
      ],
    },
  };

  useEffect(() => {
    const title = 'Eagle Production - Suivi de chantier & Inspection par drone à Angoulême';
    const desc =
      "Eagle Production à Angoulême: suivi de chantier BTP et inspection de bâtiments par drone. Vues 4K, rapports PDF, sécurité renforcée, intervention en Charente et Nouvelle-Aquitaine.";
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
    setMeta('property', 'og:url', 'https://www.eagle-prod.com/eagle-production/');
    setMeta('property', 'og:image', 'https://www.eagle-prod.com/Photo_de_paul_bardin.webp');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'keywords', 'Eagle Production, drone Angoulême, suivi de chantier BTP drone, inspection bâtiment drone, Charente, Nouvelle-Aquitaine');

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.eagle-prod.com/eagle-production/');
  }, []);

  const services = [
    {
      title: 'Suivi de chantier BTP',
      subtitle: 'Photos 4K, comparatifs, orthophotos et rapports.',
      icon: MapPinned,
      badge: 'BTP',
      href: '/chantier',
      image: chantierImg,
      bullets: [
        'Visites ponctuelles ou récurrentes (hebdo / mensuel).',
        'Comparatifs avant/après et chronologie claire.',
        'Livrables prêts à partager (galerie + PDF).',
      ],
    },
    {
      title: 'Inspection de bâtiments par drone',
      subtitle: 'Toitures, façades, structures: lisible et sécurisé.',
      icon: Building2,
      badge: 'Technique',
      href: '/inspection',
      image: inspectionImg,
      bullets: [
        'Accès difficile sans nacelle ni échafaudage.',
        'Vues 4K, photos annotées et synthèse.',
        'Rapport illustré PDF exploitable rapidement.',
      ],
    },
  ] as const;

  const DroneGold3D: React.FC<{ src: string }> = ({ src }) => (
    <svg viewBox="0 0 1200 700" className="w-full h-full" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="goldGlowA" cx="35%" cy="40%" r="65%">
          <stop offset="0" stopColor="#d4af37" stopOpacity="0.55" />
          <stop offset="0.45" stopColor="#d4af37" stopOpacity="0.16" />
          <stop offset="1" stopColor="#d4af37" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="goldGlowB" cx="70%" cy="55%" r="60%">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="goldify" x="-20%" y="-20%" width="140%" height="140%">
          <feColorMatrix
            type="matrix"
            values="
              0.248 0.488 0.095 0 0
              0.205 0.403 0.078 0 0
              0.065 0.127 0.025 0 0
              0     0     0     1 0"
            result="tint"
          />
          <feComponentTransfer in="tint" result="contrast">
            <feFuncR type="gamma" amplitude="1.15" exponent="0.9" offset="0" />
            <feFuncG type="gamma" amplitude="1.15" exponent="0.9" offset="0" />
            <feFuncB type="gamma" amplitude="1.15" exponent="0.9" offset="0" />
          </feComponentTransfer>
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#000000" floodOpacity="0.55" />
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.45" />
        </filter>
        <filter id="softBloom" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feColorMatrix
            in="b"
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 0.35 0"
            result="ba"
          />
          <feMerge>
            <feMergeNode in="ba" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="0" y="0" width="1200" height="700" fill="url(#goldGlowA)" />
      <rect x="0" y="0" width="1200" height="700" fill="url(#goldGlowB)" />

      <g filter="url(#softBloom)">
        <image href={src} x="40" y="-10" width="1120" height="720" preserveAspectRatio="xMidYMid meet" filter="url(#goldify)" opacity="0.98" />
      </g>

      <path
        d="M160 610 C340 560, 520 540, 600 540 C690 540, 860 560, 1040 610"
        stroke="#d4af37"
        strokeOpacity="0.28"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <Navbar activeSection={null} scrollToSection={goToHomeSection} />

      <main>
        <section className="relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20 px-6">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[720px] h-[720px] rounded-full bg-accent/8 blur-[140px]" />
            <div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full bg-white/[0.06] blur-[140px]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
                backgroundSize: '56px 56px',
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
              <div>
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-[0.3em] uppercase">
                    <ShieldCheck size={14} />
                    Eagle Production
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                    Drone terrain, livrables propres
                    <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff2b5] via-[#d4af37] to-[#b68512]">
                        suivi de chantier et inspection technique
                      </span>
                  </h1>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mt-6 max-w-3xl text-lg text-textSecondary leading-relaxed">
                    Basés à <span className="text-white">Angoulême</span>, on intervient en <span className="text-white">Charente</span> et en <span className="text-white">Nouvelle-Aquitaine</span>
                    pour vous apporter de la preuve visuelle, de la sécurité et une lecture claire de vos chantiers et bâtiments.
                  </p>
                </Reveal>

                <Reveal delay={260}>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-all duration-200 text-sm shadow-lg shadow-accent/20"
                    >
                      Devis gratuit <ArrowRight size={15} />
                    </a>
                    <a
                      href="/zone"
                      className="inline-flex items-center gap-2 text-white/60 font-medium px-6 py-3 rounded-full border border-white/[0.08] hover:border-accent/30 hover:text-white transition-all duration-200 text-sm"
                    >
                      Zone d&apos;intervention <ArrowRight size={15} />
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={320}>
                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { icon: <ShieldCheck size={16} className="text-accent" />, title: 'Cadre pro', desc: 'Télépilote certifié, sécurité et conformité.' },
                      { icon: <Clock size={16} className="text-accent" />, title: 'Délais clairs', desc: 'Livrables organisés, exploitables rapidement.' },
                      { icon: <Sparkles size={16} className="text-accent" />, title: 'Lisibilité', desc: 'Vues utiles, pas juste de belles images.' },
                    ].map((b) => (
                      <div key={b.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <div className="flex items-center gap-2 text-white font-bold">
                          <span className="w-8 h-8 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                            {b.icon}
                          </span>
                          {b.title}
                        </div>
                        <div className="mt-2 text-sm text-white/65 leading-relaxed">{b.desc}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal delay={200} className="h-full">
                <div className="relative rounded-[2rem] border border-white/[0.10] bg-surfaceHighlight/20 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-black" />
                    <div className="absolute -top-28 -left-28 w-[520px] h-[520px] rounded-full bg-accent/25 blur-[120px]" />
                    <div className="absolute -bottom-36 -right-36 w-[520px] h-[520px] rounded-full bg-white/[0.06] blur-[140px]" />
                    <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.65), transparent 55%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.16), transparent 55%)' }} />
                  </div>

                  <div className="relative p-7 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/[0.10] text-white/80 text-[11px] font-semibold tracking-[0.25em] uppercase">
                        <Scan size={14} className="text-accent" />
                        Terrain
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/[0.10] text-white/80 text-[11px] font-semibold tracking-[0.25em] uppercase">
                        <Camera size={14} className="text-accent" />
                        4K
                      </div>
                    </div>

                    <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-white leading-tight">
                      La bonne vue, au bon endroit, au bon moment.
                    </h2>
                    <p className="mt-3 text-white/75 leading-relaxed">
                      Suivi, inspection, preuve visuelle: on structure vos livrables pour qu&apos;ils servent à la décision, au reporting et à la communication.
                    </p>

                    <div className="mt-7 rounded-3xl border border-white/[0.10] bg-black/25 overflow-hidden">
                      <div className="h-[210px] sm:h-[240px] md:h-[250px] w-full">
                        <DroneGold3D src={droneImg} />
                      </div>
                    </div>

                    <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { icon: <Layers size={16} className="text-accent" />, label: 'Comparatifs & chronologie' },
                        { icon: <FileDown size={16} className="text-accent" />, label: 'Rapport PDF illustré' },
                        { icon: <Camera size={16} className="text-accent" />, label: 'Photos haute résolution' },
                        { icon: <Scan size={16} className="text-accent" />, label: 'Orthophoto selon besoin' },
                      ].map((i) => (
                        <div key={i.label} className="rounded-2xl border border-white/[0.10] bg-black/35 p-4">
                          <div className="flex items-center gap-2 text-white/90 font-semibold text-sm">
                            <span className="w-8 h-8 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                              {i.icon}
                            </span>
                            {i.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Services</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">Deux pages dédiées, bien structurées.</h2>
              <p className="text-center text-textSecondary max-w-3xl mx-auto">
                Chaque service a sa page propre (détails, livrables, process). Et la structure est prête pour ajouter d&apos;autres services plus tard.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {services.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.href} delay={100 + idx * 140} className="h-full">
                    <div className="group h-full rounded-[2rem] border border-white/[0.10] bg-surfaceHighlight/20 backdrop-blur-xl overflow-hidden lg:hover:border-accent/35 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                      <div className="relative h-52">
                        <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-75 lg:group-hover:opacity-85 transition-opacity" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

                        <div className="relative p-7 flex items-end justify-between h-full">
                          <div>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.25em] uppercase bg-black/40 text-white/80 border border-white/[0.10]">
                              {s.badge}
                            </div>
                            <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-white leading-tight">
                              {s.title}
                            </h3>
                            <p className="mt-2 text-white/70">{s.subtitle}</p>
                          </div>
                          <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                            <Icon size={22} />
                          </div>
                        </div>
                      </div>

                      <div className="p-7">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {s.bullets.map((b) => (
                            <div key={b} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                              <div className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                                <span className="text-sm text-white/80 leading-relaxed">{b}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                          <a
                            href={s.href}
                            className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-colors text-sm border border-accent/40"
                          >
                            Voir la page dédiée <ArrowRight size={16} />
                          </a>
                          <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white/[0.06] text-white px-6 py-3 rounded-full font-semibold hover:bg-white/[0.1] transition-colors text-sm border border-white/[0.08]"
                          >
                            Demander un devis <ArrowRight size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <Reveal>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
                  <div className="flex items-center gap-3 text-accent mb-4">
                    <Sparkles size={18} />
                    <span className="tracking-[0.25em] text-xs font-bold uppercase">Comment ça se passe</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Un process simple, pensé pour le terrain.
                  </h2>
                  <p className="mt-4 text-textSecondary leading-relaxed">
                    Objectif: intervention carrée, aucune friction, et des livrables immédiatement utilisables (reporting, preuve, communication).
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      { n: '01', title: 'Brief', desc: 'Lieu, contraintes, objectif, livrables attendus.' },
                      { n: '02', title: 'Plan de vol', desc: 'Sécurité, météo, réglementation, créneaux.' },
                      { n: '03', title: 'Capture', desc: 'Prises de vues utiles: angles, détails, cohérence.' },
                      { n: '04', title: 'Livraison', desc: 'Fichiers structurés + rapport selon la mission.' },
                    ].map((s) => (
                      <div key={s.n} className="rounded-2xl border border-white/[0.08] bg-black/20 p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-extrabold">
                            {s.n}
                          </div>
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
                    <FileText size={18} />
                    <span className="tracking-[0.25em] text-xs font-bold uppercase">Livrables</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Ce que vous récupérez, à la fin.
                  </h2>
                  <p className="mt-4 text-textSecondary leading-relaxed">
                    Le rendu dépend de la mission, mais l&apos;idée est toujours la même: un pack clair, trié, et exploitable sans effort.
                  </p>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: <Camera size={18} className="text-accent" />, title: 'Photos HD', desc: 'Séries cohérentes, détails et vues d’ensemble.' },
                      { icon: <Scan size={18} className="text-accent" />, title: 'Orthophoto', desc: 'Selon besoin: lecture “plan” et suivi précis.' },
                      { icon: <FileDown size={18} className="text-accent" />, title: 'Rapport PDF', desc: 'Illustré, annoté, prêt à partager.' },
                      { icon: <Layers size={18} className="text-accent" />, title: 'Comparatifs', desc: 'Avant / après, chronologie, points fixes.' },
                    ].map((c) => (
                      <div key={c.title} className="rounded-2xl border border-white/[0.08] bg-black/20 p-5">
                        <div className="flex items-center gap-3 text-white font-bold">
                          <span className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                            {c.icon}
                          </span>
                          {c.title}
                        </div>
                        <div className="mt-2 text-sm text-white/65 leading-relaxed">{c.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-colors border border-accent/40"
                    >
                      Devis gratuit <ArrowRight size={16} />
                    </a>
                    <a
                      href="/faq"
                      className="inline-flex items-center gap-2 bg-white/[0.06] text-white px-6 py-3 rounded-full font-semibold hover:bg-white/[0.1] transition-colors border border-white/[0.08]"
                    >
                      Voir la FAQ <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Questions</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">FAQ rapide.</h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: 'Intervenez-vous hors Charente ?', a: 'Oui, selon la mission. La Charente (16) est le cœur d’intervention, et la Nouvelle-Aquitaine est possible selon planning et contraintes.' },
                { q: 'Prenez-vous en charge les contraintes et autorisations ?', a: 'Oui, on vérifie les zones, contraintes et règles applicables. Vous avez un cadre clair et un planning simple.' },
                { q: 'Quels délais de livraison ?', a: 'En général, les fichiers sont livrés rapidement après l’intervention, selon la complexité et le format demandé (photos, rapport, comparatifs).' },
                { q: 'À qui s’adresse le suivi de chantier ?', a: 'Entreprises BTP, MOE/MOA, promoteurs, collectivités: dès que vous avez besoin de preuve visuelle, reporting et historique propre.' },
              ].map((f) => (
                <div key={f.q} className="rounded-3xl border border-white/[0.10] bg-white/5 p-6">
                  <div className="text-white font-extrabold">{f.q}</div>
                  <div className="mt-2 text-sm text-white/65 leading-relaxed">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="rounded-[2rem] border border-accent/25 bg-gradient-to-br from-accent/12 via-accent/5 to-transparent p-8 md:p-10 shadow-[0_0_40px_rgba(212,175,55,0.12)]">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Besoin d&apos;une prestation sur-mesure ?
                </h2>
                <p className="mt-3 text-white/80 max-w-2xl leading-relaxed">
                  Un brief clair, une proposition rapide, et une exécution propre sur le terrain. Dites-nous votre objectif (sécurité, suivi, preuve visuelle, communication) et on vous oriente vers la meilleure formule.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-colors border border-accent/40"
                  >
                    Devis gratuit <ArrowRight size={16} />
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 text-white/60 font-medium px-6 py-3 rounded-full border border-white/[0.08] hover:border-accent/30 hover:text-white transition-all duration-200 text-sm"
                  >
                    Retour à l&apos;accueil <ArrowRight size={16} />
                  </a>
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
