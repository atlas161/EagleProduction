import React from 'react';
import { Reveal } from './Reveal';
import { Quote, Award, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Colonne Image / Visuel */}
        <Reveal>
            <div className="relative group">
                {/* Cadre décoratif */}
                <div className="absolute inset-0 border-2 border-accent/20 translate-x-4 translate-y-4 rounded-3xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-surfaceHighlight shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1524312683832-75d3f278d6b7?q=80&w=2070&auto=format&fit=crop" 
                        alt="Paul Bardin Pilote Drone" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    
                    {/* Badge Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-4">
                        <div className="bg-accent/20 p-2.5 rounded-lg text-accent">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <div className="text-white font-bold text-sm">Basé à Angoulême</div>
                            <div className="text-textSecondary text-xs">Intervention Nouvelle-Aquitaine</div>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>

        {/* Colonne Texte */}
        <div className="space-y-8">
            <Reveal delay={200}>
                <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-12 bg-accent"></span>
                    <span className="text-accent font-bold uppercase tracking-widest text-xs">À Propos</span>
                </div>
                <h2 id="about-title" className="scroll-mt-16 text-4xl md:text-5xl font-bold text-white leading-tight">
                    Paul Bardin : <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">La vidéo vue d'en haut.</span>
                </h2>
            </Reveal>

            <Reveal delay={300}>
                <p className="text-textSecondary text-lg leading-relaxed">
                    Fondé par Paul Bardin et basé à Angoulême, <strong className="text-white">Eagle Production</strong> est née d'une passion pour le pilotage et l'image.
                </p>
                <p className="text-textSecondary text-lg leading-relaxed mt-4">
                    Plus qu'une simple prestation de drone, je vous propose une <strong className="text-white">production audiovisuelle complète</strong> (sol, montage, étalonnage). 
                </p>
                <p className="text-textSecondary text-lg leading-relaxed mt-4">
                    Que vous soyez une entreprise, une agence immo ou un particulier, ma philosophie est simple : apporter une <span className="text-white underline decoration-accent/50 underline-offset-4">qualité cinéma</span>, de la modernité et de l'émotion, le tout à un tarif accessible.
                </p>
            </Reveal>

            <Reveal delay={400}>
                <div className="relative mt-10 p-8 bg-surfaceHighlight/30 border-l-4 border-accent rounded-r-2xl">
                    <Quote className="absolute top-4 left-4 text-accent/20 w-8 h-8 transform -scale-x-100" />
                    <p className="text-xl text-white font-light italic relative z-10 pl-4">
                        "Comme un aigle, nous visons la précision pour ne jamais manquer l'instant décisif."
                    </p>
                    <div className="flex items-center gap-3 mt-6 pl-4">
                        <Award size={18} className="text-accent" />
                        <span className="text-sm text-accent font-mono tracking-widest">PAUL BARDIN // FONDATEUR</span>
                    </div>
                </div>
            </Reveal>

        </div>
      </div>
    </div>
  );
};
