import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback, ComponentType, SVGProps } from 'react';
import { Play, Pause } from 'lucide-react';
import albumKendimleSavas from '@/assets/album-kendimle-savas.jpg';
import {
  SpotifyIcon, AppleMusicIcon, ITunesIcon, AmazonMusicIcon,
  YouTubeMusicIcon, DeezerIcon, TidalIcon, IHeartRadioIcon,
  PandoraIcon, AnghamiIcon, BoomplayIcon, FloIcon,
  AudiomackIcon, LiveOneIcon, ShazamIcon, KKBOXIcon, JOOXIcon, NetEaseIcon,
} from '@/components/icons/PlatformIcons';

interface MusicSectionProps {
  lang: 'tr' | 'en';
}

type PlatformEntry = {
  name: string;
  color: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const PLATFORMS: PlatformEntry[] = [
  { name: 'Spotify', color: '#1DB954', href: 'https://open.spotify.com/search/Rahmi%20Oguzhan', icon: SpotifyIcon },
  { name: 'Apple Music', color: '#FC3C44', href: 'https://music.apple.com/search?term=Rahmi+Oguzhan', icon: AppleMusicIcon },
  { name: 'iTunes', color: '#EA4CC0', href: 'https://itunes.apple.com/search?term=Rahmi+Oguzhan&media=music', icon: ITunesIcon },
  { name: 'Amazon Music', color: '#25D1DA', href: 'https://music.amazon.com/search/Rahmi+Oguzhan', icon: AmazonMusicIcon },
  { name: 'YouTube Music', color: '#FF0000', href: 'https://music.youtube.com/search?q=Rahmi+Oguzhan', icon: YouTubeMusicIcon },
  { name: 'Deezer', color: '#A238FF', href: 'https://www.deezer.com/search/Rahmi%20Oguzhan', icon: DeezerIcon },
  { name: 'Tidal', color: '#00FFFF', href: 'https://tidal.com/search?q=Rahmi+Oguzhan', icon: TidalIcon },
  { name: 'iHeartRadio', color: '#C6002B', href: 'https://www.iheart.com/search/?keywords=Rahmi+Oguzhan', icon: IHeartRadioIcon },
  { name: 'Pandora', color: '#3668FF', href: 'https://www.pandora.com/search/Rahmi+Oguzhan/all', icon: PandoraIcon },
  { name: 'Anghami', color: '#6C23A0', href: 'https://play.anghami.com/search/Rahmi+Oguzhan', icon: AnghamiIcon },
  { name: 'Boomplay', color: '#29B6F6', href: 'https://www.boomplaymusic.com/search#Rahmi+Oguzhan', icon: BoomplayIcon },
  { name: 'FLO', color: '#FF6B00', href: 'https://www.flo.com.tr/search?q=Rahmi+Oguzhan', icon: FloIcon },
  { name: 'Audiomack', color: '#FFA500', href: 'https://audiomack.com/search?q=Rahmi+Oguzhan', icon: AudiomackIcon },
  { name: 'LiveOne', color: '#E91E63', href: 'https://www.liveone.com/search/?q=Rahmi+Oguzhan', icon: LiveOneIcon },
  { name: 'Shazam', color: '#0088FF', href: 'https://www.shazam.com/search?q=Rahmi+Oguzhan', icon: ShazamIcon },
  { name: 'KKBOX', color: '#09C4E8', href: 'https://www.kkbox.com/search?q=Rahmi+Oguzhan', icon: KKBOXIcon },
  { name: 'JOOX', color: '#00C853', href: 'https://www.joox.com/search?q=Rahmi+Oguzhan', icon: JOOXIcon },
  { name: 'NetEase', color: '#C62828', href: 'https://music.163.com/#/search/m/?s=Rahmi+Oguzhan', icon: NetEaseIcon },
];

const MusicSection = ({ lang }: MusicSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
    <section id="muzik" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[#050F14]/60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030508] via-[#030508]/80 to-transparent z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary mb-3">
            {lang === 'tr' ? 'müzik' : 'music'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold inline-block animate-gradient-sweep-blue bg-clip-text text-transparent bg-[length:300%_100%]"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(200,220,255,0.5), rgba(255,255,255,0.95), rgba(180,210,255,0.4), rgba(255,255,255,0.3))',
              filter: 'drop-shadow(0 0 12px rgba(200,220,255,0.25)) drop-shadow(0 0 30px rgba(180,200,255,0.1))',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
            }}>
            {lang === 'tr' ? 'Şarkılar & Albümler' : 'Songs & Albums'}
          </h2>
        </motion.div>

        {/* Custom Audio Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/15 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative glass rounded-2xl border border-white/10 p-6 sm:p-8">
              <div className="flex items-center gap-5 sm:gap-6">
                {/* Album art */}
                <div className="relative shrink-0">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-white/10 shadow-lg ${isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''}`}>
                    <img src={albumKendimleSavas} alt="2'ye Saymak" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Info + controls */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground truncate">
                    2'ye Saymak
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">Rahmi Oğuzhan</p>

                  {/* Play/Pause + progress */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={togglePlay}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-300 shrink-0"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" />
                      ) : (
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-primary ml-0.5" fill="currentColor" />
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      {/* Progress bar */}
                      <div
                        ref={progressRef}
                        onClick={handleSeek}
                        className="h-1.5 rounded-full bg-white/10 cursor-pointer group/bar relative"
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-[width] duration-100 relative"
                          style={{ width: `${progress}%` }}
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(74,158,255,0.5)] opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      {/* Time */}
                      <div className="flex justify-between mt-1.5">
                        <span className="text-[10px] text-muted-foreground font-mono">{fmt(currentTime)}</span>
                        <span className="text-[10px] text-muted-foreground font-mono">{fmt(duration)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Platform links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center">
            {lang === 'tr' ? 'Tüm Şarkılar, Tüm Platformlar' : 'All Songs, All Platforms'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {PLATFORMS.map((p, idx) => {
              const Icon = p.icon;
              const seed = (idx * 7 + 3) % 18;
              const direction = seed % 3 === 0 ? 'glow-spin-cw' : seed % 3 === 1 ? 'glow-spin-ccw' : (seed % 2 === 0 ? 'glow-spin-cw' : 'glow-spin-ccw');
              const speed = 3 + (seed % 5) * 0.8;
              const delay = -((seed * 0.7) % 4);
              return (
                <motion.a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.05 }}
                  className="platform-glow-card px-4 py-3 flex items-center gap-2.5 text-muted-foreground transition-all duration-300 group hover:-translate-y-1"
                  style={{
                    '--platform-color': p.color,
                    '--platform-color-dim': `${p.color}44`,
                    '--glow-animation': direction,
                    '--glow-speed': `${speed}s`,
                    '--glow-delay': `${delay}s`,
                  } as React.CSSProperties}
                >
                  <Icon className="w-5 h-5 shrink-0 transition-colors duration-300" style={{ color: p.color }} />
                  <span className="text-xs font-medium truncate group-hover:text-foreground transition-colors">
                    {p.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection;
