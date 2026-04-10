import { motion, useInView } from 'framer-motion';
import { useRef, ComponentType, SVGProps } from 'react';
import { ExternalLink } from 'lucide-react';
import albumWeAreOne from '@/assets/album-we-are-one.jpg';
import albumSakinVeSakin from '@/assets/album-sakin-ve-sakin.jpg';
import albumYasanabilecek from '@/assets/album-yasanabilecek.jpg';
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

const TRACKS = [
  { title: 'We Are One', artist: 'Rahmi Oğuzhan', cover: albumWeAreOne, spotify: 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk', apple: 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707' },
  { title: 'Sakın ve Sakin', artist: 'Rahmi Oğuzhan', cover: albumSakinVeSakin, spotify: 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk', apple: 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707' },
  { title: 'Yaşanabilecek Tüm İhtimalleri Biliyorum', artist: 'Rahmi Oğuzhan', cover: albumYasanabilecek, spotify: 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk', apple: 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707' },
  { title: 'Kendimle Savaş Halindeyim', artist: 'Rahmi Oğuzhan', cover: albumKendimleSavas, spotify: 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk', apple: 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707' },
];

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
      {/* Dark-to-light gradient overlay */}
      <div className="absolute inset-0 bg-[#050F14]/60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030508] via-[#030508]/80 to-transparent z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary mb-3">
            {lang === 'tr' ? 'müzik' : 'music'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            {lang === 'tr' ? 'Şarkılar & Albümler' : 'Songs & Albums'}
          </h2>
        </motion.div>

        {/* Spotify Embed with glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-[#1DB954]/10 blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-[#1DB954]/20 shadow-[0_0_40px_rgba(29,185,84,0.1)]">
              <iframe
                src="https://open.spotify.com/embed/artist/4fQ8VbreLSA4Eaiwm1Elfk?utm_source=generator&theme=0"
                width="100%"
                height="600"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-2xl relative z-0"
                style={{ filter: 'saturate(1.2) hue-rotate(-10deg) brightness(0.85)' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Track cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {TRACKS.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i + 0.3 }}
              className="glass rounded-2xl p-5 group hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(213_100%_65%/0.1)]"
            >
              <div className="flex items-start gap-4">
                <img src={track.cover} alt={track.title} loading="lazy" width={64} height={64} className="w-16 h-16 rounded-xl object-cover shrink-0 border border-border" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {track.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{track.artist}</p>
                  <div className="flex gap-2 mt-3">
                    <a href={track.spotify} target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-[#1DB954] transition-colors flex items-center gap-1">
                      Spotify <ExternalLink size={9} />
                    </a>
                    <a href={track.apple} target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-[#FC3C44] transition-colors flex items-center gap-1">
                      Apple <ExternalLink size={9} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform links with staggered entrance + brand glow on hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            {lang === 'tr' ? 'Tüm Platformlar' : 'All Platforms'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {PLATFORMS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.05 }}
                  className="glass rounded-xl px-4 py-3 flex items-center gap-2.5 text-muted-foreground transition-all duration-300 group hover:-translate-y-1"
                  style={{
                    // @ts-ignore
                    '--platform-color': p.color,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${p.color}22, 0 0 0 1px ${p.color}33`;
                    (e.currentTarget as HTMLElement).style.borderBottomColor = p.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                    (e.currentTarget as HTMLElement).style.borderBottomColor = '';
                  }}
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
