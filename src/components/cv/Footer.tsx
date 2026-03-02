import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 relative border-t border-border">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>© {currentYear} Rahmi Oğuzhan Hacıeyüpoğlu {t('footer.designed')}</p>
            <p>{t('footer.rights')}</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
