import React, { useMemo, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Breadcrumbs } from './Breadcrumbs';
import '../index.css';
import { Section } from '../types';
import { getReadingTimeMinutes, loadAllPosts } from './BlogData';
import { ArrowRight, Tag, BookOpen, Clock, CalendarDays, Film, Globe, MessageCircle } from 'lucide-react';

const CATEGORY_META: Record<string, { color: string; bg: string }> = {
  'Drone':         { color: 'text-sky-400',     bg: 'bg-sky-400/10 border-sky-400/20' },
  'Montage vidéo': { color: 'text-violet-400',  bg: 'bg-violet-400/10 border-violet-400/20' },
  'Digital':       { color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
};

const DroneIconSm = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="2" /><line x1="12" y1="10" x2="12" y2="6" /><line x1="12" y1="14" x2="12" y2="18" />
    <line x1="10" y1="12" x2="6" y2="12" /><line x1="14" y1="12" x2="18" y2="12" />
    <circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
    <line x1="6.5" y1="6.5" x2="10.5" y2="10.5" /><line x1="17.5" y1="6.5" x2="13.5" y2="10.5" />
    <line x1="6.5" y1="17.5" x2="10.5" y2="13.5" /><line x1="17.5" y1="17.5" x2="13.5" y2="13.5" />
  </svg>
);

const CAT_ICONS: Record<string, React.ReactNode> = {
  'Drone': <DroneIconSm />, 'Montage vidéo': <Film size={13} />, 'Digital': <Globe size={13} />,
};

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export const BlogListPage: React.FC = () => {
  const posts = loadAllPosts();
  const [category, setCategory] = useState<string>('Tous');
  const [sort, setSort] = useState<'recent' | 'ancien' | 'titre'>('recent');
  const categories = ['Tous', 'Drone', 'Montage vidéo', 'Digital'];

  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [posts]);

  const filtered = useMemo(() => {
    let list = posts.slice();
    if (category !== 'Tous') list = list.filter((p) => p.category === category);
    if (sort === 'recent') list.sort((a, b) => (a.date < b.date ? 1 : -1));
    if (sort === 'ancien') list.sort((a, b) => (a.date > b.date ? 1 : -1));
    if (sort === 'titre') list.sort((a, b) => a.title.localeCompare(b.title, 'fr'));
    return list;
  }, [posts, category, sort]);

  const countFor = (cat: string) => cat === 'Tous' ? posts.length : posts.filter(p => p.category === cat).length;
  const goToHomeSection = (section: Section) => {
    try {
      sessionStorage.setItem('scrollToSection', section);
    } catch {
    }
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <Navbar activeSection={null} scrollToSection={goToHomeSection} />

      <main className="pt-20">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden pb-2">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
            <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-accent/7 blur-[130px]" />
            <div className="absolute top-10 right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </div>
          <div className="max-w-5xl mx-auto px-6 pt-10 pb-12 relative z-10">
            <Breadcrumbs items={[{ label: 'Blog' }]} className="mb-6" />
            <div className="flex items-center gap-3 text-accent mb-5">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <BookOpen size={15} />
              </div>
              <span className="tracking-[0.25em] text-xs font-bold uppercase">Articles & Ressources</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-4">
              Conseils, méthodes<br />
              <span className="text-accent">et expertise terrain</span>
            </h1>
            <p className="text-textSecondary max-w-xl text-base mb-8">
              {posts.length} article{posts.length > 1 ? 's' : ''} sur la captation drone, le montage vidéo et la présence digitale locale, par Eagle Production à Angoulême.
            </p>

            {/* Stats catégories */}
            <div className="flex flex-wrap gap-3">
              {categories.filter(c => c !== 'Tous').map((cat) => {
                const meta = CATEGORY_META[cat];
                return (
                  <button key={cat} onClick={() => setCategory(cat)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all ${meta?.bg ?? 'bg-white/5 border-white/10'} hover:opacity-80`}
                  >
                    <span className={meta?.color ?? 'text-white/50'}>{CAT_ICONS[cat]}</span>
                    <div className="text-left">
                      <div className="text-white font-bold text-sm leading-none">{countFor(cat)}</div>
                      <div className="text-white/40 text-[10px] mt-0.5">{cat}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FILTRES + GRILLE ── */}
        <section className="max-w-5xl mx-auto px-6 pb-20 pt-8">

          {/* Barre filtres */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((cat) => {
              const active = category === cat;
              const meta = CATEGORY_META[cat];
              return (
                <button key={cat} onClick={() => setCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    active ? 'bg-accent text-background border-accent shadow-lg shadow-accent/20'
                           : 'bg-white/5 text-white/70 border-white/8 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {meta && <span className={active ? 'text-background' : meta.color}>{CAT_ICONS[cat]}</span>}
                  <span>{cat}</span>
                  <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold ${active ? 'bg-background/20 text-background' : 'bg-white/10 text-white/50'}`}>
                    {countFor(cat)}
                  </span>
                </button>
              );
            })}
            <div className="flex-1" />
            {/* Tri */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/8 rounded-full p-1">
              {([['recent','Récents'],['ancien','Anciens'],['titre','A–Z']] as const).map(([id, label]) => (
                <button key={id} onClick={() => setSort(id)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${sort === id ? 'bg-accent text-background' : 'text-white/50 hover:text-white'}`}
                >{label}</button>
              ))}
            </div>
          </div>

          {/* Grille articles */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => {
                const meta = CATEGORY_META[p.category];
                const isFirst = i === 0 && category === 'Tous';
                return (
                  <a key={p.slug} href={`/blog/${p.slug}`}
                    className={`group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1 ${
                      isFirst ? 'md:col-span-2 lg:col-span-2' : ''
                    } bg-surfaceHighlight/15 border-white/5 hover:border-accent/25`}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden bg-black/40 ${isFirst ? 'h-56 md:h-64' : 'h-44'}`}>
                      {p.coverImage ? (
                        <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" loading="lazy" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <BookOpen size={32} className="text-white/10" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      {/* Badge catégorie sur l'image */}
                      <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${meta?.bg ?? 'bg-white/10 border-white/10'} ${meta?.color ?? 'text-white'} backdrop-blur-sm`}>
                        {CAT_ICONS[p.category]}
                        {p.category}
                      </div>
                      {/* Temps de lecture */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] text-white/70">
                        <Clock size={9} />
                        {getReadingTimeMinutes(p.body)} min
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="flex flex-col flex-1 p-5">
                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-white/35 text-[11px] mb-3">
                        <CalendarDays size={11} />
                        {p.date ? formatDate(p.date) : ''}
                      </div>
                      <h2 className={`font-bold text-white group-hover:text-accent transition-colors leading-snug mb-2 ${isFirst ? 'text-xl md:text-2xl' : 'text-base'}`}>
                        {p.title}
                      </h2>
                      {p.excerpt && (
                        <p className="text-sm text-textSecondary leading-relaxed line-clamp-2 mb-4 flex-1">{p.excerpt}</p>
                      )}
                      {/* Tags */}
                      {p.tags && p.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {p.tags.slice(0, 3).map((t) => (
                            <span key={t} className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider bg-white/4 border border-white/8 px-2 py-0.5 rounded-full text-white/50">
                              <Tag size={9} />{t}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-accent text-sm font-semibold mt-auto group-hover:gap-2.5 transition-all">
                        Lire l'article <ArrowRight size={14} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-24 text-center">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center">
                <BookOpen size={22} className="text-white/20" />
              </div>
              <p className="text-white/40 text-sm">Aucun article dans cette catégorie.</p>
              <button onClick={() => setCategory('Tous')} className="text-accent text-sm underline underline-offset-2">Voir tous les articles</button>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 rounded-[2rem] border border-accent/25 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent p-8 md:p-10 shadow-[0_0_60px_rgba(212,175,55,0.08)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-accent" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-white">Un projet drone, vidéo ou digital ?</h2>
                  <p className="text-white/60 mt-1 text-sm">Parlons objectifs, contraintes terrain et livrables. Devis gratuit sous 24h.</p>
                </div>
              </div>
              <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-background font-bold px-7 py-3.5 rounded-full hover:bg-white transition-colors border border-accent/40 text-sm flex-shrink-0">
                Devis gratuit <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};
