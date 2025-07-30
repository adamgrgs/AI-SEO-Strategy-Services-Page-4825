import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiDownload, FiSearch, FiBrain, FiDatabase, FiTrendingUp, FiTarget, FiLayers, FiCpu, FiCode, FiBarChart2, FiMessageSquare, FiZap, FiShield, FiUsers, FiCheckCircle, FiDollarSign, FiRepeat, FiAlertTriangle } = FiIcons;

const NeonFramework = () => {
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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-full text-yellow-300 text-sm font-medium border border-yellow-500/30">
              ✨ The NEON Framework™ — Next-Gen SEO for AI Visibility and Growth
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
              Dominate the AI-First Web with the NEON Framework™
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get discovered, cited, and trusted by search engines and large language models. NEON is a data-driven SEO system that turns visibility into <span className="text-yellow-400 font-semibold">measurable growth</span>.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-yellow-600 to-blue-600 hover:from-yellow-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl"
            >
              Let's Talk
              <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-800/80 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3"
            >
              Download Strategy Overview
              <SafeIcon icon={FiDownload} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get a Free Audit
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem/Pain Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Traditional SEO is <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Fading Fast</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The search landscape is evolving rapidly, leaving traditional SEO strategies behind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: FiMessageSquare,
                title: "AI Engines Rewriting Search",
                description: "AI engines like ChatGPT, Gemini, and Perplexity are rewriting how people search.",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: FiSearch,
                title: "Zero-Click is the New Normal",
                description: "Google's SERP is now a blend of links, snippets, and AI summaries — zero-click is the new normal.",
                color: "from-red-500 to-orange-600"
              },
              {
                icon: FiAlertTriangle,
                title: "Invisible to AI",
                description: "Content is everywhere, but few brands are visible in AI-generated answers.",
                color: "from-yellow-500 to-amber-600"
              },
              {
                icon: FiTarget,
                title: "Outdated Optimization",
                description: "Most SEO strategies still optimize for keywords, not intent or AI relevance.",
                color: "from-amber-500 to-yellow-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <SafeIcon icon={item.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-500/20"
          >
            <p className="text-xl font-semibold text-white">
              If you're not cited, you don't exist. If you're not optimized for AI, you're invisible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Intro Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Enter the <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">NEON Framework™</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A structured system to make your brand discoverable in both traditional search engines and AI-driven platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                letter: "N",
                title: "Natural Language",
                description: "Align your content with how users ask, not just what they search.",
                icon: FiMessageSquare,
                color: "from-green-500 to-green-600"
              },
              {
                letter: "E",
                title: "Entities",
                description: "Structure your data so LLMs understand and prioritize you.",
                icon: FiDatabase,
                color: "from-teal-500 to-teal-600"
              },
              {
                letter: "O",
                title: "Optimization",
                description: "Go beyond keywords — optimize for prompts, snippets, and AI summaries.",
                icon: FiTarget,
                color: "from-blue-500 to-blue-600"
              },
              {
                letter: "N",
                title: "Navigation",
                description: "Build UX that feeds user trust and LLM confidence.",
                icon: FiLayers,
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white text-2xl font-bold">{item.letter}</span>
                </div>
                <div className="mt-2 mb-4 flex justify-center">
                  <SafeIcon icon={item.icon} className="text-slate-300 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Core <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              What makes the NEON Framework™ different from traditional SEO approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: FiBrain,
                title: "Built for AI Discovery",
                features: [
                  "Optimized for ChatGPT, Gemini, and Perplexity",
                  "Structured content that LLMs can cite",
                  "Schema and entity alignment for machine readability"
                ],
                color: "from-blue-500 to-purple-600"
              },
              {
                icon: FiTrendingUp,
                title: "Predictable ROI",
                features: [
                  "Machine learning models forecast content impact",
                  "Attribution beyond vanity metrics: real leads, revenue, and lifetime value",
                  "Continuous refinement loop based on actual AI citation behavior"
                ],
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: FiZap,
                title: "Reduced Cost, Higher Impact",
                features: [
                  "No wasted engineering bandwidth",
                  "Integrates with your CRM, analytics, and content stack",
                  "Less guessing, more compounding gains"
                ],
                color: "from-green-500 to-teal-600"
              },
              {
                icon: FiShield,
                title: "Future-Proof Strategy",
                features: [
                  "Designed for Google's SGE, zero-click SERPs, and agent-led browsing",
                  "Built-in adaptability for upcoming AI platforms and prompt protocols"
                ],
                color: "from-yellow-500 to-orange-600"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                  <SafeIcon icon={benefit.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <SafeIcon icon={FiCheckCircle} className="text-green-400 text-lg mt-1 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              How It <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The NEON Framework™ operates as a continuous improvement flywheel.
            </p>
          </motion.div>

          {/* Improved Flywheel Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-lg mx-auto mb-16"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Center Circle */}
              <div className="absolute inset-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">NEON</h3>
                  <p className="text-blue-300 text-xs">Framework™</p>
                </div>
              </div>

              {/* Flywheel Stages */}
              {[
                {
                  position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  icon: FiTarget,
                  title: "Intent",
                  subtitle: "Modeling",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  position: "top-1/2 right-0 translate-y-1/2 translate-x-1/2",
                  icon: FiDatabase,
                  title: "Entity",
                  subtitle: "Structuring",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                  icon: FiLayers,
                  title: "Content",
                  subtitle: "Deployment",
                  color: "from-green-500 to-teal-500"
                },
                {
                  position: "top-1/2 left-0 -translate-x-1/2 translate-y-1/2",
                  icon: FiRepeat,
                  title: "Impact",
                  subtitle: "Loop",
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className={`absolute ${stage.position} w-20 h-20 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-full flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300`}
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${stage.color} rounded-full flex items-center justify-center mb-1`}>
                    <SafeIcon icon={stage.icon} className="text-white text-sm" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xs font-bold text-white leading-none">{stage.title}</h4>
                    <p className="text-xs text-slate-400 leading-none">{stage.subtitle}</p>
                  </div>
                </motion.div>
              ))}

              {/* Connecting Arrows */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                <defs>
                  <linearGradient id="gradientArrow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                    <polygon points="0 0, 8 3, 0 6" fill="url(#gradientArrow)" />
                  </marker>
                </defs>
                
                {/* Curved arrows between stages */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.8 }}
                  d="M 160,40 A 80,80 0 0 1 280,160"
                  fill="none"
                  stroke="url(#gradientArrow)"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead)"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1 }}
                  d="M 280,160 A 80,80 0 0 1 160,280"
                  fill="none"
                  stroke="url(#gradientArrow)"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead)"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.2 }}
                  d="M 160,280 A 80,80 0 0 1 40,160"
                  fill="none"
                  stroke="url(#gradientArrow)"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead)"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.4 }}
                  d="M 40,160 A 80,80 0 0 1 160,40"
                  fill="none"
                  stroke="url(#gradientArrow)"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>
          </motion.div>

          {/* Stage Explanations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Intent Modeling",
                description: "Understanding user prompts and content gaps",
                icon: FiTarget,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Entity Structuring",
                description: "Turning your brand into a machine-readable knowledge node",
                icon: FiDatabase,
                color: "from-purple-500 to-indigo-500"
              },
              {
                title: "Content Deployment",
                description: "High-performing content engineered for LLM discoverability",
                icon: FiLayers,
                color: "from-green-500 to-teal-500"
              },
              {
                title: "Impact Loop",
                description: "Measuring citations, engagement, and business impact",
                icon: FiRepeat,
                color: "from-yellow-500 to-orange-500"
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stage.color} rounded-xl flex items-center justify-center`}>
                    <SafeIcon icon={stage.icon} className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                </div>
                <p className="text-slate-300">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Who It's <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">For</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              This system is ideal for forward-thinking brands and professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FiCpu,
                title: "SaaS & Tech Startups",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: FiUsers,
                title: "Agencies tired of traditional SEO plateaus",
                color: "from-indigo-500 to-purple-600"
              },
              {
                icon: FiDollarSign,
                title: "B2B Brands chasing high-intent leads",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: FiCode,
                title: "Experts & Thought Leaders who want to be cited in AI answers",
                color: "from-pink-500 to-red-600"
              },
              {
                icon: FiBarChart2,
                title: "CMOs who want SEO they can finally measure",
                color: "from-red-500 to-orange-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <SafeIcon icon={item.icon} className="text-white text-xl" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <SafeIcon icon={FiCheckCircle} className="text-green-400 text-lg flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Dominate the AI-First Web?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how the NEON Framework™ can transform your brand's visibility across both traditional search and AI platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-blue-600 hover:from-yellow-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Get Started with NEON
                <SafeIcon icon={FiArrowRight} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NeonFramework;