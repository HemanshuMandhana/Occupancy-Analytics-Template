
import React, { useState } from 'react';
import { FileExcel } from 'lucide-react';

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
    { month: 'Feb', current: 20, last: 35 },
    { month: 'Mar', current: 60, last: 32 },
    { month: 'Apr', current: 35, last: 40 },
    { month: 'May', current: 15, last: 25 }
  ];

  const renderTable = () => {
    if (tableType === 'occupancy') {
      return (
        <div className="w-full overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-[rgba(37,56,120,1)] text-white">
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
                  }}
                >
                  ZONE
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
                  }}
                >
                  Last
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
                  }}
                >
                  Zone
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
                  }}
                >
                  ZONE
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
                  }}
                >
                  Last
                </th>
                <th 
                  className="w-1/6 text-left font-medium"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
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
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600"
                    style={{
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
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
        <div className="w-full overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-[rgba(37,56,120,1)] text-white">
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
                  }}
                >
                  Entrance
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
                  }}
                >
                  Last
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
                  }}
                >
                  Current
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
                  }}
                >
                  Entrance
                </th>
                <th 
                  className="w-1/6 text-left font-medium border-r border-gray-300"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
                  }}
                >
                  Last
                </th>
                <th 
                  className="w-1/6 text-left font-medium"
                  style={{
                    padding: 'clamp(8px, 1.5vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
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
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600 border-r border-gray-200"
                    style={{
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
                    }}
                  >
                    -
                  </td>
                  <td 
                    className="text-gray-600"
                    style={{
                      padding: 'clamp(8px, 1.5vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 14px)'
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
      <div style={{ marginTop: 'clamp(16px, 2.5vh, 24px)' }}>
        {/* Chart header with download button */}
        <div className="flex justify-between items-start mb-[clamp(16px,2.5vh,24px)]">
          {/* Legend */}
          <div 
            className="flex gap-[clamp(16px,3vw,32px)]"
            style={{ fontSize: 'clamp(12px, 1.4vw, 16px)' }}
          >
            <div className="flex items-center gap-2">
              <div 
                className="bg-[rgba(66,103,177,1)] rounded"
                style={{
                  width: 'clamp(12px, 1.8vw, 18px)',
                  height: 'clamp(12px, 1.8vw, 18px)'
                }}
              ></div>
              <span className="text-gray-600">Current Week</span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                className="bg-[rgba(189,203,253,0.5)] rounded"
                style={{
                  width: 'clamp(12px, 1.8vw, 18px)',
                  height: 'clamp(12px, 1.8vw, 18px)'
                }}
              ></div>
              <span className="text-gray-600">Last week</span>
            </div>
          </div>

          {/* Download button matching the image */}
          <button 
            className="flex items-center gap-2 border border-[rgba(32,116,74,1)] text-[rgba(32,116,74,1)] rounded hover:bg-[rgba(32,116,74,0.05)] transition-colors"
            style={{
              padding: 'clamp(6px, 1.2vw, 12px) clamp(12px, 2vw, 20px)',
              fontSize: 'clamp(12px, 1.4vw, 16px)'
            }}
          >
            <FileExcel 
              style={{
                width: 'clamp(16px, 2.5vw, 20px)',
                height: 'clamp(16px, 2.5vw, 20px)'
              }}
            />
            <span className="font-medium">Download</span>
          </button>
        </div>

        {/* Chart Area */}
        <div className="relative w-full">
          <div 
            className="flex items-end justify-between mb-4 relative"
            style={{
              height: 'clamp(200px, 35vh, 300px)',
              paddingLeft: 'clamp(30px, 5vw, 60px)',
              paddingRight: 'clamp(12px, 2vw, 24px)'
            }}
          >
            {/* Y-axis labels */}
            <div 
              className="flex flex-col justify-between h-full text-gray-500 absolute left-0 top-0"
              style={{ fontSize: 'clamp(10px, 1.2vw, 14px)' }}
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
                const currentHeight = Math.min((data.current / 80) * 100, 95);
                const lastHeight = Math.min((data.last / 80) * 100, 95);
                
                return (
                  <div 
                    key={data.month} 
                    className="flex items-end flex-1 relative"
                    style={{ 
                      gap: 'clamp(2px, 0.5vw, 8px)',
                      maxWidth: 'clamp(60px, 12vw, 120px)'
                    }}
                  >
                    {/* Current week bar */}
                    <div className="flex flex-col items-center relative flex-1">
                      {hoveredBar === `${data.month}-current` && (
                        <div 
                          className="absolute bg-black text-white rounded p-2 shadow-lg z-10 whitespace-nowrap"
                          style={{
                            top: '-64px',
                            fontSize: 'clamp(10px, 1vw, 12px)'
                          }}
                        >
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm"></div>
                            <span>{data.current}</span>
                          </div>
                        </div>
                      )}
                      
                      <div 
                        className="w-full bg-[rgba(66,103,177,1)] rounded cursor-pointer"
                        style={{ 
                          height: `${currentHeight}%`, 
                          minHeight: 'clamp(8px, 1.5vh, 16px)',
                          maxHeight: 'clamp(180px, 30vh, 280px)'
                        }}
                        onMouseEnter={() => setHoveredBar(`${data.month}-current`)}
                        onMouseLeave={() => setHoveredBar(null)}
                      ></div>
                    </div>

                    {/* Last week bar */}
                    <div className="flex flex-col items-center relative flex-1">
                      {hoveredBar === `${data.month}-last` && (
                        <div 
                          className="absolute bg-black text-white rounded p-2 shadow-lg z-10 whitespace-nowrap"
                          style={{
                            top: '-64px',
                            fontSize: 'clamp(10px, 1vw, 12px)'
                          }}
                        >
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-[rgba(189,203,253,0.5)] rounded-sm"></div>
                            <span>{data.last}</span>
                          </div>
                        </div>
                      )}
                      
                      <div 
                        className="w-full bg-[rgba(189,203,253,0.5)] rounded cursor-pointer"
                        style={{ 
                          height: `${lastHeight}%`, 
                          minHeight: 'clamp(8px, 1.5vh, 16px)',
                          maxHeight: 'clamp(180px, 30vh, 280px)'
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
              paddingLeft: 'clamp(30px, 5vw, 60px)',
              paddingRight: 'clamp(12px, 2vw, 24px)'
            }}
          >
            {chartData.map((data) => (
              <span 
                key={data.month} 
                className="font-medium text-gray-700 flex-1 text-center"
                style={{ fontSize: 'clamp(10px, 1.2vw, 14px)' }}
              >
                {data.month}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <article 
      className="border border-gray-200 rounded-xl shadow-sm bg-[#f6f7ff]"
      style={{ padding: 'clamp(16px, 2.5vw, 32px)' }}
    >
      <div style={{ marginBottom: 'clamp(16px, 2.5vh, 24px)' }}>
        <h2 
          className="text-[rgba(46,75,181,1)] font-semibold mb-2"
          style={{
            fontSize: 'clamp(16px, 2.5vw, 24px)',
            lineHeight: '1.2'
          }}
        >
          {title}
        </h2>
        {subtitle && value && (
          <div className="flex items-center gap-3">
            <span 
              className="text-gray-500"
              style={{ fontSize: 'clamp(12px, 1.5vw, 16px)' }}
            >
              {subtitle}
            </span>
            <div 
              className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded"
              style={{ padding: 'clamp(4px, 1vw, 8px) clamp(8px, 1.5vw, 16px)' }}
            >
              <span 
                className="text-[rgba(33,63,172,1)] font-bold"
                style={{ fontSize: 'clamp(14px, 2vw, 20px)' }}
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
