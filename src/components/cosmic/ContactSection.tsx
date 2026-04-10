import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  lang: 'tr' | 'en';
}

const SOCIALS = [
  { name: 'Spotify', href: 'https://open.spotify.com/intl-tr/artist/4fQ8VbreLSA4Eaiwm1Elfk' },
  { name: 'Apple Music', href: 'https://music.apple.com/tr/artist/rahmi-oguzhan/1480581707' },
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'X', href: 'https://x.com' },
  { name: 'YouTube', href: 'https://youtube.com' },
];

const ContactSection = ({ lang }: ContactSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary mb-3">
            {lang === 'tr' ? 'iletişim' : 'contact'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            {lang === 'tr' ? 'Bağlantı Kur' : 'Get in Touch'}
          </h2>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full px-5 py-2.5 text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              {s.name}
            </a>
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
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <textarea
            placeholder={lang === 'tr' ? 'Mesajınız...' : 'Your message...'}
            rows={4}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 disabled:opacity-50 hover:shadow-[0_0_20px_hsl(213_100%_65%/0.2)]"
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
