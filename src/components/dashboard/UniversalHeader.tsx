import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSidebar } from '@/context/SidebarContext';
import { PanelLeft } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const getPageTitle = (pathname: string): string => {
  const routes: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/comparison': 'Comparison Dashboard',
    '/occupancy-trend': 'Occupancy Trend',
    '/occupancy-comparison': 'Occupancy Comparison',
    '/visitor-count': 'Visitor Count',
    '/visitor-comparison': 'Visitor Comparison',
    '/data-reports': 'Data Reports',
    '/capacity-master': 'Capacity Master',
    '/email-config': 'Email Report Config',
    '/login-history': 'Login History',
    '/my-account': 'My Account',
    '/user-master': 'User Master'
  };
  return routes[pathname] || 'Dashboard';
};

export const UniversalHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  const { toggleSidebar, toggleMobileSidebar, isExpanded } = useSidebar();

  const handleLogout = () => navigate('/login');

  return (
    <header 
      className="bg-[rgba(246,247,255,1)] fixed top-0 z-40 border-transparent transition-all duration-300 left-0 right-0"
      style={{
        height: 'clamp(60px, 8vh, 78.5px)',
        // Only adjust margin based on expanded state, not hover
        marginLeft: typeof window !== 'undefined' && window.innerWidth >= 1024 ? 
          (isExpanded ? 'clamp(250px, 25vw, 280px)' : 'clamp(50px, 6vw, 60px)') : '0'
      }}
    >
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              if (window.innerWidth >= 1024) {
                toggleSidebar();
              } else {
                toggleMobileSidebar();
              }
            }}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <PanelLeft className="h-5 w-5" />
          </button>
          
          {/* Page Title - Left aligned for both desktop and mobile */}
          <h1 className="text-black font-semibold" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)' }}>
            {pageTitle}
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-6">
            {/* Building Name Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="min-w-[140px] lg:min-w-[175px] bg-[rgba(37,56,120,1)] text-white px-4 py-2 rounded-lg hover:bg-[rgba(37,56,120,0.9)] transition-colors flex items-center justify-center gap-2">
                  <span className="text-sm lg:text-base">Roddenberry</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/655c8d2c001cf6f09886b560e12f33f9b4fb711d?placeholderIfAbsent=true"
                    className="w-2 lg:w-2.5 h-1.5 lg:h-2 object-contain"
                    alt="Dropdown arrow"
                    style={{ minWidth: '8px', minHeight: '6px' }}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[rgba(246,247,255,1)] border border-gray-200 shadow-lg rounded-md mt-2 w-[140px] lg:w-[175px]">
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                  Roddenberry
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                  Building 213
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                  Zukor
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                  Bluhdorn
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Account Icon with Account Options */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-6 lg:w-8 h-6 lg:h-8 hover:opacity-80 transition-opacity flex-shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/f82ff2484e49bab324ee78810babfccfcda753e1?placeholderIfAbsent=true"
                    className="w-full h-full object-contain"
                    alt="Account"
                    style={{ minWidth: '24px', minHeight: '24px' }}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[rgba(246,247,255,1)] border border-gray-200 shadow-lg rounded-md mt-2">
                <DropdownMenuItem 
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2" 
                  onClick={() => navigate('/my-account')}
                >
                  My Account
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2" 
                  onClick={handleLogout}
                >
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/b783be09b001491dff561ee2e4a30c55b5004d93?placeholderIfAbsent=true"
                className="w-[140px] lg:w-[187px] h-auto object-contain"
                alt="Company logo"
                style={{ minWidth: '140px' }}
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex items-center gap-3">
            {/* Building Name Dropdown - Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="min-w-[120px] bg-[rgba(37,56,120,1)] text-white px-3 py-2 rounded-lg hover:bg-[rgba(37,56,120,0.9)] transition-colors flex items-center justify-center gap-2">
                  <span className="text-sm">Roddenberry</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/655c8d2c001cf6f09886b560e12f33f9b4fb711d?placeholderIfAbsent=true"
                    className="w-2 h-1.5 object-contain"
                    alt="Dropdown arrow"
                    style={{ minWidth: '8px', minHeight: '6px' }}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[rgba(246,247,255,1)] border border-gray-200 shadow-lg rounded-md mt-2 w-[120px]">
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                  Roddenberry
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                  Building 213
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                  Zukor
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                  Bluhdorn
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Account Icon with Account Options - Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-8 h-8 hover:opacity-80 transition-opacity flex-shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/f82ff2484e49bab324ee78810babfccfcda753e1?placeholderIfAbsent=true"
                    className="w-full h-full object-contain"
                    alt="Account"
                    style={{ minWidth: '32px', minHeight: '32px' }}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[rgba(246,247,255,1)] border border-gray-200 shadow-lg rounded-md mt-2">
                <DropdownMenuItem 
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2" 
                  onClick={() => navigate('/my-account')}
                >
                  My Account
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2" 
                  onClick={handleLogout}
                >
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <img
              src="/lovable-uploads/logo-icon.png"
              alt="Logo"
              className="h-8 w-8 object-contain flex-shrink-0"
              style={{ minWidth: '32px', minHeight: '32px' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

// Helper function for className concatenation
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}