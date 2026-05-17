import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Reveal } from './Reveal';
import { Section } from '../types';
import {
  ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck,
  LifeBuoy, Rocket, RefreshCw, Lock, Zap, BarChart2,
  Mail, Search, Clock, HeartHandshake
} from 'lucide-react';
import '../index.css';

export const MaintenancePage: React.FC = () => {
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

  useEffect(() => {
    const title = 'Contrat Maintenance Site Web Angoulême - Tout-inclus | Eagle Digital';
    const desc = 'Eagle Digital propose des contrats de maintenance site web à Angoulême dès 49€/mois : sécurité, sauvegardes, SEO mensuel, e-mails pro, support informatique. Un seul interlocuteur, zéro gestion. Devis gratuit sous 24h.';
    document.title = title;
    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute('content', value);
    };
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', 'https://www.eagle-prod.com/eagle-digital/maintenance');
    setMeta('name', 'keywords', 'contrat maintenance site web Angoulême, maintenance informatique Charente, SEO mensuel, sauvegardes site web, support informatique TPE PME, Eagle Digital');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://www.eagle-prod.com/eagle-digital/maintenance');
  }, []);

  const plans = [
    {
      name: 'Essentiel',
      price: '49€',
      sub: '/mois',
      badge: '',
      accent: false,
      desc: 'Pour les sites vitrine qui ont besoin d\'être maintenus sans prise de tête.',
      items: [
        'Maintenance & sécurité site web',
        'Sauvegardes automatiques quotidiennes',
        '1h de support technique/mois',
        'Surveillance uptime 24/7',
        'Mises à jour CMS & plugins',
        'Rapport mensuel de santé',
      ],
    },
    {
      name: 'Pro',
      price: '99€',
      sub: '/mois',
      badge: 'Populaire',
      accent: true,
      desc: 'Le forfait complet pour les entreprises qui veulent être visibles et actives en ligne.',
      items: [
        'Tout le plan Essentiel inclus',
        'Rapport SEO mensuel complet',
        'Gestion fiche Google Business',
        'Gestion e-mails pro & anti-spam',
        '3h support & conseil informatique/mois',
        '1 campagne e-mailing/mois',
        'Renouvellement domaine géré',
      ],
    },
    {
      name: 'Business',
      price: '189€',
      sub: '/mois',
      badge: 'Complet',
      accent: false,
      desc: 'La solution tout-inclus pour les entreprises qui ne veulent rien gérer.',
      items: [
        'Tout le plan Pro inclus',
        'Optimisation SEO active mensuelle',
        'Antivirus & pare-feu managé',
        'Support illimité & astreinte',
        'Conseil informatique dédié',
        'Renouvellement hébergement géré',
        'Rapport mensuel complet',
      ],
    },
  ];

  const features = [
    {
      icon: <Lock size={18} className="text-rose-400" />,
      title: 'Sécurité & sauvegardes',
      desc: 'Sauvegardes quotidiennes automatiques, mises à jour de sécurité, surveillance 24/7. Votre site est protégé même quand vous dormez.',
    },
    {
      icon: <Search size={18} className="text-rose-400" />,
      title: 'SEO mensuel inclus',
      desc: 'Rapport de positionnement, corrections techniques, optimisation des contenus. Votre visibilité Google progresse chaque mois.',
    },
    {
      icon: <Mail size={18} className="text-rose-400" />,
      title: 'E-mails & Google Business',
      desc: 'Gestion de vos adresses e-mail professionnelles et de votre fiche Google. Plus d\'avis ignorés, plus de fiche en retard.',
    },
    {
      icon: <RefreshCw size={18} className="text-rose-400" />,
      title: 'Mises à jour sans interruption',
      desc: 'CMS, plugins, thèmes : tout est mis à jour et testé avant déploiement. Zéro risque de casse.',
    },
    {
      icon: <Clock size={18} className="text-rose-400" />,
      title: 'Support réactif sous 24h',
      desc: 'Une question, un bug, une urgence ? On répond vite avec un vrai interlocuteur basé à Angoulême, pas un chatbot.',
    },
    {
      icon: <BarChart2 size={18} className="text-rose-400" />,
      title: 'Rapport mensuel clair',
      desc: 'Chaque mois, un rapport lisible : performances, sécurité, SEO, actions réalisées. Vous savez exactement ce qu\'on fait.',
    },
  ];

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
            <p className="text-rose-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Eagle Digital - Maintenance & Support à Angoulême</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
              Contrat de maintenance<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-accent">
                site web dès 49€/mois.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base text-white/50 leading-relaxed max-w-2xl mb-8">
              Eagle Digital prend en charge la maintenance complète de votre site web à Angoulême : sécurité, sauvegardes, SEO mensuel, e-mails professionnels, support informatique et gestion Google Business. Un seul forfait mensuel, un seul interlocuteur, zéro gestion de votre côté.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-all duration-200 text-sm shadow-lg shadow-accent/20">
                Devis gratuit <ArrowRight size={15} />
              </a>
              <a href="/eagle-digital" className="inline-flex items-center gap-2 text-white/50 font-medium px-5 py-3 rounded-full border border-white/[0.08] hover:border-rose-400/40 hover:text-white transition-all duration-200 text-sm">
                Voir tous les services
              </a>
            </div>
          </Reveal>
        </section>

        {/* ── PLANS ── */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold tracking-[0.3em] uppercase mb-5 bg-rose-900/20 border border-rose-500/20 px-4 py-2 rounded-full">
                <Rocket size={13} /> Recommandé pour les TPE & PME
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Nos forfaits de maintenance.
              </h2>
              <p className="text-white/40 text-base max-w-2xl mb-14">
                Sans engagement de durée. Résiliable à tout moment. Tous les prix sont TTC, facture mensuelle.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {plans.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div
                    className={`rounded-3xl p-7 flex flex-col gap-5 h-full border transition-all duration-300 cursor-pointer ${
                      p.accent
                        ? 'bg-rose-900/15 border-rose-500/30 shadow-lg shadow-rose-900/10 hover:border-rose-400/50'
                        : 'bg-surfaceHighlight/15 border-white/[0.06] hover:border-rose-400/20'
                    }`}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className={`font-bold text-lg ${p.accent ? 'text-rose-300' : 'text-white'}`}>{p.name}</div>
                        {p.badge && (
                          <span className="text-[10px] uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full font-bold">{p.badge}</span>
                        )}
                      </div>
                      <div className="flex items-end gap-1 mt-1">
                        <span className={`text-3xl font-extrabold ${p.accent ? 'text-rose-400' : 'text-white'}`}>{p.price}</span>
                        <span className="text-white/35 text-sm mb-0.5">{p.sub}</span>
                      </div>
                      <p className="text-white/35 text-xs mt-2 leading-relaxed">{p.desc}</p>
                    </div>
                    <ul className="space-y-2.5 flex-1">
                      {p.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-white/60">
                          <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${p.accent ? 'text-rose-400' : 'text-accent'}`} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={`inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-full px-5 py-2.5 transition-all duration-200 ${
                        p.accent
                          ? 'bg-rose-500/25 border border-rose-500/40 text-rose-300 hover:bg-rose-500/35'
                          : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-rose-400/30 hover:text-white'
                      }`}
                    >
                      Choisir ce plan <ArrowRight size={13} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Note sans engagement */}
            <Reveal delay={100}>
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-rose-950/20 border border-rose-500/15 rounded-2xl">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-rose-400 shrink-0" />
                  <div>
                    <div className="text-rose-300 font-bold text-sm mb-0.5">Sans engagement de durée</div>
                    <div className="text-white/40 text-xs">Résiliable à tout moment avec un préavis d'un mois. Aucune pénalité.</div>
                  </div>
                </div>
                <a href="/contact" className="text-rose-400 text-xs font-semibold hover:text-rose-300 transition-colors shrink-0">
                  Demander un devis <ArrowRight size={11} className="inline" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CE QUI EST INCLUS ── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Ce que vous gagnez</p>
              <h2 className="text-center text-4xl font-bold text-white mb-4">Tout ce qu'on gère à votre place.</h2>
              <p className="text-center text-white/35 text-sm max-w-xl mx-auto mb-14">
                Concentrez-vous sur votre métier. On s'occupe de tout le reste.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((item, i) => (
                <Reveal key={i} delay={i * 40}>
                  <div className="bg-surfaceHighlight/15 border border-rose-500/10 rounded-2xl p-5 hover:border-rose-400/25 hover:bg-rose-950/15 transition-all duration-300 h-full">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded-lg bg-rose-500/10 shrink-0">{item.icon}</div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                    </div>
                    <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── POURQUOI C'EST ESSENTIEL ── */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Pourquoi c'est indispensable</p>
              <h2 className="text-center text-4xl font-bold text-white mb-14">Un site non maintenu, c'est un risque permanent.</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: <Zap size={20} className="text-rose-400" />,
                  title: '60% des sites hackés par an',
                  desc: 'sont piratés via des plugins ou CMS obsolètes. Un site non mis à jour est une cible facile. Notre maintenance élimine ce risque.',
                },
                {
                  icon: <LifeBuoy size={20} className="text-rose-400" />,
                  title: 'Perte de données sans sauvegarde',
                  desc: 'Un crash serveur, une fausse manipulation et votre site disparaît. Nos sauvegardes quotidiennes vous protègent à tout moment.',
                },
                {
                  icon: <HeartHandshake size={20} className="text-rose-400" />,
                  title: 'Un interlocuteur local dédié',
                  desc: 'Basé à Angoulême, on connaît votre site, votre activité et votre historique. Pas de centre d\'appel, pas de ticket perdu.',
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="bg-surfaceHighlight/15 border border-rose-500/10 rounded-2xl p-6 hover:border-rose-400/25 transition-all h-full">
                    <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 w-fit mb-4">{item.icon}</div>
                    <div className="text-white font-bold text-sm mb-2">{item.title}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESSUS ── */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Comment ça se passe</p>
              <h2 className="text-center text-4xl font-bold text-white mb-14">On prend le relais en quelques jours.</h2>
            </Reveal>
            <div className="space-y-0">
              {[
                { n: '01', title: 'Audit de votre site existant', desc: 'On analyse l\'état de votre site : sécurité, performances, SEO, configuration. C\'est gratuit et sans engagement.' },
                { n: '02', title: 'Choix du forfait adapté', desc: 'On vous recommande le plan le plus adapté à votre activité et votre taille. Pas de sur-vente, juste ce dont vous avez besoin.' },
                { n: '03', title: 'Prise en main complète', desc: 'Accès serveur, configuration des sauvegardes, premier rapport SEO. On est opérationnels en 48h.' },
                { n: '04', title: 'Suivi mensuel & rapport', desc: 'Chaque mois, un rapport clair et un point si besoin. Vous êtes informé, on s\'occupe de tout le reste.' },
              ].map((s, i, arr) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-sm font-extrabold flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500/35 transition-all">
                        {s.n}
                      </div>
                      {i < arr.length - 1 && <div className="w-px flex-1 bg-rose-500/15 my-2" />}
                    </div>
                    <div className="pb-10">
                      <div className="text-white font-bold text-lg mb-1 group-hover:text-rose-300 transition-colors">{s.title}</div>
                      <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 text-center">
          <Reveal>
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6">Prêt à ne plus gérer ça vous-même ?</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Votre site maintenu,<br />sécurisé et visible à Angoulême.
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">Audit gratuit de votre site, devis sous 24h. Sans engagement.</p>
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
