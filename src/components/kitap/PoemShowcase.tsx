import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface ShownPoem {
  title: string;
  lines: string[];
}

const pick = (poems: { title: string; body: string }[]): ShownPoem => {
  const p = poems[Math.floor(Math.random() * poems.length)];
  const lines = p.body.split('\n').map(l => l.trim()).filter(Boolean);
  const start = lines.length > 6 ? Math.floor(Math.random() * (lines.length - 6)) : 0;
  return { title: p.title, lines: lines.slice(start, start + 6) };
};

const PoemShowcase = () => {
  const [pool, setPool] = useState<{ title: string; body: string }[]>([]);
  const [poem, setPoem] = useState<ShownPoem | null>(null);
  const [total, setTotal] = useState(1000);

  useEffect(() => {
    let alive = true;
    import('@/data/poemsData').then(({ POEMS }) => {
      if (!alive) return;
      const usable = POEMS.filter(p => p.body && p.body.split('\n').length > 3);
      setPool(usable);
      setTotal(POEMS.length);
      setPoem(pick(usable));
    });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (!pool.length) return;
    const t = setInterval(() => setPoem(pick(pool)), 14000);
    return () => clearInterval(t);
  }, [pool]);

  return (
    <section id="siirler" className="relative py-28 sm:py-40 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-accent/70 mb-3">Şiirler</p>
        <p className="text-xs text-muted-foreground mb-12">1299+ eserden birkaç dize</p>

        <div className="relative border border-border/60 rounded-sm px-6 sm:px-12 py-14 min-h-[320px] flex flex-col items-center justify-center bg-card/40">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3 font-display text-accent/60 text-sm">2</span>

          <AnimatePresence mode="wait">
            {poem && (
              <motion.div
                key={poem.title + poem.lines[0]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              >
                <h3 className="font-display italic text-lg text-accent/80 mb-6">{poem.title}</h3>
                <div className="space-y-2">
                  {poem.lines.map((l, i) => (
                    <p key={i} className="font-display text-base sm:text-lg text-foreground/85 leading-relaxed">
                      {l}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={() => pool.length && setPoem(pick(pool))}
          className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-accent transition-colors duration-500"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Başka bir dize
        </button>
      </div>
    </section>
  );
};

export default PoemShowcase;
