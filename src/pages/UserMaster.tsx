import React, { useState } from 'react';
import { DateControls } from '../components/dashboard/DateControls';
import { Button } from '@/components/ui/button';
import { UserFormSection } from '../components/user-master/UserFormSection';
import { AssignBuildingSection } from '../components/user-master/AssignBuildingSection';

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
            {/* User Form Section */}
            <UserFormSection
              userName={userName}
              setUserName={setUserName}
              userType={userType}
              setUserType={setUserType}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              emailId={emailId}
              setEmailId={setEmailId}
              expireDate={expireDate}
              setExpireDate={setExpireDate}
            />

            {/* Assign Building Section */}
            <AssignBuildingSection
              selectedBuildings={selectedBuilding}
              buildings={buildings}
              handleBuildingSelect={handleBuildingSelect}
              handleSave={handleSave}
              handleCancel={handleCancel}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>  
    </div>
  );
};

export default UserMaster;