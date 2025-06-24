
import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { useLocation, useNavigate } from 'react-router-dom';

const navigationItems = [{
  icon: '/icons/dashboard.png',
  label: 'Dashboard',
  href: '/dashboard'
}, {
  icon: '/icons/comparison.png',
  label: 'Comparison Dashboard',
  href: '/comparison'
}, {
  icon: '/icons/trend.png',
  label: 'Occupancy Trend',
  href: '/occupancy-trend'
}, {
  icon: '/icons/comparison-trend.png',
  label: 'Occupancy Comparison',
  href: '/occupancy-comparison'
}, {
  icon: '/icons/visitor.png',
  label: 'Visitor Count',
  href: '/visitor-count'
}, {
  icon: '/icons/visitor-comparison.png',
  label: 'Visitor Comparison',
  href: '/visitor-comparison'
}, {
  icon: '/icons/data-reports.png',
  label: 'Data Reports',
  href: '/data-reports'
}, {
  icon: '/icons/capacity.png',
  label: 'Capacity Master',
  href: '/capacity-master'
}, {
  icon: '/icons/capacity.png',
  label: 'Email Report Config',
  href: '/email-config'
}, {
  icon: '/icons/data-reports.png',
  label: 'Login History',
  href: '/login-history'
}, {
  icon: User,
  label: 'My Account',
  href: '/my-account'
}, {
  icon: User,
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
        <div className="px-4 mb-6 flex-shrink-0">
          <img 
            alt="Company logo" 
            className="h-8 w-auto object-contain" 
            src="/lovable-uploads/4d506073-f826-4459-add9-950c3a757f5f.png" 
          />
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
                    >
                      <a href={item.href} className="flex items-center gap-3">
                        {typeof item.icon === 'string' ? (
                          <img 
                            src={item.icon} 
                            alt={item.label}
                            className={`w-5 h-5 object-contain ${isActive ? 'filter brightness-0 invert' : ''}`}
                          />
                        ) : (
                          <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                        )}
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
                >
                  <div className="flex items-center gap-3">
                    <LogOut className="w-5 h-5 text-gray-600" />
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
