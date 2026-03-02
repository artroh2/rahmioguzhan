import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/cv/Navigation';
import HeroSection from '@/components/cv/HeroSection';
import AboutSection from '@/components/cv/AboutSection';




import Footer from '@/components/cv/Footer';


const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <AboutSection />
        
        
        
        
        <Footer />
        
      </main>
    </LanguageProvider>
  );
};

export default Index;
