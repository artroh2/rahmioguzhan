import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Bell } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const AboutTab = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [notifyEmail, setNotifyEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || message.length < 10) {
      toast({ title: 'Please fill all fields', description: 'Message must be at least 10 characters.', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('contact_messages').insert({ name, email, message });
      if (error) throw error;
      toast({ title: 'Message sent!', description: "Rahmi Oğuzhan will get back to you." });
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast({ title: 'Failed to send', description: 'Please try again later.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = notifyEmail.trim();
    if (!email) {
      toast({ title: 'Please enter your email', variant: 'destructive' });
      return;
    }
    setIsSubscribing(true);
    try {
      const { error } = await supabase.from('newsletter_subscribers').insert({ email });
      if (error) throw error;
      toast({ title: 'Subscribed! 🔔', description: "You'll be notified on new releases." });
      setNotifyEmail('');
    } catch {
      toast({ title: 'Failed to subscribe', description: 'Please try again later.', variant: 'destructive' });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="relative h-full flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background/98" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col px-5 pt-10 pb-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="shrink-0 mb-5"
        >
          <h1 className="font-display text-5xl font-bold text-primary mb-1">Contact</h1>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Get in touch</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-3 shrink-0"
        >
          <input
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full bg-card/80 backdrop-blur-xl border border-border rounded-xl py-2.5 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full bg-card/80 backdrop-blur-xl border border-border rounded-xl py-2.5 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <textarea
            placeholder="Your message (min 10 chars)"
            required
            minLength={10}
            rows={3}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className="w-full bg-card/80 backdrop-blur-xl border border-border rounded-xl py-2.5 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground font-semibold py-3 rounded-xl transition-all duration-300 text-sm active:scale-[0.98] disabled:opacity-60"
          >
            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

        {/* Get Notified */}
        <motion.form
          onSubmit={handleSubscribe}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col gap-3 mt-5 shrink-0"
        >
          <div className="flex items-center gap-2 mb-1">
            <Bell size={14} className="text-primary" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Get Notified</h2>
          </div>
          <input
            type="email"
            placeholder="Your e-mail address"
            required
            value={notifyEmail}
            onChange={e => setNotifyEmail(e.target.value)}
            className="w-full bg-card/80 backdrop-blur-xl border border-border rounded-xl py-2.5 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <button
            type="submit"
            disabled={isSubscribing}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground font-semibold py-3 rounded-xl transition-all duration-300 text-sm active:scale-[0.98] disabled:opacity-60"
          >
            {isSubscribing ? <Loader2 size={16} className="animate-spin" /> : <Bell size={16} />}
            {isSubscribing ? 'Subscribing...' : 'Submit'}
          </button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-4 shrink-0"
        >
          ROH2 © 2026 — All rights reserved
        </motion.p>
      </div>
    </div>
  );
};

export default AboutTab;
