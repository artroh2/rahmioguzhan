import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import goldenHeart from '@/assets/golden-heart.png';

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <footer className="py-12 px-4 relative border-t border-border">
      <div className="container max-w-5xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          Designed by Rahmi Oğuzhan Hacıeyüpoğlu
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          All rights reserved.
        </p>
        <img src={goldenHeart} alt="Golden Heart" className="mx-auto mt-4 w-12 h-12 object-contain" />

        {/* Music Player */}
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, #d4a017, #f5d060, #c8941e)',
              boxShadow: isPlaying
                ? '0 0 16px rgba(212, 160, 23, 0.5), 0 0 32px rgba(212, 160, 23, 0.2)'
                : '0 2px 8px rgba(0,0,0,0.3)',
            }}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause size={18} className="text-background" fill="hsl(var(--background))" />
            ) : (
              <Play size={18} className="text-background ml-0.5" fill="hsl(var(--background))" />
            )}
          </button>
        </div>

        <audio
          ref={audioRef}
          src="/audio/we-are-one.mp3"
          onEnded={() => setIsPlaying(false)}
          loop
        />
      </div>
    </footer>
  );
};

export default Footer;
