import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Globe, Music } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const highlights = [
  { icon: Briefcase, label: { tr: '10+ Yıl Deneyim', en: '10+ Years Experience' } },
  { icon: GraduationCap, label: { tr: '2 Üniversite Derecesi', en: '2 University Degrees' } },
  { icon: Globe, label: { tr: 'Profesyonel İngilizce', en: 'Professional English' } },
  { icon: Music, label: { tr: 'Müzik Prodüktörü', en: 'Music Producer' } },
];

const AboutSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 md:py-32 px-4 relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary" />
      
      <div className="container max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
              {t('about.title')}
            </h2>
            <div className="section-divider" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-center text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            {t('about.description')}
          </motion.p>

          {/* Highlights Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 text-center space-y-3 card-glow-hover transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm md:text-base font-medium text-foreground">
                  {item.label[language]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary to-transparent" />
    </section>
  );
};

export default AboutSection;
