import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AboutSectionProps {
  lang: 'tr' | 'en';
}

const AboutSection = ({ lang }: AboutSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hakkimda" className="relative py-24 sm:py-32">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 30% 50%, hsl(213 100% 65% / 0.04) 0%, transparent 60%)'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-gold mb-3">
            {lang === 'tr' ? 'hakkımda' : 'about'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            {lang === 'tr' ? 'Kim?' : 'Who?'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Abstract visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8 flex items-center justify-center min-h-[300px] relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30" style={{
              background: 'conic-gradient(from 180deg at 50% 50%, hsl(213 100% 65% / 0.3), hsl(263 70% 58% / 0.3), hsl(38 92% 50% / 0.2), hsl(213 100% 65% / 0.3))'
            }} />
            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center mb-4">
                <span className="text-4xl">✦</span>
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                {lang === 'tr' ? 'Gizemler İçinde' : 'Within Mysteries'}
              </p>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            {lang === 'tr' ? (
              <div className="space-y-4">
                <p className="font-display text-lg text-foreground leading-relaxed italic">
                  "Sessizliğin içinde bir evren var — her kelime bir yıldız, her nota bir galaksi."
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rahmi Oğuzhan Hacıeyüpoğlu — şair, besteci ve dijital çağın sessiz filozofu. 
                  Kelimelerle evrenler inşa eder, notalarla duyguları şekillendirir. 
                  Yapay zeka ile sanatın kesişim noktasında, yeni ifade biçimleri arar.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Her şiir bir kapıdır, her şarkı bir yolculuk. 
                  Karanlıkta yazılan satırlar, ışığa dönüşür.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-display text-lg text-foreground leading-relaxed italic">
                  "Within silence lies a universe — each word a star, each note a galaxy."
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rahmi Oğuzhan Hacıeyüpoğlu — poet, composer, and quiet philosopher of the digital age.
                  He builds universes with words and shapes emotions through melodies.
                  At the intersection of AI and art, he seeks new forms of expression.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every poem is a door, every song a journey.
                  Lines written in darkness transform into light.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
