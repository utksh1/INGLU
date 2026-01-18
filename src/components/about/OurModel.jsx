import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Music } from 'lucide-react';

const OurModel = () => {
    const pillars = [
        {
            id: 'edu',
            title: "Education",
            subtitle: "Foundation",
            icon: BookOpen,
            desc: "Skill-based learning that goes beyond textbooks.",
            color: "from-blue-500 to-cyan-400"
        },
        {
            id: 'enh',
            title: "Enhancement",
            subtitle: "Growth",
            icon: TrendingUp,
            desc: "Mentorship and training to refine potential.",
            color: "from-purple-500 to-violet-400"
        },
        {
            id: 'ent',
            title: "Entertainment",
            subtitle: "Connection",
            icon: Music,
            desc: "Events that build community and culture.",
            color: "from-pink-500 to-rose-400"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
                    >
                        Our Methodology
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">E3 Model</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We believe in a balanced approach to development. It's not just about studying; it's about growing and enjoying the journey.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="flex-1 min-h-[300px] relative rounded-3xl p-8 bg-slate-800/40 border border-white/5 overflow-hidden group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="relative z-10 h-full flex flex-col items-center text-center">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} p-[1px] mb-6`}>
                                    <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                                        <pillar.icon className="text-white" size={32} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">{pillar.subtitle}</span>

                                <p className="text-gray-400 leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurModel;
