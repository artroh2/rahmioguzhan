import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import diamondLogo from '@/assets/diamond-logo.png';

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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['iletisim', 'hakkimda', 'siir', 'muzik'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(`#${id}`);
            return;
          }
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = NAV_ITEMS[lang];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030508]/80 backdrop-blur-xl border-b border-primary/10 shadow-[0_1px_20px_rgba(74,158,255,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <a href="#hero" className="flex items-center transition-transform duration-300 hover:scale-110">
          <img src={diamondLogo} alt="ROH2" width={36} height={36} className="w-9 h-9 drop-shadow-[0_0_8px_rgba(200,220,255,0.4)]" />
        </a>

        {/* Centered "· 2 ·" */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm tracking-[0.3em] text-muted-foreground font-semibold select-none">
          ·&nbsp;&nbsp;2&nbsp;&nbsp;·
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              {activeSection === item.href && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -left-3 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(74,158,255,0.6)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className={activeSection === item.href ? 'text-primary' : ''}>
                {item.label}
              </span>
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
          className="md:hidden bg-[#030508]/95 backdrop-blur-xl border-t border-border"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm transition-colors flex items-center gap-2 ${
                  activeSection === item.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {activeSection === item.href && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(74,158,255,0.6)]" />
                )}
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
