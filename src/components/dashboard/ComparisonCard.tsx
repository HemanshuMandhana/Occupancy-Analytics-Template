
import React, { useState } from 'react';
import { Download } from 'lucide-react';

interface ComparisonCardProps {
  title: string;
  subtitle?: string;
  value?: string;
  tableType?: 'occupancy' | 'visitor';
  chartType?: 'occupancy' | 'visitor';
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({ 
  title, 
  subtitle, 
  value, 
  tableType, 
  chartType 
}) => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  const chartData = [
    { month: 'Jan', current: 60, last: 50 },
    { month: 'Feb', current: 20, last: 35 },
    { month: 'Mar', current: 60, last: 45 },
    { month: 'Apr', current: 35, last: 40 },
    { month: 'May', current: 15, last: 25 }
  ];

  const renderTable = () => {
    if (tableType === 'occupancy') {
      return (
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-[rgba(37,56,120,1)] text-white">
                <th className="px-3 py-2 text-left font-medium text-sm">ZONE</th>
                <th className="px-3 py-2 text-left font-medium text-sm">Last</th>
                <th className="px-3 py-2 text-left font-medium text-sm">Zone</th>
                <th className="px-3 py-2 text-left font-medium text-sm">ZONE</th>
                <th className="px-3 py-2 text-left font-medium text-sm">Last</th>
                <th className="px-3 py-2 text-left font-medium text-sm">Zone</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, index) => (
                <tr key={index} className={`border-b border-gray-200 ${index === 1 ? 'bg-gray-50' : ''}`}>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (tableType === 'visitor') {
      return (
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-[rgba(37,56,120,1)] text-white">
                <th className="px-3 py-2 text-left font-medium text-sm">Entrance</th>
                <th className="px-3 py-2 text-left font-medium text-sm">Last</th>
                <th className="px-3 py-2 text-left font-medium text-sm">Current</th>
                <th className="px-3 py-2 text-left font-medium text-sm">Entrance</th>
                <th className="px-3 py-2 text-left font-medium text-sm">Last</th>
                <th className="px-3 py-2 text-left font-medium text-sm">Current</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, index) => (
                <tr key={index} className={`border-b border-gray-200 ${index === 1 ? 'bg-gray-50' : ''}`}>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return null;
  };

  const renderChart = () => {
    if (!chartType) return null;

    return (
      <div className="mt-4">
        {/* Legend */}
        <div className="flex gap-6 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[rgba(66,103,177,1)] rounded"></div>
            <span className="text-gray-600">{chartType === 'occupancy' ? 'Current Week' : 'Visitor Current Week'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[rgba(189,203,253,0.5)] rounded"></div>
            <span className="text-gray-600">{chartType === 'occupancy' ? 'Last week' : 'Visitor Last week'}</span>
          </div>
        </div>

        {/* Chart Area */}
        <div className="relative">
          <div className="flex items-end justify-between h-40 mb-4 relative">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-full text-xs text-gray-500 mr-4 absolute -left-8">
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            {/* Chart bars */}
            <div className="flex-1 flex items-end justify-between gap-4 h-full ml-8">
              {chartData.map((data, index) => {
                const currentHeight = (data.current / 80) * 100;
                const lastHeight = (data.last / 80) * 100;
                
                return (
                  <div key={data.month} className="flex gap-1 items-end">
                    {/* Current week bar */}
                    <div className="flex flex-col items-center relative">
                      {hoveredBar === `${data.month}-current` && (
                        <div className="absolute -top-12 bg-black text-white rounded p-1 text-xs shadow-lg z-10 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm"></div>
                            <span>{data.current}</span>
                          </div>
                        </div>
                      )}
                      
                      <div 
                        className="w-8 bg-[rgba(66,103,177,1)] rounded cursor-pointer mb-2"
                        style={{ height: `${currentHeight}%`, minHeight: '4px' }}
                        onMouseEnter={() => setHoveredBar(`${data.month}-current`)}
                        onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                    </div>

                    {/* Last week bar */}
                    <div className="flex flex-col items-center relative">
                      {hoveredBar === `${data.month}-last` && (
                        <div className="absolute -top-12 bg-black text-white rounded p-1 text-xs shadow-lg z-10 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-[rgba(189,203,253,0.5)] rounded-sm"></div>
                            <span>{data.last}</span>
                          </div>
                        </div>
                      )}
                      
                      <div 
                        className="w-8 bg-[rgba(189,203,253,0.5)] rounded cursor-pointer mb-2"
                        style={{ height: `${lastHeight}%`, minHeight: '4px' }}
                        onMouseEnter={() => setHoveredBar(`${data.month}-last`)}
                        onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                      
                      {/* Month label - only show once per month */}
                      <span className="text-xs font-medium text-gray-700 mt-1">{data.month}</span>
                    </div>
                  </div>
                );
              })}
            </div>
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

  return (
    <article className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
      <div className="mb-4">
        <h2 className="text-[rgba(46,75,181,1)] text-xl font-semibold mb-2">
          {title}
        </h2>
        {subtitle && value && (
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm">{subtitle}</span>
            <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-3 py-1">
              <span className="text-[rgba(33,63,172,1)] text-lg font-bold">{value}</span>
            </div>
          </div>
        )}
      </div>
      
      {renderTable()}
      {renderChart()}
    </article>
  );
};
