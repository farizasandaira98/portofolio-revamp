import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import profileImage from 'figma:asset/2287f649485cc1fcedbe66d2c5b397ab2888a8d2.png';

interface HeroSectionProps {
  onSectionClick: (section: string) => void;
}

export function HeroSection({ onSectionClick }: HeroSectionProps) {
  const { t } = useLanguage();

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const iconHoverAnimation = {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-blue-50/30 dark:via-blue-950/30 to-background px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
          >
            <motion.div
              animate={floatingAnimation}
              className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1 shadow-2xl shadow-blue-500/25"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
            
            {/* Orbital Elements */}
            {[0, 120, 240].map((rotation, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 10 + index * 2, repeat: Infinity, ease: "linear" }}
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full -translate-x-1/2 shadow-lg shadow-blue-500/25" />
              </motion.div>
            ))}
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4 sm:space-y-6 max-w-5xl mx-auto"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 100%" }}
            >
              <span className="block break-words hyphens-auto">
                {t('hero_title')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed break-words hyphens-auto"
            >
              {t('hero_subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed break-words hyphens-auto"
            >
              {t('hero_description')}
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2 sm:px-4 max-w-lg mx-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-blue-500/25 min-h-[3rem]"
              onClick={() => onSectionClick('work')}
            >
              <motion.span
                className="relative z-10 flex items-center gap-2 px-2"
                whileHover={{ y: -2 }}
              >
                <span className="break-words text-center">{t('projects')}</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto group min-h-[3rem]"
            >
              <Download className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="break-words text-center">{t('download_cv')}</span>
              <motion.div
                className="ml-2 flex-shrink-0"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↓
              </motion.div>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center space-x-4 sm:space-x-6 pt-6 sm:pt-8"
          >
            {[
              { Icon: Github, color: "hover:text-gray-600" },
              { Icon: Linkedin, color: "hover:text-blue-600" },
              { Icon: Mail, color: "hover:text-green-600" },
            ].map(({ Icon, color }, index) => (
              <motion.a
                key={index}
                href="#"
                className={`p-3 rounded-full bg-accent/50 text-muted-foreground transition-colors duration-300 ${color}`}
                whileHover={iconHoverAnimation}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>


        </div>
      </div>
    </section>
  );
}