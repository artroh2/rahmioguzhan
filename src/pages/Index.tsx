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
          {/* Empty space for cosmic canvas creation */}
          <div className="h-screen" />
        </div>
      </div>
    </AudioProvider>
  );
};

export default Index;
