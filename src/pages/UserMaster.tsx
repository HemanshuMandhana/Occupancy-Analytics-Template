import React, { useState } from 'react';
import { DateControls } from '../components/dashboard/DateControls';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus, Edit, Trash2, User, Building } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

// Action Buttons Component
const ActionButtons: React.FC = () => {
  const handleAdd = () => {
    console.log('Adding new user...');
  };

  const handleModify = () => {
    console.log('Modifying user...');
  };

  return (
    <div className="flex gap-3">
      <Button 
        onClick={handleAdd}
        className="bg-green-600 hover:bg-green-700 text-white"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add
      </Button>
      <Button 
        onClick={handleModify}
        className="bg-orange-500 hover:bg-orange-600 text-white"
      >
        <Edit className="mr-2 h-4 w-4" />
        Modify
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

  const buildings = [
    { name: 'Roddenberry', authorities: true },
    { name: 'Building 213', authorities: true },
    { name: 'Zukor', authorities: true },
    { name: 'Bluhdorn', authorities: true },
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

  return (
    <div className="min-h-full relative">
      <DateControls />
      
      {/* Action Buttons positioned absolutely to align with DateControls */}
      <div className="absolute top-0 right-4 lg:right-6 h-[78.5px] flex items-center z-10">
        <ActionButtons />
      </div>
      
      <div 
        className="px-4 lg:px-6 pb-4 space-y-6"
        style={{ paddingTop: 'clamp(24px, 3.5vh, 56px)' }}
      >
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* User Form Section */}
          <div className="xl:col-span-2">
            <div className="bg-[rgba(48,66,127,1)] rounded-xl p-6 text-white">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="userName" className="text-white mb-2 block">User Name</Label>
                  <Input
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>

                <div>
                  <Label htmlFor="userType" className="text-white mb-2 block">User Type</Label>
                  <p className="text-sm text-white/80 mb-2">Note: The admin have access of all the report</p>
                  <Input
                    id="userType"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="password" className="text-white mb-2 block">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="confirmPassword" className="text-white mb-2 block">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="emailId" className="text-white mb-2 block">Email Id</Label>
                  <Input
                    id="emailId"
                    type="email"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>

                <div>
                  <Label className="text-white mb-2 block">Account expire date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20",
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

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <Button 
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white px-8"
              >
                Save
              </Button>
              <Button 
                onClick={handleCancel}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleDelete}
                variant="outline"
                className="border-red-300 text-red-600 hover:bg-red-50 px-8"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>

          {/* Assign Building Section */}
          <div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[rgba(48,66,127,1)] rounded flex items-center justify-center">
                  <Building className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Assign Building</h3>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600 mb-2">
                  <div>Building name</div>
                  <div>Authorities</div>
                </div>
                
                {buildings.map((building, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-300 rounded"></div>
                      <span className="font-medium text-gray-800">{building.name}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMaster;