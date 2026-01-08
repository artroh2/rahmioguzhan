import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'education', labelKey: 'nav.education' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'contact', labelKey: 'nav.contact' },
];

const Navigation = () => {
  const { t, language, setLanguage } = useLanguage();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 10]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const handleDownloadCV = () => {
    const cvPath = language === 'tr' 
      ? '/cv/Rahmi_Oguzhan_Hacieyupoglu_CV_TR.pdf'
      : '/cv/Rahmi_Oguzhan_Hacieyupoglu_CV_EN.pdf';
    
    // Open PDF in new tab - user can download from there
    window.open(cvPath, '_blank');
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
          {/* Logo/Name */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            className="font-display text-xl font-bold text-primary"
          >
            ROH
          </motion.button>

          {/* Nav Items - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t(item.labelKey)}
              </motion.button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language === 'tr' ? 'EN' : 'TR'}</span>
            </motion.button>

            {/* Download CV */}
            <Button
              onClick={handleDownloadCV}
              size="sm"
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <Download className="w-4 h-4" />
              {t('nav.download')}
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
