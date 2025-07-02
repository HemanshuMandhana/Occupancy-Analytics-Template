
import React, { useState } from 'react';

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
  
  return (
    <article 
      className="border border-gray-200 rounded-xl shadow-sm bg-[#f6f7ff] flex flex-col"
      style={{
        height: 'clamp(280px, 35vh, 389px)',
        padding: 'clamp(16px, 2vh, 24px)'
      }}
    >
      <div 
        className="flex items-start justify-between mb-4 flex-shrink-0"
        style={{ marginBottom: 'clamp(16px, 2vh, 24px)' }}
      >
        <div className="flex-1">
          <h2 
            className="text-[rgba(46,75,181,1)] font-semibold mb-1"
            style={{ fontSize: 'clamp(18px, 2.2vw, 24px)' }}
          >
            {title}
          </h2>
          <p 
            className="text-blue-600"
            style={{ fontSize: 'clamp(14px, 1.6vw, 18px)' }}
          >
            {subtitle}
          </p>
        </div>
        {showDropdown && (
          <div 
            className="bg-[rgba(37,56,120,1)] text-white rounded flex items-center gap-2 flex-shrink-0"
            style={{ 
              padding: 'clamp(6px, 0.8vh, 8px) clamp(12px, 1.5vw, 16px)',
              fontSize: 'clamp(14px, 1.6vw, 18px)'
            }}
          >
            <span className="font-medium">{selectedFloor}</span>
            <button 
              onClick={() => setSelectedFloor(selectedFloor === 'Floor 1' ? 'Floor 2' : 'Floor 1')} 
              className="text-white hover:opacity-80"
            >
              <svg 
                className="object-contain" 
                style={{ 
                  width: 'clamp(12px, 1.2vw, 16px)', 
                  height: 'clamp(12px, 1.2vw, 16px)' 
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
          </div>
        )}
      </div>
      
      <div 
        className="bg-gray-50 rounded-lg flex-1 min-h-0"
        style={{ padding: 'clamp(12px, 1.5vh, 16px)' }}
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
