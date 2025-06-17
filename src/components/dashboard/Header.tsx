import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[rgba(246,247,255,1)] absolute z-0 flex w-[1623px] max-w-full flex-col overflow-hidden items-center font-semibold whitespace-nowrap justify-center px-6 py-4 right-0 top-0 max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <h1 className="text-black text-2xl self-stretch my-auto">
          Dashboard
        </h1>
        <nav className="self-stretch flex min-w-60 items-center gap-[40px_52px] text-[17px] text-white tracking-[-0.34px] leading-[1.2] flex-wrap my-auto max-md:max-w-full" role="navigation" aria-label="Main navigation">
          <div className="self-stretch min-h-[47px] w-[175px] my-auto">
            <div className="min-h-[47px] w-full max-w-[175px]">
              <button className="bg-[rgba(37,56,120,1)] flex min-h-[47px] w-full items-center gap-2.5 justify-center p-[18px] rounded-lg hover:bg-[rgba(37,56,120,0.9)] transition-colors">
                <span className="self-stretch my-auto">Roddenberry</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/655c8d2c001cf6f09886b560e12f33f9b4fb711d?placeholderIfAbsent=true"
                  className="aspect-[1.67] object-contain w-2.5 self-stretch shrink-0 my-auto"
                  alt="Dropdown arrow"
                />
              </button>
            </div>
          </div>
          <button className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto hover:opacity-80 transition-opacity" aria-label="Notifications">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/f82ff2484e49bab324ee78810babfccfcda753e1?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
              alt="Notifications"
            />
          </button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/b783be09b001491dff561ee2e4a30c55b5004d93?placeholderIfAbsent=true"
            className="aspect-[4.07] object-contain w-[187px] self-stretch shrink-0 my-auto"
            alt="User profile"
          />
        </nav>
      </div>
    </header>
  );
};
