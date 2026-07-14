import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import diamondLogo from '@/assets/diamond-logo.png';

interface NavbarProps {
  lang: 'tr' | 'en';
  onToggleLang: () => void;
}

type NavItem = { label: string; href: string; route?: boolean };
type NavGroup = { label: string; items: NavItem[] };

const NAV_GROUPS: Record<'tr' | 'en', NavGroup[]> = {
  tr: [
    {
      label: 'Sanat',
      items: [
        { label: 'Şarkılar & Albümler', href: '/#muzik' },
        { label: 'Şiirler', href: '/#siir' },
      ],
    },
    {
      label: 'Business',
      items: [
        { label: 'Projeler', href: '/projeler', route: true },
        { label: 'Deneyim', href: '/#deneyim' },
        { label: 'Destek', href: '/#destek' },
      ],
    },
    {
      label: 'İletişim',
      items: [{ label: 'İletişim', href: '/#iletisim' }],
    },
  ],
  en: [
    {
      label: 'Art',
      items: [
        { label: 'Songs & Albums', href: '/#muzik' },
        { label: 'Poems', href: '/#siir' },
      ],
    },
    {
      label: 'Business',
      items: [
        { label: 'Projects', href: '/projeler', route: true },
        { label: 'Experience', href: '/#deneyim' },
        { label: 'Support', href: '/#destek' },
      ],
    },
    {
      label: 'Contact',
      items: [{ label: 'Contact', href: '/#iletisim' }],
    },
  ],
};

const Navbar = ({ lang, onToggleLang }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const groups = NAV_GROUPS[lang];

  const handleNavigate = (item: NavItem) => {
    setOpenGroup(null);
    setMobileOpen(false);
    if (item.route) {
      navigate(item.href);
      return;
    }
    // hash link (e.g. /#muzik)
    const [path, hash] = item.href.split('#');
    if (location.pathname !== (path || '/')) {
      navigate(item.href);
    } else if (hash) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030508]/90 backdrop-blur-xl border-b border-primary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-110">
          <img src={diamondLogo} alt="ROH2" width={36} height={36} className="w-9 h-9 drop-shadow-[0_0_8px_rgba(200,220,255,0.4)]" />
        </Link>

        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm tracking-[0.3em] text-muted-foreground font-semibold select-none">
          ·&nbsp;&nbsp;2&nbsp;&nbsp;·
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {groups.map((g) => {
            const isSingle = g.items.length === 1;
            if (isSingle) {
              return (
                <button
                  key={g.label}
                  onClick={() => handleNavigate(g.items[0])}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {g.label}
                </button>
              );
            }
            return (
              <div
                key={g.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(g.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                  {g.label}
                  <ChevronDown size={14} className={`transition-transform ${openGroup === g.label ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openGroup === g.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 min-w-[180px]"
                    >
                      <div className="rounded-xl border border-white/10 bg-[#030508]/95 backdrop-blur-xl py-2 shadow-lg">
                        {g.items.map((item) => (
                          <button
                            key={item.href}
                            onClick={() => handleNavigate(item)}
                            className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-white/[0.03] transition-colors"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <button
            onClick={onToggleLang}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all"
          >
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onToggleLang}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border text-muted-foreground"
          >
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground p-1" aria-label="Menu">
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
          <div className="px-6 py-4 flex flex-col gap-5">
            {groups.map((g) => (
              <div key={g.label}>
                <div className="text-[11px] font-mono tracking-[0.25em] uppercase text-primary/70 mb-2">
                  {g.label}
                </div>
                <div className="flex flex-col gap-2 pl-1">
                  {g.items.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavigate(item)}
                      className="text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
