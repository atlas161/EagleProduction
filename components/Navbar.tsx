import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoBeige from '../media/logo_beige.png';
import eagleBeige from '../media/aigle_beige.png';
import { Section } from '../types';
import { ArrowLeft, ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  /** Section visible sur l'accueil (scroll spy). Absent sur les autres pages. */
  activeSection?: Section | null;
  /** Défilement fluide vers une section de l'accueil. Sans lui (autres pages), on navigue vers `/#section`. */
  scrollToSection?: (section: Section) => void;
}

type NavLink =
  | { kind: 'section'; id: Section; label: string }
  | { kind: 'href'; href: string; label: string };

const NAV_LINKS: NavLink[] = [
  { kind: 'section', id: Section.HERO, label: 'Accueil' },
  { kind: 'section', id: Section.GALLERY, label: 'Portfolio' },
  { kind: 'section', id: Section.SERVICES, label: 'Formules' },
  { kind: 'href', href: '/blog', label: 'Blog' },
  { kind: 'section', id: Section.ZONE, label: 'Zone' },
  { kind: 'href', href: '/a-propos', label: 'À propos' },
  { kind: 'section', id: Section.REVIEWS, label: 'Avis & FAQ' },
];

const FORMULES_PATHS = [
  '/chantier',
  '/inspection',
  '/eagle-production',
  '/inspection-suivi',
  '/immobilier-drone',
  '/reels-shorts',
  '/sport-action',
  '/photo-video',
  '/evenementiel',
  '/eagle-digital',
];

const desktopItem = (active: boolean, open = false) =>
  `relative px-2.5 xl:px-5 py-2 rounded-full text-sm font-medium tracking-wider whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 ${
    active
      ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]'
      : open
        ? 'text-white bg-white/5'
        : 'text-white/80 hover:text-white hover:bg-white/5 hover:shadow-[0_0_10px_rgba(255,255,255,0.05)]'
  }`;

const mobileItem = (active: boolean) =>
  `text-2xl font-medium text-left transition-colors focus:outline-none focus-visible:text-accent ${active ? 'text-accent' : 'text-textPrimary'}`;

