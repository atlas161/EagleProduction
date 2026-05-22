import React, { useState, useEffect, Fragment } from 'react';
import { Film, Check, Car, Camera, Usb, ArrowRight, Monitor, Search, ShieldCheck, X, Timer, CloudSun, Clock, LifeBuoy, MapPinned, Building2, Home, Smartphone, Activity, Mountain, Users } from 'lucide-react';
import { Transition } from '@headlessui/react';
import { Reveal } from './Reveal';
import essentielImg from '../media/images_formules/IMG_3658.webp';
import altitudeImg from '../media/images_formules/IMG_4258.webp';

export const Services: React.FC = () => {
  const [showExtras, setShowExtras] = useState(false);

  useEffect(() => {
    if (showExtras) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showExtras]);

  const handleServiceSelect = () => {
    window.location.href = '/contact';
  };

  const closeExtras = () => {
    setShowExtras(false);
  };

  const handleSpecificProjectClick = () => {
    closeExtras();
    setTimeout(() => {
      window.location.href = '/contact';
    }, 300); 
  };

  const productionPages = [
    {
      icon: Home,
      title: 'Immobilier',
      description: 'Vente / location : photos aériennes, plans drone 4K, vidéo immobilière montée, formats annonces et réseaux.',
      href: '/immobilier-drone',
      highlight: true,
    },
    {
      icon: Users,
      title: 'Événementiel',
      description: "Soirées d’entreprise, souvenirs : teaser + film, formats courts, livraison propre et rapide.",
      href: '/evenementiel',
      highlight: true,
    },
    {
      icon: MapPinned,
      title: 'Suivi de chantier',
      description: 'BTP : comparatifs, points fixes, orthophotos, organisation des livrables, rapport PDF illustré.',
      href: '/chantier',
    },
    {
      icon: Building2,
      title: 'Inspection toiture & bâtiment',
      description: 'Toitures, façades, structures : photos HD, vues 4K, synthèse, rapport PDF illustré.',
      href: '/inspection',
    },
    {
      icon: Smartphone,
      title: 'Reels & Shorts',
      description: 'Réseaux sociaux : tournage drone + au sol, montage vertical 9:16, sous-titres, déclinaisons.',
      href: '/reels-shorts',
    },
    {
      icon: Activity,
      title: 'Sport & action',
      description: "Sport auto, compétitions, entraînements : plans d’action, montage rythmé, versions prêtes à publier.",
      href: '/sport-action',
    },
    {
      icon: Mountain,
      title: 'Photo & vidéo',
      description: 'Paysages, contenus cinématiques : cadrage, colorimétrie, rendu premium.',
      href: '/photo-video',
    },
  ] as const;
  return (
    <div className="bg-background py-32 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Prestations aériennes</span>
            <h2 id="services-title" className="scroll-mt-20 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-textPrimary to-textPrimary/60 mb-6">
              Prestations drone & vidéo
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Télépilote <span className="text-white">drone certifié</span> à Angoulême (Charente), Eagle Production crée des contenus <span className="text-white">photo</span> et <span className="text-white">vidéo 4K</span> pour l’<span className="text-white">immobilier</span>, le <span className="text-white">BTP</span> (inspection de toiture, suivi de chantier), les <span className="text-white">réseaux sociaux</span> (Reels / Shorts / TikTok), le <span className="text-white">sport</span> et l’<span className="text-white">événementiel</span>. Résultat : des livrables clairs, propres, et prêts à publier.
            </p>
            
            {/* Certification Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm lg:hover:bg-accent/20 transition-colors cursor-default shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <ShieldCheck size={18} />
              <span>Vols opérés par télépilote certifié (diplômé d'État)</span>
            </div>
          </Reveal>
        </div>
        
        {/* Pricing Cards (Drone & Audiovisuel) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          {/* Card 1: TOURNAGE */}
          <Reveal delay={100} className="h-full">
            <div 
              onClick={handleServiceSelect}
              className="group h-full relative bg-surfaceHighlight/30 backdrop-blur-xl border border-accent/10 rounded-3xl p-6 lg:hover:bg-surfaceHighlight/50 lg:hover:border-accent/25 transition-all duration-500 lg:hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src={essentielImg} alt="Tournage drone professionnel - Prise de vue aérienne 4K" className="absolute inset-0 w-full h-full object-cover opacity-60" style={{ objectPosition: '50% 100%' }} loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-white/5 text-textPrimary">
                  <Camera size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">Tournage</h3>
              </div>
              
              <div className="flex items-end border-b border-accent/10 pb-4 mb-8 relative z-10">
                <span className="text-4xl font-bold text-textPrimary">160€</span>
                <span className="text-textSecondary ml-2 mb-1">/ heure</span>
              </div>

              <div className="mb-6 relative z-10">
                <p className="text-white font-medium mb-4">Prestation complète incluant :</p>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                    <Check size={18} className="text-textPrimary mt-0.5 shrink-0" />
                    <span>Prises de vue aériennes haute résolution (photos & vidéos par drone)</span>
                  </li>
                  <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                    <Check size={18} className="text-textPrimary mt-0.5 shrink-0" />
                    <span>Tournage vidéo complémentaire avec caméra au sol selon les besoins du projet</span>
                  </li>
                  <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                    <Check size={18} className="text-textPrimary mt-0.5 shrink-0" />
                    <span>Gestion intégrale des démarches administratives et autorisations de vol spécifiques</span>
                  </li>
                  <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                    <Check size={18} className="text-textPrimary mt-0.5 shrink-0" />
                    <span>Mise à disposition de matériel professionnel de pointe et couverture par assurance RC Pro</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto space-y-5 relative z-10 pt-6 border-t border-accent/10">
                <div className="flex gap-3 items-start p-3 bg-accent/5 rounded-xl border border-accent/10">
                  <Timer size={20} className="text-textPrimary shrink-0 mt-0.5" />
                  <p className="text-sm text-white/80 leading-relaxed">Toute prestation de tournage est facturée avec un minimum d'engagement d'une heure.</p>
                </div>
                <div className="flex gap-3 items-start p-3 bg-accent/5 rounded-xl border border-accent/10">
                  <CloudSun size={20} className="text-textPrimary shrink-0 mt-0.5" />
                  <p className="text-sm text-white/80 leading-relaxed">Les vols étant soumis aux conditions météorologiques, la prestation pourra être reportée sans frais supplémentaires en cas de météo défavorable.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: MONTAGE */}
          <Reveal delay={300} className="h-full">
            <div 
              onClick={handleServiceSelect}
              className="group h-full relative bg-surfaceHighlight border border-accent/30 rounded-3xl p-6 shadow-2xl shadow-accent/5 z-10 transition-all duration-500 lg:hover:border-accent/50 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src={altitudeImg} alt="Montage vidéo professionnel - Post-production drone" className="absolute inset-0 w-full h-full object-cover opacity-60" style={{ objectPosition: '50% 40%' }} loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-white/5 text-textPrimary">
                  <Film size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">Montage vidéo</h3>
              </div>
              
              <div className="flex items-end border-b border-accent/15 pb-4 mb-8 relative z-10">
                <span className="text-4xl font-bold text-accent">60€</span>
                <span className="text-textSecondary ml-2 mb-1">/ heure</span>
              </div>

              <div className="mb-6 relative z-10">
                <p className="text-white font-medium mb-4">Prestation sur-mesure incluant :</p>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                    <Check size={18} className="text-accent mt-0.5 shrink-0" />
                    <span>Montage vidéo clé en main (dérushage, colorimétrie, mixage audio)</span>
                  </li>
                  <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                    <Check size={18} className="text-accent mt-0.5 shrink-0" />
                    <span>Flexibilité totale avec la possibilité de modifier le montage jusqu'à 3 fois</span>
                  </li>
                  <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                    <Check size={18} className="text-accent mt-0.5 shrink-0" />
                    <span>Respect strict de votre cahier des charges (style, format adapté aux réseaux, musique)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto space-y-6 relative z-10 pt-6 border-t border-accent/15">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-accent/5 rounded-xl border border-accent/15 flex flex-col items-center text-center">
                    <Usb size={24} className="text-accent mb-2" />
                    <span className="text-sm font-medium text-white mb-1">Support physique</span>
                    <span className="text-xs text-white/70">Clé USB : 12€</span>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-xl border border-accent/15 flex flex-col items-center text-center">
                    <Clock size={24} className="text-accent mb-2" />
                    <span className="text-sm font-medium text-white mb-1">Délais moyens</span>
                    <span className="text-xs text-white/70">5 à 10 jours ouvrés</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="border-t border-white/[0.04] pt-20 mb-16">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Eagle Production</span>
              <h3 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-textPrimary to-textPrimary/60 leading-tight pb-2">
                Choisissez votre prestation
              </h3>
              <p className="text-lg text-textSecondary max-w-3xl mx-auto font-light mt-6">
                Cliquez sur la prestation qui correspond à votre besoin : cas d’usage, livrables et méthode. Une navigation simple, et une structure claire pour le référencement.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productionPages.map((p) => {
                const Icon = p.icon;
                const cardClass = p.highlight
                  ? 'bg-gradient-to-b from-accent/12 to-surfaceHighlight/15 border-accent/25 hover:border-accent/50'
                  : 'bg-surfaceHighlight/20 border-white/[0.06] hover:border-white/[0.14]';
                return (
                  <a
                    key={p.href}
                    href={p.href}
                    className={`${cardClass} group block rounded-3xl border p-6 transition-all duration-300 hover:bg-surfaceHighlight/25 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40`}
                    aria-label={`Ouvrir la page ${p.title}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-accent" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-white font-extrabold text-base leading-tight">{p.title}</div>
                        <div className="mt-2 text-sm text-white/60 leading-relaxed">{p.description}</div>
                      </div>
                      <span className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/50 group-hover:text-accent group-hover:border-accent/25 group-hover:bg-accent/10 transition-all">
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-2xl px-7 py-6">
              <div>
                <div className="text-white font-bold text-lg mb-1">Vous ne savez pas quoi choisir ?</div>
                <div className="text-white/40 text-sm">Dites-nous votre objectif, on propose la bonne formule et les bons livrables.</div>
              </div>
              <a
                href="/eagle-production"
                className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent font-semibold px-6 py-3 rounded-full hover:bg-accent/25 hover:border-accent/50 transition-all duration-200 text-sm shrink-0"
              >
                Voir la page Eagle Production <ArrowRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
        {/* Extras Modal */}
        <Transition
          show={showExtras}
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div 
            className="fixed inset-0 z-[100] bg-background/20 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setShowExtras(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowExtras(false);
              }}
            >
              <X size={32} />
            </button>
            <div 
              className="max-w-4xl w-full max-h-[80vh] bg-surface rounded-2xl overflow-hidden shadow-xl border border-white/[0.06]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 md:p-6">
                <div className="flex flex-row items-center justify-between mb-4 border-b border-white/[0.04] pb-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-accent rounded-full"></div>
                    Options
                  </h4>
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation();
                      setShowExtras(false);
                    }}
                    className="bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2"
                  >
                    <X size={14} />
                    Fermer
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-3 bg-background/50 rounded-xl border border-white/5 lg:group-hover:border-accent/30 transition-all group">
                    <div className="p-2.5 bg-white/5 rounded-lg lg:group-hover:bg-accent/20 transition-colors">
                      <Car className="w-5 h-5 text-textSecondary lg:group-hover:text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-textPrimary">0,50€ <span className="text-[10px] text-textSecondary font-normal">/km</span></span>
                      <span className="text-[10px] text-textSecondary font-medium tracking-wide">Frais kilométriques</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-background/50 rounded-xl border border-white/5 lg:group-hover:border-accent/30 transition-all group">
                    <div className="p-2.5 bg-white/5 rounded-lg lg:group-hover:bg-accent/20 transition-colors">
                      <Usb className="w-5 h-5 text-textSecondary lg:group-hover:text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-textPrimary">12€ <span className="text-[10px] text-textSecondary font-normal">/clé</span></span>
                      <span className="text-[10px] text-textSecondary font-medium tracking-wide">Support clé USB</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-background/50 rounded-xl border border-white/5 lg:group-hover:border-accent/30 transition-all group">
                    <div className="p-2.5 bg-white/5 rounded-lg lg:group-hover:bg-accent/20 transition-colors">
                      <Film className="w-5 h-5 text-textSecondary lg:group-hover:text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-textPrimary">5 à 10 <span className="text-[10px] text-textSecondary font-normal">jours</span></span>
                      <span className="text-[10px] text-textSecondary font-medium tracking-wide">Délai moyen de livraison</span>
                    </div>
                  </div>
                  <div 
                    onClick={handleSpecificProjectClick}
                    className="flex items-center justify-between p-3 bg-accent/10 rounded-xl border border-accent/20 lg:hover:bg-accent/20 transition-all cursor-pointer group"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-accent text-sm">Un projet spécifique ?</span>
                      <span className="text-[10px] text-accent/70 font-medium">Demandez un devis sur mesure</span>
                    </div>
                    <div className="bg-accent text-background p-2 rounded-full lg:group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>

        <div id="studio" className="border-t border-white/[0.04] pt-20">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Présence en ligne</span>
              <h3 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-textPrimary to-textPrimary/60 leading-tight pb-2">Eagle Digital</h3>
              <p className="text-lg text-textSecondary max-w-2xl mx-auto font-light mt-6">
                Site web, SEO local, maintenance : un site rapide qui rank, et une présence en ligne qui convertit.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: <Monitor size={22} className="text-indigo-400" />,
                  iconBg: 'bg-indigo-500/10 border-indigo-500/20',
                  border: 'border-indigo-500/15 hover:border-indigo-400/35',
                  accent: 'text-indigo-400',
                  title: 'Création de Site Web',
                  desc: 'Site vitrine, multi-pages ou e-commerce. Domaine, hébergement, e-mails pro, RGPD inclus an 1.',
                  price: 'Dès 1 200€',
                  href: '/eagle-digital/creation-site-web',
                },
                {
                  icon: <Search size={22} className="text-teal-400" />,
                  iconBg: 'bg-teal-500/10 border-teal-500/20',
                  border: 'border-teal-500/15 hover:border-teal-400/35',
                  accent: 'text-teal-400',
                  title: 'SEO & Visibilité',
                  desc: 'Audit SEO, fiche Google Business, contenus, e-mailing : être trouvé localement et générer des demandes.',
                  price: 'Dès 150€',
                  href: '/eagle-digital/referencement-seo',
                },
                {
                  icon: <LifeBuoy size={22} className="text-rose-400" />,
                  iconBg: 'bg-rose-500/10 border-rose-500/20',
                  border: 'border-rose-500/15 hover:border-rose-400/35',
                  accent: 'text-rose-400',
                  title: 'Maintenance',
                  desc: 'Sauvegardes, sécurité, mises à jour, support humain. Un site fiable, rapide, et suivi dans le temps.',
                  price: 'Dès 49€/mois',
                  href: '/eagle-digital/maintenance',
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`bg-surfaceHighlight/15 border rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 ${item.border} focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40`}
                  aria-label={`Ouvrir : ${item.title}`}
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.iconBg}`}>{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                  <div className={`text-xs font-bold tracking-wide ${item.accent}`}>{item.price}</div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-2xl px-7 py-6">
              <div>
                <div className="text-white font-bold text-lg mb-1">Tout savoir sur Eagle Digital</div>
                <div className="text-white/40 text-sm">Site web, SEO, maintenance : prestations, process et tarifs.</div>
              </div>
              <a
                href="/eagle-digital"
                className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent font-semibold px-6 py-3 rounded-full hover:bg-accent/25 hover:border-accent/50 transition-all duration-200 text-sm shrink-0"
              >
                En savoir plus <ArrowRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
};
