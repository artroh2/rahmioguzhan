import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1.2, delay, ease: 'easeOut' as const },
});

const BookSection = () => (
  <section id="kitap" className="relative py-28 sm:py-40 px-6">
    <div className="max-w-2xl mx-auto">
      <motion.p {...fade()} className="text-[10px] tracking-[0.5em] uppercase text-accent/70 mb-6">
        Kitap
      </motion.p>

      <motion.h2 {...fade(0.1)} className="font-display text-4xl sm:text-6xl mb-10">
        İkinin
        <span className="text-accent"> Hikayesi</span>
      </motion.h2>

      <div className="space-y-6 text-muted-foreground leading-[1.9] text-[15px] sm:text-base">
        <motion.p {...fade(0.2)}>
          Bir çocuk vardı; bir gözü geceyi, diğeri sabahı taşıyordu. Kimse ona hangi
          tarafın doğru olduğunu söylemedi. O da ikisini birden yaşamayı seçti.
        </motion.p>
        <motion.p {...fade(0.3)}>
          Bu kitap, olan bitenin kaydı değil; olan bitenin gölgesi. İçinde gerçekten
          yaşanmış günler var, gerçekten görülmemiş şehirler var. Kimi sayfada bir
          takvim, kimi sayfada bir kehanet. Nerede birinin bittiğini, diğerinin nerede
          başladığını okuyan karar veriyor.
        </motion.p>
        <motion.p {...fade(0.4)}>
          Roman deseniz eksik kalır, itiraf deseniz fazla gelir. En doğrusu şu:
          iki kişinin tek bir bedende yazdığı bir günlük — ve o iki kişiden biri
          hâlâ geleceği hatırlıyor.
        </motion.p>
      </div>

      <motion.div {...fade(0.5)} className="mt-12">
        <button
          disabled
          className="group inline-flex items-center gap-3 border border-accent/40 text-accent/90 px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-accent/10 transition-colors duration-500 disabled:opacity-70"
        >
          <BookOpen className="w-4 h-4" />
          Kitabı Oku
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Yakında</span>
        </button>
      </motion.div>
    </div>
  </section>
);

export default BookSection;
