import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const MAILTO = 'mailto:roh@rahmioguzhan.com?subject=Contact — ROH2&body=Hello Oğuzhan,';

const AboutTab = () => {
  return (
    <div className="relative h-full flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background/98" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col px-6 pt-12 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-8xl font-bold text-primary mb-1">2</h1>
          <p className="text-[20px] tracking-[0.4em] uppercase text-muted-foreground mb-8">Get in touch with Rahmi Oğuzhan Hacıeyüpoğlu</p>
        </motion.div>

        {/* Mail Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10"
        >
          <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Contact</h2>
          <a
            href={MAILTO}
            className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black font-semibold py-3 rounded-xl transition-all duration-300 text-sm active:scale-[0.98]"
          >
            ✉️ Send Email
          </a>
          <a
            href={MAILTO}
            className="block mt-3 text-center text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            roh@rahmioguzhan.com
          </a>
        </motion.div>

        <div className="flex-1" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-muted-foreground"
        >
          ROH2 © 2026 — All rights reserved
        </motion.p>
      </div>
    </div>
  );
};

export default AboutTab;
