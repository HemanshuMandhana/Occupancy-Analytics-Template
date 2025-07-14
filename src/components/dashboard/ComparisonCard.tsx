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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.68vw] sm:gap-[1.2vw] md:gap-[0.68vw] w-full h-full">
          {/* Left Table */}
          <div className="w-full h-full overflow-hidden border border-gray-200">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
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
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.68vw] sm:gap-[1.2vw] md:gap-[0.68vw] w-full h-full">
          {/* Left Table */}
          <div className="w-full h-full overflow-hidden border border-gray-200">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
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
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
                    <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
                    <td className="w-1/3 text-gray-600 text-center text-[min(0.707vw,1.257vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.707vw,1.257vh)] py-[0.5vh]">-</td>
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
      <div className="mt-[2.87vh] sm:mt-[3.5vh] md:mt-[2.87vh] w-full">
        {/* Chart Area with responsive padding */}
        <div className="relative border rounded-2xl border-gray-200 bg-[#F7F8FF] pt-[2.083vh] px-[0.859vw] sm:px-[1.5vw] md:px-[0.859vw] pb-[2.222vh] w-full h-full">
          <div className="flex flex-col h-full w-full">
            {/* Legend at the top */}
            <div className="flex flex-col sm:flex-row gap-[0.5vw] sm:gap-[1.25vw] md:gap-[1.25vw] mb-[1.481vh] text-sm flex-shrink-0">
              <div className="flex items-center gap-[0.417vw] sm:gap-[0.8vw] md:gap-[0.417vw]">
                <div className="w-[0.833vw] sm:w-[1.5vw] md:w-[0.833vw] h-[1.481vh] sm:h-[2.5vh] md:h-[1.481vh] bg-[rgba(66,103,177,1)] rounded"></div>
                <span className="text-gray-600 text-[min(0.8vw,1.4vh)] sm:text-[min(1.4vw,2.4vh)] md:text-[min(0.8vw,1.4vh)]">{legendText.current}</span>
              </div>
              <div className="flex items-center gap-[0.417vw] sm:gap-[0.8vw] md:gap-[0.417vw]">
                <div className="w-[0.833vw] sm:w-[1.5vw] md:w-[0.833vw] h-[1.481vh] sm:h-[2.5vh] md:h-[1.481vh] bg-[rgba(189,203,253,0.5)] rounded"></div>
                <span className="text-gray-600 text-[min(0.8vw,1.4vh)] sm:text-[min(1.4vw,2.4vh)] md:text-[min(0.8vw,1.4vh)]">{legendText.last}</span>
              </div>
            </div>

            {/* Chart area with Y-axis and bars */}
            <div className="flex items-end h-full w-full relative">
              {/* Y-axis labels */}
              <div className="flex flex-col justify-between text-gray-500 absolute left-0 bottom-0 w-[2.5vw] sm:w-[4vw] md:w-[2.5vw] h-[14.815vh] sm:h-[20vh] md:h-[14.815vh] text-[min(0.656vw,1.166vh)] sm:text-[min(1.2vw,2vh)] md:text-[min(0.656vw,1.166vh)]">
                <div className="h-[1.389vh] sm:h-[2.5vh] md:h-[1.389vh] flex items-center">80</div>
                <div className="h-[1.389vh] sm:h-[2.5vh] md:h-[1.389vh] flex items-center">60</div>
                <div className="h-[1.389vh] sm:h-[2.5vh] md:h-[1.389vh] flex items-center">40</div>
                <div className="h-[1.389vh] sm:h-[2.5vh] md:h-[1.389vh] flex items-center">20</div>
                <div className="h-[1.389vh] sm:h-[2.5vh] md:h-[1.389vh] flex items-center">0</div>
              </div>

              {/* Chart bars container */}
              <div className="flex items-end justify-start min-gap-[1.25vw] sm:gap-[2vw] md:gap-[1.25vw] flex-1 ml-[2.5vw] sm:ml-[4vw] md:ml-[2.5vw] h-[14.815vh] sm:h-[20vh] md:h-[14.815vh] overflow-hidden">
                {chartData.map((data, index) => {
                  // Calculate heights based on actual chart area height
                  const maxValue = 80;
                  const chartHeightVH = window.innerWidth < 640 ? 20 : window.innerWidth < 768 ? 20 : 14.815;
                  const currentHeightVH = Math.max((data.current / maxValue) * chartHeightVH, data.current > 0 ? 0.5 : 0);
                  const lastHeightVH = Math.max((data.last / maxValue) * chartHeightVH, data.last > 0 ? 0.5 : 0);
                  
                  return (
                     <div key={data.month} className="flex items-end relative w-[4vw] sm:w-[6vw] md:w-[4vw] max-w-[4vw] sm:max-w-[6vw] md:max-w-[4vw]">
                      {/* Grouped bars */}
                      <div className="flex items-end gap-0 w-full">
                        {/* Current week bar */}
                        <div className="flex flex-col items-center relative w-1/2">
                          {hoveredBar === `${data.month}-current` && (
                            <div className="absolute bg-black text-white rounded px-[0.417vw] sm:px-[0.8vw] md:px-[0.417vw] py-[0.741vh] sm:py-[1.2vh] md:py-[0.741vh] text-xs sm:text-sm md:text-xs shadow-lg z-10 whitespace-nowrap" style={{ 
                              bottom: `${currentHeightVH + 2}vh`
                            }}>
                              <div className="flex items-center gap-[0.208vw] sm:gap-[0.4vw] md:gap-[0.208vw]">
                                <div className="w-[0.417vw] sm:w-[0.8vw] md:w-[0.417vw] h-[0.741vh] sm:h-[1.2vh] md:h-[0.741vh] bg-[rgba(66,103,177,1)] rounded-sm"></div>
                                <span>{data.current}</span>
                              </div>
                            </div>
                          )}
                          
                          <div 
                            className="w-full bg-[rgba(66,103,177,1)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80"
                            style={{ 
                              height: `${currentHeightVH}vh`
                            }}
                            onMouseEnter={() => setHoveredBar(`${data.month}-current`)}
                            onMouseLeave={() => setHoveredBar(null)}
                          ></div>
                        </div>

                        {/* Last week bar */}
                        <div className="flex flex-col items-center relative w-1/2">
                          {hoveredBar === `${data.month}-last` && (
                            <div className="absolute bg-black text-white rounded px-[0.417vw] sm:px-[0.8vw] md:px-[0.417vw] py-[0.741vh] sm:py-[1.2vh] md:py-[0.741vh] text-xs sm:text-sm md:text-xs shadow-lg z-10 whitespace-nowrap" style={{ 
                              bottom: `${lastHeightVH + 2}vh`
                            }}>
                              <div className="flex items-center gap-[0.208vw] sm:gap-[0.4vw] md:gap-[0.208vw]">
                                <div className="w-[0.417vw] sm:w-[0.8vw] md:w-[0.417vw] h-[0.741vh] sm:h-[1.2vh] md:h-[0.741vh] bg-[rgba(189,203,253,0.5)] rounded-sm"></div>
                                <span>{data.last}</span>
                              </div>
                            </div>
                          )}
                          
                          <div 
                            className="w-full bg-[rgba(189,203,253,0.5)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80"
                            style={{ 
                              height: `${lastHeightVH}vh`
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
      </div>
    );
  };

  // Function to render title with special formatting for lower cards
  const renderTitle = () => {
    if (chartType) {
      if (title === "Zone Occupancy Day Last week Comparison") {
        return (
          <div className="flex items-start justify-between h-[6.574vh] sm:h-[8vh] md:h-[6.574vh]">
            <div className="flex-1 min-w-0">
              <div className="text-[rgba(46,75,181,1)] font-semibold leading-none text-[min(1.702vw,3.026vh)] sm:text-[min(3vw,5vh)] md:text-[min(1.702vw,3.026vh)] h-[3.611vh] sm:h-[5vh] md:h-[3.611vh]">
                Zone Occupancy Day
              </div>
              <div className="text-[rgba(46,75,181,1)] leading-none text-[min(1.458vw,2.593vh)] sm:text-[min(2.5vw,4.2vh)] md:text-[min(1.458vw,2.593vh)] h-[2.963vh] sm:h-[4vh] md:h-[2.963vh]">
                Last week Comparison
              </div>
            </div>
            
            {/* Download button for chart cards */}
            <div className="flex-shrink-0 ml-[0.5vw] sm:ml-[1vw] md:ml-[0.5vw]">
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="w-[7vw] sm:w-[12vw] md:w-[7vw] h-[5.185vh] sm:h-[8vh] md:h-[5.185vh] hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex items-start justify-between h-[3.611vh] sm:h-[5vh] md:h-[3.611vh]">
            <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-none text-[min(1.702vw,3.026vh)] sm:text-[min(3vw,5vh)] md:text-[min(1.702vw,3.026vh)] flex-1 min-w-0">
              {title}
            </h2>
            
            {/* Download button for chart cards */}
            <div className="flex-shrink-0 ml-[0.5vw] sm:ml-[1vw] md:ml-[0.5vw]">
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="w-[7vw] sm:w-[12vw] md:w-[7vw] h-[5.185vh] sm:h-[8vh] md:h-[5.185vh] hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>
        );
      }
    }
    
    // For upper cards with tables
    return (
      <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-none text-[min(1.702vw,3.026vh)] sm:text-[min(3vw,5vh)] md:text-[min(1.702vw,3.026vh)] h-[3.611vh] sm:h-[5vh] md:h-[3.611vh]">
        {title}
      </h2>
    );
  };

  // Function to determine spacing between title/subtitle and content
  const getContentSpacing = () => {
    if (tableType) {
      // 1st and 2nd cards - responsive spacing
      return 'mt-[6.036vh] sm:mt-[8vh] md:mt-[6.036vh]';
    }
    return '';
  };

  return (
    <article className={`border border-gray-200 shadow-sm bg-[#F7F8FF] w-full h-full relative ${
      chartType 
        ? 'px-[1.354vw] sm:px-[2.5vw] md:px-[1.354vw] py-[2.5vh] sm:py-[4vh] md:py-[2.5vh] pb-[1.648vh] sm:pb-[3vh] md:pb-[1.648vh]' 
        : 'px-[1.152vw] sm:px-[2vw] md:px-[1.152vw] pt-[2.5vh] sm:pt-[4vh] md:pt-[2.5vh] pb-0'
    }`}>
      {/* Header */}
      <div className="relative">
        <div className="flex-1">
          {renderTitle()}
          {subtitle && value && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[0.5vw] sm:gap-[0.625vw] md:gap-[0.625vw] h-auto sm:h-[4.259vh] md:h-[4.259vh] mt-[1.007vh] sm:mt-[1.5vh] md:mt-[1.007vh]">
              <span className="text-gray-500 text-[min(0.993vw,1.765vh)] sm:text-[min(1.8vw,3vh)] md:text-[min(0.993vw,1.765vh)]">{subtitle}</span>
              <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-[0.625vw] sm:px-[1.2vw] md:px-[0.625vw] py-[0.37vh] sm:py-[0.8vh] md:py-[0.37vh] flex items-center justify-center w-[6.235vw] sm:w-[12vw] md:w-[6.235vw] h-[4.259vh] sm:h-[6vh] md:h-[4.259vh]">
                <span className="text-[rgba(33,63,172,1)] font-bold text-[min(1.702vw,3.026vh)] sm:text-[min(3vw,5vh)] md:text-[min(1.702vw,3.026vh)]">{value}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Content with appropriate spacing */}
      <div className={getContentSpacing()}>
        {tableType && (
          <div className="w-full h-[15.046vh] sm:h-[20vh] md:h-[15.046vh] pb-[2.891vh] sm:pb-[4vh] md:pb-[2.891vh]">
            {renderTables()}
          </div>
        )}
        {renderChart()}
      </div>
    </article>
  );
};