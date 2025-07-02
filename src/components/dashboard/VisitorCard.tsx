
import React from 'react';
import { DataTable } from './DataTable';

export const VisitorCard: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-start gap-4 lg:gap-6 mb-4 lg:mb-6">
        <div className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
          <img 
            src="/lovable-uploads/c2137da9-89d7-4a16-b4c7-1371e400e7b7.png" 
            alt="Visitor icon" 
            className="w-12 lg:w-16 h-12 lg:h-16" 
          />
        </div>
        <div className="flex-1">
          <h3 className="text-[rgba(46,75,181,1)] font-semibold mb-2" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.25rem)' }}>
            Total Visitor Count
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-gray-500" style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}>Total Count</span>
            <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-2 lg:px-4 py-1 lg:py-2">
              <span className="text-[rgba(33,63,172,1)] font-bold" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.25rem)' }}>
                693
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <DataTable type="visitor" />
      </div>
    </div>
  );
};
