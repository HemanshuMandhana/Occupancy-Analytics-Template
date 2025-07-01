
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { ChartLegend } from './ChartLegend';

interface ComparisonChartProps {
  chartType: 'occupancy' | 'visitor';
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({ chartType }) => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  const chartData = [
    { month: 'Jan', current: 60, last: 50 },
    { month: 'Feb', current: 20, last: 35 },
    { month: 'Mar', current: 60, last: 45 },
    { month: 'Apr', current: 35, last: 40 },
    { month: 'May', current: 15, last: 25 }
  ];

  return (
    <div className="mt-4">
      <ChartLegend />

      {/* Chart Area */}
      <div className="relative w-full">
        <div className="flex items-end justify-between h-48 mb-4 relative pl-12 pr-4">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between h-full text-xs text-gray-500 absolute left-0 top-0">
            <span>80</span>
            <span>60</span>
            <span>40</span>
            <span>20</span>
            <span>0</span>
          </div>

          {/* Chart bars container */}
          <div className="flex-1 flex items-end justify-between gap-4 h-full">
            {chartData.map((data, index) => {
              const currentHeight = Math.min((data.current / 80) * 100, 95);
              const lastHeight = Math.min((data.last / 80) * 100, 95);
              
              return (
                <div key={data.month} className="flex gap-1 items-end flex-1 max-w-[80px]">
                  {/* Current week bar */}
                  <div className="flex flex-col items-center relative flex-1">
                    {hoveredBar === `${data.month}-current` && (
                      <div className="absolute -top-16 bg-black text-white rounded p-2 text-xs shadow-lg z-10 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm"></div>
                          <span>{data.current}</span>
                        </div>
                      </div>
                    )}
                    
                    <div 
                      className="w-full bg-[rgba(66,103,177,1)] rounded cursor-pointer"
                      style={{ height: `${currentHeight}%`, minHeight: '8px', maxHeight: '180px' }}
                      onMouseEnter={() => setHoveredBar(`${data.month}-current`)}
                      onMouseLeave={() => setHoveredBar(null)}
                    ></div>
                  </div>

                  {/* Last week bar */}
                  <div className="flex flex-col items-center relative flex-1">
                    {hoveredBar === `${data.month}-last` && (
                      <div className="absolute -top-16 bg-black text-white rounded p-2 text-xs shadow-lg z-10 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-[rgba(189,203,253,0.5)] rounded-sm"></div>
                          <span>{data.last}</span>
                        </div>
                      </div>
                    )}
                    
                    <div 
                      className="w-full bg-[rgba(189,203,253,0.5)] rounded cursor-pointer"
                      style={{ height: `${lastHeight}%`, minHeight: '8px', maxHeight: '180px' }}
                      onMouseEnter={() => setHoveredBar(`${data.month}-last`)}
                      onMouseLeave={() => setHoveredBar(null)}
                    ></div>
                  </div>

                  {/* Month label - positioned below the bars */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <span className="text-xs font-medium text-gray-700">{data.month}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Month labels row */}
        <div className="flex justify-between px-12">
          {chartData.map((data) => (
            <span key={data.month} className="text-xs font-medium text-gray-700 flex-1 text-center">
              {data.month}
            </span>
          ))}
        </div>
      </div>

      {/* Download button for charts */}
      <div className="flex justify-end mt-4">
        <button className="flex items-center gap-2 px-3 py-2 border border-green-500 text-green-600 rounded hover:bg-green-50 transition-colors">
          <Download className="w-4 h-4" />
          <span className="text-sm">Download</span>
        </button>
      </div>
    </div>
  );
};
