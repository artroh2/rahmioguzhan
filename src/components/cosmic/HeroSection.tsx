import { motion } from 'framer-motion';
import heroImg from '@/assets/cosmic-hero.jpg';

interface HeroSectionProps {
  lang: 'tr' | 'en';
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Subtle star overlay */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-6">
            {lang === 'tr' ? 'şair · besteci · AI' : 'poet · composer · AI'}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95]"
        >
          <span className="text-cosmic">Rahmi</span>
          <br />
          <span className="text-foreground">Oğuzhan</span>
          <br />
          <span className="text-gold/80">Hacıeyüpoğlu</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-gold text-xs tracking-[0.3em]">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-cosmic/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8"
        >
          {lang === 'tr'
            ? 'Sessizliğin mimarı, kelimelerin mühendisi.'
            : 'Architect of Silence, Engineer of Words.'}
        </motion.p>

        {/* Embedded video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-10 mx-auto max-w-md"
        >
          <div className="glass rounded-2xl overflow-hidden border border-white/10">
            <video
              src="/videos/hero-reel.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-[9/16] object-cover"
            />
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
