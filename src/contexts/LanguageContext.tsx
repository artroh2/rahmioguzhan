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
  // Social card descriptions
  'social.spotify.desc': { tr: 'Tüm şarkılarımı bu platformdan dinleyebilirsiniz, üyelik gerektirmez. Üye değilseniz reklamlar keyfinizi etkiler.', en: 'You can listen to all my songs on this platform, no membership required. Ads may affect your experience if you\'re not a member.' },
  'social.spotifyArtist.desc': { tr: 'Daha çok yabancı elektronik müzik çalışmalarım için ziyaret edebilirsiniz.', en: 'Visit for my international electronic music works.' },
  'social.youtube.desc': { tr: 'Görsel içerikli çalışmalarım burada.', en: 'My visual content works are here.' },
  'social.instagram.desc': { tr: 'Kişisel instagram sayfam.', en: 'My personal Instagram page.' },
  'social.siir.desc': { tr: 'Şiir çalışmalarımı yayınladığım, sürekli güncellenen Instagram blog sayfam.', en: 'My cont continuously updated Instagram blog page where I publish my poetry works.' },
  'social.x.desc': { tr: 'Tweetlere erişim buradan.', en: 'Access my tweets here.' },
  'social.soundcloud.desc': { tr: 'Üyelik ve ücret istemeden tüm şarkıları bir arada bulabileceğiniz alternatif müzik platformu.', en: 'An alternative music platform where you can find all songs together without membership or fees.' },
  'social.linkedin.desc': { tr: 'Profesyonel çalışma hayatımın bilgilerinin olduğu platform.', en: 'The platform with my professional career information.' },
  'social.whatsapp.desc': { tr: 'Kişisel WhatsApp numaram.', en: 'My personal WhatsApp number.' },
  'social.tiktok.desc': { tr: 'Tiktoklar buradan gelecek. Mutlaka buluşacağımız yer, takip etmeyi unutmayın.', en: 'TikToks will come from here. A place where we will definitely meet, don\'t forget to follow.' },
  'social.facebook.desc': { tr: 'Facebook sayfam', en: 'My Facebook page' },
  'social.email.text': { tr: 'E-posta gönder', en: 'Send Email' },
  'social.email.desc': { tr: 'Tüm e postalara yanıt veriyorum.', en: 'I respond to all emails.' },
  'hero.fix': { tr: 'Düzelt', en: 'Fix it' },
};

const CACHE_KEY = 'translation_cache_v4'; // v4: added tiktok

function loadCache(): Record<string, Record<string, string>> {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    // Clean out any empty cached entries from previous bugs
    const cleaned: Record<string, Record<string, string>> = {};
    for (const [lang, translations] of Object.entries(parsed)) {
      if (translations && typeof translations === 'object' && Object.keys(translations as object).length > 0) {
        cleaned[lang] = translations as Record<string, string>;
      }
    }
    return cleaned;
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
    if (cache[lang] && Object.keys(cache[lang]).length >= 10) {
      setDynamicTranslations(prev => ({ ...prev, [lang]: cache[lang] }));
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

      if (error) {
        console.error('Supabase invoke error:', error);
        throw error;
      }

      console.log('Translation response data:', data);

      const translations = data?.translations;
      if (translations && typeof translations === 'object' && Object.keys(translations).length > 0) {
        const newCache = { ...loadCache(), [lang]: translations };
        setDynamicTranslations(prev => ({ ...prev, [lang]: translations }));
        saveCache(newCache);
        console.log(`Cached ${Object.keys(translations).length} translations for ${lang}`);
      } else {
        console.warn('Empty translations received:', data);
        toast.error('Translation returned empty. Please try again.');
      }
    } catch (e) {
      console.error('Translation error:', e);
      toast.error('Translation failed. Please try again.');
    } finally {
      setIsTranslating(false);
    }
  }, []);

  const setLanguage = useCallback(async (lang: Language) => {
    if (lang !== 'tr' && lang !== 'en') {
      // Fetch translations BEFORE switching language so users never see English fallback
      await translateAll(lang);
    }
    setLanguageState(lang);
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
