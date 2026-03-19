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
          <h1 className="font-display text-8xl font-bold text-primary mb-1">Müzik</h1>
          <p className="text-[20px] tracking-[0.4em] uppercase text-muted-foreground mb-8">Şarkılar ve albümler</p>
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
              src="https://open.spotify.com/embed/album/0qsai0PajSX9TgzyyzlzR2?utm_source=generator&theme=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-t-2xl"
              title="Spotify Album Embed"
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
                <div className="w-10 h-10 rounded-full bg-[#FC3C44]/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FC3C44">
                    <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.073-.005-.146-.01-.22-.015H6.117l-.284.015a10.16 10.16 0 0 0-1.49.141 5.108 5.108 0 0 0-2.046.791C1.268 1.737.546 2.845.272 4.252a9.233 9.233 0 0 0-.16 1.088c-.01.1-.015.2-.02.299V18.36l.014.283c.025.39.07.78.153 1.164.347 1.61 1.27 2.78 2.683 3.428.423.194.87.313 1.325.38.37.055.745.09 1.12.1.1.005.2.007.298.01h11.83l.284-.015a9.86 9.86 0 0 0 1.49-.14 5.1 5.1 0 0 0 2.046-.792c1.03-.69 1.753-1.8 2.03-3.207a9.228 9.228 0 0 0 .16-1.088c.01-.1.015-.2.02-.299V6.124zm-7.882 13.645c-.078.063-.16.12-.247.17a1.13 1.13 0 0 1-.58.14c-.076-.003-.152-.015-.226-.033a.93.93 0 0 1-.263-.117 13.348 13.348 0 0 1-.564-.397c-.69-.53-1.24-1.18-1.57-1.97-.082-.196-.148-.398-.18-.61a1.42 1.42 0 0 1 .058-.597c.09-.282.237-.535.43-.75.166-.186.358-.347.568-.482.327-.21.676-.376 1.04-.5.262-.09.53-.16.8-.22.39-.083.783-.14 1.178-.18v-.47c0-.35 0-.7-.004-1.05a1.466 1.466 0 0 0-.058-.376.534.534 0 0 0-.384-.39.723.723 0 0 0-.218-.032.835.835 0 0 0-.246.038.715.715 0 0 0-.345.264c-.075.11-.12.235-.127.37-.002.065-.002.13-.002.195v.412c-.254.033-.503.074-.75.126a5.723 5.723 0 0 0-1.248.43c-.47.234-.88.553-1.163.99a2.14 2.14 0 0 0-.323 1.065c-.013.315.03.626.132.924.168.49.474.892.887 1.19.263.19.553.336.865.43.085.025.172.045.26.06v.025a3.355 3.355 0 0 1-.507-.1 4.292 4.292 0 0 1-1.372-.64 3.482 3.482 0 0 1-1.12-1.308 3.632 3.632 0 0 1-.354-1.292 3.678 3.678 0 0 1 .095-1.233c.17-.618.475-1.165.9-1.632.5-.55 1.108-.94 1.8-1.183.39-.137.793-.228 1.202-.28.113-.015.226-.025.34-.033V8.39a.674.674 0 0 1 .022-.176.343.343 0 0 1 .353-.258.516.516 0 0 1 .194.048c.067.033.13.073.186.122l.087.08 3.212 2.974c.07.063.133.133.19.21a.458.458 0 0 1-.007.575 1.705 1.705 0 0 1-.166.187l-3.222 2.98a1.635 1.635 0 0 1-.157.135z" />
                  </svg>
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
