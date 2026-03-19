import { useState, useCallback, useEffect, useRef } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const INSTAGRAM_SIIR = 'https://www.instagram.com/siir2.0';
const INSTAGRAM_PERSONAL = 'https://www.instagram.com/rahmi.oguzhan2';

// Gradient backgrounds for poem posts (Instagram-like visual cards)
const GRADIENTS = [
  'from-[#1a1a2e] to-[#16213e]',
  'from-[#0f0c29] via-[#302b63] to-[#24243e]',
  'from-[#2c3e50] to-[#1a1a2e]',
  'from-[#141e30] to-[#243b55]',
  'from-[#1f1c2c] to-[#928dab]/40',
  'from-[#0f2027] via-[#203a43] to-[#2c5364]',
  'from-[#232526] to-[#414345]',
  'from-[#1e130c] to-[#3e2723]/80',
  'from-[#1a2a3a] to-[#2d1b3d]',
];

// All poems data sorted chronologically (newest first)
const ALL_POEMS = [
  { id: '1', title: 'Sessizliğin Mimarı', excerpt: 'Kelimeler sustu,\nsessizlik konuştu…\nDuvarlar yükseldi,\nanlamlar sustu.', date: '2025-03-15' },
  { id: '2', title: 'Gece ve Ben', excerpt: 'Karanlık çökerken\nyıldızlar uyandı…\nGökyüzü bir sahne,\nben tek seyirci.', date: '2025-03-10' },
  { id: '3', title: 'Kayıp Zaman', excerpt: 'Saatler durdu,\nanılar akmaya\ndevam etti…\nZaman bir nehir,\nben kıyıda.', date: '2025-03-05' },
  { id: '4', title: 'Rüzgârın Sesi', excerpt: 'Yapraklar fısıldadı,\nrüzgâr dinledi…\nDoğa konuşur,\nduyan olursa.', date: '2025-02-28' },
  { id: '5', title: 'Son Mektup', excerpt: 'Mürekkep kurudu\nama söz bitmedi…\nKâğıt sabırlı,\nkalem yorgun.', date: '2025-02-20' },
  { id: '6', title: 'Yağmurun Ardından', excerpt: 'Gökyüzü ağladı,\ntoprak güldü…\nHer damla bir söz,\nher söz bir umut.', date: '2025-02-15' },
  { id: '7', title: 'Ayna', excerpt: 'Kendime baktım,\nbir yabancı gördüm…\nAyna kırıldı,\ngerçek parçalandı.', date: '2025-02-10' },
  { id: '8', title: 'Düşlerin Ötesi', excerpt: 'Gözlerimi kapadım,\ndünya değişti…\nHayaller gerçek,\ngerçekler hayal.', date: '2025-02-05' },
  { id: '9', title: 'Kül ve Ateş', excerpt: 'Yandım kül oldum,\nkülden doğdum…\nHer son bir başlangıç,\nher ateş bir umut.', date: '2025-01-30' },
  { id: '10', title: 'Denizin Çağrısı', excerpt: 'Dalgalar fısıldadı,\nkumlar dinledi…\nDeniz çağırır,\nruh karşılık verir.', date: '2025-01-25' },
  { id: '11', title: 'Gölgeler', excerpt: 'Işık düştü,\ngölgeler dans etti…\nKaranlıkta bile\nbir ritim var.', date: '2025-01-20' },
  { id: '12', title: 'Unutulan Şarkı', excerpt: 'Melodiler kayboldu,\nritim kaldı…\nKalp atar,\nmüzik susmaz.', date: '2025-01-15' },
  { id: '13', title: 'Sabah Çiğleri', excerpt: 'Yapraklar ıslandı,\ngüneş doğdu…\nHer sabah yeni,\nher çiğ bir mucize.', date: '2025-01-10' },
  { id: '14', title: 'Yolcu', excerpt: 'Yollar uzadı,\nadımlar yoruldu…\nAma durmak yok,\nçünkü yol çağırır.', date: '2025-01-05' },
  { id: '15', title: 'Fırtına Sonrası', excerpt: 'Bulutlar dağıldı,\ngökkuşağı belirdi…\nHer fırtınanın\nbir sonu var.', date: '2024-12-30' },
  { id: '16', title: 'İz', excerpt: 'Kumda yürüdüm,\nizler kaldı…\nDalga sildi,\nama hatıra silinmez.', date: '2024-12-25' },
  { id: '17', title: 'Duman', excerpt: 'Sigara yandı,\nduman yükseldi…\nHavada kayboldu,\nama koku kaldı.', date: '2024-12-20' },
  { id: '18', title: 'Pencere', excerpt: 'Dışarı baktım,\ndünya dönüyordu…\nBen duruyordum,\nzaman geçiyordu.', date: '2024-12-15' },
];

const BATCH_SIZE = 9; // Load 9 at a time (3 rows)

const InstagramIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const PoemsTab = () => {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [selectedPoem, setSelectedPoem] = useState<typeof ALL_POEMS[0] | null>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const visiblePoems = ALL_POEMS.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_POEMS.length;

  // Infinite scroll observer
  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, ALL_POEMS.length));
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, visibleCount]);

  return (
    <div className="relative min-h-screen pb-24">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background/98" />
      </div>

      <div className="relative z-10 px-4 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-2 mb-6"
        >
          <h1 className="font-display text-6xl font-bold text-primary mb-1">Poetry</h1>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">@siir2.0</p>
        </motion.div>

        {/* 3x3 Feed Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-[2px] mb-6 rounded-lg overflow-hidden"
        >
          {visiblePoems.map((poem, i) => (
            <motion.button
              key={poem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i >= visibleCount - BATCH_SIZE ? (i % BATCH_SIZE) * 0.03 : 0 }}
              onClick={() => setSelectedPoem(poem)}
              className={`relative aspect-square bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} flex items-center justify-center p-3 group cursor-pointer overflow-hidden`}
            >
              {/* Decorative quote mark */}
              <span className="absolute top-2 left-3 text-3xl text-white/10 font-serif leading-none">"</span>
              <p className="text-[10px] sm:text-xs text-white/80 text-center leading-relaxed line-clamp-4 font-medium">
                {poem.excerpt.split('\n').slice(0, 2).join(' ')}
              </p>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-xs font-semibold tracking-wide">{poem.title}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Infinite scroll trigger */}
        {hasMore && (
          <div ref={loaderRef} className="flex justify-center py-4">
            <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        )}

        {/* Follow Button */}
        <motion.a
          href={INSTAGRAM_SIIR}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] hover:opacity-90 hover:shadow-[0_0_25px_#C1358440] hover:scale-[1.02] text-foreground font-semibold py-4 rounded-xl transition-all duration-300 text-sm mb-8 w-full active:scale-95"
        >
          <InstagramIcon size={18} />
          Follow on Instagram
        </motion.a>

        <div className="border-t border-border mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Personal Profile</h2>
          <a
            href={INSTAGRAM_PERSONAL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-card/80 backdrop-blur-xl rounded-xl p-4 border-l-2 border-transparent hover:border-primary hover:shadow-[0_0_15px_hsl(34_66%_47%/0.1)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4]/30 via-[#C13584]/30 to-[#E1306C]/30 flex items-center justify-center">
                <InstagramIcon size={20} className="text-[#E1306C]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  @rahmi.oguzhan2
                </h3>
                <p className="text-xs text-muted-foreground">Personal Instagram account</p>
              </div>
            </div>
            <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>

      {/* Fullscreen Photo Modal */}
      <AnimatePresence>
        {selectedPoem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPoem(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-sm aspect-[3/4] bg-gradient-to-br ${GRADIENTS[parseInt(selectedPoem.id) % GRADIENTS.length]} rounded-2xl flex flex-col items-center justify-center p-8 shadow-2xl`}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPoem(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X size={16} className="text-white" />
              </button>

              {/* Decorative quotes */}
              <span className="absolute top-6 left-6 text-6xl text-white/10 font-serif leading-none">"</span>
              <span className="absolute bottom-6 right-6 text-6xl text-white/10 font-serif leading-none rotate-180">"</span>

              {/* Title */}
              <h2 className="text-lg font-bold text-white/90 mb-6 tracking-wide">{selectedPoem.title}</h2>

              {/* Poem text */}
              <p className="text-base text-white/80 text-center leading-loose whitespace-pre-line font-light">
                {selectedPoem.excerpt}
              </p>

              {/* Date */}
              <p className="absolute bottom-6 left-8 text-xs text-white/30">{selectedPoem.date}</p>

              {/* Instagram link */}
              <a
                href={INSTAGRAM_SIIR}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[11px] text-white/40 hover:text-white/70 transition-colors"
              >
                <InstagramIcon size={12} />
                @siir2.0
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PoemsTab;
