
import React from 'react';
import { DateControls } from '../components/dashboard/DateControls';
import { ComparisonCard } from '../components/dashboard/ComparisonCard';

const Comparison: React.FC = () => {
  return (
    <div className="min-h-full">
      <DateControls />

      {/* Content with responsive scaling */}
      <div 
        className="space-y-[clamp(16px,3vh,32px)]"
        style={{ 
          paddingTop: 'clamp(12px, 2.5vh, 32px)',
          paddingLeft: 'clamp(12px, 2vw, 24px)',
          paddingRight: 'clamp(12px, 2vw, 24px)',
          paddingBottom: 'clamp(12px, 1.5vh, 20px)'
        }}
      >
        {/* Top row - Comparison tables */}
        <div 
          className="grid grid-cols-1 xl:grid-cols-2"
          style={{ gap: 'clamp(12px, 2vw, 24px)' }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard
              title="Zone Occupancy Day- Last week Comparison"
              subtitle="Total Building Occupancy"
              value="62"
              tableType="occupancy"
            />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard
              title="Zone Visitor Count- Last week Comparison"
              subtitle="Total Building Visitor count"
              value="693"
              tableType="visitor"
            />
          </div>
        </div>

        {/* Bottom row - Charts */}
        <div 
          className="grid grid-cols-1 xl:grid-cols-2"
          style={{ gap: 'clamp(12px, 2vw, 24px)' }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard title="Zone Occupancy Day Last week Comparison" chartType="occupancy" />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard title="Zone Visitor Count Week" chartType="visitor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
