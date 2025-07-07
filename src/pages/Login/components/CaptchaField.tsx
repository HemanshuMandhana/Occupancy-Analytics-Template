import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CaptchaFieldProps {
  captchaCode: string;
  captcha: string;
  setCaptcha: (value: string) => void;
  onRefresh: () => void;
}

export const CaptchaField: React.FC<CaptchaFieldProps> = ({
  captchaCode,
  captcha,
  setCaptcha,
  onRefresh
}) => {
  return (
    <div className="space-y-[0.5vh]">
      <Label className="block text-[3.5vw] md:text-[2.5vw] lg:text-[0.83vw] font-normal text-black font-gilroy">
        Add Captcha
      </Label>
      
      {/* Captcha Display and Refresh */}
      <div className="flex items-center gap-[1vw] md:gap-[0.5vw] lg:gap-[0.16vw] mb-[0.28vh]">
        <div className="text-[3.5vw] md:text-[2.5vw] lg:text-[0.83vw] font-bold italic tracking-wider text-black font-gilroy p-[1vw] md:p-[0.5vw] lg:p-[0.21vw] rounded-lg flex gap-[0.5vw] md:gap-[0.3vw] lg:gap-[0.05vw] bg-transparent select-none">
          {captchaCode.split('').map((char, index) => (
            <span
              key={index}
              style={{
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
                color: `rgb(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`,
                display: 'inline-block'
              }}
            >
              {char}
            </span>
          ))}
        </div>
        <button
          onClick={onRefresh}
          type="button"
          className="h-[3.5vw] md:h-[2.5vw] lg:h-[0.83vw] w-[3.5vw] md:w-[2.5vw] lg:w-[0.83vw] rounded-lg flex items-center justify-center bg-transparent border-none hover:bg-gray-100/50 transition-colors"
        >
          <svg width="3.5vw" height="3.5vw" viewBox="0 0 16 16" fill="none" className="w-[3.5vw] md:w-[2.5vw] lg:w-[0.83vw] h-[3.5vw] md:h-[2.5vw] lg:h-[0.83vw]">
            <path
              d="M13.65 2.35C12.2 0.9 10.21 0 8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C11.73 16 14.84 13.45 15.73 10H13.65C12.83 12.33 10.61 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C9.66 2 11.14 2.69 12.22 3.78L9 7H16V0L13.65 2.35Z"
              fill="#7b7b7b"
            />
          </svg>
        </button>
      </div>

      {/* Captcha Input */}
      <Input
        type="text"
        value={captcha}
        onChange={(e) => setCaptcha(e.target.value)}
        className="w-full h-[5.19vh] px-[3vw] md:px-[2vw] lg:px-[0.52vw] bg-white border border-gray-200 rounded-lg text-[3.5vw] md:text-[2.5vw] lg:text-[0.73vw] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-0"
        placeholder="Enter captcha"
        required
      />
    </div>
  );
};