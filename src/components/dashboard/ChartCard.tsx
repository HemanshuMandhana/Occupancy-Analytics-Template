import React, { useState } from 'react';

interface ChartCardProps {
  title: string;
  className?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, className = '' }) => {
  const [hoveredMonth, setHoveredMonth] = useState<string | null>(null);
  
  const chartData = [
    { month: 'Jan', occupied: 40, vacant: 20 },
    { month: 'Feb', occupied: 25, vacant: 35 },
    { month: 'Mar', occupied: 65, vacant: 15 },
    { month: 'Apr', occupied: 55, vacant: 32 }, // This will show tooltip
    { month: 'May', occupied: 15, vacant: 45 }
  ];

  return (
    <article className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm ${className}`}>
      <div className="flex items-start gap-6 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
          <img 
            src="/lovable-uploads/0d596334-15b7-41e8-b632-2f9024e60962.png" 
            alt="Chart icon"
            className="w-10 h-10"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-[rgba(46,75,181,1)] text-2xl font-semibold">
            {title}
          </h2>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-4">
        {/* Legend */}
        <div className="flex gap-6 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[rgba(66,103,177,1)] rounded"></div>
            <span className="text-gray-600">Occupied</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border border-gray-400 rounded"></div>
            <span className="text-gray-600">Vacant</span>
          </div>
        </div>

        {/* Chart Area */}
        <div className="flex items-end justify-between h-48 mb-4">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between h-full text-xs text-gray-500 mr-4">
            <span>80</span>
            <span>60</span>
            <span>40</span>
            <span>20</span>
            <span>0</span>
          </div>

          {/* Chart bars */}
          <div className="flex-1 flex items-end justify-between gap-8 h-full">
            {chartData.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center relative">
                {/* Tooltip for April */}
                {data.month === 'Apr' && (
                  <div className="absolute -top-16 bg-gray-100 rounded p-2 text-xs shadow-lg z-10">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm"></div>
                      <span>55</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-white border border-gray-300 rounded-sm"></div>
                      <span>32</span>
                    </div>
                  </div>
                )}
                
                {/* Bar container */}
                <div className="flex flex-col items-center mb-2" style={{ height: '80%' }}>
                  <div className="w-12 bg-gray-200 rounded-t flex flex-col justify-end" style={{ height: '100%' }}>
                    {/* Occupied portion */}
                    <div 
                      className="bg-[rgba(66,103,177,1)] w-full rounded-t"
                      style={{ height: `${data.occupied}%` }}
                    ></div>
                    {/* Vacant portion */}
                    <div 
                      className="bg-white border-l border-r border-gray-300 w-full"
                      style={{ height: `${data.vacant}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Month label */}
                <span className="text-xs font-medium text-gray-700">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
