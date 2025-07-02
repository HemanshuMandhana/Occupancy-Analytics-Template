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
      // Mobile: no margin, content fills full width
      return '0px';
    }
    
    // Desktop: use responsive sidebar widths
    if (isExpanded) {
      // Expanded sidebar width: clamp(250px, 25vw, 280px)
      const expandedWidth = Math.max(250, Math.min(windowWidth * 0.25, 280));
      return `${expandedWidth}px`;
    } else {
      // Collapsed sidebar width: clamp(50px, 6vw, 60px)
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
        {/* Use dynamic header height for proper calculation */}
        <div style={{ paddingTop: 'clamp(60px, 8vh, 78.5px)' }} className="flex-1 overflow-hidden">
          <main 
            className="bg-white/80 backdrop-blur-sm h-full overflow-y-auto"
            style={{ height: 'calc(100vh - clamp(60px, 8vh, 78.5px))' }}
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