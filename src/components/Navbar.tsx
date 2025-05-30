import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About Us', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Team', href: '#team' },
  { title: 'Clients', href: '#clients' },
  { title: 'Career', href: '#career' },
  { title: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initialize theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-4">
              <img 
                src="/IMG-20250426-WA0016.jpg" 
                alt="LoopLabs Logo" 
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500 transform hover:scale-105 transition-transform duration-300">
                  LOOPLABS
                </span>
                <span className="text-xs text-gold-500 font-medium">
                  GOLD PARTNER WITH HUNGRYTOP
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} className="nav-link">
                {link.title}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <a
              href="#contact"
              className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-800 dark:text-secondary-200 focus:outline-none"
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-secondary-900 border-t border-secondary-100 dark:border-secondary-800"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="block py-2 text-secondary-800 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-300 text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;