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
          'hidden lg:flex flex-col',
          // Higher z-index when hovered but not expanded, to overlay on content
          isHovered && !isExpanded ? 'z-50' : 'z-40'
        )}
        style={{
          width: isDesktopOpen ? 'clamp(250px, 25vw, 280px)' : 'clamp(50px, 6vw, 60px)'
        }}
        onMouseEnter={() => !isExpanded && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={cn(
            "flex items-center border-b border-gray-100",
            isDesktopOpen ? "justify-start" : "justify-center"
          )}
          style={{ 
            height: 'clamp(60px, 8vh, 78.5px)',
            padding: isDesktopOpen ? 'clamp(12px, 1.5vw, 16px)' : 'clamp(8px, 1vw, 12px)'
          }}
        >
          {isDesktopOpen ? (
            <img 
              src="/lovable-uploads/company-logo.png" 
              alt="Logo" 
              className="w-[140px] lg:w-[187px] h-auto object-contain"
            />
          ) : (
            <img 
              src="/lovable-uploads/logo-icon.png" 
              alt="Logo Icon" 
              className="h-8 w-8 object-contain"
            />
          )}
        </div>

        <nav 
          className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden"
          style={{
            ...scrollbarHiddenStyle,
            padding: `clamp(12px, 1.5vh, 16px) clamp(6px, 0.8vw, 8px)`
          }}
        >
          <ul style={{ gap: 'clamp(4px, 0.5vh, 6px)' }} className="flex flex-col">
            {navigationItems.map((item, index) => {
              const active = location.pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center rounded-lg transition-colors font-medium',
                      isDesktopOpen ? 'justify-start' : 'justify-center',
                      active
                        ? 'bg-[rgba(37,56,120,1)] text-white hover:bg-[rgba(37,56,120,0.9)]'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                    style={{
                      minHeight: 'clamp(40px, 5vh, 48px)',
                      padding: isDesktopOpen 
                        ? 'clamp(8px, 1vh, 12px) clamp(12px, 1.5vw, 16px)' 
                        : 'clamp(8px, 1vh, 12px)',
                      gap: isDesktopOpen ? 'clamp(8px, 1vw, 12px)' : '0',
                      fontSize: isDesktopOpen ? 'clamp(12px, 1.2vw, 14px)' : '0'
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className={cn('object-contain flex-shrink-0', active && 'filter brightness-0 invert')}
                      style={{ 
                        width: 'clamp(16px, 2vw, 20px)', 
                        height: 'clamp(16px, 2vw, 20px)',
                        minWidth: 'clamp(16px, 2vw, 20px)', 
                        minHeight: 'clamp(16px, 2vw, 20px)' 
                      }}
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
                  'flex items-center rounded-lg transition-colors font-medium text-gray-700 hover:bg-gray-100 w-full',
                  isDesktopOpen ? 'justify-start' : 'justify-center'
                )}
                style={{
                  minHeight: 'clamp(40px, 5vh, 48px)',
                  padding: isDesktopOpen 
                    ? 'clamp(8px, 1vh, 12px) clamp(12px, 1.5vw, 16px)' 
                    : 'clamp(8px, 1vh, 12px)',
                  gap: isDesktopOpen ? 'clamp(8px, 1vw, 12px)' : '0',
                  fontSize: isDesktopOpen ? 'clamp(12px, 1.2vw, 14px)' : '0'
                }}
              >
                <img 
                  src="/Navigation bar icons/Log out icon.svg" 
                  alt="Log out" 
                  className="object-contain flex-shrink-0"
                  style={{ 
                    width: 'clamp(16px, 2vw, 20px)', 
                    height: 'clamp(16px, 2vw, 20px)',
                    minWidth: 'clamp(16px, 2vw, 20px)', 
                    minHeight: 'clamp(16px, 2vw, 20px)' 
                  }}
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
          'fixed top-0 left-0 h-screen z-50 transition-transform duration-300 border-r border-gray-200 bg-[rgba(246,247,255,0.95)] backdrop-blur-sm',
          'lg:hidden flex flex-col',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        style={{ width: 'clamp(260px, 75vw, 300px)' }}
      >
        <div 
          className="flex items-center justify-start border-b border-gray-100"
          style={{ 
            height: 'clamp(50px, 8vh, 60px)',
            padding: 'clamp(8px, 2vw, 16px)'
          }}
        >
          <img 
            src="/lovable-uploads/company-logo.png" 
            alt="Logo" 
            className="w-[100px] object-contain h-auto"
          />
        </div>

        <nav 
          className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden"
          style={{
            ...scrollbarHiddenStyle,
            padding: `clamp(8px, 2vh, 16px) clamp(4px, 1vw, 8px)`
          }}
        >
          <ul style={{ gap: 'clamp(2px, 0.5vh, 4px)' }} className="flex flex-col">
            {navigationItems.map((item, index) => {
              const active = location.pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    onClick={() => toggleMobileSidebar()}
                    className={cn(
                      'flex items-center rounded-lg transition-colors font-medium justify-start',
                      active
                        ? 'bg-[rgba(37,56,120,1)] text-white hover:bg-[rgba(37,56,120,0.9)]'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                    style={{
                      minHeight: 'clamp(36px, 6vh, 48px)',
                      padding: 'clamp(6px, 1.5vh, 12px) clamp(8px, 2vw, 16px)',
                      gap: 'clamp(6px, 1.5vw, 12px)',
                      fontSize: 'clamp(11px, 2.5vw, 14px)'
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className={cn('object-contain flex-shrink-0', active && 'filter brightness-0 invert')}
                      style={{ 
                        width: 'clamp(14px, 3vw, 20px)', 
                        height: 'clamp(14px, 3vw, 20px)',
                        minWidth: 'clamp(14px, 3vw, 20px)', 
                        minHeight: 'clamp(14px, 3vw, 20px)' 
                      }}
                    />
                    <span className="truncate">{item.label}</span>
                  </Link>
                </li>
              );
            })}

            <li>
              <button
                onClick={handleLogout}
                className="flex items-center rounded-lg transition-colors font-medium text-gray-700 hover:bg-gray-100 w-full justify-start"
                style={{
                  minHeight: 'clamp(36px, 6vh, 48px)',
                  padding: 'clamp(6px, 1.5vh, 12px) clamp(8px, 2vw, 16px)',
                  gap: 'clamp(6px, 1.5vw, 12px)',
                  fontSize: 'clamp(11px, 2.5vw, 14px)'
                }}
              >
                <img 
                  src="/Navigation bar icons/Log out icon.svg" 
                  alt="Log out" 
                  className="object-contain flex-shrink-0"
                  style={{ 
                    width: 'clamp(14px, 3vw, 20px)', 
                    height: 'clamp(14px, 3vw, 20px)',
                    minWidth: 'clamp(14px, 3vw, 20px)', 
                    minHeight: 'clamp(14px, 3vw, 20px)' 
                  }}
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