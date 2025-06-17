import React, { useState } from 'react';

export const DateControls: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('Sun, 12 Dec 2024');

  return (
    <div className="absolute z-0 flex items-center gap-6 left-[328px] top-[98px] max-md:max-w-full">
      <div className="flex min-w-60 items-center gap-5 text-[22px] font-medium justify-center">
        <time className="text-black self-stretch my-auto" dateTime="2024-12-12">
          {selectedDate}
        </time>
        <button className="self-stretch bg-[rgba(37,56,120,1)] gap-4 text-white whitespace-nowrap my-auto pl-[13px] pr-3 py-[13px] rounded-md hover:bg-[rgba(37,56,120,0.9)] transition-colors">
          Today
        </button>
        <button className="hover:opacity-80 transition-opacity" aria-label="Calendar navigation">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/a61f79a38046a5976e936e19def26c56447ce67c?placeholderIfAbsent=true"
            className="aspect-[1.94] object-contain w-[63px] self-stretch shrink-0 my-auto"
            alt="Calendar controls"
          />
        </button>
      </div>
      <button 
        className="bg-[rgba(245,167,40,1)] flex items-center gap-2.5 justify-center w-[54px] px-[15px] py-[13px] rounded-lg hover:bg-[rgba(245,167,40,0.9)] transition-colors"
        aria-label="Refresh data"
      >
        <div className="flex min-h-6 w-6 items-center gap-2.5 overflow-hidden pl-1 pr-[3px] py-[3px]">
          <div className="flex min-h-[18px] gap-2.5" />
        </div>
      </button>
    </div>
  );
};
