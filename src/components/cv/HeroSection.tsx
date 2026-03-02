import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import heroPhoto from '@/assets/hero-photo.png';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroPhoto}
          alt="Rahmi Oğuzhan Hacıeyüpoğlu"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/60" />
        {/* Warm vignette */}
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
      <div className="relative z-10 h-full flex flex-col items-start justify-end pb-32 md:pb-44 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-5 max-w-2xl"
        >
          {/* We Are 1 */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-lg md:text-2xl lg:text-3xl font-bold tracking-tight"
          >
            <span className="text-gradient-cool border-b-2 border-accent/50 pb-1">We Are 1</span>
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            <span className="text-gradient">{t('hero.title')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground font-light tracking-wide max-w-lg"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="pt-6"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Warm glow line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
