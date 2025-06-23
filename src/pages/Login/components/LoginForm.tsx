
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
    <main className="flex-1 flex items-center justify-start px-[4.17vw] py-[2.08vw]">
      <div className="w-full max-w-none">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[3.33vw] items-center h-full">
          {/* Form Section */}
          <div className="space-y-[2.78vw] max-w-none">
            {/* Title Section */}
            <div className="space-y-[1.11vw]">
              <h1 className="text-[4.17vw] font-extrabold text-[#30427f] leading-none font-gilroy">
                Login
              </h1>
              <h2 className="text-[2.78vw] font-bold text-black leading-tight font-gilroy">
                Occupancy Analytics
              </h2>
            </div>

            {/* Form Container */}
            <div className="w-[27.78vw] bg-[#fafdfe] rounded-xl shadow-lg p-[2.08vw]">
              <form onSubmit={handleLogin} className="space-y-[1.39vw]">
                {/* Admin ID */}
                <div className="space-y-[0.42vw]">
                  <Label className="block text-[0.83vw] font-normal text-black font-gilroy">
                    Admin ID
                  </Label>
                  <Input
                    type="text"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    className="w-full h-[2.78vw] px-[1.04vw] bg-white border border-[#bcbec0] rounded-lg text-[0.83vw] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                    placeholder="ex: sagar patil"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-[0.42vw]">
                  <Label className="block text-[0.83vw] font-normal text-black font-gilroy">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-[2.78vw] px-[1.04vw] bg-white border border-[#bcbec0] rounded-lg text-[0.83vw] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f] pr-[2.5vw]"
                      placeholder="Password"
                      required
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-[0.83vw] top-1/2 transform -translate-y-1/2"
                    >
                      <img 
                        src="/images/img_clarityeyehideline.svg" 
                        alt="Toggle password visibility" 
                        className="w-[1.04vw] h-[1.04vw]" 
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
                  className="w-full h-[3.33vw] rounded-lg shadow-lg text-[1.04vw] font-bold bg-[#30427f] hover:bg-[#253660] text-white transition-colors"
                >
                  Login
                </Button>

                {/* Contact Link */}
                <div className="text-center pt-[0.42vw]">
                  <span className="text-[0.69vw] font-normal text-black font-gilroy">Trouble? </span>
                  <button
                    type="button"
                    onClick={handleContactUs}
                    className="text-[0.69vw] font-semibold text-black underline font-gilroy hover:text-[#30427f] transition-colors"
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
