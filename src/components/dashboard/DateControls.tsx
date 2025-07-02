
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
          width: 'clamp(120px, 12vw, 135px)', 
          height: 'auto',
          maxHeight: 'clamp(45px, 5vh, 56px)'
        }}
        alt="Download button"
      />
      
      {/* Mobile view - Excel icon only */}
      <img
        src="/images/Excel icon.svg"
        className="block sm:hidden object-contain"
        style={{ 
          width: 'clamp(28px, 8vw, 32px)', 
          height: 'clamp(28px, 8vw, 32px)'
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
        className="flex items-center justify-between w-full bg-transparent"
        style={{ 
          height: 'clamp(60px, 8vh, 78.5px)',
          padding: 'clamp(8px, 1vh, 12px) clamp(16px, 2vw, 24px)'
        }}
      >
        {/* Left Section - Date Controls */}
        <div className="flex items-center" style={{ gap: 'clamp(12px, 2vw, 24px)' }}>
          {/* Date starts directly at the left edge, aligned with hamburger icon */}
          <div className="flex items-center font-medium" style={{ 
            gap: 'clamp(12px, 1.5vw, 20px)',
            fontSize: 'clamp(14px, 1.8vw, 18px)'
          }}>
            <time className="text-black whitespace-nowrap" dateTime="2024-12-12">
              {selectedDate}
            </time>
            <button 
              className="bg-[rgba(37,56,120,1)] text-white rounded-md hover:bg-[rgba(37,56,120,0.9)] transition-colors whitespace-nowrap"
              style={{ 
                padding: 'clamp(6px, 1vh, 8px) clamp(10px, 1.2vw, 12px)',
                fontSize: 'clamp(12px, 1.4vw, 16px)'
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
                  width: 'clamp(40px, 4vw, 55px)', 
                  height: 'auto',
                  minWidth: '40px', 
                  minHeight: '28px' 
                }}
                alt="Calendar controls"
              />
            </button>
          </div>

          {/* Refresh button - hidden on mobile */}
          <button 
            className="bg-[rgba(245,167,40,1)] hidden sm:flex items-center justify-center rounded-lg hover:bg-[rgba(245,167,40,0.9)] transition-colors flex-shrink-0"
            style={{ 
              width: 'clamp(35px, 3.5vw, 45px)', 
              height: 'clamp(35px, 3.5vw, 45px)' 
            }}
            aria-label="Refresh data"
          >
            <RefreshCw style={{ 
              width: 'clamp(16px, 1.8vw, 20px)', 
              height: 'clamp(16px, 1.8vw, 20px)' 
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
