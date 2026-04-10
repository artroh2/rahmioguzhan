import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: 'tr' | 'en';
  onToggleLang: () => void;
}

const NAV_ITEMS = {
  tr: [
    { label: 'Müzik', href: '#muzik' },
    { label: 'Şiir', href: '#siir' },
    { label: 'Hakkımda', href: '#hakkimda' },
    { label: 'İletişim', href: '#iletisim' },
  ],
  en: [
    { label: 'Music', href: '#muzik' },
    { label: 'Poetry', href: '#siir' },
    { label: 'About', href: '#hakkimda' },
    { label: 'Contact', href: '#iletisim' },
  ],
};

const Navbar = ({ lang, onToggleLang }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = NAV_ITEMS[lang];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-background/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-2xl font-bold text-foreground hover:text-primary transition-colors">
          Rahmi Oğuzhan
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onToggleLang}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-300"
          >
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onToggleLang}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border hover:border-primary text-muted-foreground transition-all"
          >
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-border"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
