import React from 'react';
import { motion } from 'framer-motion';
import PredictivePlatform from '../components/PredictivePlatform';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';

const PredictivePlatformPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <PredictivePlatform />
      <Contact />
    </div>
  );
};

export default PredictivePlatformPage;