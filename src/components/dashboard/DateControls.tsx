
import React, { useState } from 'react';
import { RefreshCw, CalendarDays } from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

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
        className="flex items-center justify-between w-full px-[0.833vw] lg:px-[1.25vw]"
        style={{ height: 'clamp(4.444vh, 7.269vh, 5.815vh)' }}
      >
        {/* Left Section - Date Controls */}
        <div className="flex items-center gap-[0.625vw] lg:gap-[1.25vw]">
          {/* Date starts directly at the left edge, aligned with hamburger icon */}
          <div className="flex items-center gap-[0.625vw] lg:gap-[1.042vw]" style={{ fontSize: 'clamp(1.185vh, 1.333vh, 1.333vh)' }}>
            <time className="text-black font-medium" dateTime={selectedDate.format('YYYY-MM-DD')}>
              {formatDisplayDate(selectedDate)}
            </time>
            
            {/* Calendar Days Icon Button */}
            <button 
              className="bg-[rgba(37,56,120,1)] text-white rounded-md hover:bg-[rgba(37,56,120,0.9)] transition-colors flex items-center justify-center"
              style={{ 
                padding: 'clamp(0.741vh, 0.926vh, 1.111vh)',
                width: 'clamp(3.333vh, 3.704vh, 4.074vh)',
                height: 'clamp(3.333vh, 3.704vh, 4.074vh)'
              }}
              onClick={handleCalendarToggle}
              aria-label="Toggle calendar"
            >
              <CalendarDays style={{ width: 'clamp(1.185vh, 1.481vh, 1.481vh)', height: 'clamp(1.185vh, 1.481vh, 1.481vh)' }} />
            </button>
            
            {/* Calendar navigation - hidden on mobile */}
            <button 
              className="hover:opacity-80 transition-opacity hidden sm:block" 
              aria-label="Calendar navigation"
              style={{
                width: 'clamp(3.333vw, 3.542vw, 4.063vw)',
                height: 'auto',
                minWidth: 'clamp(2.5vw, 3.333vw, 3.333vw)',
                minHeight: 'clamp(2.37vh, 2.37vh, 2.37vh)'
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/a61f79a38046a5976e936e19def26c56447ce67c?placeholderIfAbsent=true"
                className="w-full h-auto object-contain"
                alt="Calendar controls"
              />
            </button>
          </div>

          {/* Refresh button - hidden on mobile */}
          <button 
            className="bg-[rgba(245,167,40,1)] hidden sm:flex items-center justify-center rounded-lg hover:bg-[rgba(245,167,40,0.9)] transition-colors flex-shrink-0"
            style={{
              width: 'clamp(2.963vh, 3.333vh, 3.333vh)',
              height: 'clamp(2.963vh, 3.333vh, 3.333vh)'
            }}
            aria-label="Refresh data"
          >
            <RefreshCw style={{ width: 'clamp(1.481vh, 1.481vh, 1.481vh)', height: 'clamp(1.481vh, 1.481vh, 1.481vh)' }} className="text-white" />
          </button>
        </div>

        {/* Right Section - Empty space for download button alignment */}
        <div className="flex items-center">
          {/* This space is reserved for the download button which will be positioned absolutely */}
        </div>

        {/* MUI DateCalendar - Shows on page when calendar icon is clicked */}
        {isCalendarVisible && (
          <div 
            className="absolute left-[0.833vw] lg:left-[1.25vw] z-50 bg-white rounded-lg shadow-lg border border-gray-200"
            style={{ top: 'clamp(4.444vh, 7.269vh, 5.815vh)' }}
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
