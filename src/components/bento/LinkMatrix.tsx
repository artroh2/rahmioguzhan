import { motion } from 'framer-motion';
import { Music, Cloud, Headphones, Feather, Youtube, Facebook, Linkedin, Mail, Send } from 'lucide-react';
import { InstagramIcon, XIcon, TikTokIcon, SpotifyIcon } from '../icons/BrandIcons';
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
    title: 'Müzik',
    subtitle: '',
    cards: [
      {
        icon: SpotifyIcon,
        title: 'Rahmi Oğuzhan',
        description: 'Lansmanı yapılmış tüm şarkılar.',
        link: 'https://open.spotify.com/intl-tr/album/0qsai0PajSX9TgzyyzlzR2?si=svW0Xz5KT7mdE5UCl1sB0A&nd=1&dlsi=ba59d998bd96485e',
        glowColor: '#22c55e',
      },
      {
        icon: SpotifyIcon,
        title: 'Oguzhan the 2',
        description: 'Deneysel ve elektronik prodüksiyonlar.',
        link: 'https://open.spotify.com/intl-tr/artist/0whSI742dh4gkq4ktJsGCW?si=kqnHYZQHTACmv9YggEdp2g&nd=1&dlsi=215be945e3734a23',
        glowColor: '#059669',
      },
      {
        icon: Cloud,
        title: 'SoundCloud',
        description: 'Yayınlanmamış ve alternatif parçalar.',
        link: 'https://soundcloud.com/rahmioguzhan',
        glowColor: '#f97316',
      },
    ],
  },
  {
    title: 'Sosyal Medya Hesapları ve Vizyon',
    subtitle: '',
    cards: [
      {
        icon: InstagramIcon,
        title: 'Instagram',
        description: 'Kişisel hesap ve görsel paylaşımlar.',
        link: 'https://www.instagram.com/rahmi.oguzhan2',
        glowColor: '#e040a0',
      },
      {
        icon: Feather,
        title: 'Şiir 2.0',
        description: 'Dijital şiir akımı.',
        link: 'https://www.instagram.com/siir2.0',
        glowColor: '#8b5cf6',
      },
      {
        icon: XIcon,
        title: 'X / Twitter',
        description: 'Düşünceler ve paylaşımlar.',
        link: 'https://x.com/roguzhanh',
        glowColor: '#e2e8f0',
      },
      {
        icon: Youtube,
        title: 'YouTube',
        description: 'Video içerikler ve sinematik çalışmalar.',
        link: 'https://www.youtube.com/@Siir2.0',
        glowColor: '#dc2626',
      },
      {
        icon: TikTokIcon,
        title: 'TikTok',
        description: 'Kısa form içerikler.',
        link: 'https://www.tiktok.com/@siir2.0',
        glowColor: '#06b6d4',
      },
      {
        icon: Facebook,
        title: 'Facebook',
        description: 'Sosyal ağ ve bağlantılar.',
        link: 'https://www.facebook.com/roguzhan',
        glowColor: '#3b82f6',
      },
    ],
  },
  {
    title: 'Contact',
    subtitle: '',
    cards: [
      {
        icon: Linkedin,
        title: 'LinkedIn',
        description: 'Profesyonel ağ ve kariyer.',
        link: 'https://www.linkedin.com/in/rahmioguzhan/',
        glowColor: '#3b82f6',
      },
      {
        icon: Send,
        title: 'Telegram',
        description: 'Anlık iletişim.',
        link: 'https://t.me/roguzhanh',
        glowColor: '#29b6f6',
      },
      {
        icon: Mail,
        title: 'Email',
        description: 'İş birlikleri ve teklifler.',
        link: 'mailto:roh@rahmioguzhan.com',
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
            {group.subtitle && <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{group.subtitle}</p>}
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
