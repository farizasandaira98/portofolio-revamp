import { writable } from 'svelte/store';

// Language store
export const language = writable('en'); // 'en' or 'id'

// Theme store
export const theme = writable('dark'); // 'dark' or 'light'

// Language translations
export const translations = {
    en: {
        navigation: {
            home: 'Home',
            work: 'Work',
            education: 'Education',
            projects: 'Projects',
            contact: 'Contact',
        },
        home: {
            name: 'Muh Fariza',
            title: 'Fullstack Developer',
            viewWork: 'View My Work',
            getInTouch: 'Get In Touch →',
        },
        work: {
            title: 'Experience',
            subtitle: 'My professional journey',
            experience: [
                {
                    title: 'Software Engineer',
                    company: 'TSM Technology',
                    period: '2022 - Present',
                    description: 'Developing full-stack web applications using React.js, TypeScript, Next.js, and Svelte for frontend development. Backend expertise includes Express.js and Golang. Proficient in AWS services including DynamoDB, Cognito, IAM, and Amplify for scalable cloud solutions. Based in Jakarta Barat.',
                    animationSrc: 'https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json'
                },
                {
                    title: 'Freelance Fullstack Developer',
                    company: 'Multiple Clients',
                    period: '2019 - Present',
                    description: 'Developed web applications for various clients including Akses Bayar, Semen Gresik Indonesia, and Loadgic. Specialized in PHP applications, Laravel and CodeIgniter frameworks, React with TypeScript, Next.js, and modern web development practices.',
                    animationSrc: 'https://assets4.lottiefiles.com/packages/lf20_fcfjwiyb.json'
                },
                {
                    title: 'IT Consultant',
                    company: 'Dinas PUP ESDM Provinsi DIY',
                    period: '2021 - 2022',
                    description: 'Documented 31 provincial irrigation systems, mapped primary, secondary, and tertiary channel networks. Set up and maintained network infrastructure within the department environment. Contributed to government digitalization initiatives.',
                    animationSrc: 'https://assets3.lottiefiles.com/packages/lf20_qmfs6c3i.json'
                }
            ]
        },
        education: {
            title: 'Education',
            subtitle: 'Learning never stops',
            items: [
                {
                    title: 'Bachelor of Computer Science',
                    institution: 'STMIK Akakom Yogyakarta',
                    period: '2017 - 2021',
                    description: 'Specialized in Software Engineering and Web Development. Gained strong foundation in programming languages, algorithms, data structures, and modern development methodologies.',
                    animationSrc: 'https://assets5.lottiefiles.com/packages/lf20_9wpyhdzo.json'
                },
                {
                    title: 'Graduated High School',
                    institution: 'SMKN Negeri 3 Palu',
                    period: '2015 - 2017',
                    description: 'Comprehensive IT support program covering website development, assembly language programming, C++, network infrastructure with Mikrotik, Cisco networking, and Ubiquiti wireless solutions.',
                    animationSrc: 'https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json'
                }
            ]
        },
        projects: {
            title: 'Selected Work',
            subtitle: 'Crafted with passion and precision',
            viewProject: 'View Project →',
            items: [
                {
                    title: 'Jualikan - Fish Marketplace',
                    description: 'E-commerce platform for fish trading with comprehensive marketplace features. Built with PHP framework for reliable performance and user-friendly interface.'
                },
                {
                    title: 'Room Booking System',
                    description: 'Digital room reservation system for efficient space management. Features real-time availability, booking management, and administrative controls.'
                },
                {
                    title: 'Library Management System',
                    description: 'Comprehensive library management solution with book cataloging, member management, and borrowing system. Streamlines library operations efficiently.'
                },
                {
                    title: 'SAW-Raskin Decision Support',
                    description: 'Decision support system using Simple Additive Weighting (SAW) method for Raskin distribution. Helps optimize resource allocation for government programs.'
                },
                {
                    title: 'Modern React App with Deno',
                    description: 'Experimental project exploring modern development stack with Deno runtime, React TypeScript, and Vite. Showcases cutting-edge web development practices.'
                },
                {
                    title: 'HMJ TI Website',
                    description: 'Official website for Computer Science Student Association at SMTIK Akakom Yogyakarta. Features student information, events, and academic resources.'
                }
            ]
        },
        contact: {
            title: "Let's Connect",
            subtitle: 'Ready to bring your ideas to life',
            getInTouch: 'Get In Touch',
            description: "I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together.",
            email: 'Email',
            location: 'Location',
            form: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                send: 'Send Message',
                successMessage: 'Thanks {name}! Your message has been received. I will get back to you soon.'
            }
        },
        footer: {
            copyright: '© 2025 Muh Fariza. Crafted with passion.'
        },
        settings: {
            language: 'Language',
            theme: 'Theme',
            dark: 'Dark',
            light: 'Light'
        }
    },
    id: {
        navigation: {
            home: 'Beranda',
            work: 'Pengalaman',
            education: 'Pendidikan',
            projects: 'Proyek',
            contact: 'Kontak',
        },
        home: {
            name: 'Muh Fariza',
            title: 'Fullstack Developer',
            viewWork: 'Lihat Project Saya',
            getInTouch: 'Hubungi Saya →',
        },
        work: {
            title: 'Pengalaman',
            subtitle: 'Perjalanan profesional saya',
            experience: [
                {
                    title: 'Software Engineer',
                    company: 'TSM Technology',
                    period: '2022 - Sekarang',
                    description: 'Mengembangkan aplikasi web full-stack menggunakan React.js, TypeScript, Next.js, dan Svelte untuk pengembangan frontend. Keahlian backend meliputi Express.js dan Golang. Mahir dalam layanan AWS termasuk DynamoDB, Cognito, IAM, dan Amplify untuk solusi cloud yang scalable. Berbasis di Jakarta Barat.',
                    animationSrc: 'https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json'
                },
                {
                    title: 'Freelance Fullstack Developer',
                    company: 'Multiple Clients',
                    period: '2019 - Sekarang',
                    description: 'Mengembangkan aplikasi web untuk berbagai klien termasuk Akses Bayar, Semen Gresik Indonesia, dan Loadgic. Spesialisasi dalam aplikasi PHP, framework Laravel dan CodeIgniter, React dengan TypeScript, Next.js, dan praktik pengembangan web modern.',
                    animationSrc: 'https://assets4.lottiefiles.com/packages/lf20_fcfjwiyb.json'
                },
                {
                    title: 'IT Consultant',
                    company: 'Dinas PUP ESDM Provinsi DIY',
                    period: '2021 - 2022',
                    description: 'Mendokumentasikan 31 sistem irigasi provinsi, memetakan jaringan saluran primer, sekunder, dan tersier. Mengatur dan memelihara infrastruktur jaringan dalam lingkungan departemen. Berkontribusi pada inisiatif digitalisasi pemerintah.',
                    animationSrc: 'https://assets3.lottiefiles.com/packages/lf20_qmfs6c3i.json'
                }
            ]
        },
        education: {
            title: 'Pendidikan',
            subtitle: 'Pembelajaran tidak pernah berhenti',
            items: [
                {
                    title: 'Sarjana Ilmu Komputer',
                    institution: 'STMIK Akakom Yogyakarta',
                    period: '2017 - 2021',
                    description: 'Spesialisasi di Rekayasa Perangkat Lunak dan Pengembangan Web. Mendapatkan dasar yang kuat dalam bahasa pemrograman, algoritma, struktur data, dan metodologi pengembangan modern.',
                    animationSrc: 'https://assets5.lottiefiles.com/packages/lf20_9wpyhdzo.json'
                },
                {
                    title: 'Lulus SMK',
                    institution: 'SMKN Negeri 3 Palu',
                    period: '2015 - 2017',
                    description: 'Program dukungan TI komprehensif mencakup pengembangan website, pemrograman assembly, C++, infrastruktur jaringan dengan Mikrotik, jaringan Cisco, dan solusi wireless Ubiquiti.',
                    animationSrc: 'https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json'
                }
            ]
        },
        projects: {
            title: 'Proyek Pilihan',
            subtitle: 'Dibuat dengan passion dan presisi',
            viewProject: 'Lihat Proyek →',
            items: [
                {
                    title: 'Jualikan - Marketplace Ikan',
                    description: 'Platform e-commerce untuk perdagangan ikan dengan fitur marketplace yang komprehensif. Dibangun dengan framework PHP untuk performa yang handal dan antarmuka yang user-friendly.'
                },
                {
                    title: 'Sistem Peminjaman Ruangan',
                    description: 'Sistem reservasi ruangan digital untuk manajemen ruang yang efisien. Menampilkan ketersediaan real-time, manajemen booking, dan kontrol administratif.'
                },
                {
                    title: 'Sistem Manajemen Perpustakaan',
                    description: 'Solusi manajemen perpustakaan komprehensif dengan katalog buku, manajemen anggota, dan sistem peminjaman. Menyederhanakan operasi perpustakaan secara efisien.'
                },
                {
                    title: 'Sistem Pendukung Keputusan SAW-Raskin',
                    description: 'Sistem pendukung keputusan menggunakan metode Simple Additive Weighting (SAW) untuk distribusi Raskin. Membantu mengoptimalkan alokasi sumber daya untuk program pemerintah.'
                },
                {
                    title: 'Aplikasi React Modern dengan Deno',
                    description: 'Proyek eksperimental yang mengeksplorasi stack pengembangan modern dengan runtime Deno, React TypeScript, dan Vite. Menampilkan praktik pengembangan web terdepan.'
                },
                {
                    title: 'Website HMJ TI',
                    description: 'Website resmi untuk Himpunan Mahasiswa Jurusan Teknik Informatika SMTIK Akakom Yogyakarta. Menampilkan informasi mahasiswa, acara, dan sumber daya akademik.'
                }
            ]
        },
        contact: {
            title: 'Mari Terhubung',
            subtitle: 'Siap mewujudkan ide Anda',
            getInTouch: 'Hubungi Saya',
            description: 'Saya selalu tertarik dengan peluang baru dan proyek menarik. Mari diskusikan bagaimana kita bisa bekerja sama.',
            email: 'Email',
            location: 'Lokasi',
            form: {
                name: 'Nama',
                email: 'Email',
                subject: 'Subjek',
                message: 'Pesan',
                send: 'Kirim Pesan',
                successMessage: 'Terima kasih {name}! Pesan Anda telah diterima. Saya akan segera menghubungi Anda.'
            }
        },
        footer: {
            copyright: '© 2025 Muh Fariza. Dibuat dengan passion.'
        },
        settings: {
            language: 'Bahasa',
            theme: 'Tema',
            dark: 'Gelap',
            light: 'Terang'
        }
    }
};

// Helper function to get translation
export function t(key, lang = 'en') {
    return translations[lang]?.[key] || translations.en[key] || key;
}
