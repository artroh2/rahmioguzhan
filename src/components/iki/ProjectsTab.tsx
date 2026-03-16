import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AIQrace',
    description: 'Yapay zeka arenası',
    link: 'https://aiqrace.com',
  },
  {
    title: 'aracyorumu.com',
    description: 'AI otomotiv inceleme',
    link: 'https://aracyorumu.com',
  },
  {
    title: 'Worldmeets',
    description: 'Küresel toplantı salonu',
    link: 'https://worldmeets.org',
  },
  {
    title: 'MülkEx',
    description: 'AI gayrimenkul teknolojisi',
    link: 'https://mulkex.com',
  },
];

const ProjectsTab = () => {
  return (
    <div className="min-h-screen pb-24 px-6 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-sans text-3xl font-bold text-foreground mb-1">Projeler</h1>
        <p className="text-sm text-muted-foreground mb-8">Girişimler ve ürünler</p>
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
            className="flex items-center justify-between bg-card rounded-xl p-5 border-l-2 border-transparent hover:border-primary hover:bg-card/80 hover:shadow-[0_0_20px_hsl(34_66%_47%/0.1)] transition-all duration-300 group"
          >
            <div>
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
  );
};

export default ProjectsTab;
