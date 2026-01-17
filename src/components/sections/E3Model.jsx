import { motion } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, TrendingUp, Music } from 'lucide-react';

const pillars = [
    {
        id: 'education',
        title: 'Experience',
        subtitle: 'Education & Skills',
        icon: BookOpen,
        description: 'Master future-ready skills through workshops, tech courses, and hands-on learning designed to bridge the gap between academia and industry.',
        stats: '500+ Workshops',
        color: 'from-blue-500 to-blue-700'
    },
    {
        id: 'enhancement',
        title: 'Enhancement',
        subtitle: 'Growth & Exposure',
        icon: TrendingUp,
        description: 'Gain real-world exposure through internships, networking events, and soft-skills training to launch your professional career.',
        stats: '100k+ Internships',
        color: 'from-purple-500 to-purple-700'
    },
    {
        id: 'entertainment',
        title: 'Entertainment',
        subtitle: 'Events & Culture',
        icon: Music,
        description: 'Immerse yourself in unforgettable events, trips, e-sports tournaments, and a thriving creator community.',
        stats: '500+ Events',
        color: 'from-pink-500 to-pink-700'
    }
];

const E3Model = () => {
    const [active, setActive] = useState('enhancement');

    return (
        <section className="py-24 bg-inglu-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-inglu-primary font-semibold tracking-wider text-sm uppercase">Our Methodology</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">The E3 Model</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A holistic approach to youth development, combining learning, growth, and fun.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 min-h-[500px]">
                    {pillars.map((pillar) => {
                        const isActive = active === pillar.id;
                        return (
                            <motion.div
                                key={pillar.id}
                                layout
                                onClick={() => setActive(pillar.id)}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out border border-white/10 ${isActive ? 'md:flex-[3] bg-slate-900/50' : 'md:flex-[1] bg-slate-900/20 hover:bg-slate-900/40'} flex-1`}
                            >
                                {/* Background Gradient */}
                                {isActive && (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-10 transition-opacity duration-500`} />
                                )}

                                {/* Content */}
                                <div className="relative h-full p-8 flex flex-col justify-end">
                                    <div className={`absolute top-8 left-8 p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md ${isActive ? 'text-white bg-inglu-primary/20' : 'text-gray-400'}`}>
                                        <pillar.icon size={28} />
                                    </div>

                                    <motion.div layout="position" className="z-10">
                                        <h3 className={`text-3xl font-bold mb-2 ${isActive ? 'text-white' : 'text-gray-300'}`}>{pillar.title}</h3>
                                        <p className="text-inglu-primary font-medium mb-4 text-lg">{pillar.subtitle}</p>
                                    </motion.div>

                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                        >
                                            <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-xl">
                                                {pillar.description}
                                            </p>
                                            <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-2xl font-bold text-white">
                                                {pillar.stats}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
export default E3Model;
