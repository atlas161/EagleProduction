import { parseFrontMatter } from '../lib/frontmatter.mjs';

export interface BlogPost {
  published: boolean;
  date: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  coverImage?: string;
  excerpt?: string;
  body: string; // HTML from rich-text or markdown
  seoTitle?: string;
  seoDescription?: string;
}

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

export const getReadingTimeMinutes = (content: string) => {
  // Remove HTML tags if present
  const plainText = stripHtml(content);
  const words = plainText.split(' ').filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

const toPost = (raw: string): BlogPost | null => {
  const parsed = parseFrontMatter(raw);
  if (!parsed || !parsed.data.slug || !parsed.data.title) return null;
  const { data, body } = parsed;
  return {
    published: data.published !== false,
    date: String(data.date ?? ''),
    title: String(data.title),
    slug: String(data.slug),
    category: String(data.category ?? 'Blog'),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
    seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
    seoDescription: data.seoDescription ? String(data.seoDescription) : undefined,
    body,
  };
};

let cache: BlogPost[] | null = null;

export const loadAllPosts = (): BlogPost[] => {
  if (cache) return cache;
  const mdModules = import.meta.glob('/content/posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  cache = Object.values(mdModules)
    .map((raw) => {
      try {
        return toPost(raw);
      } catch (error) {
        console.error('Erreur de lecture d’un article :', error);
        return null;
      }
    })
    .filter((p): p is BlogPost => !!p && p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache;
};

export const findPostBySlug = (slug: string): BlogPost | undefined => {
  return loadAllPosts().find((p) => p.slug === slug);
};
