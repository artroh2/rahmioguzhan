import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const contactInfo = [
  {
    icon: Mail,
    label: { tr: 'E-posta', en: 'Email' },
    value: 'rahmioguzhan@icloud.com',
    href: 'mailto:rahmioguzhan@icloud.com',
  },
  {
    icon: Phone,
    label: { tr: 'Telefon', en: 'Phone' },
    value: '+90 545 792 98 76',
    href: 'tel:+905457929876',
  },
  {
    icon: MapPin,
    label: { tr: 'Konum', en: 'Location' },
    value: 'Kartal, İstanbul, Türkiye',
    href: null,
  },
];

const ContactSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) throw error;

      toast({
        title: language === 'tr' ? 'Başarılı!' : 'Success!',
        description: t('contact.success'),
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: language === 'tr' ? 'Hata!' : 'Error!',
        description: language === 'tr' 
          ? 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' 
          : 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 relative" ref={ref}
      style={{ background: 'linear-gradient(180deg, transparent, hsl(220 22% 9% / 0.5), transparent)' }}>
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(28 85% 55%), transparent)' }} />
      
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-lg text-muted-foreground">{t('contact.subtitle')}</p>
          <div className="inline-flex items-center gap-4 mx-auto">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/60" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
              {t('contact.title')}
            </h2>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 flex flex-col items-center lg:items-start"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 group text-center sm:text-left"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, hsl(28 85% 55% / 0.2), hsl(195 45% 50% / 0.15))' }}>
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label[language]}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors break-all sm:break-normal"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base sm:text-lg font-medium text-foreground">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-6"
            >
              <div className="w-full aspect-square max-w-xs rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48193.22567595095!2d29.15!3d40.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5894e2d0c61%3A0xd07d9d1e89deb463!2sKartal%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1704700000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kartal, İstanbul"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-warm rounded-2xl p-8 space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.name')}
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.email')}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.message')}
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary focus:ring-primary resize-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-medium py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              style={{ background: 'linear-gradient(135deg, hsl(28 85% 55%), hsl(25 80% 45%))' }}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                />
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {t('contact.send')}
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
