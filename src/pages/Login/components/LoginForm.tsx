
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
    <main className="flex-1 flex items-center justify-center xl:justify-start px-[4vw] xl:px-[8vw] 2xl:px-[10vw] min-h-0 overflow-y-auto">
      <div className="w-full max-w-none h-full flex items-center py-[2vh]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[4vw] xl:gap-[6vw] items-center h-full w-full">
          {/* Form Section */}
          <div className="space-y-[2vh] max-w-2xl xl:max-w-none mx-auto xl:mx-0 flex flex-col justify-center min-h-0">
            {/* Title Section */}
            <div className="space-y-[1vh]">
              <h1 className="text-[clamp(2rem,6vw,4rem)] xl:text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold text-[#30427f] leading-none font-gilroy">
                Login
              </h1>
              <h2 className="text-[clamp(1.25rem,4vw,2rem)] xl:text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-black leading-tight font-gilroy">
                Occupancy Analytics
              </h2>
            </div>

            {/* Form Container */}
            <div className="w-full max-w-md xl:max-w-lg 2xl:max-w-xl bg-[#fafdfe] rounded-xl shadow-lg p-[clamp(1rem,2.5vh,2rem)] mx-auto xl:mx-0">
              <form onSubmit={handleLogin} className="space-y-[clamp(0.75rem,1.5vh,1.25rem)]">
                {/* Admin ID */}
                <div className="space-y-[0.5vh]">
                  <Label className="block text-[clamp(0.75rem,1.2vw,1rem)] font-normal text-black font-gilroy">
                    Admin ID
                  </Label>
                  <Input
                    type="text"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    className="w-full h-[clamp(40px,5vh,56px)] px-[1rem] bg-white border border-[#bcbec0] rounded-lg text-[clamp(0.75rem,1vw,0.875rem)] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                    placeholder="ex: sagar patil"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-[0.5vh]">
                  <Label className="block text-[clamp(0.75rem,1.2vw,1rem)] font-normal text-black font-gilroy">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-[clamp(40px,5vh,56px)] px-[1rem] pr-12 bg-white border border-[#bcbec0] rounded-lg text-[clamp(0.75rem,1vw,0.875rem)] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                      placeholder="Password"
                      required
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <img 
                        src="/images/img_clarityeyehideline.svg" 
                        alt="Toggle password visibility" 
                        className="w-4 h-4" 
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
                  className="w-full h-[clamp(44px,6vh,60px)] rounded-lg shadow-lg text-[clamp(0.875rem,1.2vw,1rem)] font-bold bg-[#30427f] hover:bg-[#253660] text-white transition-colors"
                >
                  Login
                </Button>

                {/* Contact Link */}
                <div className="text-center pt-[1vh]">
                  <span className="text-[clamp(0.75rem,1vw,0.875rem)] font-normal text-black font-gilroy">Trouble? </span>
                  <button
                    type="button"
                    onClick={handleContactUs}
                    className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold text-black underline font-gilroy hover:text-[#30427f] transition-colors"
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
