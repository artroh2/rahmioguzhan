import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getBilingual = (obj: { tr: string; en: string }, lang: string) => {
  if (lang === 'tr') return obj.tr;
  if (lang === 'en') return obj.en;
  return obj.en;
};

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
    <section id="education" className="py-24 md:py-32 px-4 relative" ref={ref}
      style={{ background: 'linear-gradient(180deg, hsl(220 22% 9% / 0.5), transparent, hsl(220 22% 9% / 0.5))' }}>
      
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(28 85% 55%), transparent)' }} />
      
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-4 mx-auto">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/60" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
              {t('education.title')}
            </h2>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-warm rounded-2xl p-8 space-y-6 card-glow-hover transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, hsl(28 85% 55% / 0.2), hsl(195 45% 50% / 0.15))' }}>
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-2xl font-bold text-primary">{edu.school}</h3>
                <p className="text-lg font-medium text-foreground">
                  {edu.degree[language as 'tr' | 'en'] || edu.degree.en} - {edu.field[language as 'tr' | 'en'] || edu.field.enegree.en} - {edu.field[language as 'tr' | 'en'] || edu.field.enegree.en} - {edu.field[language as 'tr' | 'en'] || edu.field.en}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
          (edu.endYear[language as 'tr' | 'en'] || edu.endYear.en)ssName="w-4 h-4" />
                  {edu(edu.endYear[language as 'tr' | 'en'] || edu.endYear.en) edu.endYear === 'string' ? edu.endYear : edu.endYear[language]}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </span>
              </div>

              {edu.description && (
                <p className="text-muted-foreg as 'tr' | 'en'] || edu.description.enound leading-relaxed pt-4 border-t border-border/50">
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
