# Graph Report - EagleProduction  (2026-09-29)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 354 nodes · 795 edges · 25 communities (16 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `773c03ff`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 20
- Community 21
- Community 22
- Community 23

## God Nodes (most connected - your core abstractions)
1. `useSeo()` - 49 edges
2. `react` - 47 edges
3. `lucide-react` - 34 edges
4. `Navbar()` - 25 edges
5. `Reveal()` - 25 edges
6. `Footer()` - 24 edges
7. `compilerOptions` - 16 edges
8. `Section` - 13 edges
9. `loadAllFaqItems()` - 8 edges
10. `getReadingTimeMinutes()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `ContactPage()` --calls--> `useSeo()`  [EXTRACTED]
  components/ContactPage.tsx → hooks/useSeo.ts
- `ZonePage()` --calls--> `useSeo()`  [EXTRACTED]
  components/ZonePage.tsx → hooks/useSeo.ts
- `NavbarProps` --references--> `Section`  [EXTRACTED]
  components/Navbar.tsx → types.ts
- `AboutPage()` --calls--> `useSeo()`  [EXTRACTED]
  components/AboutPage.tsx → hooks/useSeo.ts
- `ConstructionTrackingPage()` --calls--> `useSeo()`  [EXTRACTED]
  components/ConstructionTrackingPage.tsx → hooks/useSeo.ts

## Import Cycles
- None detected.

## Communities (25 total, 9 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (44): About(), renderParagraph(), AboutPage(), ConstructionTracking(), ConstructionTrackingPage(), CreationSiteWebPage(), EagleDigital(), EagleDigitalPage() (+36 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (47): App(), ORDERED_SECTIONS, readPreloaded(), CmsFaqItem, CmsReviewItem, HOME_FAQ_COUNT, loadAllFaqItems(), loadAllReviews() (+39 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (24): clearAnalyticsCookies(), CookieBanner(), injectClarity(), injectGtm(), loadAnalytics(), OPEN_COOKIE_SETTINGS_EVENT, readConsent(), InternalLinkHandler() (+16 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (26): buildNoscript(), builtIndex, declared, __dirname, DIST, escHtml(), generatePages(), injectMetas() (+18 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (19): readBlogPosts(), BlogArticlePage(), BlogPost, findPostBySlug(), getReadingTimeMinutes(), loadAllPosts(), stripHtml(), toPost() (+11 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, allowJs, experimentalDecorators, isolatedModules, jsx, lib, module (+10 more)

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (15): engines, node, name, private, type, version, autoprefixer, @fontsource-variable/inter (+7 more)

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (13): BLOCKED_DOMAINS, checkRateLimit(), Contact(), FormStatus, isValidEmail(), recordSubmission(), STATUS_MESSAGES, subjects (+5 more)

### Community 8 - "Community 8"
Cohesion: 0.16
Nodes (11): Coverage, BreadcrumbItem, Breadcrumbs(), BreadcrumbsProps, CITIES, City, Coverage(), Department (+3 more)

### Community 9 - "Community 9"
Cohesion: 0.15
Nodes (12): NavbarProps, Section, ABOUT, BLOG, CONTACT, GALLERY, HERO, REVIEWS (+4 more)

### Community 10 - "Community 10"
Cohesion: 0.18
Nodes (11): dependencies, clsx, @fontsource-variable/inter, framer-motion, @headlessui/react, leaflet, lucide-react, react (+3 more)

### Community 11 - "Community 11"
Cohesion: 0.18
Nodes (10): ImportMeta, ImportMetaEnv, *.jpeg, *.jpg, *.mp4, *.png, *.svg, *.webm (+2 more)

### Community 12 - "Community 12"
Cohesion: 0.22
Nodes (9): devDependencies, autoprefixer, postcss, tailwindcss, @types/leaflet, @types/node, typescript, vite (+1 more)

### Community 13 - "Community 13"
Cohesion: 0.22
Nodes (6): ref_fs, ref_path, vite, @vitejs/plugin-react, MEDIA_DIR, PUBLIC_MEDIA

### Community 14 - "Community 14"
Cohesion: 0.25
Nodes (7): *.jpeg, *.jpg, *.mp4, *.png, *.svg, *.webm, *.webp

### Community 15 - "Community 15"
Cohesion: 0.40
Nodes (5): scripts, build, dev, preview, typecheck

## Knowledge Gaps
- **129 isolated node(s):** `NavLink`, `RevealProps`, `MetaAttr`, `SeoOptions`, `CmsReviewItem` (+124 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 148 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Community 0` to `Community 1`, `Community 2`, `Community 4`, `Community 6`, `Community 7`, `Community 8`, `Community 9`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `Community 0` to `Community 1`, `Community 4`, `Community 6`, `Community 7`, `Community 8`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Why does `useSeo()` connect `Community 0` to `Community 1`, `Community 3`, `Community 4`, `Community 7`, `Community 8`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **What connects `NavLink`, `RevealProps`, `MetaAttr` to the rest of the system?**
  _129 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10400682011935208 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.0546448087431694 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09113300492610837 - nodes in this community are weakly interconnected._