
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
    <article className="border border-gray-200 rounded-xl shadow-sm bg-[#f6f7ff] flex flex-col" style={{ height: '36.02vh', padding: '2.22vh' }}>
      <div className="flex items-start justify-between flex-shrink-0" style={{ marginBottom: '2.22vh' }}>
        <div className="flex-1">
          <h2 
            className="text-[rgba(46,75,181,1)] font-semibold"
            style={{ 
              fontSize: '2.22vh',
              marginBottom: '0.37vh'
            }}
          >
            {title}
          </h2>
          <p 
            className="text-blue-600"
            style={{ 
              fontSize: '1.67vh'
            }}
          >
            {subtitle}
          </p>
        </div>
        {showDropdown && (
          <div 
            className="bg-[rgba(37,56,120,1)] text-white rounded flex items-center flex-shrink-0"
            style={{ 
              padding: '0.74vh 1.48vh',
              gap: '0.74vh'
            }}
          >
            <span 
              className="font-medium"
              style={{ 
                fontSize: '1.67vh'
              }}
            >
              {selectedFloor}
            </span>
            <button 
              onClick={() => setSelectedFloor(selectedFloor === 'Floor 1' ? 'Floor 2' : 'Floor 1')} 
              className="text-white hover:opacity-80"
            >
              <svg 
                className="fill-current" 
                style={{ width: '1.48vh', height: '1.48vh' }}
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
      
      <div className="bg-gray-50 rounded-lg flex-1 min-h-0" style={{ padding: '1.48vh' }}>
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
