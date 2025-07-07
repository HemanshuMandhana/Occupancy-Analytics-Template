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
      className="hover:opacity-80 transition-opacity"
      onClick={handleDownload}
      aria-label="Download data as Excel file"
    >
      {/* Desktop view - Primary Download Button */}
      <img
        src="/images/Primary Download Button.svg"
        className="hidden sm:block w-auto h-auto object-contain"
        alt="Download button"
      />
      
      {/* Mobile view - Excel icon only */}
      <img
        src="/images/Excel icon.svg"
        className="block sm:hidden w-auto h-auto object-contain"
        alt="Download Excel file"
      />
    </button>
  );
};

const Index: React.FC = () => {
  return (
    <div className="min-h-full relative">
      <DateControls />
      
      {/* Download Button positioned absolutely to align with DateControls */}
      <div className="absolute top-0 right-4 lg:right-6 h-[78.5px] flex items-center z-10">
        <DownloadButton />
      </div>
      
      {/* Content with responsive top padding and minimal padding and spacing */}
      <div 
        className="px-4 lg:px-6 pb-4 space-y-4 lg:space-y-6"
        style={{ paddingTop: 'clamp(24px, 3.5vh, 56px)' }}
      >
        {/* Top row - Primary metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          <OccupancyCard />
          <VisitorCard />
          <ChartCard title="Zone Occupancy Day" />
        </div>

        {/* Bottom row - Heatmaps and charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          <HeatMapCard
            title="Visitors by Zone"
            subtitle="Heat Map"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/1723715243527142b497157a3804e60b44a74ed5"
            showDropdown={true}
          />
          <HeatMapCard
            title="Visitors by Zone"
            subtitle="Heat Map"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/970f6635900e4a9f806bcb4025cddd419ccee06b"
          />
          <ChartCard title="Zone Pick Occupancy Day" />
        </div>
      </div>
    </div>
  );
};

export default Index;