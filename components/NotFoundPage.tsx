import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useSeo } from '../hooks/useSeo';

const SUGGESTIONS = [
  { href: '/eagle-production', label: 'Nos prestations drone & vidéo' },
  { href: '/eagle-digital', label: 'Eagle Digital : site web & SEO' },
  { href: '/blog', label: 'Le blog' },
  { href: '/faq', label: 'Questions fréquentes' },
];

export const NotFoundPage: React.FC = () => {
  useSeo({
    path: '/404',
    title: 'Page introuvable | Eagle Production',
    description: 'La page demandée n’existe pas ou a été déplacée.',
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <Navbar />
      <main id="main-content" className="pt-32 pb-24 px-6">
        <div className="max-w-xl mx-auto text-center bg-surfaceHighlight/40 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(212,175,55,0.08)]">
          <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
            <Compass size={26} />
          </div>
          <p className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-3">Erreur 404</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page introuvable</h1>
          <p className="text-textSecondary mb-8">Cette page n’existe pas ou a été déplacée. Voici où continuer :</p>
          <ul className="space-y-2 mb-8 text-left">
            {SUGGESTIONS.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 hover:border-accent/40 hover:text-accent transition-colors"
                >
                  {s.label}
                  <ArrowRight size={16} />
                </a>
              </li>
            ))}
          </ul>
          <a href="/" className="inline-block bg-accent text-background px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors">
            Retour à l’accueil
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};
