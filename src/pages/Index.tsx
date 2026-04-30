import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/cosmic/Navbar';
import HeroSection from '@/components/cosmic/HeroSection';
import MusicSection from '@/components/cosmic/MusicSection';
import PoetrySection from '@/components/cosmic/PoetrySection';
import AboutSection from '@/components/cosmic/AboutSection';
import ContactSection from '@/components/cosmic/ContactSection';
import LyricsSection from '@/components/cosmic/LyricsSection';
import StarfieldCanvas from '@/components/cosmic/StarfieldCanvas';
import CosmicCursor from '@/components/cosmic/CosmicCursor';
import FloatingCelestials from '@/components/cosmic/FloatingCelestials';
import StreamingLinksPopup from '@/components/cosmic/StreamingLinksPopup';
import { AudioProvider, useAudio } from '@/contexts/AudioContext';

const LOOP_CUT_SECONDS = 2; // skip last 2s "coming soon" frame

const BottomVideo = () => {
  const bottomVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onCosmicPause = (e: Event) => {
      if ((e as CustomEvent).detail) bottomVideoRef.current?.pause();
      else bottomVideoRef.current?.play();
    };
    window.addEventListener('cosmic-pause', onCosmicPause);
    return () => window.removeEventListener('cosmic-pause', onCosmicPause);
  }, []);

  // Loop early — skip last 2s ("coming soon" frame)
  const handleTimeUpdate = () => {
    const v = bottomVideoRef.current;
    if (!v || !v.duration) return;
    if (v.currentTime >= v.duration - LOOP_CUT_SECONDS) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  return (
    <div className="relative flex items-end justify-center pb-0" style={{ minHeight: '100vh' }}>
      <div className="relative w-full max-w-4xl mx-auto px-6 mb-0">
        <div className="relative overflow-hidden">
          <video
            ref={bottomVideoRef}
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 80px 40px #030508, inset 0 0 160px 80px #030508',
            }}
          />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#030508] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030508] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#030508] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#030508] to-transparent" />
        </div>
      </div>
    </div>
  );
};

const StreamingPopupTrigger = () => {
  const { loopCount } = useAudio();
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);

  useEffect(() => {
    if (loopCount >= 3 && !shownRef.current) {
      shownRef.current = true;
      setOpen(true);
    }
  }, [loopCount]);

  return <StreamingLinksPopup open={open} onClose={() => setOpen(false)} />;
};

const Index = () => {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  return (
    <div className="min-h-screen bg-[#030508] text-foreground relative" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <StarfieldCanvas />
      <FloatingCelestials />
      <CosmicCursor />
      <div className="relative z-10">
        <Navbar lang={lang} onToggleLang={() => setLang(l => l === 'tr' ? 'en' : 'tr')} />
        <HeroSection lang={lang} />
        <MusicSection lang={lang} />
        <PoetrySection lang={lang} />
        <AboutSection lang={lang} />
        <ContactSection lang={lang} />
        <LyricsSection lang={lang} />
        <BottomVideo />
      </div>
      <StreamingPopupTrigger />
    </div>
  );
};

export default Index;
