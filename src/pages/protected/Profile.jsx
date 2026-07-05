import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Check, X, Shield, User, Activity as ActivityIcon, Key, Smartphone, Mail, Phone, Lock, Camera, Trash2, PowerOff, Monitor, Calendar } from 'lucide-react';
import {
  fetchProfile, updateProfile, uploadProfilePicture, deleteProfilePicture,
  changePassword, fetchSessions, revokeSession, revokeOtherSessions, fetchHistory, clearProfileMessages
} from '../../store/profileSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const { data: profile, sessions, history, loading, error, successMessage } = useSelector(state => state.profile);
  
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    role: 'Admin',
  });
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmPopup, setConfirmPopup] = useState({ isOpen: false, title: '', message: '', action: null });
  const fileInputRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchSessions());
    dispatch(fetchHistory());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setProfileData({
        first_name: profile.first_name || '',
        last_name: profile.last_name || '',
        email: profile.email || '',
        phone_number: profile.phone_number || '',
        role: profile.status === 'ACTIVE' ? 'User' : profile.status,
      });
    }
  }, [profile]);

  useEffect(() => {
    if (successMessage || error) {
      const timer = setTimeout(() => {
        dispatch(clearProfileMessages());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, error, dispatch]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setConfirmPopup({
      isOpen: true,
      title: 'Update Profile',
      message: 'Are you sure you want to update your profile details?',
      action: () => {
        dispatch(updateProfile({
          first_name: profileData.first_name,
          last_name: profileData.last_name,
          phone_number: profileData.phone_number
        }));
      }
    });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (passwordData.new !== passwordData.confirm) {
      setErrorMessage('Passwords do not match. Please ensure both passwords are identical.');
      setShowErrorPopup(true);
      return;
    }
    dispatch(changePassword({
      currentPassword: passwordData.current,
      newPassword: passwordData.new
    })).then((res) => {
      if(!res.error) setPasswordData({ current: '', new: '', confirm: '' });
    });
  };
  
  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(uploadProfilePicture(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePicture = (e) => {
    e.stopPropagation();
    setConfirmPopup({
      isOpen: true,
      title: 'Remove Picture',
      message: 'Are you sure you want to remove your profile picture?',
      action: () => dispatch(deleteProfilePicture())
    });
  };

  const handleRevokeSession = (sessionId) => {
    setConfirmPopup({
      isOpen: true,
      title: 'Revoke Session',
      message: 'Are you sure you want to revoke this session?',
      action: () => dispatch(revokeSession(sessionId))
    });
  };

  const handleRevokeAllOther = () => {
    setConfirmPopup({
      isOpen: true,
      title: 'Sign Out All Devices',
      message: 'Are you sure you want to sign out of all other devices?',
      action: () => dispatch(revokeOtherSessions())
    });
  };

  const handleToggleMFA = () => {
    setMfaEnabled(!mfaEnabled);
  };

  return (
    <div className="font-sans animate-in fade-in duration-500 pb-10 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Account Settings</h1>
        <p className="text-slate-500 font-medium text-sm">Manage your profile, security, and preferences</p>
      </div>

      {showErrorPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[24px] shadow-2xl p-6 max-w-sm w-full mx-4 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                <Shield size={24} />
              </div>
              <button 
                onClick={() => setShowErrorPopup(false)}
                className="p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Security Alert</h3>
            <p className="text-sm font-medium text-slate-500 mb-6">{errorMessage}</p>
            <button 
              onClick={() => setShowErrorPopup(false)}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-[16px] text-sm font-bold shadow-md transition-all active:scale-95"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}

      {confirmPopup.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[24px] shadow-2xl p-6 max-w-sm w-full mx-4 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                <Shield size={24} />
              </div>
              <button 
                onClick={() => setConfirmPopup({ ...confirmPopup, isOpen: false })}
                className="p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">{confirmPopup.title}</h3>
            <p className="text-sm font-medium text-slate-500 mb-6">{confirmPopup.message}</p>
            <div className="flex gap-3">
              <button 
                onClick={() => setConfirmPopup({ ...confirmPopup, isOpen: false })}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-[16px] text-sm font-bold transition-all active:scale-95"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  if (confirmPopup.action) confirmPopup.action();
                  setConfirmPopup({ ...confirmPopup, isOpen: false });
                }}
                className="w-full py-3 bg-slate-900 hover:bg-brand-accent text-white rounded-[16px] text-sm font-bold shadow-md transition-all active:scale-95"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-8">
        {successMessage && (
          <div className="px-5 py-4 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-[16px] text-sm font-bold flex items-center gap-3 shadow-sm animate-in slide-in-from-top-2">
            <Check size={18} /> {successMessage}
          </div>
        )}
        {error && (
          <div className="px-5 py-4 bg-rose-50 text-rose-700 border border-rose-200 rounded-[16px] text-sm font-bold flex items-center gap-3 shadow-sm animate-in slide-in-from-top-2">
            <X size={18} /> {error}
          </div>
        )}

        <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
          {[
            { id: 'profile', label: 'Profile Details', icon: User },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'sessions', label: 'Active Sessions', icon: Monitor },
            { id: 'activity', label: 'Activity Log', icon: ActivityIcon }
          ].map(tab => (
            <button 
              key={tab.id}
              className={`px-5 py-2.5 whitespace-nowrap text-sm font-bold rounded-[16px] transition-all flex items-center gap-2 ${
                activeTab === tab.id 
                  ? 'bg-brand-accent/10 text-brand-accent shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={16} /> {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'profile' && (
          <div className="glass-card-vibrant p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 pb-8 border-b border-slate-100">
               <div 
                 className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-md flex items-center justify-center text-slate-400 text-3xl font-black overflow-hidden relative group cursor-pointer shrink-0"
                 onClick={() => fileInputRef.current?.click()}
               >
                  {profile?.profile_picture_data ? (
                    <img src={profile.profile_picture_data} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <span>{(profile?.first_name?.[0] || profile?.username?.[0] || 'U').toUpperCase()}</span>
                  )}
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <Camera size={20} className="text-white mb-1" />
                     <span className="text-[10px] text-white font-bold tracking-wider uppercase">Upload</span>
                  </div>
                  {profile?.profile_picture_data && (
                    <button 
                      onClick={handleDeletePicture}
                      className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 hover:bg-rose-50 text-rose-500 transition-all"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handlePictureUpload} 
                    accept="image/*" 
                    className="hidden" 
                  />
               </div>
               <div>
                  <h3 className="text-xl font-black text-slate-900">{profile?.first_name} {profile?.last_name}</h3>
                  <p className="text-sm font-bold text-slate-500 mt-1">@{profile?.username} • {profileData.role}</p>
               </div>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="first_name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">First Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={profileData.first_name}
                      onChange={handleProfileChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="last_name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={profileData.last_name}
                      onChange={handleProfileChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email (Read Only)</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      disabled
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-[16px] text-sm font-bold text-slate-500 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone_number" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      value={profileData.phone_number}
                      onChange={handleProfileChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="role" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Status</label>
                  <div className="relative">
                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      id="role"
                      value={profileData.role}
                      disabled
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-[16px] text-sm font-bold text-slate-500 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button type="submit" className="px-8 py-3 bg-slate-900 hover:bg-brand-accent text-white rounded-[16px] text-sm font-bold shadow-md transition-all active:scale-95 flex items-center justify-center min-w-[160px]" disabled={loading}>
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="glass-card-vibrant p-8">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-indigo-50 rounded-[12px] flex items-center justify-center text-indigo-500">
                    <Key size={20} />
                 </div>
                 <h3 className="text-lg font-black text-slate-900">Change Password</h3>
              </div>
              <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="password"
                    name="current"
                    placeholder="Current password"
                    value={passwordData.current}
                    onChange={handlePasswordChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="password"
                    name="new"
                    placeholder="New password"
                    value={passwordData.new}
                    onChange={handlePasswordChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="password"
                    name="confirm"
                    placeholder="Confirm new password"
                    value={passwordData.confirm}
                    onChange={handlePasswordChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all placeholder:text-slate-400"
                  />
                </div>
                <button type="submit" className="w-full py-3 bg-slate-900 hover:bg-brand-accent text-white rounded-[16px] text-sm font-bold transition-all shadow-md active:scale-95" disabled={loading}>
                  {loading ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            </div>

            <div className="glass-card-vibrant p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-[12px] flex items-center justify-center text-emerald-500 mt-1">
                     <Smartphone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1">Two-Factor Authentication</h3>
                    <p className="text-sm font-medium text-slate-500">Protect your account with an additional layer of security.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input
                    type="checkbox"
                    checked={mfaEnabled}
                    onChange={handleToggleMFA}
                    className="sr-only peer"
                    disabled={loading}
                  />
                  <div className="w-14 h-7 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sessions' && (
          <div className="glass-card-vibrant p-8">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-1">Active Sessions</h3>
                <p className="text-sm font-medium text-slate-500">Manage devices that are currently logged in to your account.</p>
              </div>
              <button 
                onClick={handleRevokeAllOther}
                disabled={loading || sessions.length <= 1}
                className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-[12px] text-xs font-bold transition-all disabled:opacity-50 flex items-center gap-2"
              >
                <PowerOff size={14} /> Sign out all other sessions
              </button>
            </div>

            <div className="space-y-4">
              {sessions.length === 0 ? (
                <div className="text-center py-8 text-slate-500 font-medium text-sm">No active sessions found.</div>
              ) : (
                sessions.map(session => (
                  <div key={session.id} className="p-5 bg-white rounded-[16px] border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 transition-all hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-[12px] flex items-center justify-center flex-shrink-0">
                        <Monitor size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-slate-900">{session.device_info || 'Unknown Device'}</p>
                          {session.is_current && (
                            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">Current</span>
                          )}
                        </div>
                        <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1">
                          IP: {session.ip_address || 'Unknown'} 
                          {session.created_at && (
                            <> • <Calendar size={12} className="ml-1" /> {new Date(session.created_at).toLocaleString()}</>
                          )}
                        </p>
                      </div>
                    </div>
                    {!session.is_current && (
                      <button 
                        onClick={() => handleRevokeSession(session.id)}
                        disabled={loading}
                        className="sm:ml-auto px-4 py-2 border border-slate-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 rounded-[12px] text-xs font-bold transition-all text-slate-600 flex items-center justify-center"
                      >
                        Revoke
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="glass-card-vibrant p-8">
            <h3 className="text-lg font-black text-slate-900 mb-1">Login History</h3>
            <p className="text-sm font-medium text-slate-500 mb-6">Recent authentication activity across your devices.</p>

            <div className="overflow-x-auto rounded-[16px] border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500">
                  <tr>
                    <th className="px-6 py-4 rounded-tl-[16px]">Status</th>
                    <th className="px-6 py-4">Action</th>
                    <th className="px-6 py-4">Device / IP</th>
                    <th className="px-6 py-4 rounded-tr-[16px]">Date & Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {history.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="px-6 py-8 text-center text-slate-500 font-medium">No activity history found.</td>
                    </tr>
                  ) : (
                    history.map(log => (
                      <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className={`inline-flex items-center justify-center w-8 h-8 rounded-[8px] ${log.status === 'success' ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'}`}>
                            {log.status === 'success' ? <Check size={16} /> : <X size={16} />}
                          </div>
                        </td>
                        <td className="px-6 py-4 font-bold text-slate-900">
                          {log.action}
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-semibold text-slate-700">{log.device}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{log.ip_address}</p>
                        </td>
                        <td className="px-6 py-4 text-slate-600 font-medium">
                          {log.time ? new Date(log.time).toLocaleString() : 'Unknown'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
