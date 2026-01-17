import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutInglu = () => {
    return (
        <section className="py-20 bg-inglu-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            What Is <span className="text-inglu-primary">INGLU?</span>
                        </h2>
                        <h3 className="text-xl md:text-2xl text-gray-300 font-semibold mb-6">
                            "FASTEST GROWING GLOBAL YOUTH COMMUNITY"
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            INGLU helps youth in holistic development of experience by working on the
                            <strong className="text-white mx-1">E3 model</strong>
                            which states Experience is a combination of
                            <span className="text-inglu-primary mx-1">Education + Enhancement + Entertainment</span>.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            {['Internship', 'Networking', 'Growth', 'Leadership', 'Unity'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <button className="px-8 py-3 rounded-full bg-inglu-primary hover:bg-blue-600 transition-colors text-white font-semibold flex items-center gap-2 cursor-pointer">
                            Know More <ArrowRight size={18} />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-inglu-dark/80 to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1000"
                            alt="Youth Community"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-8 left-8 z-20">
                            <p className="text-white text-3xl font-bold">100,000+</p>
                            <p className="text-inglu-primary font-medium">Youth Impacted</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutInglu;
