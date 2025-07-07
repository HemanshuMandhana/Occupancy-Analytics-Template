
import React from 'react';

export const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    // Implement download functionality
    console.log('Download initiated');
  };

  return (
    <button 
      className="border flex items-center gap-[0.417vw] lg:gap-[0.625vw] justify-center rounded-[0.625vw] border-[rgba(32,116,74,1)] border-solid hover:bg-[rgba(32,116,74,0.05)] transition-colors"
      style={{
        minHeight: 'clamp(3.556vh, 3.556vh, 4.074vh)',
        width: 'clamp(8.333vw, 8.333vw, 9.306vw)',
        padding: 'clamp(0.148vh, 0.741vh, 0.741vh) clamp(0.417vw, 0.625vw, 0.625vw)',
        fontSize: 'clamp(1.037vh, 1.037vh, 1.037vh)'
      }}
      onClick={handleDownload}
      aria-label="Download data as Excel file"
    >
      <div 
        className="flex items-center justify-center"
        style={{
          minHeight: 'clamp(2.074vh, 2.074vh, 2.296vh)',
          width: 'clamp(2.074vh, 2.074vh, 2.296vh)',
          padding: '0.037vh'
        }}
      >
        <img
          src="/images/Excel icon.svg"
          className="object-contain"
          style={{
            width: 'clamp(1.481vh, 1.481vh, 1.667vh)',
            height: 'clamp(1.481vh, 1.481vh, 1.667vh)'
          }}
          alt="Excel file icon"
        />
      </div>
      <span className="text-[rgba(32,116,74,1)] font-medium">
        Download
      </span>
    </button>
  );
};
