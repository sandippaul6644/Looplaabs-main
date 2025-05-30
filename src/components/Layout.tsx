import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatePresence, motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-secondary-950 flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-4xl font-bold gradient-text"
            >
              LoopLabs
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      
      <Navbar />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;