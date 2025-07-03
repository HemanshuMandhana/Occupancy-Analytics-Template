
import React from 'react';
import { OccupancyCard } from '../components/dashboard/OccupancyCard';
import { VisitorCard } from '../components/dashboard/VisitorCard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { HeatMapCard } from '../components/dashboard/HeatMapCard';
import { DateControls } from '../components/dashboard/DateControls';

const Index: React.FC = () => {
  return (
    <div 
      className="h-full flex flex-col" 
      style={{ 
        backgroundImage: 'url(/lovable-uploads/0b9933c1-1a2b-48be-a2dd-99bc9eee0647.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <DateControls />
      
      {/* Content with proportional viewport-based spacing */}
      <div 
        className="flex-1 overflow-y-auto"
        style={{ 
          padding: '1.2vh 1.5vw',
          minHeight: '0'
        }}
      >
        <div 
          className="h-full flex flex-col"
          style={{ 
            gap: '1.2vh'
          }}
        >
          {/* Top row - Equal sized cards using exact proportions */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-3 flex-1"
            style={{ 
              gap: '1.2vw',
              minHeight: '0'
            }}
          >
            <OccupancyCard />
            <VisitorCard />
            <ChartCard title="Zone Occupancy Day" />
          </div>

          {/* Bottom row - Equal sized cards using exact proportions */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-3 flex-1"
            style={{ 
              gap: '1.2vw',
              minHeight: '0'
            }}
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
    </div>
  );
};

export default Index;
