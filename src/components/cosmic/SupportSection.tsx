import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SupportSectionProps {
  lang: 'tr' | 'en';
}

const STATS = [
  { label: '4 Canlı Platform', labelEn: '4 Live Platforms' },
  { label: '1075+ Şiir', labelEn: '1075+ Poems' },
  { label: '5 İhracat Pazarı', labelEn: '5 Export Markets' },
  { label: '45+ Uçuş Saati', labelEn: '45+ Flight Hours' },
];

const ASSETS = [
  {
    title: 'Ürün & Kod',
    titleEn: 'Product & Code',
    body: 'Founder seviyesinde full-stack üretim: dört canlı platformu sıfırdan tek başıma tasarlayıp kurdum.',
  },
  {
    title: 'Uluslararası Ticaret',
    titleEn: 'International Trade',
    body: 'BAE, Suudi Arabistan, Irak, Kuveyt ve Rusya\'da tam ihracat döngüsü — kapanmış anlaşmalar, sadece teklif değil.',
  },
  {
    title: 'Saha & Mühendislik',
    titleEn: 'Field & Engineering',
    body: 'SolidWorks, 3D baskı, saha denetimi — TCG Anadolu deniz projesi dahil.',
  },
  {
    title: 'Sanat & İletişim',
    titleEn: 'Art & Communication',
    body: '1075+ yayımlanmış şiir, orijinal müzik prodüksiyonu. İnsanları harekete geçirmeyi biliyorum, sadece inşa etmeyi değil.',
  },
];

const HELP = [
  {
    title: 'Ortaklık / Yatırım',
    body: 'Dört canlı üründen birine doğrudan yatırım yapmak ister misin? Şartları konuşalım.',
  },
  {
    title: 'İş Birliği / Proje',
    body: 'Yazılım, tasarım ya da teknik danışmanlık mı lazım? Gerçek işe gerçek karşılık veririm.',
  },
  {
    title: 'Bir Tanışıklık',
    body: 'Doğru bir tanışıklık, paradan daha çok kapı açabilir. Tanıdığın biri varsa, söyle.',
  },
  {
    title: 'Paylaş',
    body: 'Bu sayfayı paylaşmak bile işe yarar. Görünürlük hiçbir şeye mal olmaz, gerçekten faydalıdır.',
  },
];

const TYPES = [
  'Ortaklık / Yatırım',
  'İş Birliği / Proje',
  'Tanışıklık',
  'Paylaşım / Destek',
  'Genel Öneri',
];

const PILLS = ['ORTAKLIK MÜMKÜN', 'İŞ TAKASI OLUR', 'TANIŞIKLIKLAR DEĞERLİ', 'KÜÇÜK KATKI DA KATKI'];

interface Suggestion {
  id: string;
  name: string | null;
  message: string;
  created_at: string;
}

