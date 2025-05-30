import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity, Award, Users, Monitor, Heart } from 'lucide-react';

const features = [
  {
    icon: <Activity className="h-6 w-6 text-primary-500" />,
    title: 'Innovation',
    description: 'We stay at the cutting edge of technology to provide innovative solutions.'
  },
  {
    icon: <Award className="h-6 w-6 text-primary-500" />,
    title: 'Excellence',
    description: 'We deliver excellence in every project, exceeding client expectations.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary-500" />,
    title: 'Collaboration',
    description: 'We believe in collaborative partnerships to achieve greater results.'
  },
  {
    icon: <Monitor className="h-6 w-6 text-primary-500" />,
    title: 'Technology',
    description: 'We leverage the latest technologies to create powerful solutions.'
  },
  {
    icon: <Heart className="h-6 w-6 text-primary-500" />,
    title: 'Passion',
    description: 'We are passionate about technology and helping businesses succeed.'
  }
];

const AboutSection: React.FC = () => {
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
    <section id="about" className="section-padding bg-white dark:bg-secondary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            ABOUT <span className="gradient-text">LOOPLABS</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are a forward-thinking technology company dedicated to transforming ideas into powerful digital solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working together" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-secondary-900 rounded-lg shadow-lg p-4 flex items-center space-x-3">
                <div className="bg-gold-500 rounded-full p-2">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Gold Partner</p>
                  <p className="text-xs text-secondary-500">HungryTop Technologies</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-4"
            >
              Our Story
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-secondary-600 dark:text-secondary-400 mb-6"
            >
              Founded in 2024, LoopLabs Technology Limited was born with a vision to bridge the gap between complex technology and business needs. Our team of passionate technologists and creative minds work together to deliver exceptional digital experiences.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-secondary-600 dark:text-secondary-400 mb-8"
            >
              Today, we're proud to be recognized as a <span className="font-semibold text-gold-600">Gold Partner with HungryTop Technologies Limited</span>, allowing us to provide even more value to our clients through this strategic alliance.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.slice(0, 4).map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;