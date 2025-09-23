import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, Building, Code, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

export function ExperienceSection() {
  const { t } = useLanguage();

  const experienceData = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Docker"],
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      icon: Code
    },
    {
      title: "Frontend Developer",
      company: "StartupX",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Developed responsive web applications and mobile-first designs. Collaborated with UX/UI designers to create seamless user experiences.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Figma", "Git", "Jest"],
      achievements: [
        "Built 3 major product features from scratch",
        "Improved user engagement by 25%",
        "Reduced bundle size by 30%"
      ],
      icon: Rocket
    },
    {
      title: "Web Developer Intern",
      company: "Digital Agency Pro",
      period: "2020 - 2021",
      type: "Internship",
      description: "Assisted in developing client websites and learning modern web development practices. Gained experience in project management and client communication.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
      achievements: [
        "Completed 10+ client projects",
        "Learned agile development methodology",
        "Received outstanding intern award"
      ],
      icon: Users
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "2019 - 2020",
      type: "Freelance",
      description: "Worked on various web development projects for small businesses and startups. Specialized in custom WordPress themes and e-commerce solutions.",
      technologies: ["WordPress", "WooCommerce", "PHP", "jQuery", "Bootstrap"],
      achievements: [
        "Delivered 15+ successful projects",
        "Maintained 98% client satisfaction rate",
        "Built long-term client relationships"
      ],
      icon: Briefcase
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="h-screen bg-gradient-to-b from-blue-50/20 dark:from-blue-950/20 to-background">
      <div className="section-scroll-container h-full overflow-y-auto py-8 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center min-h-full">
          <div className="container mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/50 dark:to-cyan-900/50 mb-6 shadow-lg"
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-center">
                {t('experience_title')}
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                {t('experience_description')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              {experienceData.map((experience, index) => {
                const IconComponent = experience.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-2 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                            {/* Icon and Timeline */}
                            <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
                              <motion.div
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/50 dark:to-cyan-900/50 shadow-md"
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                <IconComponent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                              </motion.div>
                              
                              <div className="flex lg:flex-col items-center lg:items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                                <motion.div
                                  className="flex items-center gap-1"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                  <span className="text-xs sm:text-sm">{experience.period}</span>
                                </motion.div>
                                <motion.div
                                  className="flex items-center gap-1"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                                  <span className="text-xs sm:text-sm">{experience.type}</span>
                                </motion.div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-3 sm:space-y-4">
                              <div>
                                <motion.h3
                                  className="text-lg sm:text-xl lg:text-2xl mb-1"
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                >
                                  {experience.title}
                                </motion.h3>
                                
                                <motion.p
                                  className="text-purple-600 dark:text-purple-400 text-base sm:text-lg font-medium"
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  {experience.company}
                                </motion.p>
                              </div>

                              <motion.p
                                className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                              >
                                {experience.description}
                              </motion.p>

                              {/* Technologies */}
                              <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                <h4 className="text-xs sm:text-sm mb-2 text-muted-foreground">Technologies:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {experience.technologies.map((tech, techIndex) => (
                                    <motion.div
                                      key={techIndex}
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 0.6 + techIndex * 0.05 }}
                                      whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                      <Badge variant="outline" className="text-xs">
                                        {tech}
                                      </Badge>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>

                              {/* Achievements */}
                              <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                              >
                                <h4 className="text-xs sm:text-sm mb-2 text-muted-foreground">Key Achievements:</h4>
                                <ul className="space-y-1">
                                  {experience.achievements.map((achievement, achievementIndex) => (
                                    <motion.li
                                      key={achievementIndex}
                                      className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
                                      initial={{ opacity: 0, x: -10 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.8 + achievementIndex * 0.1 }}
                                      whileHover={{ x: 5 }}
                                    >
                                      <motion.span
                                        className="text-purple-500 dark:text-purple-400 mt-1.5 block w-1 h-1 rounded-full bg-purple-500 dark:bg-purple-400 flex-shrink-0"
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: achievementIndex * 0.5 }}
                                      />
                                      {achievement}
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Connecting Line */}
                    {index < experienceData.length - 1 && (
                      <motion.div
                        className="absolute left-6 top-full w-0.5 h-6 sm:h-8 bg-gradient-to-b from-purple-500/50 to-transparent"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ delay: 0.5 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-500/20 dark:bg-purple-400/20 rounded-full"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 10, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}