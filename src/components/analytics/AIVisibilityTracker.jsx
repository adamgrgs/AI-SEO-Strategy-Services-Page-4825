import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBrain, FiMessageSquare, FiCpu, FiSearch, FiTrendingUp, FiTrendingDown } = FiIcons;

const AIVisibilityTracker = ({ period, isLoading }) => {
  const platforms = [
    {
      name: 'ChatGPT',
      icon: FiMessageSquare,
      score: 92,
      change: '+8.3%',
      trend: 'up',
      mentions: 1247,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Google Gemini',
      icon: FiSearch,
      score: 87,
      change: '+12.1%',
      trend: 'up',
      mentions: 934,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Claude',
      icon: FiBrain,
      score: 84,
      change: '+5.7%',
      trend: 'up',
      mentions: 756,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Perplexity',
      icon: FiCpu,
      score: 79,
      change: '-2.1%',
      trend: 'down',
      mentions: 543,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const overallScore = Math.round(platforms.reduce((acc, platform) => acc + platform.score, 0) / platforms.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">AI Platform Visibility</h3>
        <p className="text-slate-400 text-sm">Brand mentions and visibility across AI platforms</p>
      </div>

      {/* Overall Score */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-semibold">Overall AI Visibility Score</h4>
            <p className="text-slate-300 text-sm">Weighted average across all platforms</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-white">{overallScore}</span>
            <span className="text-slate-400 text-lg">/100</span>
            <div className="flex items-center gap-1 text-green-400 text-sm mt-1">
              <SafeIcon icon={FiTrendingUp} />
              +6.2%
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-slate-700 rounded-lg"></div>
                <div className="flex-1">
                  <div className="w-20 h-4 bg-slate-700 rounded mb-2"></div>
                  <div className="w-24 h-3 bg-slate-700 rounded"></div>
                </div>
                <div className="w-12 h-6 bg-slate-700 rounded"></div>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center`}>
                    <SafeIcon icon={platform.icon} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{platform.name}</h4>
                    <p className="text-slate-400 text-sm">{platform.mentions} mentions</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-white font-bold text-lg">{platform.score}</span>
                  <div className={`flex items-center gap-1 text-sm ${
                    platform.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <SafeIcon icon={platform.trend === 'up' ? FiTrendingUp : FiTrendingDown} />
                    {platform.change}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <motion.div
                    className={`bg-gradient-to-r ${platform.color} h-2 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${platform.score}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-slate-700">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-slate-400 text-sm">Total Mentions</p>
            <p className="text-white font-bold text-lg">
              {platforms.reduce((acc, platform) => acc + platform.mentions, 0).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Avg. Growth</p>
            <p className="text-green-400 font-bold text-lg">+6.0%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIVisibilityTracker;