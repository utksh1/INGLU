import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Education', href: '/education' },
        { name: 'Events', href: '/events' },
        { name: 'Community', href: '/community' },
        { name: 'About', href: '/about' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-inglu-dark/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-inglu-primary to-inglu-accent bg-clip-text text-transparent">
                    INGLU
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="px-5 py-2.5 rounded-full bg-inglu-primary hover:bg-blue-600 transition-colors text-white text-sm font-semibold cursor-pointer">
                        Get Involved
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 right-0 bg-inglu-dark border-b border-white/10 p-6 md:hidden flex flex-col space-y-4 shadow-xl"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-300 hover:text-white text-lg font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="w-full py-3 rounded-full bg-inglu-primary hover:bg-blue-600 transition-colors text-white font-semibold cursor-pointer">
                            Get Involved
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
