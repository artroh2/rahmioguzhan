import { motion } from 'framer-motion';
import { Music, Cloud, Headphones, Camera, Feather, Twitter, Youtube, Video, Facebook, Mail } from 'lucide-react';
import LinkCard from './LinkCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const groups = [
  {
    title: 'The Sonic Arsenal',
    subtitle: 'Music & Audio',
    cards: [
      {
        icon: Music,
        title: 'Rahmi Oguzhan',
        description: 'Tüm şarkılarımı bu platformdan dinleyebilirsiniz.',
        link: 'https://open.spotify.com/artist/5fMkXpuritdfqjDKrJzJhT',
        glowColor: '#22c55e',
      },
      {
        icon: Headphones,
        title: 'Oguzhan the 2',
        description: 'Electronic Works — Deneysel ve elektronik prodüksiyonlar.',
        link: 'https://open.spotify.com',
        glowColor: '#059669',
      },
      {
        icon: Cloud,
        title: 'SoundCloud',
        description: 'Alternative & Unreleased — Yayınlanmamış parçalar.',
        link: 'https://soundcloud.com',
        glowColor: '#f97316',
      },
    ],
  },
  {
    title: 'The Vision',
    subtitle: 'Social & Visuals',
    cards: [
      {
        icon: Camera,
        title: 'Instagram',
        description: 'Personal & Vision — Hayatın kareleri.',
        link: 'https://instagram.com/oguzhanthesecond',
        glowColor: '#e040a0',
      },
      {
        icon: Feather,
        title: 'Şiir 2.0',
        description: 'The Poetry Blog — Dijital şiir akımı.',
        link: 'https://instagram.com/siir2.0',
        glowColor: '#8b5cf6',
      },
      {
        icon: Twitter,
        title: 'X / Twitter',
        description: "The Architect's Thoughts — 280 karakterde yıkım.",
        link: 'https://x.com',
        glowColor: '#e2e8f0',
      },
      {
        icon: Youtube,
        title: 'YouTube',
        description: 'Visual Epics & Cinematic Works.',
        link: 'https://youtube.com',
        glowColor: '#dc2626',
      },
      {
        icon: Video,
        title: 'TikTok',
        description: 'Viral Hooks & Melancholy — Kısa form yaratıcılık.',
        link: 'https://tiktok.com',
        glowColor: '#06b6d4',
      },
    ],
  },
  {
    title: 'The Network',
    subtitle: 'Professional & Direct',
    cards: [
      {
        icon: Linkedin,
        title: 'LinkedIn',
        description: 'Professional Journey — Kariyer ve bağlantılar.',
        link: 'https://linkedin.com',
        glowColor: '#3b82f6',
      },
      {
        icon: MessageCircle,
        title: 'WhatsApp',
        description: 'Direct Line (Priority) — Öncelikli iletişim.',
        link: 'https://wa.me/',
        glowColor: '#22c55e',
      },
      {
        icon: Mail,
        title: 'Email',
        description: 'Communicate — İş birlikleri ve teklifler.',
        link: 'mailto:hello@example.com',
        glowColor: '#94a3b8',
      },
    ],
  },
];

const LinkMatrix = () => {
  return (
    <div className="w-full max-w-7xl space-y-10 mt-10">
      {groups.map((group) => (
        <motion.div
          key={group.title}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {/* Group header */}
          <div className="mb-4 px-1">
            <h2 className="text-lg font-bold text-foreground tracking-tight">{group.title}</h2>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{group.subtitle}</p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {group.cards.map((card) => (
              <motion.div key={card.title} variants={item}>
                <LinkCard {...card} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LinkMatrix;
