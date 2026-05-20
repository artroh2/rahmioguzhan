import { useState, useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import BottomNav, { type TabId } from '@/components/iki/BottomNav';
import HomeHero from '@/components/iki/HomeHero';
import MusicTab from '@/components/iki/MusicTab';
import PoemsTab from '@/components/iki/PoemsTab';
import AboutTab from '@/components/iki/AboutTab';

const TAB_ORDER: TabId[] = ['home', 'muzik', 'siirler', 'ben'] as const;

const Index = () => {
  const [tab, setTab] = useState<TabId>('home');
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
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
      // Reset scroll position to top for the newly selected slide
      const slide = slidesRef.current[index];
      if (slide) {
        slide.scrollTop = 0;
      }
    };
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <main className="h-screen bg-background text-foreground overflow-hidden">
      <div className="h-[calc(100vh-4rem)] overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {[
            <HomeHero onNavigate={handleNav} />,
            <MusicTab />,
            <PoemsTab />,
            <AboutTab />,
          ].map((child, i) => (
            <div
              key={i}
              ref={(el) => { slidesRef.current[i] = el; }}
              className="min-w-0 shrink-0 grow-0 basis-full h-full overflow-y-auto"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <BottomNav active={tab} onChange={handleNav} />
    </main>
  );
};

export default Index;
