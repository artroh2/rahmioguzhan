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
      { name: { tr: 'Tüm Microsoft Office Programları', en: 'All Microsoft Office Programs' }, level: 95 },
      { name: { tr: 'Adobe Creative Suite', en: 'Adobe Creative Suite' }, level: 80 },
      { name: { tr: 'GPT Uygulamaları', en: 'GPT Applications' }, level: 85 },
      { name: { tr: 'IFS (ERP)', en: 'IFS (ERP)' }, level: 75 },
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
      { name: { tr: 'Gitar & Müzik', en: 'Guitar & Music' }, level: 90 },
      { name: { tr: 'EDM Prodüksiyonu', en: 'EDM Production' }, level: 85 },
      { name: { tr: 'Şiir Yazarlığı', en: 'Poetry Writing' }, level: 80 },
      { name: { tr: 'Spor', en: 'Sports' }, level: 75 },
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
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
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
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 space-y-6 card-glow-hover transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">
                  {t(category.titleKey)}
                </h3>
              </div>

              {/* Skills */}
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
