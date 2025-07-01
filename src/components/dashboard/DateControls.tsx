import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';

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
        src="public/images/Primary Download Button.svg"
        className="hidden sm:block w-auto h-auto object-contain"
        alt="Download button"
      />
      
      {/* Mobile view - Excel icon only */}
      <img
        src="public/images/Excel icon.svg"
        className="block sm:hidden w-auto h-auto object-contain"
        alt="Download Excel file"
      />
    </button>
  );
};

export const DateControls: React.FC = () => {
  const [selectedDate] = useState('Sun, 12 Dec 2024');
  const { isExpanded, isHovered } = useSidebar();

  return (
      <div className="flex items-center justify-between w-full h-[78.5px] px-4 lg:px-6">
        {/* Left Section - Date Controls */}
        <div className="flex items-center gap-3 lg:gap-6">
          {/* Date starts directly at the left edge, aligned with hamburger icon */}
          <div className="flex items-center gap-3 lg:gap-5 text-[16px] lg:text-[18px] font-medium">
            <time className="text-black" dateTime="2024-12-12">
              {selectedDate}
            </time>
            <button className="bg-[rgba(37,56,120,1)] text-white px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-md hover:bg-[rgba(37,56,120,0.9)] transition-colors text-sm lg:text-base">
              Today
            </button>
            {/* Calendar navigation - hidden on mobile */}
            <button 
              className="hover:opacity-80 transition-opacity hidden sm:block" 
              aria-label="Calendar navigation"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/a61f79a38046a5976e936e19def26c56447ce67c?placeholderIfAbsent=true"
                className="w-[45px] lg:w-[55px] h-auto object-contain"
                alt="Calendar controls"
                style={{ minWidth: '45px', minHeight: '32px' }}
              />
            </button>
          </div>

          {/* Refresh button - hidden on mobile */}
          <button 
            className="bg-[rgba(245,167,40,1)] hidden sm:flex items-center justify-center w-[40px] lg:w-[45px] h-[40px] lg:h-[45px] rounded-lg hover:bg-[rgba(245,167,40,0.9)] transition-colors flex-shrink-0"
            aria-label="Refresh data"
          >
            <RefreshCw className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Right Section - Download Button */}
        <div className="flex items-center">
          {/* Use the DownloadButton component from the separate file */}
          <DownloadButton />
        </div>
      </div>
  );
};