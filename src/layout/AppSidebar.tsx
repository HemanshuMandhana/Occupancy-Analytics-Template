import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';
import { cn } from '@/lib/utils';

const navigationItems = [
  { icon: '/Navigation bar icons/Dashboard icon.svg', label: 'Dashboard', href: '/dashboard' },
  { icon: '/Navigation bar icons/Comparision Dashboard icon.svg', label: 'Comparison Dashboard', href: '/comparison' },
  { icon: '/Navigation bar icons/Occupancy trend icon.svg', label: 'Occupancy Trend', href: '/occupancy-trend' },
  { icon: '/Navigation bar icons/Occupancy Comparision icon.svg', label: 'Occupancy Comparison', href: '/occupancy-comparison' },
  { icon: '/Navigation bar icons/Visitor count icon.svg', label: 'Visitor Count', href: '/visitor-count' },
  { icon: '/Navigation bar icons/Visitor Comparision icon.svg', label: 'Visitor Comparison', href: '/visitor-comparison' },
  { icon: '/Navigation bar icons/Data reports icon.svg', label: 'Data Reports', href: '/data-reports' },
  { icon: '/Navigation bar icons/Capacity Master icon.svg', label: 'Capacity Master', href: '/capacity-master' },
  { icon: '/Navigation bar icons/Email report config icon.svg', label: 'Email Report Config', href: '/email-config' },
  { icon: '/Navigation bar icons/login history icon.svg', label: 'Login History', href: '/login-history' },
  { icon: '/Navigation bar icons/My account icon.svg', label: 'My Account', href: '/my-account' },
  { icon: '/Navigation bar icons/User Master icon.svg', label: 'User Master', href: '/user-master' },
];

const AppSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isExpanded, isHovered, isMobileOpen, setIsHovered, toggleMobileSidebar } = useSidebar();

  // For desktop: show expanded if manually expanded OR on hover
  const isDesktopOpen = isExpanded || isHovered;

  const handleLogout = () => {
    navigate('/login');
  };

  const scrollbarHiddenStyle: React.CSSProperties = {
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  };

  return (
    <>      
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-screen transition-all duration-300 border-r border-gray-200 bg-[rgba(246,247,255,0.95)] backdrop-blur-sm',
          isDesktopOpen ? 'w-[280px]' : 'w-[60px]',
          'hidden lg:flex flex-col',
          // Higher z-index when hovered but not expanded, to overlay on content
          isHovered && !isExpanded ? 'z-50' : 'z-40'
        )}
        onMouseEnter={() => !isExpanded && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={cn(
          "flex items-center h-[78.5px] px-6",
          isDesktopOpen ? "justify-start" : "justify-center"
        )}>
          {isDesktopOpen ? (
            <img src="/lovable-uploads/company-logo.png" alt="Logo" className="w-[140px] lg:w-[187px] h-auto object-contain" />
          ) : (
            <img src="/lovable-uploads/logo-icon.png" alt="Logo Icon" className="h-8 w-8 object-contain" />
          )}
        </div>

        <nav 
          className="flex-1 overflow-y-auto px-6 pt-4 [&::-webkit-scrollbar]:hidden"
          style={scrollbarHiddenStyle}
        >
          <ul className="space-y-1">
            {navigationItems.map((item, index) => {
              const active = location.pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg min-h-[48px] transition-colors text-sm font-medium',
                      isDesktopOpen ? 'px-4 justify-start' : 'px-3 justify-center',
                      active
                        ? 'bg-[rgba(37,56,120,1)] text-white hover:bg-[rgba(37,56,120,0.9)]'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className={cn('w-5 h-5 object-contain flex-shrink-0', active && 'filter brightness-0 invert')}
                      style={{ minWidth: '20px', minHeight: '20px' }}
                    />
                    {isDesktopOpen && <span className="truncate">{item.label}</span>}
                  </Link>
                </li>
              );
            })}

            <li>
              <button
                onClick={handleLogout}
                className={cn(
                  'flex items-center gap-3 rounded-lg min-h-[48px] transition-colors text-sm font-medium text-gray-700 hover:bg-gray-100 w-full',
                  isDesktopOpen ? 'px-4 justify-start' : 'px-3 justify-center'
                )}
              >
                <img 
                  src="/Navigation bar icons/Log out icon.svg" 
                  alt="Log out" 
                  className="w-5 h-5 object-contain flex-shrink-0"
                  style={{ minWidth: '20px', minHeight: '20px' }}
                />
                {isDesktopOpen && <span>Log out</span>}
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar - Full width on mobile, hidden on desktop */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-screen z-50 transition-transform duration-300 border-r border-gray-200 bg-[rgba(246,247,255,0.95)] backdrop-blur-sm w-[280px]',
          'lg:hidden flex flex-col',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-start h-[60px] px-4">
          <img src="/lovable-uploads/company-logo.png" alt="Logo" className="w-[140px] h-auto object-contain" />
        </div>

        <nav 
          className="flex-1 overflow-y-auto px-2 pt-4 [&::-webkit-scrollbar]:hidden"
          style={scrollbarHiddenStyle}
        >
          <ul className="space-y-1">
            {navigationItems.map((item, index) => {
              const active = location.pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    onClick={() => toggleMobileSidebar()}
                    className={cn(
                      'flex items-center gap-3 rounded-lg min-h-[48px] transition-colors text-sm font-medium px-4 justify-start',
                      active
                        ? 'bg-[rgba(37,56,120,1)] text-white hover:bg-[rgba(37,56,120,0.9)]'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className={cn('w-5 h-5 object-contain flex-shrink-0', active && 'filter brightness-0 invert')}
                      style={{ minWidth: '20px', minHeight: '20px' }}
                    />
                    <span className="truncate">{item.label}</span>
                  </Link>
                </li>
              );
            })}

            <li className="pt-2">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 rounded-lg min-h-[48px] transition-colors text-sm font-medium text-gray-700 hover:bg-gray-100 w-full px-4 justify-start"
              >
                <img 
                  src="/Navigation bar icons/Log out icon.svg" 
                  alt="Log out" 
                  className="w-5 h-5 object-contain flex-shrink-0"
                  style={{ minWidth: '20px', minHeight: '20px' }}
                />
                <span>Log out</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default AppSidebar;