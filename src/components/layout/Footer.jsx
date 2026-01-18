import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Youtube, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#0a0a2a] to-[#200d42] border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Empty space instead of brand column */}

                    {/* Quick Link */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Link</h4>
                        <ul className="space-y-2">
                            {['Home', 'About Us', 'Careers', 'Shop', 'Blog', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-400 hover:text-inglu-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Support</h4>
                        <ul className="space-y-2">
                            {['Privacy Policy', 'Term & Condition', 'Disclaimer', 'Support', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-400 hover:text-inglu-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 text-gray-400 text-sm">
                                <Mail size={16} className="mt-1 shrink-0" />
                                <span>info@ingluglobal.in</span>
                            </div>
                            <div className="flex items-start space-x-3 text-gray-400 text-sm">
                                <Phone size={16} className="mt-1 shrink-0" />
                                <span>+91 7827808413</span>
                            </div>
                            <div className="flex items-start space-x-3 text-gray-400 text-sm">
                                <MapPin size={16} className="mt-1 shrink-0" />
                                <span>82, SatyaNiketan, First Floor, New Delhi - 110021</span>
                            </div>

                            <div className="flex space-x-4 pt-4">
                                {[Facebook, Linkedin, Youtube, Instagram].map((Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label={`Visit our ${['Facebook', 'LinkedIn', 'YouTube', 'Instagram'][idx]} page`}
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex justify-center items-center">
                    <p className="text-gray-500 text-sm text-center">
                        © {new Date().getFullYear()} INGLU Global. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
