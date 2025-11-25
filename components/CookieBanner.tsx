import React, { useEffect, useState } from 'react';

const getGaId = () => {
  const envId = (import.meta as any)?.env?.VITE_GA_ID;
  const meta = document.querySelector('meta[name="ga-id"]') as HTMLMetaElement | null;
  return envId || meta?.content || '';
};

const injectGa = (gaId: string) => {
  if (!gaId || (window as any).gtag) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);
  (window as any).dataLayer = (window as any).dataLayer || [];
  const gtag = function(){ (window as any).dataLayer.push(arguments); } as any;
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', gaId, {
    anonymize_ip: true,
    allow_google_signals: false,
  });
};

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const gaId = getGaId();

  useEffect(() => {
    const consent = localStorage.getItem('ga_consent');
    setVisible(consent !== 'true');
    if (consent === 'true' && gaId) injectGa(gaId);
  }, [gaId]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-[340px] bg-black/80 text-white border border-white/10 backdrop-blur-md rounded-xl shadow-lg animate-fade-in">
      <div className="px-4 py-3 flex flex-col gap-3">
        <div className="text-[12px] leading-snug text-white/80">
          Nous utilisons uniquement Google Analytics (GA4) pour mesurer l’audience.
          En cliquant « Accepter », vous consentez au dépôt de cookies de mesure.
          <a href="/mentions-legales.html#confidentialite" className="text-accent font-semibold ml-1 hover:underline">En savoir plus</a>
        </div>
        <div className="flex-shrink-0 flex flex-col gap-2">
          <button
            onClick={() => {
              localStorage.setItem('ga_consent', 'true');
              setVisible(false);
              if (gaId) injectGa(gaId);
            }}
            className="bg-accent text-background text-[12px] font-bold px-3 py-2 rounded-full hover:bg-white transition-colors w-full"
            aria-label="Accepter les cookies de mesure d’audience"
          >
            Accepter
          </button>
          <button
            onClick={() => {
              localStorage.setItem('ga_consent', 'false');
              setVisible(false);
            }}
            className="text-white/70 hover:text-white text-[12px] font-medium px-2 py-1 w-full"
            aria-label="Refuser les cookies de mesure d’audience"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};