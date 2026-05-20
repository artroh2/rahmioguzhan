import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const manifesto = "While the world makes noise, I build the silence.";

const HeroSection = () => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < manifesto.length) {
        setDisplayed(manifesto.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden bg-background">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 600px 400px at 50% 40%, hsl(0 72% 51% / 0.04), transparent)'
      }} />

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight min-h-[3em] md:min-h-[2.5em]">
          {displayed}
          {!done && (
            <span className="cursor-blink text-primary ml-0.5">|</span>
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-8 md:mt-12 text-sm md:text-base tracking-[0.4em] uppercase text-muted-foreground font-light"
        >
          R. Oguzhan <span className="text-primary font-semibold">(2)</span>
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px bg-primary/50 scroll-line line-glow" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
