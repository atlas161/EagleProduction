import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Coverage } from './Coverage';
import '../index.css';
import { Section } from '../types';
import { Reveal } from './Reveal';
import { Breadcrumbs } from './Breadcrumbs';
import { ArrowRight, BadgeCheck, Building2, Clock, MapPin, Navigation, ShieldCheck, Target } from 'lucide-react';

export const ZonePage: React.FC = () => {
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

  useEffect(() => {
    const title = 'Zone d’intervention drone à Angoulême (16) | Eagle Production Charente';
    const desc =
      "Zone d’intervention drone à Angoulême et en Charente (16). Télépilote certifié DGAC pour photo/vidéo 4K, inspection et suivi de chantier. Déplacements en Nouvelle-Aquitaine selon mission.";
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
    setMeta('property', 'og:url', 'https://www.eagle-prod.com/zone');
    setMeta('property', 'og:image', 'https://www.eagle-prod.com/Photo_de_paul_bardin.webp');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', desc);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.eagle-prod.com/zone');
  }, []);

  const departments = [
    {
      code: '16',
      name: 'Charente',
      focus: 'Base à Angoulême, déplacements inclus dans le 16',
      cities: ['Angoulême', 'Cognac', 'Jarnac', 'Soyaux', 'La Couronne', 'Ruffec', 'Confolens', 'Barbezieux'],
    },
    {
      code: '17',
      name: 'Charente-Maritime',
      focus: 'Côte, évènementiel, immobilier, suivi de travaux',
      cities: ['La Rochelle', 'Rochefort', 'Saintes', 'Royan', 'Saint-Jean-d’Angély'],
    },
    {
      code: '33',
      name: 'Gironde',
      focus: 'Captation corporate et immobilier autour de Bordeaux',
      cities: ['Bordeaux', 'Libourne', 'Arcachon', 'Langon'],
    },
    {
      code: '24',
      name: 'Dordogne',
      focus: 'Inspection, patrimoine et mise en valeur de sites',
      cities: ['Périgueux', 'Bergerac', 'Sarlat-la-Canéda'],
    },
    {
      code: '79',
      name: 'Deux-Sèvres',
      focus: 'Projets BTP et missions régulières',
      cities: ['Niort', 'Parthenay', 'Bressuire'],
    },
    {
      code: '86',
      name: 'Vienne',
      focus: 'Chantiers, collectivités et entreprises',
      cities: ['Poitiers', 'Châtellerault'],
    },
    {
      code: '87',
      name: 'Haute-Vienne',
      focus: 'Missions sur demande selon météo et contraintes aériennes',
      cities: ['Limoges', 'Saint-Junien'],
    },
  ] as const;

  const localFaq = [
    {
      q: 'Intervenez-vous dans ma ville en Charente (16) ou en Nouvelle-Aquitaine ?',
      a: "Oui. Basés à Angoulême, nous couvrons toute la Charente et nous nous déplaçons en Nouvelle-Aquitaine selon le besoin. Dites-nous votre ville, le type de mission et la date souhaitée.",
    },
    {
      q: 'Les démarches DGAC et autorisations sont-elles prises en charge ?',
      a: "Oui. Selon la zone (urbaine, sensible, proximité d’aérodrome), nous vérifions les contraintes et réalisons les déclarations nécessaires. Vous avez un planning simple, avec un cadre clair.",
    },
    {
      q: 'Quels types de missions drone réalisez-vous localement ?',
      a: 'Photo et vidéo aérienne 4K, inspection de toiture et façade, suivi de chantier, valorisation immobilière, communication d’entreprise et évènementiel. Les livrables sont adaptés à votre usage.',
    },
    {
      q: 'Quels sont vos délais de livraison ?',
      a: 'En général, les fichiers sont livrés sous 48h après intervention, selon la complexité et les validations. Pour une vidéo montée, les délais dépendent du format et du niveau de post-production.',
    },
  ] as const;

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Eagle Production',
    url: 'https://www.eagle-prod.com/zone',
    image: 'https://www.eagle-prod.com/Photo_de_paul_bardin.webp',
    areaServed: departments.map((d) => ({
      '@type': 'AdministrativeArea',
      name: `${d.name} (${d.code})`,
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Angoulême',
      addressRegion: 'Nouvelle-Aquitaine',
      addressCountry: 'FR',
    },
    serviceType: [
      'Photographie aérienne drone',
      'Vidéo drone 4K',
      'Inspection par drone',
      'Suivi de chantier par drone',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: localFaq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <Navbar activeSection={null} scrollToSection={goToHomeSection} />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 w-[680px] h-[680px] rounded-full bg-accent/5 blur-[120px]" />
            <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-white/5 blur-[120px]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 pt-10 pb-10 relative z-10">
            <Breadcrumbs items={[{ label: "Zone d'intervention" }]} className="mb-6" />
            <Reveal>
              <div className="flex items-center gap-3 text-accent mb-4">
                <Navigation size={18} />
                <span className="tracking-[0.25em] text-xs font-bold uppercase">Zone d’intervention</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                Drone à Angoulême (16)
                <br />
                <span className="text-accent">Charente et Nouvelle-Aquitaine</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-4xl text-lg text-textSecondary leading-relaxed">
                Basés à <span className="text-white">Angoulême</span>, nous réalisons des prestations drone en <span className="text-white">Charente (16)</span> et
                nous nous déplaçons en <span className="text-white">Nouvelle-Aquitaine</span> pour la photo, la vidéo 4K, l’inspection et le suivi de chantier.
                Objectif: une intervention simple, un cadre clair et des livrables exploitables.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Target size={16} className="text-accent" />, title: 'Périmètre clair', desc: 'Ville, adresse ou zone, besoin et livrables.' },
                { icon: <ShieldCheck size={16} className="text-accent" />, title: 'Cadre pro', desc: 'Télépilote certifié DGAC, sécurité et conformité.' },
                { icon: <Clock size={16} className="text-accent" />, title: 'Délais maîtrisés', desc: 'Livraison rapide, fichiers organisés et exploitables.' },
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
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="flex items-center gap-3 text-accent mb-3">
                <MapPin size={18} />
                <span className="tracking-[0.2em] text-[11px] font-bold uppercase">Départements couverts</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Zone d’intervention drone en Nouvelle-Aquitaine</h2>
              <p className="text-textSecondary leading-relaxed mt-3">
                Notre base est à <span className="text-white">Angoulême</span>. Le cœur d’intervention est la <span className="text-white">Charente (16)</span>, puis
                nous nous déplaçons sur les départements voisins selon les besoins. Le but est simple: livrer des images et des rapports utilisables, avec une organisation sans friction.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {departments.map((d) => (
                  <div key={d.code} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-white font-extrabold text-lg">
                        {d.name} <span className="text-white/40">({d.code})</span>
                      </div>
                      <span className={`text-[11px] px-2.5 py-1 rounded-full border ${d.code === '16' ? 'bg-accent/10 text-accent border-accent/25' : 'bg-white/5 text-white/70 border-white/10'}`}>
                        {d.code === '16' ? 'Prioritaire' : 'Selon mission'}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-white/65">{d.focus}</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {d.cities.map((c) => (
                        <span key={c} className="text-[11px] text-white/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="flex items-center gap-3 text-accent mb-3">
                <Building2 size={18} />
                <span className="tracking-[0.2em] text-[11px] font-bold uppercase">Missions locales</span>
              </div>
              <h3 className="text-xl font-extrabold text-white">Missions fréquentes autour d’Angoulême</h3>
              <p className="text-sm text-white/65 leading-relaxed mt-2">
                Photo et vidéo drone en Charente, inspection technique et suivi de chantier. On intervient en priorité dans le 16, puis sur la Nouvelle-Aquitaine selon le projet.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {[
                  'Suivi de chantier: comparatifs et rapports PDF',
                  'Inspection toiture/façade: sécurité, lisibilité, photos annotées',
                  'Vidéo drone: mise en valeur immobilière et corporate',
                  'Photos aériennes: angles, hauteur, lumière, rendu premium',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <BadgeCheck size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <a href="/chantier" className="rounded-2xl border border-white/12 bg-white/5 hover:bg-white/8 transition-colors p-4">
                  <div className="text-white font-bold">Suivi de chantier</div>
                  <div className="text-xs text-white/60 mt-1">Orthophotos, comparatifs, rapport illustré.</div>
                </a>
                <a href="/inspection" className="rounded-2xl border border-white/12 bg-white/5 hover:bg-white/8 transition-colors p-4">
                  <div className="text-white font-bold">Inspection par drone</div>
                  <div className="text-xs text-white/60 mt-1">Toitures, façades, structures, sans échafaudage.</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-6">
          <div className="rounded-[2rem] border border-accent/30 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent p-8 md:p-10 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">Vous voulez savoir si on intervient chez vous ?</h2>
                <p className="text-white/80 mt-1">
                  Envoyez la ville, le type de mission et le rendu attendu. Réponse rapide, avec une proposition claire.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-colors border border-accent/40"
              >
                Demander un devis
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        <section className="pt-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
              <div>
                <div className="text-[11px] uppercase tracking-widest text-accent mb-2">Carte</div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">Visualiser la zone d’intervention</h2>
                <p className="text-textSecondary mt-3 max-w-3xl leading-relaxed">
                  La carte met en évidence le cœur d’intervention et les départements desservis. Pour chaque mission, on ajuste en fonction de la météo, des contraintes aériennes et du planning.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Angoulême', 'Charente (16)', 'Nouvelle-Aquitaine', 'Drone 4K', 'Inspection', 'Suivi de chantier'].map((k) => (
                  <span key={k} className="text-[11px] text-white/55 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full">
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <Coverage />
        </section>

        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="text-[11px] uppercase tracking-widest text-accent mb-2">FAQ locale</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Zone d’intervention: questions fréquentes</h2>
              <div className="mt-6 space-y-3">
                {localFaq.map((f) => (
                  <div key={f.q} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="text-white font-bold">{f.q}</div>
                    <div className="text-sm text-white/65 leading-relaxed mt-2">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="text-[11px] uppercase tracking-widest text-accent mb-2">Déroulé</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Comment se passe une intervention drone</h2>
              <p className="text-textSecondary leading-relaxed mt-3">
                On valide la ville et le lieu, le type de mission, puis on planifie selon la météo et les contraintes aériennes. Sur place, on sécurise la zone, on réalise la captation et on vous livre des fichiers propres.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: 'Avant la mission', d: 'Brief + repérage, estimation des délais, validation du lieu.' },
                  { t: 'Cadre DGAC', d: 'Vérification des zones, démarches si nécessaire, sécurité.' },
                  { t: 'Sur place', d: 'Captation drone + prises de vues utiles, angles variés.' },
                  { t: 'Livraison', d: 'Photos/vidéos triées, partage simple, formats adaptés.' },
                ].map((c) => (
                  <div key={c.t} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="text-white font-bold">{c.t}</div>
                    <div className="text-sm text-white/65 mt-2">{c.d}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-colors border border-accent/40 w-full sm:w-auto"
                >
                  Discuter de votre projet
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
