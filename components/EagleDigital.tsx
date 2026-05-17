import React from 'react';
import { Reveal } from './Reveal';
import {
  ArrowRight, ChevronRight, Monitor, Search,
  LifeBuoy, Rocket, CheckCircle2, ShieldCheck, Mail,
  Globe, ShoppingCart, FileText, MapPin, Send,
  Server, Cloud, Users
} from 'lucide-react';

export const EagleDigital: React.FC = () => {
  return (
    <div className="bg-background text-textPrimary">

      {/* ── Fond subtil ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-indigo-900/8 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[140px]" />
      </div>

      <div className="relative z-10">

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-36 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Gauche - texte */}
            <div>
              <Reveal>
                <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                  Agence Web & SEO - Angoulême, Charente
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
                  Site web, SEO local<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-accent">
                    et e-mails pro à Angoulême.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-base text-white/50 leading-relaxed max-w-md">
                  Eagle Digital crée votre site vitrine ou e-commerce, optimise votre référencement Google et gère votre hébergement, vos e-mails professionnels et votre présence locale, le tout depuis Angoulême, avec un seul interlocuteur.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-all duration-200 text-sm shadow-lg shadow-accent/20">
                    Devis gratuit <ArrowRight size={15} />
                  </a>
                  <a href="/faq" className="inline-flex items-center gap-2 text-white/55 font-medium px-5 py-3 rounded-full border border-white/[0.08] hover:border-indigo-400/40 hover:text-white transition-all duration-200 text-sm">
                    Questions fréquentes <ChevronRight size={14} />
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Basé à Angoulême', 'Devis sous 24h', 'Hébergement inclus an 1', 'RGPD inclus'].map((b) => (
                    <span key={b} className="text-[10px] text-white/30 border border-white/[0.06] px-2.5 py-1 rounded-full">{b}</span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Droite - 3 services visuels */}
            <Reveal delay={180}>
              <div className="hidden lg:flex flex-col gap-3">
                <a href="/eagle-digital/creation-site-web" className="group flex items-center gap-5 bg-surfaceHighlight/20 border border-indigo-500/20 hover:border-indigo-400/50 rounded-2xl p-5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center flex-shrink-0">
                    <Monitor size={20} className="text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-sm">Création de site web</div>
                    <div className="text-white/40 text-xs mt-0.5">Vitrine, multi-pages ou e-commerce - dès 1 200€</div>
                  </div>
                  <ArrowRight size={14} className="text-indigo-400/60 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                </a>
                <a href="/eagle-digital/referencement-seo" className="group flex items-center gap-5 bg-surfaceHighlight/20 border border-teal-500/20 hover:border-teal-400/50 rounded-2xl p-5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center flex-shrink-0">
                    <Search size={20} className="text-teal-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-sm">SEO & Visibilité locale</div>
                    <div className="text-white/40 text-xs mt-0.5">Google Business, audit SEO, e-mailing - dès 150€</div>
                  </div>
                  <ArrowRight size={14} className="text-teal-400/60 group-hover:text-teal-400 transition-colors flex-shrink-0" />
                </a>
                <a href="/eagle-digital/hebergement-mail" className="group flex items-center gap-5 bg-surfaceHighlight/20 border border-sky-500/20 hover:border-sky-400/50 rounded-2xl p-5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center flex-shrink-0">
                    <Cloud size={20} className="text-sky-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-sm">Hébergement & E-mails pro</div>
                    <div className="text-white/40 text-xs mt-0.5">Domaine, hébergement SSL, adresses @votreentreprise - dès 10€/mois</div>
                  </div>
                  <ArrowRight size={14} className="text-sky-400/60 group-hover:text-sky-400 transition-colors flex-shrink-0" />
                </a>
                <a href="/eagle-digital/maintenance" className="group flex items-center gap-5 bg-surfaceHighlight/20 border border-rose-500/20 hover:border-rose-400/50 rounded-2xl p-5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/15 border border-rose-500/25 flex items-center justify-center flex-shrink-0">
                    <LifeBuoy size={20} className="text-rose-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-sm">Contrat de maintenance</div>
                    <div className="text-white/40 text-xs mt-0.5">Sécurité, SEO mensuel, support informatique - dès 49€/mois</div>
                  </div>
                  <ArrowRight size={14} className="text-rose-400/60 group-hover:text-rose-400 transition-colors flex-shrink-0" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CONTRAT MAINTENANCE - section vedette
        ══════════════════════════════════════════ */}
        <section className="pt-12 pb-24 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
                <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold tracking-[0.3em] uppercase bg-rose-900/20 border border-rose-500/20 px-4 py-2 rounded-full">
                  <Rocket size={13} /> Recommandé pour les entreprises
                </div>
                <a href="/eagle-digital/maintenance" className="inline-flex items-center gap-1.5 text-rose-400 text-xs font-semibold hover:text-rose-300 transition-colors">
                  Page dédiée <ArrowRight size={12} />
                </a>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Le contrat maintenance tout-inclus.
              </h2>
              <p className="text-white/40 text-lg max-w-2xl mb-12">
                Un seul forfait mensuel pour votre site web, votre SEO local, vos e-mails professionnels et votre support informatique. Zéro gestion, un seul interlocuteur basé à Angoulême.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  name: 'Essentiel',
                  price: '49€',
                  sub: '/mois',
                  badge: '',
                  items: [
                    'Maintenance & sécurité site web',
                    'Sauvegardes automatiques',
                    '1h support technique/mois',
                    'Surveillance uptime 24/7',
                    'Mises à jour CMS & plugins',
                  ],
                  accent: false,
                },
                {
                  name: 'Pro',
                  price: '99€',
                  sub: '/mois',
                  badge: 'Populaire',
                  items: [
                    'Tout Essentiel inclus',
                    'Rapport SEO mensuel',
                    'Gestion fiche Google & Solocal',
                    'Gestion e-mails pro & spam',
                    '3h support & conseil info/mois',
                    '1 campagne e-mailing/mois',
                  ],
                  accent: true,
                },
                {
                  name: 'Business',
                  price: '189€',
                  sub: '/mois',
                  badge: 'Complet',
                  items: [
                    'Tout Pro inclus',
                    'Optimisation SEO active',
                    'Antivirus & pare-feu managé',
                    'Support illimité & astreinte',
                    'Conseil informatique dédié',
                  ],
                  accent: false,
                },
              ].map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className={`rounded-3xl p-7 flex flex-col gap-5 h-full border transition-all duration-300 ${
                    p.accent
                      ? 'bg-rose-900/15 border-rose-500/30 shadow-lg shadow-rose-900/10'
                      : 'bg-surfaceHighlight/15 border-white/[0.06] hover:border-rose-400/20'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className={`font-bold text-lg ${p.accent ? 'text-rose-300' : 'text-white'}`}>{p.name}</div>
                        {p.badge && (
                          <span className="text-[10px] uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full font-bold">{p.badge}</span>
                        )}
                      </div>
                      <div className="flex items-end gap-1">
                        <span className={`text-3xl font-extrabold ${p.accent ? 'text-rose-400' : 'text-white'}`}>{p.price}</span>
                        <span className="text-white/35 text-sm mb-0.5">{p.sub}</span>
                      </div>
                    </div>
                    <ul className="space-y-2.5 flex-1">
                      {p.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-white/60">
                          <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${p.accent ? 'text-rose-400' : 'text-accent'}`} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="/contact" className={`inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-full px-5 py-2.5 transition-all duration-200 ${
                      p.accent
                        ? 'bg-rose-500/25 border border-rose-500/40 text-rose-300 hover:bg-rose-500/35'
                        : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:border-white/20 hover:text-white'
                    }`}>
                      Choisir ce plan <ArrowRight size={13} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Note Solocal - hidden */}
            {/*
            <Reveal>
              <div className="flex items-start gap-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl px-6 py-5">
                <Star size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-amber-300 font-semibold text-sm mb-1">Nous recommandons un abonnement Solocal</div>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Solocal (PagesJaunes) booste significativement votre visibilité locale. Dans le cadre de nos contrats de maintenance <span className="text-white/70">Pro</span> et <span className="text-white/70">Business</span>, nous gérons intégralement votre compte Solocal : mise à jour, photos, avis clients, synchronisation avec Google, vous n'avez plus rien à faire.
                  </p>
                </div>
              </div>
            </Reveal>
            */}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            TARIFS À LA CARTE - cards design
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Tarifs à la carte</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">
                Tarifs clairs, sans surprise.
              </h2>
              <p className="text-center text-white/35 text-base mb-16 max-w-xl mx-auto">
                Chaque service est disponible à la carte ou inclus dans un contrat de maintenance mensuel.
              </p>
            </Reveal>

            {/* ── Sites Web ── */}
            <Reveal>
              <div className="mb-14">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center flex-shrink-0">
                      <Monitor size={16} className="text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Création de Sites Web</div>
                      <div className="text-white/35 text-xs">Nom de domaine, hébergement & e-mails pro inclus an 1</div>
                    </div>
                  </div>
                  <a href="/eagle-digital/creation-site-web" className="inline-flex items-center gap-1.5 text-indigo-400 text-xs font-semibold hover:text-indigo-300 transition-colors shrink-0">
                    Page dédiée <ArrowRight size={12} />
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Vitrine Express', sub: 'One-page + domaine 1 an offert + 1 e-mail pro + 1 mois hébergement', price: '1 200€', tag: '', icon: <Monitor size={16} className="text-indigo-400" /> },
                    { label: 'Vitrine Standard', sub: '5 pages + domaine 1 an offert + 2 e-mails + 1 mois hébergement', price: 'Dès 1 900€', tag: '', icon: <Globe size={16} className="text-indigo-400" /> },
                    { label: 'E-commerce / Sur-mesure', sub: 'Boutique + domaine 1 an offert + 30 e-mails illimités', price: 'Dès 3 500€', tag: '', icon: <ShoppingCart size={16} className="text-indigo-400" /> },
                    { label: 'Option rédaction SEO', sub: 'Textes optimisés rédigés par nos soins, page par page', price: '20€ / page', tag: 'Option', accent: 'indigo', icon: <FileText size={16} className="text-indigo-400" /> },
                  ].map((item, i) => (
                    <div key={i} className={`relative rounded-2xl p-5 border transition-all duration-300 group hover:-translate-y-0.5 ${
                      item.accent
                        ? 'bg-indigo-950/40 border-indigo-500/25 hover:border-indigo-400/40'
                        : 'bg-white/[0.03] border-indigo-500/10 hover:border-indigo-400/25 hover:bg-indigo-950/20'
                    }`}>
                      {item.tag && (
                        <span className="absolute top-4 right-4 text-[9px] uppercase tracking-widest font-bold text-indigo-400 bg-indigo-500/15 border border-indigo-500/25 px-2 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      )}
                      <div className="flex items-center gap-2 mb-1">
                        {item.icon}
                        <div className={`text-sm font-semibold ${item.accent ? 'text-indigo-300' : 'text-white'}`}>{item.label}</div>
                      </div>
                      <div className="text-white/35 text-xs leading-relaxed mb-3">{item.sub}</div>
                      <div className={`text-base font-extrabold ${item.accent ? 'text-indigo-400' : 'text-white/80'}`}>{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* ── SEO & Visibilité ── */}
            <Reveal>
              <div className="mb-14">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center flex-shrink-0">
                      <Search size={16} className="text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold">SEO, Visibilité & E-mailing</div>
                      <div className="text-white/35 text-xs">Être trouvé localement, fidéliser vos clients</div>
                    </div>
                  </div>
                  <a href="/eagle-digital/referencement-seo" className="inline-flex items-center gap-1.5 text-teal-400 text-xs font-semibold hover:text-teal-300 transition-colors shrink-0">
                    Page dédiée <ArrowRight size={12} />
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Audit SEO & plan d\'action', sub: 'Analyse technique, mots-clés, concurrents', price: '250€', tag: '', accent: undefined, icon: <Search size={16} className="text-teal-400" /> },
                    { label: 'Fiche Google Business', sub: 'Création / optimisation SEO local + photos', price: '150€', tag: 'Indispensable', accent: 'teal', icon: <MapPin size={16} className="text-teal-400" /> },
                    { label: 'Setup e-mailing pro', sub: 'Config domaine, import contacts, templates, 1ère campagne', price: '400€', tag: '', accent: undefined, icon: <Mail size={16} className="text-teal-400" /> },
                    { label: 'Campagne e-mailing mensuelle', sub: 'À partir de 150€/mois selon nb de contacts (+20€ par 100 contacts)', price: 'Dès 150€ / mois', tag: '', accent: undefined, icon: <Send size={16} className="text-teal-400" /> },
                  ].map((item, i) => (
                    <div key={i} className={`relative rounded-2xl p-5 border transition-all duration-300 group hover:-translate-y-0.5 ${
                      item.accent === 'teal'
                        ? 'bg-teal-950/40 border-teal-500/30 hover:border-teal-400/50'
                        : 'bg-white/[0.03] border-teal-500/10 hover:border-teal-400/25 hover:bg-teal-950/20'
                    }`}>
                      {item.tag && (
                        <span className={`absolute top-4 right-4 text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full ${
                          item.accent === 'teal'
                            ? 'text-teal-300 bg-teal-500/20 border border-teal-500/30'
                            : 'text-white/30 bg-white/5 border border-white/[0.06]'
                        }`}>
                          {item.tag}
                        </span>
                      )}
                      <div className="flex items-center gap-2 mb-1 pr-16">
                        {item.icon}
                        <div className={`text-sm font-semibold ${item.accent === 'teal' ? 'text-teal-300' : 'text-white'}`}>{item.label}</div>
                      </div>
                      <div className="text-white/35 text-xs leading-relaxed mb-3">{item.sub}</div>
                      <div className={`text-base font-extrabold ${item.accent === 'teal' ? 'text-teal-400' : 'text-white/80'}`}>{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* ── Domaine & E-mails ── */}
            <Reveal>
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-sky-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Noms de domaine & E-mails pro</div>
                      <div className="text-white/35 text-xs">Gestion complète, hébergement et e-mails pro inclus</div>
                    </div>
                  </div>
                  <a href="/eagle-digital/hebergement-mail" className="inline-flex items-center gap-1.5 text-sky-400 text-xs font-semibold hover:text-sky-300 transition-colors shrink-0">
                    Page dédiée <ArrowRight size={12} />
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Nom de domaine', sub: 'Enregistrement et renouvellement annuel géré pour vous (.com, .fr, etc.)', price: '20€ / an', icon: <Globe size={16} className="text-sky-400" /> },
                    { label: 'Hébergement web pro', sub: 'Serveur rapide, SSL inclus, uptime 99,9% - max 2 sites', price: '10€ / mois', icon: <Server size={16} className="text-sky-400" /> },
                    { label: 'E-mails pro (2 adresses)', sub: '2 adresses pro, stockage illimité, cloud 50Go, migration incluse', price: '10€ / mois', icon: <Mail size={16} className="text-sky-400" /> },
                    { label: 'Pack E-mails (5 adresses)', sub: '5 adresses pro, stockage illimité, cloud 3To, sans limite', price: '30€ / mois', accent: 'sky', icon: <Users size={16} className="text-sky-400" /> },
                  ].map((item, i) => (
                    <div key={i} className={`relative rounded-2xl p-5 border transition-all duration-300 group hover:-translate-y-0.5 ${
                      item.accent
                        ? 'bg-sky-950/30 border-sky-500/25 hover:border-sky-400/40'
                        : 'bg-white/[0.03] border-sky-500/10 hover:border-sky-400/25 hover:bg-sky-950/20'
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        {item.icon}
                        <div className={`text-sm font-semibold ${item.accent ? 'text-sky-300' : 'text-white'}`}>{item.label}</div>
                      </div>
                      <div className="text-white/35 text-xs leading-relaxed mb-3">{item.sub}</div>
                      <div className={`text-base font-extrabold ${item.accent ? 'text-sky-400' : 'text-white/80'}`}>{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROCESSUS
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Comment ça marche</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">
                De la prise de contact à la mise en ligne.
              </h2>
            </Reveal>
            <div className="space-y-0">
              {[
                { n: '01', title: 'Audit gratuit de votre situation', desc: 'On fait le point sur votre présence en ligne, votre infrastructure et vos besoins. Gratuit, sans engagement.' },
                { n: '02', title: 'Proposition sur-mesure', desc: 'Devis détaillé sous 24h. Chaque prestation est expliquée clairement, sans jargon, sans frais cachés.' },
                { n: '03', title: 'On met tout en place', desc: 'Site, SEO, e-mails, sécurité, on gère de A à Z et on vous tient informé à chaque étape.' },
                { n: '04', title: 'Vous êtes autonome, on reste disponible', desc: 'Formation à votre outil, accès admin, et un contrat de maintenance pour ne jamais vous retrouver seul face à un problème.' },
              ].map((s, i, arr) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-accent text-background text-sm font-extrabold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        {s.n}
                      </div>
                      {i < arr.length - 1 && <div className="w-px flex-1 bg-white/8 my-2" />}
                    </div>
                    <div className="pb-10">
                      <div className="text-white font-bold text-lg mb-1 group-hover:text-accent transition-colors">{s.title}</div>
                      <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            GARANTIES - layout corrigé
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Nos engagements</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">Ce qu'on vous garantit.</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <ShieldCheck size={16} className="text-accent" />, label: 'Devis sous 24h', sub: 'Toujours gratuit, sans engagement' },
                { icon: <ShieldCheck size={16} className="text-accent" />, label: 'Tarifs transparents', sub: 'Aucun frais caché, tout par écrit' },
                { icon: <ShieldCheck size={16} className="text-accent" />, label: 'Vous restez propriétaire', sub: 'Nom de domaine, code, droits cédés' },
                { icon: <ShieldCheck size={16} className="text-accent" />, label: 'RGPD & mentions légales', sub: 'Gérés pour chaque site créé' },
                { icon: <ShieldCheck size={16} className="text-accent" />, label: 'Hébergement an 1 inclus', sub: 'Sur tous les sites web créés' },
                { icon: <ShieldCheck size={16} className="text-accent" />, label: 'Formation à la prise en main', sub: 'Vous gérez votre site en autonomie' },
                { icon: <ShieldCheck size={16} className="text-accent" />, label: 'Support réactif', sub: 'Réponse sous 24h ouvrées' },
                { icon: <ShieldCheck size={16} className="text-accent" />, label: 'Basé à Angoulême', sub: 'Un vrai interlocuteur humain' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 30}>
                  <div className="bg-surfaceHighlight/15 border border-white/[0.04] rounded-2xl p-5 hover:border-accent/20 hover:bg-surfaceHighlight/30 transition-all duration-300 h-full">
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <div className="text-white font-semibold text-sm leading-tight">{item.label}</div>
                    </div>
                    <div className="text-white/35 text-xs leading-relaxed">{item.sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA FINAL
        ══════════════════════════════════════════ */}
        <section className="py-32 px-6 text-center">
          <Reveal>
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6">Prêt à passer à la vitesse supérieure ?</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Votre site web professionnel<br />à Angoulême prêt en quelques semaines.
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
              Audit gratuit de votre présence en ligne, devis sous 24h. Zéro engagement.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-background font-bold px-10 py-5 rounded-full hover:bg-white transition-all duration-200 text-base shadow-xl shadow-accent/20"
              >
                Demander un audit gratuit <ArrowRight size={16} />
              </a>
              <a
                href="tel:+33699361715"
                className="inline-flex items-center gap-2 text-white/50 font-medium px-6 py-5 rounded-full border border-white/[0.08] hover:border-accent/30 hover:text-white transition-all duration-200 text-base"
              >
                +33 6 99 36 17 15
              </a>
            </div>
          </Reveal>
        </section>

      </div>
    </div>
  );
};
