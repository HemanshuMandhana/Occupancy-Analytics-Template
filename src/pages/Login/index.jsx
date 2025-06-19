
import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header1';
import Footer from '../../components/common/Footer1';
import Button from '../../components/ui/Button1';
import InputField from '../../components/ui/InputField';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');

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

  const handleLogin = (e) => {
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

  const handleCaptchaRefresh = () => {
    generateCaptchaCode();
  };

  return (
    <div className="min-h-screen min-w-[320px] w-full bg-white relative overflow-hidden flex flex-col">
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
          className="h-full lg:w-[45vw] xl:w-[40vw] 2xl:w-[35vw] object-cover"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="pt-2 sm:pt-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 flex-shrink-0">
          <img
            src="/images/img_logo1.png"
            alt="Logo"
            className="h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] xl:h-[80px] w-auto object-contain"
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 py-4">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center min-h-[calc(100vh-200px)]">
              {/* Form Section */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#30427f] leading-[0.85] mb-2 font-gilroy">
                    Login
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-[0.9] font-gilroy">
                    Occupancy Analytics
                  </h2>
                </div>

                <div className="w-full bg-[#fafdfe] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
                  <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
                    {/* Admin ID */}
                    <div>
                      <label className="block text-sm sm:text-base font-normal text-black mb-2 font-gilroy">
                        Admin ID
                      </label>
                      <input
                        type="text"
                        value={adminId}
                        onChange={(e) => setAdminId(e.target.value)}
                        className="w-full h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 bg-white border border-[#bcbec0] rounded-lg text-sm sm:text-base text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                        placeholder="ex: sagar patil"
                        required
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm sm:text-base font-normal text-black mb-2 font-gilroy">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 bg-white border border-[#bcbec0] rounded-lg text-sm sm:text-base text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                          placeholder="Password"
                          required
                        />
                        <button type="button" className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                          <img src="/images/img_clarityeyehideline.svg" alt="Show" className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Captcha */}
                    <div>
                      <label className="block text-sm sm:text-base font-normal text-black mb-2 font-gilroy">
                        Add Captcha
                      </label>
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="text-base sm:text-lg font-extrabold tracking-wider text-black font-gilroy p-2 sm:p-3 rounded-lg flex gap-1 bg-transparent select-none">
                          {captchaCode.split('').map((char, index) => (
                            <span
                              key={index}
                              style={{
                                transform: `rotate(${Math.random() * 10 - 5}deg)`,
                                color: `rgb(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`,
                              }}
                            >
                              {char}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="captcha"
                          size="captcha"
                          onClick={handleCaptchaRefresh}
                          type="button"
                          className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M13.65 2.35C12.2 0.9 10.21 0 8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C11.73 16 14.84 13.45 15.73 10H13.65C12.83 12.33 10.61 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C9.66 2 11.14 2.69 12.22 3.78L9 7H16V0L13.65 2.35Z"
                              fill="#7b7b7b"
                            />
                          </svg>
                        </Button>
                      </div>

                      <input
                        type="text"
                        value={captcha}
                        onChange={(e) => setCaptcha(e.target.value)}
                        className="w-full h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 bg-white border border-[#bcbec0] rounded-lg text-sm sm:text-base text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                        placeholder="Enter captcha"
                        required
                      />
                    </div>

                    {/* Login Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full h-10 sm:h-12 rounded-lg shadow-lg text-base sm:text-lg font-bold mt-4"
                    >
                      Login
                    </Button>

                    <div className="text-center mt-2 sm:mt-3">
                      <span className="text-xs sm:text-sm font-normal text-black font-gilroy">Trouble? </span>
                      <button
                        type="button"
                        onClick={handleContactUs}
                        className="text-xs sm:text-sm font-semibold text-black underline font-gilroy hover:text-[#30427f]"
                      >
                        Contact us
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Spacer for desktop layout */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </main>

        {/* Footer */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 pb-2 sm:pb-4 flex-shrink-0">
          <p className="text-xs sm:text-sm lg:text-base font-normal text-black font-gilroy">
            2025, Designed and Developed by Feedback Solutions Inc
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
