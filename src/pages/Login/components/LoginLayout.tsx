
import React from 'react';

interface LoginLayoutProps {
  children: React.ReactNode;
}

export const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-screen bg-white relative overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/img_background_image_overlay.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Image */}
      <div className="absolute top-0 right-0 z-0 hidden lg:block h-full">
        <img
          src="/images/img_mask_group.png"
          alt="Theater"
          className="h-full lg:w-[45vw] object-cover"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col flex-grow">
        {children}
      </div>
    </div>
  );
};
