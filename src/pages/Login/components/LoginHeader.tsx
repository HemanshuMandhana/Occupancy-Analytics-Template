
import React from 'react';

export const LoginHeader: React.FC = () => {
  return (
    <div className="pt-[2vh] px-[4vw] xl:px-[8vw] 2xl:px-[10vw] flex-shrink-0">
      {/* Desktop Logo */}
      <img
        src="/images/img_logo1.png"
        alt="Feedback Solutions Logo"
        className="hidden md:block h-[6vh] sm:h-[7vh] md:h-[8vh] lg:h-[9vh] xl:h-[10vh] w-auto object-contain"
      />
      {/* Mobile Logo */}
      <img
        src="/lovable-uploads/28e70e75-df11-4701-94ef-7c2e7d34ccbb.png"
        alt="Feedback Solutions Logo"
        className="block md:hidden h-[8vh] w-auto object-contain"
      />
    </div>
  );
};
