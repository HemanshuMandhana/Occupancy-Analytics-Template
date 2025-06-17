import React from 'react';

export const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    // Implement download functionality
    console.log('Download initiated');
  };

  return (
    <button 
      className="border absolute z-0 flex min-h-14 w-[134px] max-w-full items-center gap-[9px] justify-center h-14 px-[9px] py-3 rounded-[9px] border-[rgba(32,116,74,1)] border-solid right-6 top-[98px] hover:bg-[rgba(32,116,74,0.05)] transition-colors"
      onClick={handleDownload}
      aria-label="Download data as Excel file"
    >
      <div className="self-stretch flex min-h-[31px] flex-col overflow-hidden items-stretch justify-center w-[31px] my-auto p-0.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/8ce7bd0b-875f-4860-b2ce-91011e591581?placeholderIfAbsent=true"
          className="aspect-[0.96] object-contain w-7 bg-[rgba(32,116,74,1)] h-7"
          alt="Excel file icon"
        />
      </div>
      <span className="text-[rgba(32,116,74,1)] text-sm font-medium self-stretch my-auto">
        Download
      </span>
    </button>
  );
};
