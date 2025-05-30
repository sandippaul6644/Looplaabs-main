import React from 'react';
import { motion } from 'framer-motion';
import Scene from '../3d/Scene';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene count={5} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.span 
              className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Innovative Technology Solutions
            </motion.span>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Building the <span className="gradient-text">Future</span> of Technology
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              We create custom software solutions and digital marketing strategies that transform businesses in the digital era.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a href="#contact" className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-300 text-center">
                Get Started
              </a>
              <a href="#services" className="px-8 py-3 bg-white dark:bg-secondary-800 text-primary-600 dark:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-full border border-secondary-200 dark:border-secondary-700 transition-colors duration-300 text-center">
                Our Services
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4
            }}
            className="hidden md:block relative h-[500px]"
          >
            {/* This is a placeholder for a 3D model or animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Technology concept" 
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-secondary-600 dark:text-secondary-400 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-secondary-400 dark:border-secondary-600 rounded-full flex justify-center">
              <motion.div 
                className="w-1.5 h-1.5 bg-secondary-600 dark:bg-secondary-400 rounded-full mt-2"
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;