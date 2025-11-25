import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TechSpecs } from './components/TechSpecs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Section } from './types';
import { Reveal } from './components/Reveal';
import { Preloader } from './components/Preloader';
import { Coverage } from './components/Coverage';
import { Gallery } from './components/Gallery';
import { CookieBanner } from './components/CookieBanner';

function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

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
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Hauteur de la navbar + un peu d'espace
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // On met à jour l'état immédiatement au clic
      setActiveSection(sectionId);
    }
  };

  const scrollToNextSection = () => {
    const current = document.getElementById(Section.HERO);
    const next = current?.nextElementSibling as HTMLElement | null;
    if (next) {
      const headerOffset = 80;
      const elementPosition = next.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      const nextId = next.id as Section;
      if (nextId) setActiveSection(nextId);
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
      <Preloader isLoading={isLoading} />
      
      <div className={`min-h-screen bg-background text-textPrimary font-sans selection:bg-accent selection:text-white transition-opacity duration-700 ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
        
        <main>
          <section id={Section.HERO}>
            <Hero onScrollDown={scrollToNextSection} />
          </section>

          <section id={Section.GALLERY} className="min-h-screen">
            <Gallery />
          </section>

          <section id={Section.SERVICES} className="relative z-10 bg-background min-h-screen">
            <Services />
          </section>

          <section id={Section.TECH} className="min-h-screen">
            <TechSpecs />
          </section>

          <section id={Section.ZONE} className="min-h-screen">
            <Coverage />
          </section>

          <section id={Section.CONTACT} className="bg-gradient-to-b from-background to-surfaceHighlight min-h-screen">
            <Contact />
          </section>
        </main>

        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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