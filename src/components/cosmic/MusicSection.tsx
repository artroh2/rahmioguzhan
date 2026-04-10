import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface MusicSectionProps {
  lang: 'tr' | 'en';
}

const TRACKS = [
  {
    title: 'We Are One',
    artist: 'Rahmi Oğuzhan',
    spotify: 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk',
    apple: 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707',
  },
  {
    title: 'Sakın ve Sakin',
    artist: 'Rahmi Oğuzhan',
    spotify: 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk',
    apple: 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707',
  },
  {
    title: 'Yaşanabilecek Tüm İhtimalleri Biliyorum',
    artist: 'Rahmi Oğuzhan',
    spotify: 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk',
    apple: 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707',
  },
  {
    title: 'Kendimle Savaş Halindeyim',
    artist: 'Rahmi Oğuzhan',
    spotify: 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk',
    apple: 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707',
  },
];

const PLATFORMS = [
  { name: 'Spotify', color: '#1DB954', href: 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk' },
  { name: 'Apple Music', color: '#FC3C44', href: 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707' },
  { name: 'YouTube Music', color: '#FF0000', href: '#' },
  { name: 'Deezer', color: '#A238FF', href: '#' },
  { name: 'Tidal', color: '#00FFFF', href: '#' },
];

const MusicSection = ({ lang }: MusicSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="muzik" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 stars-bg opacity-30" />
      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
            {lang === 'tr' ? 'müzik' : 'music'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            {lang === 'tr' ? 'Şarkılar & Albümler' : 'Songs & Albums'}
          </h2>
        </motion.div>

        {/* Track cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {TRACKS.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass rounded-2xl p-5 group hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_hsl(213_100%_65%/0.1)]"
            >
              <div className="flex items-start gap-4">
                {/* Album art placeholder */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-cosmic/20 flex items-center justify-center shrink-0 border border-border">
                  <span className="text-2xl">♪</span>
                </div>
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

        {/* Platform links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {lang === 'tr' ? 'Tüm Platformlar' : 'All Platforms'}
          </p>
          <div className="flex flex-wrap gap-3">
            {PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full px-5 py-2.5 text-xs text-muted-foreground hover:text-foreground transition-all duration-300 hover:shadow-lg"
                style={{ '--hover-color': p.color } as React.CSSProperties}
              >
                {p.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection;
