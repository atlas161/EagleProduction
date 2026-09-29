import { useEffect } from 'react';
import { DEFAULT_OG_IMAGE, HOME, canonicalFor, findPage } from '../lib/pages.mjs';

export interface SeoOptions {
  /** Chemin de la page (ex. « /chantier ») : titre, description et mots-clés viennent de lib/pages.mjs. */
  path: string;
  /** Surcharges (articles de blog, 404…). */
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  /** Page hors index (404) : pas de canonical, robots « noindex ». */
  noindex?: boolean;
}

type MetaAttr = 'name' | 'property';

const setMeta = (attr: MetaAttr, key: string, value: string | null) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (value === null) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

const setLink = (rel: string, href: string | null, hreflang?: string) => {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (href === null) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/**
 * Applique les métadonnées SEO de la page (title, description, canonical, Open Graph, Twitter, robots).
 * Chaque route publique doit l'appeler : sans cela, la navigation interne (SPA) garderait les métas de la page précédente.
 */
export const useSeo = (options: SeoOptions | string) => {
  const opts: SeoOptions = typeof options === 'string' ? { path: options } : options;
  const registry = findPage(opts.path) ?? HOME;
  const title = opts.title ?? registry.title;
  const description = opts.description ?? registry.description;
  const keywords = opts.keywords ?? ('keywords' in registry ? registry.keywords : undefined);
  const canonical = opts.noindex ? null : canonicalFor(opts.path);
  const image = opts.image ?? DEFAULT_OG_IMAGE;
  const imageAlt = opts.imageAlt ?? title;
  const type = opts.type ?? 'website';
  const robots = opts.noindex ? 'noindex, follow' : 'index, follow';

  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords ?? null);
    setMeta('name', 'robots', robots);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:alt', imageAlt);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:url', canonical);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
    setMeta('name', 'twitter:image:alt', imageAlt);
    setLink('canonical', canonical);
    setLink('alternate', canonical, 'fr');
    setLink('alternate', canonical, 'x-default');
  }, [title, description, keywords, robots, canonical, image, imageAlt, type]);
};
