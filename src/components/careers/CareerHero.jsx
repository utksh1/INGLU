import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CareerHero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image & Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#05050A]/90 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                    alt="Careers"
                    className="w-full h-full object-cover opacity-60"
                />

                {/* Ambient Effects */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none z-20" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-700 pointer-events-none z-20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
                        <Sparkles size={16} />
                        <span>Join the Revolution</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                        Don't Just Work. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            Build Your Legacy.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Join a community of dreamers and doers. Gain real-world experience, mentorship, and the skills you need to lead the future.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center gap-2 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25"
                        >
                            Explore Opportunities <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-white/5 text-white font-semibold text-lg border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Why Work With Us
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CareerHero;
