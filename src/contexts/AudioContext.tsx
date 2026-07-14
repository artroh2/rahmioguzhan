import { createContext, useContext, useRef, ReactNode } from 'react';

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

// Audio playback disabled per user request. Stubbed to keep the interface
// stable for existing consumers (LyricsSection etc.) without playing sound.
export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const noop = () => {};

  return (
    <AudioCtx.Provider
      value={{
        isPlaying: false,
        progress: 0,
        currentTime: 0,
        duration: 0,
        loopCount: 0,
        togglePlay: noop,
        seek: noop,
        audioRef,
      }}
    >
      {children}
    </AudioCtx.Provider>
  );
};
