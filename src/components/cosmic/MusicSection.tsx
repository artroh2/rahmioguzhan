import { motion, useInView } from 'framer-motion';
import { useRef, ComponentType, SVGProps } from 'react';
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


  return (
    <section id="muzik" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[#050F14]/60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030508] via-[#030508]/80 to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030508] via-[#030508]/80 to-transparent z-[1]" />

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
