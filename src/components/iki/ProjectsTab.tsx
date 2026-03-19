import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import aiqraceLogo from '@/assets/aiqrace-logo.png';
import arayorLogo from '@/assets/arayor-logo.png';
import worldmeetsLogo from '@/assets/worldmeets-logo.png';
import mulkexLogo from '@/assets/mulkex-logo.png';

const projects = [
  {
    title: 'AIQrace',
    description: 'AI arena',
    link: 'https://aiqrace.com',
    logo: aiqraceLogo,
  },
  {
    title: 'Arayor',
    description: 'AI Automotive Review',
    link: 'https://arayor.com',
    logo: arayorLogo,
  },
  {
    title: 'Worldmeets',
    description: 'Global meeting room',
    link: 'https://worldmeets.org',
    logo: worldmeetsLogo,
  },
  {
    title: 'MülkEx',
    description: 'AI Real Estate Technology',
    link: 'https://mulkex.com',
    logo: mulkexLogo,
  },
];

const ProjectsTab = () => {
  return (
    <div className="relative min-h-screen pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background/98" />
      </div>

      <div className="relative z-10 px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-8xl font-bold text-primary mb-1">Projeler</h1>
          <p className="text-[20px] tracking-[0.4em] uppercase text-muted-foreground mb-8">Girişimler</p>
        </motion.div>

        <div className="space-y-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex items-center gap-4 bg-card/80 backdrop-blur-xl rounded-xl p-5 border-l-2 border-transparent hover:border-primary hover:bg-card/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 group"
            >
              <img src={p.logo} alt={p.title} className="w-10 h-10 object-contain rounded-lg" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground">{p.description}</p>
              </div>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsTab;
