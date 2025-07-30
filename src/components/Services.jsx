import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiBrain, FiCpu, FiBarChart3, FiDollarSign, FiChevronDown, FiCheck } = FiIcons;

const Services = () => {
  const [expandedService, setExpandedService] = useState(0);

  const services = [
    {
      icon: FiSearch,
      title: "Foundational SEO Excellence",
      subtitle: "Rock-solid technical foundation",
      color: "from-blue-500 to-blue-600",
      features: [
        "Site architecture audits & crawl budget optimization",
        "Schema markup implementation",
        "Lighthouse/Core Web Vitals improvement",
        "Scalable on-page content optimization",
        "Strategic internal linking architecture"
      ]
    },
    {
      icon: FiBrain,
      title: "LLM Optimization & Visibility",
      subtitle: "Next-generation AI search optimization",
      color: "from-purple-500 to-purple-600",
      features: [
        "Content structuring for AI summaries (ChatGPT, Gemini, Claude, Perplexity)",
        "Prompt engineering for brand mention visibility",
        "Citation-worthy content injection into trusted domains",
        "CiteMet method implementation (Quora, Medium, academic blogs)",
        "LLM training exposure optimization"
      ]
    },
    {
      icon: FiCpu,
      title: "AI Agents for SEO Operations",
      subtitle: "Autonomous SEO automation",
      color: "from-green-500 to-green-600",
      features: [
        "Auto-cluster keywords with SERP intent matching",
        "Competitor movement monitoring & analysis",
        "FAQ schema generation from LLM patterns",
        "Automated internal linking with embeddings",
        "AI-powered content outline generation"
      ]
    },
    {
      icon: FiBarChart3,
      title: "Advanced Analytics & Predictive Insights",
      subtitle: "Data-driven decision making",
      color: "from-orange-500 to-orange-600",
      features: [
        "GA4 to BigQuery data pipeline setup",
        "Custom Looker/Power BI dashboards",
        "ML models for ranking loss prediction",
        "Predictive lead scoring with CRM integration",
        "User journey attention-value curve analysis"
      ]
    },
    {
      icon: FiDollarSign,
      title: "Revenue-Centric Automation",
      subtitle: "ROI-focused optimization",
      color: "from-red-500 to-red-600",
      features: [
        "SEO + paid channel integration for ROAS optimization",
        "Predictive lead scoring for Google Ads bidding",
        "A/B testing with SEO-derived user intent",
        "High-conversion landing page optimization",
        "Closed-loop attribution modeling"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
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
            Complete{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SEO Ecosystem
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            From foundational SEO to cutting-edge LLM optimization, I provide end-to-end solutions that drive measurable results across all search platforms.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300"
            >
              <motion.div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedService(expandedService === index ? -1 : index)}
                whileHover={{ backgroundColor: "rgba(51,65,85,0.3)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                      <SafeIcon icon={service.icon} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-slate-400">{service.subtitle}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedService === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SafeIcon icon={FiChevronDown} className="text-slate-400 text-xl" />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {expandedService === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700"
                  >
                    <div className="p-6 bg-slate-800/30">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <SafeIcon icon={FiCheck} className="text-green-400 text-sm mt-1 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start Your AI-Driven SEO Strategy
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;