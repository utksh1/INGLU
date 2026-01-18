import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">


            {/* Background Image & Effects */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
                <img
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070"
                    alt="Background"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-inglu-primary/20 rounded-full blur-[120px] animate-pulse z-20" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-inglu-accent/20 rounded-full blur-[120px] animate-pulse delay-1000 z-20" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-inglu-primary text-sm font-medium mb-6 backdrop-blur-sm border border-white/5">
                        Join 50,000+ Students Worldwide
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Educate. Enhance. <br />
                        <span className="bg-gradient-to-r from-inglu-primary to-inglu-accent bg-clip-text text-transparent">
                            Enjoy.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        The holistic youth ecosystem designed to help you learn, grow, and connect through real-world opportunities and entertainment.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 rounded-full bg-inglu-primary hover:bg-blue-600 transition-colors text-white font-semibold text-lg flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20">
                            Start Your Journey <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white font-semibold text-lg cursor-pointer backdrop-blur-sm">
                            Explore Programs
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
