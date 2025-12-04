import React, { useState } from 'react';
import { HardDrive, Film, Clapperboard, Check, Car, Camera, Usb, ArrowRight, Monitor, Palette, Search, Share2, ShieldCheck, X } from 'lucide-react';
import { Reveal } from './Reveal';
import essentielImg from '../media/images_formules/Essentiel.webp';
import altitudeImg from '../media/images_formules/Altitude.webp';
import horizonImg from '../media/images_formules/Horizon.webp';
import identiteVisuelImg from '../media/images_formules/Identitévisuel.webp';
import presenceDigitaleImg from '../media/images_formules/Présence_digitalev2.webp';
import reseauxSociauxImg from '../media/images_formules/RéseauxSociaux.webp';


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
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Prestations aériennes</span>
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


        {/* --- SECONDARY SERVICES: STUDIO --- */}
        <div id="studio" className="border-t border-white/5 pt-20">
          {/* Header */}
          <Reveal>
          <div className="text-center mb-10">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Au-delà du drone</span>
            <h3 className="text-4xl md:text-5xl font-bold text-textPrimary">Nos services complémentaires</h3>
          </div>
          </Reveal>

          {/* Carte Montage vidéo - Compacte et centrée */}
          <Reveal delay={100}>
            <div className="mb-10 max-w-3xl mx-auto">
              <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-accent/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  {/* Colonne gauche */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                        <Film size={24} />
                      </div>
                      <h4 className="text-xl font-bold text-textPrimary">Montage vidéo</h4>
                    </div>
                    <p className="text-white/80 text-[15px] mb-2">Montage intégral pour une vidéo 100% sur-mesure :</p>
                    <ul className="space-y-1.5 text-white/70 text-[13px]">
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" />Montage dynamique</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" />Étalonnage professionnel</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" />Sound design et mixage immersif</li>
                    </ul>
                  </div>
                  {/* Colonne droite */}
                  <div className="shrink-0 flex flex-col items-start md:items-end gap-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-accent">50€</span>
                      <span className="text-base text-textSecondary font-medium">/heure</span>
                    </div>
                    <div className="flex flex-col gap-2 w-[200px]">
                      <div className="bg-accent/5 border border-accent/20 rounded-lg px-3 py-2 flex items-center gap-2 w-full">
                        <Usb size={14} className="text-accent shrink-0" />
                        <p className="text-[11px] text-textSecondary leading-tight text-left">Support USB : <span className="text-textPrimary font-bold">12€</span> /clé</p>
                      </div>
                      <div className="bg-accent/5 border border-accent/20 rounded-lg px-3 py-2 flex items-center gap-2 w-full">
                        <Search size={14} className="text-accent shrink-0" />
                        <p className="text-[11px] text-textSecondary leading-tight text-left">Devis précis établi après analyse de votre demande.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stack des 3 services (Vertical) */}
          <div className="flex flex-col gap-8">
              
              {/* Carte Identité visuelle (DORÉ / ACCENT) */}
              <Reveal>
                <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-amber-400/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col lg:flex-row h-full relative z-10">
                  {/* Colonne Contenu */}
                  <div className="flex-1 p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                        <Palette size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-textPrimary">Identité visuelle</h4>
                    </div>
                    
                    {/* Liste des prestations avec prix */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center pt-1.5 pb-2 border-b border-white/5">
                        <span className="text-white/80 text-[15px]">Création de Logo sur-mesure</span>
                        <span className="text-textPrimary font-bold text-base">600€</span>
                      </div>
                      <div className="flex justify-between items-center pt-1.5 pb-2 border-b border-white/5">
                        <span className="text-white/80 text-[15px]">Charte graphique complète</span>
                        <span className="text-textPrimary font-bold text-base">400€</span>
                      </div>
                      <div className="flex justify-between items-center pt-1.5 pb-2 border-b border-white/5">
                        <span className="text-white/80 text-[15px]">Templates réseaux sociaux prêts à publier</span>
                        <span className="text-textPrimary font-bold text-base">110€</span>
                      </div>
                      <div className="flex justify-between items-start pt-1.5 pb-2 border-b border-white/5">
                        <div>
                          <span className="text-white/80 text-[15px]">Design de supports de communication</span>
                          <p className="text-white/40 text-[13px] mt-0.5">Cartes, flyers, affiches, kakemonos, brochures</p>
                        </div>
                        <span className="text-textPrimary font-bold text-base">90€</span>
                      </div>
                      <div className="flex justify-between items-start pt-1.5 pb-2 border-b border-white/5">
                        <span className="text-white/80 text-[15px]">Signature mail professionnelle</span>
                        <div className="text-right">
                          <span className="text-textPrimary font-bold text-base">100€</span>
                          <p className="text-white/40 text-[11px]">+15€ par collab</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Colonne Image (Droite) */}
                  <div className="lg:w-1/3 h-[250px] lg:h-auto lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/5 overflow-hidden">
                    <img src={identiteVisuelImg} alt="Identité visuelle" className="w-full h-full object-cover object-center" style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }} loading="lazy" decoding="async" />
                  </div>
                </div>
                </div>
              </Reveal>

              {/* Carte Présence digitale (BLEU VIOLET / INDIGO) */}
              <Reveal>
                <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-indigo-400/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col lg:flex-row h-full relative z-10">
                  {/* Colonne Contenu */}
                  <div className="flex-1 p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                        <Monitor size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-textPrimary">Présence digitale</h4>
                    </div>
                    
                    {/* Liste des prestations avec prix */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center pt-1.5 pb-2 border-b border-white/5">
                        <span className="text-white/80 text-[15px]">Création de site internet vitrine clé en main</span>
                        <span className="text-textPrimary font-bold text-base">500€</span>
                      </div>
                      <div className="flex justify-between items-start pt-1.5 pb-2 border-b border-white/5">
                        <div>
                          <span className="text-white/80 text-[15px]">Fiche Google et pack visibilité locale</span>
                          <p className="text-white/40 text-[13px] mt-0.5">Fiche google business profile, solocal</p>
                        </div>
                        <span className="text-textPrimary font-bold text-base">250€</span>
                      </div>
                      <div className="flex justify-between items-center pt-1.5 pb-2 border-b border-white/5">
                        <span className="text-white/80 text-[15px]">Référencement SEO</span>
                        <span className="text-textPrimary font-bold text-base">250€</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Colonne Image (Droite) */}
                  <div className="lg:w-1/3 h-[250px] lg:h-auto lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/5 overflow-hidden">
                    <img src={presenceDigitaleImg} alt="Présence digitale" className="w-full h-full object-cover object-center" style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }} loading="eager" decoding="sync" />
                  </div>
                </div>
                </div>
              </Reveal>

              {/* Carte Réseaux sociaux */}
              <Reveal>
                <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-teal-400/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col lg:flex-row h-full relative z-10">
                  {/* Colonne Contenu */}
                  <div className="flex-1 p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400">
                        <Share2 size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-textPrimary">Réseaux sociaux</h4>
                    </div>
                    
                    {/* Liste des prestations avec prix */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center pt-1.5 pb-2 border-b border-white/5">
                        <span className="text-white/80 text-[15px]">Mise en place Instagram / Facebook / TikTok</span>
                        <span className="text-textPrimary font-bold text-base">250€</span>
                      </div>
                      <div className="flex justify-between items-center pt-1.5 pb-2 border-b border-white/5">
                        <span className="text-white/80 text-[15px]">Stratégie de contenu et templates</span>
                        <span className="text-textPrimary font-bold text-base">170€</span>
                      </div>
                      <div className="flex justify-between items-start pt-1.5 pb-2 border-b border-white/5">
                        <div>
                          <span className="text-white/80 text-[15px]">Shooting photo et tournage vidéo</span>
                          <p className="text-white/40 text-[13px] mt-0.5">Drone + au sol</p>
                        </div>
                        <span className="text-textPrimary font-bold text-[11px] uppercase tracking-wider mt-1 ml-4">Sur demande</span>
                      </div>
                      <div className="flex justify-between items-center pt-1.5 pb-2 border-b border-white/5">
                        <span className="text-white/80 text-[15px]">Montage courts formats, reels, tiktok et films d'entreprise</span>
                        <span className="text-textPrimary font-bold text-base ml-4">50€/h</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Colonne Image (Droite) */}
                  <div className="lg:w-1/3 h-[250px] lg:h-auto lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/5 overflow-hidden">
                    <img src={reseauxSociauxImg} alt="Réseaux sociaux" className="w-full h-full object-cover object-center" style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }} loading="eager" decoding="sync" />
                  </div>
                </div>
                </div>
              </Reveal>

          </div>
        </div>

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
