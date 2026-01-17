import { useState } from 'react';
import { Settings, User, Mail, Phone, MapPin, Calendar, Trophy, Users, BookOpen, Briefcase } from 'lucide-react';

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    phone: user?.phone || '+91 999 999 9999',
    bio: user?.bio || 'Passionate member of the INGLU community, focused on growth and development.',
    location: user?.location || 'New Delhi, India',
    joinedDate: user?.joinedDate || 'Jan 2024',
    membershipLevel: user?.membershipLevel || 'Monthly Member',
    achievements: user?.achievements || ['Early Bird Member', 'Event Participant', 'Community Builder'],
    interests: user?.interests || ['Leadership', 'Networking', 'Skill Development']
  });

  const handleSave = () => {
    // Simulate saving profile
    setEditMode(false);
    alert('Profile updated successfully!');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'membership', label: 'Membership', icon: Trophy },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const stats = [
    { label: 'Events Attended', value: '24', icon: Calendar },
    { label: 'Community Points', value: '1,250', icon: Users },
    { label: 'Courses Completed', value: '8', icon: BookOpen },
    { label: 'Projects', value: '3', icon: Briefcase }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-inglu-primary to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {profileData.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-inglu-primary rounded-full flex items-center justify-center text-white text-sm hover:bg-blue-600 transition-colors">
              ✏️
            </button>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white mb-2">{profileData.name}</h1>
            <p className="text-inglu-primary font-medium mb-2">{profileData.membershipLevel}</p>
            <p className="text-gray-400 mb-4">{profileData.bio}</p>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Member since {profileData.joinedDate}
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setEditMode(!editMode)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-colors"
            >
              {editMode ? 'Cancel' : 'Edit Profile'}
            </button>
            {editMode && (
              <button 
                onClick={handleSave}
                className="px-4 py-2 bg-inglu-primary hover:bg-blue-600 rounded-lg text-white transition-colors"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl mb-8">
        <div className="flex border-b border-white/10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 flex items-center gap-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-inglu-primary border-b-2 border-inglu-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Info */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Full Name</label>
                  {editMode ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors"
                    />
                  ) : (
                    <p className="text-white">{profileData.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Email Address</label>
                  {editMode ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors"
                    />
                  ) : (
                    <p className="text-white">{profileData.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Phone Number</label>
                  {editMode ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors"
                    />
                  ) : (
                    <p className="text-white">{profileData.phone}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Location</label>
                  {editMode ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors"
                    />
                  ) : (
                    <p className="text-white flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {profileData.location}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Bio</label>
                  {editMode ? (
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={4}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors resize-none"
                    />
                  ) : (
                    <p className="text-white">{profileData.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Statistics</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Icon className="w-4 h-4 text-inglu-primary mr-2" />
                        <span className="text-gray-400 text-sm">{stat.label}</span>
                      </div>
                      <span className="text-white font-semibold">{stat.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Achievements</h3>
              <div className="space-y-2">
                {profileData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                    {achievement}
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-inglu-primary/20 text-inglu-primary rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'membership' && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Membership Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/20 border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">Current Plan</h4>
              <p className="text-2xl font-bold text-inglu-primary mb-2">{profileData.membershipLevel}</p>
              <p className="text-gray-400 text-sm">Renews on 30 days</p>
            </div>
            
            <div className="bg-black/20 border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                  Access to exclusive events
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                  Priority booking for workshops
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                  Discounts on merchandise
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                  Community networking access
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-semibold text-white mb-4">Upgrade Your Membership</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="p-4 border-2 border-dashed border-white/20 rounded-xl text-center hover:border-inglu-primary transition-colors">
                <Trophy className="w-8 h-8 text-inglu-primary mx-auto mb-2" />
                <p className="text-white font-medium">Quarterly Plan</p>
                <p className="text-gray-400 text-sm">₹149/month</p>
              </button>
              <button className="p-4 border-2 border-dashed border-white/20 rounded-xl text-center hover:border-inglu-primary transition-colors">
                <Trophy className="w-8 h-8 text-inglu-primary mx-auto mb-2" />
                <p className="text-white font-medium">Annual Plan</p>
                <p className="text-gray-400 text-sm">₹499/month</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Account Settings</h3>
          
          <div className="space-y-6">
            <div className="bg-black/20 border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">Privacy Settings</h4>
              <div className="space-y-4">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-3" defaultChecked />
                  <span className="text-gray-400">Make profile public</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-3" defaultChecked />
                  <span className="text-gray-400">Receive notifications</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-gray-400">Share activity with connections</span>
                </label>
              </div>
            </div>
            
            <div className="bg-black/20 border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">Security</h4>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-colors">
                Change Password
              </button>
            </div>
            
            <div className="bg-black/20 border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">Danger Zone</h4>
              <button className="w-full py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-red-400 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;