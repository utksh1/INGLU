import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const FutureVision = () => {
    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden flex items-center justify-center">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-white/5 border border-white/10 text-yellow-200">
                        <Sparkles size={24} />
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 tracking-tight leading-[1.1]">
                        We aim to impact <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            10 Million Lives
                        </span> by 2030.
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto">
                        This is more than an organization. It's a movement to redefine what young people are capable of achieving when given the right platform.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FutureVision;
