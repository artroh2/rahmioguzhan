import BentoGrid from '@/components/bento/BentoGrid';
import LinkMatrix from '@/components/bento/LinkMatrix';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 md:p-8 pt-8 md:pt-16">
      <BentoGrid />
      <LinkMatrix />
      <div className="h-16" />
    </main>
  );
};

export default Index;
