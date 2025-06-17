import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Menu } from 'lucide-react';
export const Header: React.FC = () => {
  return <header className="bg-[rgba(246,247,255,1)] relative z-20 w-full px-4 lg:px-6 py-4">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="p-2 hover:bg-gray-100 rounded-md">
            <Menu className="h-5 w-5" />
          </SidebarTrigger>
          <h1 className="text-black text-xl lg:text-2xl font-semibold">
            Dashboard
          </h1>
        </div>
        
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Feedback Solutions Logo */}
          
          
          <nav className="flex items-center gap-4 lg:gap-8 text-[15px] lg:text-[17px] text-white tracking-[-0.34px]" role="navigation" aria-label="Main navigation">
            <div className="min-w-[140px] lg:min-w-[175px]">
              <button className="bg-[rgba(37,56,120,1)] flex w-full min-h-[40px] lg:min-h-[47px] items-center gap-2 justify-center px-3 lg:px-4 py-2 lg:py-[18px] rounded-lg hover:bg-[rgba(37,56,120,0.9)] transition-colors">
                <span className="text-sm lg:text-base">Roddenberry</span>
                <img src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/655c8d2c001cf6f09886b560e12f33f9b4fb711d?placeholderIfAbsent=true" className="w-2 lg:w-2.5 h-1.5 lg:h-2 object-contain" alt="Dropdown arrow" />
              </button>
            </div>
            
            <button className="w-6 lg:w-8 h-6 lg:h-8 hover:opacity-80 transition-opacity" aria-label="Notifications">
              <img src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/f82ff2484e49bab324ee78810babfccfcda753e1?placeholderIfAbsent=true" className="w-full h-full object-contain" alt="Notifications" />
            </button>
            
            <img src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/b783be09b001491dff561ee2e4a30c55b5004d93?placeholderIfAbsent=true" className="w-[140px] lg:w-[187px] h-auto object-contain" alt="User profile" />
          </nav>
        </div>
      </div>
    </header>;
};