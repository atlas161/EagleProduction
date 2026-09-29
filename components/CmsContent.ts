export interface CmsFaqItem {
  published: boolean;
  category: string;
  question: string;
  slug: string;
  answer: string; // HTML from rich-text
}

export interface CmsReviewItem {
  published: boolean;
  name: string;
  slug: string;
  project: string;
  rating: number;
  content: string;
}

const safeParse = <T,>(raw: string): T | null => {
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
};

let faqCache: CmsFaqItem[] | null = null;
let reviewCache: CmsReviewItem[] | null = null;

export const loadAllFaqItems = (): CmsFaqItem[] => {
  if (faqCache) return faqCache;
  const modules = import.meta.glob('/content/faqs/*.json', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  faqCache = Object.values(modules)
    .map((raw) => safeParse<CmsFaqItem>(raw))
    .filter((v): v is CmsFaqItem => !!v && !!v.slug && v.published !== false)
    .sort((a, b) => a.category.localeCompare(b.category, 'fr') || a.question.localeCompare(b.question, 'fr'));
  return faqCache;
};

export const loadAllReviews = (): CmsReviewItem[] => {
  if (reviewCache) return reviewCache;
  const modules = import.meta.glob('/content/reviews/*.json', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  reviewCache = Object.values(modules)
    .map((raw) => safeParse<CmsReviewItem>(raw))
    .filter((v): v is CmsReviewItem => !!v && !!v.slug && v.published !== false)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0) || a.name.localeCompare(b.name, 'fr'));
  return reviewCache;
};

/** Nombre de questions affichées sur l'accueil (et déclarées dans le JSON-LD de l'accueil). */
export const HOME_FAQ_COUNT = 4;

export const stripHtml = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
