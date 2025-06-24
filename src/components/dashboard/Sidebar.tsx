
import React from 'react';
import { LogOut } from 'lucide-react';
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
  const { state } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const isCollapsed = state === 'collapsed';

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Sidebar 
      className="border-r border-gray-200" 
      style={{
        backgroundImage: 'url(/lovable-uploads/297ff5e8-c4e2-4da7-a6e5-38fadaf47c24.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }}
      collapsible="icon"
    >
      <SidebarContent className="bg-[rgba(246,247,255,0.95)] pt-4 flex flex-col h-full">
        {/* Logo */}
        <div className="px-4 mb-6 flex-shrink-0 flex justify-center">
          {isCollapsed ? (
            <img 
              alt="Company logo icon" 
              className="h-6 w-6 object-contain" 
              src="/lovable-uploads/84d9499d-2461-49f9-bc7a-c21e8858962c.png" 
            />
          ) : (
            <img 
              alt="Company logo" 
              className="h-8 w-auto object-contain" 
              src="/lovable-uploads/4d506073-f826-4459-add9-950c3a757f5f.png" 
            />
          )}
        </div>

        {/* Navigation Menu */}
        <SidebarGroup className="mx-0 my-0 py-0 px-2 flex-1 flex flex-col">
          <SidebarGroupContent className="flex-1">
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton 
                      asChild 
                      className={`w-full transition-all duration-200 ${
                        isActive 
                          ? 'bg-black text-white hover:bg-black/90' 
                          : 'hover:bg-gray-100 text-gray-700'
                      } ${isCollapsed ? 'px-2 justify-center' : 'px-4'} py-3 rounded-lg`}
                      tooltip={isCollapsed ? item.label : undefined}
                    >
                      <a href={item.href} className="flex items-center gap-3">
                        <img 
                          src={item.iconPath} 
                          alt={item.label}
                          className={`w-5 h-5 object-contain ${isActive ? 'filter brightness-0 invert' : ''}`}
                        />
                        {!isCollapsed && (
                          <span className={`text-[15px] font-medium whitespace-nowrap ${
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
                    isCollapsed ? 'px-2 justify-center' : 'px-4'
                  } py-3 rounded-lg transition-all duration-200 cursor-pointer`}
                  tooltip={isCollapsed ? "Log out" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src="/Navigation bar icons/Log out icon.svg" 
                      alt="Log out"
                      className="w-5 h-5 object-contain"
                    />
                    {!isCollapsed && (
                      <span className="text-[15px] font-medium whitespace-nowrap text-gray-700">
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
