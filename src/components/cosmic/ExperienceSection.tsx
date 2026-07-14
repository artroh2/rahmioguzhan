import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ExperienceSectionProps {
  lang: 'tr' | 'en';
}

const ROLES = [
  {
    title: 'Founder & Full-Stack Developer',
    company: 'AI Ventures Portfolio (AIQrace, WorldMeets, Arayor, Mulkex)',
    dates: '2025 – Present',
    location: 'İstanbul (Remote)',
    bullets: [
      'Built and shipped 4 production platforms independently — architecture, DB, UI, DevOps.',
      'Integrated Gemini 2.0 Flash and OpenAI APIs into real-time, user-facing products.',
      'Grew platforms from zero: SEO, analytics, custom DNS, CI/CD.',
    ],
  },
  {
    title: 'After-Sales Services Supervisor',
    company: 'UNOKS Industrial Stainless Steel',
    dates: '09/2022 – 11/2022',
    location: 'İstanbul',
    bullets: [
      'On-site supervision of stainless steel equipment installs across naval vessels, including the TCG Anadolu (L-400) programme.',
      'Evaluated installation quality against technical drawings; coordinated corrective actions.',
    ],
  },
  {
    title: 'Sales Executive',
    company: 'Lazer Teknik (Eagle Poland)',
    dates: '04/2022 – 06/2022',
    location: 'İstanbul',
    bullets: [
      'B2B field sales for premium fiber laser sheet metal cutting machines.',
      'Prepared technical-commercial proposals for equipment valued at €100,000+.',
    ],
  },
  {
    title: 'Export Sales Engineer',
    company: 'Yılmaz Redüktör',
    dates: '01/2019 – 03/2021',
    location: 'İstanbul',
    bullets: [
      'Managed full B2B export sales cycle for Middle East and Russia markets across 5 countries.',
      'Technical sales presentations to industrial clients in English.',
    ],
  },
];

const ExperienceSection = ({ lang }: ExperienceSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="deneyim" className="relative py-24 sm:py-32">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 70% 40%, hsl(213 100% 65% / 0.04) 0%, transparent 60%)'
      }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <h2
            className="font-display text-4xl sm:text-5xl font-bold inline-block animate-gradient-sweep-purple bg-clip-text text-transparent bg-[length:300%_100%]"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(220,210,255,0.5), rgba(255,255,255,0.95), rgba(200,190,255,0.4), rgba(255,255,255,0.3))',
              filter: 'drop-shadow(0 0 12px rgba(210,200,255,0.25)) drop-shadow(0 0 30px rgba(200,190,255,0.1))',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
            }}
          >
            {lang === 'tr' ? 'DENEYİM' : 'EXPERIENCE'}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {ROLES.map((r, i) => (
            <motion.article
              key={r.title + i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-7 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-500 hover:shadow-[0_0_30px_rgba(74,158,255,0.08)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                    {r.title}
                  </h3>
                  <p className="text-sm text-primary/80 mt-1">{r.company}</p>
                </div>
                <div className="shrink-0 text-right text-xs font-mono tracking-wider text-muted-foreground">
                  <div>{r.dates}</div>
                  <div className="mt-0.5">{r.location}</div>
                </div>
              </div>
              <ul className="mt-3 space-y-2">
                {r.bullets.map((b, bi) => (
                  <li key={bi} className="text-sm text-muted-foreground leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-primary/60 shadow-[0_0_8px_rgba(74,158,255,0.6)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
