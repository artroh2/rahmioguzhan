import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Headphones, BookOpen, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  {
    href: 'https://open.spotify.com/intl-tr/album/0qsai0PajSX9TgzyyzlzR2?si=svW0Xz5KT7mdE5UCl1sB0A',
    label: 'Spotify - Rahmi Oguzhan',
    descKey: 'social.spotify.desc',
    color: '#1DB954',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
    ),
  },
  {
    href: 'https://open.spotify.com/intl-tr/artist/0whSI742dh4gkq4ktJsGCW?si=kqnHYZQHTACmv9YggEdp2g',
    label: 'Spotify Oguzhan the 2',
    descKey: 'social.spotifyArtist.desc',
    color: '#1DB954',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
    ),
  },
  {
    href: 'https://www.youtube.com/@Siir2.0',
    label: 'YouTube',
    descKey: 'social.youtube.desc',
    color: '#FF0000',
    icon: <Youtube className="w-6 h-6" />,
  },
  {
    href: 'https://www.instagram.com/rahmi.oguzhan2',
    label: 'Instagram',
    descKey: 'social.instagram.desc',
    color: '#E4405F',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    ),
  },
  {
    href: 'https://www.instagram.com/siir2.0',
    label: 'Şiir 2.0',
    descKey: 'social.siir.desc',
    color: '#E4405F',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    ),
  },
  {
    href: 'https://x.com/roguzhanh',
    label: 'X',
    descKey: 'social.x.desc',
    color: null,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    ),
  },
  {
    href: 'https://soundcloud.com/rahmioguzhan',
    label: 'SoundCloud',
    descKey: 'social.soundcloud.desc',
    color: '#FF5500',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.057-.049-.1-.084-.1zm-.899 1.05c-.05 0-.09.04-.099.1l-.159 1.107.159 1.06c.009.053.049.093.099.093.05 0 .09-.04.099-.093l.185-1.06-.185-1.107c-.009-.06-.049-.1-.099-.1zm1.8-.96c-.06 0-.102.044-.107.1l-.218 2.064.218 2.044c.005.06.047.1.107.1.058 0 .102-.04.107-.1l.247-2.044-.247-2.064c-.005-.056-.049-.1-.107-.1zm.9-.238c-.066 0-.114.05-.12.107l-.2 2.196.2 2.148c.006.06.054.107.12.107.064 0 .112-.047.118-.107l.227-2.148-.227-2.196c-.006-.057-.054-.107-.118-.107zm.9-.093c-.073 0-.126.053-.131.113l-.182 2.333.182 2.263c.005.067.058.114.131.114.071 0 .124-.047.131-.114l.209-2.263-.209-2.333c-.007-.06-.06-.113-.131-.113zm.938-.238c-.08 0-.138.06-.144.12l-.163 2.465.163 2.345c.006.073.064.12.144.12.078 0 .137-.047.143-.12l.186-2.345-.186-2.465c-.006-.06-.065-.12-.143-.12zm.953-.093c-.088 0-.15.064-.155.127l-.148 2.558.148 2.413c.005.08.067.127.155.127.086 0 .149-.047.155-.127l.169-2.413-.169-2.558c-.006-.063-.069-.127-.155-.127zm.958-.08c-.095 0-.163.07-.168.134l-.13 2.544.13 2.468c.005.084.073.134.168.134.093 0 .162-.05.168-.134l.148-2.468-.148-2.544c-.006-.064-.075-.134-.168-.134zm1.913-1.447c-.106 0-.18.08-.186.147l-.109 3.89.109 2.445c.006.093.08.147.186.147.104 0 .178-.054.186-.147l.124-2.445-.124-3.89c-.008-.067-.082-.147-.186-.147zm-.96.46c-.1 0-.174.073-.18.14l-.117 3.384.117 2.464c.006.087.08.14.18.14.098 0 .17-.053.178-.14l.133-2.464-.133-3.384c-.008-.067-.08-.14-.178-.14zm1.921-1.08c-.112 0-.192.086-.198.154l-.093 4.474.093 2.432c.006.1.086.154.198.154.11 0 .19-.054.198-.154l.106-2.432-.106-4.474c-.008-.068-.088-.154-.198-.154zm.963-.2c-.12 0-.204.093-.21.16l-.08 4.627.08 2.418c.006.107.09.16.21.16.117 0 .203-.053.209-.16l.09-2.418-.09-4.627c-.006-.067-.092-.16-.209-.16zm.97-.12c-.126 0-.216.1-.222.167l-.065 4.7.065 2.4c.006.113.096.167.222.167.124 0 .214-.054.222-.167l.074-2.4-.074-4.7c-.008-.067-.098-.167-.222-.167zm4.71.77c-.208 0-.39.06-.554.16-.134-.7-.474-1.327-.975-1.82-.503-.493-1.13-.793-1.826-.873-.154-.017-.254-.017-.372-.017-.14 0-.234.107-.234.247v7.64c0 .14.087.24.216.253h3.745c1.058 0 1.916-.858 1.916-1.916 0-1.06-.858-1.916-1.916-1.916z"/></svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/rahmioguzhan/',
    label: 'LinkedIn',
    descKey: 'social.linkedin.desc',
    color: '#0A66C2',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
  },
  {
    href: 'https://wa.me/905457929876?text=Merhaba%20O%C4%9Fuzhan%20%2C%20seninle%20ileti%C5%9Fim%20kurmak%20istiyorum%20!',
    label: 'WhatsApp',
    descKey: 'social.whatsapp.desc',
    color: '#25D366',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    ),
  },
  {
    href: 'https://www.tiktok.com/@siir2.0',
    label: 'TikTok',
    descKey: 'social.tiktok.desc',
    color: '#000000',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52V6.69h-1z"/></svg>
    ),
  },
];

const AboutSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 md:py-32 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" 
        style={{ background: 'radial-gradient(circle, hsl(28 85% 55%), transparent)' }} />
      
      <div className="container max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-4">
            <div className="inline-flex items-center gap-4 mx-auto">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/60" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
                {t('about.title')}
              </h2>
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <div className="section-divider" />
          </motion.div>

          {/* Social Link Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-warm rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 card-glow-hover cursor-pointer group"
              >
                <div
                  className="w-12 h-12 min-w-[3rem] rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: link.color
                      ? `${link.color}20`
                      : 'hsl(var(--foreground) / 0.1)',
                    color: link.color || 'hsl(var(--foreground))',
                  }}
                >
                  {link.icon}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="font-display font-bold text-foreground text-sm">
                    {link.label}
                  </span>
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    {t(link.descKey)}
                  </span>
                </div>
              </a>
            ))}

            {/* Email Card */}
            <a
              href="mailto:rahmioguzhanhacieyupoglu@gmail.com"
              className="glass-warm rounded-2xl p-5 flex items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1 card-glow-hover cursor-pointer group"
            >
              <div
                className="w-12 h-12 min-w-[3rem] rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{ background: 'hsl(var(--primary) / 0.15)', color: 'hsl(var(--primary))' }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <span className="font-display font-bold text-foreground text-sm">
                {t('social.email.text')}
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
