import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OccupancyTrend: React.FC = () => {
  const [buildingName, setBuildingName] = useState('Roddenberry');
  const [zone, setZone] = useState('');
  const [entrance, setEntrance] = useState('All');
  const [fromDate, setFromDate] = useState<Date>(new Date(2025, 1, 10));
  const [toDate, setToDate] = useState<Date>(new Date(2025, 1, 18));

  // Sample data for the occupancy trend chart
  const chartData = [
    { time: '12:01:25 AM', tuesday: 48, wednesday: 40, thursday: 55, friday: 25, saturday: 3, sunday: 2, monday: 52 },
    { time: '01:01:25 AM', tuesday: 47, wednesday: 42, thursday: 54, friday: 24, saturday: 4, sunday: 2, monday: 51 },
    { time: '02:01:25 AM', tuesday: 49, wednesday: 44, thursday: 56, friday: 22, saturday: 3, sunday: 1, monday: 53 },
    { time: '03:01:25 AM', tuesday: 2, wednesday: 3, thursday: 2, friday: 1, saturday: 2, sunday: 1, monday: 2 },
    { time: '04:01:25 AM', tuesday: 3, wednesday: 4, thursday: 3, friday: 2, saturday: 3, sunday: 2, monday: 3 },
    { time: '05:01:25 AM', tuesday: 5, wednesday: 6, thursday: 5, friday: 3, saturday: 4, sunday: 3, monday: 4 },
    { time: '06:01:25 AM', tuesday: 8, wednesday: 10, thursday: 9, friday: 6, saturday: 5, sunday: 4, monday: 7 },
    { time: '07:01:25 AM', tuesday: 15, wednesday: 18, thursday: 12, friday: 8, saturday: 6, sunday: 5, monday: 14 },
    { time: '08:01:25 AM', tuesday: 25, wednesday: 35, thursday: 20, friday: 10, saturday: 8, sunday: 6, monday: 22 },
    { time: '09:01:25 AM', tuesday: 45, wednesday: 42, thursday: 35, friday: 12, saturday: 10, sunday: 8, monday: 40 },
    { time: '10:01:25 AM', tuesday: 65, wednesday: 38, thursday: 60, friday: 11, saturday: 8, sunday: 6, monday: 62 },
    { time: '11:01:25 AM', tuesday: 70, wednesday: 40, thursday: 75, friday: 10, saturday: 5, sunday: 4, monday: 73 },
    { time: '12:01:25 PM', tuesday: 62, wednesday: 55, thursday: 72, friday: 9, saturday: 3, sunday: 2, monday: 75 },
    { time: '01:01:25 PM', tuesday: 60, wednesday: 58, thursday: 70, friday: 8, saturday: 2, sunday: 1, monday: 78 },
    { time: '02:01:25 PM', tuesday: 65, wednesday: 62, thursday: 85, friday: 7, saturday: 4, sunday: 3, monday: 82 },
    { time: '03:01:25 PM', tuesday: 70, wednesday: 68, thursday: 88, friday: 6, saturday: 5, sunday: 4, monday: 88 },
    { time: '04:01:25 PM', tuesday: 68, wednesday: 70, thursday: 85, friday: 8, saturday: 6, sunday: 5, monday: 90 },
    { time: '05:01:25 PM', tuesday: 72, wednesday: 72, thursday: 82, friday: 10, saturday: 8, sunday: 6, monday: 85 },
    { time: '06:01:25 PM', tuesday: 65, wednesday: 68, thursday: 75, friday: 9, saturday: 7, sunday: 5, monday: 75 },
    { time: '07:01:25 PM', tuesday: 58, wednesday: 65, thursday: 70, friday: 8, saturday: 6, sunday: 4, monday: 65 },
    { time: '08:01:25 PM', tuesday: 45, wednesday: 58, thursday: 50, friday: 7, saturday: 5, sunday: 3, monday: 55 },
    { time: '09:01:25 PM', tuesday: 42, wednesday: 55, thursday: 35, friday: 6, saturday: 4, sunday: 2, monday: 50 },
    { time: '10:01:25 PM', tuesday: 40, wednesday: 52, thursday: 25, friday: 5, saturday: 3, sunday: 1, monday: 48 },
    { time: '11:01:25 PM', tuesday: 38, wednesday: 50, thursday: 22, friday: 4, saturday: 2, sunday: 1, monday: 45 }
  ];

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
              <svg className="mr-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
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
          
          {/* Horizontal Line */}
          <div className="w-full h-0 border-t border-[#4248AC] mt-[2vh] flex-shrink-0" />
          
          {/* Report Results Section */}
          <div className="flex flex-row justify-between items-center mt-[2vh] gap-[1vw] flex-shrink-0">
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-[rgba(48,66,127,1)]" style={{ fontSize: 'clamp(24px, 2.5vw, 32.68px)' }}>
                Data Report: Occupancy Trend Report
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
          
          {/* Occupancy Trend line chart */}
          <div className="flex-1 border border-gray-300 mt-[2vh] min-h-0 overflow-hidden bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 12 }}
                  angle={0}
                  textAnchor="middle"
                  height={40}
                  interval={1}
                  tickFormatter={(value, index) => {
                    // Show every 2 hours starting from 12 AM
                    if (index % 2 === 0) {
                      return value.replace(':01:25', ':00');
                    }
                    return '';
                  }}
                />
                <YAxis 
                  label={{ value: 'Occupancy', angle: -90, position: 'insideLeft' }}
                  domain={[0, 100]}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip 
                  labelStyle={{ color: '#333' }}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingBottom: '20px' }}
                  iconType="line"
                  verticalAlign="top"
                />
                <Line 
                  type="monotone" 
                  dataKey="tuesday" 
                  stroke="#4F46E5" 
                  strokeWidth={2}
                  name="18 Mar 2025 Tuesday"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="wednesday" 
                  stroke="#DC2626" 
                  strokeWidth={2}
                  name="19 Mar 2025 Wednesday"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="thursday" 
                  stroke="#6B7280" 
                  strokeWidth={2}
                  name="20 Mar 2025 Thursday"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="friday" 
                  stroke="#D97706" 
                  strokeWidth={2}
                  name="21 Mar 2025 Friday"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="saturday" 
                  stroke="#059669" 
                  strokeWidth={2}
                  name="22 Mar 2025 Saturday"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="sunday" 
                  stroke="#2563EB" 
                  strokeWidth={2}
                  name="23 Mar 2025 Sunday"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="monday" 
                  stroke="#BE185D" 
                  strokeWidth={2}
                  name="24 Mar 2025 Monday"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccupancyTrend;