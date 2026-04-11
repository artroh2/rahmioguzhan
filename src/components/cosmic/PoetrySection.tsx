import { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { POEMS, POEM_CATEGORIES } from '@/data/poemsData';
import { Heart, Star, Globe, Sparkles, Zap, Music, Search, X, Shuffle, BookOpen, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface PoetrySectionProps {
  lang: 'tr' | 'en';
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  heart: Heart,
  star: Star,
  globe: Globe,
  sparkles: Sparkles,
  zap: Zap,
  music: Music,
  book: BookOpen,
};

const PAGE_SIZE = 5;

const PoetrySection = ({ lang }: PoetrySectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<string>('en_iyiler');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [shuffleKey, setShuffleKey] = useState(0);
  const expandedRef = useRef<HTMLDivElement>(null);
  const [translations, setTranslations] = useState<Record<number, { title: string; body: string }>>({});
  const [translatingId, setTranslatingId] = useState<number | null>(null);
  const [showTranslation, setShowTranslation] = useState<Record<number, boolean>>({});
  const [visitedIds, setVisitedIds] = useState<Set<number>>(new Set());

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchInput), 200);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // Shuffle poems per category
  const poemsByCategory = useMemo(() => {
    const map: Record<string, typeof POEMS> = {};
    for (const p of POEMS) {
      (map[p.category] ??= []).push(p);
    }
    for (const key in map) {
      const arr = [...map[key]];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      map[key] = arr;
    }
    return map;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shuffleKey]);

  // Reset on category/search change
  useEffect(() => {
    setExpandedId(null);
  }, [activeCategory, search, shuffleKey]);

  const filtered = useMemo(() => {
    const list = poemsByCategory[activeCategory] || [];
    if (!search.trim()) return list;
    const q = search.toLowerCase();
    return list.filter(p =>
      p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
    );
  }, [activeCategory, search, poemsByCategory]);

  const visible = useMemo(() => filtered.slice(0, PAGE_SIZE), [filtered]);

  const toggleExpand = useCallback((id: number) => {
    setExpandedId(prev => {
      if (prev === id) {
        // Collapsing — mark as visited
        setVisitedIds(s => new Set(s).add(id));
        return null;
      }
      return id;
    });
  }, []);

  const handleTranslate = useCallback(async (poem: typeof POEMS[0], e: React.MouseEvent) => {
    e.stopPropagation();
    const id = poem.id;
    if (translations[id]) {
      setShowTranslation(prev => ({ ...prev, [id]: !prev[id] }));
      return;
    }
    setTranslatingId(id);
    try {
      const { data, error } = await supabase.functions.invoke('translate-poem', {
        body: { title: poem.title, body: poem.body },
      });
      if (error) throw error;
      if (data?.translation) {
        setTranslations(prev => ({ ...prev, [id]: data.translation }));
        setShowTranslation(prev => ({ ...prev, [id]: true }));
      }
    } catch (err) {
      console.error('Translation error:', err);
    } finally {
      setTranslatingId(null);
    }
  }, [translations]);

  const handleShuffle = useCallback(() => {
    setShuffleKey(k => k + 1);
  }, []);

  const activeMeta = POEM_CATEGORIES.find(c => c.key === activeCategory)!;

  // Highlight search matches
  const highlight = useCallback((text: string) => {
    if (!search.trim()) return text;
    const q = search.trim();
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-accent/30 text-accent-foreground rounded px-0.5">{part}</span>
      ) : part
    );
  }, [search]);

  // Random glow params for category buttons
  const categoryGlowParams = useMemo(() => 
    POEM_CATEGORIES.map(() => ({
      speed: 3 + Math.random() * 4,
      dir: Math.random() > 0.5 ? 'normal' : 'reverse',
      offset: Math.floor(Math.random() * 360),
    }))
  , []);

  return (
    <section id="siir" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030508] via-[#030508]/80 to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030508] via-[#030508]/80 to-transparent z-[1]" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 70% 50%, hsl(263 70% 58% / 0.04) 0%, transparent 60%)'
      }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-secondary mb-3"
            style={{ textShadow: '0 0 12px rgba(168,85,247,0.4)' }}>
            {lang === 'tr' ? `${POEMS.length}` : `${POEMS.length}`}
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl font-bold inline-block animate-gradient-sweep-purple bg-clip-text text-transparent bg-[length:300%_100%]"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(220,210,255,0.5), rgba(255,255,255,0.95), rgba(200,190,255,0.4), rgba(255,255,255,0.3))',
              filter: 'drop-shadow(0 0 18px rgba(210,200,255,0.35)) drop-shadow(0 0 40px rgba(200,190,255,0.15))',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
            }}
          >
            {lang === 'tr' ? 'ŞİİRLER' : 'POETRY'}
          </h2>
        </motion.div>

        {/* Category Tabs with glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {POEM_CATEGORIES.map((cat, catIdx) => {
            const Icon = CATEGORY_ICONS[cat.icon];
            const isActive = activeCategory === cat.key;
            const gp = categoryGlowParams[catIdx];
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="relative rounded-full p-[1px] overflow-hidden group"
              >
                {/* Rotating glow border */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: isActive
                      ? `conic-gradient(from ${gp.offset}deg, transparent, hsl(263 70% 58% / 0.5), transparent, transparent, hsl(263 70% 58% / 0.25), transparent)`
                      : `conic-gradient(from ${gp.offset}deg, transparent, rgba(255,255,255,0.1), transparent, transparent, rgba(255,255,255,0.05), transparent)`,
                    animation: `spin ${gp.speed}s linear infinite ${gp.dir}`,
                    willChange: 'transform',
                  }}
                />
                <span
                  className={`
                    relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider
                    transition-all duration-300 block
                    ${isActive
                      ? 'text-secondary bg-[#030508]/90'
                      : 'text-muted-foreground bg-[#030508]/90 hover:text-secondary/70'
                    }
                  `}
                  style={isActive ? { boxShadow: '0 0 15px hsl(263 70% 58% / 0.15)' } : {}}
                >
                  <Icon className="w-3 h-3" />
                  <span>{lang === 'en' ? cat.labelEn : cat.label}</span>
                  <span className={`text-[10px] ${isActive ? 'text-secondary/70' : 'text-muted-foreground/50'}`}>
                    {cat.count}
                  </span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mb-8 max-w-md mx-auto"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50" />
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder={lang === 'tr' ? 'Şiirlerde kelime ara...' : 'Search poems...'}
            className="w-full pl-9 pr-8 py-2 rounded-full bg-transparent border border-border/40 text-sm text-foreground placeholder:text-muted-foreground/40 font-mono tracking-wide focus:outline-none focus:border-secondary/40 transition-colors"
          />
          {searchInput && (
            <button onClick={() => { setSearchInput(''); setSearch(''); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-foreground transition-colors">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </motion.div>


        {/* Poem Cards */}
        <div className="grid gap-3">
          <AnimatePresence mode="popLayout">
            {visible.map((poem, i) => {
              const cardColors = [
                'hsl(213 80% 55%)',   // blue
                'hsl(263 70% 58%)',   // purple
                'hsl(180 60% 45%)',   // teal
                'hsl(45 80% 55%)',    // gold
                'hsl(320 60% 55%)',   // pink
              ];
              const cardColor = cardColors[i % cardColors.length];
              const isExpanded = expandedId === poem.id;
              const isVisited = visitedIds.has(poem.id);
              const greenColor = 'rgba(34,197,94,';
              return (
              <motion.div
                key={`${shuffleKey}-${poem.id}`}
                ref={isExpanded ? expandedRef : undefined}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
                onClick={() => toggleExpand(poem.id)}
                className={`
                  glass rounded-xl px-5 py-4 cursor-pointer group
                  border transition-all duration-500
                  ${isExpanded
                    ? 'border-red-500/60'
                    : isVisited
                      ? 'border-green-500/50'
                      : 'hover:border-green-500/40'
                  }
                `}
                style={isExpanded
                  ? { boxShadow: '0 0 30px rgba(239,68,68,0.25), 0 0 60px rgba(239,68,68,0.1), inset 0 0 20px rgba(239,68,68,0.05)', borderColor: 'rgba(239,68,68,0.6)' }
                  : isVisited
                    ? { borderColor: `${greenColor}0.5)`, boxShadow: `0 0 20px ${greenColor}0.15), 0 0 40px ${greenColor}0.05)` }
                    : { borderColor: `${cardColor}22`, boxShadow: `0 0 15px ${cardColor}08` }
                }
               >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base sm:text-lg text-foreground/90 group-hover:text-green-400 transition-colors leading-snug"
                    style={{ textShadow: '0 0 10px rgba(210,200,255,0.2)' }}>
                    {showTranslation[poem.id] && translations[poem.id]
                      ? translations[poem.id].title
                      : highlight(poem.title)}
                  </h3>
                  {expandedId === poem.id && (
                    <button
                      onClick={(e) => handleTranslate(poem, e)}
                      disabled={translatingId === poem.id}
                      className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider border border-secondary/30 text-secondary/80 hover:text-secondary hover:border-secondary/60 transition-all duration-300 disabled:opacity-50"
                      style={{ textShadow: '0 0 8px rgba(168,85,247,0.3)' }}
                    >
                      {translatingId === poem.id
                        ? <Loader2 className="w-3 h-3 animate-spin" />
                        : showTranslation[poem.id] ? 'TR' : 'EN'}
                    </button>
                  )}
                </div>
                <AnimatePresence>
                  {expandedId === poem.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-secondary/10">
                        {(showTranslation[poem.id] && translations[poem.id]
                          ? translations[poem.id].body
                          : poem.body
                        ).split('\n').map((line, li) => (
                          <p key={li} className="font-display text-sm text-muted-foreground leading-relaxed italic">
                            {line ? (showTranslation[poem.id] ? line : highlight(line)) : <br />}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Shuffle button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-8"
        >
          <button
            onClick={handleShuffle}
            className="relative rounded-full p-[1px] overflow-hidden group inline-block"
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, hsl(263 70% 58% / 0.5), transparent, transparent, hsl(263 70% 58% / 0.25), transparent)',
                animation: `spin ${3 + Math.random() * 3}s linear infinite ${Math.random() > 0.5 ? 'reverse' : ''}`,
                willChange: 'transform',
              }}
            />
            <span className="relative z-10 inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-mono tracking-wider text-muted-foreground bg-[#030508]/90 group-hover:text-secondary transition-all duration-300 block"
              style={{ boxShadow: '0 0 10px hsl(263 70% 58% / 0.08)' }}>
              <Shuffle className="w-3 h-3" />
              {lang === 'tr' ? 'Karıştır' : 'Shuffle'}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PoetrySection;
