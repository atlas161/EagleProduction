import React, { useState, useEffect, Fragment } from 'react';
import { HardDrive, Film, Clapperboard, Check, Car, Camera, Usb, ArrowRight, Monitor, Palette, Search, Share2, ShieldCheck, X } from 'lucide-react';
import { Transition } from '@headlessui/react';
import { Reveal } from './Reveal';
import essentielImg from '../media/images_formules/Essentiel.webp';
import altitudeImg from '../media/images_formules/Altitude.webp';
import horizonImg from '../media/images_formules/Horizon.webp';
import identiteVisuelleImg from '../media/images_formules/Identité_visuelle.webp';
import presenceDigitalImg from '../media/images_formules/Présence_digitalv2.webp';
import reseauxSociauxImg from '../media/images_formules/RéseauxSociaux.webp';
import { Toast } from './Toast';

interface ServicesProps {
  onServiceSelect?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  const [showExtras, setShowExtras] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

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

  const handleServiceSelect = (serviceName: string, shouldScroll = false) => {
    if (onServiceSelect) {
      onServiceSelect(serviceName);
      setToastMessage(`Formule "${serviceName}" ajoutée au formulaire`);
      setShowToast(true);
    }
    
    if (shouldScroll) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const closeExtras = () => {
    setShowExtras(false);
  };

  const handleSpecificProjectClick = () => {
    closeExtras();
    // Wait for modal close animation (handled by Transition)
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); 
  };

