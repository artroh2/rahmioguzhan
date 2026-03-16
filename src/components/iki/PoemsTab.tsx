import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const INSTAGRAM_SIIR = 'https://www.instagram.com/siir2.0';
const INSTAGRAM_PERSONAL = 'https://www.instagram.com/rahmi.oguzhan2';

const poems = [
  {
    title: 'Sessiz Liman',
    stanza: 'Dünya gürültü yaparken,\nben sessizliği inşa ettim.',
    link: INSTAGRAM_SIIR,
  },
  {
    title: 'Gece Mimarı',
    stanza: 'Karanlık çökerken yükselir,\ngörünmez tuğlalar taşırım.',
    link: INSTAGRAM_SIIR,
  },
  {
    title: 'Mürekkep',
    stanza: 'Mürekkep damarlardan akar,\nkâğıda değil, ruhlara.',
    link: INSTAGRAM_SIIR,
  },
  {
    title: 'Son Satır',
    stanza: 'Bu şiirin sonu yok,\nçünkü ben bitmedim.',
    link: INSTAGRAM_SIIR,
  },
  {
    title: 'İki',
    stanza: 'Bir ben vardı, bir de gölgem.\nİkimiz de aynı şeyi yazdık.',
    link: INSTAGRAM_SIIR,
  },
  {
    title: 'Karanlık Şiir',
    stanza: 'Gece yazılır en güzel dizeler,\nkaranlık mürekkeptir şairin.',
    link: INSTAGRAM_SIIR,
  },
];

const InstagramIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const PoemsTab = () => {
  return (
    <div className="relative min-h-screen pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background/98" />
      </div>

      <div className="relative z-10 px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-5xl font-bold text-primary mb-1">Şiirler</h1>
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">@siir2.0</p>
        </motion.div>

        {/* Poem Cards Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {poems.map((poem, i) => (
            <motion.a
              key={poem.title}
              href={poem.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="block bg-card/80 backdrop-blur-xl rounded-2xl p-5 border-l-2 border-transparent hover:border-primary hover:shadow-[0_0_20px_hsl(34_66%_47%/0.15)] transition-all duration-300 group"
            >
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {poem.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line italic mb-3">
                {poem.stanza}
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
                Tamamını Gör
                <ExternalLink size={10} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.a
          href={INSTAGRAM_SIIR}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] hover:opacity-90 hover:shadow-[0_0_25px_#C1358440] hover:scale-[1.02] text-foreground font-semibold py-4 rounded-xl transition-all duration-300 text-sm mb-8 w-full active:scale-95"
        >
          <InstagramIcon size={18} />
          Instagram'da Takip Et
        </motion.a>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Personal Profile */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Kişisel Profil</h2>
          <a
            href={INSTAGRAM_PERSONAL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-card/80 backdrop-blur-xl rounded-xl p-4 border-l-2 border-transparent hover:border-primary hover:shadow-[0_0_15px_hsl(34_66%_47%/0.1)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4]/30 via-[#C13584]/30 to-[#E1306C]/30 flex items-center justify-center">
                <InstagramIcon size={20} className="text-[#E1306C]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  @rahmi.oguzhan2
                </h3>
                <p className="text-xs text-muted-foreground">Kişisel Instagram hesabı</p>
              </div>
            </div>
            <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PoemsTab;
