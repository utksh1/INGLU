import { motion } from 'framer-motion';
import { BookMarked, Users, Trophy, Rocket } from 'lucide-react';

const WhatWeDo = () => {
    const items = [
        {
            icon: BookMarked,
            title: "Education & Skilling",
            desc: "Bridging the gap between theory and practice with industry-relevant workshops.",
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            icon: Users,
            title: "Community Growth",
            desc: "A safe space for students to connect, collaborate, and grow with like-minded peers.",
            color: "text-green-400",
            bg: "bg-green-400/10"
        },
        {
            icon: Trophy,
            title: "Events & Competitions",
            desc: "National-level hackathons, fests, and challenges to test and prove your mettle.",
            color: "text-yellow-400",
            bg: "bg-yellow-400/10"
        },
        {
            icon: Rocket,
            title: "Career Launchpad",
            desc: " internships and placement opportunities with top global organizations.",
            color: "text-purple-400",
            bg: "bg-purple-400/10"
        }
    ];

    return (
        <section className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-purple-400 font-medium tracking-wide text-sm uppercase">What We Offer</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
                            Everything you need to <br />
                            <span className="text-gray-500">succeed.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
