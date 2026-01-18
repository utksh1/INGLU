import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

const MembershipHero = () => {
    return (
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-[#05050A] overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/80 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1529156069893-8b6db43e7472?q=80&w=2070"
                    alt="Community"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-10" />

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-xs font-medium mb-8 backdrop-blur-sm">
                        <Zap size={12} fill="currentColor" />
                        <span className="text-gray-300">Fastest Growing Youth Community</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 tracking-tighter">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">REVOLUTION</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Your gateway to the biggest student ecosystem. Unlocking <br className="hidden md:block" />
                        <span className="text-white font-medium">Career Growth</span>, <span className="text-white font-medium">Community</span>, and <span className="text-white font-medium">Global Opportunities</span>.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('join-form').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm tracking-wide flex items-center gap-2 hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            Join Membership <ArrowRight size={16} />
                        </motion.button>
                        <span className="text-gray-500 text-xs font-medium tracking-wide">Starting at ₹49/month</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MembershipHero;
