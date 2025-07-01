
import React from 'react';
import { DateControls } from '../components/dashboard/DateControls';
import { ResponsiveComparisonCard } from '../components/dashboard/ResponsiveComparisonCard';

const Comparison: React.FC = () => {
  return (
    <div 
      className="h-screen overflow-hidden"
      style={{ 
        backgroundImage: 'url(/lovable-uploads/0b9933c1-1a2b-48be-a2dd-99bc9eee0647.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <DateControls />

      {/* Content with proper spacing and layout */}
      <div 
        className="px-4 lg:px-6 overflow-hidden"
        style={{ 
          height: 'calc(100vh - clamp(60px, 8vh, 78.5px))',
          paddingTop: 'clamp(16px, 2vh, 24px)',
          paddingBottom: 'clamp(16px, 2vh, 24px)'
        }}
      >
        {/* Container for both rows */}
        <div className="h-full flex flex-col gap-4 lg:gap-6">
          {/* Top row - Comparison tables */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 items-center justify-items-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg">
              <ResponsiveComparisonCard
                title="Zone Occupancy Day- Last week Comparison"
                subtitle="Total Building Occupancy"
                value="62"
                tableType="occupancy"
                cardType="top"
              />
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg">
              <ResponsiveComparisonCard
                title="Zone Visitor Count- Last week Comparison"
                subtitle="Total Building Visitor count"
                value="693"
                tableType="visitor"
                cardType="top"
              />
            </div>
          </div>

          {/* Bottom row - Charts */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 items-center justify-items-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg">
              <ResponsiveComparisonCard 
                title="Zone Occupancy Day Last week Comparison" 
                chartType="occupancy"
                cardType="bottom"
              />
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg">
              <ResponsiveComparisonCard 
                title="Zone Visitor Count Week" 
                chartType="visitor"
                cardType="bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
