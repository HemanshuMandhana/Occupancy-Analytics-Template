
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
          width: '10vw', 
          height: 'auto',
          maxHeight: '4vh',
          minWidth: '100px',
          maxWidth: '135px'
        }}
        alt="Download button"
      />
      
      {/* Mobile view - Excel icon only */}
      <img
        src="/images/Excel icon.svg"
        className="block sm:hidden object-contain"
        style={{ 
          width: '6vw', 
          height: '6vw',
          minWidth: '24px',
          maxWidth: '32px'
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
      className="flex items-center justify-between w-full bg-transparent border-b border-gray-100/50 flex-shrink-0"
      style={{ 
        height: '6vh',
        padding: '0.8vh 1.5vw'
      }}
    >
      {/* Left Section - Date Controls */}
      <div 
        className="flex items-center" 
        style={{ gap: '1.2vw' }}
      >
        <div 
          className="flex items-center font-medium" 
          style={{ 
            gap: '1vw',
            fontSize: '1.4vw',
            minFontSize: '12px',
            maxFontSize: '16px'
          }}
        >
          <time className="text-black whitespace-nowrap" dateTime="2024-12-12">
            {selectedDate}
          </time>
          <button 
            className="bg-[rgba(37,56,120,1)] text-white rounded-md hover:bg-[rgba(37,56,120,0.9)] transition-colors whitespace-nowrap"
            style={{ 
              padding: '0.6vh 1vw',
              fontSize: '1.2vw',
              minFontSize: '10px',
              maxFontSize: '14px'
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
                width: '3.5vw', 
                height: 'auto',
                minWidth: '35px',
                maxWidth: '50px',
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
            width: '3vw', 
            height: '3vw',
            minWidth: '30px',
            maxWidth: '40px',
            minHeight: '30px',
            maxHeight: '40px'
          }}
          aria-label="Refresh data"
        >
          <RefreshCw 
            style={{ 
              width: '1.5vw', 
              height: '1.5vw',
              minWidth: '14px',
              maxWidth: '18px',
              minHeight: '14px',
              maxHeight: '18px'
            }} 
            className="text-white" 
          />
        </button>
      </div>

      {/* Right Section - Download Button */}
      <div className="flex items-center flex-shrink-0">
        <DownloadButton />
      </div>
    </div>
  );
};
