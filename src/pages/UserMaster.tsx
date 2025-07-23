import React, { useState } from 'react';
import { DateControls } from '../components/dashboard/DateControls';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { AuthorityList } from '../components/user-master/AuthorityList';

interface Building {
  name: string;
}

// ActionButtons Functional Component
const ActionButtons: React.FC = () => {
  const handleAdd = () => {
    console.log("Adding new user...");
  };

  const handleModify = () => {
    console.log("Modifying user...");
  };

  return (
    <div className="flex gap-3">
      <Button
        onClick={handleAdd}
        className="bg-[#E0F0E4] hover:bg-[#e0f0e492] text-[#20744A] border border-[#20744A]"
      >
        <img
          src="/images/Add-UserMaster-icon.svg"
          alt="Add Icon"
          className="md:mr-2 h-4 w-4"
        />
        <span className="hidden md:inline">Add</span>
      </Button>
      <Button
        onClick={handleModify}
        className="bg-[#F5A72838] hover:bg-[#f5a62871] text-[#F5A728] border border-[#F5A728]"
      >
        <img
          src="/images/modify-UserMaster-icon.svg"
          alt="Modify Icon"
          className="md:mr-2 h-4 w-4"
        />
        <span className="hidden md:inline">Modify</span>
      </Button>
    </div>
  );
};

const UserMaster: React.FC = () => {
  const [userName, setUserName] = useState('Canizajo');
  const [userType, setUserType] = useState('SU0001');
  const [password, setPassword] = useState('10/02/2025');
  const [confirmPassword, setConfirmPassword] = useState('10/02/2025');
  const [emailId, setEmailId] = useState('Canizajo');
  const [expireDate, setExpireDate] = useState<Date>(new Date(2025, 1, 10));
  const [selectedBuilding, setSelectedBuilding] = useState<string[]>(['Roddenberry']);
  
  // Authority popup states
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedBuildingForAuthority, setSelectedBuildingForAuthority] = useState('');
  const [clickedButtonElement, setClickedButtonElement] = useState<HTMLElement | null>(null);

  const buildings = [
    { name: 'Roddenberry' },
    { name: 'Building 213' },
    { name: 'Zukor' },
    { name: 'Bluhdorn' },
  ];

  const handleSave = () => {
    console.log('Saving user data...');
  };

  const handleCancel = () => {
    console.log('Cancelling changes...');
  };

  const handleDelete = () => {
    console.log('Deleting user...');
  };

  const handleBuildingSelect = (buildingName: string) => {
    setSelectedBuilding((prevSelected) =>
      prevSelected.includes(buildingName)
        ? prevSelected.filter((b) => b !== buildingName)
        : [...prevSelected, buildingName]
    );
  };

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
    <div className="h-full flex flex-col">
      {/* Date Controls with Action Buttons */}
      <div className="relative flex-shrink-0">
        <DateControls />
        <div className="absolute top-0 right-0 flex items-center z-10 h-[7.27vh] pr-6">
          <ActionButtons />
        </div>
      </div>
      <div className="pt-[1.389vh] px-[1.875vw] flex-1">
        {/* Main Section - Takes remaining space */}
        <div className="relative flex-1 bg-[#F7F8FF] pt-[2.22vh] h-full overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover opacity-45 pointer-events-none"
            style={{
              backgroundImage: "url('/images/cropped bg image.svg')"
            }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 h-full mx-[1.25vw] pb-[6.72vh]">
            
            {/* User Form Section - Merged from UserFormSection.tsx */}
            <div className="bg-[#253878] rounded-2xl text-white px-[1.25vw] py-[3.65vh]">
              <div className="space-y-0">
                {/* User Name */}
                <div>
                  <Label 
                    htmlFor="userName" 
                    className="text-white block text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw] h-[3.7vh] leading-[3.7vh]"
                  >
                    User Name
                  </Label>
                  <Input
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full h-[5.99vh] text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw]"
                  />
                </div>

                {/* User Type */}
                <div className="pt-[3.13vh]">
                  <Label 
                    htmlFor="userType" 
                    className="text-white block text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw] h-[3.7vh] leading-[3.7vh]"
                  >
                    User Type
                  </Label>
                  <p className="text-white/80 text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw] h-[3.7vh] leading-[3.7vh]">
                    Note: The admin have access of all the report
                  </p>
                  <Input
                    id="userType"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full h-[5.99vh] text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw]"
                  />
                </div>

                {/* Password Section */}
                <div className="pt-[3.13vh]">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label 
                        htmlFor="password" 
                        className="text-white block text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw] h-[3.7vh] leading-[3.7vh]"
                      >
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full h-[5.99vh] text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw]"
                      />
                    </div>
                    
                    <div>
                      <Label 
                        htmlFor="confirmPassword" 
                        className="text-white block text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw] h-[3.7vh] leading-[3.7vh]"
                      >
                        Confirm Password
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full h-[5.99vh] text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw]"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Id */}
                <div className="pt-[3.13vh]">
                  <Label 
                    htmlFor="emailId" 
                    className="text-white block text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw] h-[3.7vh] leading-[3.7vh]"
                  >
                    Email Id
                  </Label>
                  <Input
                    id="emailId"
                    type="email"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full h-[5.99vh] text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw]"
                  />
                </div>

                {/* Account Expire Date */}
                <div className="pt-[3.13vh]">
                  <Label className="text-white block text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw] h-[3.7vh] leading-[3.7vh]">
                    Account expire date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 h-[5.99vh] text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw]",
                          !expireDate && "text-white/60"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {expireDate ? format(expireDate, "dd/MM/yyyy") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={expireDate}
                        onSelect={setExpireDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Assign Building Section - Merged from AssignBuildingSection.tsx */}
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
                            checked={selectedBuilding.includes(building.name)}
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

          </div>
        </div>
      </div>  
    </div>
  );
};

export default UserMaster;