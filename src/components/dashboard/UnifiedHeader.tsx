
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Menu, Calendar as CalendarIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';

interface UnifiedHeaderProps {
  pageTitle: string;
}

export const UnifiedHeader: React.FC<UnifiedHeaderProps> = ({ pageTitle }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header className="bg-[rgba(246,247,255,1)] relative z-20 w-full px-2 lg:px-4 py-1">
      <div className="max-w-full mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="p-1 hover:bg-gray-100 rounded-md">
            <Menu className="h-4 w-4" />
          </SidebarTrigger>
          <h1 className="text-black text-base lg:text-lg font-semibold">
            {pageTitle}
          </h1>
        </div>
        
        <div className="flex items-center gap-2 lg:gap-4">
          <nav className="flex items-center gap-2 lg:gap-4 text-sm text-white tracking-[-0.34px]" role="navigation" aria-label="Main navigation">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="min-w-[100px] lg:min-w-[120px]">
                  <button className="bg-[rgba(37,56,120,1)] flex w-full min-h-[28px] lg:min-h-[32px] items-center gap-1 justify-center px-2 py-1 rounded-lg hover:bg-[rgba(37,56,120,0.9)] transition-colors">
                    <span className="text-xs lg:text-sm">Roddenberry</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/655c8d2c001cf6f09886b560e12f33f9b4fb711d?placeholderIfAbsent=true"
                      className="w-1 lg:w-1.5 h-1 lg:h-1 object-contain"
                      alt="Dropdown arrow"
                    />
                  </button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-lg rounded-md min-w-[120px] z-50 mt-1">
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 px-2 py-1">
                  My Account
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleLogout}
                  className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                >
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="w-4 lg:w-5 h-4 lg:h-5 hover:opacity-80 transition-opacity" aria-label="Notifications">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/f82ff2484e49bab324ee78810babfccfcda753e1?placeholderIfAbsent=true"
                className="w-full h-full object-contain"
                alt="Notifications"
              />
            </button>

            <button className="hover:opacity-80 transition-opacity">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/b783be09b001491dff561ee2e4a30c55b5004d93?placeholderIfAbsent=true"
                className="w-[80px] lg:w-[100px] h-auto object-contain"
                alt="User profile"
              />
            </button>
          </nav>
        </div>
      </div>
      
      {/* Date Controls Row */}
      <div className="max-w-full mx-auto flex justify-between items-center py-1 border-t border-gray-200 mt-1">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="flex items-center gap-1 lg:gap-2 text-sm font-medium">
            <time className="text-black text-xs lg:text-sm" dateTime={format(selectedDate, 'yyyy-MM-dd')}>
              {format(selectedDate, 'EEE, dd MMM yyyy')}
            </time>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-6 lg:h-7 px-1 lg:px-2 text-xs">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  Calendar
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  disabled={(date) => date > new Date()}
                  initialFocus
                  className="p-2 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            
            <button className="hover:opacity-80 transition-opacity" aria-label="Calendar navigation">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/a61f79a38046a5976e936e19def26c56447ce67c?placeholderIfAbsent=true"
                className="w-[30px] lg:w-[35px] h-auto object-contain"
                alt="Calendar controls"
              />
            </button>
          </div>
        </div>
        
        <button className="flex items-center gap-1 px-2 py-1 border border-green-500 text-green-600 rounded hover:bg-green-50 transition-colors text-xs">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/1627ad4ed2b1d43e66c47a5a43d9e3bfad0e73c9?placeholderIfAbsent=true"
            className="w-3 h-3"
            alt="Download"
          />
          <span>Download</span>
        </button>
      </div>
    </header>
  );
};
