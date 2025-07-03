
import React, { useState, useRef, useEffect } from 'react';

interface HeatMapCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  showDropdown?: boolean;
}

export const HeatMapCard: React.FC<HeatMapCardProps> = ({
  title,
  subtitle,
  imageUrl,
  showDropdown = false
}) => {
  const [selectedFloor, setSelectedFloor] = useState('Floor 1');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const floorOptions = ['Floor 1', 'Floor 2'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleFloorSelect = (floor: string) => {
    setSelectedFloor(floor);
    setIsDropdownOpen(false);
  };
  
  return (
    <article 
      className="border border-gray-200 rounded-xl shadow-sm bg-[#f6f7ff] flex flex-col"
      style={{
        height: 'clamp(280px, 45vh, 350px)',
        padding: 'clamp(12px, 2vw, 24px)'
      }}
    >
      <div className="flex items-start justify-between mb-[clamp(12px,2vh,20px)] flex-shrink-0">
        <div className="flex-1">
          <h2 
            className="text-[rgba(46,75,181,1)] font-semibold mb-1"
            style={{ fontSize: 'clamp(14px, 2.2vw, 20px)' }}
          >
            {title}
          </h2>
          <p 
            className="text-blue-600"
            style={{ fontSize: 'clamp(12px, 1.8vw, 16px)' }}
          >
            {subtitle}
          </p>
        </div>
        {showDropdown && (
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[rgba(37,56,120,1)] text-white rounded flex items-center gap-2 flex-shrink-0 hover:bg-[rgba(37,56,120,0.9)] transition-colors"
              style={{
                padding: 'clamp(6px, 1.2vw, 12px) clamp(8px, 1.5vw, 16px)',
                fontSize: 'clamp(12px, 1.5vw, 16px)'
              }}
            >
              <span className="font-medium">{selectedFloor}</span>
              <svg 
                className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                style={{
                  width: 'clamp(12px, 1.5vw, 16px)',
                  height: 'clamp(12px, 1.5vw, 16px)'
                }}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div 
                className="absolute right-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                style={{
                  minWidth: 'clamp(100px, 15vw, 120px)'
                }}
              >
                <div className="py-1">
                  {floorOptions.map((floor) => (
                    <button
                      key={floor}
                      onClick={() => handleFloorSelect(floor)}
                      className={`w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors ${
                        selectedFloor === floor ? 'bg-blue-50 text-blue-700' : ''
                      }`}
                      style={{ fontSize: 'clamp(11px, 1.3vw, 14px)' }}
                    >
                      {floor}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div 
        className="bg-gray-50 rounded-lg flex-1 min-h-0"
        style={{ padding: 'clamp(8px, 1.5vw, 16px)' }}
      >
        <div className="w-full h-full">
          <img 
            src={imageUrl} 
            className="w-full h-full object-contain" 
            alt={`${title} visualization`} 
          />
        </div>
      </div>
    </article>
  );
};
