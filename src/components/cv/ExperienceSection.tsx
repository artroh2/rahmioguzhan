import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Calendar, ChevronDown, ChevronUp, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Experience {
  company: string;
  position: { tr: string; en: string };
  location: string;
  startDate: string;
  endDate: string | null;
  description: { tr: string; en: string };
  highlights?: { tr: string[]; en: string[] };
}

const experiences: Experience[] = [
  {
    company: 'AraçYorumu.com',
    position: { tr: 'Kurucu Ortak', en: 'Co-Founder' },
    location: 'İstanbul, Türkiye',
    startDate: '2024',
    endDate: null,
    description: {
      tr: 'Araç değerlendirme ve içerik platformunun kurucu ortağı olarak stratejik yönetim ve iş geliştirme.',
      en: 'Strategic management and business development as co-founder of vehicle evaluation and content platform.',
    },
    highlights: {
      tr: ['Platform geliştirme', 'İş stratejisi', 'İçerik yönetimi'],
      en: ['Platform development', 'Business strategy', 'Content management'],
    },
  },
  {
    company: 'Duosy',
    position: { tr: 'Operasyon Koordinatörü', en: 'Operations Coordinator' },
    location: 'İstanbul, Türkiye',
    startDate: '2023',
    endDate: '2024',
    description: {
      tr: 'Operasyonel süreçlerin yönetimi, takım koordinasyonu ve proje takibi.',
      en: 'Management of operational processes, team coordination, and project tracking.',
    },
    highlights: {
      tr: ['Süreç optimizasyonu', 'Takım yönetimi', 'Proje koordinasyonu'],
      en: ['Process optimization', 'Team management', 'Project coordination'],
    },
  },
  {
    company: 'PPL Pilotaj',
    position: { tr: 'Operasyon Uzmanı', en: 'Operations Specialist' },
    location: 'İstanbul, Türkiye',
    startDate: '2022',
    endDate: '2023',
    description: {
      tr: 'Havacılık sektöründe operasyon yönetimi ve müşteri ilişkileri.',
      en: 'Operations management and customer relations in the aviation sector.',
    },
    highlights: {
      tr: ['Havacılık operasyonları', 'Müşteri ilişkileri', 'Kalite kontrol'],
      en: ['Aviation operations', 'Customer relations', 'Quality control'],
    },
  },
  {
    company: 'Çeşitli Şirketler',
    position: { tr: 'Proje & Operasyon Yönetimi', en: 'Project & Operations Management' },
    location: 'İstanbul, Türkiye',
    startDate: '2014',
    endDate: '2022',
    description: {
      tr: 'Farklı sektörlerde proje yönetimi, operasyon koordinasyonu ve dijital çözümler geliştirme deneyimi.',
      en: 'Experience in project management, operations coordination, and digital solutions development across various sectors.',
    },
    highlights: {
      tr: ['Proje yönetimi', 'Dijital dönüşüm', 'Süreç geliştirme'],
      en: ['Project management', 'Digital transformation', 'Process improvement'],
    },
  },
];

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const { language, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      {/* Timeline Connector */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
      
      {/* Timeline Dot */}
      <motion.div
        whileHover={{ scale: 1.3 }}
        className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 shadow-lg shadow-primary/30"
      />

      {/* Card */}
      <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
        <motion.div
          className="glass rounded-2xl p-6 space-y-4 card-glow-hover cursor-pointer transition-all duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl font-bold text-primary">{experience.company}</h3>
              </div>
              <p className="text-lg font-medium text-foreground">{experience.position[language]}</p>
            </div>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.startDate} - {experience.endDate || t('experience.present')}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
          </div>

          {/* Expanded Content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-border space-y-4">
              <p className="text-muted-foreground leading-relaxed">{experience.description[language]}</p>
              {experience.highlights && (
                <div className="flex flex-wrap gap-2">
                  {experience.highlights[language].map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 px-4 relative" ref={ref}>
      <div className="container max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
            {t('experience.title')}
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
