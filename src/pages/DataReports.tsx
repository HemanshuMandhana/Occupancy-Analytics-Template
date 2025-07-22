import React, { useState , useRef } from 'react';
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
              onReset={handleReset}
              onView={handleView}
            />
            
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