import { useRef, useState, useCallback, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause, Loader2 } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';
import { supabase } from '@/integrations/supabase/client';
import albumIkiyeSaymak from '@/assets/album-ikiye-saymak.jpg';

interface LyricsSectionProps {
  lang: 'tr' | 'en';
}

const LYRICS_TR = `Birer birer saymak gerekir varmak için ikiye
O seviye sadece dönmek için deliye
Bir defa çıkılınca dönülmüyor geriye
Ve bir düşüş başlıyor sonsuzluğun dibine

Sanki aklın ipindeki bir jonklör kadar hassası
Sanki zamanın hükmünde bir folklorik dansı
Sanki özlemek gibi adını koyamadığın bir hissi
Hatırlamak gibi, istemek gibi, almak gibi o yeni şansı

Tamam işte bu sefer oldu tamam tam ortadan yarım
Devam etmek istiyordun dün, dün dünse yarın yarın
Dikkat et ama sakın!
İpe kalın gelebilir ayakların

Düşerken dibe bile tuttu elimi
Adını koyamadığım şeyi fiilen hissettim
Belki yetmez, belki geç, belki yanlış yoldu derdim
Değil !
Ben de burdayım ve iyi bir şey olacak der gibi

Düşerken dibe bile tuttu elimi
Adını koyamadığım şeyi fiilen hissettim
Belki yetmez, belki geç, belki yanlış yoldu derdim
Değil !
Ben de burdayım ve iyi bir şey olacak der gibi`;

const STANZAS_TR = LYRICS_TR.split('\n\n').map(s => s.split('\n'));

const LyricsSection = ({ lang }: LyricsSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { isPlaying, progress, currentTime, duration, togglePlay, seek } = useAudio();
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [translation, setTranslation] = useState<string[][] | null>(null);
  const [translating, setTranslating] = useState(false);
  const [showEN, setShowEN] = useState(false);

  const handleTranslate = useCallback(async () => {
    if (translation) {
      setShowEN(prev => !prev);
      return;
    }
    setTranslating(true);
    try {
      const { data, error } = await supabase.functions.invoke('translate-poem', {
        body: { title: "2'ye Saymak", body: LYRICS_TR },
      });
      if (error) throw error;
      if (data?.translation?.body) {
        const stanzas = (data.translation.body as string).split('\n\n').map((s: string) => s.split('\n'));
        setTranslation(stanzas);
        setShowEN(true);
      }
    } catch (err) {
      console.error('Lyrics translation error:', err);
    } finally {
      setTranslating(false);
    }
  }, [translation]);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressBarRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seek(ratio);
  }, [seek]);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const stanzas = showEN && translation ? translation : STANZAS_TR;

  // Glow colors for stanzas
  const stanzaColors = useMemo(() => [
    'hsl(213 100% 65% / 0.06)',
    'hsl(263 70% 58% / 0.06)',
    'hsl(45 100% 50% / 0.05)',
    'hsl(160 70% 50% / 0.05)',
    'hsl(340 70% 55% / 0.06)',
    'hsl(213 100% 65% / 0.06)',
  ], []);

  return (
    <section className="relative py-20 sm:py-28">
      {/* Top/bottom fades */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030508] via-[#030508]/80 to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030508] via-[#030508]/80 to-transparent z-[1]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary mb-3"
            style={{ textShadow: '0 0 12px rgba(74,158,255,0.4)' }}>
            {lang === 'tr' ? 'ŞARKI SÖZLERİ' : 'LYRICS'}
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold inline-block animate-gradient-sweep-blue bg-clip-text text-transparent bg-[length:300%_100%]"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(200,220,255,0.5), rgba(255,255,255,0.95), rgba(180,210,255,0.4), rgba(255,255,255,0.3))',
              filter: 'drop-shadow(0 0 18px rgba(200,220,255,0.35)) drop-shadow(0 0 40px rgba(180,200,255,0.15))',
            }}
          >
            {showEN ? 'To Count To Two' : "2'ye Saymak"}
          </h2>
        </motion.div>

        {/* Translate button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-end mb-6"
        >
          <button
            onClick={handleTranslate}
            disabled={translating}
            className="px-3 py-1 rounded-full text-xs font-mono tracking-wider border border-secondary/30 text-secondary/80 hover:text-secondary hover:border-secondary/60 transition-all duration-300 disabled:opacity-50 flex items-center gap-1.5"
            style={{ textShadow: '0 0 8px rgba(168,85,247,0.3)' }}
          >
            {translating
              ? <Loader2 className="w-3 h-3 animate-spin" />
              : showEN ? 'TR' : 'EN'}
          </button>
        </motion.div>

        {/* Lyrics stanzas */}
        <div className="space-y-8">
          {stanzas.map((stanza, si) => (
            <motion.div
              key={si}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + si * 0.1 }}
              className="relative glass rounded-2xl px-6 py-5 sm:px-8 sm:py-6 border border-border/20"
              style={{
                boxShadow: `0 0 40px ${stanzaColors[si % stanzaColors.length]}, inset 0 0 30px ${stanzaColors[si % stanzaColors.length]}`,
              }}
            >
              {/* Subtle planet glow behind each stanza */}
              <div
                className="absolute -z-10 rounded-full blur-3xl opacity-30"
                style={{
                  width: '120px',
                  height: '120px',
                  background: `radial-gradient(circle, ${stanzaColors[si % stanzaColors.length].replace('0.06', '0.4').replace('0.05', '0.4')}, transparent 70%)`,
                  top: si % 2 === 0 ? '-20px' : 'auto',
                  bottom: si % 2 !== 0 ? '-20px' : 'auto',
                  right: si % 2 === 0 ? '-30px' : 'auto',
                  left: si % 2 !== 0 ? '-30px' : 'auto',
                }}
              />
              {stanza.map((line, li) => (
                <p
                  key={li}
                  className="font-display text-sm sm:text-base text-foreground/90 leading-relaxed italic"
                  style={{ textShadow: '0 0 10px rgba(200,220,255,0.15)' }}
                >
                  {line || <br />}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom synced player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="glass rounded-2xl px-5 py-4 border border-border/20">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0" style={{ perspective: '600px' }}>
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-white/10 shadow-lg"
                  style={isPlaying ? { animation: 'flipY 4s linear infinite' } : {}}
                >
                  <img src={albumIkiyeSaymak} alt="2'ye Saymak" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground truncate"
                      style={{ textShadow: '0 0 10px rgba(200,220,255,0.2)' }}>2'ye Saymak</h3>
                    <p className="text-[10px] text-muted-foreground">Rahmi Oğuzhan</p>
                  </div>
                  <button
                    onClick={togglePlay}
                    className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-300 shrink-0"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="w-3 h-3 text-primary" fill="currentColor" />
                    ) : (
                      <Play className="w-3 h-3 text-primary ml-0.5" fill="currentColor" />
                    )}
                  </button>
                </div>
                <div
                  ref={progressBarRef}
                  onClick={handleSeek}
                  className="h-1 rounded-full bg-white/10 cursor-pointer group/bar relative"
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-[width] duration-100 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(74,158,255,0.5)] opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[9px] text-muted-foreground font-mono">{fmt(currentTime)}</span>
                  <span className="text-[9px] text-muted-foreground font-mono">{fmt(duration)}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LyricsSection;
