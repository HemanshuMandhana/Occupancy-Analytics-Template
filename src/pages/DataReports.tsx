import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Download, RotateCcw } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import AutorenewIcon from '@mui/icons-material/Autorenew';


const DataReports: React.FC = () => {
  const [buildingName, setBuildingName] = useState('Roddenberry');
  const [zone, setZone] = useState('');
  const [entrance, setEntrance] = useState('All');
  const [fromDate, setFromDate] = useState<Date>(new Date(2025, 1, 10));
  const [toDate, setToDate] = useState<Date>(new Date(2025, 1, 18));

  const handleReset = () => {
    setBuildingName('Roddenberry');
    setZone('');
    setEntrance('All');
    setFromDate(new Date(2025, 1, 10));
    setToDate(new Date(2025, 1, 18));
  };

  const handleView = () => {
    console.log('Viewing report with filters:', {
      buildingName,
      zone,
      entrance,
      fromDate,
      toDate
    });
  };

  const handleDownload = () => {
    console.log('Downloading report...');
  };

  return (
    <div className="h-full flex flex-col">
      {/* Main content container that fills available space */}
      <div className="flex-1 flex flex-col px-[1.9vw] pt-[8.66vh] min-h-0">
        {/* Main section with flexible layout */}
        <div className="relative bg-[#F7F8FF] flex-1 flex flex-col p-[1.5vw] min-h-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover opacity-45 pointer-events-none"
            style={{
              backgroundImage: "url('/images/cropped bg image.svg')"
            }}
          />

          {/* Filter Section - Responsive layout */}
          <div className="bg-[rgba(48,66,127,1)] rounded-lg text-white flex-shrink-0 p-[1.5vw]" 
               style={{ minHeight: 'clamp(160px, 20vh, 220px)' }}>
            
            {/* Desktop Layout - 3 columns */}
            <div className="hidden lg:flex h-full">
              {/* First Column - Icon and Title */}
              <div className="flex flex-col items-start justify-center px-[1vw]" style={{ flex: '0 0 30%' }}>
                {/* Icon */}
                <div className="bg-white/20 rounded-full flex items-center justify-center mb-[1vh] overflow-hidden aspect-square" 
                     style={{ 
                       width: 'clamp(60px, 4.792vw, 92px)', 
                       height: 'clamp(60px, 4.792vw, 92px)' 
                     }}>
                      <img
                        src="/images/Data-report-filter icon.svg"
                        alt="Filter Icon"
                        className="w-full h-full object-cover rounded-full"
                      />                      
                </div>
                
                {/* Text below icon */}
                <h1 className="font-semibold text-left leading-tight" 
                    style={{ fontSize: 'clamp(24px, 2.2vw, 32px)' }}>
                  Select Report Filter
                </h1>
              </div>

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
            </div>

            {/* Mobile/Tablet Layout - Stacked vertically */}
            <div className="lg:hidden flex flex-col space-y-[2vh] h-full">
              {/* Header with icon and title */}
              <div className="flex items-center justify-center space-x-3 mb-[1vh]">
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
                {/* Text */}
                <h1
                  className="font-semibold text-left leading-tight"
                  style={{ fontSize: 'clamp(24px, 2.2vw, 32px)' }}
                >
                  Select Report Filter
                </h1>
              </div>

              {/* Form fields in mobile layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw]">
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
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-row justify-center sm:justify-end items-center mt-[2vh] gap-[1vw] flex-shrink-0">
            <Button 
              onClick={handleReset}
              variant="outline"
              className="bg-[#F5A728] hover:bg-[#f5a7009c] text-[#333333] border-transparent font-semibold"
              style={{ 
                height: 'clamp(36px, 5vh, 48px)',
                fontSize: 'clamp(16px, 1.2vw, 24px)',
                minWidth: 'clamp(80px, 10vw, 120px)'
              }}
            >
              <AutorenewIcon 
                className="mr-1 font-semibold"
                sx={{ 
                  width: '24px',
                  height: '24px',
                }}
              />
              Reset
            </Button>
            <Button 
              onClick={handleView}
              className="bg-[#20744A] hover:bg-[#20744ae1] text-white"
              style={{ 
                height: 'clamp(36px, 5vh, 48px)',
                fontSize: 'clamp(12px, 1.2vw, 16px)',
                minWidth: 'clamp(80px, 10vw, 120px)'
              }}
            >
              View
            </Button>
          </div>
          
          {/* Report Results Section */}
          <div className="flex flex-row justify-between items-center mt-[2vh] gap-[1vw] flex-shrink-0">
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-[rgba(48,66,127,1)]" style={{ fontSize: 'clamp(24px, 2.5vw, 32.68px)' }}>
                Data Report
              </h2>
              <p className="text-[#4267B1]" style={{ fontSize: 'clamp(16px, 1.8vw, 24px)' }}>
                Data: {fromDate ? format(fromDate, "dd/MM/yyyy") : "10/02/2025"} to {toDate ? format(toDate, "dd/MM/yyyy") : "18/02/2025"}
              </p>
            </div>
            <div className="flex-shrink-0">
              <button 
                className="hover:opacity-80 transition-opacity"
                onClick={handleDownload}
                aria-label="Download data as Excel file"
              >
                {/* Download Button - visible on all screen sizes */}
                <img
                  src="/images/Primary Download Button.svg"
                  className="hidden sm:block w-auto h-auto object-contain"
                  alt="Download button"
                />
                {/* Mobile view - Excel icon only */}
                <img
                  src="/images/Excel icon.svg"
                  className="block sm:hidden w-auto h-auto object-contain"
                  alt="Download Excel file"
                />
              </button>
            </div>
          </div>

          {/* Data Table - Responsive with horizontal scroll */}
          <div className="flex-1 overflow-auto border border-gray-300 mt-[2vh] min-h-0">
            <div className="min-w-full overflow-x-auto">
              <table className="w-full border-collapse min-w-[700px]">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-[#4267B1] text-white">
                    <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                      Building
                    </th>
                    <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                      Zone
                    </th>
                    <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                      From date
                    </th>
                    <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                      To date
                    </th>
                    <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                      In count
                    </th>
                    <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                      Out count
                    </th>
                    <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                      Occupancy
                    </th>
                  </tr>
                </thead>
                <tbody className="opacity-90">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#ECEFFD]"}
                    >
                      <td
                        className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                        style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                      >
                        {index < 12 ? "Roddenberry" : "Building A"}
                      </td>
                      <td
                        className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                        style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                      >
                        Floor {Math.floor(index / 2) + 1}
                      </td>
                      <td
                        className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                        style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                      >
                        {format(fromDate, "dd/MM/yyyy")}
                      </td>
                      <td
                        className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                        style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                      >
                        {format(toDate, "dd/MM/yyyy")}
                      </td>
                      <td
                        className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                        style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                      >
                        {Math.floor(Math.random() * 50) + 20}
                      </td>
                      <td
                        className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                        style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                      >
                        {Math.floor(Math.random() * 40) + 15}
                      </td>
                      <td
                        className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                        style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                      >
                        {Math.floor(Math.random() * 30) + 10}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataReports;