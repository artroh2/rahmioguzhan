import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import heroImg from '@/assets/cosmic-hero.jpg';

interface HeroSectionProps {
  lang: 'tr' | 'en';
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const tagline = lang === 'tr'
    ? 'Sessizliğin mimarı, kelimelerin mühendisi.'
    : 'Architect of Silence, Engineer of Words.';

  const [displayed, setDisplayed] = useState('');
  const [typeDone, setTypeDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setTypeDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < tagline.length) {
        setDisplayed(tagline.slice(0, i + 1));
        i++;
      } else {
        setTypeDone(true);
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [tagline]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/40 via-[#030508]/70 to-[#030508]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-mono text-xs tracking-[0.5em] uppercase text-muted-foreground mb-6">
            {lang === 'tr' ? 'şair · besteci · AI' : 'poet · composer · AI'}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95]"
        >
          <span className="inline-block animate-gradient-sweep-blue bg-clip-text text-transparent bg-[length:200%_100%]"
            style={{ backgroundImage: 'linear-gradient(90deg, #F0F4FF, #4A9EFF, #F0F4FF)' }}>
            Rahmi
          </span>
          <br />
          <span className="inline-block animate-gradient-sweep-purple bg-clip-text text-transparent bg-[length:200%_100%]"
            style={{ backgroundImage: 'linear-gradient(90deg, #8B5CF6, #C084FC, #8B5CF6)' }}>
            Oğuzhan
          </span>
          <br />
          <span className="inline-block animate-gradient-sweep-gold bg-clip-text text-transparent bg-[length:200%_100%]"
            style={{ backgroundImage: 'linear-gradient(90deg, #F59E0B, #FCD34D, #F59E0B)' }}>
            Hacıeyüpoğlu
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-accent text-xs tracking-[0.3em]">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-secondary/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8 font-mono min-h-[1.8em]"
        >
          {displayed}
          {!typeDone && <span className="animate-pulse text-primary ml-0.5">|</span>}
        </motion.p>

        {/* Embedded video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-10 mx-auto w-full max-w-3xl"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-sm animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="relative glass rounded-2xl overflow-hidden border border-white/10">
              <video
                src="/videos/hero-reel.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#muzik"
            className="relative group glass px-6 py-3 rounded-full text-sm text-foreground transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 rounded-full border border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/10 to-primary/5 transition-opacity duration-300" />
            <span className="absolute inset-0 rounded-full animate-pulse opacity-0 group-hover:opacity-50 shadow-[0_0_15px_hsl(213_100%_65%/0.3)]" style={{ animationDuration: '2s' }} />
            <span className="relative z-10 group-hover:text-primary transition-colors">
              {lang === 'tr' ? 'Müziği Keşfet' : 'Explore Music'}
            </span>
          </a>
          <a
            href="#siir"
            className="relative group glass px-6 py-3 rounded-full text-sm text-foreground transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 rounded-full border border-secondary/30 group-hover:border-secondary/60 transition-colors duration-300" />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-secondary/10 to-secondary/5 transition-opacity duration-300" />
            <span className="absolute inset-0 rounded-full animate-pulse opacity-0 group-hover:opacity-50 shadow-[0_0_15px_hsl(263_70%_58%/0.3)]" style={{ animationDuration: '2s' }} />
            <span className="relative z-10 group-hover:text-secondary transition-colors">
              {lang === 'tr' ? 'Şiirleri Oku' : 'Read Poetry'}
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
