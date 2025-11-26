
import React, { ReactElement } from 'react';
import { HardDrive, Film, Clapperboard, Check, Car, Camera, Usb, ArrowRight, Monitor, PenTool, Palette, Terminal, LayoutTemplate, Search, RefreshCw, Share2, Wrench, GraduationCap, AppWindow, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import essentielImg from '../media/images_formules/essentiel.png';
import altitudeImg from '../media/images_formules/altitude.png';
import horizonImg from '../media/images_formules/horizon.png';

export const Services: React.FC = () => {
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
              Nos formules.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Des solutions adaptées à chaque besoin.
            </p>
            
            {/* Certification Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm hover:bg-accent/20 transition-colors cursor-default shadow-[0_0_15px_rgba(212,175,55,0.1)]">
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
              onClick={handleServiceClick}
              className="group h-full relative bg-surfaceHighlight/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:bg-surfaceHighlight/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src={essentielImg} alt="Essentiel" className="absolute inset-0 w-full h-full object-cover opacity-30" style={{ objectPosition: '50% 35%' }} />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-white/5 text-textPrimary">
                  <HardDrive size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">Essentiel</h3>
              </div>
              <p className="text-textSecondary text-sm mb-8 h-10">
                Sans montage. Exploitez vos images comme vous le souhaitez. Livraison des fichiers bruts.
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
                <li className="flex gap-3 text-sm text-textSecondary">
                  <Check size={16} className="text-textPrimary mt-0.5" />
                  <span>Vidéos brutes non retouchées</span>
                </li>
                <li className="flex gap-3 text-sm text-textSecondary">
                  <Check size={16} className="text-textPrimary mt-0.5" />
                  <span>Liberté totale de post-production</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Card 2: ALTITUDE */}
          <Reveal delay={300} className="h-full">
            <div 
              onClick={handleServiceClick}
              className="group h-full relative bg-surfaceHighlight border border-accent/30 rounded-3xl p-6 lg:scale-105 shadow-2xl shadow-accent/5 z-10 transition-all duration-500 hover:border-accent/50 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-accent text-background text-xs font-bold px-3 py-1 rounded-bl-xl z-10">Populaire</div>
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src={altitudeImg} alt="Altitude" className="absolute inset-0 w-full h-full object-cover opacity-30" style={{ objectPosition: '50% 40%' }} />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-accent/20 text-accent">
                  <Film size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">Altitude</h3>
              </div>
              <p className="text-textSecondary text-sm mb-8 h-10">
                Avec montage vidéo. Offrez-vous une vidéo personnalisée et immersive clé en main.
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
                <li className="flex gap-3 text-sm text-gray-300">
                  <Check size={16} className="text-accent mt-0.5" />
                  <span>Montage dynamique inclus</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-300">
                  <Check size={16} className="text-accent mt-0.5" />
                  <span>Musique libre de droits</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-300">
                  <Check size={16} className="text-accent mt-0.5" />
                  <span>Étalonnage couleur professionnel</span>
                </li>
              </ul>
              
              <button className="relative z-10 w-full mt-8 bg-textPrimary text-background font-semibold py-3 rounded-xl hover:bg-white transition-colors">
                Choisir altitude
              </button>
            </div>
          </Reveal>

          {/* Card 3: HORIZON */}
          <Reveal delay={500} className="h-full">
            <div 
              onClick={handleServiceClick}
              className="group h-full relative bg-surfaceHighlight/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:bg-surfaceHighlight/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src={horizonImg} alt="Horizon" className="absolute inset-0 w-full h-full object-cover opacity-30" style={{ objectPosition: '50% 40%' }} />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                  <Clapperboard size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">Horizon</h3>
              </div>
              <p className="text-textSecondary text-sm mb-8 h-10">
                Réalisation complète. Une production inspirée de vos idées pour un résultat cinéma.
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
                <li className="flex gap-3 text-sm text-textSecondary">
                  <Check size={16} className="text-accent mt-0.5" />
                  <span>Scénarisation complète</span>
                </li>
                <li className="flex gap-3 text-sm text-textSecondary">
                   <Check size={16} className="text-accent mt-0.5" />
                   <span>Montage dynamique inclus</span>
                </li>
                <li className="flex gap-3 text-sm text-textSecondary">
                   <Check size={16} className="text-accent mt-0.5" />
                   <span>Musique libre de droits</span>
                </li>
                <li className="flex gap-3 text-sm text-textSecondary">
                   <Check size={16} className="text-accent mt-0.5" />
                   <span>Étalonnage couleur professionnel</span>
                </li>
                <li className="flex gap-3 text-sm text-textSecondary">
                  <Check size={16} className="text-accent mt-0.5" />
                  <span>Sound Design immersif</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* --- EXTRAS & INFO (Moved Here) --- */}
        <Reveal delay={600}>
            <div className="bg-surfaceHighlight/30 border border-white/5 rounded-2xl p-8 mb-24 relative overflow-hidden">
                {/* Decoration background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8 border-b border-white/5 pb-6">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                             <div className="w-1.5 h-6 bg-accent rounded-full"></div>
                             Options & suppléments
                        </h4>
                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-white/5 hover:border-accent/30 transition-all group">
                            <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                                <Car className="w-5 h-5 text-textSecondary group-hover:text-accent" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-textPrimary">0,50€ <span className="text-[10px] text-textSecondary font-normal">/km</span></span>
                                <span className="text-[10px] text-textSecondary font-medium tracking-wide">Déplacement</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-white/5 hover:border-accent/30 transition-all group">
                            <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                                <Camera className="w-5 h-5 text-textSecondary group-hover:text-accent" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-textPrimary">2€ <span className="text-[10px] text-textSecondary font-normal">/unité</span></span>
                                <span className="text-[10px] text-textSecondary font-medium tracking-wide">Photo drone</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-white/5 hover:border-accent/30 transition-all group">
                            <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                                <Usb className="w-5 h-5 text-textSecondary group-hover:text-accent" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-textPrimary">12€ <span className="text-[10px] text-textSecondary font-normal">/clé</span></span>
                                <span className="text-[10px] text-textSecondary font-medium tracking-wide">Support USB</span>
                            </div>
                        </div>

                        <div 
                           onClick={handleServiceClick}
                           className="flex items-center justify-between p-4 bg-accent/10 rounded-xl border border-accent/20 hover:bg-accent/20 transition-all cursor-pointer group"
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
        </Reveal>


        {/* --- SECONDARY SERVICES: DIGITAL & IT --- */}
        <Reveal delay={700}>
          <div id="studio" className="border-t border-white/5 pt-16">
            
            {/* Header */}
            <div className="text-center md:text-left mb-16">
               <span className="text-accent text-xs font-bold tracking-[0.2em] mb-2 block">Au-delà du drone</span>
               <h3 className="text-3xl md:text-4xl font-bold text-textPrimary">Studio digital & solutions IT</h3>
            </div>

            {/* Content Container - STACKED LAYOUT */}
            <div className="space-y-20">
              
              {/* 1. STUDIO CREATIF */}
              <div className="animate-fade-in relative">
                 {/* Section Title */}
                 <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-surfaceHighlight rounded-xl border border-white/5">
                        <Palette size={24} className="text-accent" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Studio créatif</h4>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pl-4 md:pl-0 border-l border-white/5 md:border-l-0">
                    
                    {/* Web Services */}
                    <div className="flex flex-col gap-6">
                       <h5 className="text-xs font-bold text-textSecondary tracking-[0.2em] mb-2 flex items-center gap-2">
                          <span className="w-8 h-[1px] bg-accent"></span> Web & visibilité
                       </h5>
                       
                       <ServiceCard 
                          title="Création site vitrine"
                          price="366€"
                          icon={<LayoutTemplate size={20} className="text-accent" />}
                          desc="Un site professionnel clé en main. Design, rédaction et identité inclus."
                       />
                       <ServiceCard 
                          title="Optimisation SEO"
                          price="183€"
                          icon={<Search size={20} className="text-accent" />}
                          desc="Booster votre visibilité sur Google et les moteurs de recherche."
                       />
                    </div>

                    {/* Branding Services */}
                    <div className="flex flex-col gap-6">
                       <h5 className="text-xs font-bold text-textSecondary tracking-[0.2em] mb-2 flex items-center gap-2">
                          <span className="w-8 h-[1px] bg-accent"></span> Identité de marque
                       </h5>
                       
                       <ServiceCard 
                          title="Logo & direction artistique"
                          price="610€"
                          icon={<Palette size={20} className="text-accent" />}
                          desc="Création complète de votre identité : couleurs, typographie et logo vectoriel."
                       />
                       <ServiceCard 
                          title="Pack communication & print"
                          price="Sur devis"
                          subPrice="Social + Mail + Supports Physiques"
                          icon={<Share2 size={20} className="text-accent" />}
                          desc="Templates réseaux sociaux, signature mail et conception de supports physiques."
                       />
                    </div>
                 </div>
              </div>

              {/* 2. POLE TECHNIQUE */}
              <div className="animate-fade-in relative">
                 {/* Section Title */}
                 <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-surfaceHighlight rounded-xl border border-white/5">
                        <Terminal size={24} className="text-accent" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Pôle technique</h4>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      {/* Item 1: Conseil & Formation */}
                      <ServiceCard 
                          title="Conseil & formation"
                          price="37€/h"
                          icon={<GraduationCap size={20} className="text-accent" />}
                          desc="Consulting IT, stratégie digitale ou formation (IA, Windows, Marketing)."
                          isFullHeight
                       />

                       {/* Item 2: Maintenance */}
                       <ServiceCard 
                          title="Maintenance & dépannage"
                          price="49€/h"
                          icon={<Wrench size={20} className="text-accent" />}
                          desc="Résolution de bugs, pannes matérielles et optimisation système."
                          isFullHeight
                       />

                       {/* Item 3: Dev */}
                       <ServiceCard 
                          title="Développement sur mesure"
                          price="Sur devis"
                          icon={<AppWindow size={20} className="text-accent" />}
                          desc="Conception de logiciels métiers et applications spécifiques à vos besoins."
                          isFullHeight
                       />
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
