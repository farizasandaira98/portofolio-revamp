import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  LanguageToggleLottie, 
  ThemeToggleLottie, 
  MenuToggleLottie,
  FloatingLottieWrapper 
} from './LottieAnimations';
import { NavLogoLottie } from './LogoLottie';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const [isMenuTransitioning, setIsMenuTransitioning] = useState(false);
  const [isLanguageActive, setIsLanguageActive] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'education', label: t('education') },
    { id: 'experience', label: t('experience') },
    { id: 'work', label: t('work') },
    { id: 'contact', label: t('contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[9999] backdrop-blur-xl bg-white/5 dark:bg-black/5 border-b border-white/10 dark:border-white/5 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLogoLottie 
            isDark={theme === 'dark'}
            onClick={() => onSectionClick('home')}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onSectionClick(item.id)}
                className={`relative px-3 py-2 transition-colors duration-200 ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle with Lottie */}
            <motion.button
              onClick={() => {
                setIsLanguageActive(true);
                setTimeout(() => setIsLanguageActive(false), 800);
                toggleLanguage();
              }}
              onHoverStart={() => setIsLanguageActive(true)}
              onHoverEnd={() => setIsLanguageActive(false)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-accent/50 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-primary/20"
            >
              <FloatingLottieWrapper isActive={isLanguageActive}>
                <LanguageToggleLottie
                  isActive={isLanguageActive}
                  isDark={theme === 'dark'}
                  language={language}
                />
              </FloatingLottieWrapper>
            </motion.button>

            {/* Theme Toggle with Lottie */}
            <motion.button
              onClick={() => {
                setIsThemeTransitioning(true);
                setTimeout(() => setIsThemeTransitioning(false), 600);
                toggleTheme();
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-accent/50 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-primary/20"
            >
              <FloatingLottieWrapper isActive={isThemeTransitioning}>
                <ThemeToggleLottie
                  theme={theme}
                  isTransitioning={isThemeTransitioning}
                />
              </FloatingLottieWrapper>
            </motion.button>

            {/* Mobile Menu Button with Lottie */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-primary/20"
              onClick={() => {
                setIsMenuTransitioning(true);
                setTimeout(() => setIsMenuTransitioning(false), 400);
                setIsMenuOpen(!isMenuOpen);
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FloatingLottieWrapper isActive={isMenuTransitioning || isMenuOpen}>
                <MenuToggleLottie
                  isOpen={isMenuOpen}
                  isTransitioning={isMenuTransitioning}
                  isDark={theme === 'dark'}
                />
              </FloatingLottieWrapper>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/10 dark:border-white/5"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    onSectionClick(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-colors duration-200 ${
                    activeSection === item.id ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                  }`}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}