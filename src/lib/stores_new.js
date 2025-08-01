import { writable } from 'svelte/store';

// Language store
export const language = writable('en'); // 'en' or 'id'

// Theme store
export const theme = writable('dark'); // 'dark' or 'light'

// Language translations
export const translations = {
  en: {
    // Navigation
    home: 'Home',
    work: 'Work',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact',
    
    // Home Section
    heroTitle: 'Muh Fariza',
    heroSubtitle: 'Fullstack Developer',
    viewMyWork: 'View My Work',
    getInTouch: 'Get In Touch →',
    
    // Work Section
    experienceTitle: 'Experience',
    experienceSubtitle: 'My professional journey',
    
    // Work Experience Details
    softwareEngineerTitle: 'Software Engineer',
    softwareEngineerCompany: 'TSM Technology',
    softwareEngineerPeriod: '2022 - Present',
    softwareEngineerDesc: 'Developing full-stack web applications using React.js, TypeScript, Next.js, and Svelte for frontend development. Backend expertise includes Express.js and Golang. Proficient in AWS services including DynamoDB, Cognito, IAM, and Amplify for scalable cloud solutions. Based in Jakarta Barat.',
    
    freelanceTitle: 'Freelance Fullstack Developer',
    freelanceCompany: 'Multiple Clients',
    freelancePeriod: '2019 - Present',
    freelanceDesc: 'Developed web applications for various clients including Akses Bayar, Semen Gresik Indonesia, and Loadgic. Specialized in PHP applications, Laravel and CodeIgniter frameworks, React with TypeScript, Next.js, and modern web development practices.',
    
    itConsultantTitle: 'IT Consultant',
    itConsultantCompany: 'Dinas PUP ESDM Provinsi DIY',
    itConsultantPeriod: '2021 - 2022',
    itConsultantDesc: 'Documented 31 provincial irrigation systems, mapped primary, secondary, and tertiary channel networks. Set up and maintained network infrastructure within the department environment. Contributed to government digitalization initiatives.',
    
    webDeveloperTitle: 'Web Developer',
    webDeveloperCompany: 'HMJ TI SMTIK Akakom Yogyakarta',
    webDeveloperPeriod: '2019 - 2021',
    webDeveloperDesc: 'Developed and maintained the official website for the Computer Science Student Association. Built using modern web technologies with focus on responsive design and user experience for academic community.',
    
    // Education Section
    educationTitle: 'Education',
    educationSubtitle: 'Learning never stops',
    
    // Projects Section
    projectsTitle: 'Selected Work',
    projectsSubtitle: 'Crafted with passion and precision',
    viewProject: 'View Project →',
    
    // Contact Section
    contactTitle: "Let's Connect",
    contactSubtitle: 'Ready to bring your ideas to life',
    getInTouchTitle: 'Get In Touch',
    getInTouchText: "I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together.",
    email: 'Email',
    location: 'Location',
    name: 'Name',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    contactEmail: 'fariza@example.com',
    contactLocation: 'Jakarta Barat, Indonesia',
    
    // Form Messages
    thankYouMessage: 'Thanks {name}! Your message has been received. I will get back to you soon.',
    
    // Footer
    footerText: '© 2024 Muh Fariza. Crafted with passion.',
    
    // Settings
    language: 'Language',
    theme: 'Theme',
    darkMode: 'Dark',
    lightMode: 'Light',
    
    // Projects
    jualikanTitle: 'Jualikan - Fish Marketplace',
    jualikanDesc: 'E-commerce platform for fish trading with comprehensive marketplace features. Built with PHP framework for reliable performance and user-friendly interface.',
    roomBookingTitle: 'Room Booking System',
    roomBookingDesc: 'Digital room reservation system for efficient space management. Features real-time availability, booking management, and administrative controls.',
    libraryTitle: 'Library Management System',
    libraryDesc: 'Comprehensive library management solution with book cataloging, member management, and borrowing system. Streamlines library operations efficiently.',
    sawRaskinTitle: 'SAW-Raskin Decision Support',
    sawRaskinDesc: 'Decision support system using Simple Additive Weighting (SAW) method for Raskin distribution. Helps optimize resource allocation for government programs.',
    reactDenoTitle: 'Modern React App with Deno',
    reactDenoDesc: 'Experimental project exploring modern development stack with Deno runtime, React TypeScript, and Vite. Showcases cutting-edge web development practices.',
    hmjTitle: 'HMJ TI Website',
    hmjDesc: 'Official website for Computer Science Student Association at SMTIK Akakom Yogyakarta. Features student information, events, and academic resources.'
  },
  id: {
    // Navigation
    home: 'Beranda',
    work: 'Pengalaman',
    education: 'Pendidikan',
    projects: 'Proyek',
    contact: 'Kontak',
    
    // Home Section
    heroTitle: 'Muh Fariza',
    heroSubtitle: 'Pengembang Fullstack',
    viewMyWork: 'Lihat Karya Saya',
    getInTouch: 'Hubungi Saya →',
    
    // Work Section
    experienceTitle: 'Pengalaman',
    experienceSubtitle: 'Perjalanan profesional saya',
    
    // Work Experience Details
    softwareEngineerTitle: 'Software Engineer',
    softwareEngineerCompany: 'TSM Technology',
    softwareEngineerPeriod: '2022 - Sekarang',
    softwareEngineerDesc: 'Mengembangkan aplikasi web full-stack menggunakan React.js, TypeScript, Next.js, dan Svelte untuk pengembangan frontend. Keahlian backend meliputi Express.js dan Golang. Mahir dalam layanan AWS termasuk DynamoDB, Cognito, IAM, dan Amplify untuk solusi cloud yang scalable. Berbasis di Jakarta Barat.',
    
    freelanceTitle: 'Freelance Fullstack Developer',
    freelanceCompany: 'Multiple Clients',
    freelancePeriod: '2019 - Sekarang',
    freelanceDesc: 'Mengembangkan aplikasi web untuk berbagai klien termasuk Akses Bayar, Semen Gresik Indonesia, dan Loadgic. Spesialisasi dalam aplikasi PHP, framework Laravel dan CodeIgniter, React dengan TypeScript, Next.js, dan praktik pengembangan web modern.',
    
    itConsultantTitle: 'IT Consultant',
    itConsultantCompany: 'Dinas PUP ESDM Provinsi DIY',
    itConsultantPeriod: '2021 - 2022',
    itConsultantDesc: 'Mendokumentasikan 31 sistem irigasi provinsi, memetakan jaringan saluran primer, sekunder, dan tersier. Mengatur dan memelihara infrastruktur jaringan dalam lingkungan departemen. Berkontribusi pada inisiatif digitalisasi pemerintah.',
    
    webDeveloperTitle: 'Web Developer',
    webDeveloperCompany: 'HMJ TI SMTIK Akakom Yogyakarta',
    webDeveloperPeriod: '2019 - 2021',
    webDeveloperDesc: 'Mengembangkan dan memelihara website resmi untuk Himpunan Mahasiswa Jurusan Teknik Informatika. Dibangun menggunakan teknologi web modern dengan fokus pada desain responsif dan pengalaman pengguna untuk komunitas akademik.',
    
    // Education Section
    educationTitle: 'Pendidikan',
    educationSubtitle: 'Pembelajaran tidak pernah berhenti',
    
    // Projects Section
    projectsTitle: 'Karya Pilihan',
    projectsSubtitle: 'Dibuat dengan passion dan presisi',
    viewProject: 'Lihat Proyek →',
    
    // Contact Section
    contactTitle: 'Mari Terhubung',
    contactSubtitle: 'Siap mewujudkan ide Anda',
    getInTouchTitle: 'Hubungi Saya',
    getInTouchText: 'Saya selalu tertarik dengan peluang baru dan proyek menarik. Mari diskusikan bagaimana kita bisa bekerja sama.',
    email: 'Email',
    location: 'Lokasi',
    name: 'Nama',
    subject: 'Subjek',
    message: 'Pesan',
    sendMessage: 'Kirim Pesan',
    contactEmail: 'fariza@example.com',
    contactLocation: 'Jakarta Barat, Indonesia',
    
    // Form Messages
    thankYouMessage: 'Terima kasih {name}! Pesan Anda telah diterima. Saya akan segera menghubungi Anda.',
    
    // Footer
    footerText: '© 2024 Muh Fariza. Dibuat dengan passion.',
    
    // Settings
    language: 'Bahasa',
    theme: 'Tema',
    darkMode: 'Gelap',
    lightMode: 'Terang',
    
    // Projects
    jualikanTitle: 'Jualikan - Marketplace Ikan',
    jualikanDesc: 'Platform e-commerce untuk perdagangan ikan dengan fitur marketplace yang komprehensif. Dibangun dengan framework PHP untuk performa yang handal dan antarmuka yang user-friendly.',
    roomBookingTitle: 'Sistem Peminjaman Ruangan',
    roomBookingDesc: 'Sistem reservasi ruangan digital untuk manajemen ruang yang efisien. Menampilkan ketersediaan real-time, manajemen booking, dan kontrol administratif.',
    libraryTitle: 'Sistem Manajemen Perpustakaan',
    libraryDesc: 'Solusi manajemen perpustakaan komprehensif dengan katalog buku, manajemen anggota, dan sistem peminjaman. Menyederhanakan operasi perpustakaan secara efisien.',
    sawRaskinTitle: 'Sistem Pendukung Keputusan SAW-Raskin',
    sawRaskinDesc: 'Sistem pendukung keputusan menggunakan metode Simple Additive Weighting (SAW) untuk distribusi Raskin. Membantu mengoptimalkan alokasi sumber daya untuk program pemerintah.',
    reactDenoTitle: 'Aplikasi React Modern dengan Deno',
    reactDenoDesc: 'Proyek eksperimental yang mengeksplorasi stack pengembangan modern dengan runtime Deno, React TypeScript, dan Vite. Menampilkan praktik pengembangan web terdepan.',
    hmjTitle: 'Website HMJ TI',
    hmjDesc: 'Website resmi untuk Himpunan Mahasiswa Jurusan Teknik Informatika SMTIK Akakom Yogyakarta. Menampilkan informasi mahasiswa, acara, dan sumber daya akademik.'
  }
};

// Helper function to get translation
export function t(key, lang = 'en') {
  return translations[lang]?.[key] || translations.en[key] || key;
}
