import { useState, useEffect } from 'react';
import { Music, PenLine, Bell, BellRing } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import type { TabId } from './BottomNav';

interface HomeHeroProps {
  onNavigate: (tab: TabId) => void;
}

const HomeHero = ({ onNavigate }: HomeHeroProps) => {
  const [notifState, setNotifState] = useState<'idle' | 'granted' | 'denied'>('idle');

  useEffect(() => {
    const saved = localStorage.getItem('roh2_notif');
    if (saved === 'granted') setNotifState('granted');
  }, []);

  const requestNotifications = async () => {
    try {
      // Try Capacitor first
      const { PushNotifications } = await import('@capacitor/push-notifications');
      const result = await PushNotifications.requestPermissions();
      if (result.receive === 'granted') {
        await PushNotifications.register();
        setNotifState('granted');
        localStorage.setItem('roh2_notif', 'granted');
      } else {
        setNotifState('denied');
      }
    } catch {
      // Fallback to Web Notification API
      if ('Notification' in window) {
        const perm = await Notification.requestPermission();
        if (perm === 'granted') {
          setNotifState('granted');
          localStorage.setItem('roh2_notif', 'granted');
        } else {
          setNotifState('denied');
        }
      } else {
        setNotifState('denied');
      }
    }
  };

  return (
    <div className="relative h-full flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background/95" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col px-6 pt-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-8xl font-bold text-primary mb-1">2</h1>
          <p className="text-[20px] tracking-[0.4em] uppercase text-muted-foreground mb-8">iki</p>
        </motion.div>

        <div className="flex-1" />

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
          className="grid grid-cols-2 gap-3 mb-5"
        >
          <button
            onClick={() => onNavigate('muzik')}
            className="flex items-center justify-center gap-2.5 bg-card hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(34_66%_47%/0.4)] hover:scale-[1.03] text-foreground font-semibold py-4 rounded-xl border border-border hover:border-primary transition-all duration-300 text-sm active:scale-95"
          >
            <Music size={18} />
            Music
          </button>
          <button
            onClick={() => onNavigate('siirler')}
            className="flex items-center justify-center gap-2.5 bg-card hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(34_66%_47%/0.4)] hover:scale-[1.03] text-foreground font-semibold py-4 rounded-xl border border-border hover:border-primary transition-all duration-300 text-sm active:scale-95"
          >
            <PenLine size={18} />
            Poetry
          </button>
        </motion.div>

        {/* Notification Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-5"
        >
          {notifState === 'granted' ? (
            <div className="flex items-center justify-center gap-2 text-xs text-primary">
              <BellRing size={14} />
              <span>You're in! 🔔 Notifications enabled</span>
            </div>
          ) : notifState === 'denied' ? (
            <p className="text-center text-xs text-muted-foreground">
              You can enable notifications in Settings anytime
            </p>
          ) : (
            <button
              onClick={requestNotifications}
              className="w-full flex items-center justify-center gap-2 bg-card/80 backdrop-blur-xl border border-border hover:border-primary/40 text-foreground text-xs py-2.5 rounded-xl transition-all duration-300"
            >
              <Bell size={14} className="text-primary" />
              Get notified on new music, poetry & updates
            </button>
          )}
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
