import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TechSpecs } from './components/TechSpecs';
import { Footer } from './components/Footer';
import { Section } from './types';
import { Preloader } from './components/Preloader';
import { Gallery } from './components/Gallery';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { SEOSchema } from './components/SEOSchema';
import { BlogPreview } from './components/BlogPreview';
import { LazyMount } from './components/LazyMount';
import { useSeo } from './hooks/useSeo';

// La carte (Leaflet + GeoJSON) n'est chargée que lorsqu'on s'approche de la section Zone
const Coverage = lazy(() => import('./components/Coverage').then((m) => ({ default: m.Coverage })));

const NAVBAR_HEIGHT = 72; // hauteur de la navbar fixe
const PRELOAD_KEY = 'eagle_preloaded';
const PRELOAD_MIN_MS = 700; // le logo reste visible un court instant, pas plus
const PRELOAD_MAX_MS = 4000; // sécurité si `load` tarde (widgets tiers)

// Ordre exact des sections dans le DOM (nécessaire à la détection inverse du scroll spy)
const ORDERED_SECTIONS = [Section.HERO, Section.GALLERY, Section.SERVICES, Section.BLOG, Section.TECH, Section.ZONE, Section.REVIEWS];

const readPreloaded = () => {
  try {
    return sessionStorage.getItem(PRELOAD_KEY) === '1';
  } catch {
    return false;
  }
};

function App() {
  useSeo('/');
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  // Le preloader ne s'affiche qu'à la première visite de la session (pas à chaque retour sur l'accueil)
  const [isLoading, setIsLoading] = useState(() => !readPreloaded());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const isNavigatingRef = useRef(false);
  const navTimerRef = useRef<number | undefined>(undefined);

  const markNavigating = useCallback(() => {
    isNavigatingRef.current = true;
    setIsNavigating(true);
    window.clearTimeout(navTimerRef.current);
    navTimerRef.current = window.setTimeout(() => {
      isNavigatingRef.current = false;
      setIsNavigating(false);
    }, 900);
  }, []);

  // Gestion du chargement initial (Preloader)
  useEffect(() => {
    if (!isLoading) return;
    const start = performance.now();
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setIsLoading(false);
      try {
        sessionStorage.setItem(PRELOAD_KEY, '1');
      } catch {
        /* stockage indisponible */
      }
    };
    const onLoaded = () => window.setTimeout(finish, Math.max(0, PRELOAD_MIN_MS - (performance.now() - start)));

    if (document.readyState === 'complete') {
      onLoaded();
    } else {
      window.addEventListener('load', onLoaded, { once: true });
    }
    const safety = window.setTimeout(finish, PRELOAD_MAX_MS);
    return () => {
      window.removeEventListener('load', onLoaded);
      window.clearTimeout(safety);
    };
  }, [isLoading]);

  const sectionTop = (element: HTMLElement) => Math.max(element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT, 0);

  // Défilement vers une section, avec compensation de la navbar fixe
  const scrollToSection = useCallback(
    (sectionId: Section) => {
      const element = document.getElementById(sectionId);
      if (!element) return;
      markNavigating();
      setActiveSection(sectionId);
      window.scrollTo({ top: sectionTop(element), behavior: 'smooth' });

      // Les sections chargées à la demande (widget Instagram, carte) changent la hauteur de la page en cours de route :
      // tant que la position de la cible bouge, on recale (instantanément). Un geste de l'utilisateur interrompt le suivi.
      let last = sectionTop(element);
      let ticks = 0;
      const stop = () => {
        window.clearInterval(interval);
        window.removeEventListener('wheel', stop);
        window.removeEventListener('touchstart', stop);
      };
      const interval = window.setInterval(() => {
        const now = sectionTop(element);
        if (Math.abs(now - last) > 2) window.scrollTo({ top: now, behavior: 'instant' });
        last = now;
        if (++ticks > 20) stop(); // ~5 s
      }, 250);
      window.addEventListener('wheel', stop, { passive: true });
      window.addEventListener('touchstart', stop, { passive: true });
    },
    [markNavigating]
  );

  // Lien vers une section (`/#services`, depuis une autre page ou le footer) : on y défile une fois la page prête
  useEffect(() => {
    if (isLoading || !hash) return;
    const id = hash.slice(1) as Section;
    if (!Object.values(Section).includes(id)) return;
    const timer = window.setTimeout(() => scrollToSection(id), 100);
    return () => window.clearTimeout(timer);
  }, [hash, isLoading, scrollToSection]);

  const scrollToNextSection = () => {
    const next = document.getElementById(Section.HERO)?.nextElementSibling as HTMLElement | null;
    if (!next) return;
    markNavigating();
    window.scrollTo({ top: sectionTop(next), behavior: 'smooth' });
    if (next.id) setActiveSection(next.id as Section);
  };

  // Scroll spy : met à jour le menu quand on défile manuellement (une passe par frame, pas par événement)
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setShowBackToTop(window.scrollY > 400);
      if (isNavigatingRef.current) return; // navigation programmée en cours

      // Point de déclenchement : 30 % de la hauteur de la fenêtre
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      for (let i = ORDERED_SECTIONS.length - 1; i >= 0; i--) {
        const element = document.getElementById(ORDERED_SECTIONS[i]);
        if (element && scrollPosition >= element.getBoundingClientRect().top + window.scrollY) {
          setActiveSection(ORDERED_SECTIONS[i]);
          break;
        }
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => () => window.clearTimeout(navTimerRef.current), []);

  return (
    <>
      <SEOSchema />
      <Preloader isLoading={isLoading} />

      <div className={`min-h-screen bg-background text-textPrimary font-sans selection:bg-accent selection:text-white ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

        <main id="main-content">
          {isNavigating && <div className="fixed top-0 left-0 right-0 h-0.5 bg-accent z-[60]" />}
          <section id={Section.HERO}>
            <Hero onScrollDown={scrollToNextSection} />
          </section>

          <section id={Section.GALLERY} className="min-h-screen">
            <LazyMount rootMargin="800px 0px" placeholderClassName="min-h-screen">
              <Gallery />
            </LazyMount>
          </section>

          <section id={Section.SERVICES} className="relative z-10 bg-background min-h-screen border-b border-white/5">
            <Services />
          </section>

          <section id={Section.BLOG}>
            <BlogPreview />
          </section>

          <section id={Section.TECH} className="min-h-screen">
            <TechSpecs />
          </section>

          <section id={Section.ZONE} className="min-h-screen">
            <LazyMount rootMargin="800px 0px" placeholderClassName="min-h-screen">
              <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
                <Coverage />
              </Suspense>
            </LazyMount>
          </section>

          <section id={Section.REVIEWS} className="min-h-screen bg-background border-t border-white/5">
            <ReviewsAndFaq />
          </section>

          <section className="bg-gradient-to-b from-background to-surfaceHighlight">
            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="rounded-[2rem] border border-accent/30 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent p-8 md:p-10 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white">Un projet en tête ?</h2>
                    <p className="text-white/80 mt-1">Drone, montage, digital: recevez une proposition claire et rapide.</p>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center bg-accent text-background font-bold px-6 py-3 rounded-full hover:bg-white transition-colors border border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Devis gratuit
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {showBackToTop && (
          <button
            type="button"
            onClick={() => {
              markNavigating();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="fixed bottom-6 left-6 z-40 bg-black/60 text-white border border-white/10 backdrop-blur-md p-3 rounded-full hover:bg-black/80 transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Retour en haut"
          >
            <ChevronUp size={18} />
          </button>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
