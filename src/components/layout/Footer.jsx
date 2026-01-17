import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-inglu-primary to-inglu-accent bg-clip-text text-transparent">
                            INGLU
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Global Youth Community focused on Experience, Enhancement, and Entertainment.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Education', 'Events', 'Community'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-inglu-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal / More */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-400 hover:text-inglu-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Connect</h4>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Mail size={16} />
                                <span>contact@ingluglobal.in</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400 text-sm">
                                <MapPin size={16} />
                                <span>New Delhi, India</span>
                            </div>
                            <div className="flex space-x-4 pt-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                    <a key={idx} href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} INGLU Global. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
