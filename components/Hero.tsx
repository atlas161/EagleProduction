
import React, { useMemo } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollDown: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  const bg = useMemo(() => {
    const imgs = [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=60',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=60',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=60',
      'https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=60'
    ];
    return imgs[Math.floor(Math.random() * imgs.length)];
  }, []);
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background with placeholder image simulating video */}
      <div className="absolute inset-0 z-0">
        <img src={bg} alt="Vue aérienne drone cinématographique paysage" className="w-full h-full object-cover opacity-30 scale-105 animate-fade-in" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl animate-slide-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-textPrimary to-textPrimary/70 mb-6">
          Au-dessus de <br /> l'ordinaire.
        </h1>
        <p className="text-xl md:text-2xl text-textSecondary font-light max-w-2xl mx-auto mb-10">
          Capturez le monde sous un angle inédit avec une précision cinématographique et une technologie de pointe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onScrollDown}
            className="bg-textPrimary text-background px-8 py-3 rounded-full font-medium hover:bg-white transition-all active:scale-95"
          >
            Découvrir nos services
          </button>
          <button className="text-accent hover:text-accent/80 font-medium px-8 py-3 transition-colors flex items-center justify-center gap-2">
            Voir le showreel <span className="text-xs">▶</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={onScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-textSecondary/50 cursor-pointer hover:text-textPrimary transition-colors"
      >
        <ChevronDown size={32} />
      </div>
    </div>
  );
};
