import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

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
    <section id="contact" ref={ref} className="section-padding bg-white dark:bg-secondary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6"
            >
              Contact Information
            </motion.h3>

            <motion.div 
              variants={containerVariants}
              className="space-y-6 mb-8"
            >
              <motion.div 
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-3 text-primary-600 dark:text-primary-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Our Location</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">123 Innovation Street, Tech Valley, CA 94043</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-3 text-primary-600 dark:text-primary-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">info@looplabs.tech</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-3 text-primary-600 dark:text-primary-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">+1 (555) 123-4567</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="rounded-lg overflow-hidden h-64"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101259.02138771827!2d-122.11215158775291!3d37.408209325349024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1616501674039!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="LoopLabs Location"
              ></iframe>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6"
            >
              Send Us a Message
            </motion.h3>

            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="card"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800"
                >
                  <option value="">Select a subject</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Career">Career Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800"
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={submitted}
                  className={`px-6 py-3 flex items-center space-x-2 rounded-lg transition-colors duration-300 ${
                    submitted 
                      ? 'bg-green-600 text-white' 
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  {submitted ? (
                    <>
                      <span>Message Sent</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;