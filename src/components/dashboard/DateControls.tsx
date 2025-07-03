
import React, { useState } from 'react';
import { RefreshCw, CalendarDays } from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

// Updated DownloadButton component with responsive scaling
const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    // Implement download functionality
    console.log('Download initiated');
  };

  return (
    <button 
      className="hover:opacity-80 transition-opacity"
      onClick={handleDownload}
      aria-label="Download data as Excel file"
    >
      {/* Desktop view - Primary Download Button */}
      <img
        src="/images/Primary Download Button.svg"
        className="hidden sm:block object-contain"
        alt="Download button"
        style={{
          width: 'clamp(100px, 15vw, 135px)',
          height: 'clamp(40px, 6vh, 56px)'
        }}
      />
      
      {/* Mobile view - Excel icon only */}
      <img
        src="/images/Excel icon.svg"
        className="block sm:hidden object-contain"
        alt="Download Excel file"
        style={{
          width: 'clamp(28px, 8vw, 36px)',
          height: 'clamp(28px, 8vw, 36px)'
        }}
      />
    </button>
  );
};

export const DateControls: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs('2024-12-12'));
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const { isExpanded, isHovered } = useSidebar();

  const handleCalendarToggle = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    if (newDate) {
      setSelectedDate(newDate);
      setIsCalendarVisible(false); // Close calendar after date selection
    }
  };

  const formatDisplayDate = (date: Dayjs) => {
    return date.format('ddd, DD MMM YYYY');
  };

  return (
      <div 
        className="flex items-center justify-between w-full"
        style={{
          height: 'clamp(60px, 8vh, 78.5px)',
          padding: '0 clamp(16px, 2.5vw, 32px)'
        }}
      >
        {/* Left Section - Date Controls */}
        <div 
          className="flex items-center"
          style={{ gap: 'clamp(12px, 2.5vw, 32px)' }}
        >
          {/* Date starts directly at the left edge, aligned with hamburger icon */}
          <div 
            className="flex items-center"
            style={{ gap: 'clamp(12px, 2vw, 24px)' }}
          >
            <time 
              className="text-black font-medium" 
              dateTime={selectedDate.format('YYYY-MM-DD')}
              style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}
            >
              {formatDisplayDate(selectedDate)}
            </time>
            
            {/* Calendar Days Icon Button */}
            <button 
              className="bg-[rgba(37,56,120,1)] text-white rounded-md hover:bg-[rgba(37,56,120,0.9)] transition-colors flex items-center justify-center"
              onClick={handleCalendarToggle}
              aria-label="Toggle calendar"
              style={{
                padding: 'clamp(8px, 1.5vw, 12px)',
                width: 'clamp(36px, 6vw, 48px)',
                height: 'clamp(36px, 6vw, 48px)'
              }}
            >
              <CalendarDays 
                style={{
                  width: 'clamp(16px, 2.5vw, 20px)',
                  height: 'clamp(16px, 2.5vw, 20px)'
                }}
              />
            </button>
            
            {/* Calendar navigation - hidden on mobile */}
            <button 
              className="hover:opacity-80 transition-opacity hidden sm:block" 
              aria-label="Calendar navigation"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/a61f79a38046a5976e936e19def26c56447ce67c?placeholderIfAbsent=true"
                className="object-contain"
                alt="Calendar controls"
                style={{
                  width: 'clamp(40px, 6vw, 55px)',
                  height: 'clamp(28px, 4vh, 38px)',
                  minWidth: '40px',
                  minHeight: '28px'
                }}
              />
            </button>
          </div>

          {/* Refresh button - hidden on mobile */}
          <button 
            className="bg-[rgba(245,167,40,1)] hidden sm:flex items-center justify-center rounded-lg hover:bg-[rgba(245,167,40,0.9)] transition-colors flex-shrink-0"
            aria-label="Refresh data"
            style={{
              width: 'clamp(36px, 6vw, 45px)',
              height: 'clamp(36px, 6vw, 45px)'
            }}
          >
            <RefreshCw 
              className="text-white"
              style={{
                width: 'clamp(18px, 3vw, 22px)',
                height: 'clamp(18px, 3vw, 22px)'
              }}
            />
          </button>
        </div>

        {/* Right Section - Download Button */}
        <div className="flex items-center">
          <DownloadButton />
        </div>

        {/* MUI DateCalendar - Shows on page when calendar icon is clicked */}
        {isCalendarVisible && (
          <div 
            className="absolute bg-white rounded-lg shadow-lg border border-gray-200 z-50"
            style={{
              top: 'clamp(60px, 8vh, 78.5px)',
              left: 'clamp(16px, 2.5vw, 32px)'
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selectedDate}
                onChange={handleDateChange}
                sx={{
                  '& .MuiPickersDay-root': {
                    borderRadius: '8px',
                  },
                  '& .MuiPickersDay-root.Mui-selected': {
                    backgroundColor: 'rgba(37,56,120,1)',
                    '&:hover': {
                      backgroundColor: 'rgba(37,56,120,0.9)',
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>
        )}
      </div>
  );
};
