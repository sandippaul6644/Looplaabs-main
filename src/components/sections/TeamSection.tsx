import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'SANDIP PAUL',
    role: 'CTO & Founder',
    image: './sandip.jpeg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },  
  {
    name: 'SUBHAJIT KARMAKAR',
    role: 'Co-Founder',
    image: './subhajit.jpeg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'PAPAI PRATIHAR',
    role: 'Lead Developer AND CEO',
    image: './papai.jpeg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'SURAJIT KAR',
    role: 'SENIOR ANDROID DEVELOPER',
    image: './surojit.jpeg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'PRITAM',
    role: 'HEAD OF THE DEPARTMENT',
    image: './pritam.jpeg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
];


const TeamSection: React.FC = () => {
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
    <section id="team" ref={ref} className="section-padding bg-white dark:bg-secondary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Meet Our <span className="gradient-text">Team</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our talented team of experts is passionate about creating innovative solutions that drive business success.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card text-center group"
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="flex space-x-4 p-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-white hover:text-primary-400 transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-white hover:text-primary-400 transition-colors">
                        <Twitter size={20} />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-white hover:text-primary-400 transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary-600 dark:text-primary-400">{member.role}</p>
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
            href="#career" 
            className="px-8 py-3 bg-white dark:bg-secondary-800 text-primary-600 dark:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-full border border-secondary-200 dark:border-secondary-700 transition-colors duration-300 inline-block"
          >
            Join Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;