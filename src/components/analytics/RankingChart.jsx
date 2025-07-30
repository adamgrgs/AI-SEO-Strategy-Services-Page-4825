import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const RankingChart = ({ period, isLoading }) => {
  const generateData = () => {
    const keywords = [
      'AI SEO tools',
      'LLM optimization',
      'ChatGPT SEO',
      'AI search strategy',
      'Machine learning SEO'
    ];
    
    const days = period === '7d' ? 7 : period === '30d' ? 30 : period === '90d' ? 90 : 365;
    const categories = [];
    
    for (let i = days; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      categories.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }
    
    const series = keywords.map((keyword, index) => {
      const data = [];
      let baseRank = 15 + index * 5; // Starting positions
      
      for (let i = 0; i < categories.length; i++) {
        // Simulate ranking improvements over time with some fluctuation
        const trend = -0.1; // Slight improvement trend
        const randomVariation = (Math.random() - 0.5) * 2;
        baseRank = Math.max(1, Math.min(50, baseRank + trend + randomVariation));
        data.push(Math.round(baseRank));
      }
      
      return {
        name: keyword,
        type: 'line',
        smooth: true,
        data: data,
        lineStyle: {
          width: 2
        }
      };
    });
    
    return { categories, series };
  };

  const { categories, series } = generateData();

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#1e293b',
      borderColor: '#475569',
      textStyle: {
        color: '#e2e8f0'
      },
      formatter: function(params) {
        let result = `<div style="margin-bottom: 5px;">${params[0].axisValue}</div>`;
        params.forEach(param => {
          result += `<div style="display: flex; align-items: center; margin-bottom: 3px;">
            <span style="display: inline-block; width: 10px; height: 10px; background-color: ${param.color}; border-radius: 50%; margin-right: 8px;"></span>
            ${param.seriesName}: Position ${param.value}
          </div>`;
        });
        return result;
      }
    },
    legend: {
      data: series.map(s => s.name),
      textStyle: {
        color: '#94a3b8'
      },
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '10%',
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
      inverse: true, // Lower numbers (better rankings) at top
      axisLine: {
        lineStyle: {
          color: '#475569'
        }
      },
      axisLabel: {
        color: '#94a3b8'
      },
      splitLine: {
        lineStyle: {
          color: '#334155'
        }
      },
      min: 1,
      max: 50
    },
    color: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'],
    series: series
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Keyword Rankings</h3>
        <p className="text-slate-400 text-sm">Google search position tracking</p>
      </div>
      
      {isLoading ? (
        <div className="h-80 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
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

export default RankingChart;