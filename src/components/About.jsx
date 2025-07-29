import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBrain, FiSearch, FiBarChart3, FiCpu } = FiIcons;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const platforms = [
    "Google", "ChatGPT", "Gemini", "Claude", "Perplexity", "Mistral"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The Future of Search is{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI-Driven
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Traditional SEO is evolving. I build search strategies that work across the entire ecosystem 
            of intelligent platforms, ensuring your brand is discoverable wherever your audience searches.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Platform Visibility</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                While others focus solely on Google, I optimize for the entire ecosystem of AI-powered search platforms. 
                Your content needs to be discoverable across ChatGPT, Gemini, Claude, and emerging LLMs.
              </p>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform, index) => (
                  <motion.span
                    key={platform}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 text-sm font-medium border border-blue-500/30"
                  >
                    {platform}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: FiBrain,
                  title: "AI-First Strategy",
                  description: "Optimized for LLM algorithms"
                },
                {
                  icon: FiSearch,
                  title: "Traditional SEO",
                  description: "Proven fundamentals that work"
                },
                {
                  icon: FiBarChart3,
                  title: "Data-Driven",
                  description: "Analytics and predictive insights"
                },
                {
                  icon: FiCpu,
                  title: "Automation",
                  description: "Scalable AI-powered operations"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mb-3">
                    <SafeIcon icon={feature.icon} className="text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AG</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Adam Guerguis</h4>
                    <p className="text-slate-400 text-sm">AI-Driven SEO Strategist</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Experience</span>
                    <span className="text-blue-400 font-semibold">12+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Specialization</span>
                    <span className="text-purple-400 font-semibold">LLM Optimization</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Focus</span>
                    <span className="text-green-400 font-semibold">Revenue Growth</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-slate-300 text-sm italic">
                    "Fusing traditional SEO excellence with cutting-edge AI optimization 
                    to ensure brands dominate both current and future search landscapes."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;