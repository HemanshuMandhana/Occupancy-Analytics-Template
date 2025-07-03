
import React, { useState } from 'react';
import { DateControls } from '../components/dashboard/DateControls';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Download, RotateCcw } from 'lucide-react';
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
    <div className="min-h-full">
      <DateControls />
      
      <div 
        className="px-4 lg:px-6 pb-4 space-y-6"
        style={{ paddingTop: 'clamp(24px, 3.5vh, 56px)' }}
      >
        {/* Filter Section */}
        <div className="bg-[rgba(48,66,127,1)] rounded-xl p-6 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white/40 rounded"></div>
            </div>
            <h1 className="text-2xl font-semibold">Select Report Filter</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <Label htmlFor="building" className="text-white mb-2 block">Building Name</Label>
              <Input
                id="building"
                value={buildingName}
                onChange={(e) => setBuildingName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            
            <div>
              <Label htmlFor="zone" className="text-white mb-2 block">Zone</Label>
              <Input
                id="zone"
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            
            <div>
              <Label htmlFor="entrance" className="text-white mb-2 block">Entrance</Label>
              <Input
                id="entrance"
                value={entrance}
                onChange={(e) => setEntrance(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label className="text-white mb-2 block">From Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20",
                      !fromDate && "text-white/60"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
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
              <Label className="text-white mb-2 block">To Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20",
                      !toDate && "text-white/60"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
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

          <div className="flex justify-end gap-4">
            <Button 
              onClick={handleReset}
              variant="outline"
              className="bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button 
              onClick={handleView}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              View
            </Button>
          </div>
        </div>

        {/* Report Results Section */}
        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-[rgba(48,66,127,1)] mb-1">Data Report</h2>
              <p className="text-gray-600">
                Data: {fromDate ? format(fromDate, "dd/MM/yyyy") : "10/02/2025"} to {toDate ? format(toDate, "dd/MM/yyyy") : "18/02/2025"}
              </p>
            </div>
            <Button 
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[rgba(48,66,127,1)] text-white">
                  <th className="border border-gray-300 p-3 text-left">Building</th>
                  <th className="border border-gray-300 p-3 text-left">Zone</th>
                  <th className="border border-gray-300 p-3 text-left">From date</th>
                  <th className="border border-gray-300 p-3 text-left">To date</th>
                  <th className="border border-gray-300 p-3 text-left">In count</th>
                  <th className="border border-gray-300 p-3 text-left">Out count</th>
                  <th className="border border-gray-300 p-3 text-left">Occupancy</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty rows to match the design */}
                {Array.from({ length: 8 }).map((_, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="border border-gray-300 p-3 h-12"></td>
                    <td className="border border-gray-300 p-3"></td>
                    <td className="border border-gray-300 p-3"></td>
                    <td className="border border-gray-300 p-3"></td>
                    <td className="border border-gray-300 p-3"></td>
                    <td className="border border-gray-300 p-3"></td>
                    <td className="border border-gray-300 p-3"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataReports;
