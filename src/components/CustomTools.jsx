import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiSearch, FiTrendingUp, FiFilter, FiLink, 
  FiEdit, FiActivity, FiClipboard, FiEye, 
  FiRefreshCw, FiCode, FiChevronDown, FiPlus
} = FiIcons;

const CustomTools = () => {
  const [expandedTool, setExpandedTool] = useState(null);
  
  const tools = [
    {
      id: 'llm-rank',
      icon: FiSearch,
      title: 'LLM Visibility Tracker (LLM Rank)',
      problem: 'Brands don\'t know how or where they show up in ChatGPT, Gemini, Claude, etc.',
      solution: [
        'Periodically test brand-related prompts across major LLMs',
        'Detect if the brand is mentioned or cited',
        'Track hallucinations, citation patterns, and content sources',
        'Output visibility score + optimization suggestions'
      ],
      aiUse: 'Prompt chaining, named entity detection, citation path modeling',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'seo-forecast',
      icon: FiTrendingUp,
      title: 'Predictive SEO Opportunity Model (SEO Forecast Pro)',
      problem: 'SEO planning is reactive and slow.',
      solution: [
        'Use GA4 + GSC + competitor SERP data to forecast traffic lift for content ideas',
        'Show probability of ranking improvement based on topical authority, freshness, and link signals',
        'Forecast revenue impact using attribution models'
      ],
      aiUse: 'Gradient boosting or LSTM models on temporal data + semantic embeddings for content gap modeling',
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'querymap',
      icon: FiFilter,
      title: 'AI Keyword Intent Clustering (QueryMap.ai)',
      problem: 'Manual keyword grouping is inefficient and often wrong',
      solution: [
        'Input: keyword list',
        'Output: clustered topics with mapped intent (commercial, informational, navigational)',
        'Uses semantic embeddings + SERP similarity + LLM classification',
        'Bonus Feature: Outputs ideal content format (guide, FAQ, landing page)'
      ],
      aiUse: 'Semantic embeddings, clustering algorithms, and intent classification',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'linkweaver',
      icon: FiLink,
      title: 'Internal Linking Agent (LinkWeaver)',
      problem: 'Missed internal linking opportunities across hundreds of pages',
      solution: [
        'Crawls your content and uses LLMs to detect opportunities to create or optimize internal links',
        'Auto-generates link snippets with natural anchor text',
        'Scores the value of each link based on topical relevance and hierarchy'
      ],
      aiUse: 'NLP for context understanding and opportunity detection',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'serp-draft',
      icon: FiEdit,
      title: 'SEO Copilot for Content Teams (SERP Draft AI)',
      problem: 'Writers don\'t know how to tailor content to SERP competition',
      solution: [
        'Analyze the top 10 ranking pages for any keyword',
        'Generate a dynamic outline with unique angle suggestions, missing subtopics, and summary of what to avoid copying',
        'Fine-tune tone, structure, and freshness recommendation'
      ],
      aiUse: 'SERP summarization + contrastive content generation',
      color: 'from-yellow-500 to-amber-600'
    },
    {
      id: 'crawlpulse',
      icon: FiActivity,
      title: 'AI-Powered SEO Health Dashboard (CrawlPulse)',
      problem: 'SEO teams miss early signs of performance decay',
      solution: [
        'Detect anomalies in indexing, click-through rates, crawlability, and Core Web Vitals',
        'Use ML to surface issues before rankings drop',
        'Alerting and root cause suggestions'
      ],
      aiUse: 'Time-series anomaly detection, feature correlation mapping',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      id: 'snippetsmith',
      icon: FiClipboard,
      title: 'LLM-Rewrite for Featured Snippet Optimization (SnippetSmith)',
      problem: 'Most pages are not optimized for AI snippets',
      solution: [
        'Analyze SERP snippet types for your target keywords',
        'Rewrites key sections of your content to increase snippet eligibility (lists, definitions, tables)',
        'A/B test versions using prompt injections in sandbox LLMs'
      ],
      aiUse: 'Content structure analysis and transformation',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'spyserp',
      icon: FiEye,
      title: 'Competitor Content Decoder (SpySERP AI)',
      problem: 'Hard to know why a competitor ranks higher',
      solution: [
        'Automatically dissects their top pages',
        'Outputs page structure, hidden intent, content gaps, freshness score, and engagement indicators',
        'Suggests ways to "one-up" the ranking'
      ],
      aiUse: 'HTML parsing + LLM summarization + visual layout detection (Vision LLMs)',
      color: 'from-emerald-500 to-green-600'
    },
    {
      id: 'conversionsync',
      icon: FiRefreshCw,
      title: 'SEO + PPC Feedback Loop Tool (ConversionSync)',
      problem: 'SEO and PPC work in silos, leading to inefficiencies',
      solution: [
        'Use traffic behavior (bounce, time on site, scroll depth) to assign lead quality scores to organic keywords',
        'Feed those scores into Google Ads bid adjustment strategies',
        'Close the loop on real conversion potential'
      ],
      aiUse: 'Regression modeling + attribution pipelines',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'contentdna',
      icon: FiCode,
      title: 'Personalized SEO Content Agent (ContentDNA)',
      problem: 'Content feels generic and low-impact',
      solution: [
        'Learns your brand tone, structure, and preferred references',
        'Writes first drafts that blend keyword coverage + brand language',
        'Uses persona-specific prompts to tailor variations for different audience segments'
      ],
      aiUse: 'NLG with tone and style transfer',
      color: 'from-pink-500 to-rose-600'
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
    hidden: { y: 30, opacity: 0 },
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
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800/90">
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
            Tools{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Custom Built
            </span>{' '}
            For You
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Proprietary AI-powered tools that solve real SEO challenges and give you a competitive advantage in both traditional and AI search environments.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300 flex flex-col"
            >
              <motion.div 
                className={`p-6 cursor-pointer ${expandedTool === index ? 'bg-slate-700/30' : ''} flex-grow`}
                onClick={() => setExpandedTool(expandedTool === index ? null : index)}
                whileHover={{ backgroundColor: "rgba(51,65,85,0.3)" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <SafeIcon icon={tool.icon} className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{tool.title}</h3>
                  </div>
                  <motion.div 
                    animate={{ rotate: expandedTool === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <SafeIcon icon={FiChevronDown} className="text-slate-400 text-xl" />
                  </motion.div>
                </div>
                
                <div className="bg-slate-700/30 p-4 rounded-lg">
                  <p className="text-slate-300 text-sm">
                    <span className="font-semibold text-red-400">Problem:</span> {tool.problem}
                  </p>
                </div>
              </motion.div>

              <AnimatePresence>
                {expandedTool === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700"
                  >
                    <div className="p-6 bg-slate-800/50">
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Solution:</h4>
                        <ul className="space-y-2">
                          {tool.solution.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <SafeIcon icon={FiPlus} className="text-blue-400 text-sm mt-1 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-slate-700/50">
                        <p className="text-slate-400 text-sm">
                          <span className="font-semibold text-purple-400">AI Technology:</span> {tool.aiUse}
                        </p>
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
            Get Access to Custom Tools
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomTools;