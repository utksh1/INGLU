import { motion } from 'framer-motion';
import { GraduationCap, Globe, Users } from 'lucide-react';

const WhatIsCuet = () => {
    const features = [
        {
            icon: <Globe size={24} className="text-blue-400" />,
            title: "One Exam, Many Doors",
            description: "A single gateway to 250+ universities across India, replacing multiple entrance tests."
        },
        {
            icon: <Users size={24} className="text-purple-400" />,
            title: "Level Playing Field",
            description: "Assess students on potential, not just class 12th marks. Everyone gets a fair shot."
        },
        {
            icon: <GraduationCap size={24} className="text-pink-400" />,
            title: "Holistic Assessment",
            description: "Tests aptitude, domain knowledge, and language skills for a comprehensive profile."
        }
    ];

    return (
        <section className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What is CUET?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        The Common University Entrance Test (CUET) is your all-access pass to India's top central universities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-[#0F1016] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIsCuet;
