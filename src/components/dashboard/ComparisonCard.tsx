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
    { month: 'Jan', current: 60, last: 45 },
    { month: 'Feb', current: 20, last: 32 },
    { month: 'Mar', current: 60, last: 38 },
    { month: 'Apr', current: 35, last: 40 },
    { month: 'May', current: 15, last: 52 }
  ];

  const renderTables = () => {
    if (tableType === 'occupancy') {
      return (
        <div className="grid grid-cols-2 gap-4">
          {/* Left Table */}
          <div className="w-full overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="px-3 py-2 text-left font-medium text-sm border-r border-gray-300">ZONE</th>
                  <th className="px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Last</th>
                  <th className="px-3 py-2 text-left font-medium text-sm">Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                    <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                    <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="w-full overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="px-3 py-2 text-left font-medium text-sm border-r border-gray-300">ZONE</th>
                  <th className="px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Last</th>
                  <th className="px-3 py-2 text-left font-medium text-sm">Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                    <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                    <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (tableType === 'visitor') {
      return (
        <div className="grid grid-cols-2 gap-4">
          {/* Left Table */}
          <div className="w-full overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Entrance</th>
                  <th className="px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Last</th>
                  <th className="px-3 py-2 text-left font-medium text-sm">Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                    <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                    <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="w-full overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Entrance</th>
                  <th className="px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Last</th>
                  <th className="px-3 py-2 text-left font-medium text-sm">Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                    <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                    <td className="px-3 py-2 text-gray-600 text-sm">-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderChart = () => {
    if (!chartType) return null;

    const legendText = chartType === 'occupancy' 
      ? { current: 'Current Week', last: 'Last week' }
      : { current: 'Visitor Current Week', last: 'Visitor Last week' };

    return (
      <div className="mt-4">
        {/* Chart Area with Outline - Fixed size 714x318.21 */}
        <div className="relative border border-gray-200 p-4 bg-white" style={{ width: '37.188vw', height: '29.464vh' }}>
          <div className="flex items-end justify-between h-full relative pl-8 pr-4">
            {/* Y-axis labels positioned to end below legends */}
            <div className="flex flex-col justify-between text-xs text-gray-500 absolute left-0 top-8 bottom-6">
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            {/* Chart bars container with legend inside */}
            <div className="flex-1 flex flex-col h-full ml-4">
              {/* Legend inside chart bars container */}
              <div className="flex gap-6 mb-4 text-sm flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[rgba(66,103,177,1)] rounded"></div>
                  <span className="text-gray-600">{legendText.current}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[rgba(189,203,253,0.5)] rounded"></div>
                  <span className="text-gray-600">{legendText.last}</span>
                </div>
              </div>

              {/* Chart bars with proper height calculation */}
              <div className="flex items-end justify-between gap-2 flex-1" style={{ height: '20.37vh' }}>
                {chartData.map((data, index) => {
                  // Calculate heights based on actual chart area height
                  const maxValue = 80;
                  const chartHeight = 220; // Available height for bars
                  const currentHeight = Math.max((data.current / maxValue) * chartHeight, data.current > 0 ? 8 : 0);
                  const lastHeight = Math.max((data.last / maxValue) * chartHeight, data.last > 0 ? 8 : 0);
                  
                  return (
                    <div key={data.month} className="flex gap-1 items-end flex-1 max-w-[60px] relative">
                      {/* Current week bar */}
                      <div className="flex flex-col items-center relative flex-1">
                        {hoveredBar === `${data.month}-current` && (
                          <div className="absolute -top-12 bg-black text-white rounded p-2 text-xs shadow-lg z-10 whitespace-nowrap">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm"></div>
                              <span>{data.current}</span>
                            </div>
                          </div>
                        )}
                        
                        <div 
                          className="w-full bg-[rgba(66,103,177,1)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80"
                          style={{ 
                            height: `${currentHeight}px`
                          }}
                          onMouseEnter={() => setHoveredBar(`${data.month}-current`)}
                          onMouseLeave={() => setHoveredBar(null)}
                        ></div>
                      </div>

                      {/* Last week bar */}
                      <div className="flex flex-col items-center relative flex-1">
                        {hoveredBar === `${data.month}-last` && (
                          <div className="absolute -top-12 bg-black text-white rounded p-2 text-xs shadow-lg z-10 whitespace-nowrap">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-[rgba(189,203,253,0.5)] rounded-sm"></div>
                              <span>{data.last}</span>
                            </div>
                          </div>
                        )}
                        
                        <div 
                          className="w-full bg-[rgba(189,203,253,0.5)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80"
                          style={{ 
                            height: `${lastHeight}px`
                          }}
                          onMouseEnter={() => setHoveredBar(`${data.month}-last`)}
                          onMouseLeave={() => setHoveredBar(null)}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Month labels */}
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                {chartData.map((data) => (
                  <span key={data.month} className="flex-1 text-center">{data.month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Function to render title with special formatting for 3rd card
  const renderTitle = () => {
    if (title === "Zone Occupancy Day Last week Comparison") {
      return (
        <div style={{ height: '6.574vh' }}>
          <div 
            className="text-[rgba(46,75,181,1)] font-semibold leading-none" 
            style={{ fontSize: '1.702vw', height: '3.611vh' }}
          >
            Zone Occupancy Day
          </div>
          <div 
            className="text-[rgba(46,75,181,1)] leading-none" 
            style={{ fontSize: '1.458vw', height: '2.963vh' }}
          >
            Last week Comparison
          </div>
        </div>
      );
    }
    return (
      <h2 
        className="text-[rgba(46,75,181,1)] font-semibold leading-none" 
        style={{ fontSize: '1.702vw', height: '3.611vh' }}
      >
        {title}
      </h2>
    );
  };

  // Function to determine spacing between title/subtitle and content
  const getContentSpacing = () => {
    if (title === "Zone Occupancy Day Last week Comparison") {
      // 3rd card - 31px between title and chart
      return { marginTop: '2.87vh' };
    } else if (chartType && !tableType) {
      // 4th card - 46px between title and chart
      return { marginTop: '4.259vh' };
    } else if (tableType) {
      // 1st and 2nd cards - 65.19px between subtitle and table
      return { marginTop: '6.036vh' };
    }
    return {};
  };

  return (
    <article className="border border-gray-200 p-6 shadow-sm bg-[#F7F8FF] w-full h-full relative">
      {/* Header with title and download button for charts */}
      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {renderTitle()}
            {subtitle && value && (
              <div className="flex items-center gap-3 mt-2">
                <span className="text-gray-500" style={{ fontSize: '0.993vw' }}>{subtitle}</span>
                <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-3 py-1 flex items-center justify-center" style={{ width: '6.235vw', height: '4.259vh' }}>
                  <span className="text-[rgba(33,63,172,1)] font-bold" style={{ fontSize: '1.702vw' }}>{value}</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Download button for charts - aligned with title in top-right */}
          {chartType && (
            <div className="flex-shrink-0 ml-4">
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="hover:opacity-80 transition-opacity cursor-pointer"
                style={{ width: '7vw', height: '5.185vh' }}
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Content with appropriate spacing */}
      <div style={getContentSpacing()}>
        {renderTables()}
        {renderChart()}
      </div>
    </article>
  );
};