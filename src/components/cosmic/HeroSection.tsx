import { motion } from 'framer-motion';
import { useRef, useCallback, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';


interface HeroSectionProps {
  lang: 'tr' | 'en';
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const tagline = lang === 'tr'
    ? 'Sessizlikte Kelimelerle Mühendis.'
    : 'Engineer of Words in Silence.';

  const { isPlaying, progress, currentTime, duration, togglePlay, seek } = useAudio();
  const progressRef = useRef<HTMLDivElement>(null);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seek(ratio);
  }, [seek]);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };


  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Transparent — starfield shows through */}

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <p className="font-mono text-xs tracking-[0.5em] text-muted-foreground mb-6"
            style={{ textShadow: '0 0 10px rgba(200,220,255,0.3)' }}>
            {lang === 'tr' ? 'ŞAİR · MÜZİSYEN · AI' : 'POET · MUSICIAN · AI'}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-[1.15]"
        >
          <span className="inline-block animate-gradient-sweep-blue bg-clip-text text-transparent bg-[length:300%_100%]"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(200,220,255,0.5), rgba(255,255,255,0.95), rgba(180,210,255,0.4), rgba(255,255,255,0.3))',
              filter: 'drop-shadow(0 0 12px rgba(200,220,255,0.25)) drop-shadow(0 0 30px rgba(180,200,255,0.1))',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
            }}>Rahmi</span>
          <br />
          <span className="inline-block">
            <span className="inline animate-gradient-sweep-purple bg-clip-text text-transparent bg-[length:300%_100%]"
              style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(220,210,255,0.5), rgba(255,255,255,0.95), rgba(200,190,255,0.4), rgba(255,255,255,0.3))',
                filter: 'drop-shadow(0 0 12px rgba(210,200,255,0.25))',
                WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
              }}>{''}</span>
            <span style={{ color: '#5C3A1E', filter: 'drop-shadow(0 0 10px rgba(92,58,30,0.4))' }}>O</span>
            <span className="inline animate-gradient-sweep-purple bg-clip-text text-transparent bg-[length:300%_100%]"
              style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(220,210,255,0.5), rgba(255,255,255,0.95), rgba(200,190,255,0.4), rgba(255,255,255,0.3))',
                filter: 'drop-shadow(0 0 12px rgba(210,200,255,0.25))',
                WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
              }}>ğuzhan</span>
          </span>
          <br />
          <span className="inline-block">
            <span className="inline animate-gradient-sweep-gold bg-clip-text text-transparent bg-[length:300%_100%]"
              style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(240,235,220,0.5), rgba(255,255,255,0.95), rgba(230,225,210,0.4), rgba(255,255,255,0.3))',
                filter: 'drop-shadow(0 0 12px rgba(240,235,220,0.25))',
                WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
              }}>Hacıeyüp</span>
            <span style={{ color: '#F59E0B', filter: 'drop-shadow(0 0 10px rgba(245,158,11,0.5))' }}>o</span>
            <span className="inline animate-gradient-sweep-gold bg-clip-text text-transparent bg-[length:300%_100%]"
              style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(240,235,220,0.5), rgba(255,255,255,0.95), rgba(230,225,210,0.4), rgba(255,255,255,0.3))',
                filter: 'drop-shadow(0 0 12px rgba(240,235,220,0.25))',
                WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
              }}>ğlu</span>
          </span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-accent text-xs tracking-[0.3em]">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-secondary/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.5 }}
          className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8 font-display italic tracking-wide min-h-[1.8em]"
          style={{ textShadow: '0 0 12px rgba(200,220,255,0.2)' }}
        >
          {tagline}
        </motion.p>

        {/* Audio Player — minimal */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.8 }} className="mb-8 max-w-xs mx-auto">
          <div className="flex items-center gap-3 justify-center">
            <button onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-300 shrink-0"
              aria-label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-primary" fill="currentColor" /> : <Play className="w-3.5 h-3.5 text-primary ml-0.5" fill="currentColor" />}
            </button>
            <div className="flex-1 min-w-0">
              <div ref={progressRef} onClick={handleSeek} className="h-1 rounded-full bg-white/10 cursor-pointer group/bar relative">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-[width] duration-100 relative" style={{ width: `${progress}%` }}>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(74,158,255,0.5)] opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[9px] text-muted-foreground font-mono">{fmt(currentTime)}</span>
                <span className="text-[9px] text-muted-foreground font-mono">{fmt(duration)}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Embedded video */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.8 }} className="mb-10 mx-auto w-full max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl">
            <video src="/videos/hero-reel.mp4" autoPlay loop muted playsInline className="w-full aspect-video object-cover" />
            {/* Fade edges to site background */}
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 80px 40px #030508, inset 0 0 160px 80px #030508' }} />
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#030508] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030508] to-transparent" />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#030508] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#030508] to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
