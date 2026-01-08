import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import profilePhoto from '@/assets/profile-photo.jpeg';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={profilePhoto}
          alt="Rahmi Oğuzhan Hacıeyüpoğlu"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-44 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="text-gradient">{t('hero.title')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light tracking-wide"
          >
            {t('hero.subtitle')}
          </motion.p>

        </motion.div>

      </div>

      {/* Side Decorations */}
      <div className="absolute left-8 bottom-56 hidden lg:flex flex-col gap-4">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-px bg-gradient-to-b from-transparent via-primary to-transparent"
        />
      </div>
      <div className="absolute right-8 bottom-56 hidden lg:flex flex-col gap-4">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-px bg-gradient-to-b from-transparent via-primary to-transparent"
        />
      </div>
    </section>
  );
};

export default HeroSection;
