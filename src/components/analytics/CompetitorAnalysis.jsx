import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiTrendingDown, FiMinus, FiTarget, FiUsers, FiDollarSign } = FiIcons;

const CompetitorAnalysis = ({ period, isLoading }) => {
  const competitors = [
    {
      name: 'SEO Corp',
      domain: 'seocorp.com',
      traffic: 245000,
      trafficChange: -5.2,
      visibility: 78,
      visibilityChange: -2.1,
      keywords: 15670,
      keywordsChange: 3.4,
      status: 'losing'
    },
    {
      name: 'Digital Masters',
      domain: 'digitalmasters.io',
      traffic: 198000,
      trafficChange: 12.8,
      visibility: 82,
      visibilityChange: 8.7,
      keywords: 12340,
      keywordsChange: 15.2,
      status: 'gaining'
    },
    {
      name: 'AI Marketing Pro',
      domain: 'aimarketingpro.com',
      traffic: 167000,
      trafficChange: 2.1,
      visibility: 71,
      visibilityChange: 0.8,
      keywords: 9876,
      keywordsChange: -1.2,
      status: 'stable'
    },
    {
      name: 'Search Experts',
      domain: 'searchexperts.net',
      traffic: 134000,
      trafficChange: -8.9,
      visibility: 65,
      visibilityChange: -12.3,
      keywords: 8765,
      keywordsChange: -6.7,
      status: 'losing'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'gaining': return 'text-green-400';
      case 'losing': return 'text-red-400';
      default: return 'text-yellow-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'gaining': return FiTrendingUp;
      case 'losing': return FiTrendingDown;
      default: return FiMinus;
    }
  };

  const getTrendIcon = (change) => {
    if (change > 0) return FiTrendingUp;
    if (change < 0) return FiTrendingDown;
    return FiMinus;
  };

  const getTrendColor = (change) => {
    if (change > 0) return 'text-green-400';
    if (change < 0) return 'text-red-400';
    return 'text-yellow-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Competitor Analysis</h3>
        <p className="text-slate-400 text-sm">Track competitor performance and market position</p>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="animate-pulse p-4 bg-slate-700/30 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="w-24 h-4 bg-slate-600 rounded mb-2"></div>
                  <div className="w-32 h-3 bg-slate-600 rounded"></div>
                </div>
                <div className="w-16 h-6 bg-slate-600 rounded"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-4 bg-slate-600 rounded mx-auto mb-1"></div>
                    <div className="w-8 h-3 bg-slate-600 rounded mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {competitors.map((competitor, index) => (
            <motion.div
              key={competitor.domain}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-white font-semibold">{competitor.name}</h4>
                  <p className="text-slate-400 text-sm">{competitor.domain}</p>
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getStatusColor(competitor.status)}`}>
                  <SafeIcon icon={getStatusIcon(competitor.status)} />
                  {competitor.status}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <SafeIcon icon={FiUsers} className="text-blue-400 text-sm" />
                    <span className="text-white font-semibold text-sm">
                      {(competitor.traffic / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className={`flex items-center justify-center gap-1 text-xs ${getTrendColor(competitor.trafficChange)}`}>
                    <SafeIcon icon={getTrendIcon(competitor.trafficChange)} />
                    {Math.abs(competitor.trafficChange).toFixed(1)}%
                  </div>
                  <p className="text-slate-500 text-xs mt-1">Traffic</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <SafeIcon icon={FiTarget} className="text-purple-400 text-sm" />
                    <span className="text-white font-semibold text-sm">{competitor.visibility}</span>
                  </div>
                  <div className={`flex items-center justify-center gap-1 text-xs ${getTrendColor(competitor.visibilityChange)}`}>
                    <SafeIcon icon={getTrendIcon(competitor.visibilityChange)} />
                    {Math.abs(competitor.visibilityChange).toFixed(1)}%
                  </div>
                  <p className="text-slate-500 text-xs mt-1">Visibility</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <SafeIcon icon={FiDollarSign} className="text-green-400 text-sm" />
                    <span className="text-white font-semibold text-sm">
                      {(competitor.keywords / 1000).toFixed(1)}k
                    </span>
                  </div>
                  <div className={`flex items-center justify-center gap-1 text-xs ${getTrendColor(competitor.keywordsChange)}`}>
                    <SafeIcon icon={getTrendIcon(competitor.keywordsChange)} />
                    {Math.abs(competitor.keywordsChange).toFixed(1)}%
                  </div>
                  <p className="text-slate-500 text-xs mt-1">Keywords</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-slate-700">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-slate-400 text-sm">Market Position</p>
            <p className="text-blue-400 font-bold text-lg">#2</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Gap to Leader</p>
            <p className="text-orange-400 font-bold text-lg">-12%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompetitorAnalysis;