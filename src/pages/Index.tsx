import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/cosmic/Navbar';
import HeroSection from '@/components/cosmic/HeroSection';
import MusicSection from '@/components/cosmic/MusicSection';
import PoetrySection from '@/components/cosmic/PoetrySection';
import AboutSection from '@/components/cosmic/AboutSection';
import ExperienceSection from '@/components/cosmic/ExperienceSection';
import SupportSection from '@/components/cosmic/SupportSection';
import ContactSection from '@/components/cosmic/ContactSection';
import LyricsSection from '@/components/cosmic/LyricsSection';

const LOOP_CUT_SECONDS = 2;

const BottomVideo = () => {
  const bottomVideoRef = useRef<HTMLVideoElement>(null);

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

const Index = () => {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  // Group markers used by nav dropdowns to hop to a section anchor
  return (
    <div className="min-h-screen bg-[#030508] text-foreground relative" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="relative z-10">
        <Navbar lang={lang} onToggleLang={() => setLang(l => l === 'tr' ? 'en' : 'tr')} />
        <HeroSection lang={lang} />

        {/* SANAT */}
        <div id="sanat">
          <MusicSection lang={lang} />
          <PoetrySection lang={lang} />
          <AboutSection lang={lang} />
          <LyricsSection lang={lang} />
        </div>

        {/* BUSINESS */}
        <div id="business">
          <ExperienceSection lang={lang} />
          <SupportSection lang={lang} />
        </div>

        {/* İLETİŞİM */}
        <ContactSection lang={lang} />

        <BottomVideo />
      </div>
    </div>
  );
};

export default Index;
