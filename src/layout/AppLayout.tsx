
import React from 'react';
import AppSidebar from './AppSidebar';
import Backdrop from './Backdrop';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';
import { Outlet } from 'react-router-dom';
import { UniversalHeader } from '../components/dashboard/UniversalHeader';

const AppLayoutContent: React.FC = () => {
  const { isExpanded } = useSidebar();
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
      return '0px';
    }
    
    if (isExpanded) {
      const expandedWidth = Math.max(250, Math.min(windowWidth * 0.25, 280));
      return `${expandedWidth}px`;
    } else {
      const collapsedWidth = Math.max(50, Math.min(windowWidth * 0.06, 60));
      return `${collapsedWidth}px`;
    }
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
        {/* Main content region with viewport-based proportional sizing */}
        <main 
          className="flex-1 bg-white/80 backdrop-blur-sm relative overflow-hidden"
          style={{ 
            height: `calc(100vh - 8vh)`,
            marginTop: `8vh`,
          }}
        >
          <div className="w-full h-full overflow-y-auto">
            <Outlet />
          </div>
        </main>
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
