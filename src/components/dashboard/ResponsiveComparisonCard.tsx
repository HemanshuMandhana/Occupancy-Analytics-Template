
import React, { useState } from 'react';
import { Download } from 'lucide-react';

interface ResponsiveComparisonCardProps {
  title: string;
  subtitle?: string;
  value?: string;
  tableType?: 'occupancy' | 'visitor';
  chartType?: 'occupancy' | 'visitor';
  cardType?: 'top' | 'bottom';
}

export const ResponsiveComparisonCard: React.FC<ResponsiveComparisonCardProps> = ({ 
  title, 
  subtitle, 
  value, 
  tableType, 
  chartType,
  cardType = 'top'
}) => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  const chartData = [
    { month: 'Jan', current: 60, last: 50 },
    { month: 'Feb', current: 20, last: 35 },
    { month: 'Mar', current: 60, last: 45 },
    { month: 'Apr', current: 35, last: 40 },
    { month: 'May', current: 15, last: 25 }
  ];

  const getCardDimensions = () => {
    if (cardType === 'top') {
      // Top cards: 767.26px × 382px on FHD
      return {
        width: 'clamp(350px, 39.96vw, 767.26px)',
        height: 'clamp(280px, 19.9vh, 382px)',
        minWidth: '350px',
        minHeight: '280px'
      };
    } else {
      // Bottom cards: 767px × 465px on FHD
      return {
        width: 'clamp(350px, 39.95vw, 767px)',
        height: 'clamp(340px, 24.22vh, 465px)',
        minWidth: '350px',
        minHeight: '340px'
      };
    }
  };

  const renderTable = () => {
    if (tableType === 'occupancy') {
      return (
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 text-xs lg:text-sm">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-[rgba(37,56,120,1)] text-white">
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium border-r border-gray-300">ZONE</th>
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium border-r border-gray-300">Last</th>
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium border-r border-gray-300">Zone</th>
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium border-r border-gray-300">ZONE</th>
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium border-r border-gray-300">Last</th>
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium">Zone</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, index) => (
                <tr key={index} className={`border-b border-gray-200 ${index === 1 ? 'bg-gray-50' : ''}`}>
                  <td className="px-2 lg:px-3 py-2 text-gray-600 border-r border-gray-200">-</td>
                  <td className="px-2 lg:px-3 py-2 text-gray-600 border-r border-gray-200">-</td>
                  <td className="px-2 lg:px-3 py-2 text-gray-600 border-r border-gray-200">-</td>
                  <td className="px-2 lg:px-3 py-2 text-gray-600 border-r border-gray-200">-</td>
                  <td className="px-2 lg:px-3 py-2 text-gray-600 border-r border-gray-200">-</td>
                  <td className="px-2 lg:px-3 py-2 text-gray-600">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (tableType === 'visitor') {
      return (
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 text-xs lg:text-sm">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-[rgba(37,56,120,1)] text-white">
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium border-r border-gray-300">Entrance</th>
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium border-r border-gray-300">Last</th>
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium border-r border-gray-300">Current</th>
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium border-r border-gray-300">Entrance</th>
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium border-r border-gray-300">Last</th>
                <th className="w-1/6 px-2 lg:px-3 py-2 text-left font-medium">Current</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, index) => (
                <tr key={index} className={`border-b border-gray-200 ${index === 1 ? 'bg-gray-50' : ''}`}>
                  <td className="px-2 lg:px-3 py-2 text-gray-600 border-r border-gray-200">-</td>
                  <td className="px-2 lg:px-3 py-2 text-gray-600 border-r border-gray-200">-</td>
                  <td className="px-2 lg:px-3 py-2 text-gray-600 border-r border-gray-200">-</td>
                  <td className="px-2 lg:px-3 py-2 text-gray-600 border-r border-gray-200">-</td>
                  <td className="px-2 lg:px-3 py-2 text-gray-600 border-r border-gray-200">-</td>
                  <td className="px-2 lg:px-3 py-2 text-gray-600">-</td>
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
      <div className="mt-4 flex-1 flex flex-col">
        {/* Legend */}
        <div className="flex gap-4 lg:gap-6 mb-4 lg:mb-6 text-xs lg:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 lg:w-4 h-3 lg:h-4 bg-[rgba(66,103,177,1)] rounded"></div>
            <span className="text-gray-600">Current Week</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 lg:w-4 h-3 lg:h-4 bg-[rgba(189,203,253,0.5)] rounded"></div>
            <span className="text-gray-600">Last week</span>
          </div>
        </div>

        {/* Chart Area */}
        <div className="relative w-full flex-1">
          <div 
            className="flex items-end justify-between mb-4 relative pl-8 lg:pl-12 pr-4"
            style={{ height: cardType === 'top' ? 'clamp(120px, 12vh, 180px)' : 'clamp(150px, 15vh, 220px)' }}
          >
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-full text-xs text-gray-500 absolute left-0 top-0">
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            {/* Chart bars container */}
            <div className="flex-1 flex items-end justify-between gap-2 lg:gap-4 h-full">
              {chartData.map((data, index) => {
                const currentHeight = Math.min((data.current / 80) * 100, 95);
                const lastHeight = Math.min((data.last / 80) * 100, 95);
                
                return (
                  <div key={data.month} className="flex gap-1 items-end flex-1 max-w-[50px] lg:max-w-[70px]">
                    {/* Current week bar */}
                    <div className="flex flex-col items-center relative flex-1">
                      {hoveredBar === `${data.month}-current` && (
                        <div className="absolute -top-12 lg:-top-16 bg-black text-white rounded p-1 lg:p-2 text-xs shadow-lg z-10 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm"></div>
                            <span>{data.current}</span>
                          </div>
                        </div>
                      )}
                      
                      <div 
                        className="w-full bg-[rgba(66,103,177,1)] rounded cursor-pointer"
                        style={{ 
                          height: `${currentHeight}%`, 
                          minHeight: '6px',
                          maxHeight: cardType === 'top' ? '160px' : '200px'
                        }}
                        onMouseEnter={() => setHoveredBar(`${data.month}-current`)}
                        onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                    </div>

                    {/* Last week bar */}
                    <div className="flex flex-col items-center relative flex-1">
                      {hoveredBar === `${data.month}-last` && (
                        <div className="absolute -top-12 lg:-top-16 bg-black text-white rounded p-1 lg:p-2 text-xs shadow-lg z-10 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-[rgba(189,203,253,0.5)] rounded-sm"></div>
                            <span>{data.last}</span>
                          </div>
                        </div>
                      )}
                      
                      <div 
                        className="w-full bg-[rgba(189,203,253,0.5)] rounded cursor-pointer"
                        style={{ 
                          height: `${lastHeight}%`, 
                          minHeight: '6px',
                          maxHeight: cardType === 'top' ? '160px' : '200px'
                        }}
                        onMouseEnter={() => setHoveredBar(`${data.month}-last`)}
                        onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Month labels row */}
          <div className="flex justify-between px-8 lg:px-12">
            {chartData.map((data) => (
              <span key={data.month} className="text-xs font-medium text-gray-700 flex-1 text-center">
                {data.month}
              </span>
            ))}
          </div>
        </div>

        {/* Download button for charts */}
        <div className="flex justify-end mt-4">
          <button className="flex items-center gap-2 px-3 py-2 border border-green-500 text-green-600 rounded hover:bg-green-50 transition-colors text-xs lg:text-sm">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <article 
      className="border border-gray-200 rounded-xl shadow-sm bg-[#f6f7ff] flex flex-col"
      style={getCardDimensions()}
    >
      <div className="mb-4 px-4 lg:px-6 pt-4 lg:pt-6 flex-shrink-0">
        <h2 
          className="text-[rgba(46,75,181,1)] font-semibold mb-2"
          style={{ fontSize: 'clamp(1rem, 1.25vw, 1.25rem)' }}
        >
          {title}
        </h2>
        {subtitle && value && (
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-xs lg:text-sm">{subtitle}</span>
            <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-2 lg:px-3 py-1">
              <span className="text-[rgba(33,63,172,1)] font-bold" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.125rem)' }}>
                {value}
              </span>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex-1 px-4 lg:px-6 pb-4 lg:pb-6 overflow-hidden">
        {renderTable()}
        {renderChart()}
      </div>
    </article>
  );
};
