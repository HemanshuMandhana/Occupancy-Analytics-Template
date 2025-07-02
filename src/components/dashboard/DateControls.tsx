
import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

// Updated DownloadButton component with responsive images
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
        className="hidden sm:block object-contain"
        style={{ 
          width: 'clamp(100px, 10vw, 135px)', 
          height: 'auto',
          maxHeight: 'clamp(35px, 4vh, 56px)'
        }}
        alt="Download button"
      />
      
      {/* Mobile view - Excel icon only */}
      <img
        src="/images/Excel icon.svg"
        className="block sm:hidden object-contain"
        style={{ 
          width: 'clamp(24px, 6vw, 32px)', 
          height: 'clamp(24px, 6vw, 32px)'
        }}
        alt="Download Excel file"
      />
    </button>
  );
};

export const DateControls: React.FC = () => {
  const [selectedDate] = useState('Sun, 12 Dec 2024');

  return (
    <div 
      className="flex items-center justify-between w-full bg-transparent border-b border-gray-100/50"
      style={{ 
        height: 'clamp(50px, 6vh, 65px)',
        padding: 'clamp(6px, 0.8vh, 10px) clamp(12px, 1.5vw, 20px)',
        flexShrink: 0 // Prevent compression
      }}
    >
      {/* Left Section - Date Controls */}
      <div className="flex items-center" style={{ gap: 'clamp(8px, 1.2vw, 16px)' }}>
        <div className="flex items-center font-medium" style={{ 
          gap: 'clamp(8px, 1vw, 14px)',
          fontSize: 'clamp(12px, 1.4vw, 16px)'
        }}>
          <time className="text-black whitespace-nowrap" dateTime="2024-12-12">
            {selectedDate}
          </time>
          <button 
            className="bg-[rgba(37,56,120,1)] text-white rounded-md hover:bg-[rgba(37,56,120,0.9)] transition-colors whitespace-nowrap"
            style={{ 
              padding: 'clamp(4px, 0.6vh, 7px) clamp(8px, 1vw, 10px)',
              fontSize: 'clamp(10px, 1.2vw, 14px)'
            }}
          >
            Today
          </button>
          {/* Calendar navigation - hidden on mobile */}
          <button 
            className="hover:opacity-80 transition-opacity hidden sm:block flex-shrink-0" 
            aria-label="Calendar navigation"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/a61f79a38046a5976e936e19def26c56447ce67c?placeholderIfAbsent=true"
              className="object-contain"
              style={{ 
                width: 'clamp(35px, 3.5vw, 50px)', 
                height: 'auto',
                minWidth: '35px', 
                minHeight: '24px' 
              }}
              alt="Calendar controls"
            />
          </button>
        </div>

        {/* Refresh button - hidden on mobile */}
        <button 
          className="bg-[rgba(245,167,40,1)] hidden sm:flex items-center justify-center rounded-lg hover:bg-[rgba(245,167,40,0.9)] transition-colors flex-shrink-0"
          style={{ 
            width: 'clamp(30px, 3vw, 40px)', 
            height: 'clamp(30px, 3vw, 40px)' 
          }}
          aria-label="Refresh data"
        >
          <RefreshCw style={{ 
            width: 'clamp(14px, 1.5vw, 18px)', 
            height: 'clamp(14px, 1.5vw, 18px)' 
          }} className="text-white" />
        </button>
      </div>

      {/* Right Section - Download Button */}
      <div className="flex items-center flex-shrink-0">
        <DownloadButton />
      </div>
    </div>
  );
};
