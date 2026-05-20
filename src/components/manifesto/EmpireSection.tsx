import { motion } from 'framer-motion';
import { ExternalLink, Brain, Swords } from 'lucide-react';

const ventures = [
  {
    title: 'arayor.com',
    description: "Redefining the automotive market through AI Oracle architecture. We didn't build a marketplace; we built a brain.",
    icon: Brain,
    link: 'https://arayor.com',
  },
  {
    title: 'AIQrace',
    description: 'The arena where artificial intelligences bleed. A competitive platform designed for the future of AGI.',
    icon: Swords,
    link: '#',
  },
];

const EmpireSection = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-background overflow-hidden">
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 800px 500px at 30% 50%, hsl(0 72% 51% / 0.03), transparent)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4">Ventures & AI</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-20">
            The Architecture
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ventures.map((v, i) => (
            <motion.a
              key={v.title}
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-80px' }}
              className="group relative glass-dark glass-dark-hover rounded-2xl p-8 md:p-12 transition-all duration-700 cursor-pointer block"
            >
              <div className="flex items-start justify-between mb-6">
                <v.icon className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:glow-red transition-all duration-500">
                {v.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {v.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpireSection;
