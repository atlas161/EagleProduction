import React from 'react';
import { Reveal } from './Reveal';
import { Quote, Award, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Colonne Image / Visuel */}
        <Reveal>
            <div className="relative group max-w-md mx-auto lg:max-w-none">
                {/* Cadre décoratif */}
                <div className="absolute inset-0 border-2 border-accent/20 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 rounded-3xl transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                
                {/* Image Container - Plus compact sur mobile */}
                <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/5] bg-surfaceHighlight shadow-2xl">
                    <img 
                        src="/Photo_de_paul_bardin.jpg" 
                        alt="Paul Bardin Pilote Drone" 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    
                    {/* Badge Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-3 md:p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3 md:gap-4">
                        <div className="bg-accent/20 p-2 rounded-lg text-accent">
                            <MapPin size={20} className="md:w-6 md:h-6" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-xs md:text-sm">Basé à Angoulême</div>
                            <div className="text-textSecondary text-[10px] md:text-xs">Intervention Nouvelle-Aquitaine</div>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>

        {/* Colonne Texte */}
        <div className="space-y-6 md:space-y-8">
            <Reveal delay={200}>
                <div className="flex items-center gap-3 mb-3 md:mb-4 justify-center lg:justify-start">
                    <span className="h-px w-8 md:w-12 bg-accent"></span>
                    <span className="text-accent font-bold uppercase tracking-widest text-[10px] md:text-xs">À Propos</span>
                </div>
                <h2 id="about-title" className="scroll-mt-16 text-3xl md:text-5xl font-bold text-white leading-tight text-center lg:text-left">
                    Paul Bardin : <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">La vidéo vue d'en haut.</span>
                </h2>
            </Reveal>

            <Reveal delay={300}>
                <div className="text-center lg:text-left space-y-4">
                    <p className="text-textSecondary text-base md:text-lg leading-relaxed">
                        Fondé par Paul Bardin et basé à Angoulême, <strong className="text-white">Eagle Production</strong> est née d'une passion pour le pilotage et l'image.
                    </p>
                    <p className="text-textSecondary text-base md:text-lg leading-relaxed">
                        Plus qu'une simple prestation de drone, je vous propose une <strong className="text-white">production audiovisuelle complète</strong> (sol, montage, étalonnage). 
                    </p>
                    <p className="text-textSecondary text-base md:text-lg leading-relaxed">
                        Que vous soyez une entreprise, une agence immo ou un particulier, ma philosophie est simple : apporter une <span className="text-white underline decoration-accent/50 underline-offset-4">qualité cinéma</span>, de la modernité et de l'émotion, le tout à un tarif accessible.
                    </p>
                </div>
            </Reveal>

            <Reveal delay={400}>
                <div className="relative mt-8 md:mt-10 p-6 md:p-8 bg-surfaceHighlight/30 border-l-4 border-accent rounded-r-2xl">
                    <Quote className="absolute top-4 left-4 text-accent/20 w-6 h-6 md:w-8 md:h-8 transform -scale-x-100" />
                    <p className="text-lg md:text-xl text-white font-light italic relative z-10 pl-2 md:pl-4">
                        "Comme un aigle, nous visons la précision pour ne jamais manquer l'instant décisif."
                    </p>
                    <div className="flex items-center gap-3 mt-4 md:mt-6 pl-2 md:pl-4">
                        <Award size={16} className="text-accent md:w-[18px] md:h-[18px]" />
                        <span className="text-xs md:text-sm text-accent font-mono tracking-widest">PAUL BARDIN // FONDATEUR</span>
                    </div>
                </div>
            </Reveal>

        </div>
      </div>
    </div>
  );
};
