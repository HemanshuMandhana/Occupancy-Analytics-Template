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

  const generateTableData = (count: number) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      zone: `Zone ${index + 1}`,
      last: Math.floor(Math.random() * 100),
      current: Math.floor(Math.random() * 100),
      entrance: `Entrance ${String.fromCharCode(65 + index)}`
    }));
  };

  const tableData = generateTableData(10);

  const renderTables = () => {
    if (tableType === 'occupancy') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.2vw] lg:gap-[0.68vw] w-full h-full">
          {/* Left Table */}
          <div className="w-full min-h-[12vh] lg:h-full overflow-hidden border border-gray-200 flex flex-col">
            <table className="w-full">
              <thead className="flex-shrink-0">
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Zone</th>
                </tr>
              </thead>
            </table>
            <div className="flex-1 overflow-y-auto scrollbar-hide max-h-[16vh] sm:max-h-[16vh] lg:max-h-full">
              <table className="w-full">
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.zone}</td>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.last}</td>
                      <td className="w-1/3 text-gray-600 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Table */}
          <div className="w-full min-h-[12vh] lg:h-full overflow-hidden border border-gray-200 flex flex-col">
            <table className="w-full">
              <thead className="flex-shrink-0">
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Zone</th>
                </tr>
              </thead>
            </table>
            <div className="flex-1 overflow-y-auto scrollbar-hide max-h-[16vh] sm:max-h-[16vh] lg:max-h-full">
              <table className="w-full">
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.zone}</td>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.last}</td>
                      <td className="w-1/3 text-gray-600 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (tableType === 'visitor') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.2vw] lg:gap-[0.68vw] w-full h-full">
          {/* Left Table */}
          <div className="w-full min-h-[12vh] lg:h-full overflow-hidden border border-gray-200 flex flex-col">
            <table className="w-full">
              <thead className="flex-shrink-0">
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Current</th>
                </tr>
              </thead>
            </table>
            <div className="flex-1 overflow-y-auto scrollbar-hide max-h-[16vh] sm:max-h-[16vh] lg:max-h-full">
              <table className="w-full">
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.entrance}</td>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.last}</td>
                      <td className="w-1/3 text-gray-600 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Table */}
          <div className="w-full min-h-[12vh] lg:h-full overflow-hidden border border-gray-200 flex flex-col">
            <table className="w-full">
              <thead className="flex-shrink-0">
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Current</th>
                </tr>
              </thead>
            </table>
            <div className="flex-1 overflow-y-auto scrollbar-hide max-h-[16vh] sm:max-h-[16vh] lg:max-h-full">
              <table className="w-full">
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.entrance}</td>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.last}</td>
                      <td className="w-1/3 text-gray-600 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.8vh]">{item.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
      <div className="mt-[2vh] sm:mt-[2.5vh] lg:mt-[2.87vh] w-full">
        {/* Chart Area with responsive padding */}
        <div className="relative border rounded-2xl border-gray-200 bg-[#F7F8FF] pt-[2vh] px-[2vw] lg:px-[0.859vw] pb-[2vh] lg:pb-[2.222vh] w-full h-full">
          <div className="flex flex-col h-full w-full">
            {/* Legend at the top */}
            <div className="flex flex-col sm:flex-row gap-[1vw] sm:gap-[2vw] lg:gap-[1.25vw] mb-[1.5vh] lg:mb-[1.481vh] text-sm flex-shrink-0">
              <div className="flex items-center gap-[1vw] sm:gap-[1.5vw] lg:gap-[0.417vw]">
                <div className="w-[2vw] sm:w-[1.8vw] lg:w-[0.833vw] h-[2vh] sm:h-[1.8vh] lg:h-[1.481vh] bg-[rgba(66,103,177,1)] rounded"></div>
                <span className="text-gray-600 text-sm sm:text-base lg:text-[min(0.8vw,1.4vh)]">{legendText.current}</span>
              </div>
              <div className="flex items-center gap-[1vw] sm:gap-[1.5vw] lg:gap-[0.417vw]">
                <div className="w-[2vw] sm:w-[1.8vw] lg:w-[0.833vw] h-[2vh] sm:h-[1.8vh] lg:h-[1.481vh] bg-[rgba(189,203,253,0.5)] rounded"></div>
                <span className="text-gray-600 text-sm sm:text-base lg:text-[min(0.8vw,1.4vh)]">{legendText.last}</span>
              </div>
            </div>

            {/* Chart area with Y-axis and bars */}
            <div className="flex items-end h-full w-full relative">
              {/* Y-axis labels */}
              <div className="flex flex-col justify-between text-gray-500 absolute left-0 bottom-0 w-[6vw] sm:w-[4vw] lg:w-[2.5vw] h-[20vh] sm:h-[18vh] lg:h-[14.815vh] text-xs sm:text-sm lg:text-[min(0.656vw,1.166vh)]">
                <div className="h-[3vh] sm:h-[2.5vh] lg:h-[1.389vh] flex items-center">80</div>
                <div className="h-[3vh] sm:h-[2.5vh] lg:h-[1.389vh] flex items-center">60</div>
                <div className="h-[3vh] sm:h-[2.5vh] lg:h-[1.389vh] flex items-center">40</div>
                <div className="h-[3vh] sm:h-[2.5vh] lg:h-[1.389vh] flex items-center">20</div>
                <div className="h-[3vh] sm:h-[2.5vh] lg:h-[1.389vh] flex items-center">0</div>
              </div>

              {/* Chart bars container */}
              <div className="flex items-end justify-start gap-[3vw] sm:gap-[2.5vw] lg:gap-[1.25vw] flex-1 ml-[6vw] sm:ml-[4vw] lg:ml-[2.5vw] h-[20vh] sm:h-[18vh] lg:h-[14.815vh] overflow-hidden">
                {chartData.map((data, index) => {
                  // Calculate heights based on actual chart area height
                  const maxValue = 80;
                  const chartHeightVH = window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 18 : 14.815;
                  const currentHeightVH = Math.max((data.current / maxValue) * chartHeightVH, data.current > 0 ? 0.5 : 0);
                  const lastHeightVH = Math.max((data.last / maxValue) * chartHeightVH, data.last > 0 ? 0.5 : 0);
                  
                  return (
                     <div key={data.month} className="flex items-end relative w-[8vw] sm:w-[6vw] lg:w-[4vw] max-w-[8vw] sm:max-w-[6vw] lg:max-w-[4vw]">
                      {/* Grouped bars */}
                      <div className="flex items-end gap-[0.5vw] sm:gap-[0.3vw] lg:gap-0 w-full">
                        {/* Current week bar */}
                        <div className="flex flex-col items-center relative w-1/2">
                          {hoveredBar === `${data.month}-current` && (
                            <div className="absolute bg-black text-white rounded px-[1vw] sm:px-[0.8vw] lg:px-[0.417vw] py-[1vh] sm:py-[0.8vh] lg:py-[0.741vh] text-xs sm:text-sm lg:text-xs shadow-lg z-10 whitespace-nowrap" style={{ 
                              bottom: `${currentHeightVH + 2}vh`
                            }}>
                              <div className="flex items-center gap-[0.5vw] sm:gap-[0.4vw] lg:gap-[0.208vw]">
                                <div className="w-[1vw] sm:w-[0.8vw] lg:w-[0.417vw] h-[1vh] sm:h-[0.8vh] lg:h-[0.741vh] bg-[rgba(66,103,177,1)] rounded-sm"></div>
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
                            <div className="absolute bg-black text-white rounded px-[1vw] sm:px-[0.8vw] lg:px-[0.417vw] py-[1vh] sm:py-[0.8vh] lg:py-[0.741vh] text-xs sm:text-sm lg:text-xs shadow-lg z-10 whitespace-nowrap" style={{ 
                              bottom: `${lastHeightVH + 2}vh`
                            }}>
                              <div className="flex items-center gap-[0.5vw] sm:gap-[0.4vw] lg:gap-[0.208vw]">
                                <div className="w-[1vw] sm:w-[0.8vw] lg:w-[0.417vw] h-[1vh] sm:h-[0.8vh] lg:h-[0.741vh] bg-[rgba(189,203,253,0.5)] rounded-sm"></div>
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
                      
                      {/* Month label */}
                      <div className="absolute -bottom-[3vh] left-1/2 transform -translate-x-1/2 text-gray-600 text-xs sm:text-sm lg:text-[min(0.656vw,1.166vh)] whitespace-nowrap">
                        {data.month}
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
          <div className="flex items-start justify-between h-auto lg:h-[6.574vh]">
            <div className="flex-1 min-w-0">
              <div className="text-[rgba(46,75,181,1)] font-semibold leading-none text-lg sm:text-xl lg:text-[min(1.702vw,3.026vh)] mb-1 lg:h-[3.611vh]">
                Zone Occupancy Day
              </div>
              <div className="text-[rgba(46,75,181,1)] leading-none text-base sm:text-lg lg:text-[min(1.458vw,2.593vh)] lg:h-[2.963vh]">
                Last week Comparison
              </div>
            </div>
            
            {/* Download button for chart cards */}
            <div className="flex-shrink-0 ml-[1vw] sm:ml-[1vw] lg:ml-[0.5vw]">
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="w-[12vw] sm:w-[10vw] lg:w-[7vw] h-auto lg:h-[5.185vh] hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex items-start justify-between h-auto lg:h-[3.611vh]">
            <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-none text-lg sm:text-xl lg:text-[min(1.702vw,3.026vh)] flex-1 min-w-0">
              {title}
            </h2>
            
            {/* Download button for chart cards */}
            <div className="flex-shrink-0 ml-[1vw] sm:ml-[1vw] lg:ml-[0.5vw]">
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="w-[12vw] sm:w-[10vw] lg:w-[7vw] h-auto lg:h-[5.185vh] hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>
        );
      }
    }
    
    // For upper cards with tables
    return (
      <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-none text-lg sm:text-xl lg:text-[min(1.702vw,3.026vh)] h-auto lg:h-[3.611vh]">
        {title}
      </h2>
    );
  };

  // Function to determine spacing between title/subtitle and content
  const getContentSpacing = () => {
    if (tableType) {
      // 1st and 2nd cards - responsive spacing
      return 'mt-[3vh] sm:mt-[4vh] lg:mt-[6.036vh]';
    }
    return '';
  };

  return (
    <div className="w-full h-full">
      {/* Add invisible scrollbar styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <article className={`border border-gray-200 shadow-sm bg-[#F7F8FF] w-full h-full relative ${
        chartType 
          ? 'px-[3vw] sm:px-[2.5vw] lg:px-[1.354vw] py-[3vh] sm:py-[3vh] lg:py-[2.5vh] pb-[2vh] sm:pb-[2vh] lg:pb-[1.648vh]' 
          : 'px-[3vw] sm:px-[2vw] lg:px-[1.152vw] pt-[3vh] sm:pt-[3vh] lg:pt-[2.5vh] pb-0'
      }`}>
        {/* Header */}
        <div className="relative">
          <div className="flex-1">
            {renderTitle()}
            {subtitle && value && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[1vw] sm:gap-[1vw] lg:gap-[0.625vw] h-auto sm:h-auto lg:h-[4.259vh] mt-[1vh] sm:mt-[1.5vh] lg:mt-[1.007vh]">
                <span className="text-gray-500 text-sm sm:text-base lg:text-[min(0.993vw,1.765vh)]">{subtitle}</span>
                <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-[2vw] sm:px-[1.5vw] lg:px-[0.625vw] py-[1vh] sm:py-[1vh] lg:py-[0.37vh] flex items-center justify-center w-[15vw] sm:w-[12vw] lg:w-[6.235vw] h-[5vh] sm:h-[5vh] lg:h-[4.259vh]">
                  <span className="text-[rgba(33,63,172,1)] font-bold text-lg sm:text-xl lg:text-[min(1.702vw,3.026vh)]">{value}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Content with appropriate spacing */}
        <div className={getContentSpacing()}>
          {tableType && (
            <div className="w-full h-auto lg:h-[15.046vh] pb-[2vh] lg:pb-[2.891vh]">
              {renderTables()}
            </div>
          )}
          {renderChart()}
        </div>
      </article>
    </div>
  );
};