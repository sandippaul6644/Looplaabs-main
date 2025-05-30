import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, BarChart, Monitor, Smartphone, Palette, Database } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary-500" />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your specific business challenges and streamline operations.',
    link: '#contact'
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary-500" />,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that increase your online presence and drive meaningful engagement.',
    link: '#contact'
  },
  {
    icon: <Monitor className="h-10 w-10 text-primary-500" />,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications that provide exceptional user experiences.',
    link: '#contact'
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary-500" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that engage users and deliver real business value.',
    link: '#contact'
  },
  {
    icon: <Palette className="h-10 w-10 text-primary-500" />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, engaging, and accessible digital experiences.',
    link: '#contact'
  },
  {
    icon: <Database className="h-10 w-10 text-primary-500" />,
    title: 'Cloud Solutions',
    description: 'Scalable, secure cloud infrastructure and migration services to enhance your business capabilities.',
    link: '#contact'
  }
];

const ServicesSection: React.FC = () => {
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
    <section id="services" ref={ref} className="section-padding bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a comprehensive range of technology and digital marketing services to help your business thrive in the digital landscape.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-6">{service.description}</p>
              <a 
                href={service.link} 
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium inline-flex items-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-300 inline-block"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;