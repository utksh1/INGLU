import { motion } from 'framer-motion';
import { Heart, Globe, Zap, Users } from 'lucide-react';
import ScrollFloat from '../ui/ScrollFloat';

const benefits = [
    {
        title: "Global Community",
        description: "Connect with like-minded individuals from universities worldwide.",
        icon: <Globe className="w-6 h-6 text-blue-400" />
    },
    {
        title: "Real Impact",
        description: "Work on projects that actually make a difference in society.",
        icon: <Heart className="w-6 h-6 text-rose-400" />
    },
    {
        title: "Fast Growth",
        description: "Accelerate your career with mentorship and hands-on experience.",
        icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
        title: "Inclusive Culture",
        description: "A diverse environment where every voice matters and is heard.",
        icon: <Users className="w-6 h-6 text-green-400" />
    }
];

const WhyJoin = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            containerClassName="mb-6"
                            textClassName="text-4xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Why Join INGLU?
                        </ScrollFloat>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 mb-8 leading-relaxed"
                        >
                            We are not just an organization; we are a movement. Joining INGLU means becoming part of a legacy of change-makers, innovators, and leaders.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (idx * 0.1) }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                                >
                                    <div className="mb-4 bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-white font-bold text-lg mb-2">{benefit.title}</h4>
                                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square lg:aspect-[4/5]"
                        >
                            <div className="absolute inset-0 bg-slate-900/50" />
                            {/* Placeholder for an image or graphic */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/20 font-bold text-9xl rotate-[-45deg] select-none">INGLU</span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
                                <p className="text-white font-medium italic">"The best way to predict the future is to create it."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyJoin;
