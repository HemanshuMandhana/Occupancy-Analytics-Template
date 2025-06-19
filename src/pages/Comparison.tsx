import React from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Header } from '../components/dashboard/Header';
import { DateControls } from '../components/dashboard/DateControls';
import { DownloadButton } from '../components/dashboard/DownloadButton';
import { ComparisonCard } from '../components/dashboard/ComparisonCard';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

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
      <SidebarProvider defaultOpen={true}>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          
          <SidebarInset className="flex-1">
            <div className="bg-[rgba(246,247,255,1)] relative z-20 w-full px-4 lg:px-6 py-2">
              <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-black text-xl lg:text-2xl font-semibold">
                    Comparison Dashboard
                  </h1>
                </div>
                
                <div className="flex items-center gap-4 lg:gap-8">
                  <nav className="flex items-center gap-4 lg:gap-8 text-[15px] lg:text-[17px] text-white tracking-[-0.34px]" role="navigation" aria-label="Main navigation">
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="min-w-[140px] lg:min-w-[175px]">
                          <button className="bg-[rgba(37,56,120,1)] flex w-full min-h-[35px] lg:min-h-[40px] items-center gap-2 justify-center px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg hover:bg-[rgba(37,56,120,0.9)] transition-colors">
                            <span className="text-sm lg:text-base">Roddenberry</span>
                            <img src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/655c8d2c001cf6f09886b560e12f33f9b4fb711d?placeholderIfAbsent=true" className="w-2 lg:w-2.5 h-1.5 lg:h-2 object-contain" alt="Dropdown arrow" />
                          </button>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-lg rounded-md min-w-[150px] z-50 mt-2">
                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 px-3 py-2">
                          My Account
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 px-3 py-2">
                          Log Out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <button className="w-6 lg:w-8 h-6 lg:h-8 hover:opacity-80 transition-opacity" aria-label="Notifications">
                      <img src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/f82ff2484e49bab324ee78810babfccfcda753e1?placeholderIfAbsent=true" className="w-full h-full object-contain" alt="Notifications" />
                    </button>
                    
                    <button className="hover:opacity-80 transition-opacity">
                      <img src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/b783be09b001491dff561ee2e4a30c55b5004d93?placeholderIfAbsent=true" className="w-[140px] lg:w-[187px] h-auto object-contain" alt="User profile" />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
            
            {/* Controls section */}
            <div className="px-6 py-2 bg-white/90 backdrop-blur-sm border-b">
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
