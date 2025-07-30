import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiQuote, FiLinkedin, FiArrowRight } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jimmy Lim",
      company: "Airbnb",
      role: "Senior Growth Marketing Manager",
      image: "/images/jimmy-lim.jpg",
      content: "Adam has a deep understanding of SEO that one can only get after spending years of learning, teaching, and thinking critically about it. He led SEO initiatives for our Lux business, helped shepherd a significant migration effort, and achieved impressive results working with both internal and external partners. His firm grasp of business needs and metrics, combined with his SEO and marketing talents set him apart from the rest of the field. He's also one of the kindest people I know. Any company would be lucky to have him!",
      rating: 5
    },
    {
      id: 2,
      name: "Andria Volpini",
      company: "WordLift",
      role: "Marketing Director",
      image: "/images/andria-volpini.jpg",
      content: "Adam is a great individual with a profound understanding of SEO and inbound marketing. His positive energy and forward-thinking approach make him an extraordinary asset in every growth marketing team.",
      rating: 5
    },
    {
      id: 3,
      name: "Samer Riad",
      company: "Aldo",
      role: "Digital Marketing Lead",
      image: "/images/samer-riad.jpg",
      content: "I highly recommend Adam for his exceptional strategic thinking and creativity. His ability to develop innovative solutions has driven success for top brands, and his data-driven approach ensures sustainable growth for any business. Working with Adam has been a pleasure, and I've been consistently impressed with his dedication and expertise in the field of SEO.",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      } 
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 text-sm font-medium border border-blue-500/30">
              ⭐ Client Success Stories
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            What Industry Leaders{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Say About Adam
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Trusted by marketing leaders at top-tier companies to deliver exceptional SEO results and drive sustainable growth.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <SafeIcon icon={FiQuote} className="text-blue-400 text-4xl" />
              </div>

              {/* Stars Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-lg fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-slate-300 leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-600"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const initials = testimonial.name.split(' ').map(n => n[0]).join('');
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hidden items-center justify-center text-white font-semibold"
                  >
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  <p className="text-blue-400 text-sm font-medium">@ {testimonial.company}</p>
                </div>
              </div>

              {/* Company Badge */}
              <div className="absolute bottom-4 right-4">
                <div className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                  <span className="text-blue-300 text-xs font-medium">{testimonial.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { number: "12+", label: "Years Experience", icon: FiStar },
            { number: "50+", label: "Successful Projects", icon: FiStar },
            { number: "100%", label: "Client Satisfaction", icon: FiStar }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mb-4">
                <SafeIcon icon={stat.icon} className="text-blue-400 text-xl" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how AI-driven SEO can transform your search visibility and drive revenue growth across Google, ChatGPT, and the entire ecosystem of intelligent platforms.
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start Your Success Story
            <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;