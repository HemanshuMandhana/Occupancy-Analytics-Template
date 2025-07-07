import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CaptchaField } from './CaptchaField';

export const LoginForm: React.FC = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const generateCaptchaCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  useEffect(() => {
    generateCaptchaCode();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminId.trim()) return alert('Please enter Admin ID');
    if (!password.trim()) return alert('Please enter Password');
    if (captcha.toUpperCase() !== captchaCode.toUpperCase()) return alert('Invalid captcha code. Please try again.');

    console.log('Login attempt:', { adminId, password, captcha });
    navigate('/dashboard');
  };

  const handleContactUs = () => {
    alert('Contact support at: support@feedbacksolutions.com');
  };

  return (
    <div className="w-full overflow-auto">
      {/* Header */}
      <div className="pt-[6vh] px-[7.92vw] md:px-[7.92vw]">
        {/* Desktop Logo */}
        <img
          src="/images/img_logo1.png"
          alt="Feedback Solutions Logo"
          className="hidden lg:block h-[6.94vh] w-auto object-contain"
        />

        {/* Mobile and Tablet Logo */}
        <div className="flex lg:hidden flex-col items-center">
          <img
            src="/lovable-uploads/logo-icon.png"
            alt="Feedback Solutions Logo"
            className="h-[7.41vh] w-auto object-contain"
          />
        </div>
      </div>

      {/* Form Section - Center aligned on mobile/tablet */}
      <main className="px-[7.92vw] md:px-[7.92vw] pt-[5.185vh] flex justify-center lg:justify-start">
        <div className="flex flex-col w-full max-w-none">
          {/* Mobile and Tablet Company Name - Above titles */}
          <div className="block lg:hidden text-center mb-[0.93vh]">
            <p className="uppercase text-[6vw] md:text-[4vw] lg:text-[1.67vw] font-bold text-[#30427f] font-ato italic">
              Paramount
            </p>
          </div>

          {/* Titles - Login: 120px, Occupancy Analytics: 75px */}
          <div className="mb-[2.96vh] space-y-[0.741vh]">
            <h1 className="text-[12vw] md:text-[8vw] lg:text-[6.25vw] font-extrabold text-[#30427f] leading-none font-gilroy text-center lg:text-left">
              Login
            </h1>
            <h2 className="text-[7.5vw] md:text-[5vw] lg:text-[3.906vw] font-bold text-black leading-none font-gilroy text-center lg:text-left">
              Occupancy Analytics
            </h2>
          </div>

          {/* Form box - Center align for mobile/tablet, left align for desktop */}
          <div className="w-full md:w-[50vw] lg:w-[28.7vw] max-w-[90vw] lg:max-w-none mx-auto lg:mx-0 bg-[#fafdfe] border border-[#e2e8f0] rounded-xl shadow-md p-[1.85vh]">
            <form onSubmit={handleLogin} className="space-y-[1.16vh]">
              <div className="space-y-[0.5vh]">
                <Label className="block text-[3.5vw] md:text-[2.5vw] lg:text-[0.83vw] font-normal text-black font-gilroy">
                  Admin ID
                </Label>
                <Input
                  type="text"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  className="w-full h-[5.19vh] px-[3vw] md:px-[2vw] lg:px-[0.52vw] bg-white border border-[#bcbec0] rounded-lg text-[3.5vw] md:text-[2.5vw] lg:text-[0.73vw] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-0"
                  placeholder="ex: sagar patil"
                  required
                />
              </div>

              <div className="space-y-[0.5vh]">
                <Label className="block text-[3.5vw] md:text-[2.5vw] lg:text-[0.83vw] font-normal text-black font-gilroy">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[5.19vh] px-[3vw] md:px-[2vw] lg:px-[0.52vw] pr-[10vw] md:pr-[8vw] lg:pr-[0.63vw] bg-white border border-[#bcbec0] rounded-lg text-[3.5vw] md:text-[2.5vw] lg:text-[0.73vw] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-0"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-[3vw] md:right-[2vw] lg:right-[0.16vw] top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-opacity"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      // Eye with slash (hide password) - complete eye with slash overlay
                      <svg 
                        className="w-[2vw] md:w-[2vw] lg:w-[1vw] h-[3vw] md:h-[2vw] lg:h-[1vw]" 
                        fill="none" 
                        stroke="#7b7b7b" 
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                      </svg>
                    ) : (
                      // Eye (show password)
                      <svg 
                        className="w-[2vw] md:w-[2vw] lg:w-[1vw] h-[3vw] md:h-[2vw] lg:h-[1vw]" 
                        fill="none" 
                        stroke="#7b7b7b" 
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <CaptchaField
                captchaCode={captchaCode}
                captcha={captcha}
                setCaptcha={setCaptcha}
                onRefresh={generateCaptchaCode}
              />

              <Button
                type="submit"
                className="w-full h-[5.56vh] rounded-lg shadow-lg text-[3.5vw] md:text-[2.5vw] lg:text-[0.83vw] font-bold bg-[#30427f] hover:bg-[#253660] text-white transition-colors"
              >
                Login
              </Button>

              <div className="text-center pt-[0.5vh]">
                <span className="text-[3vw] md:text-[2.2vw] lg:text-[0.73vw] font-normal text-black font-gilroy">Trouble? </span>
                <button
                  type="button"
                  onClick={handleContactUs}
                  className="text-[3vw] md:text-[2.2vw] lg:text-[0.73vw] font-semibold text-black underline font-gilroy hover:text-[#30427f] transition-colors"
                >
                  Contact us
                </button>
              </div>
            </form>
          </div>

          {/* Footer - Positioned exactly 55px below form box */}
          <div className="mt-[5.65vh] w-full">
            <p className="text-[3vw] md:text-[2vw] lg:text-[0.75vw] font-normal text-black font-gilroy text-center lg:text-left">
              2025, Designed and Developed by Feedback Solutions Inc
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};