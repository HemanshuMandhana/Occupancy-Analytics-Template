
import React from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { UniversalHeader } from '../components/dashboard/UniversalHeader';
import { DateControls } from '../components/dashboard/DateControls';
import { DownloadButton } from '../components/dashboard/DownloadButton';
import { ComparisonCard } from '../components/dashboard/ComparisonCard';

const Comparison: React.FC = () => {
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
            <UniversalHeader />
            
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
                {/* Top row - Comparison tables */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ComparisonCard 
                    title="Zone Occupancy Day- Last week Comparison"
                    subtitle="Total Building Occupancy"
                    value="62"
                    tableType="occupancy"
                  />
                  <ComparisonCard 
                    title="Zone Visitor Count- Last week Comparison"
                    subtitle="Total Building Visitor count"
                    value="693"
                    tableType="visitor"
                  />
                </div>
                
                {/* Bottom row - Comparison charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ComparisonCard 
                    title="Zone Occupancy Day Last week Comparison"
                    chartType="occupancy"
                  />
                  <ComparisonCard 
                    title="Zone Visitor Count Week"
                    chartType="visitor"
                  />
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Comparison;
