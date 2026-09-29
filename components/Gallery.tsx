import React, { useEffect } from 'react';
import { Reveal } from './Reveal';
import { Instagram } from 'lucide-react';
import { CONTACT } from '../config/siteConfig';

const ELFSIGHT_SCRIPT = 'https://elfsightcdn.com/platform.js';

export const Gallery: React.FC = () => {
  // Widget Instagram (Elfsight) : script chargé une seule fois, uniquement quand la section est montée (voir LazyMount dans App)
  useEffect(() => {
    if (document.querySelector(`script[src="${ELFSIGHT_SCRIPT}"]`)) {
      // Retour sur l'accueil en navigation interne : le script est déjà chargé, on demande à Elfsight de réinitialiser le widget
      (window as unknown as { eapps?: { initWidgets?: () => void } }).eapps?.initWidgets?.();
      return;
    }
    const script = document.createElement('script');
    script.src = ELFSIGHT_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* En-tête de section */}
      <div className="text-center mb-16">
        <Reveal>
          <a
            href={CONTACT.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent border border-accent/20 bg-accent/5 px-4 py-2 rounded-full mb-4 hover:bg-accent/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            <Instagram size={18} aria-hidden="true" />
            <span className="text-sm font-semibold tracking-wide">{CONTACT.instagramHandle}</span>
          </a>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4">Le feed</h2>
          <p className="text-textSecondary text-xl max-w-2xl mx-auto">
            Nos dernières réalisations et coulisses de tournage en temps réel.
          </p>
        </Reveal>
      </div>

      {/* Widget Elfsight */}
      <Reveal>
        <div className="elfsight-app-272cf2dc-4aec-40b8-b83e-7e0b2389f8b7 overscroll-contain min-h-[400px]" data-elfsight-app-lazy></div>
      </Reveal>
    </div>
  );
};
