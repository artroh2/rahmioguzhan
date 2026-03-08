import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroPhoto from '@/assets/hero-photo.png';

const HeroSection = () => {
  const { t } = useLanguage();
  const [lettersFalling, setLettersFalling] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [letterRects, setLetterRects] = useState<{ char: string; x: number; y: number }[]>([]);

  const name = t('hero.title');

  useEffect(() => {
    const fallTimer = setTimeout(() => {
      // Capture each letter's position before falling
      if (nameRef.current) {
        const spans = nameRef.current.querySelectorAll('span[data-letter]');
        const rects: { char: string; x: number; y: number }[] = [];
        spans.forEach((span) => {
          const rect = span.getBoundingClientRect();
          rects.push({
            char: span.textContent || '',
            x: rect.left,
            y: rect.top,
          });
        });
        setLetterRects(rects);
      }
      setLettersFalling(true);
    }, 5000);
    return () => clearTimeout(fallTimer);
  }, []);

  // Calculate how far letters need to fall (to bottom of page)
  const getDropDistance = () => {
    const docHeight = document.documentElement.scrollHeight;
    return docHeight;
  };

  return (
    <>
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroPhoto}
            alt="Rahmi Oğuzhan Hacıeyüpoğlu"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/60" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 60% 50%, transparent 30%, hsl(220 25% 7% / 0.7) 100%)'
          }} />
        </div>

        {/* Bokeh-like decorative dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ y: [-5, 5, -5], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-[15%] w-3 h-3 rounded-full bg-accent/40 blur-[2px]"
          />
          <motion.div
            animate={{ y: [5, -8, 5], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-[8%] w-2 h-2 rounded-full bg-primary/30 blur-[1px]"
          />
          <motion.div
            animate={{ y: [-3, 6, -3], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[45%] right-[22%] w-2 h-2 rounded-full bg-accent/30 blur-[2px]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1
              ref={nameRef}
              className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight ${lettersFalling ? 'invisible' : ''}`}
            >
              {name.split('').map((char, i) => (
                <span key={i} data-letter className="text-gradient inline-block" style={{ minWidth: char === ' ' ? '0.3em' : undefined }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
          </motion.div>
        </div>

        {/* Warm glow line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* Falling letters - rendered as fixed overlay so they can travel across the entire page */}
      {lettersFalling && letterRects.length > 0 && createPortal(
        <div className="pointer-events-none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, overflow: 'visible' }}>
          {letterRects.map((letter, i) => {
            const dropTo = getDropDistance() - letter.y - 40 + (Math.random() * 30 - 15);
            return (
              <motion.span
                key={`fall-${i}`}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gradient inline-block"
                style={{
                  position: 'absolute',
                  left: letter.x,
                  top: letter.y + window.scrollY,
                }}
                initial={{ y: 0, rotate: 0, opacity: 1 }}
                animate={{
                  y: dropTo,
                  rotate: (Math.random() - 0.5) * 180,
                  opacity: 1,
                }}
                transition={{
                  duration: 2.5 + Math.random() * 1.5,
                  delay: Math.random() * 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {letter.char === ' ' ? '\u00A0' : letter.char}
              </motion.span>
            );
          })}
        </div>,
        document.body
      )}
    </>
  );
};

export default HeroSection;
