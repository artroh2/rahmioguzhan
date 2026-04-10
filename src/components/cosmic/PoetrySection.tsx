import { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { POEMS, POEM_CATEGORIES } from '@/data/poemsData';
import { InstagramIcon } from '@/components/icons/BrandIcons';
import { Heart, Star, Globe, Sparkles, Zap, Music, Search, X, ChevronDown, BookOpen } from 'lucide-react';

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

const PAGE_SIZE = 12;

const PoetrySection = ({ lang }: PoetrySectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<string>('en_iyiler');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const expandedRef = useRef<HTMLDivElement>(null);

  // Debounce search for performance
  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchInput), 200);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // Pre-index: group poems by category once
  const poemsByCategory = useMemo(() => {
    const map: Record<string, typeof POEMS> = {};
    for (const p of POEMS) {
      (map[p.category] ??= []).push(p);
    }
    return map;
  }, []);

  // Reset visible count on category/search change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setExpandedId(null);
  }, [activeCategory, search]);

  const filtered = useMemo(() => {
    const list = poemsByCategory[activeCategory] || [];
    if (!search.trim()) return list;
    const q = search.toLowerCase();
    return list.filter(p =>
      p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
    );
  }, [activeCategory, search, poemsByCategory]);

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const hasMore = visibleCount < filtered.length;

  const toggleExpand = useCallback((id: number) => {
    setExpandedId(prev => prev === id ? null : id);
  }, []);

  const activeMeta = POEM_CATEGORIES.find(c => c.key === activeCategory)!;

  // Highlight search matches in text
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

  return (
    <section id="siir" className="relative py-24 sm:py-32">
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
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-secondary mb-3">
            {lang === 'tr' ? `${POEMS.length} şiir` : `${POEMS.length} poems`}
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl font-bold inline-block animate-gradient-sweep-purple bg-clip-text text-transparent bg-[length:300%_100%]"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(220,210,255,0.5), rgba(255,255,255,0.95), rgba(200,190,255,0.4), rgba(255,255,255,0.3))',
              filter: 'drop-shadow(0 0 12px rgba(210,200,255,0.25)) drop-shadow(0 0 30px rgba(200,190,255,0.1))',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
            }}
          >
            {lang === 'tr' ? 'Şiirler' : 'Poetry'}
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {POEM_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.icon];
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider
                  transition-all duration-300 border
                  ${isActive
                    ? 'border-secondary/50 bg-secondary/10 text-secondary shadow-[0_0_15px_hsl(263_70%_58%/0.15)]'
                    : 'border-border/50 text-muted-foreground hover:border-secondary/30 hover:text-secondary/70'
                  }
                `}
              >
                <Icon className="w-3 h-3" />
                <span>{cat.label}</span>
                <span className={`text-[10px] ${isActive ? 'text-secondary/70' : 'text-muted-foreground/50'}`}>
                  {cat.count}
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
            placeholder={lang === 'tr' ? 'Şiirlerde ara...' : 'Search poems...'}
            className="w-full pl-9 pr-8 py-2 rounded-full bg-transparent border border-border/40 text-sm text-foreground placeholder:text-muted-foreground/40 font-mono tracking-wide focus:outline-none focus:border-secondary/40 transition-colors"
          />
          {searchInput && (
            <button onClick={() => { setSearchInput(''); setSearch(''); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-foreground transition-colors">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </motion.div>

        {/* Results count */}
        <div className="text-center mb-6">
          <p className="font-mono text-[10px] tracking-widest text-muted-foreground/40 uppercase">
            {filtered.length} {lang === 'tr' ? 'şiir' : 'poems'}
            {search && ` — "${search}"`}
          </p>
        </div>

        {/* Poem Cards */}
        <div className="grid gap-3">
          <AnimatePresence mode="popLayout">
            {visible.map((poem, i) => (
              <motion.div
                key={poem.id}
                ref={expandedId === poem.id ? expandedRef : undefined}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
                onClick={() => toggleExpand(poem.id)}
                className={`
                  glass rounded-xl px-5 py-4 cursor-pointer group
                  border transition-all duration-500
                  ${expandedId === poem.id
                    ? 'border-secondary/30 shadow-[0_0_25px_hsl(263_70%_58%/0.08)]'
                    : 'border-border/20 hover:border-secondary/20'
                  }
                `}
              >
                <h3 className="font-display text-base sm:text-lg text-foreground/90 group-hover:text-foreground transition-colors leading-snug">
                  {highlight(poem.title)}
                </h3>
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
                        {poem.body.split('\n').map((line, li) => (
                          <p key={li} className="font-display text-sm text-muted-foreground leading-relaxed italic">
                            {line ? highlight(line) : <br />}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-border/30 text-xs font-mono tracking-wider text-muted-foreground hover:text-secondary hover:border-secondary/30 transition-all duration-300"
            >
              <ChevronDown className="w-3 h-3" />
              {lang === 'tr'
                ? `${filtered.length - visibleCount} şiir daha`
                : `${filtered.length - visibleCount} more poems`
              }
            </button>
          </motion.div>
        )}

        {/* Instagram Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/siir2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-muted-foreground/30 hover:text-secondary transition-all duration-500 hover:drop-shadow-[0_0_40px_hsl(263_70%_58%/0.3)]"
            aria-label="@siir2.0 Instagram"
          >
            <InstagramIcon className="w-36 h-36 sm:w-44 sm:h-44" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PoetrySection;
