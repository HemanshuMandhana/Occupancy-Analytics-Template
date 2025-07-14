
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(6px,0.68vw,20px)] sm:gap-[clamp(12px,1.2vw,36px)] md:gap-[clamp(6px,0.68vw,20px)] w-full h-full">
          {/* Left Table */}
          <div className="w-full h-full overflow-hidden border border-gray-200">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>Last</th>
                  <th className="w-1/3 text-center font-medium py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
                    <td className="w-1/3 text-gray-600 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="w-full h-full overflow-hidden border border-gray-200">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>Last</th>
                  <th className="w-1/3 text-center font-medium py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
                    <td className="w-1/3 text-gray-600 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(6px,0.68vw,20px)] sm:gap-[clamp(12px,1.2vw,36px)] md:gap-[clamp(6px,0.68vw,20px)] w-full h-full">
          {/* Left Table */}
          <div className="w-full h-full overflow-hidden border border-gray-200">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>Last</th>
                  <th className="w-1/3 text-center font-medium py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
                    <td className="w-1/3 text-gray-600 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="w-full h-full overflow-hidden border border-gray-200">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>Last</th>
                  <th className="w-1/3 text-center font-medium py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
                    <td className="w-1/3 text-gray-600 text-center py-[clamp(2px,0.5vh,8px)]" style={{ fontSize: 'clamp(10px,min(0.707vw,1.257vh),16px)' }}>-</td>
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
      <div className="w-full" style={{ marginTop: 'clamp(12px,2.87vh,42px)' }}>
        {/* Chart Area with responsive padding */}
        <div className="relative border rounded-2xl border-gray-200 bg-[#F7F8FF] w-full h-full" style={{ 
          paddingTop: 'clamp(8px,2.083vh,30px)',
          paddingLeft: 'clamp(8px,0.859vw,25px)',
          paddingRight: 'clamp(8px,0.859vw,25px)',
          paddingBottom: 'clamp(12px,2.222vh,32px)'
        }}>
          <div className="flex flex-col h-full w-full">
            {/* Legend at the top */}
            <div className="flex flex-col sm:flex-row gap-[clamp(4px,0.5vw,12px)] sm:gap-[clamp(12px,1.25vw,36px)] flex-shrink-0" style={{ marginBottom: 'clamp(6px,1.481vh,21px)' }}>
              <div className="flex items-center gap-[clamp(3px,0.417vw,12px)]">
                <div className="bg-[rgba(66,103,177,1)] rounded" style={{ 
                  width: 'clamp(6px,0.833vw,24px)', 
                  height: 'clamp(6px,1.481vh,21px)' 
                }}></div>
                <span className="text-gray-600" style={{ fontSize: 'clamp(8px,min(0.8vw,1.4vh),16px)' }}>{legendText.current}</span>
              </div>
              <div className="flex items-center gap-[clamp(3px,0.417vw,12px)]">
                <div className="bg-[rgba(189,203,253,0.5)] rounded" style={{ 
                  width: 'clamp(6px,0.833vw,24px)', 
                  height: 'clamp(6px,1.481vh,21px)' 
                }}></div>
                <span className="text-gray-600" style={{ fontSize: 'clamp(8px,min(0.8vw,1.4vh),16px)' }}>{legendText.last}</span>
              </div>
            </div>

            {/* Chart area with Y-axis and bars */}
            <div className="flex items-end h-full w-full relative">
              {/* Y-axis labels */}
              <div className="flex flex-col justify-between text-gray-500 absolute left-0 bottom-0" style={{ 
                width: 'clamp(20px,2.5vw,48px)',
                height: 'clamp(100px,14.815vh,214px)',
                fontSize: 'clamp(8px,min(0.656vw,1.166vh),14px)'
              }}>
                <div className="flex items-center" style={{ height: 'clamp(8px,1.389vh,20px)' }}>80</div>
                <div className="flex items-center" style={{ height: 'clamp(8px,1.389vh,20px)' }}>60</div>
                <div className="flex items-center" style={{ height: 'clamp(8px,1.389vh,20px)' }}>40</div>
                <div className="flex items-center" style={{ height: 'clamp(8px,1.389vh,20px)' }}>20</div>
                <div className="flex items-center" style={{ height: 'clamp(8px,1.389vh,20px)' }}>0</div>
              </div>

              {/* Chart bars container */}
              <div className="flex items-end justify-start gap-[clamp(12px,1.25vw,36px)] flex-1 overflow-hidden" style={{ 
                marginLeft: 'clamp(20px,2.5vw,48px)',
                height: 'clamp(100px,14.815vh,214px)'
              }}>
                {chartData.map((data, index) => {
                  const maxValue = 80;
                  const chartHeight = Math.min(window.innerHeight * 0.14815, 214);
                  const currentHeight = Math.max((data.current / maxValue) * chartHeight, data.current > 0 ? 4 : 0);
                  const lastHeight = Math.max((data.last / maxValue) * chartHeight, data.last > 0 ? 4 : 0);
                  
                  return (
                    <div key={data.month} className="flex items-end relative" style={{ width: 'clamp(30px,4vw,76px)' }}>
                      {/* Grouped bars */}
                      <div className="flex items-end gap-0 w-full">
                        {/* Current week bar */}
                        <div className="flex flex-col items-center relative w-1/2">
                          {hoveredBar === `${data.month}-current` && (
                            <div className="absolute bg-black text-white rounded shadow-lg z-10 whitespace-nowrap" style={{ 
                              bottom: `${currentHeight + 8}px`,
                              padding: 'clamp(2px,0.417vw,8px) clamp(4px,0.417vw,12px)',
                              fontSize: 'clamp(8px,0.8vw,12px)'
                            }}>
                              <div className="flex items-center gap-[clamp(2px,0.208vw,4px)]">
                                <div className="bg-[rgba(66,103,177,1)] rounded-sm" style={{ 
                                  width: 'clamp(3px,0.417vw,8px)', 
                                  height: 'clamp(3px,0.741vh,12px)' 
                                }}></div>
                                <span>{data.current}</span>
                              </div>
                            </div>
                          )}
                          
                          <div 
                            className="w-full bg-[rgba(66,103,177,1)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80"
                            style={{ height: `${currentHeight}px` }}
                            onMouseEnter={() => setHoveredBar(`${data.month}-current`)}
                            onMouseLeave={() => setHoveredBar(null)}
                          ></div>
                        </div>

                        {/* Last week bar */}
                        <div className="flex flex-col items-center relative w-1/2">
                          {hoveredBar === `${data.month}-last` && (
                            <div className="absolute bg-black text-white rounded shadow-lg z-10 whitespace-nowrap" style={{ 
                              bottom: `${lastHeight + 8}px`,
                              padding: 'clamp(2px,0.417vw,8px) clamp(4px,0.417vw,12px)',
                              fontSize: 'clamp(8px,0.8vw,12px)'
                            }}>
                              <div className="flex items-center gap-[clamp(2px,0.208vw,4px)]">
                                <div className="bg-[rgba(189,203,253,0.5)] rounded-sm" style={{ 
                                  width: 'clamp(3px,0.417vw,8px)', 
                                  height: 'clamp(3px,0.741vh,12px)' 
                                }}></div>
                                <span>{data.last}</span>
                              </div>
                            </div>
                          )}
                          
                          <div 
                            className="w-full bg-[rgba(189,203,253,0.5)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80"
                            style={{ height: `${lastHeight}px` }}
                            onMouseEnter={() => setHoveredBar(`${data.month}-last`)}
                            onMouseLeave={() => setHoveredBar(null)}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Function to render title with special formatting for lower cards
  const renderTitle = () => {
    if (chartType) {
      if (title === "Zone Occupancy Day Last week Comparison") {
        return (
          <div className="flex items-start justify-between" style={{ height: 'clamp(42px,6.574vh,95px)' }}>
            <div className="flex-1 min-w-0">
              <div className="text-[rgba(46,75,181,1)] font-semibold leading-none" style={{ 
                fontSize: 'clamp(14px,min(1.702vw,3.026vh),32px)',
                height: 'clamp(24px,3.611vh,52px)'
              }}>
                Zone Occupancy Day
              </div>
              <div className="text-[rgba(46,75,181,1)] leading-none" style={{ 
                fontSize: 'clamp(12px,min(1.458vw,2.593vh),28px)',
                height: 'clamp(18px,2.963vh,43px)'
              }}>
                Last week Comparison
              </div>
            </div>
            
            {/* Download button for chart cards */}
            <div className="flex-shrink-0" style={{ marginLeft: 'clamp(4px,0.5vw,12px)' }}>
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="hover:opacity-80 transition-opacity cursor-pointer"
                style={{ 
                  width: 'clamp(60px,7vw,135px)', 
                  height: 'clamp(30px,5.185vh,75px)' 
                }}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex items-start justify-between" style={{ height: 'clamp(24px,3.611vh,52px)' }}>
            <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-none flex-1 min-w-0" style={{ fontSize: 'clamp(14px,min(1.702vw,3.026vh),32px)' }}>
              {title}
            </h2>
            
            {/* Download button for chart cards */}
            <div className="flex-shrink-0" style={{ marginLeft: 'clamp(4px,0.5vw,12px)' }}>
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="hover:opacity-80 transition-opacity cursor-pointer"
                style={{ 
                  width: 'clamp(60px,7vw,135px)', 
                  height: 'clamp(30px,5.185vh,75px)' 
                }}
              />
            </div>
          </div>
        );
      }
    }
    
    // For upper cards with tables
    return (
      <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-none" style={{ 
        fontSize: 'clamp(14px,min(1.702vw,3.026vh),32px)',
        height: 'clamp(24px,3.611vh,52px)'
      }}>
        {title}
      </h2>
    );
  };

  // Function to determine spacing between title/subtitle and content
  const getContentSpacing = () => {
    if (tableType) {
      return { marginTop: 'clamp(24px,6.036vh,87px)' };
    }
    return {};
  };

  return (
    <article 
      className={`border border-gray-200 shadow-sm bg-[#F7F8FF] w-full h-full relative ${
        chartType 
          ? 'flex flex-col' 
          : ''
      }`}
      style={{
        padding: chartType 
          ? 'clamp(12px,2.5vh,36px) clamp(12px,1.354vw,39px) clamp(8px,1.648vh,24px)' 
          : `clamp(12px,2.5vh,36px) clamp(10px,1.152vw,33px) 0`
      }}
    >
      {/* Header */}
      <div className="relative">
        <div className="flex-1">
          {renderTitle()}
          {subtitle && value && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[clamp(4px,0.5vw,12px)] sm:gap-[clamp(6px,0.625vw,18px)]" style={{ 
              height: 'auto',
              marginTop: 'clamp(6px,1.007vh,15px)'
            }}>
              <span className="text-gray-500" style={{ fontSize: 'clamp(10px,min(0.993vw,1.765vh),26px)' }}>{subtitle}</span>
              <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded flex items-center justify-center" style={{ 
                padding: 'clamp(2px,0.37vh,5px) clamp(6px,0.625vw,18px)',
                width: 'clamp(50px,6.235vw,113px)',
                height: 'clamp(28px,4.259vh,61px)'
              }}>
                <span className="text-[rgba(33,63,172,1)] font-bold" style={{ fontSize: 'clamp(14px,min(1.702vw,3.026vh),32px)' }}>{value}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Content with appropriate spacing */}
      <div style={getContentSpacing()}>
        {tableType && (
          <div className="w-full" style={{ 
            height: 'clamp(100px,15.046vh,217px)',
            paddingBottom: 'clamp(12px,2.891vh,42px)'
          }}>
            {renderTables()}
          </div>
        )}
        {renderChart()}
      </div>
    </article>
  );
};
