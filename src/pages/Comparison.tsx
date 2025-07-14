
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
      
      {/* Header container with viewport-responsive positioning */}
      <div className="relative">
        <DateControls />

        {/* Download Button positioned absolutely within the header container */}
        <div className="absolute top-0 right-[clamp(12px,0.833vw,24px)] lg:right-[clamp(18px,1.25vw,36px)] h-full flex items-center z-10">
          <DownloadButton />
        </div>
      </div>      

      {/* Content with dynamic viewport-based sizing that scales with both width and height */}
      <div className="px-[clamp(18px,1.875vw,54px)] pt-[clamp(8px,1.389vh,20px)] pb-[clamp(8px,1.481vh,22px)]">
        {/* Grid container - responsive with viewport-based sizing */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[clamp(14px,1.458vw,42px)] w-full">
          {/* Top row - cards with proportional height scaling */}
          <div className="w-full max-w-none bg-white/90 backdrop-blur-sm rounded-lg" style={{ height: 'clamp(240px,35.37vh,510px)' }}>
            <ComparisonCard
              title="Zone Occupancy Day- Last week Comparison"
              subtitle="Total Building Occupancy"
              value="62"
              tableType="occupancy"
            />
          </div>
          <div className="w-full max-w-none bg-white/90 backdrop-blur-sm rounded-lg" style={{ height: 'clamp(240px,35.37vh,510px)' }}>
            <ComparisonCard
              title="Zone Visitor Count- Last week Comparison"
              subtitle="Total Building Visitor count"
              value="693"
              tableType="visitor"
            />
          </div>

          {/* Bottom row - cards with proportional height scaling */}
          <div className="w-full max-w-none bg-white/90 backdrop-blur-sm rounded-lg" style={{ height: 'clamp(290px,43.056vh,620px)' }}>
            <ComparisonCard title="Zone Occupancy Day Last week Comparison" chartType="occupancy" />
          </div>
          <div className="w-full max-w-none bg-white/90 backdrop-blur-sm rounded-lg" style={{ height: 'clamp(290px,43.056vh,620px)' }}>
            <ComparisonCard title="Zone Visitor Count Week" chartType="visitor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
