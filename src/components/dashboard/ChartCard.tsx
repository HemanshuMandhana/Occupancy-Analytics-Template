import React, { useState } from 'react';

interface ChartCardProps {
  title: string;
  className?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, className = '' }) => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);
  
  const chartData = [
    { month: 'Jan', occupied: 35, vacant: 25 },
    { month: 'Feb', occupied: 20, vacant: 15 },
    { month: 'Mar', occupied: 55, vacant: 10 },
    { month: 'Apr', occupied: 32, vacant: 20 },
    { month: 'May', occupied: 15, vacant: 8 }
  ];

  return (
    <article className={`bg-[#f6f7ff] border border-gray-200 rounded-xl p-5 shadow-sm h-[389px] flex flex-col ${className}`}>
      <div className="flex items-start gap-5 mb-5">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
          <img 
            src="/lovable-uploads/0d596334-15b7-41e8-b632-2f9024e60962.png" 
            alt="Chart icon"
            className="w-16 h-16"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-[rgba(46,75,181,1)] text-2xl font-semibold mb-1">
            {title}
          </h2>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-5 flex-1 flex flex-col">
        {/* Legend */}
        <div className="flex gap-5 mb-5 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[rgba(66,103,177,1)] rounded"></div>
            <span className="text-gray-600">Occupied</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[rgba(189,203,253,0.5)] rounded"></div>
            <span className="text-gray-600">Vacant</span>
          </div>
        </div>

        {/* Chart Area */}
        <div className="relative w-full flex-1">
          <div className="flex items-end justify-between h-full mb-3 relative pl-10 pr-3">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-full text-xs text-gray-500 absolute left-0 top-0">
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            {/* Chart bars container */}
            <div className="flex-1 flex items-end justify-between gap-2 h-full">
              {chartData.map((data, index) => {
                const total = data.occupied + data.vacant;
                const occupiedHeight = Math.min((data.occupied / 80) * 100, 95);
                const vacantHeight = Math.min((data.vacant / 80) * 100, 95);
                
                return (
                  <div key={data.month} className="flex flex-col items-center relative flex-1 max-w-[50px]">
                    {/* Tooltip */}
                    {hoveredBar === data.month && (
                      <div className="absolute -top-16 bg-black text-white rounded p-2 text-xs shadow-lg z-10 whitespace-nowrap">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm"></div>
                          <span>{data.occupied}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-[rgba(189,203,253,0.5)] rounded-sm"></div>
                          <span>{data.vacant}</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Stacked Bar */}
                    <div 
                      className="w-full mb-2 relative cursor-pointer bg-gray-100 rounded"
                      style={{ height: '85%' }}
                      onMouseEnter={() => setHoveredBar(data.month)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {/* Occupied portion (bottom) */}
                      <div 
                        className="bg-[rgba(66,103,177,1)] w-full absolute bottom-0 rounded-b"
                        style={{ height: `${occupiedHeight}%` }}
                      ></div>
                      {/* Vacant portion (top) */}
                      <div 
                        className="bg-[rgba(189,203,253,0.5)] w-full absolute rounded-t"
                        style={{ 
                          height: `${vacantHeight}%`,
                          bottom: `${occupiedHeight}%`
                        }}
                      ></div>
                    </div>
                    
                    {/* Month label */}
                    <span className="text-xs font-medium text-gray-700">{data.month}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};