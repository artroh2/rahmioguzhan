import { ExternalLink, Music, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const SPOTIFY_ALBUM = 'https://open.spotify.com/intl-tr/album/1RfaeAivtLiIjmvti9TOGv?si=M0qLvRK7RHOz2ZXZ-6YxWQ';
const APPLE_ALBUM = 'https://music.apple.com/tr/album/ne-mi-derdiniz/1885350416?l=tr';
const SPOTIFY_ARTIST = 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk?si=a2OzNdQ7RQavn3XLUxTZuA';
const APPLE_ARTIST = 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707?l=tr';

const MusicTab = () => {
  return (
    <div className="min-h-screen pb-24 px-6 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-sans text-3xl font-bold text-foreground mb-1">Müzik</h1>
        <p className="text-sm text-muted-foreground mb-8">Şarkılar ve albümler</p>
      </motion.div>

      {/* Featured Release */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="block bg-card rounded-2xl overflow-hidden border border-border mb-4 group hover:border-primary/30 hover:shadow-[0_0_25px_hsl(34_66%_47%/0.12)] transition-all duration-300"
      >
        <div className="aspect-square bg-gradient-to-br from-primary/30 via-card to-card flex items-center justify-center relative overflow-hidden">
          <iframe
            src="https://open.spotify.com/embed/album/1RfaeAivtLiIjmvti9TOGv?utm_source=generator&theme=0"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-t-2xl"
            title="Ne Mi Derdiniz - Spotify Embed"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-2 gap-3 mb-10"
      >
        <a
          href={SPOTIFY_ALBUM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#1DB954] hover:bg-[#1DB954]/80 hover:shadow-[0_0_20px_#1DB95440] hover:scale-[1.03] text-primary-foreground font-semibold py-3.5 rounded-xl transition-all duration-300 text-sm active:scale-95"
        >
          <Music size={16} />
          Spotify'da Dinle
        </a>
        <a
          href={APPLE_ALBUM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-card hover:bg-secondary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(34_66%_47%/0.2)] hover:scale-[1.03] text-foreground font-semibold py-3.5 rounded-xl border border-border transition-all duration-300 text-sm active:scale-95"
        >
          <Headphones size={16} />
          Apple Music
        </a>
      </motion.div>

      {/* All Music Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Tüm Albümler ve Şarkılar</h2>
        <div className="space-y-3">
          <a
            href={SPOTIFY_ARTIST}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-card rounded-xl p-4 border-l-2 border-transparent hover:border-primary hover:shadow-[0_0_15px_hsl(34_66%_47%/0.1)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1DB954]/20 flex items-center justify-center">
                <Music size={18} className="text-[#1DB954]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  Spotify — Tüm Müzikler
                </h3>
                <p className="text-xs text-muted-foreground">Tüm albümler ve tekli parçalar</p>
              </div>
            </div>
            <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a
            href={APPLE_ARTIST}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-card rounded-xl p-4 border-l-2 border-transparent hover:border-primary transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                <Headphones size={18} className="text-foreground/70" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  Apple Music — Tüm Müzikler
                </h3>
                <p className="text-xs text-muted-foreground">Apple Music kütüphanesi</p>
              </div>
            </div>
            <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default MusicTab;
