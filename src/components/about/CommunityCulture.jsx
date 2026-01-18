import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const CommunityCulture = () => {
    return (
        <section className="py-32 bg-[#05050A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter leading-none"
                    >
                        More Than A <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Platform</span>
                    </motion.h2>
                    <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
                        We are a family of dreamers, doers, and change-makers from 18+ countries.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[600px] mb-8">
                    {/* Large Image Left */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-[2rem] overflow-hidden h-full group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"
                            alt="Global Connection"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute bottom-8 left-8 z-20">
                            <h3 className="text-2xl font-bold text-white mb-2">Global Connection</h3>
                            <p className="text-gray-300 text-sm">Fostering friendships that span continents.</p>
                        </div>
                    </motion.div>

                    {/* Right Side Stack */}
                    <div className="flex flex-col gap-8 h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative rounded-[2rem] overflow-hidden flex-1 group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80"
                                alt="Shared Moments"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative rounded-[2rem] overflow-hidden flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex flex-col justify-center items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 backdrop-blur-md">
                                <Globe size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">United by Purpose</h3>
                            <p className="text-indigo-100 text-sm">One vision, thousands of voices.</p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CommunityCulture;