  return (
    <div className="bg-background py-32 relative overflow-hidden">
      <Toast 
        message={toastMessage} 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm lg:hover:bg-accent/20 transition-colors cursor-default shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <ShieldCheck size={18} />
              <span>Vols opérés par télépilote certifié (diplômé d'État)</span>
            </div>
          </Reveal>
        </div>

        {/* Pricing Cards (Drone - Main Focus) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
          {/* Card 1: ESSENTIEL */}
          <Reveal delay={100} className="h-full">
            <div 
              onClick={() => handleServiceSelect('Essentiel')}
              className="group h-full relative bg-surfaceHighlight/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 lg:hover:bg-surfaceHighlight/50 transition-all duration-500 lg:hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col"
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
                type="button"
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
              onClick={() => handleServiceSelect('Altitude')}
              className="group h-full relative bg-surfaceHighlight border border-accent/30 rounded-3xl p-6 lg:scale-105 shadow-2xl shadow-accent/5 z-10 transition-all duration-500 lg:hover:border-accent/50 cursor-pointer overflow-hidden flex flex-col"
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
              
              <button 
                type="button"
                onClick={(e) => { 
                  e.stopPropagation(); 
                  handleServiceSelect('Altitude', true); 
                }}
                className="relative z-10 w-full mt-8 bg-textPrimary text-background font-semibold py-3 rounded-xl hover:bg-white transition-colors"
              >
                Choisir altitude
              </button>
              <button 
                type="button"
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
              onClick={() => handleServiceSelect('Horizon')}
              className="group h-full relative bg-surfaceHighlight/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 lg:hover:bg-surfaceHighlight/50 transition-all duration-500 lg:hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col"
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
              className="max-w-4xl w-full max-h-[80vh] bg-surface rounded-2xl overflow-hidden shadow-xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 md:p-6">
                <div className="flex flex-row items-center justify-between mb-4 border-b border-white/5 pb-3">
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
                      <span className="text-[10px] text-textSecondary font-medium tracking-wide">Déplacement</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-background/50 rounded-xl border border-white/5 lg:group-hover:border-accent/30 transition-all group">
                    <div className="p-2.5 bg-white/5 rounded-lg lg:group-hover:bg-accent/20 transition-colors">
                      <Camera className="w-5 h-5 text-textSecondary lg:group-hover:text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-textPrimary">2€ <span className="text-[10px] text-textSecondary font-normal">/unité</span></span>
                      <span className="text-[10px] text-textSecondary font-medium tracking-wide">Photo drone</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-background/50 rounded-xl border border-white/5 lg:group-hover:border-accent/30 transition-all group">
                    <div className="p-2.5 bg-white/5 rounded-lg lg:group-hover:bg-accent/20 transition-colors">
                      <Usb className="w-5 h-5 text-textSecondary lg:group-hover:text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-textPrimary">12€ <span className="text-[10px] text-textSecondary font-normal">/clé</span></span>
                      <span className="text-[10px] text-textSecondary font-medium tracking-wide">Support USB</span>
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


        {/* --- MONTAGE VIDEO SECTION --- */}
        <div className="border-t border-white/5 pt-20">
          {/* Carte Montage vidéo - Compacte et centrée */}
          <Reveal delay={100}>
            <div className="mb-20 max-w-3xl mx-auto">
              <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-8 lg:group-hover:border-accent/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
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
                      <li className="flex items-center gap-2"><Check size={14} className="text-accent" />Sound Design et mixage immersif</li>
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
        </div>

        {/* --- EAGLE DIGITAL SECTION --- */}
        <div id="studio" className="border-t border-white/5 pt-20">
          {/* Header */}
          <Reveal>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Communication digital</span>
            <h3 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-textPrimary to-textPrimary/60 leading-tight pb-2">Eagle Digital</h3>
          </div>
          </Reveal>

          {/* Stack des 3 services (Vertical) */}
          <div className="flex flex-col gap-8">
              
              {/* Carte Identité visuelle (DORÉ / ACCENT) */}
              <Reveal>
                <div 
                  onClick={() => handleServiceSelect('Identité visuelle')}
                  className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden lg:group-hover:border-amber-400/30 transition-all duration-500 cursor-pointer"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
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
                          <p className="text-white/40 text-[13px] mt-0.5">Cartes, flyers, affiches, kakémonos, brochures</p>
                        </div>
                        <span className="text-textPrimary font-bold text-base">90€</span>
                      </div>
                      <div className="flex justify-between items-start pt-1.5 pb-2 border-b border-white/5">
                        <span className="text-white/80 text-[15px]">Signature mail professionnelle</span>
                        <div className="text-right">
                          <span className="text-textPrimary font-bold text-base">100€</span>
                          <p className="text-white/40 text-[11px]">+15€ par collaborateur</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Colonne Image (Droite) */}
                  <div className="lg:w-1/3 h-[250px] lg:h-auto lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/5 overflow-hidden">
                    <img src={identiteVisuelleImg} alt="Identité visuelle" className="w-full h-full object-cover object-center" style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }} loading="eager" decoding="sync" fetchPriority="high" />
                  </div>
                </div>
                </div>
              </Reveal>

              {/* Carte Présence digital (BLEU VIOLET / INDIGO) */}
              <Reveal>
                <div 
                  onClick={() => handleServiceSelect('Présence digital')}
                  className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden lg:group-hover:border-indigo-400/30 transition-all duration-500 cursor-pointer"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col lg:flex-row h-full relative z-10">
                  {/* Colonne Contenu */}
                  <div className="flex-1 p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                        <Monitor size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-textPrimary">Présence digital</h4>
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
                    <img src={presenceDigitalImg} alt="Présence digital" className="w-full h-full object-cover object-center" style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }} loading="eager" decoding="sync" />
                  </div>
                </div>
                </div>
              </Reveal>

              {/* Carte Réseaux sociaux */}
              <Reveal>
                <div 
                  onClick={() => handleServiceSelect('Réseaux sociaux')}
                  className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden lg:group-hover:border-teal-400/30 transition-all duration-500 cursor-pointer"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
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
    className={`group bg-surfaceHighlight/30 border border-white/5 rounded-xl p-5 transition-all duration-300 cursor-pointer ${isFullHeight ? 'h-full' : ''}`}
  >
     <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
            {icon && <div className="p-2 rounded-lg bg-white/5 lg:group-hover:bg-accent/10 transition-colors">{icon}</div>}
            <h5 className="font-bold text-textPrimary lg:group-hover:text-white transition-colors text-base">{title}</h5>
        </div>
        <div className="text-right">
             <span className="font-bold text-accent">{price}</span>
        </div>
     </div>
     <p className="text-sm text-textSecondary leading-relaxed">{desc}</p>
     {subPrice && <div className="mt-2 pt-2 border-t border-white/5 text-[11px] text-accent/80 font-medium tracking-wide">{subPrice}</div>}
  </div>
);
