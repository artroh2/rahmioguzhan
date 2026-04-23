import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SpotifyIcon, AppleMusicIcon, YouTubeMusicIcon } from '@/components/icons/PlatformIcons';

interface StreamingLinksPopupProps {
  open: boolean;
  onClose: () => void;
}

const LINKS = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/intl-tr/artist/0M3Mv45IGqdsIcUcQc1ckP',
    color: '#1DB954',
    Icon: SpotifyIcon,
  },
  {
    name: 'Apple Music',
    href: 'https://music.apple.com/tr/artist/r-oguzhan/1818361399',
    color: '#FA243C',
    Icon: AppleMusicIcon,
  },
  {
    name: 'YouTube Music',
    href: 'https://music.youtube.com/channel/UCKv9wsCSc3DvFcTumGRDqGw',
    color: '#FF0033',
    Icon: YouTubeMusicIcon,
  },
];

const StreamingLinksPopup = ({ open, onClose }: StreamingLinksPopupProps) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[10001] flex items-center justify-center px-4"
          style={{ background: 'rgba(3,5,8,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            className="relative max-w-md w-full rounded-2xl border border-border/40 p-8 sm:p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(20,15,40,0.95), rgba(8,10,20,0.98))',
              boxShadow: '0 0 60px rgba(168,85,247,0.25), inset 0 0 30px rgba(74,158,255,0.08)',
            }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-primary mb-3"
              style={{ textShadow: '0 0 12px rgba(74,158,255,0.4)' }}>
              ŞARKIYI SEVDIN MI?
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              2'ye Saymak
            </h3>
            <p className="text-sm text-muted-foreground mb-7">
              Tüm platformlarda dinleyebilirsin
            </p>

            <div className="flex flex-col gap-3">
              {LINKS.map(({ name, href, color, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="group flex items-center justify-center gap-3 px-5 py-3 rounded-full border transition-all duration-300"
                  style={{
                    borderColor: `${color}55`,
                    background: `${color}10`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${color}25`;
                    e.currentTarget.style.boxShadow = `0 0 25px ${color}55`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = `${color}10`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                  <span className="font-medium text-sm" style={{ color }}>
                    {name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StreamingLinksPopup;