export const Navbar: React.FC<NavbarProps> = ({ activeSection = null, scrollToSection }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<'root' | 'formules'>('root');
  const [isFormulesOpen, setIsFormulesOpen] = useState(false);
  const formulesRef = useRef<HTMLDivElement | null>(null);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!isFormulesOpen) return;
      const target = e.target as Node | null;
      if (target && formulesRef.current && !formulesRef.current.contains(target)) {
        setIsFormulesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setIsFormulesOpen(false);
      setIsMobileMenuOpen(false);
    };
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isFormulesOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) setMobilePanel('root');
  }, [isMobileMenuOpen]);

  // Verrouille le défilement de la page derrière le menu mobile
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  // Ferme les menus à chaque changement de page
  useEffect(() => {
    setIsFormulesOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const goToSection = (id: Section) => {
    setIsFormulesOpen(false);
    setIsMobileMenuOpen(false);
    if (isHome && scrollToSection) {
      scrollToSection(id);
    } else {
      navigate(id === Section.HERO ? '/' : `/#${id}`);
    }
  };

  const isSectionActive = (id: Section) => {
    if (isHome) return activeSection === id;
    if (id === Section.SERVICES) return FORMULES_PATHS.includes(pathname) || pathname.startsWith('/eagle-digital/');
    if (id === Section.ZONE) return pathname === '/zone';
    if (id === Section.REVIEWS) return pathname === '/faq';
    return false;
  };

  const isHrefActive = (href: string) => {
    if (pathname === href || pathname.startsWith(`${href}/`)) return true;
    return isHome && href === '/blog' && activeSection === Section.BLOG;
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-accent focus:text-background focus:font-semibold focus:px-4 focus:py-2 focus:rounded-full"
      >
        Aller au contenu principal
      </a>
      <nav
        aria-label="Navigation principale"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-2'
            : 'bg-black/20 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="/"
            onClick={(e) => {
              if (isHome && scrollToSection) {
                e.preventDefault();
                scrollToSection(Section.HERO);
              }
            }}
            aria-label="Eagle Production — accueil"
            className="flex items-center gap-4 group shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            <img src={logoBeige} alt="Eagle Production" className="hidden md:block h-12 w-auto object-contain" />
            <img src={eagleBeige} alt="" aria-hidden="true" className="md:hidden h-10 w-auto object-contain" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV_LINKS.map((link) =>
              link.kind === 'href' ? (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isHrefActive(link.href) ? 'page' : undefined}
                  className={desktopItem(isHrefActive(link.href))}
                >
                  {link.label}
                </a>
              ) : link.id === Section.SERVICES ? (
                <div key={link.id} className="relative" ref={formulesRef}>
                  <button
                    type="button"
                    onClick={() => setIsFormulesOpen((v) => !v)}
                    aria-haspopup="true"
                    aria-expanded={isFormulesOpen}
                    aria-controls="menu-formules"
                    className={`${desktopItem(isSectionActive(link.id), isFormulesOpen)} inline-flex items-center gap-2`}
                  >
                    {link.label}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isFormulesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    id="menu-formules"
                    className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[260px] rounded-2xl border border-white/10 bg-background/90 backdrop-blur-2xl shadow-xl shadow-black/40 overflow-hidden transition-all duration-200 ${
                      isFormulesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                    }`}
                  >
                    <div className="p-2 grid grid-cols-1 gap-1">
                      {[
                        { href: '/eagle-production', label: 'Production vidéo' },
                        { href: '/eagle-digital', label: 'Production Digital' },
                      ].map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsFormulesOpen(false)}
                          className="group flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 hover:bg-white/[0.06] focus:outline-none focus-visible:bg-white/[0.08] transition-all"
                        >
                          <span className="text-white/90 font-semibold text-sm">{item.label}</span>
                          <ChevronDown size={18} className="-rotate-90 text-white/60 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                        </a>
                      ))}
                      <button
                        type="button"
                        onClick={() => goToSection(Section.SERVICES)}
                        className="group flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-left hover:bg-white/[0.06] focus:outline-none focus-visible:bg-white/[0.08] transition-all border-t border-white/5 mt-1"
                      >
                        <span className="text-white/70 text-sm">Tarifs &amp; toutes les prestations</span>
                        <ChevronDown size={18} className="-rotate-90 text-white/60 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => goToSection(link.id)}
                  aria-current={isSectionActive(link.id) ? 'true' : undefined}
                  className={desktopItem(isSectionActive(link.id))}
                >
                  {link.label}
                </button>
              )
            )}
            <a
              href="/contact"
              className="ml-3 xl:ml-6 whitespace-nowrap bg-accent text-background text-xs font-bold px-5 xl:px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Devis Gratuit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-textPrimary p-2 hover:bg-white/10 rounded-full transition-colors backdrop-blur-md bg-black/20 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="menu-mobile"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          id="menu-mobile"
          className={`lg:hidden absolute top-full left-0 w-full h-[calc(100dvh-80px)] bg-background/95 backdrop-blur-2xl border-t border-white/10 px-6 py-8 flex flex-col gap-6 overflow-y-auto transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }`}
        >
          {mobilePanel === 'root' ? (
            <>
              {NAV_LINKS.map((link) =>
                link.kind === 'href' ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isHrefActive(link.href) ? 'page' : undefined}
                    className={mobileItem(isHrefActive(link.href))}
                  >
                    {link.label}
                  </a>
                ) : link.id === Section.SERVICES ? (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => setMobilePanel('formules')}
                    className={`${mobileItem(isSectionActive(link.id))} inline-flex items-center justify-between`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={22} className="-rotate-90" />
                  </button>
                ) : (
                  <button key={link.id} type="button" onClick={() => goToSection(link.id)} className={mobileItem(isSectionActive(link.id))}>
                    {link.label}
                  </button>
                )
              )}
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-accent text-background text-lg font-bold py-4 rounded-xl text-center shadow-lg shadow-accent/20"
              >
                Demander un devis
              </a>
            </>
          ) : (
            <div className="flex flex-col gap-6">
              <button type="button" onClick={() => setMobilePanel('root')} className={`${mobileItem(false)} inline-flex items-center gap-3 hover:text-white`}>
                <ArrowLeft size={22} />
                Retour
              </button>

              <a href="/eagle-production" onClick={() => setIsMobileMenuOpen(false)} className={`${mobileItem(false)} inline-flex items-center justify-between hover:text-white`}>
                <span>Production vidéo</span>
                <ChevronDown size={22} className="-rotate-90 text-white/60" />
              </a>

              <a href="/eagle-digital" onClick={() => setIsMobileMenuOpen(false)} className={`${mobileItem(false)} inline-flex items-center justify-between hover:text-white`}>
                <span>Production Digital</span>
                <ChevronDown size={22} className="-rotate-90 text-white/60" />
              </a>

              <button type="button" onClick={() => goToSection(Section.SERVICES)} className={`${mobileItem(false)} inline-flex items-center justify-between hover:text-white`}>
                <span>Tarifs &amp; prestations</span>
                <ChevronDown size={22} className="-rotate-90 text-white/60" />
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
