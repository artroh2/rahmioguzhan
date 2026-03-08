import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export type Language = 'tr' | 'en' | 'zh' | 'hi' | 'es' | 'fr' | 'ar' | 'bn' | 'pt' | 'ru' | 'ja' | 'de' | 'ko' | 'vi' | 'te' | 'mr' | 'ta' | 'it' | 'ur' | 'th' | 'gu' | 'pl' | 'uk' | 'ml' | 'kn' | 'fa' | 'nl' | 'ro' | 'ms' | 'id';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', flag: '🇮🇷' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isTranslating: boolean;
}

// Base translations (TR & EN)
const baseTranslations: Record<string, { tr: string; en: string }> = {
  'nav.about': { tr: 'Hakkımda', en: 'About' },
  'nav.experience': { tr: 'Deneyim', en: 'Experience' },
  'nav.education': { tr: 'Eğitim', en: 'Education' },
  'nav.skills': { tr: 'Yetenekler', en: 'Skills' },
  'nav.contact': { tr: 'İletişim', en: 'Contact' },
  'nav.download': { tr: 'CV Görüntüle', en: 'View CV' },
  'hero.title': { tr: 'Rahmi Oğuzhan Hacıeyüpoğlu', en: 'Rahmi Oğuzhan Hacıeyüpoğlu' },
  'hero.subtitle': { tr: '2&Mir', en: '2&Mir' },
  'hero.scroll': { tr: 'Keşfetmek için kaydırın', en: 'Scroll to explore' },
  'about.title': { tr: 'Hakkımda', en: 'About Me' },
  'about.description': { tr: 'Operasyon yönetimi, proje koordinasyonu ve dijital çözümler konusunda deneyimli profesyonelim. Çok disiplinli yaklaşım ve yaratıcı problem çözme becerileriyle karmaşık projeleri başarıyla yönetiyorum. Birçok farklı sektörde edindiğim tecrübeleri ihtiyaç duyulan alanlarda uyguluyor, farklı bakış açısı ve pratik çözüm yeteneklerimle görevin başarı ile sonuçlanması için süreci yönetiyorum.', en: 'Experienced professional in operations management, project coordination, and digital solutions. Successfully managing complex projects with a multidisciplinary approach and creative problem-solving skills. I apply the experience I have gained in many different sectors to the areas needed, and I manage the process to successfully complete the task with my different perspectives and practical solution abilities.' },
  'about.description2': { tr: 'Sanat ve üretimi konusunda 20+ yıl deneyim ile, 1500\'ün üzerinde şiir, şarkı sözü, dans müziğinin yanı sıra yapay zeka destekli dijital sanat ve yapay zeka desteği ile üretim konusunda Dünya\'ya katkı sağlamaya çalışıyorum.', en: 'With 20+ years of experience in art and production, I strive to contribute to the world through over 1,500 poems, song lyrics, dance music, as well as AI-powered digital art and AI-assisted production.' },
  'experience.title': { tr: 'İş Deneyimleri', en: 'Work Experience' },
  'experience.present': { tr: 'Günümüz', en: 'Present' },
  'education.title': { tr: 'Eğitim', en: 'Education' },
  'skills.title': { tr: 'Yetenekler ve Kabiliyetler', en: 'Skills & Abilities' },
  'skills.languages': { tr: 'Diller', en: 'Languages' },
  'skills.software': { tr: 'Yazılımlar', en: 'Software' },
  'skills.technical': { tr: 'Teknik Beceriler', en: 'Technical Skills' },
  'skills.hobbies': { tr: 'Profesyonel Sanat ve Spor', en: 'Professional Art & Sports' },
  'contact.title': { tr: 'İletişim Bilgileri', en: 'Contact Information' },
  'contact.subtitle': { tr: 'Birlikte çalışmak ister misiniz?', en: 'Would you like to work together?' },
  'contact.name': { tr: 'İsim', en: 'Name' },
  'contact.email': { tr: 'E-posta', en: 'Email' },
  'contact.message': { tr: 'Mesaj', en: 'Message' },
  'contact.send': { tr: 'Gönder', en: 'Send' },
  'contact.success': { tr: 'Mesajınız başarıyla gönderildi!', en: 'Your message has been sent successfully!' },
  'contact.location': { tr: 'Konum', en: 'Location' },
  'footer.designed': { tr: 'tarafından tasarlanmıştır.', en: 'Designed by Rahmi Oğuzhan Hacıeyüpoğlu.' },
  'footer.rights': { tr: 'Tüm hakları saklıdır.', en: 'All rights reserved.' },
};

const CACHE_KEY = 'translation_cache';

function loadCache(): Record<string, Record<string, string>> {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveCache(cache: Record<string, Record<string, string>>) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch { /* ignore */ }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('tr');
  const [dynamicTranslations, setDynamicTranslations] = useState<Record<string, Record<string, string>>>(loadCache());
  const [isTranslating, setIsTranslating] = useState(false);

  const translateAll = useCallback(async (lang: Language) => {
    // Check cache first
    const cache = loadCache();
    if (cache[lang] && Object.keys(cache[lang]).length >= Object.keys(baseTranslations).length * 0.8) {
      setDynamicTranslations(cache);
      return;
    }

    setIsTranslating(true);
    try {
      const textsToTranslate: Record<string, string> = {};
      for (const [key, val] of Object.entries(baseTranslations)) {
        textsToTranslate[key] = val.tr;
      }

      const langOption = languages.find(l => l.code === lang);

      const { data, error } = await supabase.functions.invoke('translate', {
        body: {
          texts: textsToTranslate,
          targetLanguage: lang,
          targetLanguageName: langOption?.name || lang,
        },
      });

      if (error) throw error;

      if (data?.translations) {
        const newCache = { ...cache, [lang]: data.translations };
        setDynamicTranslations(newCache);
        saveCache(newCache);
      }
    } catch (e) {
      console.error('Translation error:', e);
      toast.error('Translation failed. Falling back to Turkish.');
    } finally {
      setIsTranslating(false);
    }
  }, []);

  const setLanguage = useCallback(async (lang: Language) => {
    setLanguageState(lang);
    if (lang !== 'tr' && lang !== 'en') {
      await translateAll(lang);
    }
  }, [translateAll]);

  const t = useCallback((key: string): string => {
    if (language === 'tr' || language === 'en') {
      return baseTranslations[key]?.[language] || key;
    }
    // Dynamic translation
    return dynamicTranslations[language]?.[key] || baseTranslations[key]?.en || key;
  }, [language, dynamicTranslations]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
