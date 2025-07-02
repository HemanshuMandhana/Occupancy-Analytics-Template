
import React from 'react';
import { DateControls } from '../components/dashboard/DateControls';
import { ComparisonCard } from '../components/dashboard/ComparisonCard';

const Comparison: React.FC = () => {
  return (
    <div 
      className="h-full flex flex-col"
      style={{ 
        backgroundImage: 'url(/lovable-uploads/0b9933c1-1a2b-48be-a2dd-99bc9eee0647.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <DateControls />

      {/* Content with responsive padding that fills remaining space */}
      <div 
        className="flex-1 overflow-y-auto"
        style={{ 
          padding: 'clamp(8px, 1.2vh, 16px) clamp(12px, 1.5vw, 20px)',
          minHeight: '0' // Allow flex shrinking
        }}
      >
        <div 
          className="h-full flex flex-col"
          style={{ 
            gap: 'clamp(12px, 1.8vh, 20px)'
          }}
        >
          {/* Top row - Comparison tables with responsive grid */}
          <div 
            className="grid grid-cols-1 xl:grid-cols-2 flex-1"
            style={{ 
              gap: 'clamp(8px, 1.2vw, 16px)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(350px, 40vw, 450px), 1fr))',
              minHeight: '0' // Allow grid to shrink
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
            className="grid grid-cols-1 xl:grid-cols-2 flex-1"
            style={{ 
              gap: 'clamp(8px, 1.2vw, 16px)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(350px, 40vw, 450px), 1fr))',
              minHeight: '0' // Allow grid to shrink
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
    </div>
  );
};

export default Comparison;
