import React from 'react';
import { OccupancyCard } from '../components/dashboard/OccupancyCard';
import { VisitorCard } from '../components/dashboard/VisitorCard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { HeatMapCard } from '../components/dashboard/HeatMapCard';
import { DateControls } from '../components/dashboard/DateControls';

// Download Button Component
const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    // Implement download functionality
    console.log('Download initiated');
  };

  return (
    <button 
      className="hover:opacity-80 transition-opacity p-0 border-0 bg-transparent"
      onClick={handleDownload}
      aria-label="Download data as Excel file"
      style={{ 
        height: 'clamp(2rem, 5.2vmin, 4rem)',
        width: 'auto',
        aspectRatio: 'auto'
      }}
    >
      {/* Desktop view - Primary Download Button */}
      <img
        src="/images/Primary Download Button.svg"
        className="hidden sm:block w-full h-full object-contain"
        alt="Download button"
        style={{ 
          height: 'clamp(2rem, 5.2vmin, 4rem)',
          width: 'auto'
        }}
      />
      
      {/* Mobile view - Excel icon only */}
      <img
        src="/images/Excel icon.svg"
        className="block sm:hidden w-full h-full object-contain"
        alt="Download Excel file"
        style={{ 
          height: 'clamp(2rem, 5.2vmin, 4rem)',
          width: 'auto'
        }}
      />
    </button>
  );
};


const Index: React.FC = () => {
  return (
    <div className="min-h-full relative">
      {/* Fixed background layer that covers the full viewport */}
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/0b9933c1-1a2b-48be-a2dd-99bc9eee0647.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Header container with relative positioning */}
      <div className="relative">
        <DateControls />
        
        {/* Download Button positioned absolutely within the header container */}
        <div className="absolute top-0 right-[0.833vw] lg:right-[1.25vw] h-full flex items-center z-10">
          <DownloadButton />
        </div>
      </div>
      
      {/* Content with responsive top padding and minimal padding and spacing */}
      <div 
        className="px-[0.833vw] lg:px-[1.25vw] pb-[1.481vh] space-y-[2.222vh] lg:space-y-[2.222vh]"
        style={{ paddingTop: 'clamp(2.222vh, 2.222vh, 4.444vh)' }}
      >
        {/* Top row - Primary metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[2vw] lg:gap-[1.25vw]">
          <OccupancyCard />
          <VisitorCard />
          <ChartCard title="Zone Occupancy Day" />
        </div>

        {/* Bottom row - Heatmaps and charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[2vw] lg:gap-[1.25vw]">
          <HeatMapCard
            title="Visitors by Zone"
            subtitle="Heat Map"
            showDropdown={true}
          />
          <HeatMapCard
            title="Visitors by Zone"
            subtitle="Heat Map"
          />
          <ChartCard title="Zone Pick Occupancy Day" />
        </div>
      </div>
    </div>
  );
};

export default Index;