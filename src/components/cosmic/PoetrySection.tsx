import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { POEMS } from '@/data/poemsData';

interface PoetrySectionProps {
  lang: 'tr' | 'en';
}

const PoetrySection = ({ lang }: PoetrySectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showCount, setShowCount] = useState(8);

  // Show TR poems when TR, EN poems when EN
  const categoryFilter = lang === 'tr' ? 'TR' : 'EN';
  const filtered = POEMS.filter(p => p.category === categoryFilter);
  const displayed = filtered.slice(0, showCount);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="siir" className="relative py-24 sm:py-32">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 70% 50%, hsl(263 70% 58% / 0.04) 0%, transparent 60%)'
      }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-cosmic mb-3">
            {lang === 'tr' ? 'şiir' : 'poetry'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            {lang === 'tr' ? 'Kelimeler' : 'Words'}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {displayed.map((poem, i) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <button
                onClick={() => toggleExpand(poem.id)}
                className="w-full text-left glass rounded-xl p-5 hover:border-cosmic/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-cosmic transition-colors">
                    {poem.title}
                  </h3>
                  <ChevronDown
                    size={18}
                    className={`text-muted-foreground transition-transform duration-300 ${
                      expandedId === poem.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {expandedId === poem.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 py-6 border-l-2 border-cosmic/30 ml-5 mt-2">
                      {poem.body.split('\n').map((line, li) => (
                        <p key={li} className="font-display text-sm text-muted-foreground leading-relaxed italic min-h-[1.2em]">
                          {line || '\u00A0'}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {showCount < filtered.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setShowCount(c => c + 8)}
              className="glass px-6 py-3 rounded-full text-sm text-muted-foreground hover:text-cosmic hover:border-cosmic/30 transition-all duration-300"
            >
              {lang === 'tr' ? 'Daha Fazla Göster' : 'Show More'} ({filtered.length - showCount} {lang === 'tr' ? 'kalan' : 'remaining'})
            </button>
          </motion.div>
        )}

        {/* Instagram Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
            {lang === 'tr' ? 'Instagram\'da Şiirler' : 'Poetry on Instagram'}
          </p>
          <div className="relative rounded-2xl overflow-hidden border border-cosmic/20 shadow-[0_0_40px_hsl(263_70%_58%/0.08)]">
            <iframe
              src="https://www.instagram.com/siir2.0/embed"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="yes"
              allowTransparency
              loading="lazy"
              className="rounded-2xl bg-background"
              style={{ filter: 'brightness(0.9) saturate(1.1)' }}
            />
          </div>
          <div className="text-center mt-4">
            <a
              href="https://www.instagram.com/siir2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs text-muted-foreground hover:text-cosmic hover:border-cosmic/30 transition-all duration-300"
            >
              @siir2.0 {lang === 'tr' ? 'profilini aç' : 'open profile'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PoetrySection;
