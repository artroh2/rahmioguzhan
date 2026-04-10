import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';
import albumIkiyeSaymak from '@/assets/album-ikiye-saymak.jpg';

interface HeroSectionProps {
  lang: 'tr' | 'en';
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const tagline = lang === 'tr'
    ? 'Sessizlikte mimar, kelimelerle mühendis.'
    : 'Architect of Silence, Engineer of Words.';

  const [displayed, setDisplayed] = useState('');
  const [typeDone, setTypeDone] = useState(false);

  // Audio player state
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  useEffect(() => {
    const audio = new Audio('/audio/ikiye-saymak.mp3');
    audio.preload = 'metadata';
    audioRef.current = audio;

    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    });
    audio.addEventListener('ended', () => { setIsPlaying(false); setProgress(0); });

    return () => { audio.pause(); audio.src = ''; };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); } else { audio.play(); }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar || !audio.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  }, []);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src="/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
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
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-[1.15]"
        >
          <span className="inline-block animate-gradient-sweep-blue bg-clip-text text-transparent bg-[length:300%_100%]"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(200,220,255,0.5), rgba(255,255,255,0.95), rgba(180,210,255,0.4), rgba(255,255,255,0.3))',
              filter: 'drop-shadow(0 0 12px rgba(200,220,255,0.25)) drop-shadow(0 0 30px rgba(180,200,255,0.1))',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
            }}>
            Rahmi
          </span>
          <br />
          <span className="inline-block">
            <span className="inline animate-gradient-sweep-purple bg-clip-text text-transparent bg-[length:300%_100%]"
              style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(220,210,255,0.5), rgba(255,255,255,0.95), rgba(200,190,255,0.4), rgba(255,255,255,0.3))',
                filter: 'drop-shadow(0 0 12px rgba(210,200,255,0.25))',
                WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
              }}>
              {''}
            </span>
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

        {/* Audio Player - no border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-8 max-w-md mx-auto"
        >
          <div className="flex items-center gap-4">
            {/* Album art */}
            <div className="relative shrink-0" style={{ perspective: '600px' }}>
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-white/10 shadow-lg"
                style={isPlaying ? { animation: 'flipY 4s linear infinite' } : {}}
              >
                <img src={albumIkiyeSaymak} alt="2'ye Saymak" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Info + controls */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-foreground truncate">2'ye Saymak</h3>
                  <p className="text-[10px] text-muted-foreground">Rahmi Oğuzhan</p>
                </div>
                <button
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-300 shrink-0"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 text-primary" fill="currentColor" />
                  ) : (
                    <Play className="w-3.5 h-3.5 text-primary ml-0.5" fill="currentColor" />
                  )}
                </button>
              </div>
              {/* Progress bar */}
              <div
                ref={progressRef}
                onClick={handleSeek}
                className="h-1 rounded-full bg-white/10 cursor-pointer group/bar relative"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-[width] duration-100 relative"
                  style={{ width: `${progress}%` }}
                >
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
