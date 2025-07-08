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
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'clamp(0.5rem, 1vw, 1rem)' }}>
          {/* Left Table */}
          <div className="w-full overflow-hidden border border-gray-200 rounded">
            <table className="w-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left border-r border-gray-300">ZONE</th>
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left border-r border-gray-300">Last</th>
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left">Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600 border-r border-gray-200">-</td>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600 border-r border-gray-200">-</td>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600">-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="w-full overflow-hidden border border-gray-200 rounded">
            <table className="w-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left border-r border-gray-300">ZONE</th>
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left border-r border-gray-300">Last</th>
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left">Zone</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600 border-r border-gray-200">-</td>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600 border-r border-gray-200">-</td>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600">-</td>
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
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'clamp(0.5rem, 1vw, 1rem)' }}>
          {/* Left Table */}
          <div className="w-full overflow-hidden border border-gray-200 rounded">
            <table className="w-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left border-r border-gray-300">Entrance</th>
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left border-r border-gray-300">Last</th>
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left">Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600 border-r border-gray-200">-</td>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600 border-r border-gray-200">-</td>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600">-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="w-full overflow-hidden border border-gray-200 rounded">
            <table className="w-full">
              <thead>
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left border-r border-gray-300">Entrance</th>
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left border-r border-gray-300">Last</th>
                  <th style={{ 
                    padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                    fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)',
                    fontWeight: '500'
                  }} className="text-left">Current</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index === 0 ? 'bg-[#FFFFFF00]' : index === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600 border-r border-gray-200">-</td>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600 border-r border-gray-200">-</td>
                    <td style={{ 
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)', 
                      fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
                    }} className="text-gray-600">-</td>
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
      <div style={{ marginTop: 'clamp(0.5rem, 1vh, 1rem)' }}>
        {/* Chart Area with responsive sizing */}
        <div className="relative border border-gray-200 bg-white rounded" style={{ 
          width: '100%',
          height: 'clamp(15rem, 29.464vh, 20rem)',
          padding: 'clamp(0.5rem, 1vw, 1rem)'
        }}>
          <div className="flex items-end justify-between h-full relative" style={{ 
            paddingLeft: 'clamp(1.5rem, 3vw, 2rem)', 
            paddingRight: 'clamp(0.5rem, 1vw, 1rem)' 
          }}>
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-full text-gray-500 absolute left-0" style={{ 
              fontSize: 'clamp(0.5rem, 1vw, 0.75rem)',
              top: 'clamp(1.5rem, 3vh, 2rem)',
              bottom: 'clamp(1rem, 2vh, 1.5rem)'
            }}>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            {/* Chart bars container with legend inside */}
            <div className="flex-1 flex flex-col h-full" style={{ marginLeft: 'clamp(0.5rem, 1vw, 1rem)' }}>
              {/* Legend inside chart bars container */}
              <div className="flex flex-shrink-0" style={{ 
                gap: 'clamp(1rem, 2vw, 1.5rem)', 
                marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
                fontSize: 'clamp(0.6rem, 1.2vw, 0.875rem)'
              }}>
                <div className="flex items-center" style={{ gap: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}>
                  <div className="bg-[rgba(66,103,177,1)] rounded" style={{ 
                    width: 'clamp(0.75rem, 1.5vw, 1rem)', 
                    height: 'clamp(0.75rem, 1.5vw, 1rem)' 
                  }}></div>
                  <span className="text-gray-600">{legendText.current}</span>
                </div>
                <div className="flex items-center" style={{ gap: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}>
                  <div className="bg-[rgba(189,203,253,0.5)] rounded" style={{ 
                    width: 'clamp(0.75rem, 1.5vw, 1rem)', 
                    height: 'clamp(0.75rem, 1.5vw, 1rem)' 
                  }}></div>
                  <span className="text-gray-600">{legendText.last}</span>
                </div>
              </div>

              {/* Chart bars with responsive height */}
              <div className="flex items-end justify-between flex-1" style={{ 
                gap: 'clamp(0.125rem, 0.25vw, 0.25rem)',
                height: 'clamp(10rem, 20.37vh, 15rem)'
              }}>
                {chartData.map((data, index) => {
                  // Calculate heights based on container height
                  const maxValue = 80;
                  const containerHeight = window.innerHeight * 0.15; // Responsive height calculation
                  const currentHeight = Math.max((data.current / maxValue) * containerHeight, data.current > 0 ? 8 : 0);
                  const lastHeight = Math.max((data.last / maxValue) * containerHeight, data.last > 0 ? 8 : 0);
                  
                  return (
                    <div key={data.month} className="flex items-end flex-1 relative" style={{ 
                      gap: 'clamp(0.125rem, 0.25vw, 0.25rem)',
                      maxWidth: 'clamp(2rem, 4vw, 4rem)'
                    }}>
                      {/* Current week bar */}
                      <div className="flex flex-col items-center relative flex-1">
                        {hoveredBar === `${data.month}-current` && (
                          <div className="absolute bg-black text-white rounded shadow-lg z-10 whitespace-nowrap" style={{ 
                            top: 'clamp(-3rem, -6vh, -2rem)',
                            padding: 'clamp(0.25rem, 0.5vw, 0.5rem)',
                            fontSize: 'clamp(0.5rem, 1vw, 0.75rem)'
                          }}>
                            <div className="flex items-center" style={{ gap: 'clamp(0.125rem, 0.25vw, 0.25rem)' }}>
                              <div className="bg-[rgba(66,103,177,1)] rounded-sm" style={{ 
                                width: 'clamp(0.375rem, 0.75vw, 0.5rem)', 
                                height: 'clamp(0.375rem, 0.75vw, 0.5rem)' 
                              }}></div>
                              <span>{data.current}</span>
                            </div>
                          </div>
                        )}
                        
                        <div 
                          className="w-full bg-[rgba(66,103,177,1)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80"
                          style={{ 
                            height: `clamp(0.5rem, ${(data.current / maxValue) * 100}%, 15rem)`
                          }}
                          onMouseEnter={() => setHoveredBar(`${data.month}-current`)}
                          onMouseLeave={() => setHoveredBar(null)}
                        ></div>
                      </div>

                      {/* Last week bar */}
                      <div className="flex flex-col items-center relative flex-1">
                        {hoveredBar === `${data.month}-last` && (
                          <div className="absolute bg-black text-white rounded shadow-lg z-10 whitespace-nowrap" style={{ 
                            top: 'clamp(-3rem, -6vh, -2rem)',
                            padding: 'clamp(0.25rem, 0.5vw, 0.5rem)',
                            fontSize: 'clamp(0.5rem, 1vw, 0.75rem)'
                          }}>
                            <div className="flex items-center" style={{ gap: 'clamp(0.125rem, 0.25vw, 0.25rem)' }}>
                              <div className="bg-[rgba(189,203,253,0.5)] rounded-sm" style={{ 
                                width: 'clamp(0.375rem, 0.75vw, 0.5rem)', 
                                height: 'clamp(0.375rem, 0.75vw, 0.5rem)' 
                              }}></div>
                              <span>{data.last}</span>
                            </div>
                          </div>
                        )}
                        
                        <div 
                          className="w-full bg-[rgba(189,203,253,0.5)] rounded-t cursor-pointer transition-all duration-200 hover:opacity-80"
                          style={{ 
                            height: `clamp(0.5rem, ${(data.last / maxValue) * 100}%, 15rem)`
                          }}
                          onMouseEnter={() => setHoveredBar(`${data.month}-last`)}
                          onMouseLeave={() => setHoveredBar(null)}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Month labels */}
              <div className="flex justify-between text-gray-500" style={{ 
                marginTop: 'clamp(0.25rem, 0.5vh, 0.5rem)',
                fontSize: 'clamp(0.5rem, 1vw, 0.75rem)'
              }}>
                {chartData.map((data) => (
                  <span key={data.month} className="flex-1 text-center">{data.month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Function to render title with responsive formatting
  const renderTitle = () => {
    if (title === "Zone Occupancy Day Last week Comparison") {
      return (
        <div style={{ height: 'clamp(3rem, 6.574vh, 4rem)' }}>
          <div 
            className="text-[rgba(46,75,181,1)] font-semibold leading-none" 
            style={{ 
              fontSize: 'clamp(0.875rem, 1.702vw, 1.25rem)', 
              height: 'clamp(1.5rem, 3.611vh, 2rem)' 
            }}
          >
            Zone Occupancy Day
          </div>
          <div 
            className="text-[rgba(46,75,181,1)] leading-none" 
            style={{ 
              fontSize: 'clamp(0.75rem, 1.458vw, 1.125rem)', 
              height: 'clamp(1.25rem, 2.963vh, 1.75rem)' 
            }}
          >
            Last week Comparison
          </div>
        </div>
      );
    }
    return (
      <h2 
        className="text-[rgba(46,75,181,1)] font-semibold leading-none" 
        style={{ 
          fontSize: 'clamp(0.875rem, 1.702vw, 1.25rem)', 
          height: 'clamp(1.5rem, 3.611vh, 2rem)' 
        }}
      >
        {title}
      </h2>
    );
  };

  // Function to determine responsive spacing between title/subtitle and content
  const getContentSpacing = () => {
    if (title === "Zone Occupancy Day Last week Comparison") {
      // 3rd card - responsive spacing between title and chart
      return { marginTop: 'clamp(1rem, 2.87vh, 2rem)' };
    } else if (chartType && !tableType) {
      // 4th card - responsive spacing between title and chart
      return { marginTop: 'clamp(1.5rem, 4.259vh, 3rem)' };
    } else if (tableType) {
      // 1st and 2nd cards - responsive spacing between subtitle and table
      return { marginTop: 'clamp(2rem, 6.036vh, 4rem)' };
    }
    return {};
  };

  return (
    <article className="border border-gray-200 shadow-sm bg-[#F7F8FF] w-full h-full relative rounded" style={{ 
      padding: 'clamp(1rem, 2vw, 1.5rem)' 
    }}>
      {/* Header with title and download button for charts */}
      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {renderTitle()}
            {subtitle && value && (
              <div className="flex flex-col sm:flex-row sm:items-center" style={{ 
                gap: 'clamp(0.5rem, 1vw, 1rem)', 
                marginTop: 'clamp(0.25rem, 0.5vh, 0.5rem)' 
              }}>
                <span className="text-gray-500" style={{ fontSize: 'clamp(0.625rem, 0.993vw, 0.875rem)' }}>{subtitle}</span>
                <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded flex items-center justify-center" style={{ 
                  width: 'clamp(4rem, 6.235vw, 6rem)', 
                  height: 'clamp(2rem, 4.259vh, 3rem)',
                  padding: 'clamp(0.25rem, 0.5vw, 0.75rem)'
                }}>
                  <span className="text-[rgba(33,63,172,1)] font-bold" style={{ fontSize: 'clamp(0.875rem, 1.702vw, 1.25rem)' }}>{value}</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Download button for charts - responsive sizing */}
          {chartType && (
            <div className="flex-shrink-0" style={{ marginLeft: 'clamp(0.5rem, 1vw, 1rem)' }}>
              <img
                src="/images/Primary Download Button.svg"
                alt="Download button"
                className="hover:opacity-80 transition-opacity cursor-pointer"
                style={{ 
                  width: 'clamp(3rem, 7vw, 5rem)', 
                  height: 'clamp(2rem, 5.185vh, 3rem)' 
                }}
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Content with responsive spacing */}
      <div style={getContentSpacing()}>
        {renderTables()}
        {renderChart()}
      </div>
    </article>
  );
};