import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface UserFormSectionProps {
  userName: string;
  setUserName: (value: string) => void;
  userType: string;
  setUserType: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  emailId: string;
  setEmailId: (value: string) => void;
  expireDate: Date;
  setExpireDate: (date: Date | undefined) => void;
}

export const UserFormSection: React.FC<UserFormSectionProps> = ({
  userName,
  setUserName,
  userType,
  setUserType,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  emailId,
  setEmailId,
  expireDate,
  setExpireDate
}) => {
  return (
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
  );
};