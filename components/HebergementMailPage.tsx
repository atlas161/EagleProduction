import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Reveal } from './Reveal';
import { Section } from '../types';
import {
  ArrowRight, Mail, CheckCircle2, ShieldCheck, ArrowLeft,
  Globe, Lock, Server, Inbox, Zap
} from 'lucide-react';
import '../index.css';

export const HebergementMailPage: React.FC = () => {
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

  useEffect(() => {
    const title = 'Hébergement Web & E-mails Professionnels à Angoulême | Eagle Digital';
    const desc = 'Eagle Digital gère votre hébergement web, nom de domaine et e-mails professionnels à Angoulême. SSL inclus, uptime 99,9%, migration offerte, adresses @votreentreprise.fr configurées. Devis gratuit sous 24h.';
    document.title = title;
    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute('content', value);
    };
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', 'https://www.eagle-prod.com/eagle-digital/hebergement-mail/');
    setMeta('name', 'keywords', 'hébergement web Angoulême, nom de domaine Charente, e-mail professionnel entreprise, adresse e-mail personnalisée, Eagle Digital, SSL, migration domaine');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://www.eagle-prod.com/eagle-digital/hebergement-mail/');
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
            <p className="text-sky-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Eagle Digital - Hébergement & E-mails pro à Angoulême</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
              Nom de domaine, hébergement<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-accent">
                et e-mails pro à Angoulême.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base text-white/50 leading-relaxed max-w-2xl mb-8">
              Eagle Digital enregistre et gère votre nom de domaine, héberge votre site sur un serveur rapide et sécurisé (SSL inclus), et configure vos adresses e-mail professionnelles @votreentreprise.fr. Migration depuis votre ancien prestataire offerte, zéro interruption de service.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-all duration-200 text-sm shadow-lg shadow-accent/20">
                Devis gratuit <ArrowRight size={15} />
              </a>
              <a href="/eagle-digital" className="inline-flex items-center gap-2 text-white/50 font-medium px-5 py-3 rounded-full border border-white/[0.08] hover:border-sky-400/40 hover:text-white transition-all duration-200 text-sm">
                Voir tous les services
              </a>
            </div>
          </Reveal>
        </section>

        {/* ── PRESTATIONS ── */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-center text-sky-400 text-xs font-semibold tracking-[0.3em] uppercase mb-5">Nos prestations</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">Domaine, hébergement & e-mails pro.</h2>
              <p className="text-center text-white/35 text-base mb-14 max-w-xl mx-auto">
                Gestion complète incluse. Un seul interlocuteur basé à Angoulême pour toute votre infrastructure numérique.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: <Globe size={22} className="text-sky-400" />,
                  iconBg: 'bg-sky-500/10 border-sky-500/20',
                  title: 'Nom de domaine',
                  price: '20€ / an',
                  badge: '',
                  desc: 'On enregistre et renouvelle votre nom de domaine pour vous. Vous restez propriétaire à 100%, on se charge des démarches.',
                  items: [
                    'Recherche de disponibilité',
                    'Enregistrement et renouvellement géré',
                    'Vous restez propriétaire',
                    'Migration depuis un autre registrar offerte',
                    'Extensions .fr, .com, .net, .eu...',
                  ],
                },
                {
                  icon: <Server size={22} className="text-sky-400" />,
                  iconBg: 'bg-sky-500/10 border-sky-500/20',
                  title: 'Hébergement web pro',
                  price: '16€ / mois',
                  badge: '',
                  desc: 'Serveur rapide et fiable, certificat SSL (HTTPS) inclus, surveillance 24/7. Votre site reste en ligne, toujours.',
                  items: [
                    'Serveur SSD haute performance',
                    '20 à 100 sites inclus',
                    'Certificat SSL (HTTPS) inclus',
                    'Uptime garanti 99,9%',
                    'Sauvegardes automatiques quotidiennes',
                    'Support technique inclus',
                  ],
                },
                {
                  icon: <Mail size={22} className="text-sky-400" />,
                  iconBg: 'bg-sky-500/10 border-sky-500/20',
                  title: 'Pack E-mails Pro (2 adresses)',
                  price: '10€ / mois',
                  badge: 'Populaire',
                  desc: '2 adresses e-mail professionnelles @votreentreprise.fr, stockage illimité, cloud 50Go. Configuration et migration incluses.',
                  items: [
                    '2 adresses @votredomaine.fr',
                    'Stockage e-mail illimité',
                    'Cloud 50Go inclus',
                    'Migration e-mails existants',
                    'Configuration sur tous appareils',
                    'Formation à la prise en main',
                  ],
                },
                {
                  icon: <Mail size={22} className="text-sky-400" />,
                  iconBg: 'bg-sky-500/15 border-sky-500/25',
                  title: 'Pack E-mails Business (5 adresses)',
                  price: '30€ / mois',
                  badge: '⭐ Recommandé',
                  desc: '5 adresses e-mail professionnelles, stockage illimité, cloud 3To. Solution complète pour les équipes.',
                  items: [
                    '5 adresses @votredomaine.fr',
                    'Stockage e-mail illimité',
                    'Cloud 3To inclus',
                    'Migration et formation incluses',
                    'Gestion avancée des droits',
                    'Support prioritaire',
                  ],
                },
              ].map((p, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div className="bg-surfaceHighlight/15 border border-sky-500/15 hover:border-sky-400/30 rounded-2xl p-7 flex flex-col gap-5 h-full transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${p.iconBg}`}>{p.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <div className="text-white font-bold text-base">{p.title}</div>
                          {p.badge && <span className="text-[10px] uppercase tracking-wider bg-sky-500/15 text-sky-300 border border-sky-500/25 px-2 py-0.5 rounded-full font-bold">{p.badge}</span>}
                        </div>
                        <div className="text-sky-400 font-extrabold text-lg">{p.price}</div>
                      </div>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                    <ul className="space-y-2 flex-1">
                      {p.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-white/55">
                          <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5 text-sky-400" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="/contact" className="inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-full px-5 py-2.5 bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-sky-400/30 hover:text-white transition-all duration-200">
                      En savoir plus <ArrowRight size={13} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── GARANTIES ── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Nos engagements</p>
              <h2 className="text-center text-4xl font-bold text-white mb-14">Nos engagements hébergement & e-mail.</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <Lock size={20} className="text-sky-400" />, title: 'Tarifs transparents', desc: 'Pas de surprises ni de frais cachés. Vous savez exactement ce que vous payez, et pour quoi.' },
                { icon: <Zap size={20} className="text-sky-400" />, title: 'Vous restez propriétaire', desc: 'Le domaine est à votre nom, les accès vous appartiennent. Si vous partez, vous emportez tout.' },
                { icon: <ShieldCheck size={20} className="text-sky-400" />, title: 'Support humain réactif', desc: 'Un vrai interlocuteur basé à Angoulême, joignable rapidement en cas de problème. Pas de bot, pas de ticket perdu.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="bg-surfaceHighlight/15 border border-sky-500/10 rounded-2xl p-6 hover:border-sky-400/25 transition-all h-full">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 w-fit mb-4">{item.icon}</div>
                    <div className="text-white font-bold text-sm mb-2">{item.title}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ RAPIDE ── */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Questions fréquentes</p>
              <h2 className="text-center text-4xl font-bold text-white mb-14">Ce qu'on nous demande souvent.</h2>
            </Reveal>
            <div className="space-y-4">
              {[
                { q: 'Je dois changer d\'hébergeur, c\'est compliqué ?', a: 'Non. On gère toute la migration à votre place, sans interruption de service. Vous ne voyez rien, votre site reste en ligne pendant le transfert.' },
                { q: 'Que se passe-t-il si je veux partir un jour ?', a: 'Vous partez avec tout : domaine, fichiers, bases de données. On vous prépare un export complet et on vous accompagne dans le transfert.' },
                { q: 'Quel est le prix après la 1ère année ?', a: 'Les tarifs restent stables. On vous envoie une notification avant chaque renouvellement annuel, sans surprise.' },
                { q: 'Puis-je ajouter des adresses e-mail plus tard ?', a: 'Oui, vous pouvez passer du pack 2 adresses au pack 5 adresses à tout moment. On adapte votre solution selon l\'évolution de vos besoins.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 40}>
                  <div className="bg-surfaceHighlight/15 border border-sky-500/10 rounded-2xl p-6 hover:border-sky-400/20 transition-all">
                    <div className="flex items-start gap-3">
                      <Inbox size={16} className="text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-semibold text-sm mb-2">{item.q}</div>
                        <div className="text-white/45 text-sm leading-relaxed">{item.a}</div>
                      </div>
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
              <div className="rounded-[2rem] border border-sky-500/25 bg-gradient-to-br from-sky-950/45 via-sky-950/15 to-transparent p-7 md:p-10 shadow-[0_0_50px_rgba(56,189,248,0.10)] relative overflow-hidden">
                <div className="pointer-events-none absolute -top-28 -right-28 w-[360px] h-[360px] rounded-full bg-sky-500/10 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-accent/5 blur-[120px]" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 text-sky-300 mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center shrink-0">
                        <ShieldCheck size={18} className="text-sky-300" />
                      </div>
                      <div className="tracking-[0.25em] text-[11px] font-bold uppercase">Recommandation</div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                      Contrat de maintenance : le minimum recommandé pour rester serein.
                    </h2>
                    <p className="text-white/70 mt-3 leading-relaxed max-w-2xl">
                      Hébergement, domaine et e-mails: tout repose sur une infrastructure vivante. Un minimum de maintenance évite les pannes, protège vos données et garantit une continuité de service.
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { t: 'Sécurité', d: 'Mises à jour, durcissement, bonnes pratiques.' },
                        { t: 'Surveillance', d: 'Disponibilité et alertes en cas d’incident.' },
                        { t: 'Sauvegardes', d: 'Restauration simple en cas d’erreur.' },
                        { t: 'Support', d: 'Un interlocuteur, des réponses rapides.' },
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
                      <div className="text-white font-extrabold text-lg">Recommandé</div>
                      <div className="text-white/60 text-sm mt-2 leading-relaxed">
                        Prenez le plus petit forfait, puis on adapte selon le volume d’e-mails, le site et les besoins.
                      </div>
                      <div className="mt-5 flex flex-col gap-3">
                        <a
                          href="/eagle-digital/maintenance"
                          className="inline-flex items-center justify-center gap-2 bg-sky-500/25 border border-sky-500/40 text-sky-200 font-bold px-5 py-3 rounded-full hover:bg-sky-500/35 transition-all duration-200 text-sm"
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
                        Objectif: éviter les “petits problèmes” qui coûtent cher quand ils arrivent au mauvais moment.
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
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6">On s'occupe de tout</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Votre domaine et vos e-mails pro,<br />à Angoulême, gérés pour vous.
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">Devis gratuit sous 24h. Migration offerte, zéro engagement.</p>
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
