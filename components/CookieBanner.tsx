import React, { useEffect, useState } from 'react';

const GTM_ID = 'GTM-P6ZWJ8RQ';
const CLARITY_ID = 'ypwrw3ymck';

// Clé de stockage du choix (v2 : la finalité a été élargie à Clarity, le choix est donc redemandé)
const CONSENT_KEY = 'eagle_consent_v2';
// Événement permettant de rouvrir la bannière (lien « Gérer mes cookies »)
const CONSENT_TTL_MS = 1000 * 60 * 60 * 24 * 182;
export const OPEN_COOKIE_SETTINGS_EVENT = 'eagle:open-cookie-settings';

const injectGtm = () => {
  if ((window as any).google_tag_manager && (window as any).google_tag_manager[GTM_ID]) {
    return; // GTM already initialized
  }

  (function(w: any, d: any, s: string, l: string, i: string) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', GTM_ID);
};

const injectClarity = () => {
  if (document.querySelector('script[src^="https://www.clarity.ms/tag/"]')) return;

  (function(c: any, l: Document, a: string, r: string, i: string) {
    c[a] = c[a] || function(...args: any[]) { (c[a].q = c[a].q || []).push(args); };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = 'https://www.clarity.ms/tag/' + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode!.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);

  // Signal de consentement explicite (Consent Mode Clarity)
  (window as any).clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });
};

const loadAnalytics = () => {
  injectGtm();
  injectClarity();
};

// Supprime les cookies de mesure d'audience déposés (retrait du consentement)
const clearAnalyticsCookies = () => {
  const names = ['_clck', '_clsk', 'CLID', 'ANONCHK', 'MR', 'MUID', 'SM', 'SRM_B'];
  const host = window.location.hostname;
  const domains = ['', host, '.' + host, '.' + host.replace(/^www\./, '')];
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (names.includes(name) || name.startsWith('_ga') || name.startsWith('_gid')) {
      domains.forEach((d) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? '; domain=' + d : ''}`;
      });
    }
  });
};

const readConsent = (): boolean | null => {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (raw === null) return null;
    const { analytics, date } = JSON.parse(raw);
    // Le choix est redemandé après 6 mois
    if (!date || Date.now() - new Date(date).getTime() > CONSENT_TTL_MS) return null;
    return analytics === true;
  } catch {
    return null;
  }
};

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    // Afficher la bannière seulement si aucun choix n'a été fait
    setVisible(consent === null);

    // Aucun traceur avant consentement : on ne charge qu'après « Accepter »
    if (consent === true) {
      loadAnalytics();
    }

    const open = () => {
      setIsClosing(false);
      setVisible(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);

    // Lien depuis la page statique des mentions légales
    if (new URLSearchParams(window.location.search).has('gestion-cookies')) {
      open();
    }
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
  }, []);

  const handleClose = (accepted: boolean) => {
    const previous = readConsent();
    setIsClosing(true);
    setTimeout(() => {
      try {
        localStorage.setItem(
          CONSENT_KEY,
          JSON.stringify({ analytics: accepted, date: new Date().toISOString() })
        );
      } catch {
        /* stockage indisponible : le choix vaut pour la session uniquement */
      }
      setVisible(false);
      if (accepted) {
        loadAnalytics();
      } else if (previous === true) {
        // Retrait du consentement : on coupe Clarity, supprime les cookies et recharge sans traceurs
        try { (window as any).clarity?.('consent', false); } catch { /* noop */ }
        clearAnalyticsCookies();
        window.location.reload();
      }
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className={`fixed bottom-3 left-3 right-3 sm:left-auto sm:bottom-6 sm:right-6 z-[60] sm:max-w-[340px] bg-black/80 text-white border border-white/10 backdrop-blur-xl rounded-xl shadow-lg transition-all duration-300 ${isClosing ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}
    >
      <div className="px-4 py-3 flex flex-col gap-3">
        <div className="text-[12px] leading-snug text-white/80">
          Nous utilisons des cookies de mesure d’audience (Google Tag Manager / Analytics et Microsoft Clarity, qui enregistre
          de façon anonymisée la navigation) pour améliorer le site. Ils ne sont déposés qu’avec votre accord, que vous pouvez
          modifier à tout moment via « Gérer mes cookies » en bas de page.
          <a href="/mentions-legales.html#cookies" className="text-accent font-semibold ml-1 hover:underline">En savoir plus</a>
        </div>
        <div className="flex-shrink-0 flex flex-row sm:flex-col gap-2">
          <button
            type="button"
            onClick={() => handleClose(true)}
            className="bg-accent text-background text-[12px] font-bold px-3 py-2 rounded-full hover:bg-white transition-colors w-full"
            aria-label="Accepter les cookies"
          >
            Accepter
          </button>
          <button
            type="button"
            onClick={() => handleClose(false)}
            className="bg-white/10 text-white text-[12px] font-bold px-3 py-2 rounded-full hover:bg-white/20 transition-colors w-full"
            aria-label="Refuser les cookies"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};
