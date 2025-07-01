
import React from 'react';
import { OccupancyCard } from '../components/dashboard/OccupancyCard';
import { VisitorCard } from '../components/dashboard/VisitorCard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { HeatMapCard } from '../components/dashboard/HeatMapCard';
import { DateControls } from '../components/dashboard/DateControls';
import { ResponsiveDashboardCard } from '../components/dashboard/ResponsiveDashboardCard';

const Index: React.FC = () => {
  return (
    <div 
      className="h-screen overflow-hidden"
      style={{ 
        backgroundImage: 'url(/lovable-uploads/0b9933c1-1a2b-48be-a2dd-99bc9eee0647.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <DateControls />
      
      {/* Main content container with proper spacing */}
      <div 
        className="px-4 lg:px-6 overflow-hidden"
        style={{ 
          height: 'calc(100vh - clamp(60px, 8vh, 78.5px))',
          paddingTop: 'clamp(16px, 2vh, 24px)',
          paddingBottom: 'clamp(16px, 2vh, 24px)'
        }}
      >
        {/* Container for both rows */}
        <div className="h-full flex flex-col gap-4 lg:gap-6">
          {/* Top row - Primary metrics */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 items-center justify-items-center">
            <ResponsiveDashboardCard title="Building Occupancy">
              <OccupancyCard />
            </ResponsiveDashboardCard>
            <ResponsiveDashboardCard title="Total Visitor Count">
              <VisitorCard />
            </ResponsiveDashboardCard>
            <ResponsiveDashboardCard title="Zone Occupancy Day">
              <ChartCard title="Zone Occupancy Day" />
            </ResponsiveDashboardCard>
          </div>

          {/* Bottom row - Heatmaps and charts */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 items-center justify-items-center">
            <ResponsiveDashboardCard title="Visitors by Zone">
              <HeatMapCard
                title="Visitors by Zone"
                subtitle="Heat Map"
                imageUrl="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/1723715243527142b497157a3804e60b44a74ed5"
                showDropdown={true}
              />
            </ResponsiveDashboardCard>
            <ResponsiveDashboardCard title="Visitors by Zone">
              <HeatMapCard
                title="Visitors by Zone"
                subtitle="Heat Map"
                imageUrl="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/970f6635900e4a9f806bcb4025cddd419ccee06b"
              />
            </ResponsiveDashboardCard>
            <ResponsiveDashboardCard title="Zone Pick Occupancy Day">
              <ChartCard title="Zone Pick Occupancy Day" />
            </ResponsiveDashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
