import { motion } from 'framer-motion';

interface HeroSectionProps {
  lang: 'tr' | 'en';
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 stars-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" style={{
        background: 'radial-gradient(ellipse at 50% 40%, hsl(213 100% 65% / 0.08) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, hsl(263 70% 58% / 0.06) 0%, transparent 50%)'
      }} />

      {/* Crystal/geometric accent */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/10 rotate-45 rounded-3xl opacity-30 animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-cosmic/10 rotate-12 rounded-2xl opacity-20" style={{ animationDelay: '1.5s', animation: 'float 4s ease-in-out infinite' }} />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-6">
            {lang === 'tr' ? 'şair · besteci' : 'poet · composer'}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-6xl sm:text-8xl lg:text-9xl font-bold mb-6 leading-[0.9]"
        >
          <span className="text-gradient-cosmic">Rahmi</span>
          <br />
          <span className="text-foreground">Oğuzhan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-gold text-xs tracking-[0.3em]">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-cosmic/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed"
        >
          {lang === 'tr'
            ? 'Sessizliğin mimarı, kelimelerin mühendisi.'
            : 'Architect of Silence, Engineer of Words.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="#muzik"
            className="glass px-6 py-3 rounded-full text-sm text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(213_100%_65%/0.2)]"
          >
            {lang === 'tr' ? 'Müziği Keşfet' : 'Explore Music'}
          </a>
          <a
            href="#siir"
            className="glass px-6 py-3 rounded-full text-sm text-foreground hover:text-cosmic hover:border-cosmic/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(263_70%_58%/0.2)]"
          >
            {lang === 'tr' ? 'Şiirleri Oku' : 'Read Poetry'}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
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
