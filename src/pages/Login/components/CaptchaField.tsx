
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

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
    <div className="space-y-[0.42vw]">
      <Label className="block text-[0.83vw] font-normal text-black font-gilroy">
        Add Captcha
      </Label>
      
      {/* Captcha Display and Refresh */}
      <div className="flex items-center gap-[0.83vw] mb-[0.63vw]">
        <div className="text-[1.04vw] font-extrabold italic tracking-wider text-black font-gilroy p-[0.63vw] rounded-lg flex gap-[0.21vw] bg-transparent select-none">
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
        <Button
          variant="outline"
          size="icon"
          onClick={onRefresh}
          type="button"
          className="h-[2.08vw] w-[2.08vw] rounded-lg flex items-center justify-center border-[#bcbec0] hover:bg-gray-50"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-[0.83vw] h-[0.83vw]">
            <path
              d="M13.65 2.35C12.2 0.9 10.21 0 8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C11.73 16 14.84 13.45 15.73 10H13.65C12.83 12.33 10.61 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C9.66 2 11.14 2.69 12.22 3.78L9 7H16V0L13.65 2.35Z"
              fill="#7b7b7b"
            />
          </svg>
        </Button>
      </div>

      {/* Captcha Input */}
      <Input
        type="text"
        value={captcha}
        onChange={(e) => setCaptcha(e.target.value)}
        className="w-full h-[2.78vw] px-[1.04vw] bg-white border border-[#bcbec0] rounded-lg text-[0.83vw] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
        placeholder="Enter captcha"
        required
      />
    </div>
  );
};
