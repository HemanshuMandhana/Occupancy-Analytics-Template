
import React from 'react';
import { ComparisonTable } from './ComparisonTable';
import { ComparisonChart } from './ComparisonChart';

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
  return (
    <article className="border border-gray-200 rounded-xl p-6 shadow-sm bg-[#f6f7ff]">
      <div className="mb-4">
        <h2 className="text-[rgba(46,75,181,1)] text-xl font-semibold mb-2">
          {title}
        </h2>
        {subtitle && value && (
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm">{subtitle}</span>
            <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-3 py-1">
              <span className="text-[rgba(33,63,172,1)] text-lg font-bold">{value}</span>
            </div>
          </div>
        )}
      </div>
      
      {tableType && <ComparisonTable tableType={tableType} />}
      {chartType && <ComparisonChart chartType={chartType} />}
    </article>
  );
};
