import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Loader2 } from 'lucide-react';
import { useLanguage, languages, Language } from '@/contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

const Navigation = () => {
  const { t, language, setLanguage, isTranslating } = useLanguage();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 10]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === language);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredLanguages = languages.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.nativeName.toLowerCase().includes(search.toLowerCase()) ||
    l.code.includes(search.toLowerCase())
  );

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <motion.nav
      style={{
        opacity,
        backdropFilter: `blur(${blur}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 border-b border-border/50"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            className="font-display text-xl font-bold text-primary"
          >
            ROH
          </motion.button>

          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/80 transition-all border border-transparent hover:border-border/50"
              >
                {isTranslating ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Globe className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">{currentLang?.flag}</span>
                <span className="uppercase text-xs font-bold tracking-wider">{language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden z-[100]"
                  >
                    {/* Search */}
                    <div className="p-3 border-b border-border/30">
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search language..."
                        autoFocus
                        className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 border border-border/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all"
                      />
                    </div>

                    {/* Language List */}
                    <div className="max-h-80 overflow-y-auto overscroll-contain p-1.5">
                      {filteredLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleSelect(lang.code)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 group ${
                            language === lang.code
                              ? 'bg-primary/10 text-primary'
                              : 'hover:bg-muted/60 text-foreground'
                          }`}
                        >
                          <span className="text-lg leading-none">{lang.flag}</span>
                          <div className="flex flex-col min-w-0">
                            <span className="text-sm font-semibold truncate">{lang.nativeName}</span>
                            <span className="text-xs text-muted-foreground truncate">{lang.name}</span>
                          </div>
                          {language === lang.code && (
                            <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                          )}
                        </button>
                      ))}
                      {filteredLanguages.length === 0 && (
                        <p className="text-sm text-muted-foreground text-center py-4">No results</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
