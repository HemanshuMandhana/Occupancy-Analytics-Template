
import React, { useState } from 'react';

export const DateControls: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('Sun, 12 Dec 2024');

  return (
    <div className="flex items-center gap-3 lg:gap-6">
      <div className="flex items-center gap-3 lg:gap-5 text-[18px] lg:text-[22px] font-medium">
        <time className="text-black" dateTime="2024-12-12">
          {selectedDate}
        </time>
        <button className="bg-[rgba(37,56,120,1)] text-white px-3 lg:px-[13px] py-2 lg:py-[13px] rounded-md hover:bg-[rgba(37,56,120,0.9)] transition-colors text-sm lg:text-base">
          Today
        </button>
        <button className="hover:opacity-80 transition-opacity" aria-label="Calendar navigation">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/a61f79a38046a5976e936e19def26c56447ce67c?placeholderIfAbsent=true"
            className="w-[50px] lg:w-[63px] h-auto object-contain"
            alt="Calendar controls"
          />
        </button>
      </div>
      
      <button 
        className="bg-[rgba(245,167,40,1)] flex items-center justify-center w-[45px] lg:w-[54px] h-[45px] lg:h-[54px] rounded-lg hover:bg-[rgba(245,167,40,0.9)] transition-colors"
        aria-label="Refresh data"
      >
        <div className="w-5 lg:w-6 h-5 lg:h-6 flex items-center justify-center">
          <div className="w-4 lg:w-[18px] h-4 lg:h-[18px]" />
        </div>
      </button>
    </div>
  );
};
