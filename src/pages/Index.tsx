import HeroSection from '@/components/manifesto/HeroSection';
import EmpireSection from '@/components/manifesto/EmpireSection';
import SoulSection from '@/components/manifesto/SoulSection';
import CTASection from '@/components/manifesto/CTASection';
import FooterMinimal from '@/components/manifesto/FooterMinimal';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <EmpireSection />
      <SoulSection />
      <CTASection />
      <FooterMinimal />
    </main>
  );
};

export default Index;
