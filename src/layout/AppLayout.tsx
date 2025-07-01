import React from 'react';
import AppSidebar from './AppSidebar';
import Backdrop from './Backdrop';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';
import { Outlet } from 'react-router-dom';
import { UniversalHeader } from '../components/dashboard/UniversalHeader';

const AppLayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  // Track window resize for responsive behavior
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate margin based on current window size and sidebar state
  const getContentMargin = () => {
    const isDesktop = windowWidth >= 1024;
    
    if (!isDesktop) {
      // Mobile: no margin, content fills full width
      return '0px';
    }
    
    // Desktop: only apply margin based on expanded state, not hover
    return isExpanded ? '280px' : '60px';
  };

  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <Backdrop />
      <div 
        className="flex-1 flex flex-col transition-all duration-300"
        style={{
          marginLeft: getContentMargin()
        }}
      >
        <UniversalHeader />
        {/* Changed overflow-auto to overflow-hidden and added proper height calculation */}
        <div className="flex-1 pt-[78.5px] overflow-hidden">
          <main 
            className="bg-white/80 backdrop-blur-sm h-full overflow-y-auto"
            style={{ height: 'calc(100vh - 78.5px)' }}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <AppLayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;