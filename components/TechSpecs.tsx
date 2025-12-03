import React from 'react';
import { Reveal } from './Reveal';
import djiLogo from '../media/logo_DJI/DJI_Logo_Final.png';
import droneImg from '../media/Photo_DJI/drone_mavic_4.webp';
import { Camera, Aperture, Radio, ScanEye } from 'lucide-react';

export const TechSpecs: React.FC = () => {
  return (
    <div className="bg-surface py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        {/* Colonne Texte - MISE À JOUR DJI MAVIC 4 PRO */}
        <div className="flex-1 space-y-10 relative z-10 order-2 md:order-2">
          <Reveal>
             {/* DJI LOGO HEADER */}
             <div className="flex items-center gap-5 mb-6 opacity-90">
                <img src={djiLogo} alt="DJI" className="h-8 w-auto" />
                <div className="h-4 w-[1px] bg-accent/50"></div>
                <span className="text-sm font-bold tracking-[0.3em] text-accent uppercase">Flagship Series</span>
             </div>

            <h2 id="tech-title" className="scroll-mt-20 text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 leading-tight">
              DJI Mavic 4 Pro
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-xl text-textSecondary leading-relaxed font-light">
              L'excellence réinventée. Équipé d'une <strong className="text-white">caméra de qualité cinéma</strong> et de 3 objectifs, il capture des images époustouflantes avec une stabilité parfaite, même à grande distance.
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 pt-6 items-end">
              
              {/* Feature 1 */}
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">Triple caméra</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <Camera size={14} /> Plans larges et zooms
                </div>
              </div>

              {/* Feature 2 */}
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">Qualité cinéma</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <Aperture size={14} /> Couleurs éclatantes
                </div>
              </div>

              {/* Feature 3 */}
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">Sécurité 360°</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <ScanEye size={14} /> Détection d'obstacles
                </div>
              </div>

              {/* Feature 4 */}
              <div className="border-l border-white/20 pl-6 group hover:border-accent transition-colors">
                <div className="text-3xl font-semibold text-textPrimary group-hover:text-accent transition-colors">Portée 20km</div>
                <div className="text-textSecondary text-[11px] uppercase tracking-wider mt-2 flex items-center gap-2 font-medium">
                    <Radio size={14} /> Signal vidéo stable
                </div>
              </div>

            </div>
          </Reveal>
        </div>

        {/* DRONE IMAGE - FIXED & STYLED */}
        <div className="hidden md:flex flex-1 w-full justify-center order-1 md:order-1">
          <Reveal delay={300} className="relative w-full max-w-[550px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group select-none hover:border-accent/30 transition-colors duration-500">
            
            {/* Image */}
            <img 
                src={droneImg} 
                alt="DJI Mavic 4 Pro" 
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient subtil pour intégration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80"></div>
            
            {/* Effet de reflet/brillance sur le hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* Badge Tech en bas à droite */}
            <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-white/80 tracking-widest">MAVIC 4 PRO</span>
            </div>

          </Reveal>
        </div>
      </div>
    </div>
  );
};
