import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiEye, FiMousePointer, FiShoppingCart, FiDollarSign } = FiIcons;

const ConversionFunnel = ({ period, isLoading }) => {
  const funnelData = [
    {
      stage: 'Visitors',
      icon: FiUsers,
      value: 125420,
      percentage: 100,
      color: 'from-blue-500 to-blue-600'
    },
    {
      stage: 'Page Views',
      icon: FiEye,
      value: 89543,
      percentage: 71.4,
      color: 'from-purple-500 to-purple-600'
    },
    {
      stage: 'Engagements',
      icon: FiMousePointer,
      value: 34567,
      percentage: 27.6,
      color: 'from-green-500 to-green-600'
    },
    {
      stage: 'Leads',
      icon: FiShoppingCart,
      value: 8934,
      percentage: 7.1,
      color: 'from-orange-500 to-orange-600'
    },
    {
      stage: 'Conversions',
      icon: FiDollarSign,
      value: 2867,
      percentage: 2.3,
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Conversion Funnel</h3>
        <p className="text-slate-400 text-sm">User journey from visitor to conversion</p>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-slate-700 rounded-lg"></div>
                <div className="flex-1">
                  <div className="w-24 h-4 bg-slate-700 rounded mb-2"></div>
                  <div className="w-32 h-3 bg-slate-700 rounded"></div>
                </div>
                <div className="w-16 h-4 bg-slate-700 rounded"></div>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {funnelData.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${stage.color} rounded-lg flex items-center justify-center`}>
                    <SafeIcon icon={stage.icon} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{stage.stage}</h4>
                    <p className="text-slate-400 text-sm">{stage.value.toLocaleString()} users</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-white font-bold">{stage.percentage}%</span>
                  {index > 0 && (
                    <p className="text-slate-400 text-xs">
                      -{(funnelData[index-1].percentage - stage.percentage).toFixed(1)}% drop
                    </p>
                  )}
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    className={`bg-gradient-to-r ${stage.color} h-2 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>

              {/* Connector line to next stage */}
              {index < funnelData.length - 1 && (
                <div className="absolute left-5 top-16 w-0.5 h-6 bg-slate-600"></div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-slate-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-slate-400 text-sm">Conversion Rate</p>
            <p className="text-white font-bold text-lg">2.3%</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Avg. Value</p>
            <p className="text-white font-bold text-lg">$85.50</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Total Revenue</p>
            <p className="text-white font-bold text-lg">$245k</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">ROI</p>
            <p className="text-green-400 font-bold text-lg">324%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConversionFunnel;