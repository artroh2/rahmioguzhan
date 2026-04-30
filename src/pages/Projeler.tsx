import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Lock } from 'lucide-react';
import Navbar from '@/components/cosmic/Navbar';
import StarfieldCanvas from '@/components/cosmic/StarfieldCanvas';
import FloatingCelestials from '@/components/cosmic/FloatingCelestials';
import CosmicCursor from '@/components/cosmic/CosmicCursor';
import logoArayor from '@/assets/logos/arayor.png';
import logoMulkex from '@/assets/logos/mulkex.png';
import logoAiqrace from '@/assets/logos/aiqrace.png';
import logoWorldmeets from '@/assets/logos/worldmeets.png';
import logoMukemmell from '@/assets/logos/mukemmell.png';
import logoClassified from '@/assets/logos/classified.png';

const PROJECTS = [
  {
    name: 'Arayor',
    description: 'Yapay Zeka Destekli Araç Platformu',
    url: 'https://arayor-m0pdq3agz-world-meets-org.vercel.app',
    logo: logoArayor,
  },
  {
    name: 'Mulkex',
    description: 'AI Destekli Emlak Analiz Platformu',
    url: 'https://mulkex-ai-insights-main-gk3qmmgit-world-meets-org.vercel.app',
    logo: logoMulkex,
  },
  {
    name: 'AIQRace',
    description: 'Yapay Zeka Model Yarışı ve Karşılaştırma',
    url: 'https://ai-model-race-main-c0xirumzf-world-meets-org.vercel.app',
    logo: logoAiqrace,
  },
  {
    name: 'WorldMeets',
    description: 'Global Etkinlik ve Toplantı Platformu',
    url: 'https://world-meet-up-53-main-8ywy3hw8w-world-meets-org.vercel.app',
    logo: logoWorldmeets,
  },
  {
    name: 'Mukemmell',
    description: 'Mükemmeliyetçiler İçin Danışmanlık Platformu',
    url: 'https://mukemmell-3ix2lw9nt-world-meets-org.vercel.app',
    logo: logoMukemmell,
  },
  {
    name: '[REDACTED]',
    description: 'Savunma Sanayi için geliştirilmiş gizli proje. Detaylar paylaşılamaz.',
    url: '',
    logo: logoClassified,
    classified: true,
  },
];

const Projeler = () => {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  return (
    <div
      className="min-h-screen bg-[#030508] text-foreground relative"
      style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <StarfieldCanvas />
      <FloatingCelestials />
      <CosmicCursor />

      <div className="relative z-10">
        <Navbar lang={lang} onToggleLang={() => setLang((l) => (l === 'tr' ? 'en' : 'tr'))} />

        <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Üzerinde Çalıştığım S<span style={{ color: '#5C3A1E', filter: 'drop-shadow(0 0 10px rgba(92,58,30,0.4))' }}>a</span><span style={{ color: '#F59E0B', filter: 'drop-shadow(0 0 10px rgba(245,158,11,0.5))' }}>a</span>S Projeler
            </h1>
            <p className="mt-4 text-sm md:text-base text-muted-foreground tracking-wide">
              Yasal yükümlülükler tamamlandığında canlıya alınacak.
            </p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-7 flex flex-col justify-between min-h-[200px] hover:border-amber-400/30 hover:bg-white/[0.05] transition-all duration-500 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="shrink-0 w-12 h-12 rounded-xl border border-amber-400/20 bg-gradient-to-br from-amber-400/[0.08] to-amber-900/[0.05] flex items-center justify-center overflow-hidden group-hover:border-amber-400/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-500">
                        <img
                          src={p.logo}
                          alt={`${p.name} logo`}
                          width={48}
                          height={48}
                          className="w-9 h-9 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-amber-300/90 transition-colors duration-500 truncate">
                        {p.name}
                      </h2>
                    </div>
                    <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase border border-amber-400/30 text-amber-300/90 bg-amber-400/5">
                      Yakında
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm text-amber-300/80 hover:text-amber-200 transition-colors duration-300 self-start"
                >
                  Önizleme
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projeler;
