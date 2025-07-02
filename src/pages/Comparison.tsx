
import React from 'react';
import { DateControls } from '../components/dashboard/DateControls';
import { ComparisonCard } from '../components/dashboard/ComparisonCard';

const Comparison: React.FC = () => {
  return (
    <div 
      className="min-h-full"
      style={{ 
        backgroundImage: 'url(/lovable-uploads/0b9933c1-1a2b-48be-a2dd-99bc9eee0647.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <DateControls />

      {/* Content with responsive padding and spacing that scales proportionally */}
      <div 
        className="space-y-6"
        style={{ 
          padding: 'clamp(16px, 2vh, 24px) clamp(16px, 2vw, 24px) clamp(16px, 2vh, 24px)',
          gap: 'clamp(24px, 3vh, 32px)'
        }}
      >
        {/* Top row - Comparison tables with responsive grid */}
        <div 
          className="grid grid-cols-1 xl:grid-cols-2"
          style={{ 
            gap: 'clamp(16px, 2vw, 24px)',
            // Ensure minimum card size to prevent overlap
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(400px, 45vw, 500px), 1fr))'
          }}
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

        {/* Bottom row - Charts with responsive grid */}
        <div 
          className="grid grid-cols-1 xl:grid-cols-2"
          style={{ 
            gap: 'clamp(16px, 2vw, 24px)',
            // Ensure minimum card size to prevent overlap
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(400px, 45vw, 500px), 1fr))'
          }}
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
