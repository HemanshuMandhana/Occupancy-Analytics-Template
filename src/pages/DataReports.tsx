import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarIcon, Download, RotateCcw } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const DataReports: React.FC = () => {
  const [buildingName, setBuildingName] = useState('Roddenberry');
  const [zone, setZone] = useState('Floor 1');
  const [entrance, setEntrance] = useState('All');
  const [fromDate, setFromDate] = useState<Date>(new Date(2025, 1, 10));
  const [toDate, setToDate] = useState<Date>(new Date(2025, 1, 18));

  const handleReset = () => {
    setBuildingName('Roddenberry');
    setZone('Floor 1');
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
    <div className="h-clamp(60px,8vh,78.5px) w-full overflow-hidden flex flex-col">
      
      {/* Main content container - positioned above background */}
      <div className="bg-white/95 relative z-10 flex-1 flex flex-col px-[clamp(12px,2vw,24px)] min-h-0">
        {/* Header Section */}
        <div className="pb-[clamp(60px,8vw,92px)] flex-shrink-0">
          {/* Your header content would go here */}
        </div>

        {/* Content Section - Flexible container that takes remaining space */}
        <div className="flex-1 min-h-0 bg-[rgba(246,247,255,1)] p-[clamp(16px,4vw,24px)] flex flex-col">
          {/* Filter Section */}
          <div className="bg-[rgba(48,66,127,1)] rounded-xl p-[clamp(16px,2.5vw,32px)] text-white flex-shrink-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(16px,2vw,32px)] items-start">
              {/* First Column - Icon and Title */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-[clamp(48px,8vw,80px)] h-[clamp(48px,8vw,80px)] bg-white/20 rounded-full flex items-center justify-center mb-[clamp(8px,1vh,16px)]">
                  <div className="w-[clamp(24px,4vw,40px)] h-[clamp(24px,4vw,40px)] bg-white/40 rounded"></div>
                </div>
                <h1 className="text-[clamp(16px,2.5vw,24px)] font-semibold">Select Report Filter</h1>
              </div>

              {/* Second Column - Building Name and Date Fields */}
              <div className="space-y-[clamp(12px,2vh,24px)]">
                <div>
                  <Label htmlFor="building" className="text-white mb-[clamp(4px,0.5vh,8px)] block text-[clamp(12px,1.5vw,14px)]">
                    Building Name
                  </Label>
                  <Select value={buildingName} onValueChange={setBuildingName}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white text-[clamp(12px,1.5vw,14px)] h-[clamp(32px,4vh,40px)]">
                      <SelectValue placeholder="Select building" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Roddenberry">Roddenberry</SelectItem>
                      <SelectItem value="Building A">Building A</SelectItem>
                      <SelectItem value="Building B">Building B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-[clamp(8px,1vw,16px)]">
                  <div>
                    <Label className="text-white mb-[clamp(4px,0.5vh,8px)] block text-[clamp(12px,1.5vw,14px)]">
                      From Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 text-[clamp(10px,1.2vw,12px)] h-[clamp(32px,4vh,40px)]",
                            !fromDate && "text-white/60"
                          )}
                        >
                          <CalendarIcon className="mr-1 h-[clamp(12px,1.5vw,16px)] w-[clamp(12px,1.5vw,16px)]" />
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
                    <Label className="text-white mb-[clamp(4px,0.5vh,8px)] block text-[clamp(12px,1.5vw,14px)]">
                      To Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 text-[clamp(10px,1.2vw,12px)] h-[clamp(32px,4vh,40px)]",
                            !toDate && "text-white/60"
                          )}
                        >
                          <CalendarIcon className="mr-1 h-[clamp(12px,1.5vw,16px)] w-[clamp(12px,1.5vw,16px)]" />
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

              {/* Third Column - Zone and Entrance Fields */}
              <div className="space-y-[clamp(12px,2vh,24px)]">
                <div>
                  <Label htmlFor="zone" className="text-white mb-[clamp(4px,0.5vh,8px)] block text-[clamp(12px,1.5vw,14px)]">
                    Zone
                  </Label>
                  <Input
                    id="zone"
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-[clamp(12px,1.5vw,14px)] h-[clamp(32px,4vh,40px)]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="entrance" className="text-white mb-[clamp(4px,0.5vh,8px)] block text-[clamp(12px,1.5vw,14px)]">
                    Entrance
                  </Label>
                  <Input
                    id="entrance"
                    value={entrance}
                    onChange={(e) => setEntrance(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-[clamp(12px,1.5vw,14px)] h-[clamp(32px,4vh,40px)]"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-end gap-[clamp(8px,1vw,16px)] mt-[clamp(8px,1vh,16px)] flex-shrink-0">
            <Button 
              onClick={handleReset}
              variant="outline"
              className="bg-orange-500 hover:bg-orange-600 text-white border-orange-500 text-[clamp(12px,1.5vw,14px)] h-[clamp(32px,4vh,40px)] px-[clamp(12px,1.5vw,20px)]"
            >
              <RotateCcw className="mr-2 h-[clamp(12px,1.5vw,16px)] w-[clamp(12px,1.5vw,16px)]" />
              Reset
            </Button>
            <Button 
              onClick={handleView}
              className="bg-green-600 hover:bg-green-700 text-white text-[clamp(12px,1.5vw,14px)] h-[clamp(32px,4vh,40px)] px-[clamp(12px,1.5vw,20px)]"
            >
              View
            </Button>
          </div>
          
          {/* Report Results Section - Takes remaining space */}
          <div className="bg-transparent backdrop-blur-sm rounded-xl flex-1 min-h-0 mt-[clamp(8px,1vh,16px)] flex flex-col">
            <div className="flex justify-between items-center mb-[clamp(8px,1vh,16px)] flex-shrink-0">
              <div>
                <h2 className="text-[clamp(18px,2.5vw,28px)] font-semibold text-[rgba(48,66,127,1)] mb-1">Data Report</h2>
                <p className="text-gray-600 text-[clamp(12px,1.5vw,14px)]">
                  Data: {fromDate ? format(fromDate, "dd/MM/yyyy") : "10/02/2025"} to {toDate ? format(toDate, "dd/MM/yyyy") : "18/02/2025"}
                </p>
              </div>
              <Button 
                onClick={handleDownload}
                className="bg-green-600 hover:bg-green-700 text-white text-[clamp(12px,1.5vw,14px)] h-[clamp(32px,4vh,40px)] px-[clamp(12px,1.5vw,20px)]"
              >
                <Download className="mr-2 h-[clamp(12px,1.5vw,16px)] w-[clamp(12px,1.5vw,16px)]" />
                Download
              </Button>
            </div>

            {/* Data Table - Takes remaining space and is scrollable */}
            <div 
              className="overflow-auto border border-gray-300 rounded-lg flex-1 min-h-0 scrollable-table"
              style={{
                maxHeight: '450px',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(156, 163, 175, 0.5) transparent'
              }}
            >
              <style dangerouslySetInnerHTML={{
                __html: `
                  .scrollable-table::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                  }
                  .scrollable-table::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  .scrollable-table::-webkit-scrollbar-thumb {
                    background: rgba(156, 163, 175, 0.5);
                    border-radius: 3px;
                  }
                  .scrollable-table::-webkit-scrollbar-thumb:hover {
                    background: rgba(156, 163, 175, 0.7);
                  }
                `
              }} />
              <table className="w-full border-collapse min-w-[800px]">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-[rgba(48,66,127,1)] text-white">
                    <th className="border border-gray-300 p-[clamp(8px,1vw,12px)] text-left text-[clamp(12px,1.5vw,14px)] font-medium h-[clamp(40px,4vh,48px)]">
                      Building
                    </th>
                    <th className="border border-gray-300 p-[clamp(8px,1vw,12px)] text-left text-[clamp(12px,1.5vw,14px)] font-medium h-[clamp(40px,4vh,48px)]">
                      Zone
                    </th>
                    <th className="border border-gray-300 p-[clamp(8px,1vw,12px)] text-left text-[clamp(12px,1.5vw,14px)] font-medium h-[clamp(40px,4vh,48px)]">
                      From date
                    </th>
                    <th className="border border-gray-300 p-[clamp(8px,1vw,12px)] text-left text-[clamp(12px,1.5vw,14px)] font-medium h-[clamp(40px,4vh,48px)]">
                      To date
                    </th>
                    <th className="border border-gray-300 p-[clamp(8px,1vw,12px)] text-left text-[clamp(12px,1.5vw,14px)] font-medium h-[clamp(40px,4vh,48px)]">
                      In count
                    </th>
                    <th className="border border-gray-300 p-[clamp(8px,1vw,12px)] text-left text-[clamp(12px,1.5vw,14px)] font-medium h-[clamp(40px,4vh,48px)]">
                      Out count
                    </th>
                    <th className="border border-gray-300 p-[clamp(8px,1vw,12px)] text-left text-[clamp(12px,1.5vw,14px)] font-medium h-[clamp(40px,4vh,48px)]">
                      Occupancy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 p-[clamp(8px,1vw,12px)] h-[clamp(40px,4vh,48px)] text-[clamp(12px,1.5vw,14px)]">
                        {index < 8 ? 'Roddenberry' : 'Building A'}
                      </td>
                      <td className="border border-gray-300 p-[clamp(8px,1vw,12px)] h-[clamp(40px,4vh,48px)] text-[clamp(12px,1.5vw,14px)]">
                        Floor {Math.floor(index / 2) + 1}
                      </td>
                      <td className="border border-gray-300 p-[clamp(8px,1vw,12px)] h-[clamp(40px,4vh,48px)] text-[clamp(12px,1.5vw,14px)]">
                        {format(fromDate, "dd/MM/yyyy")}
                      </td>
                      <td className="border border-gray-300 p-[clamp(8px,1vw,12px)] h-[clamp(40px,4vh,48px)] text-[clamp(12px,1.5vw,14px)]">
                        {format(toDate, "dd/MM/yyyy")}
                      </td>
                      <td className="border border-gray-300 p-[clamp(8px,1vw,12px)] h-[clamp(40px,4vh,48px)] text-[clamp(12px,1.5vw,14px)]">
                        {Math.floor(Math.random() * 50) + 20}
                      </td>
                      <td className="border border-gray-300 p-[clamp(8px,1vw,12px)] h-[clamp(40px,4vh,48px)] text-[clamp(12px,1.5vw,14px)]">
                        {Math.floor(Math.random() * 40) + 15}
                      </td>
                      <td className="border border-gray-300 p-[clamp(8px,1vw,12px)] h-[clamp(40px,4vh,48px)] text-[clamp(12px,1.5vw,14px)]">
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
