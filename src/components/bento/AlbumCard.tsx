import { Music } from 'lucide-react';

const AlbumCard = () => {
  return (
    <div className="bento-card h-full flex flex-col justify-between p-6 relative overflow-hidden">
      {/* Pulsing indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'hsl(142 71% 45%)' }} />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: 'hsl(142 71% 45%)' }} />
        </span>
      </div>

      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Yeni Proje</p>
        <div className="flex items-start gap-3">
          <span className="text-3xl">🎵</span>
          <div>
            <p className="text-sm text-foreground font-medium leading-relaxed">Yeni Albüm üzerinde çalışılıyor</p>
            <p className="text-xs text-muted-foreground mt-1">Çok yakında...</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Music className="w-3.5 h-3.5 text-primary" />
        <span className="text-[10px] text-muted-foreground/50">Stüdyo çalışması devam ediyor</span>
      </div>
    </div>
  );
};

export default AlbumCard;
