import { createContext, useContext, useRef, useState, useEffect, useCallback, ReactNode } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  togglePlay: () => void;
  seek: (ratio: number) => void;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const AudioCtx = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
};

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio('/audio/ikiye-saymak.mp3');
    audio.preload = 'metadata';
    audio.loop = true;
    audioRef.current = audio;

    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    });

    const playPromise = audio.play();
    if (playPromise) {
      playPromise.catch(() => setIsPlaying(false));
    }

    // Pause/resume on right-click (desktop) or long-press (mobile via cosmic-pause)
    let wasPlayingBeforePause = false;
    const onDown = (e: MouseEvent) => {
      if (e.button === 2 && audioRef.current) {
        wasPlayingBeforePause = !audioRef.current.paused;
        audioRef.current.pause();
      }
    };
    const onUp = (e: MouseEvent) => {
      if (e.button === 2 && audioRef.current && wasPlayingBeforePause) {
        audioRef.current.play();
      }
    };
    const onCosmicPause = (e: Event) => {
      if (!audioRef.current) return;
      if ((e as CustomEvent).detail) {
        wasPlayingBeforePause = !audioRef.current.paused;
        audioRef.current.pause();
      } else if (wasPlayingBeforePause) {
        audioRef.current.play();
      }
    };
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('cosmic-pause', onCosmicPause);

    return () => {
      audio.pause();
      audio.src = '';
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('cosmic-pause', onCosmicPause);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); } else { audio.play(); }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const seek = useCallback((ratio: number) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    audio.currentTime = ratio * audio.duration;
  }, []);

  return (
    <AudioCtx.Provider value={{ isPlaying, progress, currentTime, duration, togglePlay, seek, audioRef }}>
      {children}
    </AudioCtx.Provider>
  );
};
