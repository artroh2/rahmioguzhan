import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { POEMS } from '@/data/poemsData';

interface PoetrySectionProps {
  lang: 'tr' | 'en';
}

const PoetrySection = ({ lang }: PoetrySectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Show first 6 poems matching current language
  const categoryFilter = lang === 'tr' ? 'TR' : 'EN';
  const poems = POEMS.filter(p => p.category === categoryFilter).slice(0, 6);

  return (
    <section id="siir" className="relative py-24 sm:py-32">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 70% 50%, hsl(263 70% 58% / 0.04) 0%, transparent 60%)'
      }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-secondary mb-3">
            {lang === 'tr' ? 'şiir' : 'poetry'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold inline-block animate-gradient-sweep-purple bg-clip-text text-transparent bg-[length:300%_100%]"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(220,210,255,0.5), rgba(255,255,255,0.95), rgba(200,190,255,0.4), rgba(255,255,255,0.3))',
              filter: 'drop-shadow(0 0 12px rgba(210,200,255,0.25)) drop-shadow(0 0 30px rgba(200,190,255,0.1))',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
            }}>
            {lang === 'tr' ? 'Şiirler' : 'Poetry'}
          </h2>
        </motion.div>

        {/* Poem cards */}
        <div className="grid gap-4 mb-12">
          {poems.map((poem, i) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              onClick={() => setExpandedId(expandedId === poem.id ? null : poem.id)}
              className="glass rounded-2xl p-6 cursor-pointer group border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_30px_hsl(38_92%_50%/0.08)] hover:bg-[radial-gradient(ellipse_at_center,hsl(263_70%_58%/0.03),transparent)]"
            >
              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                <span className="text-accent/60 text-3xl font-display leading-none mr-1 float-left mt-0.5">
                  {poem.title.charAt(0)}
                </span>
                {poem.title.slice(1)}
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
                    <div className="mt-4 pt-4 border-t border-accent/10">
                      {poem.body.split('\n').map((line, li) => (
                        <p key={li} className="font-display text-sm text-muted-foreground leading-relaxed italic">
                          {line || <br />}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Instagram Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
            {lang === 'tr' ? 'Instagram\'da Şiirler' : 'Poetry on Instagram'}
          </p>
          <div className="relative rounded-2xl overflow-hidden border border-secondary/20 shadow-[0_0_40px_hsl(263_70%_58%/0.08)]">
            <iframe
              src="https://www.instagram.com/siir2.0/embed"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="yes"
              allowTransparency
              loading="lazy"
              className="rounded-2xl bg-[#030508]"
              style={{ filter: 'brightness(0.9) saturate(1.1)' }}
            />
          </div>
          <div className="text-center mt-4">
            <a
              href="https://www.instagram.com/siir2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs text-muted-foreground hover:text-secondary hover:border-secondary/30 transition-all duration-300"
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
