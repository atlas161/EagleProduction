import React, { useEffect } from 'react';
import { Reveal } from './Reveal';
import { Instagram } from 'lucide-react';

export const Gallery: React.FC = () => {
  useEffect(() => {
    // Charger le script Elfsight
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyage optionnel
      // document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* En-tête de section */}
      <div className="text-center mb-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-accent border border-accent/20 bg-accent/5 px-4 py-2 rounded-full mb-4 hover:bg-accent/10 transition-colors cursor-pointer" onClick={() => window.open('https://instagram.com/eagleproduction.video', '_blank')}>
            <Instagram size={18} />
            <span className="text-sm font-semibold tracking-wide">@eagleproduction.video</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Le feed</h2>
          <p className="text-textSecondary text-xl max-w-2xl mx-auto">
            Nos dernières réalisations et coulisses de tournage en temps réel.
          </p>
        </Reveal>
      </div>

      {/* Widget Elfsight */}
      <Reveal>
        <div className="elfsight-app-272cf2dc-4aec-40b8-b83e-7e0b2389f8b7" data-elfsight-app-lazy></div>
      </Reveal>
    </div>
  );
};
