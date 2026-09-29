export interface PageMeta {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  priority: number;
}
export const SITE_URL: string;
export const DEFAULT_OG_IMAGE: string;
export const HOME: PageMeta;
export const PAGES: PageMeta[];
export function canonicalFor(path: string): string;
export function findPage(path: string): PageMeta | undefined;
