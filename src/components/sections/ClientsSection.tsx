import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star } from 'lucide-react';

const clients = [
  {
    name: 'HungryTop Technologies',
    logo: 'https://www.hungrytop.com/assets/images/hungrytop.jpg',
    description: 'Strategic Gold Partner',
    partnership: 'Gold Partner'
  },
  {
    name: 'Syn Developer',
    logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Technology Solutions Partner',
    partnership: 'Technology Partner'
  },
  {
    name: 'Paper Loan',
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Financial Services Client',
    partnership: 'Client'
  }
];

const ClientsSection: React.FC = () => {
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
    <section id="clients" ref={ref} className="section-padding bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Trusted <span className="gradient-text">Clients</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're proud to work with industry leaders and innovative companies
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative mb-6 rounded-xl overflow-hidden h-48">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent"></div>
                {client.partnership === 'Gold Partner' && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-medium">Gold Partner</span>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{client.name}</h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">{client.description}</p>
              
              {client.partnership === 'Gold Partner' && (
                <div className="flex items-center space-x-2 text-gold-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-medium">Premium Partnership</span>
                </div>
              )}
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
            Become Our Client
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;