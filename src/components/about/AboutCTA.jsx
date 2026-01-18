import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const AboutCTA = () => {
    return (
        <section className="bg-[#05050A] pb-32">

            {/* Quote Section */}
            <div className="py-24 text-center max-w-4xl mx-auto px-6 border-t border-white/5">
                <div className="mb-8 flex justify-center text-blue-500">
                    <Sparkles size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Designing the Future</h2>
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                    "Our vision is to build the world's most accessible youth ecosystem — where every student, regardless of background, has the stage to showcase their talent and the support to turn their potential into power."
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-12 rounded-full" />
            </div>

            {/* CTA Section */}
            <div className="max-w-5xl mx-auto px-6 mt-12">
                <div className="text-center space-y-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                        Ready to Start?
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Join 50,000+ others who are rewriting their future with INGLU.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:bg-gray-200 transition-colors"
                        >
                            Become a Member <ArrowRight size={16} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
                        >
                            Explore Programs
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
