import TopNav from '@/components/kitap/TopNav';
import Hero from '@/components/kitap/Hero';
import BookSection from '@/components/kitap/BookSection';
import PoemShowcase from '@/components/kitap/PoemShowcase';
import ProjectsSection from '@/components/kitap/ProjectsSection';
import InviteSection from '@/components/kitap/InviteSection';
import SiteFooter from '@/components/kitap/SiteFooter';

const Index = () => (
  <div
    className="min-h-screen bg-background text-foreground"
    style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
  >
    <TopNav />
    <main>
      <Hero />
      <BookSection />
      <PoemShowcase />
      <ProjectsSection />
      <InviteSection />
    </main>
    <SiteFooter />
  </div>
);

export default Index;
