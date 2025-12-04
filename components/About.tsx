import React from 'react';
import { Reveal } from './Reveal';
import { Quote, Award, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Colonne gauche : Titre + Image */}
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

            <Reveal>
                <div className="relative group max-w-md mx-auto lg:max-w-none">
                    {/* Cadre décoratif */}
                    <div className="absolute inset-0 border-2 border-accent/20 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 rounded-3xl transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                    
                    {/* Image Container - Plus compact sur mobile */}
                    <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/5] bg-surfaceHighlight shadow-2xl">
                        <img 
                            src="/Photo_de_paul_bardin.webp" 
                            alt="Paul Bardin Pilote Drone" 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
        </div>

        {/* Colonne droite : Texte */}
        <div className="space-y-6 md:space-y-8">
            <Reveal delay={300}>
                <div className="text-left space-y-4">
                    <p className="text-textSecondary text-base md:text-lg leading-relaxed">
                        J’ai fondé <strong className="text-white">Eagle Production</strong> à 23 ans, poussé par une passion profonde pour le pilotage et la <strong className="text-white">création de vidéos</strong>. Cette passion m’a naturellement conduit à devenir <strong className="text-white">télépilote certifié et diplômé</strong>, et à transformer ce savoir-faire en un véritable projet professionnel.
                    </p>
                    <p className="text-textSecondary text-base md:text-lg leading-relaxed">
                        Eagle Production est né de cette envie : capturer le monde sous un autre angle, raconter des histoires, et offrir des images uniques.
                    </p>
                    <p className="text-textSecondary text-base md:text-lg leading-relaxed">
                        Notre objectif chez Eagle Production est clair : intervenir dans un maximum de domaines.<br/>
                        Qu’il s’agisse <strong className="text-white">d’événements</strong>, de <strong className="text-white">sport</strong>, de <strong className="text-white">construction</strong>, de <strong className="text-white">tourisme</strong>, de projets artistiques, et bien d’autres domaines encore, nous voulons toucher un maximum de métiers et d’univers différents.
                    </p>
                    <p className="text-textSecondary text-base md:text-lg leading-relaxed">
                        Parce que la créativité n’a pas de limites, et parce que le <strong className="text-white">drone</strong> (tout comme la vidéo) permet d’explorer des perspectives nouvelles, Eagle Production a été pensé pour <strong className="text-white">s’adapter à tous les besoins</strong> et intervenir partout où une vision aérienne ou créative peut faire la différence.
                    </p>
                </div>
            </Reveal>

            <Reveal delay={400}>
                <div className="relative mt-8 md:mt-10 p-6 md:p-8 bg-surfaceHighlight/30 border-l-4 border-accent rounded-r-2xl">
                    <Quote className="absolute top-4 left-4 text-accent/20 w-6 h-6 md:w-8 md:h-8 transform -scale-x-100" />
                    <p className="text-lg md:text-xl text-white font-light italic relative z-10 pl-2 md:pl-4 animate-pulse-subtle">
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
