import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mouse } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sections = [
    { id: 'home', component: HeroSection, title: 'Home' },
    { id: 'education', component: EducationSection, title: 'Education' },
    { id: 'experience', component: ExperienceSection, title: 'Experience' },
    { id: 'work', component: WorkSection, title: 'Work' },
    { id: 'contact', component: ContactSection, title: 'Contact' }
  ];

  // Navigate to section function with smooth transition
  const navigateToSection = (sectionId: string) => {
    const sectionIndex = sections.findIndex(section => section.id === sectionId);
    if (sectionIndex !== -1 && sectionIndex !== activeSection) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSection(sectionIndex);
        setIsTransitioning(false);
      }, 150);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        const nextSection = activeSection < sections.length - 1 ? activeSection + 1 : activeSection;
        if (nextSection !== activeSection) {
          setIsTransitioning(true);
          setTimeout(() => {
            setActiveSection(nextSection);
            setIsTransitioning(false);
          }, 150);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevSection = activeSection > 0 ? activeSection - 1 : activeSection;
        if (prevSection !== activeSection) {
          setIsTransitioning(true);
          setTimeout(() => {
            setActiveSection(prevSection);
            setIsTransitioning(false);
          }, 150);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, isTransitioning, sections.length]);

  // Handle wheel/trackpad scrolling with intelligent section detection
  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling || isTransitioning) return;
      
      // Find the active section's scrollable container
      const currentSectionElement = document.querySelector(`[data-section-id="${sections[activeSection].id}"]`);
      if (!currentSectionElement) return;

      const scrollableContainer = currentSectionElement.querySelector('.section-scroll-container') || currentSectionElement;
      
      // Check if the container is scrollable
      const isScrollableContent = scrollableContainer.scrollHeight > scrollableContainer.clientHeight;
      
      if (isScrollableContent) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
        const isAtTop = scrollTop <= 1;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
        
        if (e.deltaY > 0) {
          // Scrolling down
          if (isAtBottom) {
            // At bottom of section, navigate to next section
            e.preventDefault();
            isScrolling = true;
            const nextSection = activeSection < sections.length - 1 ? activeSection + 1 : activeSection;
            if (nextSection !== activeSection) {
              setIsTransitioning(true);
              setTimeout(() => {
                setActiveSection(nextSection);
                setIsTransitioning(false);
              }, 150);
            }
            setTimeout(() => { isScrolling = false; }, 800);
          }
          // Otherwise allow normal scrolling within section
        } else if (e.deltaY < 0) {
          // Scrolling up
          if (isAtTop) {
            // At top of section, navigate to previous section
            e.preventDefault();
            isScrolling = true;
            const prevSection = activeSection > 0 ? activeSection - 1 : activeSection;
            if (prevSection !== activeSection) {
              setIsTransitioning(true);
              setTimeout(() => {
                setActiveSection(prevSection);
                setIsTransitioning(false);
              }, 150);
            }
            setTimeout(() => { isScrolling = false; }, 800);
          }
          // Otherwise allow normal scrolling within section
        }
      } else {
        // No scrollable content, navigate sections normally
        e.preventDefault();
        isScrolling = true;
        
        if (e.deltaY > 0) {
          // Scroll down
          const nextSection = activeSection < sections.length - 1 ? activeSection + 1 : activeSection;
          if (nextSection !== activeSection) {
            setIsTransitioning(true);
            setTimeout(() => {
              setActiveSection(nextSection);
              setIsTransitioning(false);
            }, 150);
          }
        } else if (e.deltaY < 0) {
          // Scroll up
          const prevSection = activeSection > 0 ? activeSection - 1 : activeSection;
          if (prevSection !== activeSection) {
            setIsTransitioning(true);
            setTimeout(() => {
              setActiveSection(prevSection);
              setIsTransitioning(false);
            }, 150);
          }
        }
        
        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSection, isTransitioning, sections.length]);

  // Touch handling for mobile devices with intelligent section detection
  useEffect(() => {
    let startY = 0;
    let startTime = 0;
    let initialScrollTop = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startTime = Date.now();
      
      // Store initial scroll position
      const currentSectionElement = document.querySelector(`[data-section-id="${sections[activeSection].id}"]`);
      if (currentSectionElement) {
        const scrollableContainer = currentSectionElement.querySelector('.section-scroll-container') || currentSectionElement;
        initialScrollTop = scrollableContainer.scrollTop;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      const endY = e.changedTouches[0].clientY;
      const endTime = Date.now();
      const deltaY = startY - endY;
      const deltaTime = endTime - startTime;

      // Check if this was a quick swipe gesture (not a scroll within content)
      const isQuickSwipe = Math.abs(deltaY) > 80 && deltaTime < 300;
      
      if (isQuickSwipe) {
        // Find the active section's scrollable container
        const currentSectionElement = document.querySelector(`[data-section-id="${sections[activeSection].id}"]`);
        if (currentSectionElement) {
          const scrollableContainer = currentSectionElement.querySelector('.section-scroll-container') || currentSectionElement;
          const isScrollableContent = scrollableContainer.scrollHeight > scrollableContainer.clientHeight;
          
          if (isScrollableContent) {
            const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
            const isAtTop = scrollTop <= 1;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
            
            // Only navigate if at the edge of scrollable content
            if (deltaY > 0 && isAtBottom) {
              // Swipe up at bottom (next section)
              const nextSection = activeSection < sections.length - 1 ? activeSection + 1 : activeSection;
              if (nextSection !== activeSection) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setActiveSection(nextSection);
                  setIsTransitioning(false);
                }, 150);
              }
            } else if (deltaY < 0 && isAtTop) {
              // Swipe down at top (previous section)
              const prevSection = activeSection > 0 ? activeSection - 1 : activeSection;
              if (prevSection !== activeSection) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setActiveSection(prevSection);
                  setIsTransitioning(false);
                }, 150);
              }
            }
          } else {
            // No scrollable content, navigate normally
            if (deltaY > 0) {
              const nextSection = activeSection < sections.length - 1 ? activeSection + 1 : activeSection;
              if (nextSection !== activeSection) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setActiveSection(nextSection);
                  setIsTransitioning(false);
                }, 150);
              }
            } else {
              const prevSection = activeSection > 0 ? activeSection - 1 : activeSection;
              if (prevSection !== activeSection) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setActiveSection(prevSection);
                  setIsTransitioning(false);
                }, 150);
              }
            }
          }
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeSection, isTransitioning, sections.length]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="h-screen overflow-hidden bg-background text-foreground relative">
          {/* Navigation */}
          <Navigation 
            activeSection={sections[activeSection].id} 
            onSectionClick={navigateToSection} 
          />

          {/* Main Content Container */}
          <main className="h-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ 
                  opacity: 0,
                  y: 50,
                  scale: 0.95
                }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                exit={{ 
                  opacity: 0,
                  y: -50,
                  scale: 1.05
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.6 }
                }}
                className="absolute inset-0 w-full h-full"
                data-section-id={sections[activeSection].id}
              >
                {(() => {
                  const CurrentComponent = sections[activeSection].component;
                  return sections[activeSection].id === 'home' ? (
                    <CurrentComponent onSectionClick={navigateToSection} />
                  ) : (
                    <CurrentComponent />
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Section Navigation Dots */}
          <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-[9998] hidden md:flex flex-col gap-3">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => navigateToSection(section.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSection
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
                whileHover={{ scale: index === activeSection ? 1.25 : 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="sr-only">{section.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Section Indicator */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9998] md:hidden">
            <div className="flex gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeSection 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500' 
                      : 'bg-muted-foreground/30'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                />
              ))}
            </div>
          </div>

          {/* Scroll Hint */}
          {activeSection < sections.length - 1 && (
            <motion.div
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[9997] text-center text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="hidden md:block text-sm mb-2"
              >
                Scroll or use arrow keys
              </motion.div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex justify-center"
              >
                <Mouse className="w-6 h-6" />
              </motion.div>
            </motion.div>
          )}

          {/* Background gradient overlay with cosmic blue-purple theme */}
          <div className="fixed inset-0 bg-gradient-to-br from-background via-transparent to-blue-50/20 dark:to-blue-950/20 pointer-events-none z-[-2]" />
          
          {/* Animated background elements */}
          <div className="fixed inset-0 pointer-events-none z-[-1]">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 2 === 0 
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(147, 51, 234, 0.3))'
                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))'
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                }}
              />
            ))}
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}