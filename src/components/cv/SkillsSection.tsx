import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Code, Wrench, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SkillCategory {
  icon: React.ElementType;
  titleKey: string;
  skills: { name: { tr: string; en: string }; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Globe,
    titleKey: 'skills.languages',
    skills: [
      { name: { tr: 'Türkçe (Anadil)', en: 'Turkish (Native)' }, level: 100 },
      { name: { tr: 'İngilizce (Profesyonel)', en: 'English (Professional)' }, level: 85 },
      { name: { tr: 'İspanyolca (B1)', en: 'Spanish (B1)' }, level: 40 },
    ],
  },
  {
    icon: Code,
    titleKey: 'skills.software',
    skills: [
      { name: { tr: 'GPT Uygulamaları', en: 'GPT Applications' }, level: 85 },
      { name: { tr: 'Adobe Creative Suite', en: 'Adobe Creative Suite' }, level: 80 },
      { name: { tr: 'FL Studio', en: 'FL Studio' }, level: 75 },
      { name: { tr: 'Tüm Microsoft Office Programları', en: 'All Microsoft Office Programs' }, level: 95 },
    ],
  },
  {
    icon: Wrench,
    titleKey: 'skills.technical',
    skills: [
      { name: { tr: 'Proje Yönetimi', en: 'Project Management' }, level: 95 },
      { name: { tr: 'Prompt Mühendisliği ve Web Programlama', en: 'Prompt Engineering & Web Development' }, level: 85 },
      { name: { tr: 'SolidWorks ile 3D Modelleme', en: '3D Modeling with SolidWorks' }, level: 70 },
      { name: { tr: 'Tek Motorlu Planör Uçak Operasyonları', en: 'Single Engine Glider Aircraft Operations' }, level: 100 },
    ],
  },
  {
    icon: Heart,
    titleKey: 'skills.hobbies',
    skills: [
      { name: { tr: 'Şiir ve Şarkı Sözü Yazarlığı', en: 'Poetry & Songwriting' }, level: 100 },
      { name: { tr: 'Gitar ve Piano ile Beste Yapımı ve İcra', en: 'Composing and Performing with Guitar and Piano' }, level: 85 },
      { name: { tr: 'Elektronik Dans Müziği Prodüksiyonu', en: 'Electronic Dance Music Production' }, level: 80 },
      { name: { tr: 'Çeşitli Sportif Aktiviteler', en: 'Various Sports Activities' }, level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, hsl(28 85% 55%), hsl(195 45% 50%), hsl(28 85% 55%))' }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 px-4 relative" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(195 45% 50%), transparent)' }} />
      
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
            {t('skills.title')}
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-warm rounded-2xl p-8 space-y-6 card-glow-hover transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, hsl(28 85% 55% / 0.2), hsl(195 45% 50% / 0.15))' }}>
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">
                  {t(category.titleKey)}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name[language]}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
