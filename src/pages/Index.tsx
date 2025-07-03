
import React from 'react';
import { OccupancyCard } from '../components/dashboard/OccupancyCard';
import { VisitorCard } from '../components/dashboard/VisitorCard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { HeatMapCard } from '../components/dashboard/HeatMapCard';
import { DateControls } from '../components/dashboard/DateControls';

const Index: React.FC = () => {
  return (
    <div className="min-h-full">
      <DateControls />
      
      {/* Content with responsive scaling */}
      <div 
        className="space-y-[clamp(16px,2.5vh,32px)]"
        style={{ 
          paddingTop: 'clamp(16px, 3vh, 40px)',
          paddingLeft: 'clamp(16px, 2.5vw, 32px)',
          paddingRight: 'clamp(16px, 2.5vw, 32px)',
          paddingBottom: 'clamp(16px, 2vh, 24px)'
        }}
      >
        {/* Top row - Primary metrics */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          style={{ gap: 'clamp(16px, 2.5vw, 32px)' }}
        >
          <OccupancyCard />
          <VisitorCard />
          <ChartCard title="Zone Occupancy Day" />
        </div>

        {/* Bottom row - Heatmaps and charts */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          style={{ gap: 'clamp(16px, 2.5vw, 32px)' }}
        >
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
