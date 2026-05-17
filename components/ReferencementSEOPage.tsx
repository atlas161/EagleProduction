import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Reveal } from './Reveal';
import { Section } from '../types';
import {
  ArrowRight, Search, CheckCircle2, ShieldCheck, ArrowLeft,
  MapPin, Mail, Target, TrendingUp
} from 'lucide-react';
import '../index.css';

// Composant pour choisir le forfait de campagnes e-mailing
const EmailCampaignsCalculator: React.FC = () => {
  const plans = [
    { campaigns: 1, price: 100, popular: false },
    { campaigns: 2, price: 180, popular: true },
    { campaigns: 4, price: 320, popular: false },
  ];

  return (
    <div className="mt-10 bg-gradient-to-br from-teal-950/50 to-background border border-teal-500/20 rounded-3xl p-8 md:p-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-white font-bold text-xl mb-2">Campagnes E-mailing Mensuelles</h3>
        <p className="text-white/40 text-sm">
          Conception, design, envoi et suivi de vos campagnes. Infrastructure Infomaniak incluse.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {plans.map((plan, i) => (
          <a
            key={i}
            href="/contact"
            className={`rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
              plan.popular
                ? 'bg-teal-900/30 border-teal-500/40 shadow-lg shadow-teal-900/10 hover:border-teal-400/60'
                : 'bg-white/[0.03] border-teal-500/10 hover:border-teal-400/30 hover:bg-teal-950/20'
            }`}
          >
            {plan.popular && (
              <span className="inline-block text-[10px] uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded-full font-bold mb-3">
                Populaire
              </span>
            )}
            <div className="text-white/40 text-sm mb-1">{plan.campaigns} campagne{plan.campaigns > 1 ? 's' : ''} / mois</div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className={`text-4xl font-extrabold ${plan.popular ? 'text-teal-300' : 'text-white'}`}>{plan.price}</span>
              <span className={`font-bold text-xl ${plan.popular ? 'text-teal-300' : 'text-white'}`}>€</span>
            </div>
            <div className="text-white/30 text-xs">/ mois</div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-6">
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-background font-bold px-8 py-3 rounded-full transition-all duration-200 text-sm"
        >
          Demander un devis <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

export const ReferencementSEOPage: React.FC = () => {
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

  useEffect(() => {
    const title = 'SEO Local Angoulême - Référencement Google & Visibilité | Eagle Digital';
    const desc = 'Eagle Digital améliore votre référencement Google à Angoulême : audit SEO, fiche Google Business Profile, e-mailing professionnel et campagnes mensuelles. Apparaissez en 1ère position sur les recherches locales. Devis gratuit sous 24h.';
    document.title = title;
    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute('content', value);
    };
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', 'https://www.eagle-prod.com/eagle-digital/referencement-seo');
    setMeta('name', 'keywords', 'SEO Angoulême, référencement local Charente, Google Business Profile, audit SEO, e-mailing pro, Eagle Digital, visibilité locale');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://www.eagle-prod.com/eagle-digital/referencement-seo');
  }, []);

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <Navbar activeSection={null} scrollToSection={goToHomeSection} />
      <main>

        {/* ── HERO ── */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 pt-28 pb-16">
          <Reveal>
            <a href="/eagle-digital" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-medium mb-8 transition-colors">
              <ArrowLeft size={14} /> Retour à Eagle Digital
            </a>
          </Reveal>
          <Reveal delay={60}>
            <p className="text-teal-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Eagle Digital - SEO & Visibilité locale à Angoulême</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
              Référencement SEO à Angoulême<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-accent">
                soyez trouvé en premier sur Google.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base text-white/50 leading-relaxed max-w-2xl mb-8">
              Eagle Digital améliore votre positionnement sur Google grâce à un audit SEO technique, une fiche Google Business Profile optimisée et des campagnes e-mailing mensuelles. Résultat : votre entreprise apparaît quand vos clients tapent votre activité + « Angoulême » ou « Charente ».
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-all duration-200 text-sm shadow-lg shadow-accent/20">
                Audit gratuit <ArrowRight size={15} />
              </a>
              <a href="/eagle-digital" className="inline-flex items-center gap-2 text-white/50 font-medium px-5 py-3 rounded-full border border-white/[0.08] hover:border-teal-400/40 hover:text-white transition-all duration-200 text-sm">
                Voir tous les services
              </a>
            </div>
          </Reveal>
        </section>

        {/* ── PRESTATIONS ── */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-center text-teal-400 text-xs font-semibold tracking-[0.3em] uppercase mb-5">Nos prestations</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">Nos prestations SEO & e-mailing.</h2>
              <p className="text-center text-white/35 text-base mb-14 max-w-xl mx-auto">
                Chaque prestation est disponible seule ou incluse dans un contrat de maintenance mensuel.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: <Search size={22} className="text-teal-400" />,
                  iconBg: 'bg-teal-500/10 border-teal-500/20',
                  title: 'Audit SEO & plan d\'action',
                  price: '250€',
                  badge: '',
                  desc: 'Analyse complète de votre site : technique, contenu, mots-clés, concurrents. On vous livre un plan d\'action clair et priorisé.',
                  items: ['Analyse technique complète', 'Recherche de mots-clés locaux', 'Analyse des concurrents', 'Rapport + plan d\'action détaillé', 'Appel de restitution inclus'],
                },
                {
                  icon: <MapPin size={22} className="text-teal-400" />,
                  iconBg: 'bg-teal-500/10 border-teal-500/20',
                  title: 'Fiche Google Business',
                  price: '150€',
                  badge: 'Indispensable',
                  desc: 'Votre fiche Google optimisée pour apparaître dans les résultats locaux et sur Google Maps quand quelqu\'un cherche votre activité près de chez vous.',
                  items: ['Création ou reprise de la fiche', 'Optimisation SEO local', 'Photos, horaires, services', 'Catégories & attributs optimisés', 'Conseils avis clients'],
                },
                {
                  icon: <Mail size={22} className="text-teal-400" />,
                  iconBg: 'bg-teal-500/10 border-teal-500/20',
                  title: 'Setup E-mailing Pro',
                  price: '400€',
                  badge: '',
                  desc: 'Configuration complète de votre solution e-mailing : 2 adresses pro, stockage illimité, cloud 50Go, année 1 incluse.',
                  items: ['2 e-mails pro + 1 an offert', 'Config domaine personnalisé', 'Import et segmentation contacts', 'Templates e-mail sur-mesure', 'Formation utilisation incluse'],
                },
              ].map((p, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div
                    className={`rounded-3xl p-7 flex flex-col gap-5 h-full border transition-all duration-300 cursor-pointer ${
                      p.badge
                        ? 'bg-teal-900/20 border-teal-500/40 shadow-lg shadow-teal-900/10 hover:border-teal-400/60'
                        : 'bg-surfaceHighlight/15 border-teal-500/15 hover:border-teal-400/30'
                    }`}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-white font-bold text-lg">{p.title}</div>
                        {p.badge && <span className="text-[10px] uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded-full font-bold">{p.badge}</span>}
                      </div>
                      <div className={`text-3xl font-extrabold mt-1 ${p.badge ? 'text-teal-300' : 'text-white'}`}>{p.price}</div>
                      <p className="text-white/35 text-xs mt-2 leading-relaxed">{p.desc}</p>
                    </div>
                    <ul className="space-y-2.5 flex-1">
                      {p.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-white/60">
                          <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${p.badge ? 'text-teal-400' : 'text-accent'}`} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={`inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-full px-5 py-2.5 transition-all duration-200 ${
                        p.badge
                          ? 'bg-teal-500/25 border border-teal-500/40 text-teal-300 hover:bg-teal-500/35'
                          : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-teal-400/30 hover:text-white'
                      }`}
                    >
                      Demander un devis <ArrowRight size={13} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* ── CAMPAGNES E-MAILING INTERACTIF ── */}
            <Reveal delay={210}>
              <EmailCampaignsCalculator />
            </Reveal>
          </div>
        </section>

        {/* ── POURQUOI LE SEO LOCAL ── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Pourquoi c'est essentiel</p>
              <h2 className="text-center text-4xl font-bold text-white mb-14">Pourquoi le SEO local à Angoulême est indispensable.</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <Target size={20} className="text-teal-400" />, title: '76% des recherches locales', desc: 'aboutissent à une visite en boutique dans les 24h. Être visible en ligne = plus de clients physiques.' },
                { icon: <TrendingUp size={20} className="text-teal-400" />, title: 'Résultats durables', desc: 'Contrairement à la pub payante, le SEO continue de travailler pour vous 24h/24 sans coût supplémentaire.' },
                { icon: <ShieldCheck size={20} className="text-teal-400" />, title: 'Crédibilité renforcée', desc: 'Une fiche Google optimisée avec des avis positifs inspire confiance et convertit mieux qu\'un simple site web.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="bg-surfaceHighlight/15 border border-teal-500/10 rounded-2xl p-6 hover:border-teal-400/25 transition-all h-full">
                    <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 w-fit mb-4">{item.icon}</div>
                    <div className="text-white font-bold text-sm mb-2">{item.title}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="rounded-[2rem] border border-teal-500/25 bg-gradient-to-br from-teal-950/45 via-teal-950/15 to-transparent p-7 md:p-10 shadow-[0_0_50px_rgba(20,184,166,0.12)] relative overflow-hidden">
                <div className="pointer-events-none absolute -top-28 -right-28 w-[360px] h-[360px] rounded-full bg-teal-500/10 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-accent/5 blur-[120px]" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 text-teal-300 mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center shrink-0">
                        <ShieldCheck size={18} className="text-teal-300" />
                      </div>
                      <div className="tracking-[0.25em] text-[11px] font-bold uppercase">Recommandation</div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                      Contrat de maintenance : le minimum recommandé pour rester serein.
                    </h2>
                    <p className="text-white/70 mt-3 leading-relaxed max-w-2xl">
                      Le référencement n’est pas un “one shot”. Même après une optimisation, il faut garder le site propre, rapide, sécurisé et mettre à jour certains éléments. Le plus petit forfait suffit souvent pour démarrer.
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { t: 'Mises à jour', d: 'Sécurité, compatibilité, stabilité.' },
                        { t: 'Optimisations légères', d: 'Ajustements pages, titres, contenus.' },
                        { t: 'Surveillance', d: 'Erreurs, disponibilité, perf.' },
                        { t: 'Support', d: 'Petites demandes, corrections rapides.' },
                      ].map((x) => (
                        <div key={x.t} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                          <div className="text-white font-bold text-sm">{x.t}</div>
                          <div className="text-white/60 text-xs mt-1">{x.d}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                      <div className="text-white font-extrabold text-lg">Conseil</div>
                      <div className="text-white/60 text-sm mt-2 leading-relaxed">
                        Prenez le plus petit forfait de maintenance, puis on augmente seulement si vous avez plus de besoins.
                      </div>
                      <div className="mt-5 flex flex-col gap-3">
                        <a
                          href="/eagle-digital/maintenance"
                          className="inline-flex items-center justify-center gap-2 bg-teal-500/25 border border-teal-500/40 text-teal-200 font-bold px-5 py-3 rounded-full hover:bg-teal-500/35 transition-all duration-200 text-sm"
                        >
                          Voir la maintenance <ArrowRight size={14} />
                        </a>
                        <a
                          href="/contact"
                          className="inline-flex items-center justify-center gap-2 bg-accent text-background font-bold px-5 py-3 rounded-full hover:bg-white transition-all duration-200 text-sm border border-accent/40"
                        >
                          Demander un devis <ArrowRight size={14} />
                        </a>
                      </div>
                      <div className="mt-4 text-[11px] text-white/45 leading-relaxed">
                        Objectif: garder la dynamique, éviter les régressions, et rester stable sur Google.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 text-center">
          <Reveal>
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6">Passez à l'action</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Audit SEO gratuit à Angoulême<br />on analyse, vous progressez.
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">On fait le point sur votre visibilité Google actuelle. Gratuit, sans engagement, réponse sous 24h.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-10 py-4 rounded-full hover:bg-white transition-all duration-200 text-base shadow-xl shadow-accent/20">
                Demander l'audit gratuit <ArrowRight size={16} />
              </a>
              <a href="/eagle-digital" className="inline-flex items-center gap-2 text-white/50 font-medium px-6 py-4 rounded-full border border-white/[0.08] hover:border-accent/30 hover:text-white transition-all duration-200 text-base">
                Voir tous les services Eagle Digital
              </a>
            </div>
          </Reveal>
        </section>

      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
