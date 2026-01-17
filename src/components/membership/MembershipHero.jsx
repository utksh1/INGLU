import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Users } from 'lucide-react';

const MembershipHero = () => {
    const scrollToExplore = () => {
        // Can be adjusted to scroll to benefits or form
        // Assuming there is an element with id 'join-form' or similar down the page
        const element = document.getElementById('join-form');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Mesh */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(2,6,23,1)_100%)]" />

                {/* Floating Shapes */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full blur-[100px]"
                />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="flex flex-col items-center text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/90 shadow-lg shadow-purple-500/10 hover:bg-white/10 transition-colors cursor-default">
                            <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                            Fastest Growing Youth Community
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.9]"
                    >
                        THE <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
                            REVOLUTION
                        </span>
                    </motion.h1>

                    {/* Value Proposition */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        Your gateway to the biggest student ecosystem.
                        Unlocking <span className="text-white font-medium">Career Growth</span>,
                        <span className="text-white font-medium"> Community</span>, and
                        <span className="text-white font-medium"> Global Opportunities</span>.
                    </motion.p>

                    {/* CTA Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <button
                            onClick={scrollToExplore}
                            className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                        >
                            <span className="flex items-center gap-2 relative z-10">
                                Join Membership
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>

                        <p className="text-sm font-medium text-gray-500">
                            Starting at <span className="text-white">₹49/month</span>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
        </section>
    );
};

export default MembershipHero;
