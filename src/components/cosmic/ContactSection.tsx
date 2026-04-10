import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  lang: 'tr' | 'en';
}

const SOCIALS = [
  { name: 'Spotify', href: 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk', color: '#1DB954' },
  { name: 'Apple Music', href: 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707', color: '#FC3C44' },
  { name: 'Instagram', href: 'https://instagram.com', color: '#E1306C' },
  { name: 'X', href: 'https://x.com', color: '#F0F4FF' },
  { name: 'YouTube', href: 'https://youtube.com', color: '#FF0000' },
];

const ContactSection = ({ lang }: ContactSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      if (error) throw error;
      toast({
        title: lang === 'tr' ? 'Mesaj gönderildi!' : 'Message sent!',
        description: lang === 'tr' ? 'En kısa sürede dönüş yapacağım.' : 'I\'ll get back to you soon.',
      });
      setForm({ name: '', email: '', message: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      toast({
        title: lang === 'tr' ? 'Hata' : 'Error',
        description: lang === 'tr' ? 'Mesaj gönderilemedi.' : 'Failed to send message.',
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="iletisim" className="relative py-24 sm:py-32">
      <div className="relative z-10 max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary mb-3">
            {lang === 'tr' ? 'iletişim' : 'contact'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            {lang === 'tr' ? 'Bağlantı Kur' : 'Get in Touch'}
          </h2>
        </motion.div>

        {/* Social links with platform glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {SOCIALS.map((s, idx) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
              className="glass rounded-full px-5 py-2.5 text-xs text-muted-foreground transition-all duration-300"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${s.color}33`;
                (e.currentTarget as HTMLElement).style.borderColor = `${s.color}44`;
                (e.currentTarget as HTMLElement).style.color = s.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '';
                (e.currentTarget as HTMLElement).style.borderColor = '';
                (e.currentTarget as HTMLElement).style.color = '';
              }}
            >
              {s.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={lang === 'tr' ? 'İsim' : 'Name'}
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(74,158,255,0.15)] transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(74,158,255,0.15)] transition-all duration-300"
            />
          </div>
          <textarea
            placeholder={lang === 'tr' ? 'Mesajınız...' : 'Your message...'}
            rows={4}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(74,158,255,0.15)] transition-all duration-300 resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="relative group flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 disabled:opacity-50 hover:shadow-[0_0_25px_rgba(74,158,255,0.25)] overflow-hidden"
          >
            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {lang === 'tr' ? 'Gönder' : 'Send'}
          </button>
        </motion.form>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-muted-foreground mt-16"
        >
          © {new Date().getFullYear()} Rahmi Oğuzhan Hacıeyüpoğlu
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
