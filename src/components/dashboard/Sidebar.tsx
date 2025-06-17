
import React from 'react';
import { LayoutDashboard, BarChart3, TrendingUp, Users, FileText, Settings, User, History, Mail, LogOut, ChevronDown } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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
    hasSubmenu: true,
    subItems: [
      { label: 'Overview', href: '/comparison' },
      { label: 'Analytics', href: '/comparison/analytics' }
    ]
  },
  { 
    icon: TrendingUp, 
    label: 'Occupancy Trend',
    href: '/occupancy-trend'
  },
  { 
    icon: BarChart3, 
    label: 'Occupancy Comparison', 
    hasSubmenu: true,
    subItems: [
      { label: 'Daily', href: '/occupancy-comparison/daily' },
      { label: 'Weekly', href: '/occupancy-comparison/weekly' }
    ]
  },
  { 
    icon: Users, 
    label: 'Visitor Count',
    href: '/visitor-count'
  },
  { 
    icon: Users, 
    label: 'Visitor Comparison', 
    hasSubmenu: true,
    subItems: [
      { label: 'Timeline', href: '/visitor-comparison/timeline' },
      { label: 'Metrics', href: '/visitor-comparison/metrics' }
    ]
  },
  { 
    icon: FileText, 
    label: 'Data Reports',
    href: '/data-reports'
  },
  { 
    icon: Settings, 
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
    <Sidebar className="border-r border-gray-200">
      <SidebarContent className="bg-[rgba(246,247,255,1)] pt-6">
        {/* Logo */}
        <div className="px-4 mb-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/a4398ecef9f90d02280dff77486962a630c02cde?placeholderIfAbsent=true"
            className={`object-contain transition-all duration-200 ${isCollapsed ? 'w-8 h-8' : 'w-[187px] h-auto'}`}
            alt="Company logo"
          />
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  {item.hasSubmenu ? (
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton 
                          className={`w-full justify-between ${
                            isCollapsed ? 'px-3' : 'px-4'
                          } py-3 hover:bg-gray-100 rounded-lg transition-colors`}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5 text-gray-600" />
                            {!isCollapsed && (
                              <span className="text-[17px] font-normal text-black">
                                {item.label}
                              </span>
                            )}
                          </div>
                          {!isCollapsed && (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {!isCollapsed && (
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems?.map((subItem, subIndex) => (
                              <SidebarMenuSubItem key={subIndex}>
                                <SidebarMenuSubButton asChild>
                                  <a 
                                    href={subItem.href}
                                    className="text-sm text-gray-600 hover:text-gray-900"
                                  >
                                    {subItem.label}
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ) : (
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
                          <span className={`text-[17px] font-normal ${
                            item.isActive ? 'text-white' : 'text-black'
                          }`}>
                            {item.label}
                          </span>
                        )}
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
