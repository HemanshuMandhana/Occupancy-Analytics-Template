
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
          src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/8ce7bd0b-875f-4860-b2ce-91011e591581?placeholderIfAbsent=true"
          className="w-6 lg:w-7 h-6 lg:h-7 object-contain bg-[rgba(32,116,74,1)]"
          alt="Excel file icon"
        />
      </div>
      <span className="text-[rgba(32,116,74,1)] text-sm font-medium">
        Download
      </span>
    </button>
  );
};
