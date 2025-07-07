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
    <article className="h-[36.02vh] border border-gray-200 rounded-xl p-[2.22vh] shadow-sm bg-[#f6f7ff] flex flex-col">
      <div className="flex items-start justify-between mb-[2.22vh] flex-shrink-0">
        <div className="flex-1">
          <h2 className="text-[rgba(46,75,181,1)] text-[2.22vh] font-semibold mb-[0.37vh]">
            {title}
          </h2>
          <p className="text-blue-600 text-[1.67vh]">
            {subtitle}
          </p>
        </div>
        {showDropdown && (
          <div className="bg-[rgba(37,56,120,1)] text-white rounded px-[1.48vh] py-[0.74vh] flex items-center gap-[0.74vh] flex-shrink-0">
            <span className="text-[1.67vh] font-medium">{selectedFloor}</span>
            <button 
              onClick={() => setSelectedFloor(selectedFloor === 'Floor 1' ? 'Floor 2' : 'Floor 1')} 
              className="text-white hover:opacity-80"
            >
              <svg className="w-[1.48vh] h-[1.48vh]" fill="currentColor" viewBox="0 0 20 20">
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
      
      <div className="bg-gray-50 rounded-lg p-[1.48vh] flex-1 min-h-0">
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