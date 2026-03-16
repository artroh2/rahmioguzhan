import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BottomNav, { type TabId } from '@/components/iki/BottomNav';
import HomeHero from '@/components/iki/HomeHero';
import MusicTab from '@/components/iki/MusicTab';
import PoemsTab from '@/components/iki/PoemsTab';
import ProjectsTab from '@/components/iki/ProjectsTab';
import AboutTab from '@/components/iki/AboutTab';

const Index = () => {
  const [tab, setTab] = useState<TabId>('home');

  const handleNav = (id: TabId) => {
    setTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderTab = () => {
    switch (tab) {
      case 'muzik':
        return <MusicTab />;
      case 'siirler':
        return <PoemsTab />;
      case 'projeler':
        return <ProjectsTab />;
      case 'ben':
        return <AboutTab />;
      default:
        return <HomeHero onNavigate={handleNav} />;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {renderTab()}
        </motion.div>
      </AnimatePresence>
      <BottomNav active={tab} onChange={handleNav} />
    </main>
  );
};

export default Index;
