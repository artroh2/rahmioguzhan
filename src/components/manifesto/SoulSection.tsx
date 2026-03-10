import { motion } from 'framer-motion';
import { Music, Headphones } from 'lucide-react';

const SoulSection = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(0 0% 2%), hsl(222 47% 3%), hsl(0 0% 1%))'
    }}>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4">Music & Poetry</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-20">
            The Port of Silence
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Music Player Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
            className="glass-dark rounded-2xl p-8 md:p-10"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Global EP</p>
            <div className="space-y-4 mb-8">
              {['Sessizliğin Limanı', 'Gece Mimarı', 'Karanlık Şiir', 'Son Kod'].map((track, i) => (
                <div key={track} className="flex items-center gap-4 group cursor-pointer">
                  <span className="text-xs text-muted-foreground w-5">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm text-secondary-foreground group-hover:text-foreground transition-colors duration-300 flex-1">{track}</span>
                  <span className="text-xs text-muted-foreground">3:{20 + i * 7}</span>
                </div>
              ))}
            </div>

            {/* Playback bar */}
            <div className="space-y-3">
              <div className="h-px bg-border relative">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-primary rounded-full" />
                <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full line-glow" />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>1:12</span>
                <span>3:20</span>
              </div>
            </div>

            {/* Platform links */}
            <div className="flex gap-4 mt-8">
              <a href="https://open.spotify.com/artist/5fMkXpuritdfqjDKrJzJhT" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors duration-300">
                <Music className="w-4 h-4" strokeWidth={1.5} />
                <span>Spotify</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors duration-300">
                <Headphones className="w-4 h-4" strokeWidth={1.5} />
                <span>Apple Music</span>
              </a>
            </div>
          </motion.div>

          {/* Poetry */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col justify-center"
          >
            <blockquote className="text-lg md:text-xl text-secondary-foreground leading-loose italic font-light">
              "My harbors will be left without a ship,
              <br />my nights without a star.
              <br />
              <br />But the silence I built—
              <br />that will outlive me."
            </blockquote>
            <div className="mt-8 w-16 h-px bg-primary/40" />
            <p className="mt-4 text-xs tracking-[0.3em] uppercase text-muted-foreground">
              — From "The Port of Silence"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SoulSection;
