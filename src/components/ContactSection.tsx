import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Github, Instagram } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export function ContactSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@yourportfolio.com',
      href: 'mailto:hello@yourportfolio.com',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 123 456 7890',
      href: 'tel:+621234567890',
      color: 'text-purple-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jakarta, Indonesia',
      href: '#',
      color: 'text-cyan-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com',
      color: 'hover:text-pink-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/621234567890',
      color: 'hover:text-green-600'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="h-screen bg-gradient-to-b from-blue-50/20 dark:from-blue-950/20 to-background relative overflow-hidden">
      <div className="section-scroll-container h-full overflow-y-auto py-8 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center min-h-full">
          {/* Background Animation */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500/10 dark:bg-blue-400/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  opacity: [0.1, 0.5, 0.1],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 mb-6 shadow-lg"
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-center">
                {t('contact_title')}
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                {t('contact_description')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
            >
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="flex flex-col h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="border-2 hover:border-blue-500/50 transition-all duration-300 bg-card/50 backdrop-blur-sm shadow-lg h-full">
                    <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                      >
                        <h3 className="text-xl sm:text-2xl mb-4">{t('get_in_touch')}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          I'm always interested in hearing about new opportunities and exciting projects. 
                          Whether you have a question or just want to say hi, feel free to reach out!
                        </p>
                      </motion.div>

                      {/* Contact Info Cards */}
                      <div className="space-y-4 mb-8 flex-grow">
                        {contactInfo.map((contact, index) => {
                          const IconComponent = contact.icon;
                          return (
                            <motion.a
                              key={index}
                              href={contact.href}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ x: 5, scale: 1.01 }}
                              className="block group"
                            >
                              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 border border-border/50 hover:border-blue-400/50 transition-all duration-300 group-hover:shadow-md">
                                <motion.div
                                  className={`p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800/50 dark:to-purple-800/50 ${contact.color} shadow-md`}
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                  <IconComponent className="w-5 h-5" />
                                </motion.div>
                                <div>
                                  <h4 className="font-medium mb-1">{contact.label}</h4>
                                  <p className="text-muted-foreground text-sm sm:text-base">{contact.value}</p>
                                </div>
                              </div>
                            </motion.a>
                          );
                        })}
                      </div>

                      {/* Social Links */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-auto"
                      >
                        <h4 className="text-lg mb-4 text-center">Connect with me</h4>
                        <div className="grid grid-cols-4 gap-3">
                          {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                              <motion.a
                                key={index}
                                href={social.href}
                                className={`p-4 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-muted-foreground transition-all duration-300 ${social.color} shadow-md hover:shadow-lg flex items-center justify-center group`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                              >
                                <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                              </motion.a>
                            );
                          })}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants} className="flex flex-col h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="border-2 hover:border-blue-500/50 transition-all duration-300 bg-card/50 backdrop-blur-sm shadow-lg h-full">
                    <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                      <motion.h3
                        className="text-xl sm:text-2xl mb-6 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Send me a message
                      </motion.h3>

                      <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Label htmlFor="name">{t('name')}</Label>
                          <motion.div whileFocus={{ scale: 1.01 }}>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Your name"
                              required
                              className="mt-1 border-2 focus:border-blue-400 transition-colors"
                            />
                          </motion.div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Label htmlFor="email">{t('email')}</Label>
                          <motion.div whileFocus={{ scale: 1.01 }}>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your.email@example.com"
                              required
                              className="mt-1 border-2 focus:border-blue-400 transition-colors"
                            />
                          </motion.div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex-grow flex flex-col"
                        >
                          <Label htmlFor="message">{t('message')}</Label>
                          <motion.div whileFocus={{ scale: 1.01 }} className="flex-grow">
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Tell me about your project..."
                              required
                              className="mt-1 resize-none h-full min-h-[120px] border-2 focus:border-blue-400 transition-colors"
                            />
                          </motion.div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="mt-auto"
                        >
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow"
                          >
                            <motion.span
                              className="relative z-10 flex items-center justify-center gap-2"
                              whileHover={{ x: -2 }}
                            >
                              <Send className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                              {t('send_message')}
                            </motion.span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                            />
                          </Button>
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center mt-12 sm:mt-16 max-w-4xl mx-auto"
            >
              <motion.div
                className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-100/60 via-purple-50/60 to-cyan-100/60 dark:from-blue-900/40 dark:via-purple-900/40 dark:to-cyan-900/40 border border-border/50 shadow-xl backdrop-blur-sm overflow-hidden"
                whileHover={{ scale: 1.01, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Decorative background elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
                      style={{
                        width: `${20 + Math.random() * 40}px`,
                        height: `${20 + Math.random() * 40}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl sm:text-3xl mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    style={{
                      backgroundSize: "200% auto",
                    }}
                  >
                    Ready to start your project?
                  </motion.h3>
                  
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                    Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Button 
                        size="lg" 
                        className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 px-8 py-3 text-lg min-w-[160px]"
                      >
                        <motion.span 
                          className="relative z-10 flex items-center justify-center gap-3"
                          whileHover={{ x: -2 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <motion.span
                            className="font-medium"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            Let's Talk
                          </motion.span>
                          <motion.div
                            className="text-xl flex items-center"
                            animate={{ 
                              x: [0, 3, 0],
                              rotate: [0, 5, 0] 
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            whileHover={{ 
                              x: 6,
                              rotate: 12,
                              scale: 1.2,
                              transition: { 
                                type: "spring", 
                                stiffness: 400, 
                                damping: 10 
                              }
                            }}
                          >
                            →
                          </motion.div>
                        </motion.span>
                        
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: "-100%", skewX: -20 }}
                          whileHover={{ 
                            x: "100%",
                            transition: { 
                              duration: 0.8,
                              ease: "easeInOut"
                            }
                          }}
                        />
                        
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 blur-sm"
                          whileHover={{ 
                            scale: 1.1,
                            opacity: 0.8,
                            transition: { 
                              duration: 0.3 
                            }
                          }}
                        />
                      </Button>
                    </motion.div>
                    
                    <motion.div 
                      className="text-sm text-muted-foreground flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      Available for new projects
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}