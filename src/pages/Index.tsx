import { useState } from 'react';
import Navbar from '@/components/cosmic/Navbar';
import HeroSection from '@/components/cosmic/HeroSection';
import MusicSection from '@/components/cosmic/MusicSection';
import PoetrySection from '@/components/cosmic/PoetrySection';
import ExperienceSection from '@/components/cosmic/ExperienceSection';
import SupportSection from '@/components/cosmic/SupportSection';
import ContactSection from '@/components/cosmic/ContactSection';

const Index = () => {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  return (
    <div className="min-h-screen bg-[#030508] text-foreground relative" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="relative z-10">
        <Navbar lang={lang} onToggleLang={() => setLang(l => l === 'tr' ? 'en' : 'tr')} />
        <HeroSection lang={lang} />

        {/* SANAT */}
        <div id="sanat">
          <MusicSection lang={lang} />
          <PoetrySection lang={lang} />
        </div>

        {/* BUSINESS */}
        <div id="business">
          <ExperienceSection lang={lang} />
          <SupportSection lang={lang} />
        </div>

        {/* İLETİŞİM */}
        <ContactSection lang={lang} />
      </div>
    </div>
  );
};

export default Index;