const SupportSection = ({ lang }: SupportSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', type: TYPES[0], message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [items, setItems] = useState<Suggestion[]>([]);

  const load = async () => {
    const { data } = await supabase
      .from('support_suggestions')
      .select('id, name, message, created_at')
      .order('created_at', { ascending: false })
      .limit(20);
    if (data) setItems(data as Suggestion[]);
  };

  useEffect(() => {
    if (inView) load();
  }, [inView]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.message.trim()) {
      toast({
        title: lang === 'tr' ? 'Mesaj gerekli' : 'Message required',
        description: lang === 'tr' ? 'Lütfen bir öneri yaz.' : 'Please write a suggestion.',
        variant: 'destructive',
      });
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from('support_suggestions').insert({
        name: form.name.trim() || null,
        type: form.type,
        message: form.message.trim(),
      });
      if (error) throw error;
      toast({
        title: lang === 'tr' ? 'Öneri iletildi' : 'Suggestion sent',
        description: lang === 'tr' ? 'Teşekkürler.' : 'Thank you.',
      });
      setForm({ name: '', type: TYPES[0], message: '' });
      load();
    } catch {
      toast({
        title: lang === 'tr' ? 'Hata' : 'Error',
        description: lang === 'tr' ? 'Öneri gönderilemedi.' : 'Failed to send.',
        variant: 'destructive',
      });
    }
    setSubmitting(false);
  };

  return (
    <section id="destek" className="relative py-24 sm:py-32">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 30% 50%, hsl(213 100% 65% / 0.05) 0%, transparent 60%)'
      }} />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030508] via-[#030508]/70 to-transparent z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2
            className="font-display text-4xl sm:text-5xl font-bold inline-block animate-gradient-sweep-purple bg-clip-text text-transparent bg-[length:300%_100%]"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(220,210,255,0.5), rgba(255,255,255,0.95), rgba(200,190,255,0.4), rgba(255,255,255,0.3))',
              filter: 'drop-shadow(0 0 18px rgba(210,200,255,0.35)) drop-shadow(0 0 40px rgba(200,190,255,0.15))',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
            }}
          >
            {lang === 'tr' ? 'DESTEK' : 'SUPPORT'}
          </h2>
          <p className="mt-5 font-display text-xl sm:text-2xl text-foreground/90">
            {lang === 'tr' ? 'Ne Yapabilirsin?' : 'What Can You Do?'}
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed">
            4 canlı platform kurdum, 5 ülkede ihracat anlaşmaları kapattım ve bir sonraki adım için kendime yatırım yapıyorum. Nerede durduğumu, ne sunabileceğimi ve nasıl parçası olabileceğini burada bulacaksın.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-5 text-center hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(74,158,255,0.08)]"
            >
              <div className="font-display text-base sm:text-lg font-semibold text-foreground">
                {lang === 'tr' ? s.label : s.labelEn}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Elimde Olanlar */}
        <div className="mb-16">
          <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center">
            {lang === 'tr' ? 'Elimde Olanlar' : 'What I Bring'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ASSETS.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-500 hover:shadow-[0_0_25px_rgba(74,158,255,0.08)]"
              >
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {lang === 'tr' ? a.title : a.titleEn}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FIRSAT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-2xl border border-primary/30 bg-white/[0.03] backdrop-blur-md p-8 sm:p-10 text-center mb-6 overflow-hidden"
          style={{ boxShadow: '0 0 40px rgba(74,158,255,0.12), inset 0 0 40px rgba(74,158,255,0.04)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(74,158,255,0.08), transparent 70%)'
          }} />
          <div className="relative">
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary/80 mb-4">
              {lang === 'tr' ? 'FIRSAT' : 'OPPORTUNITY'}
            </p>
            <div
              className="font-display text-5xl sm:text-7xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(120deg, #C8DCFF, #FFFFFF, #A8C5FF)',
                filter: 'drop-shadow(0 0 30px rgba(74,158,255,0.5)) drop-shadow(0 0 60px rgba(200,220,255,0.25))',
              }}
            >
              €30.000
            </div>
            <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed">
              Bu bir sonraki bölümün sermayesi — üzerine inşa edebileceğim sağlam bir zemin. Bağış çağrısı değil bu. Açık bir kapı: ortaklık, iş birliği, bir tanışıklık, ya da sadece bir paylaşım — hangisi uyuyorsa o.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-20">
          {PILLS.map((p) => (
            <span
              key={p}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-mono tracking-[0.2em] border border-primary/30 text-primary/90 bg-primary/5"
              style={{ textShadow: '0 0 10px rgba(74,158,255,0.4)', boxShadow: '0 0 15px rgba(74,158,255,0.08)' }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* Nasıl yardımcı olabilirsin */}
        <div className="mb-16">
          <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center">
            {lang === 'tr' ? 'Nasıl Yardımcı Olabilirsin' : 'How You Can Help'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HELP.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-500 hover:shadow-[0_0_25px_rgba(74,158,255,0.08)]"
              >
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{h.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto space-y-5"
        >
          <p className="text-center text-xs text-muted-foreground/80 font-mono tracking-wider">
            {lang === 'tr' ? 'Anonim kalabilirsin.' : 'You can stay anonymous.'}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={lang === 'tr' ? 'İsim (opsiyonel)' : 'Name (optional)'}
              value={form.name}
              maxLength={100}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(74,158,255,0.15)] transition-all duration-300"
            />
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(74,158,255,0.15)] transition-all duration-300"
            >
              {TYPES.map((t) => (
                <option key={t} value={t} className="bg-[#030508]">{t}</option>
              ))}
            </select>
          </div>
          <textarea
            placeholder={lang === 'tr' ? 'Önerin...' : 'Your suggestion...'}
            rows={4}
            value={form.message}
            maxLength={2000}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(74,158,255,0.15)] transition-all duration-300 resize-none"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={submitting}
              className="relative group flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 disabled:opacity-50 hover:shadow-[0_0_25px_rgba(74,158,255,0.25)] overflow-hidden"
            >
              {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {lang === 'tr' ? 'Öneriyi Gönder' : 'Send Suggestion'}
            </button>
          </div>
        </motion.form>

        {/* Recent submissions */}
        {items.length > 0 && (
          <div className="mt-16 max-w-2xl mx-auto">
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center">
              {lang === 'tr' ? 'Son Öneriler' : 'Recent Suggestions'}
            </h3>
            <div className="space-y-3">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="text-xs font-mono tracking-wider text-primary/80 mb-1">
                    {it.name?.trim() || 'Anonim'}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap break-words">
                    {it.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SupportSection;
