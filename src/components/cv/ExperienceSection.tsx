import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Calendar, ChevronDown, ChevronUp, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Experience {
  company: string;
  companyTr?: string;
  position: { tr: string; en: string };
  location: string;
  startDate: string;
  endDate: string | null;
  description: { tr: string; en: string };
  highlights?: { tr: string[]; en: string[] };
}

const experiences: Experience[] = [
  {
    company: 'Arayor.com & Aracyorumu.com',
    position: { tr: 'Kurucu & CEO', en: 'Founder & CEO' },
    location: 'İstanbul, Türkiye',
    startDate: '2025',
    endDate: null,
    description: {
      tr: 'Tüm operasyonlar, stratejik yönetim, iş ve model geliştirme. Fikir aşamasından nihai sonuca kadar tüm süreçleri yönettim. Tek kişi olarak yönettiğim bir operasyon olması sebebi ile öne çıkmaktadır.',
      en: 'All operations, strategic management, business and model development. I managed all processes from the idea stage to the final result. It stands out as an operation managed by a single person.',
    },
    highlights: {
      tr: ['Stratejik yönetim', 'İş geliştirme', 'Model geliştirme', 'Tüm operasyonlar'],
      en: ['Strategic management', 'Business development', 'Model development', 'All operations'],
    },
  },
  {
    company: 'Freelance',
    position: { tr: 'Serbest Çalışan', en: 'Freelancer' },
    location: 'İstanbul, Türkiye',
    startDate: '2022',
    endDate: '2025',
    description: {
      tr: 'Freelance olarak farklı sektörlerde çeşitli projelerde görev aldım. Müşteri ihtiyaçlarını analiz ederek, taleplere uygun yaratıcı ve teknik çözümler geliştirdim, projeleri fikir aşamasından teslimata kadar başarıyla yönettim.',
      en: 'Worked on various projects across different sectors as a freelancer. Analyzed customer needs, developed creative and technical solutions, and successfully managed projects from idea to delivery.',
    },
    highlights: {
      tr: ['SolidWorks 3D modelleme', '3D yazıcı ile üretim', 'Sosyal medya yönetimi', 'Teknik sunumlar', 'Web tasarım desteği'],
      en: ['SolidWorks 3D modeling', '3D printing production', 'Social media management', 'Technical presentations', 'Web design support'],
    },
  },
  {
    company: 'Lazer Teknik',
    position: { tr: 'Satış Yöneticisi', en: 'Sales Manager' },
    location: 'İstanbul, Türkiye',
    startDate: '2022',
    endDate: '2022',
    description: {
      tr: 'Polonya menşeli Eagle lazer metal sac kesim makinelerinin Türkiye distribütörü olarak, sac kesim yapan şirketlerle birebir görüşerek detaylı bilgilendirme ve sunum yapmak, satış süreçlerini yönetmek ve sosyal medya hesaplarını yönetmek.',
      en: 'As the Turkey distributor of Polish Eagle laser metal sheet cutting machines, conducting detailed presentations with sheet cutting companies, managing sales processes and social media accounts.',
    },
    highlights: {
      tr: ['Satış ve pazarlama', 'Ürün sunumları', 'Sosyal medya yönetimi', 'Müşteri ilişkileri'],
      en: ['Sales and marketing', 'Product presentations', 'Social media management', 'Customer relations'],
    },
  },
  {
    company: 'Yılmaz Redüktör',
    position: { tr: 'Satış Mühendisi', en: 'Sales Engineer' },
    location: 'İstanbul, Türkiye',
    startDate: '2019',
    endDate: '2021',
    description: {
      tr: "Türkiye'nin en büyük redüktör fabrikasında, İhracat Departmanında Satış Mühendisi olarak Orta Doğu ve Rusya'nın redüktör taleplerini karşılamak için teklif aşamasından müşteri memnuniyetine kadar olan süreçleri yürüttüm.",
      en: "As a Sales Engineer in the Export Department of Turkey's largest gearbox factory, I managed processes from quotation to customer satisfaction for gearbox requests from the Middle East and Russia.",
    },
    highlights: {
      tr: ['Proforma hazırlığı', 'Ürün üretim takibi', 'Lojistik yönetimi', 'Banka yazışmaları'],
      en: ['Proforma preparation', 'Product tracking', 'Logistics management', 'Bank correspondence'],
    },
  },
  {
    company: 'Other',
    companyTr: 'Diğer',
    position: { tr: 'Çeşitli Pozisyonlar', en: 'Various Positions' },
    location: 'İstanbul, Türkiye',
    startDate: '2014',
    endDate: '2019',
    description: {
      tr: 'Farklı sektörlerde çeşitli projelerde görev aldım. Proje yönetimi, operasyon koordinasyonu ve dijital çözümler geliştirme deneyimi edindim.',
      en: 'Worked on various projects across different sectors. Gained experience in project management, operations coordination, and digital solutions development.',
    },
    highlights: {
      tr: ['Proje yönetimi', 'Operasyon koordinasyonu', 'Dijital çözümler'],
      en: ['Project management', 'Operations coordination', 'Digital solutions'],
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
        className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full border-4 border-background -translate-x-1/2 z-10"
        style={{ background: 'linear-gradient(135deg, hsl(28 85% 55%), hsl(195 45% 50%))' }}
      />

      {/* Card */}
      <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
        <motion.div
          className="glass-warm rounded-2xl p-6 space-y-4 card-glow-hover cursor-pointer transition-all duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl font-bold text-primary">
                  {language === 'tr' && experience.companyTr ? experience.companyTr : experience.company}
                </h3>
              </div>
              <p className="text-lg font-medium text-foreground">{experience.position[language as 'tr' | 'en'] || experience.position.en}</p>
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
            <div className="pt-4 border-t border-border/50 space-y-4">
              <p className="text-muted-foreground leading-relaxed">{experience.description[language]}</p>
              {experience.highlights && (
                <div className="flex flex-wrap gap-2">
                  {experience.highlights[language].map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/25"
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
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(195 45% 50%), transparent)' }} />
      
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-4 mx-auto">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/60" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient whitespace-nowrap">
              {t('experience.title')}
            </h2>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          <div className="section-divider" />
        </motion.div>

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
