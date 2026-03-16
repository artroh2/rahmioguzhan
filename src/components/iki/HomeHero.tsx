import { Play, Music, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const SPOTIFY_ARTIST = 'https://open.spotify.com/artist/2uoOCTF68KrEajGqSFNsrj';
const INSTAGRAM = 'https://instagram.com/siir2.0';

const HomeHero = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col px-6 pt-safe">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-10 pb-4"
        >
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
            İKİ
          </h1>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Song of the Day Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 border-l-2 border-primary">
            <p className="text-[11px] tracking-[0.3em] uppercase text-primary font-medium mb-3">
              Günün Parçası
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight mb-2">
              Sessiz Limanı
            </h2>
            <p className="text-sm text-secondary-foreground mb-1">2 · Global Episode</p>
            <p className="text-sm text-muted-foreground italic leading-relaxed mt-3 mb-4">
              "Dünya gürültü yaparken,<br />
              ben sessizliği inşa ettim..."
            </p>
            <a
              href={`${SPOTIFY_ARTIST}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              <Play size={16} fill="currentColor" />
              Spotify'da Dinle
            </a>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-3 mb-6"
        >
          <a
            href={SPOTIFY_ARTIST}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-xl transition-all duration-300 text-sm"
          >
            <Music size={18} />
            Spotify
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-card hover:bg-secondary text-foreground font-semibold py-4 rounded-xl border border-border transition-all duration-300 text-sm"
          >
            <Camera size={18} />
            Şiirler
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center text-xs text-muted-foreground tracking-[0.4em] pb-24"
        >
          şiir · müzik · 2
        </motion.p>
      </div>
    </div>
  );
};

export default HomeHero;
