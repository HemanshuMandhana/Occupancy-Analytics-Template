
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

      {/* Content with proportional viewport-based spacing */}
      <div 
        className="flex-1 overflow-y-auto"
        style={{ 
          padding: '1.2vh 1.5vw',
          minHeight: '0'
        }}
      >
        <div 
          className="h-full flex flex-col"
          style={{ 
            gap: '1.8vh'
          }}
        >
          {/* Top row - Two equal sized comparison tables */}
          <div 
            className="grid grid-cols-1 xl:grid-cols-2 flex-1"
            style={{ 
              gap: '1.2vw',
              minHeight: '0'
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

          {/* Bottom row - Two equal sized charts */}
          <div 
            className="grid grid-cols-1 xl:grid-cols-2 flex-1"
            style={{ 
              gap: '1.2vw',
              minHeight: '0'
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
