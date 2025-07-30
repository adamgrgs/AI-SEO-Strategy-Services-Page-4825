import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default TestimonialsPage;