import React, { useEffect } from 'react';
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom';

/**
 * Navigation interne sans rechargement : intercepte les clics sur les liens `<a href="/…">`
 * pour passer par le routeur (les liens externes, fichiers `.html`/`.pdf`, `target=_blank`
 * et clics modifiés — Ctrl/Cmd/Maj/molette — gardent leur comportement natif).
 */
export const InternalLinkHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as Element | null)?.closest?.('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;
      if ((anchor.target && anchor.target !== '_self') || anchor.hasAttribute('download')) return;
      const url = new URL(href, window.location.origin);
      if (/\.[a-z0-9]+$/i.test(url.pathname)) return;
      e.preventDefault();
      navigate(url.pathname + url.search + url.hash);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  return null;
};

/**
 * Remonte en haut à chaque nouvelle page (le retour arrière garde la restauration native du navigateur)
 * et gère les ancres `#id` hors accueil (l'accueil scrolle vers ses sections lui-même).
 */
export const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (pathname === '/' && hash) return;
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    if (navigationType === 'POP') return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // instantané malgré `scroll-smooth` sur <html>
  }, [pathname, hash, navigationType]);

  return null;
};
