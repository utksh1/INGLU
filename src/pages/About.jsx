import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Heart, Sparkles, Users, Zap, Target, Rocket } from 'lucide-react';
import E3Model from '../components/sections/E3Model';

import DetailedSegments from '../components/sections/DetailedSegments';
import ScrollFloat from '../components/ui/ScrollFloat';

const About = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-inglu-primary/30">

            {/* 1. Hero — Identity First */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-slate-950/80 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-20" />
                    <img
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000"
                        alt="Youth connecting"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-30 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors duration-300">
                            <Sparkles size={16} className="text-yellow-400" />
                            <span className="text-sm font-medium tracking-wide text-gray-300">EST. 2017 • GLOBAL YOUTH COMMUNITY</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
                            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">INGLU</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            More than a community—we are a <span className="text-white font-medium">launchpad for dreams</span>.
                            Connecting 50,000+ students to the opportunities, mentors, and experiences that shape the future.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest text-gray-500">Scroll to Explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-inglu-primary to-transparent" />
                </motion.div>
            </section>

            {/* 2. The Problem We Solve */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                                The Gap Between <br />
                                <span className="text-gray-500">Education</span> & <span className="text-white">Experience</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                Traditional academics provide the theory, but the real world demands more.
                                Students today face a disconnect—navigating the leap from campus to career
                                without the practical skills, network, or guidance needed to thrive.
                            </p>
                            <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                                <div className="h-px flex-1 bg-white/10" />
                                <span>THE CHALLENGE</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl opacity-50" />
                            <div className="relative bg-slate-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition-colors duration-500">
                                <div className="w-12 h-12 bg-inglu-primary/20 rounded-xl flex items-center justify-center text-inglu-primary mb-6">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">The INGLU Response</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    We bridge that gap. By combining <span className="text-white font-semibold">skill-based learning</span> with <span className="text-white font-semibold">real-world internships</span> and <span className="text-white font-semibold">community events</span>,
                                    we create an ecosystem where growth is inevitable. We don't just prepare you for the future; we help you build it today.
                                </p>
                                <ul className="space-y-3">
                                    {['Practical Experience', 'Mentorship Network', 'Holistic Growth'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-inglu-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. The Solution: Our Model */}
            <E3Model />



            {/* 5. What We Do (Segments) */}
            <DetailedSegments />

            {/* 6. Community & Culture */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <ScrollFloat
                            containerClassName="mb-4"
                            textClassName="text-4xl md:text-5xl font-bold text-white"
                        >
                            More Than A Platform
                        </ScrollFloat>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We are a family of dreamers, doers, and change-makers from 18+ countries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px] md:h-[500px]">
                        {/* Featured Image - Large */}
                        <motion.div
                            className="md:col-span-8 h-full rounded-3xl overflow-hidden relative group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200"
                                alt="Community gathering"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold text-white mb-2">Global Connection</h3>
                                <p className="text-gray-300">Fostering friendships that span continents.</p>
                            </div>
                        </motion.div>

                        {/* Side Images - Stack */}
                        <div className="md:col-span-4 flex flex-col gap-6 h-full">
                            <motion.div
                                className="flex-1 rounded-3xl overflow-hidden relative group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
                                    alt="Collaboration"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
                            </motion.div>
                            <div className="flex-1 bg-gradient-to-br from-inglu-primary to-purple-600 rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                                <Globe size={48} className="text-white mb-4 relative z-10" />
                                <h3 className="text-xl font-bold text-white relative z-10">United by Purpose</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Vision for the Future */}
            <section className="py-24 bg-white/5 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Target size={48} className="mx-auto text-inglu-primary mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Designing the Future
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12">
                            "Our vision is to build the world's most accessible youth ecosystem — where every student, regardless of background, has the stage to showcase their talent and the support to turn their potential into power."
                        </p>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* 8. Call to Action */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black pointer-events-none" />
                <div className="absolute w-[500px] h-[500px] bg-inglu-primary/20 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Ready to Start?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
                        Join 50,000+ others who are rewriting their future with INGLU.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
                        >
                            Become a Member <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-colors w-full sm:w-auto cursor-pointer"
                        >
                            Explore Programs
                        </motion.button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
