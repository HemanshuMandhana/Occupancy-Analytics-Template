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
  return <article className="border border-gray-200 rounded-xl p-6 shadow-sm bg-[#f6f7ff]">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h2 className="text-[rgba(46,75,181,1)] text-2xl font-semibold mb-1">
            {title}
          </h2>
          <p className="text-blue-600 text-lg">
            {subtitle}
          </p>
        </div>
        {showDropdown && <div className="bg-[rgba(37,56,120,1)] text-white rounded px-4 py-2 flex items-center gap-2">
            <span className="text-lg font-medium">{selectedFloor}</span>
            <button onClick={() => setSelectedFloor(selectedFloor === 'Floor 1' ? 'Floor 2' : 'Floor 1')} className="text-white hover:opacity-80">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>}
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <img src={imageUrl} className="w-full h-auto object-contain" alt={`${title} visualization`} />
      </div>
    </article>;
};