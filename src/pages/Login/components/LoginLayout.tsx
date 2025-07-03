
import React from 'react';

interface LoginLayoutProps {
  children: React.ReactNode;
}

export const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-auto login-scrollbar"
      style={{
        backgroundImage: 'url(/lovable-uploads/pg-bg-design.svg)',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Content container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .login-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(156, 163, 175, 0.2) transparent;
          }
          
          .login-scrollbar::-webkit-scrollbar {
            width: 3px;
            height: 3px;
          }
          
          .login-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .login-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(156, 163, 175, 0.2);
            border-radius: 2px;
          }
          
          .login-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(156, 163, 175, 0.3);
          }
          
          .login-scrollbar::-webkit-scrollbar-corner {
            background: transparent;
          }
          
          /* Hide scrollbar arrows */
          .login-scrollbar::-webkit-scrollbar-button {
            display: none;
          }
        `
      }} />
    </div>
  );
};
