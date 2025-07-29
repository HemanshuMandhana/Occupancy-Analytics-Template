import React, { useState } from 'react';
import { User, Edit2, Eye, EyeOff } from 'lucide-react';

const MyAccount: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [formData, setFormData] = useState({
    userId: 'SU0001',
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'Admin@feedbacksolution',
    contactNumber: '-----'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save the data to your backend
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original values if needed
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    setIsChangingPassword(!isChangingPassword);
    if (!isChangingPassword) {
      // Reset password fields when opening
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setShowPasswords({
        currentPassword: false,
        newPassword: false
      });
    }
  };

  const togglePasswordVisibility = (field: 'currentPassword' | 'newPassword') => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handlePasswordSubmit = () => {
    // Here you would typically handle password change logic
    // Validate passwords match, etc.
    console.log('Password change submitted', passwordData);
    setIsChangingPassword(false);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setShowPasswords({
      currentPassword: false,
      newPassword: false
    });
  };

  return (
    <div className="h-full relative">
      {/* Fixed background layer that covers the full viewport */}
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/0b9933c1-1a2b-48be-a2dd-99bc9eee0647.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content container with responsive padding */}
      <div className="relative z-10 h-full" style={{ 
        padding: 'clamp(10px, 2vw, 36px)',
        paddingTop: 'clamp(20px, 8.7vh, 93.5px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
      }}>
        {/* Responsive container with dynamic height */}
        <div 
          className="rounded-xl shadow-2xl overflow-hidden"
          style={{ 
            backgroundColor: '#253878',
            width: 'clamp(320px, 95vw, 1568px)',
            height: 'auto',
            minHeight: 'clamp(400px, 80vh, 550px)',
            maxWidth: '95vw',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header section inside the container */}
          <div style={{ 
            padding: 'clamp(8px, 1.5vh, 24px) clamp(12px, 2vw, 32px)',
            borderBottom: '1px solid rgba(148, 163, 184, 0.3)',
            flexShrink: 0
          }}>
            <div className="flex items-center justify-between" style={{ gap: 'clamp(8px, 1vh, 16px)' }}>
              <div className="flex items-center" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
                <div className="bg-slate-600 rounded-full flex items-center justify-center" style={{
                  width: 'clamp(24px, 3vw, 64px)',
                  height: 'clamp(24px, 3vw, 64px)'
                }}>
                  <User style={{ 
                    width: 'clamp(12px, 1.5vw, 32px)', 
                    height: 'clamp(12px, 1.5vw, 32px)' 
                  }} className="text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-white" style={{ fontSize: 'clamp(14px, 2vw, 32px)' }}>Account Details</h1>
                  <p className="text-slate-300" style={{ fontSize: 'clamp(10px, 1.2vw, 16px)' }}>My account</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center rounded-lg transition-colors duration-200 flex-shrink-0"
                style={{
                  backgroundColor: '#E0F0E4',
                  color: '#20744A',
                  border: '1px solid #20744A',
                  padding: 'clamp(4px, 0.8vh, 12px) clamp(8px, 1.5vw, 24px)',
                  fontSize: 'clamp(10px, 1.2vw, 16px)',
                  gap: 'clamp(4px, 0.5vw, 8px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#377E36';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#E0F0E4';
                  e.currentTarget.style.color = '#20744A';
                }}
              >
                <Edit2 style={{ width: 'clamp(10px, 1.2vw, 16px)', height: 'clamp(10px, 1.2vw, 16px)' }} />
                <span>{isEditing ? 'Cancel' : 'Edit'}</span>
              </button>
            </div>
          </div>

          {/* Responsive layout - better column distribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-1" style={{ 
            gap: 'clamp(16px, 3vw, 48px)',
            padding: 'clamp(16px, 3vh, 32px) clamp(16px, 3vw, 32px)',
            minHeight: 0
          }}>
            {/* Column 1: Login Details - adjusted width for content */}
            <div className="flex flex-col" style={{ 
              gap: 'clamp(8px, 1.5vh, 16px)',
              minWidth: 'fit-content'
            }}>
              <h2 className="font-semibold text-white flex-shrink-0" style={{ 
                fontSize: 'clamp(12px, 1.5vw, 24px)',
                marginBottom: 'clamp(4px, 1vh, 8px)'
              }}>Login Details</h2>
              
              <div className="flex-shrink-0">
                <label className="block text-slate-300 mb-2" style={{ 
                  fontSize: 'clamp(10px, 1.2vw, 16px)'
                }}>User Id</label>
                <input
                  type="text"
                  value={formData.userId}
                  onChange={(e) => handleInputChange('userId', e.target.value)}
                  disabled={!isEditing}
                  className="w-full rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                  style={{ 
                    backgroundColor: '#253878', 
                    height: 'clamp(28px, 4vh, 46px)',
                    border: '1px solid #FFFFFF',
                    padding: '0 clamp(8px, 1vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 16px)',
                    minWidth: '120px'
                  }}
                />
              </div>
            </div>

            {/* Column 2: Personal Information - spans 2 columns on md screens */}
            <div className="md:col-span-1 lg:col-span-1 flex flex-col" style={{ gap: 'clamp(8px, 1.5vh, 16px)' }}>
              <h2 className="font-semibold text-white flex-shrink-0" style={{ 
                fontSize: 'clamp(12px, 1.5vw, 24px)',
                marginBottom: 'clamp(4px, 1vh, 8px)'
              }}>Personal Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="flex-shrink-0">
                  <label className="block text-slate-300 mb-2" style={{ 
                    fontSize: 'clamp(10px, 1.2vw, 16px)'
                  }}>First name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    disabled={!isEditing}
                    className="w-full rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                    style={{ 
                      backgroundColor: '#253878', 
                      height: 'clamp(28px, 4vh, 46px)',
                      border: '1px solid #FFFFFF',
                      padding: '0 clamp(8px, 1vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 16px)'
                    }}
                  />
                </div>
                
                <div className="flex-shrink-0">
                  <label className="block text-slate-300 mb-2" style={{ 
                    fontSize: 'clamp(10px, 1.2vw, 16px)'
                  }}>Last name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    disabled={!isEditing}
                    className="w-full rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                    style={{ 
                      backgroundColor: '#253878', 
                      height: 'clamp(28px, 4vh, 46px)',
                      border: '1px solid #FFFFFF',
                      padding: '0 clamp(8px, 1vw, 16px)',
                      fontSize: 'clamp(10px, 1.2vw, 16px)'
                    }}
                  />
                </div>
              </div>

              <div className="flex-shrink-0">
                <label className="block text-slate-300 mb-2" style={{ 
                  fontSize: 'clamp(10px, 1.2vw, 16px)'
                }}>Email address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                  className="w-full rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                  style={{ 
                    backgroundColor: '#253878', 
                    height: 'clamp(28px, 4vh, 46px)',
                    border: '1px solid #FFFFFF',
                    padding: '0 clamp(8px, 1vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 16px)'
                  }}
                />
              </div>

              <div className="flex-shrink-0">
                <label className="block text-slate-300 mb-2" style={{ 
                  fontSize: 'clamp(10px, 1.2vw, 16px)'
                }}>Contact number</label>
                <input
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                  disabled={!isEditing}
                  className="w-full rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                  style={{ 
                    backgroundColor: '#253878', 
                    height: 'clamp(28px, 4vh, 46px)',
                    border: '1px solid #FFFFFF',
                    padding: '0 clamp(8px, 1vw, 16px)',
                    fontSize: 'clamp(10px, 1.2vw, 16px)'
                  }}
                />
              </div>
            </div>

            {/* Column 3: Action buttons - better responsive behavior */}
            <div className="md:col-span-2 lg:col-span-1 flex flex-col justify-end" style={{ gap: 'clamp(8px, 1.5vh, 16px)' }}>
              <div className="flex flex-col items-end" style={{ gap: 'clamp(8px, 1.5vh, 16px)' }}>
                {/* Action Buttons (shown when editing) - same width as change password */}
                {isEditing && (
                  <div className="flex flex-col" style={{ 
                    gap: 'clamp(8px, 1.5vh, 16px)',
                    width: 'fit-content',
                    minWidth: '140px'
                  }}>
                    <button
                      onClick={handleSave}
                      className="font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700 whitespace-nowrap"
                      style={{ 
                        height: 'clamp(28px, 4vh, 46px)',
                        backgroundColor: '#E0F0E4',
                        color: '#20744A',
                        border: '1px solid #20744A',
                        padding: '0 clamp(12px, 2vw, 24px)',
                        fontSize: 'clamp(10px, 1.2vw, 16px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#377E36';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#E0F0E4';
                        e.currentTarget.style.color = '#20744A';
                      }}
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancel}
                      className="font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700 whitespace-nowrap"
                      style={{ 
                        height: 'clamp(28px, 4vh, 46px)',
                        backgroundColor: '#E0F0E4',
                        color: '#20744A',
                        border: '1px solid #20744A',
                        padding: '0 clamp(12px, 2vw, 24px)',
                        fontSize: 'clamp(10px, 1.2vw, 16px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#377E36';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#E0F0E4';
                        e.currentTarget.style.color = '#20744A';
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
                
                {/* Change Password Link - consistent width */}
                <button 
                  onClick={handleChangePassword}
                  className="text-red-400 hover:text-red-300 transition-colors duration-200 whitespace-nowrap"
                  style={{ 
                    height: 'clamp(28px, 4vh, 46px)', 
                    lineHeight: 'clamp(28px, 4vh, 46px)',
                    fontSize: 'clamp(10px, 1.2vw, 16px)',
                    width: 'fit-content',
                    minWidth: '140px',
                    textAlign: 'center'
                  }}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Password Change Modal */}
      {isChangingPassword && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleChangePassword}
        >
          <div 
            className="rounded-xl shadow-2xl"
            style={{ 
              backgroundColor: '#253878',
              width: 'clamp(320px, 90vw, 500px)',
              maxHeight: '90vh',
              overflow: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ 
              padding: 'clamp(16px, 3vh, 24px) clamp(20px, 4vw, 32px)',
              borderBottom: '1px solid rgba(148, 163, 184, 0.3)'
            }}>
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-white" style={{ fontSize: 'clamp(16px, 2.5vw, 24px)' }}>
                  Change Password
                </h2>
                <button
                  onClick={handleChangePassword}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                  style={{ fontSize: 'clamp(20px, 3vw, 24px)' }}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ 
              padding: 'clamp(20px, 4vh, 32px) clamp(20px, 4vw, 32px)'
            }}>
              <div className="flex flex-col" style={{ gap: 'clamp(16px, 3vh, 24px)' }}>
                <div>
                  <label className="block text-slate-300 mb-2" style={{ 
                    fontSize: 'clamp(12px, 1.5vw, 16px)'
                  }}>Current Password</label>
                  <div className="relative">
                    <input
                      type={showPasswords.currentPassword ? "text" : "password"}
                      value={passwordData.currentPassword}
                      onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                      className="w-full rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      style={{ 
                        backgroundColor: '#253878', 
                        height: 'clamp(36px, 5vh, 48px)',
                        border: '1px solid #FFFFFF',
                        padding: '0 clamp(12px, 2vw, 16px)',
                        paddingRight: 'clamp(40px, 8vw, 48px)',
                        fontSize: 'clamp(12px, 1.5vw, 16px)'
                      }}
                      placeholder="Enter current password"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('currentPassword')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
                      style={{ 
                        width: 'clamp(16px, 3vw, 20px)', 
                        height: 'clamp(16px, 3vw, 20px)' 
                      }}
                    >
                      {showPasswords.currentPassword ? (
                        <EyeOff style={{ width: '100%', height: '100%' }} />
                      ) : (
                        <Eye style={{ width: '100%', height: '100%' }} />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2" style={{ 
                    fontSize: 'clamp(12px, 1.5vw, 16px)'
                  }}>New Password</label>
                  <div className="relative">
                    <input
                      type={showPasswords.newPassword ? "text" : "password"}
                      value={passwordData.newPassword}
                      onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                      className="w-full rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      style={{ 
                        backgroundColor: '#253878', 
                        height: 'clamp(36px, 5vh, 48px)',
                        border: '1px solid #FFFFFF',
                        padding: '0 clamp(12px, 2vw, 16px)',
                        paddingRight: 'clamp(40px, 8vw, 48px)',
                        fontSize: 'clamp(12px, 1.5vw, 16px)'
                      }}
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('newPassword')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
                      style={{ 
                        width: 'clamp(16px, 3vw, 20px)', 
                        height: 'clamp(16px, 3vw, 20px)' 
                      }}
                    >
                      {showPasswords.newPassword ? (
                        <EyeOff style={{ width: '100%', height: '100%' }} />
                      ) : (
                        <Eye style={{ width: '100%', height: '100%' }} />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2" style={{ 
                    fontSize: 'clamp(12px, 1.5vw, 16px)'
                  }}>Confirm Password</label>
                  <input
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                    className="w-full rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    style={{ 
                      backgroundColor: '#253878', 
                      height: 'clamp(36px, 5vh, 48px)',
                      border: '1px solid #FFFFFF',
                      padding: '0 clamp(12px, 2vw, 16px)',
                      fontSize: 'clamp(12px, 1.5vw, 16px)'
                    }}
                    placeholder="Confirm new password"
                  />
                </div>

                {/* Modal Action Buttons */}
                <div className="flex gap-4 justify-end" style={{ 
                  marginTop: 'clamp(16px, 3vh, 24px)'
                }}>
                  <button
                    onClick={handleChangePassword}
                    className="font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700"
                    style={{ 
                      height: 'clamp(36px, 5vh, 48px)',
                      backgroundColor: '#E0F0E4',
                      color: '#20744A',
                      border: '1px solid #20744A',
                      padding: '0 clamp(16px, 3vw, 24px)',
                      fontSize: 'clamp(12px, 1.5vw, 16px)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#377E36';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#E0F0E4';
                      e.currentTarget.style.color = '#20744A';
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePasswordSubmit}
                    className="font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700"
                    style={{ 
                      height: 'clamp(36px, 5vh, 48px)',
                      backgroundColor: '#E0F0E4',
                      color: '#20744A',
                      border: '1px solid #20744A',
                      padding: '0 clamp(16px, 3vw, 24px)',
                      fontSize: 'clamp(12px, 1.5vw, 16px)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#377E36';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#E0F0E4';
                      e.currentTarget.style.color = '#20744A';
                    }}
                  >
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;