import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    education: 'Education',
    experience: 'Experience',
    work: 'Work',
    contact: 'Contact Me',
    hero_title: 'Creative Developer',
    hero_subtitle: 'Building digital experiences with passion and precision',
    hero_description: 'I craft beautiful, functional, and user-centered digital experiences. Welcome to my creative space.',
    about_me: 'About Me',
    skills: 'Skills',
    projects: 'Projects',
    get_in_touch: 'Get In Touch',
    download_cv: 'Download CV',
    view_project: 'View Project',
    send_message: 'Send Message',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    education_title: 'My Educational Journey',
    education_description: 'A path of continuous learning and growth',
    experience_title: 'Professional Experience',
    experience_description: 'Where passion meets expertise',
    work_title: 'Featured Projects',
    work_description: 'Showcasing my creative solutions',
    contact_title: 'Let\'s Work Together',
    contact_description: 'Ready to bring your ideas to life',
  },
  id: {
    home: 'Beranda',
    education: 'Pendidikan',
    experience: 'Pengalaman',
    work: 'Karya',
    contact: 'Hubungi Saya',
    hero_title: 'Pengembang Kreatif',
    hero_subtitle: 'Membangun pengalaman digital dengan passion dan presisi',
    hero_description: 'Saya menciptakan pengalaman digital yang indah, fungsional, dan berpusat pada pengguna. Selamat datang di ruang kreatif saya.',
    about_me: 'Tentang Saya',
    skills: 'Keahlian',
    projects: 'Proyek',
    get_in_touch: 'Mari Berhubungan',
    download_cv: 'Unduh CV',
    view_project: 'Lihat Proyek',
    send_message: 'Kirim Pesan',
    name: 'Nama',
    email: 'Email',
    message: 'Pesan',
    education_title: 'Perjalanan Pendidikan Saya',
    education_description: 'Jalan pembelajaran dan pertumbuhan berkelanjutan',
    experience_title: 'Pengalaman Profesional',
    experience_description: 'Di mana passion bertemu dengan keahlian',
    work_title: 'Proyek Unggulan',
    work_description: 'Menampilkan solusi kreatif saya',
    contact_title: 'Mari Bekerja Sama',
    contact_description: 'Siap mewujudkan ide-ide Anda',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}