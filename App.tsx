import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import './index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TechSpecs } from './components/TechSpecs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Section } from './types';
import { Preloader } from './components/Preloader';
import { Coverage } from './components/Coverage';
import { Gallery } from './components/Gallery';
import { CookieBanner } from './components/CookieBanner';
import { About } from './components/About';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { SEOSchema } from './components/SEOSchema';

function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Gestion du chargement initial (Preloader)
  useEffect(() => {
    const handleLoad = () => {
      // Petit délai artificiel minimum de 1.5s pour que l'utilisateur voit le logo
      // et pour assurer une transition fluide
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    // Si le document est déjà chargé (cas du refresh rapide)
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Sinon on attend que tout (images, scripts) soit chargé
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Fonction de scroll manuel avec calcul de l'offset pour la navbar fixe
  const scrollToSection = (sectionId: Section) => {
    const anchorMap: Partial<Record<Section, string>> = {
      [Section.SERVICES]: 'services-title',
      [Section.ABOUT]: 'about-title',
      [Section.TECH]: 'tech-title',
      [Section.REVIEWS]: 'reviews-title',
      [Section.CONTACT]: 'contact-title',
    };
    const targetId = anchorMap[sectionId];
    const el = (targetId && document.getElementById(targetId)) || document.getElementById(sectionId);
    
    if (el) {
      // Hauteur de sécurité fixe pour la navbar + un peu d'espace
      const offset = 120; 

      setIsNavigating(true);
      
      // Scroll natif standard
      const rectTop = el.getBoundingClientRect().top + window.scrollY;
      const targetY = rectTop - offset;
      window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' });
      
      setActiveSection(sectionId);
      window.setTimeout(() => setIsNavigating(false), 800);
    }
  };

  const scrollToNextSection = () => {
    const current = document.getElementById(Section.HERO);
    const next = current?.nextElementSibling as HTMLElement | null;
    if (next) {
      const offset = 100;
      setIsNavigating(true);
      
      const rectTop = next.getBoundingClientRect().top + window.scrollY;
      const targetY = rectTop - offset;
      window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' });
      
      const nextId = next.id as Section;
      if (nextId) setActiveSection(nextId);
      window.setTimeout(() => setIsNavigating(false), 800);
    }
  };

  // Système de "Scroll Spy" pour mettre à jour le menu quand on défile manuellement
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      const sections = Object.values(Section);
      const scrollPosition = window.scrollY + 100; // Point de déclenchement un peu plus bas que le haut de l'écran

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEOSchema />
      <Preloader isLoading={isLoading} />
      
      <div className={`min-h-screen bg-background text-textPrimary font-sans selection:bg-accent selection:text-white transition-opacity duration-700 ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
        
        <main>
          {isNavigating && (
            <div className="fixed top-0 left-0 right-0 h-0.5 bg-accent z-[60]" />
          )}
          <section id={Section.HERO} className="scroll-mt-20">
            <Hero onScrollDown={scrollToNextSection} />
          </section>

          <section id={Section.GALLERY} className="min-h-screen scroll-mt-20">
            <Gallery />
          </section>

          <section id={Section.SERVICES} className="relative z-10 bg-background min-h-screen scroll-mt-20 border-b border-white/5">
            <Services />
          </section>

          <section id={Section.ABOUT} className="py-8 scroll-mt-20 border-b border-white/5">
            <About />
          </section>

          <section id={Section.TECH} className="min-h-screen scroll-mt-20">
            <TechSpecs />
          </section>

          <section id={Section.ZONE} className="min-h-screen scroll-mt-20">
            <Coverage />
          </section>

          <section id={Section.REVIEWS} className="min-h-screen bg-background border-t border-white/5 scroll-mt-20">
            <ReviewsAndFaq />
          </section>

          <section id={Section.CONTACT} className="bg-gradient-to-b from-background to-surfaceHighlight min-h-screen scroll-mt-20">
            <Contact />
          </section>
        </main>

        {showBackToTop && (
          <button
            onClick={() => {
              setIsNavigating(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.setTimeout(() => setIsNavigating(false), 800);
            }}
            className="fixed bottom-6 right-6 z-50 bg-black/60 text-white border border-white/10 backdrop-blur-md p-3 rounded-full hover:bg-black/80 transition-colors shadow-lg"
            aria-label="Retour en haut"
          >
            <ChevronUp size={18} />
          </button>
        )}
        <CookieBanner />
        <div>
            <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
