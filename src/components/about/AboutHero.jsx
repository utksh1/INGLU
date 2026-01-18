import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AboutHero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0A0A0F]">
            {/* Background Ceiling Light Effect */}
            <div className="absolute inset-0 z-0">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* Ceiling lights simulation */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-[#0A0A0F] to-[#0A0A0F]" />
                <div className="absolute top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
            </div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-yellow-300/90 text-xs font-semibold tracking-[0.2em] mb-12 backdrop-blur-md">
                        <Sparkles size={12} fill="currentColor" />
                        EST. 2017 • GLOBAL YOUTH COMMUNITY
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight leading-none">
                        We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">INGLU</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                        More than a community—we are a <span className="text-white font-medium">launchpad for dreams.</span> Connecting 50,000+ students to the opportunities, mentors, and experiences that shape the future.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-600"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-gray-700 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
