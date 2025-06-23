
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
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
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
    if (captcha.toUpperCase() !== captchaCode) return alert('Invalid captcha code. Please try again.');

    console.log('Login attempt:', { adminId, password, captcha });
    navigate('/dashboard');
  };

  const handleContactUs = () => {
    alert('Contact support at: support@feedbacksolutions.com');
  };

  return (
    <main className="flex-1 flex items-center justify-start px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-4">
      <div className="w-full max-w-none">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center h-full">
          {/* Form Section */}
          <div className="space-y-6 lg:space-y-8 xl:space-y-10 max-w-2xl xl:max-w-none">
            {/* Title Section */}
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold text-[#30427f] leading-none font-gilroy">
                Login
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-black leading-tight font-gilroy">
                Occupancy Analytics
              </h2>
            </div>

            {/* Form Container */}
            <div className="w-full max-w-md xl:max-w-lg 2xl:max-w-xl bg-[#fafdfe] rounded-xl shadow-lg p-6 lg:p-8 xl:p-10">
              <form onSubmit={handleLogin} className="space-y-4 lg:space-y-6">
                {/* Admin ID */}
                <div className="space-y-2">
                  <Label className="block text-sm lg:text-base xl:text-lg font-normal text-black font-gilroy">
                    Admin ID
                  </Label>
                  <Input
                    type="text"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    className="w-full h-10 lg:h-12 xl:h-14 px-3 lg:px-4 xl:px-5 bg-white border border-[#bcbec0] rounded-lg text-sm lg:text-base text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                    placeholder="ex: sagar patil"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label className="block text-sm lg:text-base xl:text-lg font-normal text-black font-gilroy">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-10 lg:h-12 xl:h-14 px-3 lg:px-4 xl:px-5 bg-white border border-[#bcbec0] rounded-lg text-sm lg:text-base text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f] pr-12"
                      placeholder="Password"
                      required
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 lg:right-4 top-1/2 transform -translate-y-1/2"
                    >
                      <img 
                        src="/images/img_clarityeyehideline.svg" 
                        alt="Toggle password visibility" 
                        className="w-4 h-4 lg:w-5 lg:h-5" 
                      />
                    </button>
                  </div>
                </div>

                {/* Captcha */}
                <CaptchaField
                  captchaCode={captchaCode}
                  captcha={captcha}
                  setCaptcha={setCaptcha}
                  onRefresh={generateCaptchaCode}
                />

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full h-12 lg:h-14 xl:h-16 rounded-lg shadow-lg text-base lg:text-lg xl:text-xl font-bold bg-[#30427f] hover:bg-[#253660] text-white transition-colors"
                >
                  Login
                </Button>

                {/* Contact Link */}
                <div className="text-center pt-2">
                  <span className="text-xs lg:text-sm font-normal text-black font-gilroy">Trouble? </span>
                  <button
                    type="button"
                    onClick={handleContactUs}
                    className="text-xs lg:text-sm font-semibold text-black underline font-gilroy hover:text-[#30427f] transition-colors"
                  >
                    Contact us
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Spacer for desktop layout */}
          <div className="hidden xl:block" />
        </div>
      </div>
    </main>
  );
};
