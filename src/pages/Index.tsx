
import React from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Header } from '../components/dashboard/Header';
import { OccupancyCard } from '../components/dashboard/OccupancyCard';
import { VisitorCard } from '../components/dashboard/VisitorCard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { HeatMapCard } from '../components/dashboard/HeatMapCard';
import { DateControls } from '../components/dashboard/DateControls';
import { DownloadButton } from '../components/dashboard/DownloadButton';

const Index: React.FC = () => {
  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundImage: 'url(/lovable-uploads/0b9933c1-1a2b-48be-a2dd-99bc9eee0647.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <SidebarProvider defaultOpen={false}>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          
          <SidebarInset className="flex-1">
            <Header />
            
            {/* Controls section */}
            <div className="px-6 py-1 bg-white/90 backdrop-blur-sm border-b">
              <div className="flex justify-between items-center">
                <DateControls />
                <DownloadButton />
              </div>
            </div>
            
            {/* Main content */}
            <main className="flex-1 p-6 bg-white/80 backdrop-blur-sm" role="main">
              <div className="max-w-[1600px] mx-auto space-y-6">
                {/* Top row - Primary metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  <OccupancyCard />
                  <VisitorCard />
                  <ChartCard title="Zone Occupancy Day" />
                </div>
                
                {/* Bottom row - Heat maps and zone pick chart */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
                  <ChartCard title="Zone Pick Occupancy Day" />
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
