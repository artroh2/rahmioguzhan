import { useState, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  lang: 'tr' | 'en';
}

const SOCIALS = [
  { name: 'Instagram', href: 'https://instagram.com/siir2.0', color: '#E1306C' },
  { name: 'X', href: 'https://x.com/roguzhanh', color: '#F0F4FF' },
];

const ContactSection = ({ lang }: ContactSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Random glow params per social button - each unique
  const socialGlowParams = useMemo(() =>
    SOCIALS.map(() => ({
      speed: 3 + Math.random() * 5,
      dir: Math.random() > 0.5 ? 'normal' : 'reverse',
      offset: Math.floor(Math.random() * 360),
    }))
  , []);

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
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030508] via-[#030508]/80 to-transparent z-[1]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="font-display text-4xl sm:text-5xl font-bold inline-block animate-gradient-sweep-purple bg-clip-text text-transparent bg-[length:300%_100%]"
            style={{
              backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.3), rgba(220,210,255,0.5), rgba(255,255,255,0.95), rgba(200,190,255,0.4), rgba(255,255,255,0.3))',
              filter: 'drop-shadow(0 0 18px rgba(210,200,255,0.35)) drop-shadow(0 0 40px rgba(200,190,255,0.15))',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.08)',
            }}
          >
            {lang === 'tr' ? 'BAĞLANTI KUR' : 'GET IN TOUCH'}
          </h2>
        </motion.div>


        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-5"
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
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative group flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 disabled:opacity-50 hover:shadow-[0_0_25px_rgba(74,158,255,0.25)] overflow-hidden"
            >
              {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {lang === 'tr' ? 'Gönder' : 'Send'}
            </button>
          </div>
        </motion.form>

        {/* Footer */}
      </div>
    </section>
  );
};

export default ContactSection;
