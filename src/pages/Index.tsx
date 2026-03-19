import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import BottomNav, { type TabId } from '@/components/iki/BottomNav';
import HomeHero from '@/components/iki/HomeHero';
import MusicTab from '@/components/iki/MusicTab';
import PoemsTab from '@/components/iki/PoemsTab';
import AboutTab from '@/components/iki/AboutTab';

const TAB_ORDER: TabId[] = ['home', 'muzik', 'siirler', 'ben'];

const Index = () => {
  const [tab, setTab] = useState<TabId>('home');
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    skipSnaps: false,
    duration: 20,
  });

  const handleNav = useCallback(
    (id: TabId) => {
      const index = TAB_ORDER.indexOf(id);
      if (index !== -1) {
        setTab(id);
        emblaApi?.scrollTo(index);
      }
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setTab(TAB_ORDER[index]);
    };
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="min-w-0 shrink-0 grow-0 basis-full">
            <HomeHero onNavigate={handleNav} />
          </div>
          <div className="min-w-0 shrink-0 grow-0 basis-full">
            <MusicTab />
          </div>
          <div className="min-w-0 shrink-0 grow-0 basis-full">
            <PoemsTab />
          </div>
          <div className="min-w-0 shrink-0 grow-0 basis-full">
            <AboutTab />
          </div>
        </div>
      </div>
      <BottomNav active={tab} onChange={handleNav} />
    </main>
  );
};

export default Index;
