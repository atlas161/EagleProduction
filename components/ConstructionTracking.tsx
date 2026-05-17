import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight, MapPinned, FileText, RefreshCw, CheckCircle2, ChevronRight } from 'lucide-react';

export const ConstructionTracking: React.FC = () => {
  return (
    <div className="bg-background text-textPrimary">

      {/* ── Fond subtil ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-60 -right-60 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[140px]" />
      </div>

      <div className="relative z-10">

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Texte - gauche */}
            <div>
              <Reveal>
                <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-5">
                  Suivi de chantier par drone
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
                  Votre chantier,<br />
                  <span className="text-accent">vu d'en haut.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-base text-white/50 leading-relaxed max-w-md">
                  Orthophotos, comparatifs T-1/T, rapport PDF illustré : suivez
                  l'avancement de vos travaux depuis votre bureau, en toute précision.
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
                  {['Certifié DGAC', 'RC Pro', 'Orthophotos HD', 'Rapport PDF', 'Charente'].map((b) => (
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
                    <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-white/40 text-xs tracking-wider uppercase">Suivi actif</span>
                  </div>
                  <div className="text-white font-bold text-xl mb-1">Résidence · Gros-œuvre</div>
                  <div className="text-white/40 text-sm mb-5">Angoulême - Charente (16)</div>
                  <div className="space-y-2">
                    {[
                      { label: 'Session 1', date: 'Janv. 2025', pct: 20 },
                      { label: 'Session 4', date: 'Avr. 2025', pct: 65 },
                      { label: 'Session 7', date: 'Juil. 2025', pct: 90 },
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="flex justify-between text-xs text-white/40 mb-1">
                          <span>{s.label}</span><span>{s.date}</span>
                        </div>
                        <div className="h-1.5 bg-white/6 rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: `${s.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 2 stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/8 border border-accent/20 rounded-2xl p-5">
                    <div className="text-accent font-extrabold text-2xl">T-1/T</div>
                    <div className="text-white/50 text-xs mt-1">Comparatifs inclus</div>
                  </div>
                  <div className="bg-surfaceHighlight/20 border border-white/8 rounded-2xl p-5">
                    <div className="text-white font-extrabold text-2xl">48h</div>
                    <div className="text-white/50 text-xs mt-1">Livrables envoyés</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3 BÉNÉFICES
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
                  icon: <MapPinned size={28} className="text-accent" />,
                  title: 'Orthophotos géoréférencées',
                  desc: 'Vue top-down HD superposable sur vos plans. Mesurez, vérifiez, documentez - depuis votre bureau.',
                },
                {
                  icon: <RefreshCw size={28} className="text-accent" />,
                  title: 'Comparatifs T-1 / T',
                  desc: 'Même cadrage, même altitude, à chaque session. Visualisez l\'évolution du chantier en un coup d\'œil.',
                },
                {
                  icon: <FileText size={28} className="text-accent" />,
                  title: 'Rapport PDF illustré',
                  desc: 'Synthèse claire avec photos annotées, légendes et recommandations. Parfait pour MOE, MOA et assureurs.',
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
            FRÉQUENCES - choix du rythme
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Fréquences & formules</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                À votre rythme.
              </h2>
              <p className="text-white/40 text-lg max-w-xl mx-auto mb-16">
                Un seul vol ou un suivi sur 18 mois - chaque formule est sur devis, adaptée à votre chantier.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Ponctuel',
                  sub: 'Une intervention unique',
                  points: ['Plan de vol sur-mesure', 'Vues globales + détails', 'Rapport PDF illustré'],
                  highlight: false,
                },
                {
                  title: 'Mensuel',
                  sub: 'Suivi régulier classique',
                  points: ['Même cadrage chaque mois', 'Comparatifs T-1/T', 'Orthophoto géoréférencée'],
                  highlight: true,
                },
                {
                  title: 'Hebdomadaire',
                  sub: 'Chantier à forte cadence',
                  points: ['Points récurrents définis', 'Mise à jour sécurité', 'Flux médias organisé'],
                  highlight: false,
                },
              ].map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className={`rounded-3xl p-8 flex flex-col gap-5 h-full text-left border transition-all duration-300 ${
                    p.highlight
                      ? 'bg-accent/10 border-accent/30 shadow-lg shadow-accent/10'
                      : 'bg-surfaceHighlight/15 border-white/6 hover:border-white/15'
                  }`}>
                    <div>
                      <div className={`text-xl font-bold mb-1 ${p.highlight ? 'text-accent' : 'text-white'}`}>{p.title}</div>
                      <div className="text-white/40 text-sm">{p.sub}</div>
                    </div>
                    <ul className="space-y-2.5 flex-1">
                      {p.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-white/65">
                          <CheckCircle2 size={14} className="text-accent mt-0.5 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <a href="/contact" className={`inline-flex items-center gap-2 font-semibold text-sm rounded-full px-5 py-2.5 transition-all duration-200 ${
                      p.highlight
                        ? 'bg-accent text-background hover:bg-white'
                        : 'bg-white/6 text-white/70 border border-white/10 hover:border-white/25 hover:text-white'
                    }`}>
                      Demander un devis <ArrowRight size={13} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROCESSUS
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="text-center text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Comment ça marche</p>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">
                On gère tout. Vous supervisez.
              </h2>
            </Reveal>
            <div className="space-y-0">
              {[
                { n: '01', title: 'Vous décrivez votre chantier', desc: 'Taille, zone, fréquence souhaitée, livrables attendus. Devis gratuit sous 24h.' },
                { n: '02', title: 'On prépare la mission', desc: 'Étude DGAC, plan de vol, points de repère définis, créneau météo optimal choisi.' },
                { n: '03', title: 'Le drone survole', desc: 'Captation complète selon le plan préétabli - vues globales, détails, points critiques.' },
                { n: '04', title: 'Vous recevez vos livrables', desc: 'Rapport PDF, orthophoto, médias organisés par date et zone. Lien sécurisé sous 48h.' },
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
            TYPES DE CHANTIERS
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-5">Types de projets</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tous vos chantiers.</h2>
              <p className="text-white/40 text-lg mb-16">Construction neuve, rénovation, lotissement - chaque projet mérite une documentation précise.</p>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Construction neuve', sub: 'Fondations aux finitions' },
                { label: 'Rénovation', sub: 'Avant/après, DDT, assurances' },
                { label: 'Extension / surélévation', sub: 'Interfaces, structures' },
                { label: 'Lotissement', sub: 'VRD, alignements, phases' },
                { label: 'Travaux publics', sub: 'Voiries, réseaux, terrassements' },
                { label: 'Maîtrise d\'œuvre', sub: 'Rapports MOE/MOA, réserves' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 40}>
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
            CTA FINAL
        ══════════════════════════════════════════ */}
        <section className="py-32 px-6 text-center">
          <Reveal>
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6">Prêt à démarrer ?</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Documentez votre chantier<br />comme jamais auparavant.
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
              Devis gratuit sous 24h. Aucun engagement, tout adapté à votre projet.
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
