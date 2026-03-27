import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import { POEMS, Poem } from '@/data/poemsData';

const PoemsTab = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Poem | null>(null);

  const filtered = search.trim().length > 0
    ? POEMS.filter(p =>
        p.body.toLowerCase().includes(search.toLowerCase()) ||
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const getPreview = (body: string) => {
    const lines = body.split('\n').filter(l => l.trim());
    return lines.slice(0, 3).join(' / ') + (lines.length > 3 ? '…' : '');
  };

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

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative mb-6"
        >
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
        </motion.div>

        {/* Hint */}
        {!search.trim() && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground text-sm py-12"
          >
            Type a word to discover poems containing it
          </motion.p>
        )}

        {/* Results */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((poem) => (
              <motion.button
                key={poem.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(poem)}
                className="w-full text-left bg-card/80 backdrop-blur-xl rounded-2xl p-4 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <h2 className="text-sm font-bold text-primary leading-tight">{poem.title}</h2>
                  <span className="text-[10px] text-muted-foreground ml-2 shrink-0 uppercase tracking-wider">{poem.category}</span>
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed line-clamp-2">
                  {getPreview(poem.body)}
                </p>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {search.trim() && filtered.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-12">No poems contain "{search}"</p>
        )}
      </div>

      {/* Expanded poem modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-lg max-h-[80vh] overflow-y-auto bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-primary">{selected.title}</h2>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{selected.category}</span>
                </div>
                <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground p-1">
                  <X size={18} />
                </button>
              </div>
              <p className="text-sm text-foreground/80 whitespace-pre-line leading-relaxed">
                {selected.body}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PoemsTab;
