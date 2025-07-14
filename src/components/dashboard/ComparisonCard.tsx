
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
          <div className="w-full h-full overflow-hidden border border-gray-200 rounded">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-white' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-white'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="w-full h-full overflow-hidden border border-gray-200 rounded">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-white' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-white'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
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
          <div className="w-full h-full overflow-hidden border border-gray-200 rounded">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-white' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-white'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="w-full h-full overflow-hidden border border-gray-200 rounded">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[clamp(10px,1vw,16px)] px-[0.5vw] py-[1vh]">Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-white' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-white'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[clamp(8px,0.8vw,14px)] px-[0.5vw] py-[1vh]">-</td>
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
      <div className="mt-[2vh] w-full flex-1 min-h-0">
        {/* Chart Area with viewport-based scaling */}
        <div className="relative border rounded-2xl border-gray-200 bg-[#F7F8FF] pt-[2vh] px-[1vw] pb-[2vh] w-full h-full flex flex-col">
          {/* Legend at the top */}
          <div className="flex flex-col sm:flex-row gap-[1vw] mb-[1vh] text-[clamp(10px,1vw,16px)] flex-shrink-0">
            <div className="flex items-center gap-[0.5vw]">
              <div className="w-[1vw] h-[0.5vh] bg-[rgba(66,103,177,1)] rounded min-w-[12px] min-h-[8px]"></div>
              <span className="text-gray-600">{legendText.current}</span>
            </div>
            <div className="flex items-center gap-[0.5vw]">
              <div className="w-[1vw] h-[0.5vh] bg-[rgba(189,203,253,0.5)] rounded min-w-[12px] min-h-[8px]"></div>
              <span className="text-gray-600">{legendText.last}</span>
            </div>
          </div>

          {/* Chart area with Y-axis and bars */}
          <div className="flex items-end h-full w-full relative flex-1 min-h-0">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between text-gray-500 absolute left-0 bottom-0 h-full text-[clamp(8px,0.8vw,14px)] pr-[0.5vw] w-[3vw] min-w-[24px]">
              <div className="flex items-center">80</div>
              <div className="flex items-center">60</div>
              <div className="flex items-center">40</div>
              <div className="flex items-center">20</div>
              <div className="flex items-center">0</div>
            </div>

            {/* Chart bars container */}
            <div className="flex items-end justify-between gap-[1vw] flex-1 ml-[3vw] h-full overflow-hidden">
              {chartData.map((data, index) => {
                // Calculate heights based on actual chart area height
                const maxValue = 80;
                const containerHeight = 100; // Using percentage for responsive height
                const currentHeight = Math.max((data.current / maxValue) * containerHeight, data.current > 0 ? 8 : 0);
                const lastHeight = Math.max((data.last / maxValue) * containerHeight, data.last > 0 ? 8 : 0);
                
                return (
                  <div key={data.month} className="flex flex-col items-center relative flex-1 max-w-[4vw] min-w-[40px]">
                    {/* Month label */}
                    <div className="text-[clamp(8px,0.8vw,12px)] text-gray-600 mb-[0.5vh] text-center">
                      {data.month}
                    </div>
                    
                    {/* Grouped bars container */}
                    <div className="flex items-end gap-[0.2vw] w-full h-full">
                      {/* Current week bar */}
                      <div className="flex flex-col items-center relative w-1/2">
                        {hoveredBar === `${data.month}-current` && (
                          <div 
                            className="absolute bg-black text-white rounded px-2 py-1 text-[clamp(8px,0.8vw,12px)] shadow-lg z-10 whitespace-nowrap"
                            style={{ bottom: `${currentHeight + 10}%` }}
                          >
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm"></div>
                              <span>{data.current}</span>
                            </div>
                          </div>
                        )}
                        
                        <div 
                          className="w-full bg-[rgba(66,103,177,1)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80 min-h-[4px]"
                          style={{ height: `${currentHeight}%` }}
                          onMouseEnter={() => setHoveredBar(`${data.month}-current`)}
                          onMouseLeave={() => setHoveredBar(null)}
                        ></div>
                      </div>

                      {/* Last week bar */}
                      <div className="flex flex-col items-center relative w-1/2">
                        {hoveredBar === `${data.month}-last` && (
                          <div 
                            className="absolute bg-black text-white rounded px-2 py-1 text-[clamp(8px,0.8vw,12px)] shadow-lg z-10 whitespace-nowrap"
                            style={{ bottom: `${lastHeight + 10}%` }}
                          >
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-[rgba(189,203,253,0.5)] rounded-sm"></div>
                              <span>{data.last}</span>
                            </div>
                          </div>
                        )}
                        
                        <div 
                          className="w-full bg-[rgba(189,203,253,0.5)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80 min-h-[4px]"
                          style={{ height: `${lastHeight}%` }}
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
              <div className="text-[rgba(46,75,181,1)] font-semibold leading-tight text-[clamp(12px,1.2vw,20px)]">
                Zone Occupancy Day
              </div>
              <div className="text-[rgba(46,75,181,1)] leading-tight text-[clamp(10px,1vw,18px)]">
                Last week Comparison
              </div>
            </div>
            
            {/* Download button for chart cards */}
            <div className="flex-shrink-0 ml-[1vw]">
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="w-[6vw] h-[3vh] min-w-[80px] min-h-[32px] max-w-[120px] max-h-[48px] hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex items-start justify-between mb-[1vh]">
            <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-tight text-[clamp(12px,1.2vw,20px)] flex-1 min-w-0">
              {title}
            </h2>
            
            {/* Download button for chart cards */}
            <div className="flex-shrink-0 ml-[1vw]">
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="w-[6vw] h-[3vh] min-w-[80px] min-h-[32px] max-w-[120px] max-h-[48px] hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>
        );
      }
    }
    
    // For upper cards with tables
    return (
      <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-tight text-[clamp(12px,1.2vw,20px)] mb-[1vh]">
        {title}
      </h2>
    );
  };

  return (
    <article className={`border border-gray-200 shadow-sm bg-[#F7F8FF] w-full h-full relative flex flex-col ${
      chartType 
        ? 'p-[1.5vw]' 
        : 'p-[1.5vw]'
    }`}>
      {/* Header */}
      <div className="relative flex-shrink-0">
        <div className="flex-1">
          {renderTitle()}
          {subtitle && value && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[1vw] mt-[1vh]">
              <span className="text-gray-500 text-[clamp(10px,1vw,16px)]">{subtitle}</span>
              <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-[1vw] py-[0.5vh] flex items-center justify-center min-w-[60px]">
                <span className="text-[rgba(33,63,172,1)] font-bold text-[clamp(12px,1.2vw,20px)]">{value}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Content with appropriate spacing */}
      <div className={`flex-1 flex flex-col min-h-0 ${tableType ? 'mt-[2vh]' : ''}`}>
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
