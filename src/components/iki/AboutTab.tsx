import { useState } from 'react';
import { Download, Send, CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import heroBg from '@/assets/hero-bg.jpg';

const getStoreLink = (ios: string, android: string) => {
  const ua = navigator.userAgent || '';
  if (/iPad|iPhone|iPod|Macintosh/i.test(ua)) return ios;
  return android;
};

const appLinks = [
  {
    name: 'Spotify',
    color: '#1DB954',
    ios: 'https://apps.apple.com/app/spotify/id324684580',
    android: 'https://play.google.com/store/apps/details?id=com.spotify.music',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    color: '#E1306C',
    ios: 'https://apps.apple.com/app/instagram/id389801252',
    android: 'https://play.google.com/store/apps/details?id=com.instagram.android',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    color: '#0A66C2',
    ios: 'https://apps.apple.com/app/linkedin/id288429040',
    android: 'https://play.google.com/store/apps/details?id=com.linkedin.android',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const AboutTab = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !subject.trim() || !message.trim()) return;

    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: { name: name.trim(), subject: subject.trim(), message: message.trim() },
      });
      if (error) throw error;
      setSent(true);
      setName('');
      setSubject('');
      setMessage('');
      toast.success('Mesajınız gönderildi!');
      setTimeout(() => setSent(false), 4000);
    } catch (err: any) {
      toast.error('Gönderilemedi, lütfen tekrar deneyin.');
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative min-h-screen pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background/98" />
      </div>

      <div className="relative z-10 px-6 pt-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-5xl font-bold text-primary mb-1">2</h1>
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">Rahmi Oğuzhan Hacıeyüpoğlu ile iletişime geçin</p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10"
        >
          <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">İletişim</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="İsim"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              className="w-full bg-card/80 backdrop-blur-xl border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Konu"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              maxLength={200}
              className="w-full bg-card/80 backdrop-blur-xl border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300"
            />
            <textarea
              placeholder="Mesajınız"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              rows={4}
              className="w-full bg-card/80 backdrop-blur-xl border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 resize-none"
            />
            <button
              type="submit"
              disabled={sending || !name.trim() || !subject.trim() || !message.trim()}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] disabled:opacity-40 disabled:hover:shadow-none text-primary-foreground font-semibold py-3 rounded-xl transition-all duration-300 text-sm active:scale-[0.98]"
            >
              {sending ? (
                <Loader2 size={16} className="animate-spin" />
              ) : sent ? (
                <CheckCircle size={16} />
              ) : (
                <Send size={16} />
              )}
              {sending ? 'Gönderiliyor...' : sent ? 'Gönderildi!' : 'Gönder'}
            </button>
          </form>
        </motion.div>

        {/* Download Apps */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-5 flex items-center justify-center gap-2 font-semibold">
            <Download size={14} />
            Uygulamaları İndir
          </h2>
          <div className="flex gap-3 justify-center">
            {appLinks.map((app) => (
              <a
                key={app.name}
                href={getStoreLink(app.ios, app.android)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${app.name} İndir`}
                className="flex flex-col items-center gap-2 bg-card/80 backdrop-blur-xl px-5 py-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 group"
                style={{ color: app.color }}
              >
                <div className="group-hover:scale-110 transition-transform duration-200">
                  {app.icon}
                </div>
                <span className="text-[10px] text-muted-foreground tracking-wider">{app.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center text-xs text-muted-foreground"
        >
          ROH2 © 2026 — Tüm hakları saklıdır
        </motion.p>
      </div>
    </div>
  );
};

export default AboutTab;
