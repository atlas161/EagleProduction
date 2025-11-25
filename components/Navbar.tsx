import React, { useState, useEffect } from 'react';
import logoBeige from '../media/logo_beige.png';
import { Section } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: Section.GALLERY, label: 'Galerie' },
    { id: Section.SERVICES, label: 'Services' },
    { id: Section.TECH, label: 'Technologie' },
    { id: Section.ZONE, label: 'Zone' },
    { id: Section.CONTACT, label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-background/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo & Brand Name */}
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => scrollToSection(Section.HERO)}
        >
          <img src={logoBeige} alt="Eagle Production" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-5 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-300 ${
                activeSection === link.id 
                  ? 'text-white bg-white/10' 
                  : 'text-textSecondary hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection(Section.CONTACT)}
            className="ml-6 bg-accent text-background text-xs font-bold px-6 py-2.5 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            Devis Gratuit
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-textPrimary p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full h-screen bg-background/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col gap-6 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-2xl font-medium text-left transition-colors ${
                activeSection === link.id ? 'text-accent' : 'text-textPrimary'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
             onClick={() => {
                scrollToSection(Section.CONTACT);
                setIsMobileMenuOpen(false);
              }}
             className="mt-4 bg-accent text-background text-lg font-bold py-4 rounded-xl text-center"
          >
            Demander un devis
          </button>
        </div>
      )}
    </nav>
  );
};