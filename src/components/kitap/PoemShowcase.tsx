import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface ShownPoem {
  id: number;
  title: string;
  stanzas: string[][];
}

const parseStanzas = (body: string): string[][] =>
  body
    .split(/\n\n+/)
    .map((s) => s.split('\n').map((l) => l.trim()).filter(Boolean))
    .filter((s) => s.length > 0);

const pick = (poems: { id: number; title: string; body: string }[]): ShownPoem => {
  const p = poems[Math.floor(Math.random() * poems.length)];
  return { id: p.id, title: p.title, stanzas: parseStanzas(p.body) };
};

const PoemShowcase = () => {
  const [pool, setPool] = useState<{ id: number; title: string; body: string }[]>([]);
  const [poem, setPoem] = useState<ShownPoem | null>(null);

  useEffect(() => {
    let alive = true;
    import('@/data/poemsData').then(({ POEMS }) => {
      if (!alive) return;
      const usable = POEMS.filter((p) => p.body && p.body.split('\n').length > 3);
      setPool(usable);
      setPoem(pick(usable));
    });
    return () => { alive = false; };
  }, []);

  return (
    <section id="siirler" className="relative py-28 sm:py-40 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-accent/70 mb-3">Şiirler</p>
        <p className="text-xs text-muted-foreground mb-12">1299+ eserden bir şiir</p>

        <div className="relative border border-border/60 rounded-sm bg-card/40 min-h-[380px] max-h-[540px] flex flex-col items-center overflow-hidden">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3 font-display text-accent/60 text-sm z-10">2</span>

          <div className="w-full overflow-y-auto flex-1">
            <div className="min-h-full flex flex-col items-center justify-center px-6 sm:px-12 py-14">
              <AnimatePresence mode="wait">
                {poem && (
                  <motion.div
                    key={poem.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="w-full"
                  >
                    <h3 className="font-display italic text-lg text-accent/80 mb-8">{poem.title}</h3>
                    <div className="space-y-6">
                      {poem.stanzas.map((stanza, si) => (
                        <div key={si} className="space-y-2">
                          {stanza.map((line, li) => (
                            <p key={li} className="font-display text-base sm:text-lg text-foreground/85 leading-relaxed">
                              {line}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <button
          onClick={() => pool.length && setPoem(pick(pool))}
          className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-accent transition-colors duration-500"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Başka bir şiir
        </button>
      </div>
    </section>
  );
};

export default PoemShowcase;
