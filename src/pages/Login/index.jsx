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

  const navigate = useNavigate(); // ✅ Hook must be at the top level

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

    // ✅ Navigate to dashboard
    navigate('/dashboard');
  };

  const handleContactUs = () => {
    alert('Contact support at: support@feedbacksolutions.com');
  };

  const handleCaptchaRefresh = () => {
    generateCaptchaCode();
  };

  return (
    <div className="min-h-screen w-screen bg-white relative overflow-hidden flex flex-col">
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
          className="h-full lg:w-[45vw] object-cover"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Header */}
        <div className="pt-4 px-4 sm:px-8 lg:px-20 xl:px-36 flex-shrink-0">
          <img
            src="/images/img_logo1.png"
            alt="Logo"
            className="h-[6vh] sm:h-[7vh] lg:h-[8vh] xl:h-[9vh] w-auto object-contain"
          />
        </div>

        {/* Main Content */}
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
                      <label className="block text-[2vh] font-normal text-black mb-[1vh] font-gilroy">
                        Admin ID
                      </label>
                      <input
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
                      <label className="block text-[2vh] font-normal text-black mb-[1vh] font-gilroy">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full h-[5vh] px-[1.5vh] py-[1vh] bg-white border border-[#bcbec0] rounded-lg text-[1.8vh] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                          placeholder="Password"
                          required
                        />
                        <button type="button" className="absolute right-[1.5vh] top-1/2 transform -translate-y-1/2">
                          <img src="/images/img_clarityeyehideline.svg" alt="Show" className="w-[2vh] h-[2vh]" />
                        </button>
                      </div>
                    </div>

                    {/* Captcha */}
                    <div>
                      <label className="block text-[2vh] font-normal text-black mb-[1vh] font-gilroy">
                        Add Captcha
                      </label>
                      <div className="flex items-center gap-[1vh] mb-[1vh]">
                        <div className="text-[2vh] font-extrabold tracking-wider text-black font-gilroy p-[1vh] rounded-lg flex gap-[0.3vh] bg-transparent select-none">
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
                          className="h-[3.5vh] w-[3.5vh] rounded-lg flex items-center justify-center"
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
                        className="w-full h-[5vh] px-[1.5vh] py-[1vh] bg-white border border-[#bcbec0] rounded-lg text-[1.8vh] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                        placeholder="Enter captcha"
                        required
                      />
                    </div>

                    {/* Login Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full h-[5.5vh] rounded-lg shadow-lg text-[2.2vh] font-bold mt-[1vh]"
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

        {/* Footer */}
        <div className="px-4 sm:px-8 lg:px-20 xl:px-36 pb-4 flex-shrink-0">
          <p className="text-[1.6vh] sm:text-[1.8vh] lg:text-[2vh] font-normal text-black font-gilroy">
            2025, Designed and Developed by Feedback Solutions Inc
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
