import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, ChevronRight } from 'lucide-react';

const openPositions = [
  {
    title: 'Senior Frontend Developer',
    type: 'Full-time',
    location: 'Remote / San Francisco, CA',
    link: '#apply'
  },
  {
    title: 'UX/UI Designer',
    type: 'Full-time',
    location: 'San Francisco, CA',
    link: '#apply'
  },
  {
    title: 'Digital Marketing Specialist',
    type: 'Full-time',
    location: 'Remote / New York, NY',
    link: '#apply'
  },
  {
    title: 'Backend Engineer',
    type: 'Full-time',
    location: 'Remote',
    link: '#apply'
  }
];

const benefits = [
  'Competitive salary and equity packages',
  'Flexible work arrangements',
  'Health, dental, and vision insurance',
  'Generous paid time off',
  'Professional development budget',
  'Collaborative and innovative work environment'
];

const CareerSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="career" ref={ref} className="section-padding bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Join Our <span className="gradient-text">Team</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're always looking for talented individuals who are passionate about technology and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6"
            >
              Open Positions
            </motion.h3>

            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-semibold">{position.title}</h4>
                      <div className="flex items-center text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                        <span className="mr-3">{position.type}</span>
                        <span>{position.location}</span>
                      </div>
                    </div>
                    <a 
                      href={position.link} 
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      <ChevronRight size={20} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                View All Positions
                <ChevronRight size={16} className="ml-1" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6"
            >
              Why Work With Us
            </motion.h3>

            <motion.div 
              variants={itemVariants}
              className="mb-8"
            >
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <p className="text-secondary-600 dark:text-secondary-400">
                At LoopLabs, we believe in creating an environment where innovation thrives. Our team is made up of passionate individuals who are committed to making a difference through technology.
              </p>
            </motion.div>

            <motion.h4 
              variants={itemVariants}
              className="text-lg font-semibold mb-3"
            >
              Benefits & Perks
            </motion.h4>

            <motion.ul 
              variants={itemVariants}
              className="space-y-2 mb-8"
            >
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-primary-600 mr-2 mt-1">
                    <Briefcase size={16} />
                  </div>
                  <span className="text-secondary-600 dark:text-secondary-400">{benefit}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div 
              variants={itemVariants}
            >
              <a 
                href="#contact" 
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-300 inline-block"
              >
                Send Your Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;