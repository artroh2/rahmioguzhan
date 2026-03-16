import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const INSTAGRAM = 'https://instagram.com/siir2.0';

const poems = [
  {
    title: 'Sessiz Liman',
    stanza: 'Dünya gürültü yaparken,\nben sessizliği inşa ettim.\nTaşları kelimelerden,\nçimentoyu gözyaşından yaptım.',
    link: INSTAGRAM,
  },
  {
    title: 'Gece Mimarı',
    stanza: 'Karanlık çökerken yükselir,\ngörünmez tuğlalar taşırım.\nHerkes uyurken kurarım,\nkimsenin görmediği şehri.',
    link: INSTAGRAM,
  },
  {
    title: 'Mürekkep',
    stanza: 'Mürekkep damarlardan akar,\nkâğıda değil, ruhlara.\nHer kelime bir yara izi,\nher dize bir nefes.',
    link: INSTAGRAM,
  },
  {
    title: 'Son Satır',
    stanza: 'Bu şiirin sonu yok,\nçünkü ben bitmedim.\nHer nokta yeni bir başlangıç,\nher virgül bir tereddüt.',
    link: INSTAGRAM,
  },
  {
    title: 'İki',
    stanza: 'Bir ben vardı, bir de gölgem.\nİkimiz de aynı şeyi yazdık.\nAma birinin mürekkebi kırmızıydı,\ndiğerinin sessizliği.',
    link: INSTAGRAM,
  },
];

const PoemsTab = () => {
  return (
    <div className="min-h-screen pb-24 px-6 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-3xl font-bold text-foreground mb-1">Şiirler</h1>
        <p className="text-sm text-muted-foreground mb-8">@siir2.0</p>
      </motion.div>

      <div className="space-y-4">
        {poems.map((poem, i) => (
          <motion.a
            key={poem.title}
            href={poem.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="block bg-card rounded-2xl p-6 border-l-2 border-transparent hover:border-primary transition-all duration-300 group"
          >
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
              {poem.title}
            </h3>
            <p className="text-sm text-secondary-foreground leading-relaxed whitespace-pre-line italic">
              {poem.stanza}
            </p>
            <div className="flex items-center gap-1.5 mt-4 text-xs text-muted-foreground group-hover:text-primary transition-colors">
              Tamamını Gör
              <ExternalLink size={12} />
            </div>
          </motion.a>
        ))}
      </div>

      <motion.a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="block text-center mt-8 py-4 text-sm text-primary font-medium hover:underline"
      >
        Tüm şiirleri Instagram'da keşfet →
      </motion.a>
    </div>
  );
};

export default PoemsTab;
