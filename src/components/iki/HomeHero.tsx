import { Music, PenLine } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import type { TabId } from './BottomNav';

interface HomeHeroProps {
  onNavigate: (tab: TabId) => void;
}

const HomeHero = ({ onNavigate }: HomeHeroProps) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col px-6 pt-safe">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-10 pb-4"
        >
          <h1 className="font-display text-5xl font-bold text-primary">
            2
          </h1>
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mt-1">İKİ</p>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 border-l-2 border-primary">
            <h2 className="font-sans text-xl font-bold text-foreground leading-tight mb-2">
              Rahmi Oğuzhan
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Şair. Müzisyen. Yapay zeka ile inşa edip üreten.
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
            className="flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-xl transition-all duration-300 text-sm"
          >
            <Music size={18} />
            Müzik
          </button>
          <button
            onClick={() => onNavigate('siirler')}
            className="flex items-center justify-center gap-2.5 bg-card hover:bg-secondary text-foreground font-semibold py-4 rounded-xl border border-border transition-all duration-300 text-sm"
          >
            <PenLine size={18} />
            Şiirler
          </button>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center text-xs text-muted-foreground tracking-[0.4em] pb-24"
        >
          şiir · müzik · 2
        </motion.p>
      </div>
    </div>
  );
};

export default HomeHero;
