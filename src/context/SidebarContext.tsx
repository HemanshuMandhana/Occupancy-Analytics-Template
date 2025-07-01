import React, { createContext, useContext, useState, useEffect } from 'react';

interface SidebarContextProps {
  isExpanded: boolean;
  isMobileOpen: boolean;
  isHovered: boolean;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  setIsHovered: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(() => {
    // Check if we're in browser environment and get initial state
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('sidebar:state');
      return stored ? stored === 'true' : window.innerWidth >= 1024;
    }
    return true;
  });
  
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebar = () => setIsExpanded(prev => !prev);
  const toggleMobileSidebar = () => setIsMobileOpen(prev => !prev);

  // Handle window resize - improved responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      
      if (!isDesktop) {
        // On mobile/tablet: close mobile sidebar and reset hover
        setIsMobileOpen(false);
        setIsHovered(false);
      } else {
        // On desktop: ensure proper sidebar state
        const stored = localStorage.getItem('sidebar:state');
        if (stored) {
          setIsExpanded(stored === 'true');
        }
      }
    };

    // Debounce resize handler to avoid excessive calls
    let timeoutId: NodeJS.Timeout;
    const debouncedHandleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Save sidebar state to localStorage (only for desktop)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      localStorage.setItem('sidebar:state', isExpanded.toString());
    }
  }, [isExpanded]);

  // Close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileOpen && window.innerWidth < 1024) {
        const target = event.target as Element;
        const sidebar = document.querySelector('aside');
        const menuButton = document.querySelector('[data-sidebar-trigger]');
        
        if (sidebar && !sidebar.contains(target) && !menuButton?.contains(target)) {
          setIsMobileOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen]);

  return (
    <SidebarContext.Provider
      value={{ 
        isExpanded, 
        isMobileOpen, 
        isHovered, 
        toggleSidebar, 
        toggleMobileSidebar, 
        setIsHovered 
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider');
  }
  return context;
};