import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, ChevronUp, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface FilterSectionProps {
  buildingName: string;
  setBuildingName: (value: string) => void;
  zone: string;
  setZone: (value: string) => void;
  entrance: string;
  setEntrance: (value: string) => void;
  fromDate: Date | undefined;
  setFromDate: (date: Date | undefined) => void;
  toDate: Date | undefined;
  setToDate: (date: Date | undefined) => void;
}

export interface FilterSectionRef {
  collapseFilter: () => void;
}

export const FilterSection = forwardRef<FilterSectionRef, FilterSectionProps>(({
  buildingName,
  setBuildingName,
  zone,
  setZone,
  entrance,
  setEntrance,
  fromDate,
  setFromDate,
  toDate,
  setToDate
}, ref) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const collapseFilter = () => {
    setIsExpanded(false);
  };

  // Expose the collapseFilter method to parent components
  useImperativeHandle(ref, () => ({
    collapseFilter
  }));

  return (
    <div className={cn(
      "bg-[rgba(48,66,127,1)] rounded-lg text-white flex-shrink-0 p-[1.25vw] transition-all duration-300 ease-in-out",
      isExpanded ? "" : "py-[0.75vw]"
    )} 
         style={{ minHeight: isExpanded ? 'clamp(160px, 20vh, 220px)' : 'auto' }}>
      
      {/* Desktop Layout - 3 columns */}
      <div className="hidden lg:flex h-full">
        {/* First Column - Icon and Title */}
        <div className={cn(
          "flex justify-center px-[1vw]",
          isExpanded ? "flex-col items-start" : "flex-row items-center space-x-3",
          isExpanded ? "" : "flex-1"
        )} 
             style={{ flex: isExpanded ? '0 0 30%' : '1' }}>
          {/* Icon */}
          <div className="bg-white/20 rounded-full flex items-center justify-center overflow-hidden aspect-square" 
               style={{ 
                 width: 'clamp(60px, 3.125vw, 92px)', 
                 height: 'clamp(60px, 3.125vw, 92px)',
                 marginBottom: isExpanded ? '1vh' : '0'
               }}>
                <img
                  src="/images/Data-report-filter icon.svg"
                  alt="Filter Icon"
                  className="w-full h-full object-cover rounded-full"
                />                      
          </div>
          
          {/* Text and toggle button */}
          <div className={cn(
            "flex items-center space-x-2",
            isExpanded ? "" : "flex-1 justify-left"
          )}>
            <h1 className="font-semibold text-left leading-tight" 
                style={{ fontSize: 'clamp(24px, 1.25vw, 32px)' }}>
              Select Report Filter
            </h1>
            <button
              onClick={toggleExpanded}
              className="text-white hover:text-white/80 transition-colors"
              style={{ fontSize: 'clamp(24px, 2.2vw, 32px)' }}
            >
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
        </div>

        {/* Second and Third Columns - Only show when expanded */}
        {isExpanded && (
          <>
            {/* Second Column - Building and Dates */}
            <div className="flex flex-col justify-center px-[1vw]" style={{ flex: '0 0 35%' }}>
              {/* Building Name */}
              <div className="mb-[1.5vh]">
                <Label className="text-white mb-1 block" 
                       style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>
                  Building Name
                </Label>
                <Select value={buildingName} onValueChange={setBuildingName}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white w-full" 
                                 style={{ 
                                   height: 'clamp(28px, 3.5vh, 40px)',
                                   fontSize: 'clamp(11px, 0.9vw, 14px)'
                                 }}>
                    <SelectValue placeholder="Select building" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Roddenberry">Roddenberry</SelectItem>
                    <SelectItem value="Building A">Building A</SelectItem>
                    <SelectItem value="Building B">Building B</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Fields */}
              <div className="grid grid-cols-2 gap-[1vw]">
                <div>
                  <Label className="text-white mb-1 block" 
                         style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>
                    From Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 w-full",
                          !fromDate && "text-white/60"
                        )}
                        style={{ 
                          height: 'clamp(28px, 3.5vh, 40px)',
                          fontSize: 'clamp(11px, 0.9vw, 14px)'
                        }}
                      >
                        <CalendarIcon className="mr-2" 
                                      style={{ 
                                        width: 'clamp(12px, 1vw, 16px)', 
                                        height: 'clamp(12px, 1vw, 16px)' 
                                      }} />
                        {fromDate ? format(fromDate, "dd/MM/yyyy") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={fromDate}
                        onSelect={setFromDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label className="text-white mb-1 block" 
                         style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>
                    To Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 w-full",
                          !toDate && "text-white/60"
                        )}
                        style={{ 
                          height: 'clamp(28px, 3.5vh, 40px)',
                          fontSize: 'clamp(11px, 0.9vw, 14px)'
                        }}
                      >
                        <CalendarIcon className="mr-2" 
                                      style={{ 
                                        width: 'clamp(12px, 1vw, 16px)', 
                                        height: 'clamp(12px, 1vw, 16px)' 
                                      }} />
                        {toDate ? format(toDate, "dd/MM/yyyy") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={toDate}
                        onSelect={setToDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Third Column - Zone and Entrance */}
            <div className="flex flex-col justify-center px-[1vw]" style={{ flex: '0 0 35%' }}>
              {/* Zone */}
              <div className="mb-[1.5vh]">
                <Label className="text-white mb-1 block" 
                       style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>
                  Zone
                </Label>
                <Input
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  placeholder="Floor 1"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full"
                  style={{ 
                    height: 'clamp(28px, 3.5vh, 40px)',
                    fontSize: 'clamp(11px, 0.9vw, 14px)'
                  }}
                />
              </div>
              
              {/* Entrance */}
              <div>
                <Label className="text-white mb-1 block" 
                       style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}>
                  Entrance
                </Label>
                <Input
                  value={entrance}
                  onChange={(e) => setEntrance(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full"
                  style={{ 
                    height: 'clamp(28px, 3.5vh, 40px)',
                    fontSize: 'clamp(11px, 0.9vw, 14px)'
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile/Tablet Layout - Stacked vertically */}
      <div className="lg:hidden flex flex-col h-full">
        {/* Header with icon and title */}
        <div className={cn(
          "flex items-center justify-center mb-[1vh]",
          isExpanded ? "space-x-3" : "space-x-3"
        )}>
          <div
            className="bg-white/20 rounded-full flex items-center justify-center overflow-hidden aspect-square"
            style={{
              width: 'clamp(60px, 4.792vw, 92px)',
              height: 'clamp(60px, 4.792vw, 92px)'
            }}
          >
            <img
              src="/images/Data-report-filter icon.svg"
              alt="Filter Icon"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Text and toggle button */}
          <div className="flex items-center space-x-2">
            <h1
              className="font-semibold text-left leading-tight"
              style={{ fontSize: 'clamp(24px, 2.2vw, 32px)' }}
            >
              Select Report Filter
            </h1>
            <button
              onClick={toggleExpanded}
              className="text-white hover:text-white/80 transition-colors"
              style={{ fontSize: 'clamp(24px, 2.2vw, 32px)' }}
            >
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
        </div>

        {/* Form fields in mobile layout - Only show when expanded */}
        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] space-y-[2vh]">
            {/* Building Name */}
            <div>
              <Label className="text-white mb-1 block" style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>Building Name</Label>
              <Select value={buildingName} onValueChange={setBuildingName}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white w-full" style={{ height: 'clamp(32px, 6vw, 40px)', fontSize: 'clamp(12px, 2.5vw, 14px)' }}>
                  <SelectValue placeholder="Select building" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Roddenberry">Roddenberry</SelectItem>
                  <SelectItem value="Building A">Building A</SelectItem>
                  <SelectItem value="Building B">Building B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Zone */}
            <div>
              <Label className="text-white mb-1 block" style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>Zone</Label>
              <Input
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                placeholder="Floor 1"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full"
                style={{ height: 'clamp(32px, 6vw, 40px)', fontSize: 'clamp(12px, 2.5vw, 14px)' }}
              />
            </div>

            {/* From Date */}
            <div>
              <Label className="text-white mb-1 block" style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>From Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 w-full",
                      !fromDate && "text-white/60"
                    )}
                    style={{ height: 'clamp(32px, 6vw, 40px)', fontSize: 'clamp(12px, 2.5vw, 14px)' }}
                  >
                    <CalendarIcon className="mr-2" style={{ width: 'clamp(14px, 3vw, 16px)', height: 'clamp(14px, 3vw, 16px)' }} />
                    {fromDate ? format(fromDate, "dd/MM/yyyy") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={fromDate}
                    onSelect={setFromDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* To Date */}
            <div>
              <Label className="text-white mb-1 block" style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>To Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 w-full",
                      !toDate && "text-white/60"
                    )}
                    style={{ height: 'clamp(32px, 6vw, 40px)', fontSize: 'clamp(12px, 2.5vw, 14px)' }}
                  >
                    <CalendarIcon className="mr-2" style={{ width: 'clamp(14px, 3vw, 16px)', height: 'clamp(14px, 3vw, 16px)' }} />
                    {toDate ? format(toDate, "dd/MM/yyyy") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={toDate}
                    onSelect={setToDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Entrance - spans full width on mobile */}
            <div className="md:col-span-2">
              <Label className="text-white mb-1 block" style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>Entrance</Label>
              <Input
                value={entrance}
                onChange={(e) => setEntrance(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full"
                style={{ height: 'clamp(32px, 6vw, 40px)', fontSize: 'clamp(12px, 2.5vw, 14px)' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
});