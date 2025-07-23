import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface AssignAuthoritiesPopupProps {
  isOpen: boolean;
  onClose: () => void;
  buildingName: string;
  clickedButtonElement: HTMLElement | null;
}

export const AuthorityList: React.FC<AssignAuthoritiesPopupProps> = ({
  isOpen,
  onClose,
  buildingName,
  clickedButtonElement
}) => {
  const [authorities, setAuthorities] = useState({
    comparisonDashboard: true,
    occupancyTrend: true,
    occupancyComparison: true,
    visitorCount: true,
    visitorComparison: true,
    dataReports: false,
    capacityMaster: false,
    loginHistory: false
  });

  const [popupPosition, setPopupPosition] = useState({ 
    top: 0, 
    left: 0, 
    arrowTop: 0, 
    isLeftSide: false 
  });

  // Calculate popup position with responsive arrow direction
  React.useEffect(() => {
    if (clickedButtonElement && isOpen) {
      // Find the first authority button to align popup with
      const firstAuthorityButton = document.querySelector('[data-authority-button]') as HTMLElement;
      
      if (firstAuthorityButton) {
        const firstButtonRect = firstAuthorityButton.getBoundingClientRect();
        const clickedButtonRect = clickedButtonElement.getBoundingClientRect();
        
        // Responsive popup dimensions - much smaller on very small screens
        const isVerySmallScreen = window.innerWidth < 480; // Extra small screens
        const isSmallScreen = window.innerWidth < 640; // Tailwind 'sm' breakpoint
        
        let popupWidth = 250; // Default width
        if (isVerySmallScreen) {
          popupWidth = 180; // Very small screens
        } else if (isSmallScreen) {
          popupWidth = 200; // Small screens
        }
        
        // Calculate content height based on authorities (8 items + header + button + padding)
        // Reduce height significantly for smaller screens
        let baseHeight = 340; // Default height
        if (isVerySmallScreen) {
          baseHeight = 260; // Very small screens
        } else if (isSmallScreen) {
          baseHeight = 280; // Small screens
        }
        
        const availableHeight = window.innerHeight - 20; // 10px margin top and bottom
        const popupHeight = Math.min(baseHeight, availableHeight);
        
        // Calculate initial position (right side of first button)
        let left = firstButtonRect.right + 10;
        let top = firstButtonRect.top;
        let isLeftSide = false;
        
        // Check if popup would go off-screen on the right
        if (left + popupWidth > window.innerWidth - 10) {
          // Position on left side of first button
          left = firstButtonRect.left - popupWidth;
          isLeftSide = true;
        }
        
        // Ensure popup doesn't go off-screen vertically
        if (top + popupHeight > window.innerHeight - 10) {
          top = window.innerHeight - popupHeight - 10;
        }
        
        if (top < 10) {
          top = 10;
        }
        
        // Calculate arrow position to point to clicked button (not first button)
        const arrowTop = Math.max(16, Math.min(clickedButtonRect.top + clickedButtonRect.height/2 - top, popupHeight - 16));
        
        setPopupPosition({ top, left, arrowTop, isLeftSide });
      }
    }
  }, [clickedButtonElement, isOpen]);

  // Listen for window resize to update position
  React.useEffect(() => {
    const handleResize = () => {
      if (clickedButtonElement && isOpen) {
        // Recalculate position on resize
        const firstAuthorityButton = document.querySelector('[data-authority-button]') as HTMLElement;
        
        if (firstAuthorityButton) {
          const firstButtonRect = firstAuthorityButton.getBoundingClientRect();
          const clickedButtonRect = clickedButtonElement.getBoundingClientRect();
          
          const isVerySmallScreen = window.innerWidth < 480;
          const isSmallScreen = window.innerWidth < 640;
          
          let popupWidth = 250;
          if (isVerySmallScreen) {
            popupWidth = 180;
          } else if (isSmallScreen) {
            popupWidth = 200;
          }
          
          // Calculate content height - smaller to fit without scroll
          let baseHeight = 340;
          if (isVerySmallScreen) {
            baseHeight = 260;
          } else if (isSmallScreen) {
            baseHeight = 280;
          }
          
          const availableHeight = window.innerHeight - 20;
          const popupHeight = Math.min(baseHeight, availableHeight);
          
          let left = firstButtonRect.right + 10;
          let top = firstButtonRect.top;
          let isLeftSide = false;
          
          if (left + popupWidth > window.innerWidth - 10) {
            left = firstButtonRect.left - popupWidth - 10;
            isLeftSide = true;
          }
          
          if (top + popupHeight > window.innerHeight - 10) {
            top = window.innerHeight - popupHeight - 10;
          }
          
          if (top < 10) {
            top = 10;
          }
          
          // Arrow points to clicked button, not first button
          const arrowTop = Math.max(16, Math.min(clickedButtonRect.top + clickedButtonRect.height/2 - top, popupHeight - 16));
          
          setPopupPosition({ top, left, arrowTop, isLeftSide });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [clickedButtonElement, isOpen]);

  const handleAuthorityChange = (authority: string) => {
    setAuthorities(prev => ({
      ...prev,
      [authority]: !prev[authority as keyof typeof prev]
    }));
  };

  const handleUpdateAuthorities = () => {
    console.log('Updating authorities for', buildingName, authorities);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed z-50 bg-white rounded-lg shadow-lg border p-2 sm:p-2 w-[180px] xs:w-[200px] sm:w-[220px]"
      style={{ 
        top: `${popupPosition.top}px`, 
        left: `${popupPosition.left}px` 
      }}
      data-authority-popup
    >
      {/* Arrow - always outside popup, changes side based on popup position */}
      {popupPosition.isLeftSide ? (
        // Right-pointing arrow (when popup is on left side) - outside popup
        <>
          <div 
            className="absolute right-[-8px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white"
            style={{ top: `${popupPosition.arrowTop}px` }}
          ></div>
          <div 
            className="absolute right-[-9px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-gray-200"
            style={{ top: `${popupPosition.arrowTop}px` }}
          ></div>
        </>
      ) : (
        // Left-pointing arrow (when popup is on right side) - outside popup
        <>
          <div 
            className="absolute left-[-8px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-white"
            style={{ top: `${popupPosition.arrowTop}px` }}
          ></div>
          <div 
            className="absolute left-[-9px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-gray-200"
            style={{ top: `${popupPosition.arrowTop}px` }}
          ></div>
        </>
      )}
      
      <h2 className="text-[#6366F1] text-base sm:text-lg font-semibold mb-1 sm:mb-1">
        Assign Authorities
      </h2>

      <div className="text-[#3c2b8187] text-base sm:text-lg font-semibold mb-1 sm:mb-3">
        {buildingName}
      </div>
      
      <div className="space-y-2 sm:space-y-2">
        {/* Comparison Dashboard */}
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="relative inline-flex items-center cursor-pointer w-4 sm:w-5 h-4 sm:h-5">
            <input
              type="checkbox"
              checked={authorities.comparisonDashboard}
              onChange={() => handleAuthorityChange('comparisonDashboard')}
              className="peer appearance-none w-full h-full bg-[#D9D9D9] checked:bg-[#6366F1] border border-gray-300 rounded-sm"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </label>
          <span className={`text-xs sm:text-sm ${authorities.comparisonDashboard ? 'text-gray-800' : 'text-gray-400'}`}>
            Comparison Dashboard
          </span>
        </div>

        {/* Occupancy Trend */}
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="relative inline-flex items-center cursor-pointer w-4 sm:w-5 h-4 sm:h-5">
            <input
              type="checkbox"
              checked={authorities.occupancyTrend}
              onChange={() => handleAuthorityChange('occupancyTrend')}
              className="peer appearance-none w-full h-full bg-[#D9D9D9] checked:bg-[#6366F1] border border-gray-300 rounded-sm"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </label>
          <span className={`text-xs sm:text-sm ${authorities.occupancyTrend ? 'text-gray-800' : 'text-gray-400'}`}>
            Occupancy Trend
          </span>
        </div>

        {/* Occupancy Comparison */}
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="relative inline-flex items-center cursor-pointer w-4 sm:w-5 h-4 sm:h-5">
            <input
              type="checkbox"
              checked={authorities.occupancyComparison}
              onChange={() => handleAuthorityChange('occupancyComparison')}
              className="peer appearance-none w-full h-full bg-[#D9D9D9] checked:bg-[#6366F1] border border-gray-300 rounded-sm"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </label>
          <span className={`text-xs sm:text-sm ${authorities.occupancyComparison ? 'text-gray-800' : 'text-gray-400'}`}>
            Occupancy Comparison
          </span>
        </div>

        {/* Visitor Count */}
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="relative inline-flex items-center cursor-pointer w-4 sm:w-5 h-4 sm:h-5">
            <input
              type="checkbox"
              checked={authorities.visitorCount}
              onChange={() => handleAuthorityChange('visitorCount')}
              className="peer appearance-none w-full h-full bg-[#D9D9D9] checked:bg-[#6366F1] border border-gray-300 rounded-sm"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </label>
          <span className={`text-xs sm:text-sm ${authorities.visitorCount ? 'text-gray-800' : 'text-gray-400'}`}>
            Visitor Count
          </span>
        </div>

        {/* Visitor Comparison */}
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="relative inline-flex items-center cursor-pointer w-4 sm:w-5 h-4 sm:h-5">
            <input
              type="checkbox"
              checked={authorities.visitorComparison}
              onChange={() => handleAuthorityChange('visitorComparison')}
              className="peer appearance-none w-full h-full bg-[#D9D9D9] checked:bg-[#6366F1] border border-gray-300 rounded-sm"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </label>
          <span className={`text-xs sm:text-sm ${authorities.visitorComparison ? 'text-gray-800' : 'text-gray-400'}`}>
            Visitor Comparison
          </span>
        </div>

        {/* Data Reports */}
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="relative inline-flex items-center cursor-pointer w-4 sm:w-5 h-4 sm:h-5">
            <input
              type="checkbox"
              checked={authorities.dataReports}
              onChange={() => handleAuthorityChange('dataReports')}
              className="peer appearance-none w-full h-full bg-[#D9D9D9] checked:bg-[#6366F1] border border-gray-300 rounded-sm"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </label>
          <span className={`text-xs sm:text-sm ${authorities.dataReports ? 'text-gray-800' : 'text-gray-400'}`}>
            Data Reports
          </span>
        </div>

        {/* Capacity Master */}
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="relative inline-flex items-center cursor-pointer w-4 sm:w-5 h-4 sm:h-5">
            <input
              type="checkbox"
              checked={authorities.capacityMaster}
              onChange={() => handleAuthorityChange('capacityMaster')}
              className="peer appearance-none w-full h-full bg-[#D9D9D9] checked:bg-[#6366F1] border border-gray-300 rounded-sm"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </label>
          <span className={`text-xs sm:text-sm ${authorities.capacityMaster ? 'text-gray-800' : 'text-gray-400'}`}>
            Capacity Master
          </span>
        </div>

        {/* Login History */}
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="relative inline-flex items-center cursor-pointer w-4 sm:w-5 h-4 sm:h-5">
            <input
              type="checkbox"
              checked={authorities.loginHistory}
              onChange={() => handleAuthorityChange('loginHistory')}
              className="peer appearance-none w-full h-full bg-[#D9D9D9] checked:bg-[#6366F1] border border-gray-300 rounded-sm"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </label>
          <span className={`text-xs sm:text-sm ${authorities.loginHistory ? 'text-gray-800' : 'text-gray-400'}`}>
            Login History
          </span>
        </div>
      </div>

      {/* Update Button */}
      <div className="mt-3 sm:mt-4 flex justify-center">
        <Button
          onClick={handleUpdateAuthorities}
          className="bg-[#4CAF50] hover:bg-[#45A049] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium"
        >
          UPDATE AUTHORITIES
        </Button>
      </div>
    </div>
  );
};