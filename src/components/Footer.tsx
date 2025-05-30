import React from 'react';
import { Infinity as InfinityIcon, Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-100 dark:bg-secondary-900">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <InfinityIcon className="h-8 w-8 text-primary-600" strokeWidth={2.5} />
              <span className="text-xl font-bold">LoopLabs</span>
            </div>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              We create innovative software solutions and digital marketing strategies that help businesses thrive in the digital era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#team" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">Team</a></li>
              <li><a href="#career" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">Career</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">Custom Software</a></li>
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">Mobile Applications</a></li>
              <li><a href="#services" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-600 dark:text-secondary-400"> M147 PATULI KOLKATA 700094</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-600 flex-shrink-0" />
                <span className="text-secondary-600 dark:text-secondary-400">+91 7718175157</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-600 flex-shrink-0" />
                <a
                  href="mailto:looplabstechnology@gmail.com"
                  className="text-secondary-600 dark:text-secondary-400 hover:underline"
                >
                  looplabstechnology@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-200 dark:border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-600 dark:text-secondary-400 text-sm">
              &copy; {currentYear} LoopLabs Technology Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;