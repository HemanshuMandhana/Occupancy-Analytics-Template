import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AuthorityList } from './AuthorityList';

interface Building {
  name: string;
}

interface AssignBuildingSectionProps {
  selectedBuildings: string[];
  buildings: Building[];
  handleBuildingSelect: (buildingName: string) => void;
  handleSave: () => void;
  handleCancel: () => void;
  handleDelete: () => void;
}

export const AssignBuildingSection: React.FC<AssignBuildingSectionProps> = ({
  selectedBuildings,
  buildings,
  handleBuildingSelect,
  handleSave,
  handleCancel,
  handleDelete
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedBuildingForAuthority, setSelectedBuildingForAuthority] = useState('');
  const [clickedButtonElement, setClickedButtonElement] = useState<HTMLElement | null>(null);

  const handleAuthorityClick = (buildingName: string, buttonElement: HTMLElement) => {
    setSelectedBuildingForAuthority(buildingName);
    setClickedButtonElement(buttonElement);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setSelectedBuildingForAuthority('');
    setClickedButtonElement(null);
  };

  // Close popup when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupOpen && !event.target) return;
      
      const target = event.target as Element;
      const popup = document.querySelector('[data-authority-popup]');
      const buttons = document.querySelectorAll('[data-authority-button]');
      
      if (popup && !popup.contains(target) && 
          !Array.from(buttons).some(button => button.contains(target))) {
        handleClosePopup();
      }
    };

    if (popupOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [popupOpen]);
  return (
    <div className="bg-transparent text-black font-['Inter'] pl-[5.885vw]">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <img
            src="/images/AssignBuilding-icon-UserMaster.svg"
            alt="Assign Building Icon"
            className="w-[4.5vw] sm:w-[4.0vw] md:w-[3.5vw] lg:w-[2.0vw] h-[4.5vw] sm:h-[4.0vw] md:h-[3.5vw] lg:h-[2.0vw] aspect-square"
          />
          <h3 className="font-semibold text-gray-800 text-[5vw] sm:text-[4.5vw] md:text-[3.5vw] lg:text-[2.04vw] h-[4.35vh] leading-[4.35vh]">
            Assign Building
          </h3>
        </div>

        {/* Table Headers */}
        <div className="grid grid-cols-2 gap-4 mb-4 mt-[2.66vh]">
          <div className="font-medium text-gray-800 text-[3.8vw] sm:text-[3.2vw] md:text-[2.2vw] lg:text-[1.14vw]">
            Building name
          </div>
          <div className="font-medium text-gray-800 text-[3.8vw] sm:text-[3.2vw] md:text-[2.2vw] lg:text-[1.14vw]">
            Authorities
          </div>
        </div>
        
        {/* Building List */}
        <div className="flex-1 space-y-0">
          {buildings.map((building, index) => (
            <div 
              key={index} 
              className={cn(
                "grid grid-cols-2 gap-4 items-center",
                index > 0 && "pt-[2.66vh]"
              )}
            >
              <div className="flex items-center gap-3">
                <label className="relative inline-flex items-center cursor-pointer w-[3.5vw] sm:w-[3.0vw] md:w-[2.5vw] lg:w-[1.5vw] h-[3.5vw] sm:h-[3.0vw] md:h-[2.5vw] lg:h-[1.5vw] aspect-square">
                  <input
                    type="checkbox"
                    checked={selectedBuildings.includes(building.name)}
                    onChange={() => handleBuildingSelect(building.name)}
                    className="peer appearance-none w-full h-full bg-[#D9D9D9] checked:bg-[#F5A728] border border-gray-300 rounded-sm"
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
                <span className="font-medium text-gray-800 text-[4.5vw] sm:text-[3.8vw] md:text-[2.8vw] lg:text-[1.65vw]">
                  {building.name}
                </span>
              </div>
              <div className="flex items-center">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAuthorityClick(building.name, e.currentTarget);
                  }}
                  className="border-none bg-transparent hover:bg-transparent p-0"
                  data-authority-button
                >
                  <img
                    src="/images/Authority-icon-UserMaster.svg"
                    alt="Authority Icon"
                    className="w-[6vw] sm:w-[5vw] md:w-[4vw] lg:w-[2.5vw] h-[6vw] sm:h-[5vw] md:h-[4vw] lg:h-[2.5vw] aspect-square"
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons at Bottom */}
        <div
          className="flex mt-auto pt-4 items-left justify-left"
          style={{ gap: "18px" }} // fixed 18px gap
        >
          <Button
            onClick={handleSave}
            className="border-none bg-transparent hover:bg-transparent p-0 w-[14vw] sm:w-[18vw] xl:w-[7vw] h-[5.19vh] flex items-left justify-left"
          >
            <img
              src="/images/Save-UserMaster.svg"
              alt="Save Icon"
              className="w-full h-full object-contain"
            />
          </Button>
          <Button
            onClick={handleCancel}
            className="border-none bg-transparent hover:bg-transparent p-0 w-[14vw] sm:w-[18vw] xl:w-[7vw] h-[5.19vh] flex items-left justify-left"
          >
            <img
              src="/images/Cancel-UserMaster.svg"
              alt="Cancel Icon"
              className="w-full h-full object-contain"
            />
          </Button>
          <Button
            onClick={handleDelete}
            className="border-none bg-transparent hover:bg-transparent p-0 w-[14vw] sm:w-[18vw] xl:w-[7vw] h-[5.19vh] flex items-left justify-left"
          >
            <img
              src="/images/DeleteButton-UserMaster.svg"
              alt="Delete Icon"
              className="w-full h-full object-contain"
            />
          </Button>
        </div>

        {/* Assign Authorities Popup - Fixed position */}
        {popupOpen && (
          <AuthorityList
            isOpen={popupOpen}
            onClose={handleClosePopup}
            buildingName={selectedBuildingForAuthority}
            clickedButtonElement={clickedButtonElement}
          />
        )}
      </div>
    </div>
  );
};