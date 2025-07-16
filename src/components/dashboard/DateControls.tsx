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

  const handleRefresh = () => {
    window.location.reload();
  };

  const formatDisplayDate = (date: Dayjs) => {
    return date.format('ddd, DD MMM YYYY');
  };

  return (
      <div 
        className="flex items-center justify-between w-full px-4 lg:px-6"
        style={{ height: 'clamp(60px, 7.269vh, 78.5px)' }}
      >
        {/* Left Section - Date Controls */}
        <div className="flex items-center gap-3 lg:gap-6">
          {/* Date starts directly at the left edge, aligned with hamburger icon */}
          <div className="flex items-center gap-3 lg:gap-5 text-[16px] lg:text-[18px] font-medium">
            <time className="text-black" dateTime={selectedDate.format('YYYY-MM-DD')}>
              {formatDisplayDate(selectedDate)}
            </time>
            
            {/* Calendar Days Icon Button */}
            <button 
              className="bg-[rgba(37,56,120,1)] text-white p-2.5 lg:p-3 rounded-md hover:bg-[rgba(37,56,120,0.9)] transition-colors flex items-center justify-center"
              onClick={handleCalendarToggle}
              aria-label="Toggle calendar"
            >
              <CalendarDays className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>

          {/* Refresh button - hidden on mobile */}
          <button 
            className="bg-[rgba(245,167,40,1)] hidden sm:flex items-center justify-center w-[40px] lg:w-[45px] h-[40px] lg:h-[45px] rounded-lg hover:bg-[rgba(245,167,40,0.9)] transition-colors flex-shrink-0"
            onClick={handleRefresh}
            aria-label="Refresh data"
          >
            <RefreshCw className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Right Section - Empty space for download button alignment */}
        <div className="flex items-center">
          {/* This space is reserved for the download button which will be positioned absolutely */}
        </div>

        {/* MUI DateCalendar - Shows on page when calendar icon is clicked */}
        {isCalendarVisible && (
          <div 
            className="absolute left-4 lg:left-6 z-50 bg-white rounded-lg shadow-lg border border-gray-200"
            style={{ top: 'clamp(60px, 7.269vh, 78.5px)' }}
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