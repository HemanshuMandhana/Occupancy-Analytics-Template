import React, { useState , useRef } from 'react';
import { Button } from '@/components/ui/button';
import { FilterSection } from '../components/report-components/FilterSection';
import ReportTable from '../components/report-components/ReportTable';

const DataReports: React.FC = () => {
  const [buildingName, setBuildingName] = useState('Roddenberry');
    const [zone, setZone] = useState('');
    const [entrance, setEntrance] = useState('All');
    const [fromDate, setFromDate] = useState<Date>(new Date(2025, 1, 10));
    const [toDate, setToDate] = useState<Date>(new Date(2025, 1, 18));
    const [showReport, setShowReport] = useState(false);
    const filterSectionRef = useRef<{ collapseFilter: () => void }>(null);
  
    const handleReset = () => {
      setBuildingName('Roddenberry');
      setZone('');
      setEntrance('All');
      setFromDate(new Date(2025, 1, 10));
      setToDate(new Date(2025, 1, 18));
      setShowReport(false); // Hide report on reset
    };
  
    const handleView = () => {
      console.log('Viewing report with filters:', {
        buildingName,
        zone,
        entrance,
        fromDate,
        toDate
      });
      setShowReport(true); // Show report when view is clicked
      
      // Collapse the filter section
      if (filterSectionRef.current) {
        filterSectionRef.current.collapseFilter();
      }
    };
    const handleDownload = () => {
      console.log('Downloading report...');
    };
  
    return (
      <div className="h-full flex flex-col">
        {/* Main content container that fills available space */}
        <div className="flex-1 flex flex-col px-[1.9vw] pt-[5.556vh] min-h-0">
          {/* Main section with flexible layout */}
          <div className="relative bg-[#F7F8FF] flex-1 flex flex-col p-[1.5vw] min-h-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-center bg-cover opacity-45 pointer-events-none"
              style={{
                backgroundImage: "url('/images/cropped bg image.svg')"
              }}
            />
  
            {/* Filter Section Component */}
            <FilterSection
              ref={filterSectionRef}
              buildingName={buildingName}
              setBuildingName={setBuildingName}
              zone={zone}
              setZone={setZone}
              entrance={entrance}
              setEntrance={setEntrance}
              fromDate={fromDate}
              setFromDate={setFromDate}
              toDate={toDate}
              setToDate={setToDate}
            />
            
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
            
            {/* Horizontal Line - Only show when report is visible */}
            {showReport && (
              <div className="w-full h-0 border-t border-[#4248AC] mt-[2vh] flex-shrink-0" />
            )}
            
            {/* Report Table Component - Only show when report is visible */}
            {showReport && (
              <ReportTable
                buildingName={buildingName}
                zone={zone}
                entrance={entrance}
                fromDate={fromDate}
                toDate={toDate}
                onDownload={handleDownload}
              />
            )}
          </div>
        </div>
      </div>
    );
};

export default DataReports;