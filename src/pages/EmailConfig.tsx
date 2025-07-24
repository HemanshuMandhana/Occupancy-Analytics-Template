import React, { useState } from 'react';

const EmailConfig: React.FC = () => {
  const [enableEmailReports, setEnableEmailReports] = useState(true);
  const [selectedReports, setSelectedReports] = useState({
    dashboardSummary: false,
    occupancyTrend: false,
    visitorCount: true
  });
  const [reportTimes, setReportTimes] = useState([
    { id: 1, enabled: true, hour: '01', minute: '00', period: 'AM' },
    { id: 2, enabled: true, hour: '01', minute: '00', period: 'AM' },
    { id: 3, enabled: true, hour: '01', minute: '00', period: 'AM' }
  ]);

  const handleReportChange = (reportKey: string) => {
    setSelectedReports(prev => ({
      ...prev,
      [reportKey]: !prev[reportKey]
    }));
  };

  const handleTimeChange = (id: number, field: string, value: string) => {
    setReportTimes(prev =>
      prev.map(time =>
        time.id === id ? { ...time, [field]: value } : time
      )
    );
  };

  const toggleTimeEnabled = (id: number) => {
    setReportTimes(prev =>
      prev.map(time =>
        time.id === id ? { ...time, enabled: !time.enabled } : time
      )
    );
  };

  return (
    <div className="h-full flex flex-col" style={{ fontFamily: 'Gilroy, sans-serif' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          .custom-select::-webkit-scrollbar {
            display: none;
          }
          .custom-select {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .custom-select option:hover {
            background-color: #f3f4f6 !important;
          }
          .custom-select option:checked {
            background-color: #e5e7eb !important;
          }
        `
      }} />
      <div className="pt-[1.389vh] px-[1.875vw] flex-1">
        {/* Main Section - Takes remaining space */}
        <div className="relative flex-1 bg-[#F7F8FF] pt-[2.22vh] h-full overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover opacity-45 pointer-events-none"
            style={{
              backgroundImage: "url('/images/cropped bg image.svg')"
            }}
          />
          
          {/* Enable Email Reports Toggle - Positioned at top right */}
          <div className="absolute top-[2.22vh] right-[1.25vw] z-10">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={enableEmailReports}
                onChange={(e) => setEnableEmailReports(e.target.checked)}
                className="w-[3.5vw] sm:w-[3.0vw] md:w-[2.5vw] lg:w-[1.5vw] h-[3.5vw] sm:h-[3.0vw] md:h-[2.5vw] lg:h-[1.5vw] aspect-square text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="text-gray-700 font-medium text-[4vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw]">Enable Email Reports</span>
            </label>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 h-full mx-[1.25vw] pb-[6.72vh] pt-[8vh]">
            
            {/* Select Reports Section */}
            <div className="bg-[#253878] rounded-2xl text-white px-[1.25vw] py-[3.65vh]">
              <h3 className="text-white font-semibold text-[5vw] sm:text-[4.5vw] md:text-[3.5vw] lg:text-[2.04vw] h-[4.35vh] leading-[4.35vh] mb-[3.13vh]">
                Select Reports
              </h3>
              <div className="space-y-[2.66vh]">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative inline-flex items-center w-[3.5vw] sm:w-[3.0vw] md:w-[2.5vw] lg:w-[1.5vw] h-[3.5vw] sm:h-[3.0vw] md:h-[2.5vw] lg:h-[1.5vw] aspect-square">
                    <input
                      type="checkbox"
                      checked={selectedReports.dashboardSummary}
                      onChange={() => handleReportChange('dashboardSummary')}
                      className="peer appearance-none w-full h-full bg-white/10 checked:bg-[#F5A728] border border-white/20 rounded-sm"
                    />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-[4.5vw] sm:text-[3.8vw] md:text-[2.8vw] lg:text-[1.65vw]">Dashboard Summary Report</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative inline-flex items-center w-[3.5vw] sm:w-[3.0vw] md:w-[2.5vw] lg:w-[1.5vw] h-[3.5vw] sm:h-[3.0vw] md:h-[2.5vw] lg:h-[1.5vw] aspect-square">
                    <input
                      type="checkbox"
                      checked={selectedReports.occupancyTrend}
                      onChange={() => handleReportChange('occupancyTrend')}
                      className="peer appearance-none w-full h-full bg-white/10 checked:bg-[#F5A728] border border-white/20 rounded-sm"
                    />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-[4.5vw] sm:text-[3.8vw] md:text-[2.8vw] lg:text-[1.65vw]">Occupancy Trend Report</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative inline-flex items-center w-[3.5vw] sm:w-[3.0vw] md:w-[2.5vw] lg:w-[1.5vw] h-[3.5vw] sm:h-[3.0vw] md:h-[2.5vw] lg:h-[1.5vw] aspect-square">
                    <input
                      type="checkbox"
                      checked={selectedReports.visitorCount}
                      onChange={() => handleReportChange('visitorCount')}
                      className="peer appearance-none w-full h-full bg-white/10 checked:bg-[#F5A728] border border-white/20 rounded-sm"
                    />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-[4.5vw] sm:text-[3.8vw] md:text-[2.8vw] lg:text-[1.65vw]">Visitor Count Comparison Report</span>
                </label>
              </div>
            </div>

            {/* Select Report Time Section */}
            <div className="bg-transparent text-black font-['Inter'] pl-[5.885vw]">
              <div className="flex flex-col h-full">
                {/* Header */}
                <h3 className="font-semibold text-gray-800 text-[5vw] sm:text-[4.5vw] md:text-[3.5vw] lg:text-[2.04vw] h-[4.35vh] leading-[4.35vh] mb-[3.13vh]">
                  Select Report Time
                </h3>

                {/* Time Configuration List */}
                <div className="flex-1 space-y-[2.66vh]">
                  {reportTimes.map((time, index) => (
                    <div key={time.id} className="flex items-center space-x-4">
                      <label className="flex items-center space-x-3 cursor-pointer min-w-[120px]">
                        <div className="relative inline-flex items-center w-[3.5vw] sm:w-[3.0vw] md:w-[2.5vw] lg:w-[1.5vw] h-[3.5vw] sm:h-[3.0vw] md:h-[2.5vw] lg:h-[1.5vw] aspect-square">
                          <input
                            type="checkbox"
                            checked={time.enabled}
                            onChange={() => toggleTimeEnabled(time.id)}
                            className="peer appearance-none w-full h-full bg-[#D9D9D9] checked:bg-[#F5A728] border border-gray-300 rounded-sm"
                          />
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="pointer-events-none absolute inset-0 m-auto w-[60%] h-[60%] hidden peer-checked:block"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-800 text-[4.5vw] sm:text-[3.8vw] md:text-[2.8vw] lg:text-[1.65vw]">
                          Time {time.id}
                        </span>
                      </label>
                      
                      <div className="flex items-center space-x-2">
                        <select
                          value={time.hour}
                          onChange={(e) => handleTimeChange(time.id, 'hour', e.target.value)}
                          className="custom-select w-[8vw] sm:w-[6vw] md:w-[4vw] lg:w-[3vw] h-[5.99vh] border border-gray-300 rounded text-center text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw] focus:outline-none disabled:bg-gray-100 disabled:text-gray-400 appearance-none cursor-pointer"
                          disabled={!time.enabled}
                          style={{
                            backgroundImage: 'none',
                            fontSize: 'inherit',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                          }}
                        >
                          {Array.from({ length: 12 }, (_, i) => {
                            const hour = String(i + 1).padStart(2, '0');
                            return (
                              <option 
                                key={hour} 
                                value={hour}
                                className="hover:bg-gray-100 selected:bg-gray-200 text-center"
                                style={{ fontSize: 'inherit' }}
                              >
                                {hour}
                              </option>
                            );
                          })}
                        </select>
                        
                        <select
                          value={time.minute}
                          onChange={(e) => handleTimeChange(time.id, 'minute', e.target.value)}
                          className="custom-select w-[8vw] sm:w-[6vw] md:w-[4vw] lg:w-[3vw] h-[5.99vh] px-1 py-1 border border-gray-300 rounded text-center text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw] focus:outline-none disabled:bg-gray-100 disabled:text-gray-400 appearance-none cursor-pointer max-h-[40vh] overflow-y-auto"
                          disabled={!time.enabled}
                          style={{
                            backgroundImage: 'none',
                            fontSize: 'inherit',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                          }}
                        >
                          {Array.from({ length: 60 }, (_, i) => {
                            const minute = String(i).padStart(2, '0');
                            return (
                              <option 
                                key={minute} 
                                value={minute}
                                className="hover:bg-gray-100 selected:bg-gray-200 text-center"
                                style={{ fontSize: 'inherit' }}
                              >
                                {minute}
                              </option>
                            );
                          })}
                        </select>
                        
                        <select
                          value={time.period}
                          onChange={(e) => handleTimeChange(time.id, 'period', e.target.value)}
                          className="custom-select w-[8vw] sm:w-[6vw] md:w-[4vw] lg:w-[3vw] h-[5.99vh] px-1 py-1 border border-gray-300 rounded text-center text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw] focus:outline-none disabled:bg-gray-100 disabled:text-gray-400 appearance-none cursor-pointer"
                          disabled={!time.enabled}
                          style={{
                            backgroundImage: 'none',
                            fontSize: 'inherit'
                          }}
                        >
                          <option 
                            value="AM"
                            className="hover:bg-gray-100 selected:bg-gray-200 text-center"
                            style={{ fontSize: 'inherit' }}
                          >
                            AM
                          </option>
                          <option 
                            value="PM"
                            className="hover:bg-gray-100 selected:bg-gray-200 text-center"
                            style={{ fontSize: 'inherit' }}
                          >
                            PM
                          </option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Save Settings Button at Bottom */}
                <div className="flex mt-auto pt-4 items-left justify-left">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-[1.5vh] px-[2vw] rounded-lg transition-colors duration-200 text-[3.5vw] sm:text-[3.0vw] md:text-[2.0vw] lg:text-[1.2vw]">
                    SAVE SETTINGS
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfig;