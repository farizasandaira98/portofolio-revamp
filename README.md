
# Muh Fariza - Fullstack Developer Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Vite. Features bilingual support (English/Indonesian), dark/light theme, and smooth animations.

## 🚀 Features

- **Bilingual Support**: English and Indonesian language switching
- **Responsive Design**: Mobile-first approach with modern UI
- **Dark/Light Theme**: Automatic theme switching with user preference
- **SEO Optimized**: Comprehensive SEO setup with meta tags, Open Graph, and structured data
- **Smooth Animations**: Framer Motion powered animations
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **Animations**: Framer Motion
- **State Management**: React Context
- **Build Tool**: Vite

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔍 SEO Setup

The project includes comprehensive SEO optimization:

### Meta Tags
- Title, description, and keywords
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Canonical URLs
- Structured data (JSON-LD) for search engines

### Required Assets (Place in `/public` directory)

1. **Favicon**: `favicon.ico` - Your website favicon
2. **OG Image**: `og-image.jpg` - Open Graph image (1200x630px recommended)
   - Used for social media previews
   - Should showcase your portfolio/brand

### SEO Data Configuration

SEO data is configured in `src/data/seo.json`:
- Site information (name, title, description)
- Keywords for search engines
- Author information and social links
- Structured data for rich snippets

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── SEO.tsx         # SEO management component
│   ├── Navigation.tsx  # Main navigation
│   └── ...
├── contexts/           # React contexts
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── data/              # JSON data files
│   ├── seo.json       # SEO configuration
│   ├── home.json      # Home section data
│   └── ...
└── assets/            # Static assets
```

## 🌐 Deployment

The project is configured for static site deployment. Build the project and deploy the `dist` folder.

```bash
npm run build
```

## 📄 License

This project is private and proprietary.

---

**Original Design**: [Interactive Portfolio Design on Figma](https://www.figma.com/design/bgX9vMh1wBBNnCABumUkfG/Interactive-Portfolio-Design)  