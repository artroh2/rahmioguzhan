import { Music, Headphones } from 'lucide-react';

const MusicCard = () => {
  return (
    <div className="bento-card h-full flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 group">
      {/* Waveform mockup */}
      <div className="flex items-end gap-[3px] h-12 shrink-0">
        {[30, 60, 45, 80, 35, 70, 50, 90, 40, 65, 55, 75, 38, 85, 48].map((h, i) => (
          <div
            key={i}
            className="w-[3px] rounded-full bg-primary/40 group-hover:bg-primary/70 transition-colors duration-500"
            style={{
              height: `${h}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-2">The Port of Silence</p>
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">Global EP</h3>
        <p className="text-sm text-muted-foreground">Listen to the Global EP: 6 Languages, 1 Truth.</p>
      </div>

      <div className="flex gap-3 shrink-0">
        <a href="https://open.spotify.com/artist/5fMkXpuritdfqjDKrJzJhT" target="_blank" rel="noopener noreferrer"
          className="p-2.5 rounded-full glass-dark hover:bg-primary/10 transition-colors duration-300">
          <Music className="w-4 h-4 text-muted-foreground hover:text-accent" strokeWidth={1.5} />
        </a>
        <a href="#" className="p-2.5 rounded-full glass-dark hover:bg-primary/10 transition-colors duration-300">
          <Headphones className="w-4 h-4 text-muted-foreground hover:text-accent" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
};

export default MusicCard;
