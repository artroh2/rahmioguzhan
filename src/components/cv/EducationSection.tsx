import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Education {
  school: string;
  degree: { tr: string; en: string };
  field: { tr: string; en: string };
  location: string;
  startYear: string;
  endYear: string | { tr: string; en: string };
  description?: { tr: string; en: string };
}

const educations: Education[] = [
  {
    school: 'Anadolu Üniversitesi',
    degree: { tr: 'Lisans (Devam Ediyor)', en: "Bachelor's Degree (In Progress)" },
    field: { tr: 'Uluslararası İlişkiler', en: 'International Relations' },
    location: 'Eskişehir, Türkiye',
    startYear: '2025',
    endYear: { tr: 'Devam Ediyor', en: 'Present' },
    description: {
      tr: '1. sınıf öğrencisi olarak uluslararası politika ve diplomasi alanlarında eğitim.',
      en: 'First-year student studying international politics and diplomacy.',
    },
  },
  {
    school: 'Nişantaşı Üniversitesi',
    degree: { tr: 'Sertifika Programı', en: 'Certificate Program' },
    field: { tr: 'Ses Tasarımı ve Müzik Prodüksiyonu', en: 'Sound Design and Music Production' },
    location: 'İstanbul, Türkiye',
    startYear: '2024',
    endYear: '2025',
    description: {
      tr: 'Profesyonel ses mühendisliği, müzik prodüksiyonu ve stüdyo tekniklerinde uzmanlaşma.',
      en: 'Specialization in professional audio engineering, music production, and studio techniques.',
    },
  },
  {
    school: 'İstanbul Okan Üniversitesi',
    degree: { tr: 'Lisans', en: "Bachelor's Degree" },
    field: { tr: 'Bilişim Sistemleri ve Teknolojileri', en: 'Information Systems and Technologies' },
    location: 'İstanbul, Türkiye',
    startYear: '2009',
    endYear: '2014',
    description: {
      tr: 'Yazılım geliştirme, veritabanı yönetimi ve sistem analizi konularında kapsamlı eğitim.',
      en: 'Comprehensive education in software development, database management, and system analysis.',
    },
  },
  {
    school: 'Ibertour Aviation Academy',
    degree: { tr: 'PPL Pilotaj Eğitimi', en: 'PPL Pilot Training' },
    field: { tr: 'Özel Pilot Lisansı', en: 'Private Pilot License' },
    location: 'İspanya',
    startYear: '2014',
    endYear: '2015',
    description: {
      tr: 'Özel pilot lisansı (PPL) eğitimi ve uçuş sertifikasyonu.',
      en: 'Private Pilot License (PPL) training and flight certification.',
    },
  },
];

const EducationSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32 px-4 relative bg-secondary/30" ref={ref}>
      <div className="container max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
            {t('education.title')}
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 space-y-6 card-glow-hover transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-bold text-primary">{edu.school}</h3>
                <p className="text-lg font-medium text-foreground">
                  {edu.degree[language]} - {edu.field[language]}
                </p>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {edu.startYear} - {typeof edu.endYear === 'string' ? edu.endYear : edu.endYear[language]}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </span>
              </div>

              {/* Description */}
              {edu.description && (
                <p className="text-muted-foreground leading-relaxed pt-4 border-t border-border">
                  {edu.description[language]}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
