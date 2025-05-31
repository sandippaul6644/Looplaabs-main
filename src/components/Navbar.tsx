import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'Services', href: '#services' },
  { title: 'Clients', href: '#clients' },
  { title: 'Team', href: '#team' },
  { title: 'Career', href: '#career' },
  { title: 'Contact', href: '#contact' },
  { title: 'About', href: '#about' },
];

const looplabsVariants = {
  initial: {
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  },
  animateToCenter: {
    x: '50vw',
    y: '50vh',
    translateX: '-50%',
    translateY: '-50%',
    scale: 1.5,
    rotate: 360 * 5, // 5 full spins
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
  returnToNav: {
    x: 0,
    y: 0,
    translateX: '0%',
    translateY: '0%',
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
};

const goldPartnerVariants = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  rotateAnim: {
    rotate: 360 * 5,
    scale: 1.2,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
  returnToNormal: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // 3D rotation on hover
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLSpanElement>(null);

  // Animation controls for LOOPLABS and Gold Partner
  const looplabsControls = useAnimation();
  const goldPartnerControls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = textRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 20).toFixed(2);
    const rotateY = (x / 20).toFixed(2);

    setRotation({ x: parseFloat(rotateX), y: parseFloat(rotateY) });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    window.addEventListener('scroll', handleScroll);

    // Run the sequential animation:
    async function runAnimations() {
      await looplabsControls.start('animateToCenter');
      await looplabsControls.start('returnToNav');

      await goldPartnerControls.start('rotateAnim');
      await goldPartnerControls.start('returnToNormal');
    }
    runAnimations();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [looplabsControls, goldPartnerControls]);

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
              <img src="/logo.jpeg" alt="LoopLabs Logo" className="h-12 w-12" />
              <div className="flex items-center space-x-2" style={{ perspective: '1000px' }}>
               <motion.span
  ref={textRef}
  className="text-5xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500 cursor-pointer"
  variants={looplabsVariants}
  initial="initial"
  animate={looplabsControls}
  onMouseEnter={async () => {
    await looplabsControls.start('animateToCenter');
    await looplabsControls.start('returnToNav');

    await goldPartnerControls.start('rotateAnim');
    await goldPartnerControls.start('returnToNormal');
  }}
  onMouseMove={handleMouseMove}
  onMouseLeave={resetRotation}
  style={{
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transformStyle: 'preserve-3d',
    transition: 'transform 0.2s ease-out',
  }}
>
  LOOPLABS
</motion.span>
                <span className="text-5xl font-bold text-gold-500">∞</span>
                <motion.a
                  href="https://www.hungrytop.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col text-gold-500 font-medium text-sm leading-tight cursor-pointer hover:text-primary-500"
                  variants={goldPartnerVariants}
                  initial="initial"
                  animate={goldPartnerControls}
                >
                  <span>GOLD PARTNER</span>
                  <span>WITH HUNGRYTOP</span>
                </motion.a>
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
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
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
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
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
