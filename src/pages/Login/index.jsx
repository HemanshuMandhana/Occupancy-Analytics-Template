
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

  const handleLogin = (e) => {
    e.preventDefault();
    if (!adminId.trim()) return alert('Please enter Admin ID');
    if (!password.trim()) return alert('Please enter Password');
    if (captcha !== captchaCode) return alert('Invalid captcha code. Please try again.');

    console.log('Login attempt:', { adminId, password, captcha });
    navigate('/dashboard');
  };

  const handleContactUs = () => {
    alert('Contact support at: support@feedbacksolutions.com');
  };

  const handleCaptchaRefresh = () => {
    generateCaptchaCode();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

      {/* Right Image - Hidden on mobile */}
      <div className="absolute top-0 right-0 z-0 hidden lg:block h-full">
        <img
          src="/images/img_mask_group.png"
          alt="Theater"
          className="h-full lg:w-[45vw] object-cover"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-screen">
        {/* Header - Desktop Logo */}
        <div className="pt-4 px-4 sm:px-8 lg:px-20 xl:px-36 flex-shrink-0 hidden md:block">
          <img
            src="/images/img_logo1.png"
            alt="Logo"
            className="h-[5vh] sm:h-[6vh] lg:h-[7vh] w-auto object-contain"
          />
        </div>

        {/* Mobile Header - Logo Symbol + Company Name - moved down */}
        <div className="pt-12 px-4 flex-shrink-0 block md:hidden text-center">
          <div className="flex flex-col items-center gap-3">
            <img
              src="/lovable-uploads/55439f1a-28d6-4fd6-b8e0-51da1e05e591.png"
              alt="Logo Symbol"
              className="h-14 w-14 object-contain"
            />
            <h2 className="text-2xl font-extrabold text-[#30427f] font-serif tracking-wide">
              Paramount Pictures
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-20 xl:px-36 py-2">
          <div className="w-full max-w-7xl">
            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-2 gap-8 items-center h-full">
              {/* Form Section */}
              <div className="space-y-12">
                <div>
                  <h1 className="text-[5.5vw] xl:text-[5vw] 2xl:text-[4.5vw] font-extrabold text-[#30427f] leading-[0.85] mb-6 font-gilroy">
                    Login
                  </h1>
                  <h2 className="text-[3vw] xl:text-[2.5vw] 2xl:text-[2.2vw] font-bold text-black leading-[0.9] font-gilroy">
                    Occupancy Analytics
                  </h2>
                </div>

                <div className="w-full max-w-[28vw] min-w-[320px] bg-[#fafdfe] rounded-lg shadow-lg p-[2.5vh]">
                  <form onSubmit={handleLogin} className="space-y-[1.8vh]">
                    {/* Admin ID */}
                    <div>
                      <label className="block text-[1.8vh] font-normal text-black mb-[0.8vh] font-gilroy">
                        Admin ID
                      </label>
                      <input
                        type="text"
                        value={adminId}
                        onChange={(e) => setAdminId(e.target.value)}
                        className="w-full h-[4.5vh] px-[1.2vh] py-[0.8vh] bg-white border border-[#bcbec0] rounded-lg text-[1.6vh] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                        placeholder="ex: sagar patil"
                        required
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-[1.8vh] font-normal text-black mb-[0.8vh] font-gilroy">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full h-[4.5vh] px-[1.2vh] py-[0.8vh] bg-white border border-[#bcbec0] rounded-lg text-[1.6vh] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                          placeholder="Password"
                          required
                        />
                        <button 
                          type="button" 
                          onClick={togglePasswordVisibility}
                          className="absolute right-[1.2vh] top-1/2 transform -translate-y-1/2"
                        >
                          <img src="/images/img_clarityeyehideline.svg" alt="Toggle" className="w-[1.8vh] h-[1.8vh]" />
                        </button>
                      </div>
                    </div>

                    {/* Captcha */}
                    <div>
                      <label className="block text-[1.8vh] font-normal text-black mb-[0.8vh] font-gilroy">
                        Add Captcha
                      </label>
                      <div className="flex items-center gap-[0.8vh] mb-[0.8vh]">
                        <div className="text-[1.8vh] font-extrabold tracking-wider text-black font-gilroy p-[0.8vh] rounded-lg flex gap-[0.2vh] bg-transparent select-none">
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
                        className="w-full h-[4.5vh] px-[1.2vh] py-[0.8vh] bg-white border border-[#bcbec0] rounded-lg text-[1.6vh] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                        placeholder="Enter captcha"
                        required
                      />
                    </div>

                    {/* Login Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full h-[5vh] rounded-lg shadow-lg text-[2vh] font-bold mt-[0.8vh]"
                    >
                      Login
                    </Button>

                    <div className="text-center mt-[0.6vh]">
                      <span className="text-[1.4vh] font-normal text-black font-gilroy">Trouble? </span>
                      <button
                        type="button"
                        onClick={handleContactUs}
                        className="text-[1.4vh] font-semibold text-black underline font-gilroy hover:text-[#30427f]"
                      >
                        Contact us
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Spacer */}
              <div />
            </div>

            {/* Mobile & Tablet Layout */}
            <div className="lg:hidden flex flex-col items-center justify-center space-y-8 max-w-md mx-auto">
              {/* Title with increased gap */}
              <div className="text-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#30427f] leading-tight mb-6 font-gilroy">
                  Login
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight font-gilroy">
                  Occupancy Analytics
                </h2>
              </div>

              {/* Form */}
              <div className="w-full bg-[#fafdfe] rounded-lg shadow-lg p-5">
                <form onSubmit={handleLogin} className="space-y-3">
                  {/* Admin ID */}
                  <div>
                    <label className="block text-sm font-normal text-black mb-1 font-gilroy">
                      Admin ID
                    </label>
                    <input
                      type="text"
                      value={adminId}
                      onChange={(e) => setAdminId(e.target.value)}
                      className="w-full h-10 px-3 py-2 bg-white border border-[#bcbec0] rounded-lg text-sm text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                      placeholder="ex: sagar patil"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-normal text-black mb-1 font-gilroy">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-10 px-3 py-2 bg-white border border-[#bcbec0] rounded-lg text-sm text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                        placeholder="Password"
                        required
                      />
                      <button 
                        type="button" 
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        <img src="/images/img_clarityeyehideline.svg" alt="Toggle" className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Captcha */}
                  <div>
                    <label className="block text-sm font-normal text-black mb-1 font-gilroy">
                      Add Captcha
                    </label>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-base font-extrabold tracking-wider text-black font-gilroy p-2 rounded-lg flex gap-1 bg-transparent select-none">
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
                        className="h-8 w-8 rounded-lg flex items-center justify-center"
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
                      className="w-full h-10 px-3 py-2 bg-white border border-[#bcbec0] rounded-lg text-sm text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
                      placeholder="Enter captcha"
                      required
                    />
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full h-10 rounded-lg shadow-lg text-sm font-bold mt-3"
                  >
                    Login
                  </Button>

                  <div className="text-center mt-2">
                    <span className="text-xs font-normal text-black font-gilroy">Trouble? </span>
                    <button
                      type="button"
                      onClick={handleContactUs}
                      className="text-xs font-semibold text-black underline font-gilroy hover:text-[#30427f]"
                    >
                      Contact us
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <div className="px-4 sm:px-8 lg:px-20 xl:px-36 pb-2 flex-shrink-0">
          <p className="text-[10px] sm:text-xs font-normal text-black font-gilroy text-center lg:text-left">
            2025, Designed and Developed by Feedback Solutions Inc
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
