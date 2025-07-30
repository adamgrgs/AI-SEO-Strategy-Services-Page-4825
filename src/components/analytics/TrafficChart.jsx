import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const TrafficChart = ({ period, isLoading }) => {
  // Generate sample data based on period
  const generateData = () => {
    const days = period === '7d' ? 7 : period === '30d' ? 30 : period === '90d' ? 90 : 365;
    const data = [];
    const categories = [];
    
    for (let i = days; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      categories.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
      
      // Generate realistic traffic data with some randomness
      const baseTraffic = 3000 + Math.sin(i / 7) * 500; // Weekly pattern
      const randomVariation = (Math.random() - 0.5) * 400;
      data.push(Math.round(baseTraffic + randomVariation));
    }
    
    return { categories, data };
  };

  const { categories, data } = generateData();

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#1e293b',
      borderColor: '#475569',
      textStyle: {
        color: '#e2e8f0'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: categories,
      axisLine: {
        lineStyle: {
          color: '#475569'
        }
      },
      axisLabel: {
        color: '#94a3b8'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#475569'
        }
      },
      axisLabel: {
        color: '#94a3b8',
        formatter: (value) => {
          if (value >= 1000) {
            return (value / 1000).toFixed(1) + 'k';
          }
          return value;
        }
      },
      splitLine: {
        lineStyle: {
          color: '#334155'
        }
      }
    },
    series: [
      {
        name: 'Organic Traffic',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          color: '#3b82f6',
          width: 3
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(59, 130, 246, 0.3)'
              },
              {
                offset: 1,
                color: 'rgba(59, 130, 246, 0.05)'
              }
            ]
          }
        },
        data: data
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Organic Traffic Trend</h3>
        <p className="text-slate-400 text-sm">Daily organic search traffic over time</p>
      </div>
      
      {isLoading ? (
        <div className="h-80 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="h-80">
          <ReactECharts
            option={option}
            style={{ height: '100%', width: '100%' }}
            opts={{ renderer: 'svg' }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default TrafficChart;