
import React from 'react';
import { Header } from '../components/dashboard/Header';
import { Sidebar } from '../components/dashboard/Sidebar';
import { OccupancyCard } from '../components/dashboard/OccupancyCard';
import { VisitorCard } from '../components/dashboard/VisitorCard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { HeatMapCard } from '../components/dashboard/HeatMapCard';
import { DateControls } from '../components/dashboard/DateControls';
import { DownloadButton } from '../components/dashboard/DownloadButton';

const Index: React.FC = () => {
  return (
    <div className="bg-white relative flex flex-col overflow-hidden min-h-screen">
      {/* Background image with responsive sizing */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/ff90ab59117214d8de00b316a1fcbf6b05e0921c?placeholderIfAbsent=true"
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Background"
      />
      
      <Header />
      <Sidebar />
      
      {/* Controls container with responsive positioning */}
      <div className="absolute top-[98px] left-4 right-4 z-10 flex justify-between items-center">
        <DateControls />
        <DownloadButton />
      </div>
      
      {/* Main content with responsive layout */}
      <main className="relative z-10 flex-1 px-4 lg:px-8 xl:px-16 pt-[180px] pb-8" role="main">
        <div className="max-w-[1600px] mx-auto">
          {/* Primary dashboard metrics */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12" aria-label="Primary dashboard metrics">
            <OccupancyCard />
            <VisitorCard />
            <ChartCard title="Zone Occupancy Day" />
          </section>
          
          {/* Secondary dashboard visualizations */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8" aria-label="Secondary dashboard visualizations">
            <HeatMapCard 
              title="Visitors by Zone" 
              subtitle="Heat Map" 
              imageUrl="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/1723715243527142b497157a3804e60b44a74ed5?placeholderIfAbsent=true" 
              showDropdown={true}
            />
            <HeatMapCard 
              title="Visitors by Zone" 
              subtitle="Heat Map" 
              imageUrl="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/970f6635900e4a9f806bcb4025cddd419ccee06b?placeholderIfAbsent=true" 
            />
            
            {/* Zone Pick Occupancy Chart */}
            <article className="bg-[rgba(247,248,255,1)] border relative min-h-[389px] overflow-hidden rounded-xl border-[rgba(37,57,120,1)] border-solid p-6">
              <div className="flex items-center gap-6 lg:gap-10 text-[24px] lg:text-[28px] text-[rgba(46,75,181,1)] font-semibold mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/6a15dfc1acfec599c63800bc341baec4f6888819?placeholderIfAbsent=true"
                  className="w-16 h-16 lg:w-[85px] lg:h-[85px] object-contain rounded-[677px] flex-shrink-0"
                  alt="Zone occupancy icon"
                />
                <h2 className="flex-1">
                  Zone Pick Occupancy <br />
                  Day
                </h2>
              </div>
              
              <div className="border flex flex-col lg:flex-row gap-4 lg:gap-[29px] p-4 lg:pl-[15px] lg:pr-10 lg:py-[19px] rounded-[11px] border-[rgba(229,231,231,1)] border-solid">
                {/* Y-axis labels */}
                <div className="hidden lg:flex flex-col text-[11px] text-black font-medium justify-between h-[200px] mt-12">
                  <div>80</div>
                  <div>60</div>
                  <div>40</div>
                  <div>20</div>
                  <div>0</div>
                </div>
                
                {/* Chart content */}
                <div className="flex-1">
                  {/* Legend */}
                  <div className="flex gap-4 text-[11px] text-[rgba(153,153,153,1)] font-semibold mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-[15px] h-[15px] bg-[rgba(66,103,177,1)] rounded" />
                      <span>Occupied</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[15px] h-[15px] bg-[rgba(247,248,255,1)] border border-black rounded" />
                      <span>Vacant</span>
                    </div>
                  </div>
                  
                  {/* Chart visualization */}
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/902be517edf9de5b3e1146f82c456bc12c32a018?placeholderIfAbsent=true"
                    className="w-full h-auto mb-4"
                    alt="Zone pick occupancy chart"
                  />
                  
                  {/* X-axis labels */}
                  <div className="flex justify-between items-end text-[11px] text-black font-semibold">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((month, index) => (
                      <div key={month} className="flex flex-col items-center">
                        {index === 3 && (
                          <div className="relative bg-gray-100 rounded p-2 mb-2 text-[10px] text-[rgba(233,233,233,1)]">
                            <div className="flex items-center gap-1 mb-1">
                              <div className="w-2 h-2 bg-[rgba(66,103,177,1)] rounded-sm" />
                              <span>55</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-[rgba(247,248,255,1)] rounded-sm" />
                              <span>32</span>
                            </div>
                          </div>
                        )}
                        <div className="text-center">{month}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
