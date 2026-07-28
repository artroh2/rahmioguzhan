import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  { name: 'Arayor', desc: 'Yapay zekâ destekli araç arama ve karşılaştırma platformu.', url: 'https://arayor-m0pdq3agz-world-meets-org.vercel.app' },
  { name: 'Mulkex', desc: 'Gayrimenkulü veriyle okuyan yapay zekâ analiz platformu.', url: 'https://mulkex-ai-insights-main-gk3qmmgit-world-meets-org.vercel.app' },
  { name: 'AIQRace', desc: 'Yapay zekâ modellerini aynı pistte yarıştıran karşılaştırma alanı.', url: 'https://ai-model-race-main-c0xirumzf-world-meets-org.vercel.app' },
  { name: 'WorldMeets', desc: 'Dünyanın farklı köşelerini aynı masada buluşturan etkinlik platformu.', url: 'https://world-meet-up-53-main-8ywy3hw8w-world-meets-org.vercel.app' },
  { name: 'Mukemmell', desc: 'Mükemmeliyetçiler için sade bir danışmanlık arayüzü.', url: 'https://mukemmell-3ix2lw9nt-world-meets-org.vercel.app' },
  { name: 'Müzik Üretimi', desc: 'Yapay zekâ ile üretilen şarkılar ve söz yazımı denemeleri.', url: 'https://open.spotify.com/search/Rahmi%20O%C4%9Fuzhan' },
];

const ProjectsSection = () => (
  <section id="projeler" className="relative py-28 sm:py-40 px-6">
    <div className="max-w-4xl mx-auto">
      <p className="text-[10px] tracking-[0.5em] uppercase text-accent/70 mb-3">Projeler</p>
      <h2 className="font-display text-3xl sm:text-5xl mb-12">Gündüz tarafı</h2>

      <div className="grid sm:grid-cols-2 gap-px bg-border/50 border border-border/50">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: i * 0.08 }}
            className="group bg-background hover:bg-card/70 transition-colors duration-500 p-7 flex flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors duration-500">
                {p.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-500 shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
