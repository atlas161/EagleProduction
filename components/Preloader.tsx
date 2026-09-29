import React, { useEffect, useState } from 'react';
import eagleBeige from '../media/aigle_beige.png';

interface PreloaderProps {
  isLoading: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(isLoading);

  useEffect(() => {
    // On attend la fin de l'animation CSS (duration-700) avant de retirer l'élément du DOM
    if (!isLoading) {
      const timer = setTimeout(() => setShouldRender(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      role="status"
      aria-label="Chargement du site"
      aria-hidden={!isLoading}
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative w-32 h-32 md:w-48 md:h-48">
        <img src={eagleBeige} alt="Eagle Production - Logo entreprise drone Angoulême" className="w-full h-full object-contain" loading="eager" fetchPriority="high" />
      </div>

      {/* Progress Bar */}
      <div className="mt-8 w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full w-1/2 bg-accent animate-loading motion-reduce:animate-none" />
      </div>
    </div>
  );
};
