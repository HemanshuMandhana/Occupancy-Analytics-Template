
import React from 'react';
import { LayoutDashboard, BarChart3, TrendingUp, Users, FileText, Settings, User, History, Mail, LogOut } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';

const navigationItems = [
  { 
    icon: LayoutDashboard, 
    label: 'Dashboard', 
    isActive: true,
    href: '/'
  },
  { 
    icon: BarChart3, 
    label: 'Comparison Dashboard',
    href: '/comparison'
  },
  { 
    icon: TrendingUp, 
    label: 'Occupancy Trend',
    href: '/occupancy-trend'
  },
  { 
    icon: TrendingUp, 
    label: 'Occupancy Comparison',
    href: '/occupancy-comparison'
  },
  { 
    icon: Users, 
    label: 'Visitor Count',
    href: '/visitor-count'
  },
  { 
    icon: Users, 
    label: 'Visitor Comparison',
    href: '/visitor-comparison'
  },
  { 
    icon: History, 
    label: 'Data Reports',
    href: '/data-reports'
  },
  { 
    icon: Mail, 
    label: 'Capacity Master',
    href: '/capacity-master'
  },
  { 
    icon: Mail, 
    label: 'Email Report Config',
    href: '/email-config'
  },
  { 
    icon: History, 
    label: 'Login History',
    href: '/login-history'
  },
  { 
    icon: User, 
    label: 'My Account',
    href: '/my-account'
  },
  { 
    icon: Users, 
    label: 'User Master',
    href: '/user-master'
  },
  { 
    icon: LogOut, 
    label: 'Log out',
    href: '/logout'
  },
];

export const AppSidebar: React.FC = () => {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar className="border-r border-gray-200" style={{ backgroundImage: 'url(/lovable-uploads/297ff5e8-c4e2-4da7-a6e5-38fadaf47c24.png)', backgroundSize: 'cover', backgroundPosition: 'top' }}>
      <SidebarContent className="bg-[rgba(246,247,255,0.95)] pt-6">
        {/* Logo */}
        <div className="px-4 mb-6">
          <img
            src="/lovable-uploads/84d9499d-2461-49f9-bc7a-c21e8858962c.png"
            className={`object-contain transition-all duration-200 ${isCollapsed ? 'w-8 h-8' : 'w-[187px] h-auto'}`}
            alt="Company logo"
          />
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton 
                    asChild
                    className={`w-full ${
                      item.isActive 
                        ? 'bg-[rgba(48,66,127,1)] text-white hover:bg-[rgba(48,66,127,0.9)]' 
                        : 'hover:bg-gray-100'
                    } ${isCollapsed ? 'px-3' : 'px-4'} py-3 rounded-lg transition-colors`}
                  >
                    <a href={item.href} className="flex items-center gap-3">
                      <item.icon className={`w-5 h-5 ${item.isActive ? 'text-white' : 'text-gray-600'}`} />
                      {!isCollapsed && (
                        <span className={`text-[17px] font-normal whitespace-nowrap ${
                          item.isActive ? 'text-white' : 'text-black'
                        }`}>
                          {item.label}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
