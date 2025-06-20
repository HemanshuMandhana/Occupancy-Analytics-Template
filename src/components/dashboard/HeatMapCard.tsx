
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
    <article className="border border-gray-200 rounded-xl p-3 shadow-sm bg-[#f6f7ff] h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h2 className="text-[rgba(46,75,181,1)] text-lg font-semibold mb-1">
            {title}
          </h2>
          <p className="text-blue-600 text-sm">
            {subtitle}
          </p>
        </div>
        {showDropdown && (
          <div className="bg-[rgba(37,56,120,1)] text-white rounded px-2 py-1 flex items-center gap-1">
            <span className="text-sm font-medium">{selectedFloor}</span>
            <button 
              onClick={() => setSelectedFloor(selectedFloor === 'Floor 1' ? 'Floor 2' : 'Floor 1')} 
              className="text-white hover:opacity-80"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
      
      <div className="flex-1 bg-gray-50 rounded-lg p-2">
        <img 
          src={imageUrl} 
          className="w-full h-full object-contain" 
          alt={`${title} visualization`} 
        />
      </div>
    </article>
  );
};
