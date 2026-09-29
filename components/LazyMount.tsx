import React, { useEffect, useRef, useState } from 'react';

interface LazyMountProps {
  children: React.ReactNode;
  /** Distance avant l'entrée dans l'écran à partir de laquelle on monte le contenu. */
  rootMargin?: string;
  /** Réserve la hauteur en attendant le contenu (évite les sauts de mise en page). */
  placeholderClassName?: string;
}

/** Ne monte (et donc ne charge) ses enfants que lorsqu'ils approchent de l'écran : cartes, widgets tiers, code chargé à la demande… */
export const LazyMount: React.FC<LazyMountProps> = ({ children, rootMargin = '600px 0px', placeholderClassName = 'min-h-[60vh]' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setMounted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  if (mounted) return <>{children}</>;
  return <div ref={ref} className={placeholderClassName} aria-hidden="true" />;
};
