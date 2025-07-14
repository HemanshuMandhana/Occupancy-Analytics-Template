
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1vw] w-full h-full">
          {/* Left Table */}
          <div className="w-full h-full overflow-hidden border border-gray-200">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
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
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1vw] w-full h-full">
          {/* Left Table */}
          <div className="w-full h-full overflow-hidden border border-gray-200">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
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
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[clamp(10px,1.2vw,16px)] py-[0.8vh]">Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[clamp(9px,1vw,14px)] py-[0.8vh]">-</td>
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
      <div className="mt-[2vh] w-full flex-1">
        {/* Chart Area with responsive padding */}
        <div className="relative border rounded-2xl border-gray-200 bg-[#F7F8FF] p-[1.5vw] w-full h-full flex flex-col">
          {/* Legend at the top */}
          <div className="flex flex-col sm:flex-row gap-[1vw] mb-[2vh] text-sm flex-shrink-0">
            <div className="flex items-center gap-[0.5vw]">
              <div className="w-[1vw] h-[1.5vh] bg-[rgba(66,103,177,1)] rounded" style={{ minWidth: '8px', minHeight: '12px' }}></div>
              <span className="text-gray-600 text-[clamp(10px,1vw,14px)]">{legendText.current}</span>
            </div>
            <div className="flex items-center gap-[0.5vw]">
              <div className="w-[1vw] h-[1.5vh] bg-[rgba(189,203,253,0.5)] rounded" style={{ minWidth: '8px', minHeight: '12px' }}></div>
              <span className="text-gray-600 text-[clamp(10px,1vw,14px)]">{legendText.last}</span>
            </div>
          </div>

          {/* Chart area with Y-axis and bars */}
          <div className="flex items-end flex-1 w-full relative min-h-0">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between text-gray-500 absolute left-0 bottom-0 w-[3vw] h-full text-[clamp(9px,0.8vw,12px)] z-10" style={{ minWidth: '30px' }}>
              <div className="h-[1.5vh] flex items-center">80</div>
              <div className="h-[1.5vh] flex items-center">60</div>
              <div className="h-[1.5vh] flex items-center">40</div>
              <div className="h-[1.5vh] flex items-center">20</div>
              <div className="h-[1.5vh] flex items-center">0</div>
            </div>

            {/* Chart bars container */}
            <div className="flex items-end justify-between gap-[1vw] flex-1 h-full overflow-hidden" style={{ marginLeft: 'max(3vw, 30px)' }}>
              {chartData.map((data, index) => {
                // Calculate heights based on container height
                const maxValue = 80;
                const containerHeight = 100; // percentage
                const currentHeight = Math.max((data.current / maxValue) * containerHeight, data.current > 0 ? 2 : 0);
                const lastHeight = Math.max((data.last / maxValue) * containerHeight, data.last > 0 ? 2 : 0);
                
                return (
                  <div key={data.month} className="flex items-end relative flex-1 max-w-[8vw]" style={{ minWidth: '40px' }}>
                    {/* Grouped bars */}
                    <div className="flex items-end gap-[0.2vw] w-full h-full">
                      {/* Current week bar */}
                      <div className="flex flex-col items-center relative flex-1 h-full">
                        {hoveredBar === `${data.month}-current` && (
                          <div className="absolute bg-black text-white rounded px-[0.5vw] py-[0.5vh] text-[clamp(8px,0.8vw,11px)] shadow-lg z-20 whitespace-nowrap bottom-full mb-1">
                            <div className="flex items-center gap-[0.3vw]">
                              <div className="w-[0.5vw] h-[0.8vh] bg-[rgba(66,103,177,1)] rounded-sm" style={{ minWidth: '4px', minHeight: '6px' }}></div>
                              <span>{data.current}</span>
                            </div>
                          </div>
                        )}
                        
                        <div 
                          className="w-full bg-[rgba(66,103,177,1)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80 self-end"
                          style={{ 
                            height: `${currentHeight}%`,
                            minHeight: data.current > 0 ? '2px' : '0'
                          }}
                          onMouseEnter={() => setHoveredBar(`${data.month}-current`)}
                          onMouseLeave={() => setHoveredBar(null)}
                        ></div>
                      </div>

                      {/* Last week bar */}
                      <div className="flex flex-col items-center relative flex-1 h-full">
                        {hoveredBar === `${data.month}-last` && (
                          <div className="absolute bg-black text-white rounded px-[0.5vw] py-[0.5vh] text-[clamp(8px,0.8vw,11px)] shadow-lg z-20 whitespace-nowrap bottom-full mb-1">
                            <div className="flex items-center gap-[0.3vw]">
                              <div className="w-[0.5vw] h-[0.8vh] bg-[rgba(189,203,253,0.5)] rounded-sm" style={{ minWidth: '4px', minHeight: '6px' }}></div>
                              <span>{data.last}</span>
                            </div>
                          </div>
                        )}
                        
                        <div 
                          className="w-full bg-[rgba(189,203,253,0.5)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80 self-end"
                          style={{ 
                            height: `${lastHeight}%`,
                            minHeight: data.last > 0 ? '2px' : '0'
                          }}
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
    );
  };

  // Function to render title with special formatting for lower cards
  const renderTitle = () => {
    if (chartType) {
      if (title === "Zone Occupancy Day Last week Comparison") {
        return (
          <div className="flex items-start justify-between mb-[1vh]">
            <div className="flex-1 min-w-0">
              <div className="text-[rgba(46,75,181,1)] font-semibold leading-tight text-[clamp(14px,1.8vw,24px)]">
                Zone Occupancy Day
              </div>
              <div className="text-[rgba(46,75,181,1)] leading-tight text-[clamp(12px,1.5vw,20px)]">
                Last week Comparison
              </div>
            </div>
            
            {/* Download button for chart cards */}
            <div className="flex-shrink-0 ml-[1vw]">
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="hover:opacity-80 transition-opacity cursor-pointer"
                style={{ 
                  width: 'clamp(80px, 8vw, 135px)', 
                  height: 'clamp(30px, 4vh, 56px)' 
                }}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex items-start justify-between mb-[1vh]">
            <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-tight text-[clamp(14px,1.8vw,24px)] flex-1 min-w-0">
              {title}
            </h2>
            
            {/* Download button for chart cards */}
            <div className="flex-shrink-0 ml-[1vw]">
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="hover:opacity-80 transition-opacity cursor-pointer"
                style={{ 
                  width: 'clamp(80px, 8vw, 135px)', 
                  height: 'clamp(30px, 4vh, 56px)' 
                }}
              />
            </div>
          </div>
        );
      }
    }
    
    // For upper cards with tables
    return (
      <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-tight text-[clamp(14px,1.8vw,24px)] mb-[1vh]">
        {title}
      </h2>
    );
  };

  return (
    <article className="border border-gray-200 shadow-sm bg-[#F7F8FF] w-full h-full flex flex-col p-[1.5vw] overflow-hidden" style={{ minPadding: '12px' }}>
      {/* Header */}
      <div className="flex-shrink-0">
        {renderTitle()}
        {subtitle && value && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[1vw] mb-[2vh]">
            <span className="text-gray-500 text-[clamp(11px,1.2vw,16px)]">{subtitle}</span>
            <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-[1vw] py-[0.5vh] flex items-center justify-center" style={{ minWidth: '60px', minHeight: '30px' }}>
              <span className="text-[rgba(33,63,172,1)] font-bold text-[clamp(16px,2vw,28px)]">{value}</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-h-0 flex flex-col">
        {tableType && (
          <div className="w-full flex-1 min-h-0">
            {renderTables()}
          </div>
        )}
        {renderChart()}
      </div>
    </article>
  );
};
