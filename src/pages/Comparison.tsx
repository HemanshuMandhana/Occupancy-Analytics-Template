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
      <div className="absolute top-0 right-0 flex items-center z-10" style={{ 
        right: 'clamp(1rem, 2vw, 2rem)', 
        height: 'clamp(4rem, 7.269vh, 8rem)' 
      }}>
        <DownloadButton />
      </div>

      {/* Content with responsive spacing */}
      <div style={{ 
        paddingLeft: 'clamp(1rem, 2vw, 2rem)', 
        paddingRight: 'clamp(1rem, 2vw, 2rem)', 
        paddingBottom: 'clamp(1rem, 2vh, 2rem)',
        marginTop: 'clamp(0.4rem, 0.741vh, 1rem)' 
      }}>
        {/* Top row - Comparison tables with responsive gap */}
        <div className="flex flex-col lg:flex-row" style={{ 
          gap: 'clamp(1rem, 1.771vw, 2rem)',
          marginBottom: 'clamp(1rem, 2vh, 2rem)'
        }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg flex-1" style={{ 
            minHeight: 'clamp(20rem, 35.37vh, 25rem)',
            height: 'clamp(20rem, 35.37vh, 25rem)'
          }}>
            <ComparisonCard
              title="Zone Occupancy Day- Last week Comparison"
              subtitle="Total Building Occupancy"
              value="62"
              tableType="occupancy"
            />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg flex-1" style={{ 
            minHeight: 'clamp(20rem, 35.37vh, 25rem)',
            height: 'clamp(20rem, 35.37vh, 25rem)'
          }}>
            <ComparisonCard
              title="Zone Visitor Count- Last week Comparison"
              subtitle="Total Building Visitor count"
              value="693"
              tableType="visitor"
            />
          </div>
        </div>

        {/* Bottom row - Charts with responsive gap */}
        <div className="flex flex-col lg:flex-row" style={{ gap: 'clamp(1rem, 1.771vw, 2rem)' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg flex-1" style={{ 
            minHeight: 'clamp(25rem, 43.056vh, 35rem)',
            height: 'clamp(25rem, 43.056vh, 35rem)'
          }}>
            <ComparisonCard title="Zone Occupancy Day Last week Comparison" chartType="occupancy" />
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg flex-1" style={{ 
            minHeight: 'clamp(25rem, 43.056vh, 35rem)',
            height: 'clamp(25rem, 43.056vh, 35rem)'
          }}>
            <ComparisonCard title="Zone Visitor Count Week" chartType="visitor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;