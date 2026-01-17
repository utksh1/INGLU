import { motion } from 'framer-motion';
import ScrollFloat from '../ui/ScrollFloat';
import { useState } from 'react';
import { BookOpen, TrendingUp, Music } from 'lucide-react';

const pillars = [
    {
        id: 'education',
        title: 'Education',
        subtitle: 'Skill-Based Learning',
        icon: BookOpen,
        description: 'INGLU GLOBAL is focusing on providing skill-based learning for youth to help them grow practically for their future.',
        stats: '500+ Workshops',
        color: 'from-blue-500 to-blue-700'
    },
    {
        id: 'enhancement',
        title: 'Enhancement',
        subtitle: 'Growth & Development',
        icon: TrendingUp,
        description: 'Enhancing the skills of the youth is most crucial part which important for the development of youth.',
        stats: '100k+ Internships',
        color: 'from-purple-500 to-purple-700'
    },
    {
        id: 'entertainment',
        title: 'Entertainment',
        subtitle: 'Events & Fun',
        icon: Music,
        description: 'Holistic development is not possible without proper mixture of entertainment with the work and enhancement.',
        stats: '500+ Events',
        color: 'from-pink-500 to-pink-700'
    }
];

const E3Model = () => {
    const [active, setActive] = useState('enhancement');

    return (
        <section className="py-12 bg-inglu-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-8">
                    <span className="text-inglu-primary font-semibold tracking-wider text-sm uppercase">Our Methodology</span>
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                        containerClassName="mt-2 mb-4"
                        textClassName="text-4xl md:text-5xl font-bold text-white"
                    >
                        The E3 Model
                    </ScrollFloat>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base">
                        A holistic approach to youth development, combining learning, growth, and fun.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 min-h-[320px]">
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
                                <div className="relative h-full p-4 flex flex-col justify-end">
                                    <div className={`absolute top-4 left-4 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md ${isActive ? 'text-white bg-inglu-primary/20' : 'text-gray-400'}`}>
                                        <pillar.icon size={20} />
                                    </div>

                                    <motion.div layout="position" className="z-10">
                                        <h3 className={`text-xl font-bold mb-1 ${isActive ? 'text-white' : 'text-gray-300'}`}>{pillar.title}</h3>
                                        <p className="text-inglu-primary font-medium mb-2 text-sm">{pillar.subtitle}</p>
                                    </motion.div>

                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                        >
                                            <p className="text-gray-300 mb-4 leading-relaxed text-sm max-w-md">
                                                {pillar.description}
                                            </p>
                                            <div className="inline-block px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-base font-bold text-white">
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
