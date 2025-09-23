import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Home, ArrowLeft } from 'lucide-react';
import Lottie from 'lottie-react';
import astronautAnimation from '../assets/astronaut-with-space-shuttle.json';

export function NotFoundPage() {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-blue-50/30 dark:via-blue-950/30 to-background px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map(() => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDelay = Math.random() * 2;
          return (
            <motion.div
              key={`bg-element-${randomX}-${randomY}-${randomDelay}`}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: randomDelay,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
          {/* Astronaut Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            <motion.div
              animate={{
              y: [0, -10, 0],
              transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
              }
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <Lottie 
              animationData={astronautAnimation} 
              loop={true}
              autoplay={true}
              // className={"w-20 h-20"} 
              style={{ width: '300px', height: '300px' }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4 sm:space-y-6 max-w-5xl mx-auto"
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold leading-tight"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              404
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80"
            >
              Lost in Space
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Our astronaut is exploring the cosmos, but the page you're looking for seems to have drifted into another galaxy.
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleGoHome}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              size="lg"
              className="px-8 py-3 text-lg font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
