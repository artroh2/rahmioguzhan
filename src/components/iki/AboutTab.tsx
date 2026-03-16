import { ExternalLink, Music, Camera, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const SPOTIFY_ARTIST = 'https://open.spotify.com/artist/2uoOCTF68KrEajGqSFNsrj';
const INSTAGRAM = 'https://instagram.com/siir2.0';

const projects = [
  {
    title: 'AIQrace',
    description: 'Yapay zeka arenası',
    link: 'https://aiqrace.com',
  },
  {
    title: 'Arayor',
    description: 'AI otomotiv inceleme',
    link: 'https://arayor.com',
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

const socials = [
  { icon: Music, label: 'Spotify', href: SPOTIFY_ARTIST },
  { icon: Camera, label: 'Instagram', href: INSTAGRAM },
  { icon: Globe, label: 'Web', href: 'https://rahmioguzhan.lovable.app' },
];

const AboutTab = () => {
  return (
    <div className="min-h-screen pb-24 px-6 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-5xl font-bold text-foreground mb-2">2</h1>
        <p className="text-sm text-secondary-foreground leading-relaxed mb-8 max-w-sm">
          Şair. Müzisyen. Pilot. İnşa eden.
          <br />
          Sessizliğin mimarı, kelimelerin mühendisi.
        </p>
      </motion.div>

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Projeler</h2>
        <div className="space-y-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-card rounded-xl p-4 hover:border-l-2 hover:border-primary transition-all duration-200 group"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground">{p.description}</p>
              </div>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10"
      >
        <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Bağlantılar</h2>
        <div className="flex gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center gap-2 bg-card px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-primary hover:border-primary/30 border border-transparent transition-all duration-200"
              >
                <Icon size={16} />
                {s.label}
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-center text-xs text-muted-foreground"
      >
        İKİ © 2025 — Tüm hakları saklıdır
      </motion.p>
    </div>
  );
};

export default AboutTab;
