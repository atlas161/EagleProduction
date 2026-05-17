import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight, Camera, FileText, ShieldCheck, Wrench, CheckCircle2, ChevronRight } from 'lucide-react';

export const InspectionBuildings: React.FC = () => {
  return (
    <div className="bg-background text-textPrimary">

      {/* ── Fond subtil ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[140px]" />
      </div>

      <div className="relative z-10">

        {/* ══════════════════════════════════════════
            HERO - accroche centrale, style Apple
        ══════════════════════════════════════════ */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Texte - gauche */}
            <div>
              <Reveal>
                <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-5">
                  Inspection de bâtiments par drone
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
                  Voyez ce que<br />
                  <span className="text-accent">l'œil ne voit pas.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-base text-white/50 leading-relaxed max-w-md">
                  Toitures, façades, structures - inspectés en 4K HDR, sans nacelle ni risque.
                  Rapport PDF illustré livré sous 48h.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-all duration-200 text-sm shadow-lg shadow-accent/20">
                    Devis gratuit <ArrowRight size={15} />
                  </a>
                  <a href="/faq" className="inline-flex items-center gap-2 text-white/55 font-medium px-5 py-3 rounded-full border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200 text-sm">
                    Questions fréquentes <ChevronRight size={14} />
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Certifié DGAC', 'RC Pro', 'Sans échafaudage', 'Rapport 48h', 'Charente'].map((b) => (
                    <span key={b} className="text-[10px] text-white/30 border border-white/8 px-2.5 py-1 rounded-full">{b}</span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Visuel - droite */}
            <Reveal delay={180}>
              <div className="hidden lg:flex flex-col gap-4">
                {/* Carte principale */}
                <div className="bg-surfaceHighlight/25 border border-white/8 rounded-3xl p-7 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span className="text-white/40 text-xs tracking-wider uppercase">Mission en cours</span>
                  </div>
                  <div className="text-white font-bold text-xl mb-1">Toiture · Copropriété</div>
                  <div className="text-white/40 text-sm mb-5">Angoulême - Charente (16)</div>
                  <div className="grid grid-cols-3 gap-3">
                    {['Étanchéité', 'Fissures', 'Végétation'].map((tag) => (
                      <div key={tag} className="bg-white/5 border border-white/8 rounded-xl px-3 py-2 text-center">
                        <div className="text-accent text-[10px] font-semibold">{tag}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 2 stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/8 border border-accent/20 rounded-2xl p-5">
                    <div className="text-accent font-extrabold text-2xl">4K</div>
                    <div className="text-white/50 text-xs mt-1">Images HDR</div>
                  </div>
                  <div className="bg-surfaceHighlight/20 border border-white/8 rounded-2xl p-5">
                    <div className="text-white font-extrabold text-2xl">48h</div>
                    <div className="text-white/50 text-xs mt-1">Rapport livré</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3 BÉNÉFICES CLÉS - icônes larges
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-center text-white/30 text-xs font-semibold tracking-[0.3em] uppercase mb-16">
                Ce que vous obtenez
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
              {[
                {
                  icon: <Camera size={28} className="text-accent" />,
                  title: 'Images 4K HDR',
                  desc: 'Chaque défaut visible - fissure, infiltration, corrosion - capturé avec une précision centimétrique.',
                },
                {
                  icon: <FileText size={28} className="text-accent" />,
                  title: 'Rapport PDF sous 48h',
                  desc: 'Synthèse illustrée, photos annotées, recommandations claires. Transmis via lien sécurisé.',
                },
                {
                  icon: <ShieldCheck size={28} className="text-accent" />,
                  title: 'Zéro risque en hauteur',
                  desc: 'Tout depuis le sol. Télépilote certifié DGAC, assurance RC Pro, autorisations gérées.',
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="bg-surfaceHighlight/20 p-10 flex flex-col gap-5 h-full hover:bg-surfaceHighlight/35 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CE QUE LE DRONE DÉTECTE
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Pathologies détectées</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Le drone voit tout.
              </h2>
              <p className="text-white/45 text-lg max-w-2xl mx-auto mb-16">
                Des infiltrations invisibles à l'œil nu aux microfissures sur façade, rien n'échappe à la caméra 4K.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-left">
              {[
                { label: 'Infiltrations & humidité', sub: 'Points d\'entrée d\'eau, saturation' },
                { label: 'Fissures & microfissures', sub: 'Structurelles, de tension' },
                { label: 'Dégradation matériaux', sub: 'Tuiles, zinc, acier, revêtements' },
                { label: 'Problèmes d\'étanchéité', sub: 'Joints, soudures, noues' },
                { label: 'Mousses & végétation', sub: 'Chéneaux, zones plates' },
                { label: 'Déformations de charpente', sub: 'Affaissements, faiblesse visuelle' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className="bg-surfaceHighlight/20 border border-white/6 rounded-2xl p-5 hover:border-accent/20 hover:bg-surfaceHighlight/35 transition-all duration-300">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-semibold text-sm">{item.label}</div>
                        <div className="text-white/35 text-xs mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROCESSUS - timeline épurée
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Comment ça marche</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">
                Simple. Rapide. Livré.
              </h2>
            </Reveal>
            <div className="space-y-0">
              {[
                { n: '01', title: 'Vous nous contactez', desc: 'Décrivez votre bâtiment et ce que vous voulez inspecter. Devis gratuit sous 24h.' },
                { n: '02', title: 'On prépare tout', desc: 'Étude des autorisations DGAC, plan de vol, créneau météo optimal. Vous n\'avez rien à faire.' },
                { n: '03', title: 'Le drone intervient', desc: 'Mission complète au sol. Vues globales puis détails ciblés sur les zones à risque.' },
                { n: '04', title: 'Vous recevez votre rapport', desc: 'PDF illustré avec photos annotées et recommandations. Livré sous 48h par lien sécurisé.' },
              ].map((s, i, arr) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-accent text-background text-sm font-extrabold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        {s.n}
                      </div>
                      {i < arr.length - 1 && <div className="w-px flex-1 bg-white/8 my-2" />}
                    </div>
                    <div className={`pb-10 ${i === arr.length - 1 ? '' : ''}`}>
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
            TYPES DE BÂTIMENTS - grille simple
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Secteurs couverts</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pour tous vos bâtiments.</h2>
              <p className="text-white/40 text-lg mb-16">Résidentiel, industriel, patrimoine ou ERP - chaque contexte, une approche adaptée.</p>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Résidentiel', sub: 'Toitures, façades, copropriétés' },
                { label: 'Industriel', sub: 'Entrepôts, usines, structures' },
                { label: 'Patrimoine', sub: 'Monuments, édifices classés' },
                { label: 'ERP', sub: 'Écoles, hôpitaux, commerces' },
                { label: 'Ouvrages d\'art', sub: 'Ponts, murs, génie civil' },
                { label: 'Charpentes', sub: 'Bois, métal, complexes' },
                { label: 'Toitures-terrasses', sub: 'Étanchéité, drainage' },
                { label: 'Zones contraintes', sub: 'Accès difficiles, hauteurs' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 30}>
                  <div className="bg-surfaceHighlight/15 border border-white/6 rounded-2xl p-5 text-left hover:border-accent/20 hover:bg-surfaceHighlight/30 transition-all duration-300">
                    <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                    <div className="text-white/35 text-xs">{item.sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA FINAL - minimaliste, fort
        ══════════════════════════════════════════ */}
        <section className="py-32 px-6 text-center">
          <Reveal>
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6">Prêt à commencer ?</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Votre bâtiment mérite<br />d'être inspecté correctement.
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
              Devis gratuit, réponse sous 24h. Aucun engagement.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-background font-bold px-10 py-5 rounded-full hover:bg-white transition-all duration-200 text-base shadow-xl shadow-accent/20"
            >
              Demander un devis gratuit <ArrowRight size={16} />
            </a>
          </Reveal>
        </section>

      </div>
    </div>
  );
};

