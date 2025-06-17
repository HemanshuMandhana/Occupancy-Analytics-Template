import React from 'react';

interface SidebarItem {
  icon: string;
  label: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/8883c59b1e0fc951e6d05ef8c79617f1a20c96f2?placeholderIfAbsent=true', label: 'Dashboard', isActive: true },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/e1d6e01d3578dca8ed2f6865a35ff014ba4eea5d?placeholderIfAbsent=true', label: 'Comparison Dashboard', hasSubmenu: true },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/f9cf628de73794af7a8a6ad96c394578d2244184?placeholderIfAbsent=true', label: 'Occupancy Trend' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/20e9d369a1ee3797cbe2208bcd51e8f0d59ad63d?placeholderIfAbsent=true', label: 'Occupancy Comparison', hasSubmenu: true },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/2d94347670d6329181af1052ac348db685499310?placeholderIfAbsent=true', label: 'Visitor Count' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/c3eaaf37adc80ae43d25ecf6cf77a45be03ac2d8?placeholderIfAbsent=true', label: 'Visitor Comparison', hasSubmenu: true },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/5d436a9cff0c3e74411f72a945316ad303cfb8dc?placeholderIfAbsent=true', label: 'Data Reports' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/dcbbff0282e6f28f35f34ae0596938d85cd62d6a?placeholderIfAbsent=true', label: 'Capacity Master' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/e8265f38c9e53e345e57d186a04bc5ed753a9d18?placeholderIfAbsent=true', label: 'Email Report Config' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/dc666f385cc95ea504a5825367354cb742c67a8f?placeholderIfAbsent=true', label: 'Login History' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/e4eac10fd0422b538b27154b58abe3137ff31a29?placeholderIfAbsent=true', label: 'My Account' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/dac3d0bb537c9ef1897f8f67abc875c62f735926?placeholderIfAbsent=true', label: 'User Master' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/2a6b81460323eccb48fd3aeaa7d3837d9fa8313a?placeholderIfAbsent=true', label: 'Log out' },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="bg-[rgba(246,247,255,1)] absolute z-0 w-[297px] max-w-full translate-x-[0%] -translate-y-2/4 h-[1080px] pt-6 pb-[129px] px-5 left-0 top-2/4 max-md:pb-[100px]" role="navigation" aria-label="Sidebar navigation">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/a4398ecef9f90d02280dff77486962a630c02cde?placeholderIfAbsent=true"
        className="aspect-[4.07] object-contain w-[187px] max-w-full"
        alt="Company logo"
      />
      <nav className="flex w-full flex-col items-stretch mt-7">
        {sidebarItems.map((item, index) => (
          <div key={index} className={`${index === 0 ? 'relative flex min-h-[50px] w-full flex-col text-[17px] text-white font-normal whitespace-nowrap p-3.5' : 'flex items-center gap-[18px] text-[17px] text-black font-normal mt-12 max-md:mt-10'}`}>
            {index === 0 && (
              <div className="bg-[rgba(48,66,127,1)] absolute z-0 flex min-h-[50px] w-[257px] gap-2.5 h-[50px] rounded-lg right-0 bottom-0" />
            )}
            <button className={`${index === 0 ? 'z-0 flex items-center gap-[18px] justify-center w-full hover:bg-[rgba(48,66,127,0.9)] transition-colors' : 'flex items-center gap-[18px] w-full text-left hover:bg-gray-100 p-2 rounded transition-colors'}`}>
              <div className="flex items-center gap-0.5">
                <img
                  src={item.icon}
                  className={`${index === 0 ? 'aspect-[1] object-contain w-[22px] self-stretch shrink-0 my-auto' : 'aspect-[1] object-contain w-[22px] self-stretch shrink-0 my-auto'}`}
                  alt={`${item.label} icon`}
                />
                {item.hasSubmenu && (
                  <div className="self-stretch w-2 my-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/bbc4ebc416ca065fb3fd7f4b094962b0ee097ee3?placeholderIfAbsent=true"
                      className="aspect-[8] object-contain w-2"
                      alt="Submenu indicator"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/d898bb6111fe9f43f1781753055a0fb3bdc2278b?placeholderIfAbsent=true"
                      className="aspect-[3] object-contain w-1.5"
                      alt="Submenu arrow"
                    />
                  </div>
                )}
              </div>
              <span className="self-stretch my-auto">{item.label}</span>
            </button>
          </div>
        ))}
      </nav>
    </aside>
  );
};
