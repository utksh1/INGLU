import { motion } from 'framer-motion';
import { Globe, Heart, Zap, Users } from 'lucide-react';

const WhyJoin = () => {
    const features = [
        {
            icon: Globe,
            title: "Global Community",
            desc: "Connect with like-minded individuals from universities worldwide.",
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            icon: Heart,
            title: "Real Impact",
            desc: "Work on projects that actually make a difference in society.",
            color: "text-rose-400",
            bg: "bg-rose-400/10"
        },
        {
            icon: Zap,
            title: "Fast Growth",
            desc: "Accelerate your career with mentorship and hands-on experience.",
            color: "text-amber-400",
            bg: "bg-amber-400/10"
        },
        {
            icon: Users,
            title: "Inclusive Culture",
            desc: "A diverse environment where every voice matters and is heard.",
            color: "text-green-400",
            bg: "bg-green-400/10"
        }
    ];

    return (
        <section className="py-24 bg-[#05050A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
                        >
                            Why Join <br />
                            <span className="text-white">INGLU?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg mb-12 max-w-xl"
                        >
                            We are not just an organization; we are a movement. Joining INGLU means becoming part of a legacy of change-makers, innovators, and leaders.
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="p-6 rounded-2xl bg-[#0F1016] border border-white/5 hover:border-white/10 transition-colors"
                                >
                                    <div className={`w-10 h-10 rounded-lg ${feature.bg} ${feature.color} flex items-center justify-center mb-4`}>
                                        <feature.icon size={20} />
                                    </div>
                                    <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Large Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full bg-[#0A0A12] rounded-[3rem] border border-white/5 p-8 flex flex-col justify-end overflow-hidden group"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none z-0" />

                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-[#0A0A12]/80 z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070"
                                alt="Team"
                                className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
                            />
                        </div>

                        {/* Tilted Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] opacity-10 select-none pointer-events-none">
                            <span className="text-[12rem] font-bold text-white whitespace-nowrap">INGLU</span>
                        </div>

                        <div className="relative z-10">
                            <p className="text-white text-sm italic opacity-80 max-w-xs">
                                "The best way to predict the future is to create it."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyJoin;
