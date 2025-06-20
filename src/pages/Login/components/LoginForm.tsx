
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
    <main className="flex-1 flex items-center justify-start px-4 sm:px-8 lg:px-20 xl:px-36 py-4">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center h-full">
          {/* Form Section */}
          <div className="space-y-6 lg:space-y-10">
            <div>
              <h1 className="text-[7vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[5vw] xl:text-[4.2vw] 2xl:text-[3.5vw] font-extrabold text-[#30427f] leading-[0.85] mb-2 font-gilroy">
                Login
              </h1>
              <h2 className="text-[4vw] sm:text-[3.7vw] md:text-[3.5vw] lg:text-[3vw] xl:text-[2.6vw] 2xl:text-[2vw] font-bold text-black leading-[0.9] font-gilroy">
                Occupancy Analytics
              </h2>
            </div>

            <div className="w-full max-w-[28vw] min-w-[320px] bg-[#fafdfe] rounded-lg shadow-lg p-[3vh]">
              <form onSubmit={handleLogin} className="space-y-[2vh]">
                {/* Admin ID */}
                <div>
                  <Label className="block text-[2vh] font-normal text-black mb-[1vh] font-gilroy">
                    Admin ID
                  </Label>
                  <Input
                    type="text"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    className="w-full h-[5vh] px-[1.5vh] py-[1vh] bg-white border border-[#bcbec0] rounded-lg text-[1.8vh] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                    placeholder="ex: sagar patil"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <Label className="block text-[2vh] font-normal text-black mb-[1vh] font-gilroy">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-[5vh] px-[1.5vh] py-[1vh] bg-white border border-[#bcbec0] rounded-lg text-[1.8vh] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                      placeholder="Password"
                      required
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-[1.5vh] top-1/2 transform -translate-y-1/2"
                    >
                      <img src="/images/img_clarityeyehideline.svg" alt="Show" className="w-[2vh] h-[2vh]" />
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
                  className="w-full h-[5.5vh] rounded-lg shadow-lg text-[2.2vh] font-bold mt-[1vh] bg-[#30427f] hover:bg-[#253660] text-white"
                >
                  Login
                </Button>

                <div className="text-center mt-[0.8vh]">
                  <span className="text-[1.6vh] font-normal text-black font-gilroy">Trouble? </span>
                  <button
                    type="button"
                    onClick={handleContactUs}
                    className="text-[1.6vh] font-semibold text-black underline font-gilroy hover:text-[#30427f]"
                  >
                    Contact us
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </main>
  );
};
