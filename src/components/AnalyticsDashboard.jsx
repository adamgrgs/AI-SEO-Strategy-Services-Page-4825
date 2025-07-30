import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Navigation from './Navigation';
import MetricsCard from './analytics/MetricsCard';
import TrafficChart from './analytics/TrafficChart';
import RankingChart from './analytics/RankingChart';
import ConversionFunnel from './analytics/ConversionFunnel';
import AIVisibilityTracker from './analytics/AIVisibilityTracker';
import CompetitorAnalysis from './analytics/CompetitorAnalysis';

const { FiTrendingUp, FiUsers, FiDollarSign, FiTarget, FiRefreshCw, FiDownload } = FiIcons;

const AnalyticsDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const periods = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const refreshData = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLastUpdated(new Date());
    setIsLoading(false);
  };

  const exportReport = () => {
    // Simulate report export
    const data = {
      period: selectedPeriod,
      generatedAt: new Date().toISOString(),
      metrics: {
        organicTraffic: 125420,
        aiVisibility: 89,
        conversionRate: 3.2,
        revenue: 245000
      }
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seo-analytics-report-${selectedPeriod}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
            >
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  Advanced Analytics
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {' '}Dashboard
                  </span>
                </h1>
                <p className="text-slate-300">
                  Comprehensive SEO and AI visibility insights
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  Last updated: {lastUpdated.toLocaleString()}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* Period Selector */}
                <div className="flex bg-slate-800 rounded-lg p-1">
                  {periods.map((period) => (
                    <button
                      key={period.value}
                      onClick={() => setSelectedPeriod(period.value)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        selectedPeriod === period.value
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {period.label}
                    </button>
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.button
                  onClick={refreshData}
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50"
                >
                  <SafeIcon icon={FiRefreshCw} className={`${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </motion.button>

                <motion.button
                  onClick={exportReport}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
                >
                  <SafeIcon icon={FiDownload} />
                  Export
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <MetricsCard
              icon={FiUsers}
              title="Organic Traffic"
              value="125,420"
              change="+23.5%"
              trend="up"
              period={selectedPeriod}
              isLoading={isLoading}
            />
            <MetricsCard
              icon={FiTarget}
              title="AI Visibility Score"
              value="89%"
              change="+12.3%"
              trend="up"
              period={selectedPeriod}
              isLoading={isLoading}
            />
            <MetricsCard
              icon={FiTrendingUp}
              title="Conversion Rate"
              value="3.2%"
              change="+0.8%"
              trend="up"
              period={selectedPeriod}
              isLoading={isLoading}
            />
            <MetricsCard
              icon={FiDollarSign}
              title="Revenue"
              value="$245,000"
              change="+31.2%"
              trend="up"
              period={selectedPeriod}
              isLoading={isLoading}
            />
          </motion.div>

          {/* Charts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
          >
            <TrafficChart period={selectedPeriod} isLoading={isLoading} />
            <RankingChart period={selectedPeriod} isLoading={isLoading} />
          </motion.div>

          {/* Conversion Funnel */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <ConversionFunnel period={selectedPeriod} isLoading={isLoading} />
          </motion.div>

          {/* AI Visibility and Competitor Analysis */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <AIVisibilityTracker period={selectedPeriod} isLoading={isLoading} />
            <CompetitorAnalysis period={selectedPeriod} isLoading={isLoading} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;