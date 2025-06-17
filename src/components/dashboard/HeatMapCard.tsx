import React, { useState } from 'react';

interface HeatMapCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  showDropdown?: boolean;
}

export const HeatMapCard: React.FC<HeatMapCardProps> = ({ 
  title, 
  subtitle, 
  imageUrl, 
  showDropdown = false 
}) => {
  const [selectedFloor, setSelectedFloor] = useState('Floor 1');

  return (
    <article className="bg-[rgba(247,248,255,1)] border flex min-w-60 min-h-[389px] flex-col overflow-hidden items-stretch grow shrink w-[398px] my-auto px-[29px] py-6 rounded-xl border-[rgba(37,57,120,1)] border-solid max-md:max-w-full max-md:px-5">
      <header className="flex items-center gap-[40px_43px]">
        <div className="flex items-center gap-[40px_69px] justify-center w-[211px]">
          <div className="flex w-[211px] flex-col items-stretch justify-center">
            <div className="flex w-full flex-col items-stretch">
              <h2 className="text-[rgba(46,75,181,1)] text-3xl font-semibold">
                {title}
              </h2>
              <p className="gap-2 text-lg text-[rgba(20,40,142,1)] font-light text-right leading-[1.4] mt-2.5">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        {showDropdown && (
          <div className="rounded bg-[rgba(37,56,120,1)] border flex min-h-[42px] flex-col items-center text-2xl text-white font-semibold text-center leading-[1.4] justify-center w-[151px] px-[9px] border-white border-solid">
            <button 
              className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
              onClick={() => setSelectedFloor(selectedFloor === 'Floor 1' ? 'Floor 2' : 'Floor 1')}
              aria-label="Select floor"
            >
              <span>{selectedFloor}</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/461fbf9f9918936a17a03d1634d0ddcc3c36d3be?placeholderIfAbsent=true"
                className="aspect-[1.7] object-contain w-[17px] self-stretch shrink-0 my-auto"
                alt="Dropdown arrow"
              />
            </button>
          </div>
        )}
      </header>
      <img
        src={imageUrl}
        className="aspect-[1.69] object-contain w-full mt-3 max-md:max-w-full"
        alt={`${title} visualization`}
      />
    </article>
  );
};
