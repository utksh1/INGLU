import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const CareerHero = ({ scrollToJobs }) => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <Sparkles size={16} className="text-yellow-400" />
                        <span className="text-sm font-medium tracking-wide text-gray-200 uppercase">We are Hiring</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
                >
                    Don't Just Watch <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        The Revolution.
                    </span>
                    <br />
                    <span className="text-white">Build It.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Join a global team of dreamers and doers. We give you the platform, the mentorship, and the freedom to turn "what if" into "what is."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={scrollToJobs}
                        className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10 w-full sm:w-auto"
                    >
                        Explore Opportunities
                    </button>
                    <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm w-full sm:w-auto">
                        Why Join Us?
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default CareerHero;
