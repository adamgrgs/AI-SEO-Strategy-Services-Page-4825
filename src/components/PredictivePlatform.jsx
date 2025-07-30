import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiTrendingUp, FiTarget, FiDatabase, FiCpu, FiDollarSign, 
  FiUsers, FiBarChart3, FiZap, FiCheck, FiArrowRight, 
  FiChevronDown, FiStar, FiActivity, FiFilter, FiLayers
} = FiIcons;

const PredictivePlatform = () => {
  const [expandedFeature, setExpandedFeature] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const stats = [
    { value: "66%", label: "CPA Reduction", icon: FiTrendingUp, color: "text-green-400" },
    { value: "+40%", label: "Conversion Rate Increase", icon: FiTarget, color: "text-blue-400" },
    { value: "+32%", label: "ROAS Improvement", icon: FiDollarSign, color: "text-purple-400" },
    { value: "100%", label: "Data Unification", icon: FiDatabase, color: "text-orange-400" }
  ];

  const features = [
    {
      icon: FiDatabase,
      title: "Unified Data Collection",
      subtitle: "360° customer intelligence",
      color: "from-blue-500 to-blue-600",
      description: "Consolidate all raw data from traffic sources, CRMs, apps, and digital touchpoints into a Single Customer View.",
      benefits: [
        "API-driven data collection beyond GA4 and GSC limitations",
        "Real-time CRM and app data integration",
        "Unified customer journey mapping",
        "Advanced attribution modeling"
      ]
    },
    {
      icon: FiCpu,
      title: "Predictive Intelligence",
      subtitle: "AI-powered conversion forecasting",
      color: "from-purple-500 to-purple-600",
      description: "Two proprietary models that predict user behavior and product interest with unprecedented accuracy.",
      benefits: [
        "Action Prediction: conversion likelihood scoring",
        "Product Interest: specific preference identification",
        "Intent signal enrichment",
        "Behavioral pattern recognition"
      ]
    },
    {
      icon: FiTarget,
      title: "Smart Campaign Optimization",
      subtitle: "Value-based bidding & targeting",
      color: "from-green-500 to-green-600",
      description: "Transform your paid media performance with predictive signals powering every campaign decision.",
      benefits: [
        "Predictive bidding replaces standard conversions",
        "High-intent audience segmentation",
        "Dynamic budget allocation",
        "Cross-platform campaign optimization"
      ]
    },
    {
      icon: FiUsers,
      title: "Sales Team Enablement",
      subtitle: "Prioritized lead management",
      color: "from-orange-500 to-orange-600",
      description: "Equip your sales team with conversion-ready contacts and intelligent follow-up prioritization.",
      benefits: [
        "Lead scoring integration with CRM",
        "Product preference insights",
        "Automated follow-up prioritization",
        "Personalized communication guidance"
      ]
    }
  ];

  const industries = [
    { name: "Finance", icon: FiDollarSign, description: "Loan applications, credit products, investment services" },
    { name: "Real Estate", icon: FiActivity, description: "Property inquiries, mortgage leads, agent connections" },
    { name: "Insurance", icon: FiFilter, description: "Policy quotes, coverage comparisons, claim assistance" },
    { name: "SaaS", icon: FiLayers, description: "Trial signups, demo requests, subscription upgrades" }
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 text-sm font-medium border border-blue-500/30">
              🚀 Prediction Platform (BPP)
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Predictive Intelligence
            </span>
            <br />
            <span className="text-white">for Performance Marketing</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your lead generation with AI-powered predictions that identify high-intent prospects, 
            optimize PPC spending, and deliver{' '}
            <span className="text-green-400 font-semibold">66% lower CPA</span> and{' '}
            <span className="text-blue-400 font-semibold">40% higher conversion rates</span>.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl"
            >
              Get Platform Demo
              <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
            
            <motion.button
              onClick={() => setActiveTab('results')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View Results
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-slate-600 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mb-4">
                  <SafeIcon icon={stat.icon} className={`${stat.color} text-xl`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-slate-800 rounded-lg p-1">
            {[
              { id: 'overview', label: 'Platform Overview' },
              { id: 'features', label: 'Key Features' },
              { id: 'results', label: 'Results & ROI' },
              { id: 'industries', label: 'Industries' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    The Challenge with Traditional Lead Generation
                  </h2>
                  <div className="space-y-4 mb-8">
                    <p className="text-slate-300 leading-relaxed">
                      Performance-driven campaigns in finance, real estate, and other lead-gen industries 
                      face a critical problem: <span className="text-red-400 font-semibold">limited visibility into lead quality</span>.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      Native ad platform algorithms provide basic conversion data, but sales teams struggle to:
                    </p>
                    <ul className="space-y-2 ml-4">
                      {[
                        "Prioritize follow-ups effectively",
                        "Identify truly conversion-ready prospects",
                        "Optimize spend on high-intent audiences",
                        "Predict which leads will actually convert"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-6">The Solution</h3>
                  <div className="space-y-4 mb-6">
                    {[
                      { icon: FiDatabase, text: "Unified data from all sources" },
                      { icon: FiCpu, text: "AI-powered conversion prediction" },
                      { icon: FiTarget, text: "Smart campaign optimization" },
                      { icon: FiUsers, text: "Prioritized lead management" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <SafeIcon icon={item.icon} className="text-blue-400" />
                        </div>
                        <span className="text-slate-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-slate-700/50">
                    <p className="text-slate-500 text-xs">Powered by Bytek.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Platform Capabilities
              </h2>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300"
                  >
                    <motion.div
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedFeature(expandedFeature === index ? -1 : index)}
                      whileHover={{ backgroundColor: "rgba(51,65,85,0.3)" }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center`}>
                            <SafeIcon icon={feature.icon} className="text-white text-xl" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                            <p className="text-slate-400">{feature.subtitle}</p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedFeature === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <SafeIcon icon={FiChevronDown} className="text-slate-400 text-xl" />
                        </motion.div>
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {expandedFeature === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-slate-700"
                        >
                          <div className="p-6 bg-slate-800/30">
                            <p className="text-slate-300 mb-6 leading-relaxed">
                              {feature.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {feature.benefits.map((benefit, benefitIndex) => (
                                <motion.div
                                  key={benefitIndex}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: benefitIndex * 0.1 }}
                                  className="flex items-start gap-3"
                                >
                                  <SafeIcon icon={FiCheck} className="text-green-400 text-sm mt-1 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{benefit}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Proven Results & ROI
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    metric: "66% CPA Reduction",
                    description: "Better targeting and predictive bidding",
                    icon: FiTrendingUp,
                    color: "from-green-500 to-green-600",
                    details: [
                      "Predictive models identify high-intent users",
                      "Smart budget allocation reduces waste",
                      "Value-based bidding optimizes spend",
                      "Real-time campaign adjustments"
                    ]
                  },
                  {
                    metric: "+40% Conversion Rate",
                    description: "Focus on high-intent users",
                    icon: FiTarget,
                    color: "from-blue-500 to-blue-600",
                    details: [
                      "Intent scoring prioritizes quality leads",
                      "Behavioral prediction improves targeting",
                      "Sales team focuses on ready-to-convert prospects",
                      "Personalized communication increases close rates"
                    ]
                  },
                  {
                    metric: "+32% ROAS Improvement",
                    description: "Enriched signals and smarter allocation",
                    icon: FiDollarSign,
                    color: "from-purple-500 to-purple-600",
                    details: [
                      "Multi-source data enrichment",
                      "Predictive lifetime value modeling",
                      "Cross-channel optimization",
                      "Automated bid adjustments"
                    ]
                  }
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${result.color} rounded-xl flex items-center justify-center mb-4`}>
                      <SafeIcon icon={result.icon} className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{result.metric}</h3>
                    <p className="text-slate-400 mb-4">{result.description}</p>
                    <ul className="space-y-2">
                      {result.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <SafeIcon icon={FiCheck} className="text-green-400 text-sm mt-1 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Real-World Implementation Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Data Unification", description: "Consolidate CRM, analytics, and touchpoint data" },
                    { step: "2", title: "Model Activation", description: "Deploy Action Prediction and Product Interest models" },
                    { step: "3", title: "Campaign Optimization", description: "Implement value-based bidding and segmentation" },
                    { step: "4", title: "Sales Integration", description: "Prioritize leads and enable team efficiency" }
                  ].map((process, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{process.step}</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">{process.title}</h4>
                      <p className="text-slate-400 text-sm">{process.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'industries' && (
            <motion.div
              key="industries"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Optimized for Lead Generation Industries
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                        <SafeIcon icon={industry.icon} className="text-blue-400 text-xl" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                    </div>
                    <p className="text-slate-300">{industry.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Why Lead Generation Businesses Choose BPP
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Higher Quality Leads",
                      description: "Predictive models identify prospects most likely to convert",
                      icon: FiStar
                    },
                    {
                      title: "Reduced Acquisition Costs",
                      description: "Smart bidding and targeting minimize wasted ad spend",
                      icon: FiDollarSign
                    },
                    {
                      title: "Sales Team Efficiency",
                      description: "Prioritized follow-ups and personalized communication",
                      icon: FiUsers
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <SafeIcon icon={benefit.icon} className="text-blue-400 text-xl" />
                      </div>
                      <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-slate-400 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Lead Generation?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            See how the Prediction Platform can reduce your CPA by 66% and increase 
            conversion rates by 40%. Schedule a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Schedule Platform Demo
              <SafeIcon icon={FiArrowRight} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Download Case Study
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PredictivePlatform;