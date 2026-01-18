import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const GrowthJourney = () => {
    const steps = [
        {
            id: "01",
            title: "Apply & Connect",
            desc: "Submit your profile. No lengthy forms—just show us who you are and what you've done."
        },
        {
            id: "02",
            title: "Learn & Adapt",
            desc: "Undergo an intensive onboarding. Learn the tools, the culture, and the mission."
        },
        {
            id: "03",
            title: "Work & Lead",
            desc: "Take ownership of projects. Make mistakes, fix them, and ship real value."
        },
        {
            id: "04",
            title: "Grow & Evolve",
            desc: "Get promoted, lead teams, or use your experience to launch your own venture."
        }
    ];

    return (
        <section className="py-24 bg-[#05050A]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16">

                    {/* Left Side: Content */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            Your Journey <br />
                            <span className="text-gray-500">From Day 1</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base"
                        >
                            We view your time here as a crucial chapter in your professional story. Whether you stay for 6 months or 6 years, you'll leave better than you arrived.
                        </motion.p>

                        <motion.a
                            href="#stories"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white border-b border-white pb-1 w-fit flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                        >
                            Read Success Stories <ArrowRight size={14} />
                        </motion.a>
                    </div>

                    {/* Right Side: Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[#0F1016] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors relative group overflow-hidden"
                                >
                                    <div className="absolute top-4 right-6 text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                                        {step.id}
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-3 pt-6">{step.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GrowthJourney;
