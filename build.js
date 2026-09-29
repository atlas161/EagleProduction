import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { PAGES, HOME, SITE_URL, DEFAULT_OG_IMAGE, canonicalFor } from './lib/pages.mjs';
import { parseFrontMatter } from './lib/frontmatter.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');

console.log('🚀 Build Eagle Production...');

// ─── 1. Build Vite (copie aussi public/ dans dist/) ──────────────────────────
console.log('🔨 Build Vite...');
execSync('vite build', { stdio: 'inherit' });

// ─── 2. Garde-fou : chaque route publique doit être déclarée dans lib/pages.mjs ─
const routerSource = fs.readFileSync(path.join(__dirname, 'index.tsx'), 'utf-8');
const routePaths = [...routerSource.matchAll(/<Route path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((p) => p !== '/' && p !== '*' && !p.includes(':'));
const declared = PAGES.map((p) => p.path);
const missingInRegistry = routePaths.filter((p) => !declared.includes(p));
const missingInRouter = declared.filter((p) => !routePaths.includes(p));
if (missingInRegistry.length || missingInRouter.length) {
  console.error('❌ Routes (index.tsx) et pages SEO (lib/pages.mjs) désynchronisées :');
  if (missingInRegistry.length) console.error('   Absentes de lib/pages.mjs :', missingInRegistry.join(', '));
  if (missingInRouter.length) console.error('   Absentes de index.tsx      :', missingInRouter.join(', '));
  process.exit(1);
}

// ─── 3. Articles de blog (Markdown + frontmatter YAML géré par Pages CMS) ────
const readBlogPosts = () => {
  const postsDir = path.join(__dirname, 'content', 'posts');
  if (!fs.existsSync(postsDir)) return [];

  const posts = [];
  for (const file of fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'))) {
    const parsed = parseFrontMatter(fs.readFileSync(path.join(postsDir, file), 'utf-8'));
    if (!parsed) {
      console.warn(`  ⚠️  ${file} : frontmatter illisible, article ignoré`);
      continue;
    }
    const { data } = parsed;
    if (data.published === false) continue;

    const slug = String(data.slug || file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''));
    const title = String(data.title || '');
    posts.push({
      slug,
      title,
      seoTitle: String(data.seoTitle || title),
      seoDescription: String(data.seoDescription || data.excerpt || ''),
      coverImage: data.coverImage ? String(data.coverImage) : '',
      date: String(data.date || new Date().toISOString().split('T')[0]),
      category: String(data.category || 'Blog'),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    });
  }
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const posts = readBlogPosts();

// ─── 4. Sitemap ──────────────────────────────────────────────────────────────
// Pas de <lastmod> pour les pages statiques : une date de build artificielle serait ignorée par Google.
console.log('🗺️  Génération du sitemap...');
const urlEntry = (loc, { priority, lastmod, changefreq } = {}) =>
  [
    '  <url>',
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority !== undefined ? `    <priority>${priority}</priority>` : null,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urlEntry(canonicalFor('/'), { priority: HOME.priority }),
  ...PAGES.map((p) => urlEntry(canonicalFor(p.path), { priority: p.priority })),
  ...posts.map((p) => urlEntry(canonicalFor(`/blog/${p.slug}`), { priority: 0.7, lastmod: p.date, changefreq: 'monthly' })),
  '</urlset>',
  '',
].join('\n');
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);
console.log(`  ✅ ${PAGES.length + 1} pages + ${posts.length} articles`);

// ─── 5. Pré-rendu SEO : une copie de index.html par route, avec ses métas ─────
const escHtml = (str) => String(str || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Remplace le contenu d'une balise ; `replace` reçoit une fonction pour éviter l'interprétation de `$` dans les textes.
const setContent = (html, pattern, value) => html.replace(pattern, (_, before, after) => `${before}${escHtml(value)}${after}`);

const injectMetas = (baseHtml, { title, description, keywords, canonical, ogImage, ogImageAlt, ogType = 'website', noindex = false, jsonLd = [], noscript = '' }) => {
  let html = baseHtml;

  html = html.replace(/<title>[^<]*<\/title>/, () => `<title>${escHtml(title)}</title>`);
  html = setContent(html, /(<meta name="description" content=")[^"]*(")/, description);
  html = setContent(html, /(<meta property="og:title" content=")[^"]*(")/, title);
  html = setContent(html, /(<meta property="og:description" content=")[^"]*(")/, description);
  html = setContent(html, /(<meta property="og:type" content=")[^"]*(")/, ogType);
  html = setContent(html, /(<meta name="twitter:title" content=")[^"]*(")/, title);
  html = setContent(html, /(<meta name="twitter:description" content=")[^"]*(")/, description);

  if (ogImage) {
    html = setContent(html, /(<meta property="og:image" content=")[^"]*(")/, ogImage);
    html = setContent(html, /(<meta name="twitter:image" content=")[^"]*(")/, ogImage);
    html = setContent(html, /(<meta property="og:image:alt" content=")[^"]*(")/, ogImageAlt || title);
    html = setContent(html, /(<meta name="twitter:image:alt" content=")[^"]*(")/, ogImageAlt || title);
  }

  if (keywords) {
    html = html.replace(/(<meta name="description"[^>]*>)/, (m) => `${m}\n    <meta name="keywords" content="${escHtml(keywords)}" />`);
  }

  if (noindex) {
    html = html.replace(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />');
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, '');
    html = html.replace(/\s*<link rel="alternate" hreflang="[^"]*"[^>]*>/g, '');
    html = html.replace(/\s*<meta (?:property="og:url"|name="twitter:url") [^>]*>/g, '');
  } else {
    html = setContent(html, /(<meta property="og:url" content=")[^"]*(")/, canonical);
    html = setContent(html, /(<meta name="twitter:url" content=")[^"]*(")/, canonical);
    html = setContent(html, /(<link rel="canonical" href=")[^"]*(")/, canonical);
    html = setContent(html, /(<link rel="alternate" hreflang="fr" href=")[^"]*(")/, canonical);
    html = setContent(html, /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/, canonical);
  }

  if (jsonLd.length) {
    const scripts = jsonLd.map((s) => `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, '\\u003c')}</script>`).join('\n    ');
    html = html.replace('</head>', () => `    ${scripts}\n  </head>`);
  }

  if (noscript) html = html.replace('</body>', () => `${noscript}\n  </body>`);
  return html;
};

// Contenu de secours sans JavaScript (robots limités, lecteurs sans JS) : titre, résumé et maillage interne
const shortTitle = (t) => t.split(' | ')[0];
const buildNoscript = (title, description) => `<noscript>
      <div style="max-width:760px;margin:0 auto;padding:96px 24px;font-family:system-ui,sans-serif;line-height:1.6;color:#FFFCF2">
        <h1>${escHtml(title)}</h1>
        <p>${escHtml(description)}</p>
        <p>Ce site utilise JavaScript pour l’affichage complet des pages.</p>
        <p><a style="color:#D4AF37" href="/contact/">Demander un devis gratuit</a> · <a style="color:#D4AF37" href="tel:+33699361715">06 99 36 17 15</a></p>
        <ul>
${PAGES.map((p) => `          <li><a style="color:#D4AF37" href="${canonicalFor(p.path)}">${escHtml(shortTitle(p.title))}</a></li>`).join('\n')}
        </ul>
      </div>
    </noscript>`;

const generatePages = (baseHtml) => {
  console.log('🏗️  Pré-rendu SEO (metas statiques par page)...');

  // Accueil : métas déjà dans index.html, on y ajoute le contenu de secours sans JavaScript
  fs.writeFileSync(
    path.join(DIST, 'index.html'),
    injectMetas(baseHtml, {
      title: HOME.title,
      description: HOME.description,
      canonical: canonicalFor('/'),
      noscript: buildNoscript(HOME.title, HOME.description),
    }),
    'utf-8'
  );

  // Pages statiques
  for (const page of PAGES) {
    const dir = path.join(DIST, ...page.path.split('/').filter(Boolean));
    fs.mkdirSync(dir, { recursive: true });
    const html = injectMetas(baseHtml, {
      title: page.title,
      description: page.description,
      keywords: page.keywords,
      canonical: canonicalFor(page.path),
      noscript: buildNoscript(page.title, page.description),
    });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  }
  console.log(`  ✅ ${PAGES.length} pages statiques`);

  // Articles de blog
  for (const post of posts) {
    const canonical = canonicalFor(`/blog/${post.slug}`);
    const ogImage = post.coverImage ? (post.coverImage.startsWith('http') ? post.coverImage : `${SITE_URL}${post.coverImage}`) : DEFAULT_OG_IMAGE;
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.seoTitle,
      description: post.seoDescription,
      image: ogImage,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@type': 'Organization', name: 'Eagle Production', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'Eagle Production',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/media/logo_beige.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      articleSection: post.category,
      keywords: post.tags.join(', '),
    };
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: canonicalFor('/blog') },
        { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
      ],
    };

    const html = injectMetas(baseHtml, {
      title: post.seoTitle,
      description: post.seoDescription,
      canonical,
      ogImage,
      ogImageAlt: post.title,
      ogType: 'article',
      jsonLd: [articleSchema, breadcrumbSchema],
      noscript: buildNoscript(post.seoTitle, post.seoDescription),
    });
    const dir = path.join(DIST, 'blog', post.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  }
  console.log(`  ✅ ${posts.length} articles (avec JSON-LD Article + fil d'Ariane)`);

  // Page 404 : Netlify la sert avec le statut 404 pour toute URL inconnue (pas de fallback SPA dans netlify.toml).
  // L'application démarre dessus et affiche NotFoundPage (route « * »).
  const notFound = injectMetas(baseHtml, {
    title: 'Page introuvable | Eagle Production',
    description: 'La page demandée n’existe pas ou a été déplacée.',
    canonical: '',
    noindex: true,
  });
  fs.writeFileSync(path.join(DIST, '404.html'), notFound, 'utf-8');
  console.log('  ✅ 404.html');
};

// ─── 6. Page légale statique : feuille de style compilée du site à la place du CDN Tailwind ───
const stylePages = ['mentions-legales.html'];
const builtIndex = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
const cssHref = builtIndex.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"/)?.[1];
for (const file of stylePages) {
  const target = path.join(DIST, file);
  if (!fs.existsSync(target)) continue;
  if (!cssHref) {
    console.warn(`  ⚠️  ${file} : feuille de style introuvable dans dist/index.html, CDN Tailwind conservé`);
    continue;
  }
  const html = fs.readFileSync(target, 'utf-8');
  const next = html.replace(/<!-- build:styles[\s\S]*?<!-- endbuild -->/, () => `<link rel="stylesheet" href="${cssHref}" />`);
  if (next === html) console.warn(`  ⚠️  ${file} : bloc « build:styles » introuvable`);
  fs.writeFileSync(target, next, 'utf-8');
}

generatePages(builtIndex);

console.log('✅ Build terminé !');
console.log(`📊 SEO : ${PAGES.length + 1} pages, ${posts.length} articles pré-rendus, sitemap et 404 générés`);
