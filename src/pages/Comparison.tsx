
import React from 'react';
import { DateControls } from '../components/dashboard/DateControls';
import { ComparisonCard } from '../components/dashboard/ComparisonCard';

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

const Comparison: React.FC = () => {
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
        <div className="absolute top-0 right-4 lg:right-6 h-full flex items-center z-10">
          <DownloadButton />
        </div>
      </div>      

      {/* Content with responsive padding and proper height constraints */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-4 pb-4 h-full">
        {/* Grid container - responsive with proper height management */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 w-full h-full">
          {/* Top row - responsive height cards */}
          <div className="w-full h-[300px] sm:h-[320px] md:h-[350px] lg:h-[380px] xl:h-[320px] 2xl:h-[360px] bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard
              title="Zone Occupancy Day- Last week Comparison"
              subtitle="Total Building Occupancy"
              value="62"
              tableType="occupancy"
            />
          </div>
          <div className="w-full h-[300px] sm:h-[320px] md:h-[350px] lg:h-[380px] xl:h-[320px] 2xl:h-[360px] bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard
              title="Zone Visitor Count- Last week Comparison"
              subtitle="Total Building Visitor count"
              value="693"
              tableType="visitor"
            />
          </div>

          {/* Bottom row - responsive height cards with aligned heights */}
          <div className="w-full h-[380px] sm:h-[420px] md:h-[450px] lg:h-[480px] xl:h-[400px] 2xl:h-[450px] bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard title="Zone Occupancy Day Last week Comparison" chartType="occupancy" />
          </div>
          <div className="w-full h-[380px] sm:h-[420px] md:h-[450px] lg:h-[480px] xl:h-[400px] 2xl:h-[450px] bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard title="Zone Visitor Count Week" chartType="visitor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
