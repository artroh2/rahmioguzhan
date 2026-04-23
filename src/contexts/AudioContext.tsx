import { createContext, useContext, useRef, useState, useEffect, useCallback, ReactNode } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  loopCount: number;
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
  const [loopCount, setLoopCount] = useState(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const audio = new Audio('/audio/ikiye-saymak.mp3');
    audio.preload = 'metadata';
    audio.loop = true;
    audioRef.current = audio;

    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    audio.addEventListener('timeupdate', () => {
      const t = audio.currentTime;
      // Detect loop wrap-around: time jumps from near-end back to near-start
      if (lastTimeRef.current > 0 && t + 1 < lastTimeRef.current) {
        setLoopCount(c => c + 1);
      }
      lastTimeRef.current = t;
      setCurrentTime(t);
      if (audio.duration) setProgress((t / audio.duration) * 100);
    });

    const playPromise = audio.play();
    if (playPromise) {
      playPromise.catch(() => setIsPlaying(false));
    }

    return () => {
      audio.pause();
      audio.src = '';
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
    <AudioCtx.Provider value={{ isPlaying, progress, currentTime, duration, loopCount, togglePlay, seek, audioRef }}>
      {children}
    </AudioCtx.Provider>
  );
};
