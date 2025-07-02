
import React, { useState } from 'react';

interface DashboardChartProps {
  title: string;
}

export const DashboardChart: React.FC<DashboardChartProps> = ({ title }) => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  const chartData = [
    { month: 'Jan', occupied: 40, vacant: 25 },
    { month: 'Feb', occupied: 20, vacant: 15 },
    { month: 'Mar', occupied: 65, vacant: 35 },
    { month: 'Apr', occupied: 40, vacant: 25 },
    { month: 'May', occupied: 15, vacant: 10 }
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Legend */}
      <div className="flex gap-4 lg:gap-6 mb-4 lg:mb-6 text-xs lg:text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 lg:w-4 h-3 lg:h-4 bg-[rgba(66,103,177,1)] rounded"></div>
          <span className="text-gray-600">Occupied</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 lg:w-4 h-3 lg:h-4 bg-[rgba(189,203,253,0.5)] rounded"></div>
          <span className="text-gray-600">Vacant</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative w-full flex-1">
        <div 
          className="flex items-end justify-between mb-4 relative pl-8 lg:pl-12 pr-4"
          style={{ height: 'clamp(120px, 15vh, 200px)' }}
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
              const occupiedHeight = Math.min((data.occupied / 80) * 100, 95);
              const vacantHeight = Math.min((data.vacant / 80) * 100, 95);
              
              return (
                <div key={data.month} className="flex gap-1 items-end flex-1 max-w-[50px] lg:max-w-[70px]">
                  {/* Occupied bar */}
                  <div className="flex flex-col items-center relative flex-1">
                    {hoveredBar === `${data.month}-occupied` && (
                      <div className="absolute -top-12 lg:-top-16 bg-black text-white rounded p-1 lg:p-2 text-xs shadow-lg z-10 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm"></div>
                          <span>{data.occupied}</span>
                        </div>
                      </div>
                    )}
                    
                    <div 
                      className="w-full bg-[rgba(66,103,177,1)] rounded cursor-pointer"
                      style={{ 
                        height: `${occupiedHeight}%`, 
                        minHeight: '6px',
                        maxHeight: '180px'
                      }}
                      onMouseEnter={() => setHoveredBar(`${data.month}-occupied`)}
                      onMouseLeave={() => setHoveredBar(null)}
                    ></div>
                  </div>

                  {/* Vacant bar */}
                  <div className="flex flex-col items-center relative flex-1">
                    {hoveredBar === `${data.month}-vacant` && (
                      <div className="absolute -top-12 lg:-top-16 bg-black text-white rounded p-1 lg:p-2 text-xs shadow-lg z-10 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-[rgba(189,203,253,0.5)] rounded-sm"></div>
                          <span>{data.vacant}</span>
                        </div>
                      </div>
                    )}
                    
                    <div 
                      className="w-full bg-[rgba(189,203,253,0.5)] rounded cursor-pointer"
                      style={{ 
                        height: `${vacantHeight}%`, 
                        minHeight: '6px',
                        maxHeight: '180px'
                      }}
                      onMouseEnter={() => setHoveredBar(`${data.month}-vacant`)}
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
    </div>
  );
};
