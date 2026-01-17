import { motion } from 'framer-motion';
import { Target, Zap, Rocket } from 'lucide-react';
import ScrollFloat from '../ui/ScrollFloat';

const e3Data = [
    {
        title: 'Experience',
        description: 'We provide hands-on experience through real-world projects and events.',
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        gradient: 'from-orange-400 to-amber-500'
    },
    {
        title: 'Educate',
        description: 'Continuous learning through workshops, mentorship, and peer collaboration.',
        icon: <Target className="w-8 h-8 text-blue-400" />,
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Empower',
        description: 'Giving you the platform and resources to lead, create, and inspire others.',
        icon: <Rocket className="w-8 h-8 text-purple-400" />,
        gradient: 'from-purple-500 to-pink-500'
    }
];

const E3Model = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                        containerClassName="mb-4"
                        textClassName="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight"
                    >
                        The E3 Model
                    </ScrollFloat>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Our core philosophy that drives every initiative and empowers every individual at INGLU.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {e3Data.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative overflow-hidden group"
                        >
                            <div className={`absolute top-0 right-0 p-32 bg-gradient-to-br ${item.gradient} opacity-5 blur-2xl rounded-full translate-x-12 -translate-y-12 transition-opacity group-hover:opacity-10`} />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default E3Model;
