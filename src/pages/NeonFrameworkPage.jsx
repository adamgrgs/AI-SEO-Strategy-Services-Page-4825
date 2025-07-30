import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import NeonFramework from '../components/NeonFramework';
import Contact from '../components/Contact';

const NeonFrameworkPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <NeonFramework />
      <Contact />
    </div>
  );
};

export default NeonFrameworkPage;