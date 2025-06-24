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
    <div className="h-screen w-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="pt-[6vh] px-[3vw] xl:px-[7vw] 2xl:px-[9vw] flex-shrink-0">
        {/* Desktop Logo */}
        <img
          src="/images/img_logo1.png"
          alt="Feedback Solutions Logo"
          className="hidden md:block h-[4vh] sm:h-[4.5vh] md:h-[5vh] lg:h-[5.5vh] xl:h-[6vh] w-auto object-contain"
        />

        {/* Mobile Logo and Company Name */}
        <div className="flex md:hidden flex-col items-center">
          <img
            src="/lovable-uploads/28e70e75-df11-4701-94ef-7c2e7d34ccbb.png"
            alt="Feedback Solutions Logo"
            className="h-[5.5vh] w-auto object-contain"
          />
          <p className="uppercase pt-[0.5vh] text-[clamp(2rem,3.5vw,2rem)] font-bold text-[#30427f] font-ato italic mt-1">
            Paramount
          </p>
        </div>
      </div>

      {/* Form Section */}
      <main className="flex-1 flex items-center justify-center xl:justify-start px-[3vw] xl:px-[7vw] 2xl:px-[9vw]">
        <div className="w-full max-w-none flex items-center">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[4vw] xl:gap-[6vw] items-center w-full">
            <div className="space-y-[1.5vh] max-w-xl xl:max-w-lg mx-auto xl:mx-0 flex flex-col justify-center">
              <div className="space-y-[1vh]">
                <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] xl:text-[clamp(5rem,4.5vw,5rem)] font-extrabold text-[#30427f] leading-none font-gilroy">
                  Login
                </h1>
                <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] xl:text-[clamp(3rem,2.5vw,2.75rem)] font-bold text-black leading-tight font-gilroy">
                  Occupancy Analytics
                </h2>
              </div>

              {/* ⬇️ Reduced width of form box below */}
              <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] bg-[#fafdfe] border border-[#e2e8f0] rounded-xl shadow-md p-[clamp(1rem,2vh,1.75rem)] mx-auto xl:mx-0">
                <form onSubmit={handleLogin} className="space-y-[clamp(0.75rem,1.5vh,1.25rem)]">
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

                  <div className="space-y-[0.5vh]">
                    <Label className="block text-[clamp(0.75rem,1.2vw,1rem)] font-normal text-black font-gilroy">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
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

                  <CaptchaField
                    captchaCode={captchaCode}
                    captcha={captcha}
                    setCaptcha={setCaptcha}
                    onRefresh={generateCaptchaCode}
                  />

                  <Button
                    type="submit"
                    className="w-full h-[clamp(44px,6vh,60px)] rounded-lg shadow-lg text-[clamp(0.875rem,1.2vw,1rem)] font-bold bg-[#30427f] hover:bg-[#253660] text-white transition-colors"
                  >
                    Login
                  </Button>

                  <div className="text-center pt-[0.5vh]">
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

            <div className="hidden xl:block" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="px-[3vw] xl:px-[7vw] 2xl:px-[9vw] pt-[1vh] pb-[3vh] flex-shrink-0 w-full">
        <p className="text-[clamp(.75rem,0.9vw,0.75rem)] font-normal text-black font-gilroy text-center md:text-left">
          2025, Designed and Developed by Feedback Solutions Inc
        </p>
      </div>
    </div>
  );
};
