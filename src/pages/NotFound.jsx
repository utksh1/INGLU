import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ParallaxFloatingElements from '../components/common/ParallaxFloatingElements';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen text-white relative overflow-hidden flex items-center justify-center">
            <ParallaxFloatingElements />

            {/* Background enhancement */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative"
                >
                    <h1 className="text-[10rem] md:text-[14rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500/20 to-transparent leading-none select-none">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <p className="text-2xl md:text-3xl font-bold text-white mb-2">Lost in Space?</p>
                        <p className="text-gray-400 text-sm md:text-base">The page you're looking for has drifted away.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2 text-gray-300 font-medium w-full sm:w-auto justify-center"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>

                    <Link
                        to="/"
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2 text-white font-medium w-full sm:w-auto justify-center shadow-lg shadow-blue-900/20"
                    >
                        <Home size={18} />
                        Back Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
