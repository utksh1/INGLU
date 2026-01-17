import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const ShopHero = () => {
    return (
        <section className="relative min-h-[60vh] overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-inglu-primary/20 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/15 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            {/* Floating Product Images - Right Side */}
            <div className="absolute right-0 top-0 bottom-0 w-[60%] -translate-x-[8%] pointer-events-none hidden lg:block">
                {/* Row 1 - Top */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="absolute top-8 right-[45%] w-40 h-40"
                >
                    <img
                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400"
                        alt="Featured product"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-4 right-[20%] w-48 h-48"
                >
                    <img
                        src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=400"
                        alt="Featured product"
                        className="w-full h-full object-cover rounded-3xl shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.55 }}
                    className="absolute top-12 right-[2%] w-32 h-32"
                >
                    <img
                        src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=400"
                        alt="Featured product"
                        className="w-full h-full object-cover rounded-xl shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>

                {/* Row 2 - Middle Top */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute top-[32%] right-[50%] w-36 h-36"
                >
                    <img
                        src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=400"
                        alt="Featured product"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.65 }}
                    className="absolute top-[30%] right-[25%] w-44 h-44"
                >
                    <img
                        src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=400"
                        alt="Featured product"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl -rotate-8 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="absolute top-[35%] right-[3%] w-36 h-36"
                >
                    <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400"
                        alt="Featured product"
                        className="w-full h-full object-cover rounded-xl shadow-2xl -rotate-12 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>

                {/* Row 3 - Middle Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.75 }}
                    className="absolute top-[58%] right-[42%] w-32 h-32"
                >
                    <img
                        src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=400"
                        alt="Featured product"
                        className="w-full h-full object-cover rounded-xl shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute top-[60%] right-[18%] w-40 h-40"
                >
                    <img
                        src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400"
                        alt="Featured product"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>

                {/* Row 4 - Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.85 }}
                    className="absolute bottom-8 right-[35%] w-36 h-36"
                >
                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400"
                        alt="Featured product"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl rotate-8 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="absolute bottom-12 right-[8%] w-44 h-44"
                >
                    <img
                        src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=400"
                        alt="Featured product"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl -rotate-10 hover:rotate-0 transition-transform duration-500"
                    />
                </motion.div>
            </div>

            {/* Content - Same container as product grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-inglu-primary/20 to-purple-500/20 border border-white/10 mb-8"
                    >
                        <Sparkles size={16} className="text-inglu-primary" />
                        <span className="text-sm font-medium text-white">New Drop: Winter '26 Collection</span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
                        Wear Your
                        <br />
                        <span className="bg-gradient-to-r from-inglu-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Community
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                        Premium streetwear, exclusive event passes, and creator essentials. Made for the INGLU generation.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => document.getElementById('shop-grid')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-inglu-primary to-purple-500 text-white font-bold text-lg flex items-center gap-2 shadow-lg shadow-inglu-primary/30 hover:shadow-xl hover:shadow-inglu-primary/40 transition-all"
                        >
                            Explore Collection <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all"
                        >
                            View Lookbook
                        </motion.button>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-10 mt-14 pt-8 border-t border-white/10">
                        <div>
                            <p className="text-3xl font-bold text-white">2K+</p>
                            <p className="text-sm text-gray-500">Happy Customers</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">50+</p>
                            <p className="text-sm text-gray-500">Unique Drops</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">4.9★</p>
                            <p className="text-sm text-gray-500">Avg Rating</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ShopHero;
