import React from 'react';
import {motion} from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import CustomTools from '../components/CustomTools';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const SalesPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <CustomTools />
      <Contact />
    </div>
  );
};

export default SalesPage;