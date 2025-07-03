
import React from 'react';
import { OccupancyCard } from '../components/dashboard/OccupancyCard';
import { VisitorCard } from '../components/dashboard/VisitorCard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { HeatMapCard } from '../components/dashboard/HeatMapCard';
import { DateControls } from '../components/dashboard/DateControls';

const Index: React.FC = () => {
  return (
    <div 
      className="min-h-full" 
      style={{ 
        backgroundImage: 'url(/lovable-uploads/0b9933c1-1a2b-48be-a2dd-99bc9eee0647.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <DateControls />
      
      {/* Content with minimal padding and spacing */}
      <div className="px-4 lg:px-6 pb-4 space-y-4 lg:space-y-6">
        {/* Top row - Primary metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          <OccupancyCard />
          <VisitorCard />
          <ChartCard title="Zone Occupancy Day" />
        </div>

        {/* Bottom row - Heatmaps and charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          <HeatMapCard
            title="Visitors by Zone"
            subtitle="Heat Map"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/1723715243527142b497157a3804e60b44a74ed5"
            showDropdown={true}
          />
          <HeatMapCard
            title="Visitors by Zone"
            subtitle="Heat Map"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/970f6635900e4a9f806bcb4025cddd419ccee06b"
          />
          <ChartCard title="Zone Pick Occupancy Day" />
        </div>
      </div>
    </div>
  );
};

export default Index;
