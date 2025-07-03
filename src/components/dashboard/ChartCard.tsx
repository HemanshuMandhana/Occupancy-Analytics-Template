
import React, { useState, useEffect } from 'react';

interface ChartCardProps {
  title: string;
  className?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, className = '' }) => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  
  const chartData = [
    { month: 'Jan', occupied: 35, vacant: 25 },
    { month: 'Feb', occupied: 20, vacant: 15 },
    { month: 'Mar', occupied: 55, vacant: 10 },
    { month: 'Apr', occupied: 32, vacant: 20 },
    { month: 'May', occupied: 15, vacant: 8 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <article 
      className={`bg-[#f6f7ff] border border-gray-200 rounded-xl shadow-sm flex flex-col ${className}`}
      style={{
        minHeight: 'clamp(250px, 40vh, 400px)',
        padding: 'clamp(12px, 2vw, 24px)'
      }}
    >
      <div 
        className="flex items-start gap-[clamp(8px,1.5vw,16px)] mb-[clamp(12px,2vh,20px)]"
      >
        <div 
          className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            width: 'clamp(36px, 6vw, 48px)',
            height: 'clamp(36px, 6vw, 48px)'
          }}
        >
          <img 
            src="/lovable-uploads/0d596334-15b7-41e8-b632-2f9024e60962.png" 
            alt="Chart icon"
            className="w-full h-full"
          />
        </div>
        <div className="flex-1">
          <h2 
            className="text-[rgba(46,75,181,1)] font-semibold mb-1"
            style={{
              fontSize: 'clamp(14px, 2.5vw, 22px)',
              lineHeight: '1.2'
            }}
          >
            {title}
          </h2>
        </div>
      </div>

      <div 
        className="border border-gray-200 rounded-lg flex-1 flex flex-col"
        style={{ padding: 'clamp(8px, 1.5vw, 16px)' }}
      >
        {/* Legend */}
        <div 
          className="flex gap-[clamp(12px,2.5vw,24px)] mb-[clamp(12px,2vh,18px)]"
          style={{ fontSize: 'clamp(10px, 1.3vw, 14px)' }}
        >
          <div className="flex items-center gap-2">
            <div 
              className="bg-[rgba(66,103,177,1)] rounded"
              style={{
                width: 'clamp(8px, 1.2vw, 12px)',
                height: 'clamp(8px, 1.2vw, 12px)'
              }}
            ></div>
            <span className="text-gray-600">Occupied</span>
          </div>
          <div className="flex items-center gap-2">
            <div 
              className="bg-[rgba(189,203,253,0.7)] rounded"
              style={{
                width: 'clamp(8px, 1.2vw, 12px)',
                height: 'clamp(8px, 1.2vw, 12px)'
              }}
            ></div>
            <span className="text-gray-600">Vacant</span>
          </div>
        </div>

        {/* Chart Area */}
        <div className="relative w-full flex-1">
          <div 
            className="flex items-end justify-between h-full mb-2 relative"
            style={{
              paddingLeft: 'clamp(18px, 3vw, 36px)',
              paddingRight: 'clamp(6px, 1.2vw, 12px)'
            }}
          >
            {/* Y-axis labels */}
            <div 
              className="flex flex-col justify-between h-full text-gray-500 absolute left-0 top-0"
              style={{ fontSize: 'clamp(8px, 1vw, 12px)' }}
            >
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            {/* Chart bars container */}
            <div className="flex-1 flex items-end justify-between gap-1 h-full">
              {chartData.map((data, index) => {
                const total = data.occupied + data.vacant;
                const occupiedHeight = animationStarted ? Math.max((data.occupied / 80) * 100, 5) : 0;
                const vacantHeight = animationStarted ? Math.max((data.vacant / 80) * 100, 5) : 0;
                
                return (
                  <div 
                    key={data.month} 
                    className="flex flex-col items-center relative flex-1"
                    style={{ maxWidth: 'clamp(24px, 6vw, 48px)' }}
                  >
                    {/* Tooltip */}
                    {hoveredBar === data.month && (
                      <div 
                        className="absolute bg-black text-white rounded p-1 shadow-lg z-10 whitespace-nowrap"
                        style={{
                          top: '-48px',
                          fontSize: 'clamp(8px, 0.8vw, 10px)'
                        }}
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm"></div>
                          <span>{data.occupied}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-[rgba(189,203,253,0.7)] rounded-sm"></div>
                          <span>{data.vacant}</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Stacked Bar */}
                    <div 
                      className="w-full mb-1 relative cursor-pointer flex flex-col-reverse"
                      style={{ height: 'clamp(100px, 20vh, 160px)' }}
                      onMouseEnter={() => setHoveredBar(data.month)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {/* Occupied portion (bottom) */}
                      <div 
                        className="bg-[rgba(66,103,177,1)] w-full rounded-b transition-all duration-1000 ease-out"
                        style={{ 
                          height: `${occupiedHeight}%`, 
                          minHeight: animationStarted ? '4px' : '0px',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                      {/* Vacant portion (top) */}
                      <div 
                        className="bg-[rgba(189,203,253,0.7)] w-full rounded-t transition-all duration-1000 ease-out"
                        style={{ 
                          height: `${vacantHeight}%`,
                          minHeight: animationStarted ? '4px' : '0px',
                          transitionDelay: `${index * 100 + 200}ms`
                        }}
                      ></div>
                    </div>
                    
                    {/* Month label */}
                    <span 
                      className="font-medium text-gray-700"
                      style={{ fontSize: 'clamp(8px, 1vw, 12px)' }}
                    >
                      {data.month}
                    </span>
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
