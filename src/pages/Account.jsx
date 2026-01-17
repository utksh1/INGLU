import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoginForm from '../components/ui/LoginForm';
import Profile from '../components/ui/Profile';
import { User, Lock, Shield, Bell, HelpCircle } from 'lucide-react';

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Mock user data
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 999 999 9999',
    bio: 'Passionate member of the INGLU community, focused on growth and development.',
    location: 'New Delhi, India',
    joinedDate: 'Jan 2024',
    membershipLevel: 'Monthly Member',
    achievements: ['Early Bird Member', 'Event Participant', 'Community Builder'],
    interests: ['Leadership', 'Networking', 'Skill Development']
  };

  useEffect(() => {
    // Check if user is logged in (mock implementation)
    const storedUser = localStorage.getItem('inglu-user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setTimeout(() => {
          setCurrentUser(parsedUser);
          setIsLoggedIn(true);
        }, 0);
      } catch {
        console.log('No valid user session found');
      }
    }
  }, []);

  const handleLogin = async (credentials) => {
    // Simulate login process
    console.log('Login attempt with:', credentials);
    
    // Mock successful login
    const user = {
      ...mockUser,
      name: credentials.name || 'John Doe',
      email: credentials.email
    };
    
    localStorage.setItem('inglu-user', JSON.stringify(user));
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('inglu-user');
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: User },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'membership', label: 'Membership', icon: Shield },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'help', label: 'Help Center', icon: HelpCircle }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 py-16">
        <div className="container mx-auto px-6">
          <LoginForm 
            onLogin={handleLogin} 
            onForgotPassword={() => alert('Password recovery functionality would go here')}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20">
      {/* Header */}
      <header className="bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-inglu-primary rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">Account Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sticky top-8">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-inglu-primary to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  {currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
                <h3 className="text-lg font-semibold text-white">{currentUser.name}</h3>
                <p className="text-inglu-primary text-sm">{currentUser.membershipLevel}</p>
              </div>

              <nav className="space-y-2">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-inglu-primary/20 text-inglu-primary border border-inglu-primary/30'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === 'dashboard' && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Welcome back, {currentUser.name.split(' ')[0]}!</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-inglu-primary/20 to-blue-600/20 border border-inglu-primary/30 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-2">Membership Status</h3>
                      <p className="text-inglu-primary font-bold text-xl">{currentUser.membershipLevel}</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-2">Events Attended</h3>
                      <p className="text-purple-400 font-bold text-xl">24</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-2">Community Points</h3>
                      <p className="text-green-400 font-bold text-xl">1,250</p>
                    </div>
                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                        <div className="w-2 h-2 bg-inglu-primary rounded-full"></div>
                        <div>
                          <p className="text-white">Joined INGLU Community</p>
                          <p className="text-gray-400 text-sm">Jan 15, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div>
                          <p className="text-white">Attended Leadership Workshop</p>
                          <p className="text-gray-400 text-sm">Jan 20, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="text-white">Completed Skill Development Course</p>
                          <p className="text-gray-400 text-sm">Jan 25, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'profile' && (
                <Profile user={currentUser} />
              )}

              {activeSection === 'membership' && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Membership Management</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className={`border-2 rounded-2xl p-6 ${
                      currentUser.membershipLevel === 'Monthly Member' 
                        ? 'border-inglu-primary bg-inglu-primary/10' 
                        : 'border-white/10 bg-white/5'
                    }`}>
                      <h3 className="text-lg font-semibold text-white mb-2">Monthly Plan</h3>
                      <p className="text-2xl font-bold text-inglu-primary mb-4">₹49</p>
                      <ul className="space-y-2 text-sm text-gray-400 mb-6">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                          Access to exclusive events
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                          Priority booking
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                          10% discount on merchandise
                        </li>
                      </ul>
                      <button className={`w-full py-3 rounded-lg font-medium ${
                        currentUser.membershipLevel === 'Monthly Member' 
                          ? 'bg-inglu-primary text-white' 
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}>
                        {currentUser.membershipLevel === 'Monthly Member' ? 'Current Plan' : 'Select Plan'}
                      </button>
                    </div>

                    <div className={`border-2 rounded-2xl p-6 ${
                      currentUser.membershipLevel === 'Quarterly Member' 
                        ? 'border-inglu-primary bg-inglu-primary/10' 
                        : 'border-white/10 bg-white/5'
                    }`}>
                      <div className="bg-inglu-primary text-white text-xs px-2 py-1 rounded-full inline-block mb-4">
                        POPULAR
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Quarterly Plan</h3>
                      <p className="text-2xl font-bold text-inglu-primary mb-4">₹149</p>
                      <ul className="space-y-2 text-sm text-gray-400 mb-6">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                          All Monthly benefits
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                          VIP access to major events
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                          Free merchandise worth ₹500
                        </li>
                      </ul>
                      <button className={`w-full py-3 rounded-lg font-medium ${
                        currentUser.membershipLevel === 'Quarterly Member' 
                          ? 'bg-inglu-primary text-white' 
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}>
                        {currentUser.membershipLevel === 'Quarterly Member' ? 'Current Plan' : 'Select Plan'}
                      </button>
                    </div>

                    <div className={`border-2 rounded-2xl p-6 ${
                      currentUser.membershipLevel === 'Annual Member' 
                        ? 'border-inglu-primary bg-inglu-primary/10' 
                        : 'border-white/10 bg-white/5'
                    }`}>
                      <h3 className="text-lg font-semibold text-white mb-2">Annual Plan</h3>
                      <p className="text-2xl font-bold text-inglu-primary mb-4">₹499</p>
                      <ul className="space-y-2 text-sm text-gray-400 mb-6">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                          All Quarterly benefits
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                          Lifetime community access
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-inglu-primary rounded-full mr-3"></div>
                          Merchandise bundle worth ₹2000
                        </li>
                      </ul>
                      <button className={`w-full py-3 rounded-lg font-medium ${
                        currentUser.membershipLevel === 'Annual Member' 
                          ? 'bg-inglu-primary text-white' 
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}>
                        {currentUser.membershipLevel === 'Annual Member' ? 'Current Plan' : 'Select Plan'}
                      </button>
                    </div>
                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-white font-bold">VC</span>
                        </div>
                        <div>
                          <p className="text-white">•••• •••• •••• 4242</p>
                          <p className="text-gray-400 text-sm">Expires 12/25</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'security' && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Change Password</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Current Password</label>
                          <input
                            type="password"
                            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors"
                            placeholder="Enter current password"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">New Password</label>
                          <input
                            type="password"
                            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors"
                            placeholder="Enter new password"
                          />
                        </div>
                      </div>
                      <button className="mt-4 px-6 py-3 bg-inglu-primary hover:bg-blue-600 text-white rounded-lg transition-colors">
                        Update Password
                      </button>
                    </div>

                    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">Two-factor auth</p>
                          <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-inglu-primary"></div>
                        </label>
                      </div>
                    </div>

                    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Login History</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div>
                            <p className="text-white">Today, 10:30 AM</p>
                            <p className="text-gray-400 text-sm">New York, USA</p>
                          </div>
                          <span className="text-green-400 text-sm">Current</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div>
                            <p className="text-white">Yesterday, 2:15 PM</p>
                            <p className="text-gray-400 text-sm">New Delhi, India</p>
                          </div>
                          <span className="text-gray-400 text-sm">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'notifications' && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Notification Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        {[
                          { label: 'Event Updates', description: 'Get notified about upcoming events', checked: true },
                          { label: 'Promotional Offers', description: 'Receive special offers and discounts', checked: true },
                          { label: 'Community News', description: 'Stay updated with community news', checked: false },
                          { label: 'Weekly Digest', description: 'Weekly summary of activities', checked: true }
                        ].map((item, index) => (
                          <label key={index} className="flex items-start cursor-pointer">
                            <input type="checkbox" defaultChecked={item.checked} className="mt-1 mr-3" />
                            <div>
                              <p className="text-white">{item.label}</p>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Push Notifications</h3>
                      <div className="space-y-4">
                        {[
                          { label: 'New Messages', description: 'Get notified when someone messages you', checked: true },
                          { label: 'Event Reminders', description: 'Reminders before events start', checked: true },
                          { label: 'Friend Requests', description: 'Notifications for friend requests', checked: true }
                        ].map((item, index) => (
                          <label key={index} className="flex items-start cursor-pointer">
                            <input type="checkbox" defaultChecked={item.checked} className="mt-1 mr-3" />
                            <div>
                              <p className="text-white">{item.label}</p>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'help' && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Help Center</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Frequently Asked Questions</h3>
                      <div className="space-y-3">
                        <details className="group">
                          <summary className="cursor-pointer text-white flex justify-between items-center">
                            How do I upgrade my membership?
                            <span className="ml-2">+</span>
                          </summary>
                          <p className="text-gray-400 mt-2 text-sm">You can upgrade your membership from the Membership section in your account dashboard.</p>
                        </details>
                        <details className="group">
                          <summary className="cursor-pointer text-white flex justify-between items-center">
                            How do I reset my password?
                            <span className="ml-2">+</span>
                          </summary>
                          <p className="text-gray-400 mt-2 text-sm">Go to Security settings and click on "Change Password" to update your password.</p>
                        </details>
                        <details className="group">
                          <summary className="cursor-pointer text-white flex justify-between items-center">
                            Where can I find my event tickets?
                            <span className="ml-2">+</span>
                          </summary>
                          <p className="text-gray-400 mt-2 text-sm">Your event tickets can be found in the Events section of your account.</p>
                        </details>
                      </div>
                    </div>

                    <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Contact Support</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-white font-medium">Email Support</p>
                          <p className="text-gray-400 text-sm">support@ingluglobal.in</p>
                        </div>
                        <div>
                          <p className="text-white font-medium">Live Chat</p>
                          <button className="mt-1 px-4 py-2 bg-inglu-primary hover:bg-blue-600 text-white rounded-lg text-sm transition-colors">
                            Start Chat
                          </button>
                        </div>
                        <div>
                          <p className="text-white font-medium">Emergency Support</p>
                          <p className="text-gray-400 text-sm">+91 999 046 1299</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;