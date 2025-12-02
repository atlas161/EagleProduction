
import React, { useState, ReactElement } from 'react';
import { HardDrive, Film, Clapperboard, Check, Car, Camera, Usb, ArrowRight, Monitor, PenTool, Palette, Terminal, LayoutTemplate, Search, RefreshCw, Share2, Wrench, GraduationCap, AppWindow, ShieldCheck, X } from 'lucide-react';
import { Reveal } from './Reveal';
import essentielImg from '../media/images_formules/Essentiel.webp';
import altitudeImg from '../media/images_formules/Altitude.webp';
import horizonImg from '../media/images_formules/Horizon.webp';


export const Services: React.FC = () => {
  const [showExtras, setShowExtras] = useState(false);
  const [closingExtras, setClosingExtras] = useState(false);
  const handleServiceClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background py-32 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <h2 id="services-title" className="scroll-mt-20 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-textPrimary to-textPrimary/60 mb-6">
              Nos formules drone
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Des solutions adaptées à chaque besoin.
            </p>
            
            {/* Certification Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm hover:bg-accent/20 transition-colors cursor-default shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <ShieldCheck size={18} />
              <span>Vols opérés par télépilote certifié (diplômé d'état)</span>
            </div>
          </Reveal>
        </div>

        {/* Pricing Cards (Drone - Main Focus) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
          {/* Card 1: ESSENTIEL */}
          <Reveal delay={100} className="h-full">
            <div 
              onClick={handleServiceClick}
              className="group h-full relative bg-surfaceHighlight/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:bg-surfaceHighlight/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src={essentielImg} alt="Essentiel" className="absolute inset-0 w-full h-full object-cover opacity-60" style={{ objectPosition: '50% 35%' }} />
                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-white/5 text-textPrimary">
                  <HardDrive size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">Essentiel</h3>
              </div>
              <p className="text-white text-sm leading-relaxed mb-8 relative z-10">
                Images drone brutes de haute qualité, prêtes pour votre post‑production.
              </p>
              
              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <span className="text-textPrimary font-medium">1h de prise de vue</span>
                  <span className="text-3xl font-bold text-textPrimary">50€</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <span className="text-textPrimary font-medium">2h de prise de vue</span>
                  <span className="text-3xl font-bold text-textPrimary">100€</span>
                </div>
              </div>

              <ul className="space-y-3 relative z-10">
                <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                  <Check size={16} className="text-textPrimary mt-0.5" />
                  <span>Images brutes non retouchées</span>
                </li>
                <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                  <Check size={16} className="text-textPrimary mt-0.5" />
                  <span>Liberté totale de montage</span>
                </li>
                <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                  <Check size={16} className="text-textPrimary mt-0.5" />
                  <span>Livraison rapide des fichiers</span>
                </li>
              </ul>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowExtras(true); }}
                className="relative z-10 mt-auto pt-4 self-center text-accent text-xs md:text-sm font-medium underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-colors"
              >
                Options
              </button>
            </div>
          </Reveal>

          {/* Card 2: ALTITUDE */}
          <Reveal delay={300} className="h-full">
            <div 
              onClick={handleServiceClick}
              className="group h-full relative bg-surfaceHighlight border border-accent/30 rounded-3xl p-6 lg:scale-105 shadow-2xl shadow-accent/5 z-10 transition-all duration-500 hover:border-accent/50 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 bg-accent text-background text-xs font-bold px-3 py-1 rounded-bl-xl z-10">Populaire</div>
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src={altitudeImg} alt="Altitude" className="absolute inset-0 w-full h-full object-cover opacity-60" style={{ objectPosition: '50% 40%' }} />
                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-white/5 text-textPrimary">
                  <Film size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">Altitude</h3>
              </div>
              <p className="text-white text-sm leading-relaxed mb-8 relative z-10">
                Vidéo montée sur mesure, immersive et prête à publier sur vos canaux.
              </p>
              
              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <div>
                      <span className="text-textPrimary font-medium block">Classique</span>
                      <span className="text-xs text-textSecondary">0 à 3 minutes</span>
                  </div>
                  <span className="text-4xl font-bold text-accent">150€</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <div>
                      <span className="text-textPrimary font-medium block">Altitude +</span>
                      <span className="text-xs text-textSecondary">3 à 5 minutes</span>
                  </div>
                  <span className="text-4xl font-bold text-accent">250€</span>
                </div>
              </div>

              <ul className="space-y-3 relative z-10">
                <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                  <Check size={16} className="text-accent mt-0.5" />
                  <span>Montage dynamique et rythmé</span>
                </li>
                <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                  <Check size={16} className="text-accent mt-0.5" />
                  <span>Musique libre de droits incluse</span>
                </li>
                <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                  <Check size={16} className="text-accent mt-0.5" />
                  <span>Étalonnage pro, prêt à diffuser</span>
                </li>
              </ul>
              
              <button className="relative z-10 w-full mt-8 bg-textPrimary text-background font-semibold py-3 rounded-xl hover:bg-white transition-colors">
                Choisir altitude
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowExtras(true); }}
                className="relative z-10 mt-auto pt-3 self-center text-accent text-xs md:text-sm font-medium underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-colors"
              >
                Options
              </button>
            </div>
          </Reveal>

          {/* Card 3: HORIZON */}
          <Reveal delay={500} className="h-full">
            <div 
              onClick={handleServiceClick}
              className="group h-full relative bg-surfaceHighlight/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:bg-surfaceHighlight/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src={horizonImg} alt="Horizon" className="absolute inset-0 w-full h-full object-cover opacity-60" style={{ objectPosition: '70% 60%' }} />
                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-white/5 text-textPrimary">
                  <Clapperboard size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">Horizon</h3>
              </div>
              <p className="text-white text-sm leading-relaxed mb-8 relative z-10">
                Réalisation complète: écriture, tournage et montage pour un rendu cinéma.
              </p>
              
              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <div>
                      <span className="text-textPrimary font-medium block">Classique</span>
                      <span className="text-xs text-textSecondary">5 à 10 minutes</span>
                  </div>
                  <span className="text-3xl font-bold text-textPrimary">500€</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <div>
                      <span className="text-textPrimary font-medium block">Horizon +</span>
                      <span className="text-xs text-textSecondary">10 à 20 minutes</span>
                  </div>
                  <span className="text-3xl font-bold text-textPrimary">1000€</span>
                </div>
              </div>

              <ul className="space-y-3 relative z-10">
                <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                  <Check size={16} className="text-accent mt-0.5" />
                  <span>Scénarisation et storytelling</span>
                </li>
                <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                   <Check size={16} className="text-accent mt-0.5" />
                   <span>Montage dynamique inclus</span>
                </li>
                <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                   <Check size={16} className="text-accent mt-0.5" />
                   <span>Musique libre de droits</span>
                </li>
                <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                   <Check size={16} className="text-accent mt-0.5" />
                   <span>Étalonnage couleur professionnel</span>
                </li>
                <li className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                  <Check size={16} className="text-accent mt-0.5" />
                  <span>Sound Design immersif</span>
                </li>
              </ul>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowExtras(true); }}
                className="relative z-10 mt-auto pt-4 self-center text-accent text-xs md:text-sm font-medium underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-colors"
              >
                Options
              </button>
            </div>
          </Reveal>
        </div>
        {/* Extras Modal */}
        {showExtras && (
          <div 
            className={`fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-200 ${closingExtras ? 'opacity-0' : 'opacity-100'}`} 
            onClick={() => {
              setClosingExtras(true);
              setTimeout(() => { setShowExtras(false); setClosingExtras(false); }, 180);
            }}
          >
            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setClosingExtras(true);
                setTimeout(() => { setShowExtras(false); setClosingExtras(false); }, 180);
              }}
            >
              <X size={32} />
            </button>
            <div 
              className={`max-w-4xl w-full max-h-[80vh] bg-surface rounded-2xl overflow-hidden shadow-xl border border-white/10 transform transition-transform duration-200 ${closingExtras ? 'scale-95' : 'scale-100'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 md:p-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-4 border-b border-white/5 pb-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-accent rounded-full"></div>
                    Options & suppléments
                  </h4>
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation();
                      setClosingExtras(true);
                      setTimeout(() => { setShowExtras(false); setClosingExtras(false); }, 180);
                    }}
                    className="text-textSecondary hover:text-white text-xs md:text-sm font-medium"
                  >
                    Fermer
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-3 bg-background/50 rounded-xl border border-white/5 hover:border-accent/30 transition-all group">
                    <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Car className="w-5 h-5 text-textSecondary group-hover:text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-textPrimary">0,50€ <span className="text-[10px] text-textSecondary font-normal">/km</span></span>
                      <span className="text-[10px] text-textSecondary font-medium tracking-wide">Déplacement</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-background/50 rounded-xl border border-white/5 hover:border-accent/30 transition-all group">
                    <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Camera className="w-5 h-5 text-textSecondary group-hover:text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-textPrimary">2€ <span className="text-[10px] text-textSecondary font-normal">/unité</span></span>
                      <span className="text-[10px] text-textSecondary font-medium tracking-wide">Photo drone</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-background/50 rounded-xl border border-white/5 hover:border-accent/30 transition-all group">
                    <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Usb className="w-5 h-5 text-textSecondary group-hover:text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-textPrimary">12€ <span className="text-[10px] text-textSecondary font-normal">/clé</span></span>
                      <span className="text-[10px] text-textSecondary font-medium tracking-wide">Support USB</span>
                    </div>
                  </div>
                  <div 
                    onClick={handleServiceClick}
                    className="flex items-center justify-between p-3 bg-accent/10 rounded-xl border border-accent/20 hover:bg-accent/20 transition-all cursor-pointer group"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-accent text-sm">Un projet spécifique ?</span>
                      <span className="text-[10px] text-accent/70 font-medium">Demandez un devis sur mesure</span>
                    </div>
                    <div className="bg-accent text-background p-2 rounded-full group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* --- SECONDARY SERVICES: DIGITAL & IT --- */}
        <Reveal delay={700}>
          <div id="studio" className="border-t border-white/5 pt-16">
            <div className="text-center md:text-left mb-16">
              <span className="text-accent text-xs font-bold tracking-[0.2em] mb-2 block">Au-delà du drone</span>
              <h3 className="text-3xl md:text-4xl font-bold text-textPrimary">Nos services complémentaires</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              <div className="group h-full relative bg-surfaceHighlight/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 transition-colors duration-500 cursor-pointer flex flex-col overflow-hidden min-h-[420px]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/15 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-300">
                    <Film size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-textPrimary">Production vidéo & Création multimédia</h4>
                </div>
                <div className="text-[15px] text-white/80 leading-relaxed mb-4 relative z-10">Transformez vos idées en vidéos qui captent l’attention et racontent une histoire claire.</div>
                <div className="relative z-10 space-y-3 border-t border-white/5 mt-2 pt-4">
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium">
                    <Check size={18} className="text-indigo-300 mt-0.5" />
                    <span>Conception narrative, script et storyboard</span>
                  </div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium">
                    <Check size={18} className="text-indigo-300 mt-0.5" />
                    <span>Prises de vue aériennes (drone)</span>
                  </div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium">
                    <Check size={18} className="text-indigo-300 mt-0.5" />
                    <span>Tournage et direction artistique</span>
                  </div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium">
                    <Check size={18} className="text-indigo-300 mt-0.5" />
                    <span>Montage dynamique pour l'engagement</span>
                  </div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium">
                    <Check size={18} className="text-indigo-300 mt-0.5" />
                    <span>Étalonnage professionnel</span>
                  </div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium">
                    <Check size={18} className="text-indigo-300 mt-0.5" />
                    <span>Optimisation réseaux (formats, sous-titres, miniatures)</span>
                  </div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium">
                    <Check size={18} className="text-indigo-300 mt-0.5" />
                    <span>Sound design et mixage immersif</span>
                  </div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium">
                    <Check size={18} className="text-indigo-300 mt-0.5" />
                    <span>Conseil en stratégie vidéo</span>
                  </div>
                </div>
              </div>
              <div className="group h-full relative bg-surfaceHighlight/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-amber-500/30 transition-colors duration-500 cursor-pointer flex flex-col overflow-hidden min-h-[420px]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-300">
                    <Palette size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-textPrimary">Identité visuelle</h4>
                </div>
                <div className="text-[15px] text-white/80 leading-relaxed mb-4 relative z-10">Donnez à votre marque une identité mémorable et cohérente sur tous vos supports.</div>
                <div className="relative z-10 space-y-3 border-t border-white/5 mt-2 pt-4">
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-amber-300 mt-0.5" /><span>Logo et système de marque</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-amber-300 mt-0.5" /><span>Charte graphique complète (couleurs, typographies, usages)</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-amber-300 mt-0.5" /><span>Templates sociaux prêts à publier</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-amber-300 mt-0.5" /><span>Signature mail professionnelle</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-amber-300 mt-0.5" /><span>Supports print premium (cartes, flyers, affiches, kakemonos, brochures)</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-amber-300 mt-0.5" /><span>Guide d’utilisation pour une cohérence durable</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-amber-300 mt-0.5" /><span>Modèles de documents et présentations prêts à l’emploi (Word, PowerPoint...)</span></div>
                </div>
              </div>
              <div className="group h-full relative bg-surfaceHighlight/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-slate-500/30 transition-colors duration-500 cursor-pointer flex flex-col overflow-hidden min-h-[420px]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-slate-500/15 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute inset-0 bg-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-3 rounded-2xl bg-slate-500/20 text-slate-300">
                    <Monitor size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-textPrimary">Présence digitale</h4>
                </div>
                <div className="text-[15px] text-white/80 leading-relaxed mb-4 relative z-10">Créez un site rapide, sécurisé et optimisé pour être trouvé sur Google.</div>
                <div className="relative z-10 space-y-3 border-t border-white/5 mt-2 pt-4">
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-slate-300 mt-0.5" /><span>Création ou refonte de site vitrine</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-slate-300 mt-0.5" /><span>Intégration immersive photo/vidéo drone et au sol</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-slate-300 mt-0.5" /><span>Référencement SEO et rédaction stratégique</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-slate-300 mt-0.5" /><span>Optimisation vitesse et mobile</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-slate-300 mt-0.5" /><span>Mesure et visibilité locale (Fiche Google Business Profile)</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-slate-300 mt-0.5" /><span>Maintenance, sauvegardes et conformité RGPD</span></div>
                </div>
              </div>
              <div className="group h-full relative bg-surfaceHighlight/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-teal-500/30 transition-colors duration-500 cursor-pointer flex flex-col overflow-hidden min-h-[420px]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/15 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-3 rounded-2xl bg-teal-500/20 text-teal-300">
                    <Share2 size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-textPrimary">Réseaux sociaux</h4>
                </div>
                <div className="text-[15px] text-white/80 leading-relaxed mb-4 relative z-10">Faites grandir votre audience avec un contenu régulier qui donne envie d’agir.</div>
                <div className="relative z-10 space-y-3 border-t border-white/5 mt-2 pt-4">
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-teal-300 mt-0.5" /><span>Mise en place Instagram / Facebook / TikTok</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-teal-300 mt-0.5" /><span>Charte éditoriale et templates</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-teal-300 mt-0.5" /><span>Planning et stratégie social media</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-teal-300 mt-0.5" /><span>Captation photo/vidéo (drone + au sol)</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-teal-300 mt-0.5" /><span>Montage courts formats, reels, corporate</span></div>
                  <div className="flex gap-3 text-[15px] text-white/90 leading-relaxed font-medium"><Check size={18} className="text-teal-300 mt-0.5" /><span>Reporting et optimisation mensuelle</span></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

// Enhanced Service Card Component
const ServiceCard = ({ title, price, desc, subPrice, icon, isFullHeight }: { title: string, price: string, desc: string, subPrice?: string, icon?: React.ReactNode, isFullHeight?: boolean }) => (
  <div 
    onClick={() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className={`group bg-surfaceHighlight/30 hover:bg-surfaceHighlight border border-white/5 hover:border-accent/20 rounded-xl p-5 transition-all duration-300 cursor-pointer ${isFullHeight ? 'h-full' : ''}`}
  >
     <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
            {icon && <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent/10 transition-colors">{icon}</div>}
            <h5 className="font-bold text-textPrimary group-hover:text-white transition-colors text-base">{title}</h5>
        </div>
        <div className="text-right">
             <span className="font-bold text-accent">{price}</span>
        </div>
     </div>
     <p className="text-sm text-textSecondary leading-relaxed">{desc}</p>
     {subPrice && <div className="mt-2 pt-2 border-t border-white/5 text-[11px] text-accent/80 font-medium tracking-wide">{subPrice}</div>}
  </div>
);
