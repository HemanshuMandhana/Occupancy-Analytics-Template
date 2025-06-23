
import React from 'react';

interface LoginLayoutProps {
  children: React.ReactNode;
}

export const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-white relative overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/img_background_image_overlay.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Image - Hidden on mobile and tablets */}
      <div className="absolute top-0 right-0 z-0 hidden xl:block h-full">
        <img
          src="/images/img_mask_group.png"
          alt="Theater"
          className="h-full xl:w-[54vw] 2xl:w-[52vw] object-cover"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  );
};
