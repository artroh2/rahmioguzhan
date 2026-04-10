import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface PoetrySectionProps {
  lang: 'tr' | 'en';
}

const PoetrySection = ({ lang }: PoetrySectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-cosmic mb-3">
            {lang === 'tr' ? 'şiir' : 'poetry'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            {lang === 'tr' ? 'Şiirler' : 'Poetry'}
          </h2>
        </motion.div>
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
