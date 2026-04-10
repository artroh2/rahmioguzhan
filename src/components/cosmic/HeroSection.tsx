import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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
  const [isPlaying, setIsPlaying] = useState(true);
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

    // Auto-play on load
    const playPromise = audio.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Browser blocked autoplay, set to not playing
        setIsPlaying(false);
      });
    }

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

  // Random glow params for CTA buttons
  const ctaGlowParams = useMemo(() => [
    { speed: 3 + Math.random() * 3, dir: Math.random() > 0.5 ? 1 : -1 },
    { speed: 3 + Math.random() * 3, dir: Math.random() > 0.5 ? 1 : -1 },
  ], []);

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
          <p className="font-mono text-xs tracking-[0.5em] uppercase text-muted-foreground mb-6"
            style={{ textShadow: '0 0 10px rgba(200,220,255,0.3)' }}>
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
          style={{ textShadow: '0 0 12px rgba(200,220,255,0.2)' }}
        >
          {displayed}
          {!typeDone && <span className="animate-pulse text-primary ml-0.5">|</span>}
        </motion.p>

        {/* Audio Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-8 max-w-md mx-auto"
        >
          <div className="flex items-center gap-4">
            <div className="relative shrink-0" style={{ perspective: '600px' }}>
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-white/10 shadow-lg"
                style={isPlaying ? { animation: 'flipY 4s linear infinite' } : {}}
              >
                <img src={albumIkiyeSaymak} alt="2'ye Saymak" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-foreground truncate"
                    style={{ textShadow: '0 0 10px rgba(200,220,255,0.2)' }}>2'ye Saymak</h3>
                  <p className="text-[10px] text-muted-foreground" style={{ textShadow: '0 0 8px rgba(200,220,255,0.15)' }}>Rahmi Oğuzhan</p>
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
          {[
            { href: '#muzik', label: lang === 'tr' ? 'Müziği Keşfet' : 'Explore Music', color: 'hsl(213 100% 65%)' },
            { href: '#siir', label: lang === 'tr' ? 'Şiirleri Oku' : 'Read Poetry', color: 'hsl(263 70% 58%)' },
          ].map((btn, i) => (
            <a
              key={btn.href}
              href={btn.href}
              className="relative group rounded-full p-[1px] overflow-hidden"
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from ${Math.random() * 360}deg, transparent, ${btn.color} / 0.5, transparent, transparent, ${btn.color} / 0.25, transparent)`,
                  animation: `spin ${ctaGlowParams[i].speed}s linear infinite ${ctaGlowParams[i].dir === -1 ? 'reverse' : ''}`,
                }}
              />
              <span className="relative z-10 block rounded-full px-6 py-3 text-sm text-foreground bg-[#030508]/90 backdrop-blur-sm transition-all duration-300 group-hover:text-foreground"
                style={{ boxShadow: `0 0 15px ${btn.color.replace(')', ' / 0.1)')}` }}>
                {btn.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
