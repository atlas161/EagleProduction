
import React, { useEffect, useState } from 'react';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    const computeOpen = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOpen(hour >= 9 && hour < 18);
    };
    computeOpen();
    const interval = setInterval(computeOpen, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <footer className="bg-surfaceHighlight border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-b border-white/5 pb-16">
            {/* Brand */}
            <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <img src="/media/aigle_beige.png" alt="Eagle Production" className="h-10 w-auto" />
                </div>
                <p className="text-textSecondary max-w-sm mb-6 leading-relaxed">
                    Solutions de drone cinématographique et studio digital. 
                    Nous donnons de la hauteur à vos projets et de la visibilité à votre image.
                </p>
            </div>

            {/* Contact */}
            <div>
                <h4 className="text-white font-bold mb-6">Contact</h4>
                <ul className="space-y-4">
                    <li>
                        <a href="mailto:contact@eagle-prod.com" className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors">
                            <Mail size={16} />
                            contact@eagle-prod.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+33699361715" className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors">
                            <Phone size={16} />
                            06 99 36 17 15
                        </a>
                    </li>
                    <li className="flex items-center gap-3 text-textSecondary pt-2">
                         <div className="relative flex h-3 w-3 items-center justify-center">
                            <span className={`${isOpen ? 'animate-ping bg-green-400 opacity-75' : 'bg-accent'} absolute h-full w-full rounded-full`}></span>
                            <span className={`relative block h-2 w-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-accent'}`}></span>
                         </div>
                         <span className={`text-sm font-medium ${isOpen ? '' : 'text-accent'}`}>Disponible 9h - 18h</span>
                    </li>
                </ul>
            </div>

            {/* Réseaux sociaux */}
            <div>
                <h4 className="text-white font-bold mb-6">Réseaux sociaux</h4>
                <ul className="space-y-4">
                    <li>
                        <a href="https://instagram.com/eagleproduction.video" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors">
                            <Instagram size={16} />
                            @eagleproduction.video
                        </a>
                    </li>
                    <li>
                        <a href="https://tiktok.com/@eagleproductionvideo?_t=ZN-8zZ5p2IPlX4&_r=1&fbclid=PAdGRleAM1AhpleHRuA2FlbQIxMQABpyRNuLCS59bLr9EU5irq9xFX8WZ-0abF8GIZErhO0DO4UDJ3I49xpgE23Rco_aem_uDckyoiYtA8huRjj4rblEw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                            </svg>
                            @eagleproductionvideo
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/company/eagle-production-video?trk=blended-typeahead" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-textSecondary hover:text-accent transition-colors">
                            <Linkedin size={16} />
                            Eagle Production (LinkedIn)
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-textSecondary/60">
            <div>
            &copy; {new Date().getFullYear()} Eagle Production. Tous droits réservés.
            </div>
        </div>
      </div>
    </footer>
  );
};
