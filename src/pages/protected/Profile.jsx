import React, { useState } from 'react';
import { Check, X, Shield, User, Activity as ActivityIcon, Key, Smartphone, Mail, Phone, Lock, Camera } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    avatar: null,
    role: 'Admin',
  });
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const [activityLogs] = useState([
    { id: 1, action: 'Login', device: 'Chrome - Windows', time: '2024-02-08 10:30:00', status: 'success' },
    { id: 2, action: 'Login', device: 'Safari - macOS', time: '2024-02-07 15:45:00', status: 'success' },
    { id: 3, action: 'Failed Login', device: 'Unknown Device', time: '2024-02-06 22:15:00', status: 'failed' },
    { id: 4, action: 'Password Changed', device: 'Chrome - Windows', time: '2024-02-05 09:00:00', status: 'success' },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      console.log('Updating profile:', profileData);
      setMessage('Profile updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    
    if (passwordData.new !== passwordData.confirm) {
      setMessage('Passwords do not match');
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      console.log('Changing password');
      setMessage('Password changed successfully!');
      setPasswordData({ current: '', new: '', confirm: '' });
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleMFA = async () => {
    setLoading(true);
    
    try {
      // Simulate API call
      setMfaEnabled(!mfaEnabled);
      setMessage(`MFA ${!mfaEnabled ? 'enabled' : 'disabled'} successfully!`);
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans animate-in fade-in duration-500 pb-10 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Account Settings</h1>
        <p className="text-slate-500 font-medium text-sm">Manage your profile, security, and preferences</p>
      </div>

      <div className="space-y-8">
        {message && (
          <div className="px-5 py-4 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-[16px] text-sm font-bold flex items-center gap-3 shadow-sm animate-in slide-in-from-top-2">
            <Check size={18} /> {message}
          </div>
        )}

        <div className="flex gap-2 border-b border-slate-200 pb-2">
          {[
            { id: 'profile', label: 'Profile Details', icon: User },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'activity', label: 'Activity Log', icon: ActivityIcon }
          ].map(tab => (
            <button 
              key={tab.id}
              className={`px-5 py-2.5 text-sm font-bold rounded-[16px] transition-all flex items-center gap-2 ${
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
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100">
               <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-md flex items-center justify-center text-slate-400 text-3xl font-black overflow-hidden relative group cursor-pointer">
                  {profileData.avatar ? (
                    <img src={profileData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <span>{profileData.name.charAt(0)}</span>
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <Camera size={24} className="text-white" />
                  </div>
               </div>
               <div>
                  <h3 className="text-xl font-black text-slate-900">{profileData.name}</h3>
                  <p className="text-sm font-bold text-slate-500 mt-1">{profileData.role}</p>
               </div>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={profileData.name}
                      onChange={handleProfileChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="role" className="block text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Role (Read Only)</label>
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
              {mfaEnabled && (
                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-[16px] flex items-center gap-3">
                   <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                     <Check size={16} />
                   </div>
                   <p className="text-sm font-bold text-emerald-700">MFA is active and protecting your account.</p>
                </div>
              )}
            </div>

            <div className="glass-card-vibrant p-8">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 bg-amber-50 rounded-[12px] flex items-center justify-center text-amber-500">
                    <Shield size={20} />
                 </div>
                 <div>
                    <h3 className="text-lg font-black text-slate-900">Developer API Keys</h3>
                    <p className="text-sm font-medium text-slate-500">Manage keys for external integration.</p>
                 </div>
              </div>
              <button className="px-5 py-2.5 mt-2 border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 rounded-[16px] text-sm font-bold transition-all active:scale-95 flex items-center gap-2">
                 <Key size={16} /> Generate New API Key
              </button>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="glass-card-vibrant p-8">
            <h3 className="text-lg font-black text-slate-900 mb-1">Login History</h3>
            <p className="text-sm font-medium text-slate-500 mb-6">Recent authentication activity across your devices.</p>

            <div className="space-y-3">
              {activityLogs.map(log => (
                <div key={log.id} className="p-4 bg-white rounded-[16px] border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 transition-all hover:shadow-md">
                  <div className="flex items-center gap-4">
                     <div className={`w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0 ${log.status === 'success' ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'}`}>
                        {log.status === 'success' ? <Check size={20} /> : <X size={20} />}
                     </div>
                     <div>
                       <p className="text-sm font-bold text-slate-900">{log.action}</p>
                       <p className="text-xs font-medium text-slate-500 mt-0.5 flex items-center gap-1"><Smartphone size={12}/> {log.device}</p>
                     </div>
                  </div>
                  <div className="sm:text-right pl-14 sm:pl-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{log.time}</p>
                    <span className={`inline-flex px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${log.status === 'success' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                      {log.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
