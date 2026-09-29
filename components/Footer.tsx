import React, { useEffect, useState } from 'react';
import eagleBeige from '../media/aigle_beige.png';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import { OPEN_COOKIE_SETTINGS_EVENT } from './CookieBanner';
import { CONTACT, SITE_CREDIT } from '../config/siteConfig';

// Horaires (Europe/Paris) : lun-ven 9h-18h, sam 9h-12h — identiques aux données structurées (SEOSchema)
const computeIsOpen = () => {
  const parts = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', weekday: 'short', hour: 'numeric', hour12: false }).formatToParts(new Date());
  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? '';
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0) % 24;
  if (/^(lun|mar|mer|jeu|ven)/i.test(weekday)) return hour >= 9 && hour < 18;
  if (/^sam/i.test(weekday)) return hour >= 9 && hour < 12;
  return false;
};

const linkClass = 'text-textSecondary hover:text-accent transition-colors focus:outline-none focus-visible:text-accent focus-visible:underline';

export const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(computeIsOpen());
    const interval = setInterval(() => setIsOpen(computeIsOpen()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-surfaceHighlight border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={eagleBeige} alt="Eagle Production - Expert drone à Angoulême" className="h-10 w-auto" loading="lazy" />
            </div>
            <p className="text-textSecondary max-w-sm mb-6 leading-relaxed">
              Solutions drone à la qualité cinéma, alliées à un studio digital dédié.
              <br />
              Nous donnons de la hauteur à vos projets et renforçons la visibilité de votre image, grâce à des prises de vue par drone précises et un
              accompagnement créatif global pour sublimer vos projets.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${CONTACT.email}`} className={`flex items-center gap-3 ${linkClass}`}>
                  <Mail size={16} aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className={`flex items-center gap-3 ${linkClass}`}>
                  <Phone size={16} aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-textSecondary pt-2">
                <div className="relative flex h-3 w-3 items-center justify-center" aria-hidden="true">
                  <span className={`${isOpen ? 'animate-ping bg-green-400 opacity-75' : 'bg-accent'} absolute h-full w-full rounded-full motion-reduce:animate-none`}></span>
                  <span className={`relative block h-2 w-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-accent'}`}></span>
                </div>
                <span className={`text-sm font-medium ${isOpen ? '' : 'text-accent'}`}>
                  {isOpen ? 'Disponible maintenant' : 'Disponible lun-ven 9h - 18h'}
                </span>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-white font-bold mb-6">Réseaux sociaux</h4>
            <ul className="space-y-4">
              <li>
                <a href={CONTACT.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 ${linkClass}`}>
                  <Instagram size={16} aria-hidden="true" />
                  {CONTACT.instagramHandle}
                </a>
              </li>
              <li>
                <a href={CONTACT.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 ${linkClass}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                  {CONTACT.tiktokHandle}
                </a>
              </li>
              <li>
                <a href={CONTACT.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 ${linkClass}`}>
                  <Linkedin size={16} aria-hidden="true" />
                  Eagle Production (LinkedIn)
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label="Pied de page">
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="/#gallery" className={linkClass}>Portfolio</a></li>
              <li><a href="/#services" className={linkClass}>Formules</a></li>
              <li><a href="/blog" className={linkClass}>Blog</a></li>
              <li><a href="/a-propos" className={linkClass}>À propos</a></li>
              <li><a href="/zone" className={linkClass}>Zone d’intervention</a></li>
              <li><a href="/faq" className={linkClass}>FAQ</a></li>
              <li><a href="/contact" className={linkClass}>Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-textSecondary">
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Eagle Production. Tous droits réservés.
            <span className="block md:inline md:ml-3 text-xs">
              Site conçu et développé par{' '}
              <a href={SITE_CREDIT.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline-offset-2 hover:underline">
                {SITE_CREDIT.label}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/mentions-legales.html" className={`text-xs ${linkClass}`}>Mentions légales &amp; RGPD</a>
            <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))} className={`text-xs ${linkClass}`}>
              Gérer mes cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
