import { Play, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const SPOTIFY_ARTIST = 'https://open.spotify.com/artist/2uoOCTF68KrEajGqSFNsrj';
const SPOTIFY_ALBUM = 'https://open.spotify.com/intl-tr/album/0qsai0PajSX9TgzyyzlzR2';

const songs = [
  {
    title: 'Sessiz Limanı',
    album: 'Global Episode',
    date: '2025',
    lyric: '"Dünya gürültü yaparken, ben sessizliği inşa ettim..."',
    link: SPOTIFY_ALBUM,
  },
  {
    title: 'Gece Mimarı',
    album: 'Global Episode',
    date: '2025',
    lyric: '"Karanlık çökerken yükselir, görünmez tuğlalar..."',
    link: SPOTIFY_ALBUM,
  },
  {
    title: 'Karanlık Şiir',
    album: 'Global Episode',
    date: '2025',
    lyric: '"Mürekkep damarlardan akar, kâğıda değil..."',
    link: SPOTIFY_ALBUM,
  },
  {
    title: 'Son Kod',
    album: 'Global Episode',
    date: '2025',
    lyric: '"Bir ve sıfır arasında, insanlık gizli..."',
    link: SPOTIFY_ALBUM,
  },
  {
    title: 'We Are One',
    album: 'Global Episode',
    date: '2025',
    lyric: '"Otuz dilde bir ses, tek bir kalp atışı..."',
    link: SPOTIFY_ALBUM,
  },
];

const MusicTab = () => {
  return (
    <div className="min-h-screen pb-24 px-6 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-3xl font-bold text-foreground mb-1">Müzik</h1>
        <p className="text-sm text-muted-foreground mb-8">Tüm şarkılar ve şiirler</p>
      </motion.div>

      {/* Featured Release */}
      <motion.a
        href={SPOTIFY_ALBUM}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="block bg-card rounded-2xl overflow-hidden border border-border mb-8 group hover:border-primary/30 transition-colors duration-300"
      >
        <div className="aspect-[2/1] bg-gradient-to-br from-primary/20 via-card to-card flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          <div className="relative z-10 text-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">Son Albüm</p>
            <h2 className="font-display text-3xl font-bold text-foreground">Global Episode</h2>
            <p className="text-sm text-muted-foreground mt-1">2 · 2025</p>
          </div>
        </div>
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play size={18} fill="hsl(0 0% 100%)" className="text-primary-foreground ml-0.5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Spotify'da Dinle</p>
              <p className="text-xs text-muted-foreground">5 parça · 30 dil</p>
            </div>
          </div>
          <ExternalLink size={16} className="text-muted-foreground" />
        </div>
      </motion.a>

      {/* Song List */}
      <div className="space-y-3">
        {songs.map((song, i) => (
          <motion.a
            key={song.title}
            href={song.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            className="block bg-card rounded-xl p-4 border-l-2 border-transparent hover:border-primary transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {song.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{song.album} · {song.date}</p>
                <p className="text-xs text-secondary-foreground italic mt-2 leading-relaxed">{song.lyric}</p>
              </div>
              <Play size={14} className="text-muted-foreground group-hover:text-primary mt-1 ml-3 flex-shrink-0 transition-colors" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Spotify CTA */}
      <motion.a
        href={SPOTIFY_ARTIST}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="block text-center mt-8 py-4 text-sm text-primary font-medium hover:underline"
      >
        Tüm müzikleri Spotify'da keşfet →
      </motion.a>
    </div>
  );
};

export default MusicTab;
