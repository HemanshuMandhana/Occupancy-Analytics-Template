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
      <DateControls />
      
      {/* Download Button positioned absolutely to align with DateControls */}
      <div className="absolute top-0 right-4 lg:right-6 h-[7.269vh] flex items-center z-10">
        <DownloadButton />
      </div>

      {/* Content with 8px space between DateControls and charts */}
      <div className="px-4 lg:px-6 pb-4" style={{ marginTop: '0.741vh' }}>
        {/* Top row - Comparison tables with exactly 34px gap between columns */}
        <div className="flex mb-5" style={{ gap: '1.771vw' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg" style={{ width: '39.948vw', height: '35.37vh' }}>
            <ComparisonCard
              title="Zone Occupancy Day- Last week Comparison"
              subtitle="Total Building Occupancy"
              value="62"
              tableType="occupancy"
            />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg" style={{ width: '39.948vw', height: '35.37vh' }}>
            <ComparisonCard
              title="Zone Visitor Count- Last week Comparison"
              subtitle="Total Building Visitor count"
              value="693"
              tableType="visitor"
            />
          </div>
        </div>

        {/* Bottom row - Charts with exactly 34px gap between columns */}
        <div className="flex" style={{ gap: '1.771vw' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg" style={{ width: '39.948vw', height: '43.056vh' }}>
            <ComparisonCard title="Zone Occupancy Day Last week Comparison" chartType="occupancy" />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg" style={{ width: '39.948vw', height: '43.056vh' }}>
            <ComparisonCard title="Zone Visitor Count Week" chartType="visitor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;