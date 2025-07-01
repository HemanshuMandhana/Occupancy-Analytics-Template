import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { useLocation, useNavigate } from 'react-router-dom';

const navigationItems = [{
  iconPath: '/Navigation bar icons/Dashboard icon.svg',
  label: 'Dashboard',
  href: '/dashboard'
}, {
  iconPath: '/Navigation bar icons/Comparision Dashboard icon.svg',
  label: 'Comparison Dashboard',
  href: '/comparison'
}, {
  iconPath: '/Navigation bar icons/Occupancy trend icon.svg',
  label: 'Occupancy Trend',
  href: '/occupancy-trend'
}, {
  iconPath: '/Navigation bar icons/Occupancy Comparision icon.svg',
  label: 'Occupancy Comparison',
  href: '/occupancy-comparison'
}, {
  iconPath: '/Navigation bar icons/Visitor count icon.svg',
  label: 'Visitor Count',
  href: '/visitor-count'
}, {
  iconPath: '/Navigation bar icons/Visitor Comparision icon.svg',
  label: 'Visitor Comparison',
  href: '/visitor-comparison'
}, {
  iconPath: '/Navigation bar icons/Data reports icon.svg',
  label: 'Data Reports',
  href: '/data-reports'
}, {
  iconPath: '/Navigation bar icons/Capacity Master icon.svg',
  label: 'Capacity Master',
  href: '/capacity-master'
}, {
  iconPath: '/Navigation bar icons/Email report config icon.svg',
  label: 'Email Report Config',
  href: '/email-config'
}, {
  iconPath: '/Navigation bar icons/login history icon.svg',
  label: 'Login History',
  href: '/login-history'
}, {
  iconPath: '/Navigation bar icons/My account icon.svg',
  label: 'My Account',
  href: '/my-account'
}, {
  iconPath: '/Navigation bar icons/User Master icon.svg',
  label: 'User Master',
  href: '/user-master'
}];

export const AppSidebar: React.FC = () => {
  const { state, open, toggleSidebar } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const isCollapsed = state === 'collapsed';
  
  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Determine when to show expanded content
  // Desktop: show expanded when not collapsed OR when collapsed but hovering
  // Mobile: show expanded when sidebar is open
  const shouldShowExpanded = isMobile ? open : (!isCollapsed || (isCollapsed && isHovering));

  const handleLogout = () => {
    navigate('/login');
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovering(false);
    }
  };

  return (
    <Sidebar 
      className="border-r border-gray-200" 
      style={{
        backgroundImage: 'url(/lovable-uploads/297ff5e8-c4e2-4da7-a6e5-38fadaf47c24.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        width: shouldShowExpanded ? '280px' : '60px',
        transition: 'width 0.2s ease-in-out',
        zIndex: isHovering ? 50 : 'auto'
      }}
      collapsible="icon"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SidebarContent className="bg-[rgba(246,247,255,0.95)] flex flex-col h-full">
        {/* Logo - Aligned with header height */}
        <div className={`flex-shrink-0 flex ${shouldShowExpanded ? 'justify-start px-4' : 'justify-center px-2'} transition-all duration-200`} 
             style={{ height: '60px', alignItems: 'center' }}>
          {shouldShowExpanded ? (
            <img 
              alt="Company logo" 
              className="w-[140px] lg:w-[187px] h-auto object-contain" 
              src="/lovable-uploads/company-logo.png"
            />
          ) : (
            <img 
              alt="Company logo icon" 
              className="h-8 w-8 object-contain" 
              src="/lovable-uploads/logo-icon.png" 
            />
          )}
        </div>

        {/* Navigation Menu - Aligned with DateControls */}
        <SidebarGroup className="mx-0 my-0 py-0 px-3 flex-1 flex flex-col" 
                     style={{ paddingTop: '12px' }}>
          <SidebarGroupContent className="flex-1">
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton 
                      asChild 
                      className={`w-full transition-all duration-200 ${
                        isActive 
                          ? 'bg-[rgba(37,56,120,1)] text-white hover:bg-[rgba(37,56,120,0.9)]' 
                          : 'hover:bg-gray-100 text-gray-700'
                      } ${shouldShowExpanded ? 'px-4 justify-start min-h-[48px]' : 'px-3 justify-center min-h-[48px]'} rounded-lg`}
                      tooltip={!shouldShowExpanded ? item.label : undefined}
                    >
                      <a href={item.href} className="flex items-center gap-3 w-full">
                        <img 
                          src={item.iconPath} 
                          alt={item.label}
                          className={`w-5 h-5 object-contain flex-shrink-0 ${isActive ? 'filter brightness-0 invert' : ''}`}
                        />
                        {shouldShowExpanded && (
                          <span className={`text-[15px] font-medium whitespace-nowrap transition-opacity duration-200 ${
                            isActive ? 'text-white' : 'text-gray-700'
                          }`}>
                            {item.label}
                          </span>
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              
              {/* Logout item */}
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={handleLogout}
                  className={`w-full hover:bg-gray-100 text-gray-700 ${
                    shouldShowExpanded ? 'px-4 justify-start min-h-[48px]' : 'px-3 justify-center min-h-[48px]'
                  } rounded-lg transition-all duration-200 cursor-pointer`}
                  tooltip={!shouldShowExpanded ? "Log out" : undefined}
                >
                  <div className="flex items-center gap-3 w-full">
                    <img 
                      src="/Navigation bar icons/Log out icon.svg" 
                      alt="Log out"
                      className="w-5 h-5 object-contain flex-shrink-0"
                    />
                    {shouldShowExpanded && (
                      <span className={`text-[15px] font-medium whitespace-nowrap text-gray-700 transition-opacity duration-200`}>
                        Log out
                      </span>
                    )}
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};