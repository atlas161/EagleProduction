import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Reveal } from './Reveal';
import { Section } from '../types';
import {
  ArrowRight, Monitor, CheckCircle2, ShieldCheck, ArrowLeft,
  Globe, Mail, Lock, Smartphone, BarChart2, Code2
} from 'lucide-react';
import '../index.css';

export const CreationSiteWebPage: React.FC = () => {
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

  useEffect(() => {
    const title = 'Création Site Web Angoulême - Vitrine & E-commerce | Eagle Digital';
    const desc = 'Eagle Digital conçoit votre site web professionnel à Angoulême : site vitrine, multi-pages ou e-commerce. Rapide, optimisé SEO, RGPD conforme. Domaine, hébergement et e-mails pro inclus la 1ère année. Devis gratuit sous 24h.';
    document.title = title;
    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute('content', value);
    };
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', 'https://www.eagle-prod.com/eagle-digital/creation-site-web/');
    setMeta('name', 'keywords', 'création site web Angoulême, site vitrine Charente, site e-commerce Angoulême, agence web Charente, site professionnel pas cher, Eagle Digital');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://www.eagle-prod.com/eagle-digital/creation-site-web/');
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
            <p className="text-indigo-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Eagle Digital - Création de site web à Angoulême</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
              Votre site web professionnel<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-accent">
                à Angoulême, dès 1 200€.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base text-white/50 leading-relaxed max-w-2xl mb-8">
              Agence web basée à Angoulême, Eagle Digital conçoit des sites vitrine, multi-pages et e-commerce rapides, modernes et optimisés SEO dès la mise en ligne. Nom de domaine, hébergement sécurisé, e-mails professionnels et conformité RGPD inclus la 1ère année. Vous n'avez rien à configurer.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-all duration-200 text-sm shadow-lg shadow-accent/20">
                Devis gratuit <ArrowRight size={15} />
              </a>
              <a href="/eagle-digital" className="inline-flex items-center gap-2 text-white/50 font-medium px-5 py-3 rounded-full border border-white/[0.08] hover:border-indigo-400/40 hover:text-white transition-all duration-200 text-sm">
                Voir tous les services
              </a>
            </div>
          </Reveal>
        </section>

        {/* ── FORMULES ── */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-center text-indigo-400 text-xs font-semibold tracking-[0.3em] uppercase mb-5">Nos formules</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">Nos formules de création de site web.</h2>
              <p className="text-center text-white/35 text-base mb-14 max-w-xl mx-auto">
                Nom de domaine, hébergement et e-mails professionnels inclus la 1ère année sur toutes les formules. Sans frais cachés.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: 'Vitrine Express',
                  price: '1 200€',
                  badge: '',
                  accent: false,
                  color: 'indigo',
                  desc: 'Idéal pour se lancer rapidement avec un site one-page percutant.',
                  items: [
                    'Site one-page fluide & moderne',
                    '1 an de domaine offert (.com ou .fr)',
                    '1 e-mail pro inclus',
                    'Bandeau cookies & RGPD',
                    'Formulaire de contact',
                    'Optimisé mobile & SEO de base',
                    '1 mois hébergement offert',
                  ],
                },
                {
                  name: 'Vitrine Standard',
                  price: 'Dès 1 900€',
                  badge: 'Populaire',
                  accent: true,
                  color: 'indigo',
                  desc: 'Le choix idéal pour présenter votre activité avec plusieurs pages.',
                  items: [
                    "Jusqu'à 5 pages personnalisées",
                    '1 an de domaine offert (.com ou .fr)',
                    '2 e-mails pro inclus',
                    'Formulaires & intégrations',
                    'RGPD, mentions légales',
                    'SEO on-page optimisé',
                    'Statistiques de visites',
                    '1 mois hébergement offert',
                  ],
                },
                {
                  name: 'E-commerce / Sur-mesure',
                  price: 'Dès 3 500€',
                  badge: '',
                  accent: false,
                  color: 'indigo',
                  desc: 'Boutique en ligne complète ou projet web sur-mesure.',
                  items: [
                    'Boutique avec paiement en ligne',
                    '1 an de domaine offert (.com ou .fr)',
                    '30 e-mails pro inclus',
                    'CGV, mentions, politique cookies',
                    'Gestion produits / catalogue',
                    'Tableau de bord admin',
                    'SEO e-commerce avancé',
                    '1 mois hébergement offert',
                  ],
                },
              ].map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div
                    className={`rounded-3xl p-7 flex flex-col gap-5 h-full border transition-all duration-300 cursor-pointer ${
                      p.accent
                        ? 'bg-indigo-900/20 border-indigo-500/40 shadow-lg shadow-indigo-900/10 hover:border-indigo-400/60'
                        : 'bg-surfaceHighlight/15 border-indigo-500/15 hover:border-indigo-400/30'
                    }`}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-white font-bold text-lg">{p.name}</div>
                        {p.badge && <span className="text-[10px] uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full font-bold">{p.badge}</span>}
                      </div>
                      <div className={`text-3xl font-extrabold mt-1 ${p.accent ? 'text-indigo-300' : 'text-white'}`}>{p.price}</div>
                      <p className="text-white/35 text-xs mt-2 leading-relaxed">{p.desc}</p>
                    </div>
                    <ul className="space-y-2.5 flex-1">
                      {p.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-white/60">
                          <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${p.accent ? 'text-indigo-400' : 'text-accent'}`} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={`inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-full px-5 py-2.5 transition-all duration-200 ${
                        p.accent
                          ? 'bg-indigo-500/25 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/35'
                          : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-indigo-400/30 hover:text-white'
                      }`}
                    >
                      Demander un devis <ArrowRight size={13} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Option rédaction SEO */}
            <Reveal delay={100}>
              <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-indigo-950/30 border border-indigo-500/20 rounded-2xl">
                <div>
                  <div className="text-indigo-300 font-bold text-sm mb-0.5">Option - Rédaction SEO</div>
                  <div className="text-white/40 text-xs">Textes optimisés pour le référencement, rédigés par nos soins, page par page.</div>
                </div>
                <div className="text-indigo-400 font-extrabold text-lg shrink-0">20€ / page</div>
              </div>
            </Reveal>

            {/* Option hébergement */}
            <Reveal delay={120}>
              <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-indigo-950/30 border border-indigo-500/20 rounded-2xl">
                <div>
                  <div className="text-indigo-300 font-bold text-sm mb-0.5">Option - Hébergement</div>
                  <div className="text-white/40 text-xs">Serveur rapide, SSL inclus, uptime 99,9%. 1er mois offert, puis 10€/mois (max 2 sites).</div>
                </div>
                <div className="text-indigo-400 font-extrabold text-lg shrink-0">10€ / mois</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CE QUI EST INCLUS ── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Inclus sur tous les sites</p>
              <h2 className="text-center text-4xl font-bold text-white mb-14">Tout inclus dans votre site web.</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <Globe size={18} className="text-indigo-400" />, title: 'Nom de domaine', desc: 'Enregistrement et gestion, à prix coûtant après la 1ère année.' },
                { icon: <Lock size={18} className="text-indigo-400" />, title: 'Certificat SSL', desc: 'HTTPS sécurisé inclus avec l\'option hébergement.' },
                { icon: <Mail size={18} className="text-indigo-400" />, title: 'E-mails professionnels', desc: 'Adresses @votreentreprise.fr configurées et prêtes à utiliser.' },
                { icon: <ShieldCheck size={18} className="text-indigo-400" />, title: 'RGPD & mentions légales', desc: 'Bandeau cookies, politique de confidentialité, conformité totale.' },
                { icon: <Smartphone size={18} className="text-indigo-400" />, title: 'Design responsive', desc: 'Parfait sur mobile, tablette et desktop, sans compromis.' },
                { icon: <BarChart2 size={18} className="text-indigo-400" />, title: 'Statistiques de visites', desc: 'Tableau de bord analytics pour suivre vos performances.' },
                { icon: <Code2 size={18} className="text-indigo-400" />, title: 'Optimisation SEO de base', desc: 'Balises, vitesse, structure : vous partez sur de bonnes bases.' },
                { icon: <Monitor size={18} className="text-indigo-400" />, title: 'Formation à la prise en main', desc: 'On vous montre comment mettre à jour votre site en autonomie.' },
                { icon: <ArrowRight size={18} className="text-indigo-400" />, title: 'Migration domaine offerte', desc: 'Vous avez déjà un domaine ailleurs ? On le transfère sans frais.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 30}>
                  <div className="bg-surfaceHighlight/15 border border-indigo-500/10 rounded-2xl p-5 hover:border-indigo-400/25 hover:bg-indigo-950/20 transition-all duration-300 h-full">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded-lg bg-indigo-500/10 shrink-0">{item.icon}</div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                    </div>
                    <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESSUS ── */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Comment ça se passe</p>
              <h2 className="text-center text-4xl font-bold text-white mb-14">Votre site en ligne en quelques semaines.</h2>
            </Reveal>
            <div className="space-y-0">
              {[
                { n: '01', title: 'Brief & audit gratuit', desc: 'On discute de votre activité, vos cibles, vos concurrents. On vous conseille sur la meilleure structure.' },
                { n: '02', title: 'Devis détaillé sous 24h', desc: 'Chaque page, chaque fonctionnalité est listée. Pas de surprise en cours de route.' },
                { n: '03', title: 'Conception & intégration', desc: 'Design, développement, textes (ou rédaction SEO si option choisie) - on vous soumet des maquettes avant de coder.' },
                { n: '04', title: 'Mise en ligne & formation', desc: 'On déploie, on configure domaine + e-mails, on vous forme. Votre site est prêt à attirer des clients.' },
              ].map((s, i, arr) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-extrabold flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/35 transition-all">
                        {s.n}
                      </div>
                      {i < arr.length - 1 && <div className="w-px flex-1 bg-indigo-500/15 my-2" />}
                    </div>
                    <div className="pb-10">
                      <div className="text-white font-bold text-lg mb-1 group-hover:text-indigo-300 transition-colors">{s.title}</div>
                      <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="rounded-[2rem] border border-indigo-500/25 bg-gradient-to-br from-indigo-950/45 via-indigo-950/15 to-transparent p-7 md:p-10 shadow-[0_0_50px_rgba(99,102,241,0.12)] relative overflow-hidden">
                <div className="pointer-events-none absolute -top-28 -right-28 w-[360px] h-[360px] rounded-full bg-indigo-500/10 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-accent/5 blur-[120px]" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 text-indigo-300 mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0">
                        <ShieldCheck size={18} className="text-indigo-300" />
                      </div>
                      <div className="tracking-[0.25em] text-[11px] font-bold uppercase">Recommandation</div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                      Contrat de maintenance : le minimum recommandé pour rester serein.
                    </h2>
                    <p className="text-white/70 mt-3 leading-relaxed max-w-2xl">
                      Un site non maintenu vieillit vite. Même un petit contrat évite les soucis: mises à jour, sécurité, petits ajustements et surveillance.
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { t: 'Sécurité & mises à jour', d: 'Dépendances, correctifs, durcissement.' },
                        { t: 'Sauvegardes', d: 'Récupération rapide en cas de problème.' },
                        { t: 'Petites modifs', d: 'Textes, images, sections, ajustements.' },
                        { t: 'Surveillance', d: 'Disponibilité, erreurs, performances.' },
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
                      <div className="text-white font-extrabold text-lg">Le plus simple</div>
                      <div className="text-white/60 text-sm mt-2 leading-relaxed">
                        Prendre le plus petit forfait, et on ajuste si besoin. Vous gardez un site sain, sans y penser.
                      </div>
                      <div className="mt-5 flex flex-col gap-3">
                        <a
                          href="/eagle-digital/maintenance"
                          className="inline-flex items-center justify-center gap-2 bg-indigo-500/25 border border-indigo-500/40 text-indigo-200 font-bold px-5 py-3 rounded-full hover:bg-indigo-500/35 transition-all duration-200 text-sm"
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
                        Conseil: maintenance recommandée dès la mise en ligne, surtout si le site sert à générer des leads.
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
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6">Prêt à vous lancer ?</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Votre site web à Angoulême,<br />prêt à attirer des clients.
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">Devis gratuit sous 24h, sans engagement. On répond vite.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-10 py-4 rounded-full hover:bg-white transition-all duration-200 text-base shadow-xl shadow-accent/20">
                Demander un devis gratuit <ArrowRight size={16} />
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
