import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Home as HomeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const links = [
        { name: 'Home', href: '/', icon: <HomeIcon size={18} /> },
        {
            name: 'Education',
            href: '/education',
            dropdown: [
                { name: 'CUET PYQs', href: '/education/cuet-pyqs' },
                { name: 'Events', href: '/events' }
            ]
        },
        { name: 'Membership', href: '/membership' },
        { name: 'Shop', href: '/shop' },
        { name: 'Careers', href: '/careers' },
        { name: 'About Us', href: '/about' },
    ];

    return (
        <>
            {/* Logo - Top Left Corner */}
            <Link to="/" className="fixed top-6 left-6 z-50 transition-transform hover:scale-105 bg-transparent">
                <img src="/logo.png" draggable="false" alt="INGLU Logo" className="h-16 w-auto object-contain" />
            </Link>

            {/* Nav Capsule */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-fit max-w-[95vw] rounded-full bg-inglu-dark/60 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300">
                <div className="px-4 md:px-8 h-16 flex items-center justify-between md:justify-center">

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center justify-center space-x-8 w-full">
                        {links.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.dropdown ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setActiveDropdown(link.name)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1 py-4">
                                            {link.name} <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <AnimatePresence>
                                            {activeDropdown === link.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48"
                                                >
                                                    <div className="bg-inglu-dark/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl p-2 flex flex-col gap-1">
                                                        {link.dropdown.map((subLink) => (
                                                            <Link
                                                                key={subLink.name}
                                                                to={subLink.href}
                                                                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-center"
                                                            >
                                                                {subLink.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
                                    >
                                        {link.icon && link.icon}
                                        <span>{link.name}</span>
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* My Account Button */}
                        <Link to="/account" className="pl-4 border-l border-white/10 flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                            <User size={18} />
                            <span>My Account</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Right side of capsule */}
                    <div className="md:hidden flex items-center justify-between w-full">
                        <span className="text-sm font-medium text-gray-400">Menu</span>
                        <button
                            className="text-white p-1"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-4 mx-2 rounded-2xl bg-inglu-dark/95 backdrop-blur-xl border border-white/10 p-6 md:hidden flex flex-col space-y-2 shadow-2xl overflow-y-auto max-h-[80vh]"
                        >
                            {links.map((link) => (
                                <div key={link.name}>
                                    {link.dropdown ? (
                                        <div className="space-y-2">
                                            <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-2 pt-2">{link.name}</div>
                                            <div className="pl-4 border-l-2 border-white/5 space-y-1">
                                                {link.dropdown.map(subLink => (
                                                    <Link
                                                        key={subLink.name}
                                                        to={subLink.href}
                                                        className="block text-gray-300 hover:text-white text-base font-medium p-2 hover:bg-white/5 rounded-lg transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="flex items-center gap-3 text-gray-300 hover:text-white text-lg font-medium p-3 hover:bg-white/5 rounded-lg transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.icon}
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="h-px bg-white/10 my-2"></div>
                            <Link
                                to="/account"
                                className="flex items-center gap-3 text-gray-300 hover:text-white text-lg font-medium p-3 hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <User size={20} />
                                My Account
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
