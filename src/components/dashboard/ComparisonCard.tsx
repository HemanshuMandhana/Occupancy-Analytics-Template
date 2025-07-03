
import React, { useState, useEffect } from 'react';
import { File } from 'lucide-react';

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
  const [animationStarted, setAnimationStarted] = useState(false);

  const chartData = [
    { month: 'Jan', current: 60, last: 45 },
    { month: 'Feb', current: 20, last: 35 },
    { month: 'Mar', current: 60, last: 32 },
    { month: 'Apr', current: 35, last: 40 },
    { month: 'May', current: 15, last: 25 }
  ];

  useEffect(() => {
    if (chartType) {
      const timer = setTimeout(() => {
        setAnimationStarted(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [chartType]);

  const renderTable = () => {
    if (tableType === 'occupancy') {
      return (
        <div className="w-full overflow-auto rounded-lg border border-gray-200" style={{ maxHeight: 'clamp(150px, 25vh, 300px)' }}>
          <table className="w-full table-fixed">
            <thead className="sticky top-0">
              <tr className="bg-[rgba(37,56,120,1)] text-white">
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)',
                    minHeight: 'clamp(32px, 5vh, 48px)'
                  }}
                >
                  ZONE
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)'
                  }}
                >
                  Last
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)'
                  }}
                >
                  Zone
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)'
                  }}
                >
                  ZONE
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)'
                  }}
                >
                  Last
                </th>
                <th 
                  className="w-1/6 text-left font-medium"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)'
                  }}
                >
                  Zone
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, index) => (
                <tr key={index} className={`border-b border-gray-200 ${index === 1 ? 'bg-gray-50' : ''}`}>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)',
                      minHeight: 'clamp(32px, 5vh, 48px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    -
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (tableType === 'visitor') {
      return (
        <div className="w-full overflow-auto rounded-lg border border-gray-200" style={{ maxHeight: 'clamp(150px, 25vh, 300px)' }}>
          <table className="w-full table-fixed">
            <thead className="sticky top-0">
              <tr className="bg-[rgba(37,56,120,1)] text-white">
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)',
                    minHeight: 'clamp(32px, 5vh, 48px)'
                  }}
                >
                  Entrance
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)'
                  }}
                >
                  Last
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)'
                  }}
                >
                  Current
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)'
                  }}
                >
                  Entrance
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)'
                  }}
                >
                  Last
                </th>
                <th 
                  className="w-1/6 text-left font-medium"
                  style={{
                    padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1vw, 12px)'
                  }}
                >
                  Current
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, index) => (
                <tr key={index} className={`border-b border-gray-200 ${index === 1 ? 'bg-gray-50' : ''}`}>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)',
                      minHeight: 'clamp(32px, 5vh, 48px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600"
                    style={{
                      padding: 'clamp(8px, 1.5vh, 16px) clamp(6px, 1.2vw, 12px)',
                      fontSize: 'clamp(8px, 1vw, 12px)'
                    }}
                  >
                    -
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return null;
  };

  const renderChart = () => {
    if (!chartType) return null;

    return (
      <div style={{ marginTop: 'clamp(12px, 2vh, 20px)' }}>
        {/* Chart Area */}
        <div className="relative w-full">
          <div 
            className="flex items-end justify-between mb-3 relative"
            style={{
              height: 'clamp(150px, 25vh, 250px)',
              paddingLeft: 'clamp(20px, 3vw, 40px)',
              paddingRight: 'clamp(8px, 1.5vw, 16px)'
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
            <div className="flex-1 flex items-end justify-between h-full">
              {chartData.map((data, index) => {
                const currentHeight = animationStarted ? Math.max((data.current / 80) * 100, 5) : 0;
                const lastHeight = animationStarted ? Math.max((data.last / 80) * 100, 5) : 0;
                
                return (
                  <div 
                    key={data.month} 
                    className="flex items-end flex-1 relative"
                    style={{ 
                      gap: 'clamp(1px, 0.3vw, 4px)',
                      maxWidth: 'clamp(40px, 8vw, 80px)'
                    }}
                  >
                    {/* Current week bar */}
                    <div className="flex flex-col items-center relative flex-1">
                      {hoveredBar === `${data.month}-current` && (
                        <div 
                          className="absolute bg-black text-white rounded p-1 shadow-lg z-10 whitespace-nowrap"
                          style={{
                            top: '-40px',
                            fontSize: 'clamp(8px, 0.8vw, 10px)'
                          }}
                        >
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm"></div>
                            <span>{data.current}</span>
                          </div>
                        </div>
                      )}
                      
                      <div 
                        className="w-full bg-[rgba(66,103,177,1)] rounded cursor-pointer transition-all duration-1000 ease-out hover:opacity-80"
                        style={{ 
                          height: `${currentHeight}%`,
                          minHeight: animationStarted ? '4px' : '0px',
                          transitionDelay: `${index * 100}ms`
                        }}
                        onMouseEnter={() => setHoveredBar(`${data.month}-current`)}
                        onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                    </div>

                    {/* Last week bar */}
                    <div className="flex flex-col items-center relative flex-1">
                      {hoveredBar === `${data.month}-last` && (
                        <div 
                          className="absolute bg-black text-white rounded p-1 shadow-lg z-10 whitespace-nowrap"
                          style={{
                            top: '-40px',
                            fontSize: 'clamp(8px, 0.8vw, 10px)'
                          }}
                        >
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-[rgba(189,203,253,0.7)] rounded-sm"></div>
                            <span>{data.last}</span>
                          </div>
                        </div>
                      )}
                      
                      <div 
                        className="w-full bg-[rgba(189,203,253,0.7)] rounded cursor-pointer transition-all duration-1000 ease-out hover:opacity-80"
                        style={{ 
                          height: `${lastHeight}%`,
                          minHeight: animationStarted ? '4px' : '0px',
                          transitionDelay: `${index * 100 + 200}ms`
                        }}
                        onMouseEnter={() => setHoveredBar(`${data.month}-last`)}
                        onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Month labels row */}
          <div 
            className="flex justify-between"
            style={{ 
              paddingLeft: 'clamp(20px, 3vw, 40px)',
              paddingRight: 'clamp(8px, 1.5vw, 16px)'
            }}
          >
            {chartData.map((data) => (
              <span 
                key={data.month} 
                className="font-medium text-gray-700 flex-1 text-center"
                style={{ fontSize: 'clamp(8px, 1vw, 12px)' }}
              >
                {data.month}
              </span>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div 
          className="flex gap-[clamp(12px,2vw,24px)] mt-[clamp(8px,1.5vh,16px)]"
          style={{ fontSize: 'clamp(10px, 1.2vw, 14px)' }}
        >
          <div className="flex items-center gap-2">
            <div 
              className="bg-[rgba(66,103,177,1)] rounded"
              style={{
                width: 'clamp(10px, 1.5vw, 14px)',
                height: 'clamp(10px, 1.5vw, 14px)'
              }}
            ></div>
            <span className="text-gray-600">Current Week</span>
          </div>
          <div className="flex items-center gap-2">
            <div 
              className="bg-[rgba(189,203,253,0.7)] rounded"
              style={{
                width: 'clamp(10px, 1.5vw, 14px)',
                height: 'clamp(10px, 1.5vw, 14px)'
              }}
            ></div>
            <span className="text-gray-600">Last week</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <article 
      className="border border-gray-200 rounded-xl shadow-sm bg-[#f6f7ff] relative"
      style={{ padding: 'clamp(12px, 2vw, 24px)' }}
    >
      {/* Download button positioned at top right */}
      {chartType && (
        <div className="absolute top-4 right-4 z-10">
          <button 
            className="hover:opacity-80 transition-opacity"
            aria-label="Download data as Excel file"
          >
            <img
              src="/images/Primary Download Button.svg"
              className="object-contain"
              alt="Download button"
              style={{
                width: 'clamp(80px, 12vw, 120px)',
                height: 'clamp(32px, 5vh, 48px)'
              }}
            />
          </button>
        </div>
      )}

      <div style={{ marginBottom: 'clamp(12px, 2vh, 20px)' }}>
        <h2 
          className="text-[rgba(46,75,181,1)] font-semibold mb-2"
          style={{
            fontSize: 'clamp(14px, 2.2vw, 20px)',
            lineHeight: '1.2'
          }}
        >
          {title}
        </h2>
        {subtitle && value && (
          <div className="flex items-center gap-3">
            <span 
              className="text-gray-500"
              style={{ fontSize: 'clamp(10px, 1.3vw, 14px)' }}
            >
              {subtitle}
            </span>
            <div 
              className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded"
              style={{ padding: 'clamp(3px, 0.8vw, 6px) clamp(6px, 1.2vw, 12px)' }}
            >
              <span 
                className="text-[rgba(33,63,172,1)] font-bold"
                style={{ fontSize: 'clamp(12px, 1.8vw, 16px)' }}
              >
                {value}
              </span>
            </div>
          </div>
        )}
      </div>
      
      {renderTable()}
      {renderChart()}
    </article>
  );
};
