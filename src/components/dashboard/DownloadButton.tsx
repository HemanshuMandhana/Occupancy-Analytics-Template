
import React from 'react';

export const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    // Implement download functionality
    console.log('Download initiated');
  };

  return (
    <button 
      className="border flex min-h-[48px] lg:min-h-14 w-[120px] lg:w-[134px] items-center gap-2 lg:gap-[9px] justify-center px-2 lg:px-[9px] py-2 lg:py-3 rounded-[9px] border-[rgba(32,116,74,1)] border-solid hover:bg-[rgba(32,116,74,0.05)] transition-colors"
      onClick={handleDownload}
      aria-label="Download data as Excel file"
    >
      <div className="flex min-h-[28px] lg:min-h-[31px] items-center justify-center w-[28px] lg:w-[31px] p-0.5">
        <img
          src="/images/Excel icon.svg"
          className="w-6 lg:w-7 h-6 lg:h-7 object-contain"
          alt="Excel file icon"
        />
      </div>
      <span className="text-[rgba(32,116,74,1)] text-sm font-medium">
        Download
      </span>
    </button>
  );
};
