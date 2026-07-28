import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => (
  <section id="acilis" className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden">
    {/* duality wash: cold left, warm right */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(60%_60%_at_20%_40%,hsl(var(--duo-cold)/0.22),transparent_70%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(60%_60%_at_80%_60%,hsl(var(--duo-warm)/0.18),transparent_70%)]" />
    </div>

    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.25 }}
      transition={{ duration: 3 }}
      className="absolute font-display text-[40vw] leading-none select-none text-transparent bg-clip-text bg-[linear-gradient(100deg,hsl(var(--duo-cold)/0.35),hsl(var(--duo-warm)/0.35))]"
      aria-hidden
    >
      2
    </motion.span>

    <div className="relative z-10 text-center max-w-2xl">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
        className="font-display text-3xl sm:text-5xl lg:text-6xl text-foreground leading-[1.25]"
      >
        İki olarak başladım.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.2, delay: 3.4, ease: 'easeOut' }}
        className="mt-6 font-display italic text-xl sm:text-3xl text-accent/90"
      >
        Bakalım neler yapabileceğimize.
      </motion.p>
    </div>

    <motion.a
      href="#kitap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 6 }}
      className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-500"
    >
      <span className="text-[10px] tracking-[0.4em] uppercase">Aşağı kaydır</span>
      <ChevronDown className="w-4 h-4" />
    </motion.a>
  </section>
);

export default Hero;
