import { useState, useRef, useCallback, ReactNode } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import { POEMS, Poem } from '@/data/poemsData';

const highlightText = (text: string, query: string): ReactNode => {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={i} className="bg-primary/80 text-primary-foreground rounded px-0.5 py-px">{part}</span>
    ) : part
  );
};

const PoemsTab = () => {
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const filtered = search.trim().length > 0
    ? POEMS.filter(p =>
        p.body.toLowerCase().includes(search.toLowerCase()) ||
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const toggleExpand = useCallback((id: number) => {
    setExpandedId(prev => {
      const next = prev === id ? null : id;
      if (next !== null) {
        setTimeout(() => {
          cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 350);
      }
      return next;
    });
  }, []);

  return (
    <div className="relative min-h-full">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      <div className="relative z-10 px-5 pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <h1 className="font-display text-5xl font-bold text-primary mb-1">Poetry</h1>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            {search.trim() ? `${filtered.length} results` : `${POEMS.length} poems`}
          </p>
        </motion.div>

        <div className="relative mb-6">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search words..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-card/80 backdrop-blur-xl border border-border rounded-xl py-2.5 pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X size={14} />
            </button>
          )}
        </div>

        {!search.trim() && (
          <p className="text-center text-muted-foreground text-sm py-12">
            Type a word to discover poems containing it
          </p>
        )}

        <div className="space-y-3">
          {filtered.map((poem, i) => {
            const isExpanded = expandedId === poem.id;
            return (
              <motion.div
                key={poem.id}
                ref={el => { cardRefs.current[poem.id] = el; }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                onClick={() => toggleExpand(poem.id)}
                className={`cursor-pointer w-full text-left bg-card/80 backdrop-blur-xl rounded-2xl border transition-all duration-300 active:scale-[0.98] overflow-hidden ${
                  isExpanded ? 'border-primary/60' : 'border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-baseline gap-2 min-w-0">
                    <h2 className="text-sm font-bold text-primary leading-tight truncate">{poem.title}</h2>
                    <span className="text-[10px] text-muted-foreground shrink-0 uppercase tracking-wider">{poem.category}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 ml-2 text-muted-foreground"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-0 border-t border-border/50">
                        <div className="pt-3 space-y-1">
                          {poem.body.split('\n').map((line, j) => (
                            <p key={j} className="text-sm text-foreground/80 leading-relaxed min-h-[0.5em]">
                              {line ? highlightText(line, search.trim()) : '\u00A0'}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {search.trim() && filtered.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-12">No poems contain "{search}"</p>
        )}
      </div>
    </div>
  );
};

export default PoemsTab;
