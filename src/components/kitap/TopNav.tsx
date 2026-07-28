import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'kitap', label: 'Kitap' },
  { id: 'siirler', label: 'Şiirler' },
  { id: 'projeler', label: 'Projeler' },
  { id: 'davet', label: 'Davet' },
];

const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-700 ${
        scrolled ? 'bg-background/85 backdrop-blur-md border-b border-border/40' : ''
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 h-14">
        <a href="#acilis" className="font-display text-xl">
          <span style={{ color: '#5C3A1E' }}>2</span>
          <span className="text-muted-foreground text-[10px] tracking-[0.3em] ml-2 uppercase hidden sm:inline">
            İkinin Hikayesi
          </span>
        </a>
        <div className="flex items-center gap-4 sm:gap-7">
          {LINKS.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
