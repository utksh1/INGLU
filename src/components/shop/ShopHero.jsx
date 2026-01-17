import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const ShopHero = () => {
    return (
        <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax-like effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
                    alt="INGLU Shop Lifestyle"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inglu-dark via-inglu-dark/60 to-transparent" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-inglu-primary/20 border border-inglu-primary/30 text-inglu-primary text-sm font-semibold tracking-wider mb-6">
                        OFFICIAL MERCH STORE
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter shadow-xl">
                        Wear Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-inglu-primary to-purple-500">Identity</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Exclusive apparel, event passes, and creator gear designed for the next generation.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('shop-grid').scrollIntoView({ behavior: 'smooth' })}
                            className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-200 transition-all transform hover:scale-105"
                        >
                            Explore Collection
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent mx-auto mb-2" />
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
};

export default ShopHero;
