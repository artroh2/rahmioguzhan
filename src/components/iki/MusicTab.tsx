import { ExternalLink, Music, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const SPOTIFY_ARTIST = 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk?si=a2OzNdQ7RQavn3XLUxTZuA';
const APPLE_ARTIST = 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707?l=tr';

const MusicTab = () => {
  return (
    <div className="relative min-h-screen pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background/98" />
      </div>

      <div className="relative z-10 px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-5xl font-bold text-primary mb-1">Müzik</h1>
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">Şarkılar ve albümler</p>
        </motion.div>

        {/* Featured Release */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-border mb-8 hover:border-primary/30 hover:shadow-[0_0_25px_hsl(34_66%_47%/0.12)] transition-all duration-300"
        >
          <div className="aspect-square">
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

        {/* All Music Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Tüm Albümler ve Şarkılar</h2>
          <div className="space-y-3">
            <a
              href={SPOTIFY_ARTIST}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-card/80 backdrop-blur-xl rounded-xl p-4 border-l-2 border-transparent hover:border-primary hover:shadow-[0_0_15px_hsl(34_66%_47%/0.1)] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1DB954]/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DB954">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
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
              className="flex items-center justify-between bg-card/80 backdrop-blur-xl rounded-xl p-4 border-l-2 border-transparent hover:border-primary hover:shadow-[0_0_15px_hsl(34_66%_47%/0.1)] transition-all duration-300 group"
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
    </div>
  );
};

export default MusicTab;
