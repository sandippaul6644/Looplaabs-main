import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

const PartnershipSection: React.FC = () => {
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
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative z-10"
        >
          <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="bg-gold-500 rounded-full p-4 shadow-lg shadow-gold-500/50">
              <Award className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"
          >
            Proud <span className="text-gold-400">Gold Partner</span> with<br />HungryTop Technologies Limited
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-center max-w-3xl mx-auto mb-12 text-secondary-200"
          >
            This strategic partnership allows us to deliver even more value to our clients through enhanced capabilities, resources, and innovation.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-full transition-colors duration-300 shadow-lg shadow-gold-500/30"
            >
              Learn About Our Partnership
            </a>
          </motion.div>
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold-500"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary-500"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;