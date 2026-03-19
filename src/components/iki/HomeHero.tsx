import { Music, PenLine } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import type { TabId } from './BottomNav';

interface HomeHeroProps {
  onNavigate: (tab: TabId) => void;
}

const HomeHero = ({ onNavigate }: HomeHeroProps) => {
  return (
    <div className="relative h-full flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col px-6 pt-12 pb-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-8xl font-bold text-primary mb-1">2</h1>
          <p className="text-[20px] tracking-[0.4em] uppercase text-muted-foreground mb-8">iki</p>
        </motion.div>

        <div className="flex-1" />
        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 border-l-2 border-primary hover:border-primary/80 hover:bg-card/90 hover:shadow-[0_0_30px_hsl(34_66%_47%/0.15)] transition-all duration-500">
            <h2 className="font-sans text-xl font-bold text-foreground leading-tight mb-2">
              Rahmi Oğuzhan Hacıeyüpoğlu
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Poet. Musician. Building & Creating with AI.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Architect of Silence, Engineer of Words.
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-3 mb-6"
        >
          <button
            onClick={() => onNavigate('muzik')}
            className="flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/80 hover:shadow-[0_0_20px_hsl(34_66%_47%/0.4)] hover:scale-[1.03] text-primary-foreground font-semibold py-4 rounded-xl transition-all duration-300 text-sm active:scale-95"
          >
            <Music size={18} />
            Music
          </button>
          <button
            onClick={() => onNavigate('siirler')}
            className="flex items-center justify-center gap-2.5 bg-card hover:bg-secondary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(34_66%_47%/0.2)] hover:scale-[1.03] text-foreground font-semibold py-4 rounded-xl border border-border transition-all duration-300 text-sm active:scale-95"
          >
            <PenLine size={18} />
            Poetry
          </button>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center text-xs text-muted-foreground tracking-[0.4em]"
        >
          poetry · music · ai · 2
        </motion.p>
      </div>
    </div>
  );
};

export default HomeHero;
