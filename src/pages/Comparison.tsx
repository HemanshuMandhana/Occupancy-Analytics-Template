
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
    <div className="min-h-screen h-screen relative overflow-hidden">
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
      
      {/* Header container with responsive height */}
      <div className="relative h-[8vh] min-h-[60px] max-h-[80px]">
        <DateControls />

        {/* Download Button positioned absolutely within the header container */}
        <div className="absolute top-0 right-[2vw] h-full flex items-center z-10">
          <DownloadButton />
        </div>
      </div>      

      {/* Content with viewport-based scaling and proper height constraints */}
      <div className="px-[2vw] py-[1vh] h-[92vh] max-h-[calc(100vh-60px)]">
        {/* Grid container - viewport-based scaling with proper height management */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[2vw] w-full h-full">
          {/* Top row - proportionally scaled cards */}
          <div className="w-full h-[45vh] min-h-[300px] max-h-[400px] bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard
              title="Zone Occupancy Day- Last week Comparison"
              subtitle="Total Building Occupancy"
              value="62"
              tableType="occupancy"
            />
          </div>
          <div className="w-full h-[45vh] min-h-[300px] max-h-[400px] bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard
              title="Zone Visitor Count- Last week Comparison"
              subtitle="Total Building Visitor count"
              value="693"
              tableType="visitor"
            />
          </div>

          {/* Bottom row - proportionally scaled cards with chart content */}
          <div className="w-full h-[45vh] min-h-[350px] max-h-[450px] bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard title="Zone Occupancy Day Last week Comparison" chartType="occupancy" />
          </div>
          <div className="w-full h-[45vh] min-h-[350px] max-h-[450px] bg-white/90 backdrop-blur-sm rounded-lg">
            <ComparisonCard title="Zone Visitor Count Week" chartType="visitor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
