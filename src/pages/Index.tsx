import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/cv/Navigation';
import HeroSection from '@/components/cv/HeroSection';
import AboutSection from '@/components/cv/AboutSection';
import ExperienceSection from '@/components/cv/ExperienceSection';
import EducationSection from '@/components/cv/EducationSection';
import SkillsSection from '@/components/cv/SkillsSection';
import ContactSection from '@/components/cv/ContactSection';
import Footer from '@/components/cv/Footer';
import WhatsAppButton from '@/components/cv/WhatsAppButton';

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </LanguageProvider>
  );
};

export default Index;
