import { useState } from 'react';
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
import { AudioProvider } from '@/contexts/AudioContext';

const Index = () => {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  return (
    <AudioProvider>
      <div className="min-h-screen bg-[#030508] text-foreground relative">
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
          {/* Bottom video section — anchored to page bottom */}
          <div className="relative flex items-end justify-center pb-0" style={{ minHeight: '100vh' }}>
            <div className="relative w-full max-w-4xl mx-auto px-6 mb-0">
              <div className="relative overflow-hidden">
                <video
                  src="/videos/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-cover"
                />
                {/* Fade to site background (transparent = site bg shows through) */}
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
        </div>
      </div>
    </AudioProvider>
  );
};

export default Index;
