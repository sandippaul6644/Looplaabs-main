import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import TeamSection from './components/sections/TeamSection';
import ClientsSection from './components/sections/ClientsSection';
import CareerSection from './components/sections/CareerSection';
import PartnershipSection from './components/sections/PartnershipSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ClientsSection />
      <PartnershipSection />
      <CareerSection />
      <ContactSection />
    </Layout>
  );
}

export default App;