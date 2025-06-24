
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = ({ 
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  className = '',
  showPasswordToggle = false,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-[17px] font-normal leading-[21px] text-black mb-1 font-gilroy">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          disabled={disabled}
          required={required}
          className="w-full h-[48px] px-[19px] py-[16px] bg-white border border-gray-200 rounded-[9px] text-[13px] font-normal leading-[16px] text-[#7b7b7b] font-gilroy focus:outline-none focus:border-[#30427f] focus:ring-1 focus:ring-[#30427f]"
          {...props}
        />
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-[16px] top-1/2 transform -translate-y-1/2 w-[15px] h-[15px] focus:outline-none"
          >
            <img
              src="/images/img_clarityeyehideline.svg"
              alt={showPassword ? "Hide password" : "Show password"}
              className="w-full h-full rounded-[7px]"
            />
          </button>
        )}
      </div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  showPasswordToggle: PropTypes.bool,
};

export default InputField;
