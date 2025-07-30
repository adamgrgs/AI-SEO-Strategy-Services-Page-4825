import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiTrendingDown } = FiIcons;

const MetricsCard = ({ icon, title, value, change, trend, period, isLoading }) => {
  const isPositive = trend === 'up';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300"
    >
      {isLoading ? (
        <div className="animate-pulse">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-slate-700 rounded-lg"></div>
            <div className="w-12 h-4 bg-slate-700 rounded"></div>
          </div>
          <div className="w-20 h-8 bg-slate-700 rounded mb-2"></div>
          <div className="w-16 h-4 bg-slate-700 rounded"></div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
              <SafeIcon icon={icon} className="text-blue-400" />
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${
              isPositive ? 'text-green-400' : 'text-red-400'
            }`}>
              <SafeIcon icon={isPositive ? FiTrendingUp : FiTrendingDown} className="text-xs" />
              {change}
            </div>
          </div>
          
          <div className="mb-2">
            <h3 className="text-2xl font-bold text-white">{value}</h3>
          </div>
          
          <p className="text-slate-400 text-sm">{title}</p>
          <p className="text-slate-500 text-xs mt-1">vs. previous {period}</p>
        </>
      )}
    </motion.div>
  );
};

export default MetricsCard;