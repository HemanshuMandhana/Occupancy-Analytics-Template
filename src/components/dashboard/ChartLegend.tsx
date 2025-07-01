
import React from 'react';

export const ChartLegend: React.FC = () => {
  return (
    <div className="flex gap-6 mb-6 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-[rgba(66,103,177,1)] rounded"></div>
        <span className="text-gray-600">Current Week</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-[rgba(189,203,253,0.5)] rounded"></div>
        <span className="text-gray-600">Last week</span>
      </div>
    </div>
  );
};
