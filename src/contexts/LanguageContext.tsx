import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navigation
    'nav.about': 'Hakkımda',
    'nav.experience': 'Deneyim',
    'nav.education': 'Eğitim',
    'nav.skills': 'Yetenekler',
    'nav.contact': 'İletişim',
    'nav.download': 'CV Görüntüle',

    // Hero
    'hero.title': '2&Mir',
    'hero.subtitle': 'Sanat & Operasyon & Proje Yönetimi ve Liderlik',
    'hero.scroll': 'Keşfetmek için kaydırın',

    // About
    'about.title': 'Hakkımda',
    'about.description': 'Operasyon yönetimi, proje koordinasyonu ve dijital çözümler konusunda deneyimli profesyonelim. Çok disiplinli yaklaşım ve yaratıcı problem çözme becerileriyle karmaşık projeleri başarıyla yönetiyorum. Birçok farklı sektörde edindiğim tecrübeleri ihtiyaç duyulan alanlarda uyguluyor, farklı bakış açısı ve pratik çözüm yeteneklerimle görevin başarı ile sonuçlanması için süreci yönetiyorum.',
    'about.description2': 'Sanat ve üretimi konusunda 20+ yıl deneyim ile, 1500\'ün üzerinde şiir, şarkı sözü, dans müziğinin yanı sıra yapay zeka destekli dijital sanat ve yapay zeka desteği ile üretim konusunda Dünya\'ya katkı sağlamaya çalışıyorum.',

    // Experience
    'experience.title': 'İş Deneyimleri',
    'experience.present': 'Günümüz',

    // Education
    'education.title': 'Eğitim',

    // Skills
    'skills.title': 'Yetenekler ve Kabiliyetler',
    'skills.languages': 'Diller',
    'skills.software': 'Yazılımlar',
    'skills.technical': 'Teknik Beceriler',
    'skills.hobbies': 'Profesyonel Sanat ve Spor',

    // Contact
    'contact.title': 'İletişim Bilgileri',
    'contact.subtitle': 'Birlikte çalışmak ister misiniz?',
    'contact.name': 'İsim',
    'contact.email': 'E-posta',
    'contact.message': 'Mesaj',
    'contact.send': 'Gönder',
    'contact.success': 'Mesajınız başarıyla gönderildi!',
    'contact.location': 'Konum',

    // Footer
    'footer.designed': 'tarafından tasarlanmıştır.',
    'footer.rights': 'Tüm hakları saklıdır.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.download': 'View CV',

    // Hero
    'hero.title': '2&Mir',
    'hero.subtitle': 'Art & Operations & Project Management and Leadership',
    'hero.scroll': 'Scroll to explore',

    // About
    'about.title': 'About Me',
    'about.description': 'Experienced professional in operations management, project coordination, and digital solutions. Successfully managing complex projects with a multidisciplinary approach and creative problem-solving skills. I apply the experience I have gained in many different sectors to the areas needed, and I manage the process to successfully complete the task with my different perspectives and practical solution abilities.',
    'about.description2': 'With 20+ years of experience in art and production, I strive to contribute to the world through over 1,500 poems, song lyrics, dance music, as well as AI-powered digital art and AI-assisted production.',

    // Experience
    'experience.title': 'Work Experience',
    'experience.present': 'Present',

    // Education
    'education.title': 'Education',

    // Skills
    'skills.title': 'Skills & Abilities',
    'skills.languages': 'Languages',
    'skills.software': 'Software',
    'skills.technical': 'Technical Skills',
    'skills.hobbies': 'Professional Art & Sports',

    // Contact
    'contact.title': 'Contact Information',
    'contact.subtitle': 'Would you like to work together?',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.success': 'Your message has been sent successfully!',
    'contact.location': 'Location',

    // Footer
    'footer.designed': 'Designed by Rahmi Oğuzhan Hacıeyüpoğlu.',
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
