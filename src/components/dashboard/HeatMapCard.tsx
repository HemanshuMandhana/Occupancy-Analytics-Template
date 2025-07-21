import React, { useState } from 'react';

interface HeatMapCardProps {
  title: string;
  subtitle: string;
  showDropdown?: boolean;
}

const days = ['Tue 18', 'Wed 19', 'Thu 20', 'Fri 21', 'Sat 22', 'Sun 23', 'Mon 24'];
const hours = [
  '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM',
  '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM',
];

const values = [
  [2, 2, 10, 0, 0, 3, 21, 15, 30, 43, 15, 30, 19, 29, 6, 14, 3, 9, 1, 1, 1, 1, 3, 4],
  [3, 6, 1, 0, 0, 11, 12, 18, 26, 19, 12, 42, 22, 14, 13, 14, 8, 6, 12, 2, 1, 2, 2, 2],
  [4, 8, 0, 0, 4, 16, 23, 33, 57, 37, 18, 35, 42, 31, 15, 8, 10, 12, 4, 3, 3, 5, 3, 3],
  [8, 3, 7, 1, 2, 6, 4, 7, 5, 6, 13, 7, 4, 5, 3, 6, 1, 13, 1, 12, 32, 16, 3, 3],
  [1, 2, 6, 0, 0, 0, 1, 1, 2, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0],
  [3, 0, 0, 0, 0, 3, 6, 31, 43, 30, 25, 44, 30, 18, 15, 43, 7, 7, 2, 1, 3, 1, 3, 1],
];

const HeatMapFromImage = () => {
  const [hoveredCell, setHoveredCell] = useState<{ day: number; hour: number; x: number; y: number; value: number } | null>(null);
  
  // Find min and max for color intensity
  const allValues = values.flat();
  const maxVal = Math.max(...allValues);
  
  const getBackgroundColor = (value: number, dayIndex: number, hourIndex: number) => {
    if (value === 0) {
      // Alternating pattern for zero values: checkerboard pattern
      const isEvenSum = (dayIndex + hourIndex) % 2 === 0;
      return isEvenSum ? '#f5f5f5' : '#e8e8e8'; // Very light gray vs light gray
    }
    
    // Create yellow to orange to red gradient based on value intensity
    const intensity = value / maxVal;
    
    if (intensity <= 0.2) {
      return '#fff2cc'; // Very light yellow
    } else if (intensity <= 0.4) {
      return '#ffe066'; // Light yellow
    } else if (intensity <= 0.6) {
      return '#ffcc00'; // Yellow
    } else if (intensity <= 0.8) {
      return '#ff9900'; // Orange
    } else {
      return '#ff6600'; // Red-orange
    }
  };

  const handleCellHover = (event: React.MouseEvent, dayIndex: number, hourIndex: number, value: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredCell({
      day: dayIndex,
      hour: hourIndex,
      x: rect.left + rect.width / 2,
      y: rect.top,
      value: value
    });
  };

  const handleCellLeave = () => {
    setHoveredCell(null);
  };

  return (
    <div className="w-full h-full flex relative">
      <div className="flex flex-col h-full w-full">
        {/* Data rows */}
        <div className="flex-1 flex flex-col">
          {days.map((day, dayIndex) => (
            <div key={dayIndex} className="flex flex-1">
              <div 
                className="w-[12%] flex-shrink-0 flex flex-col items-end justify-center pr-1" 
              >
                <div 
                  className="text-gray-600 text-right" 
                  style={{ 
                    fontSize: 'clamp(4px, 0.6vw, 8px)', 
                    lineHeight: '1' 
                  }}
                >
                  {day}
                </div>
                <div 
                  className="text-gray-400" 
                  style={{ fontSize: 'clamp(3px, 0.4vw, 6px)' }}
                >
                  -
                </div>
              </div>
              {values[dayIndex].map((value, hourIndex) => (
                <div
                  key={hourIndex}
                  className="flex items-center justify-center flex-1 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-sm"
                  style={{
                    backgroundColor: getBackgroundColor(value, dayIndex, hourIndex),
                    color: value > maxVal * 0.7 ? '#fff' : '#000',
                    fontSize: 'clamp(6px, 0.5vw, 7px)',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => handleCellHover(e, dayIndex, hourIndex, value)}
                  onMouseLeave={handleCellLeave}
                >
                  {value > 0 ? value : ''}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Footer row with hour labels */}
        <div className="flex h-[20%]">
          <div className="w-[12%] flex-shrink-0"></div>
          {hours.map((hour, index) => (
            <div
              key={index}
              className="flex items-start justify-center flex-1"
            >
              <div
                className="text-gray-600"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                  fontSize: 'clamp(4px, 0.7vw, 10px)',
                  lineHeight: '1',
                  whiteSpace: 'nowrap'
                }}
              >
                {hour}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popover */}
      {hoveredCell && (
        <div
          className="fixed bg-gray-800 text-white px-3 py-2 rounded shadow-lg text-sm z-50 pointer-events-none"
          style={{
            left: hoveredCell.x,
            top: hoveredCell.y - 8,
            transform: 'translateX(-50%) translateY(-100%)',
          }}
        >
          <div className="text-center">
            <div className="font-semibold">{days[hoveredCell.day]}</div>
            <div>{hours[hoveredCell.hour]}</div>
            <div className="text-yellow-300 font-bold">Value: {hoveredCell.value}</div>
          </div>
          {/* Arrow pointing down */}
          <div 
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '5px solid #374151'
            }}
          />
        </div>
      )}
    </div>
  );
};

export const HeatMapCard: React.FC<HeatMapCardProps> = ({
  title,
  subtitle,
  showDropdown = false
}) => {
  const [selectedFloor, setSelectedFloor] = useState('Floor 1');

  return (
    <article className="w-full h-[36.02vh] min-h-[300px] max-w-full border border-gray-200 rounded-xl p-[2.20vh] shadow-sm bg-[#f6f7ff] flex flex-col">
      <div className="flex items-start justify-between flex-shrink-0 mb-[0.5vh]">
        <div className="flex-1 min-w-0">
          <h2 className="text-[rgba(46,75,181,1)] text-[max(2.22vh,14px)] font-semibold mb-[0.37vh] truncate">
            {title}
          </h2>
          <p className="text-blue-600 text-[max(1.67vh,10px)] truncate">{subtitle}</p>
        </div>
        {showDropdown && (
          <div className="bg-[rgba(37,56,120,1)] text-white rounded px-[1.48vh] py-[0.74vh] flex items-center gap-[0.74vh] flex-shrink-0 ml-2">
            <span className="text-[max(1.67vh,10px)] font-medium whitespace-nowrap">{selectedFloor}</span>
            <button
              onClick={() =>
                setSelectedFloor(selectedFloor === 'Floor 1' ? 'Floor 2' : 'Floor 1')
              }
              className="text-white hover:opacity-80 flex-shrink-0"
            >
              <svg className="w-[max(1.48vh,8px)] h-[max(1.48vh,8px)]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="bg-gray-50 rounded-sm flex-1 overflow-auto min-h-0">
        <HeatMapFromImage />
      </div>
    </article>
  );
};