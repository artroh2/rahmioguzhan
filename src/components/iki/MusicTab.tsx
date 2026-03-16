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
