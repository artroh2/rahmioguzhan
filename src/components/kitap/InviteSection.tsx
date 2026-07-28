import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Instagram, Music2, Youtube, Mail, Guitar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const InviteSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', message: '' });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setSending(true);
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: 'belirtilmedi',
        message: form.message,
      });
      if (error) throw error;
      await supabase.functions.invoke('send-contact-email', {
        body: { name: form.name, email: 'belirtilmedi', message: form.message },
      });
      toast({ title: 'Mesajın bana ulaştı.', description: 'Hikâye devam ediyor — en kısa sürede dönerim.' });
      setForm({ name: '', message: '' });
    } catch {
      toast({ title: 'Gönderilemedi', description: 'Bir şeyler ters gitti, tekrar dener misin?', variant: 'destructive' });
    }
    setSending(false);
  };

  return (
    <section id="davet" className="relative py-28 sm:py-40 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(50%_50%_at_10%_50%,hsl(var(--duo-cold)/0.15),transparent_70%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(50%_50%_at_90%_50%,hsl(var(--duo-warm)/0.12),transparent_70%)]" />
      </div>

      <div className="relative max-w-xl mx-auto">
        <p className="text-[10px] tracking-[0.5em] uppercase text-accent/70 mb-6">Davet</p>
        <h2 className="font-display text-3xl sm:text-5xl leading-tight mb-6">
          Bu hikâye devam ediyor,<br />
          <span className="text-accent">devamına sen de katılabilirsin.</span>
        </h2>
        <p className="text-muted-foreground leading-[1.9] mb-10 text-[15px]">
          Bir cümle bırak, bir soru sor, bir itirazın olsun. Burada okunmayan mesaj yok.
        </p>

        <form onSubmit={submit} className="space-y-4">
          <input
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
            maxLength={80}
            placeholder="Adın"
            className="w-full bg-transparent border-b border-border/70 focus:border-accent/70 outline-none py-3 text-sm placeholder:text-muted-foreground/70 transition-colors duration-500"
          />
          <textarea
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            required
            rows={4}
            maxLength={2000}
            placeholder="Mesajın"
            className="w-full bg-transparent border-b border-border/70 focus:border-accent/70 outline-none py-3 text-sm placeholder:text-muted-foreground/70 resize-none transition-colors duration-500"
          />
          <motion.button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 border border-accent/40 text-accent px-7 py-3 rounded-full text-sm hover:bg-accent/10 transition-colors duration-500 disabled:opacity-50"
          >
            <Mail className="w-4 h-4" />
            {sending ? 'Gönderiliyor...' : 'Gönder'}
          </motion.button>
        </form>

        <div className="mt-14 grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <Coffee className="w-4 h-4 text-accent/70" /> Bir kahve içelim.
          </div>
          <div className="flex items-center gap-3">
            <Guitar className="w-4 h-4 text-accent/70" /> Spor ya da müzik yapalım.
          </div>
          <div className="flex items-center gap-3">
            <Guitar className="w-4 h-4 text-accent/70" /> Spor ya da müzik yapalım.
          </div>
        </div>

        <div className="mt-10 flex items-center gap-6">
          <a href="https://www.instagram.com/rahmioguzhan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-accent transition-colors duration-500"><Instagram className="w-5 h-5" /></a>
          <a href="https://open.spotify.com/search/Rahmi%20O%C4%9Fuzhan" target="_blank" rel="noopener noreferrer" aria-label="Müzik" className="text-muted-foreground hover:text-accent transition-colors duration-500"><Music2 className="w-5 h-5" /></a>
          <a href="https://www.youtube.com/@rahmioguzhan" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-accent transition-colors duration-500"><Youtube className="w-5 h-5" /></a>
        </div>
      </div>
    </section>
  );
};

export default InviteSection;
