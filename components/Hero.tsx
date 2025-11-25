
import React, { useMemo } from 'react';
import { ChevronDown, Play } from 'lucide-react';

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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-textPrimary to-textPrimary/70 mb-6">
          Votre projet mérite une prise de vue au drone
        </h1>
        <p className="text-xl md:text-2xl text-textSecondary font-light max-w-2xl mx-auto mb-10">
          Des prises de vue au drone précises et des solutions digitales & IT pour propulser vos projets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onScrollDown}
            className="bg-accent text-background px-8 py-3 rounded-full font-semibold shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:bg-white hover:text-background transition-all active:scale-95"
          >
            Voir nos formules
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('gallery');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-full font-semibold border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Play size={18} className="text-accent" /> Voir le showreel
          </button>
        </div>

        <div className="mt-4">
          <button 
            onClick={() => {
              const el = document.getElementById('studio');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-accent hover:text-accent/80 font-medium px-4 py-2 transition-colors"
          >
            Studio digital & solutions IT
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
