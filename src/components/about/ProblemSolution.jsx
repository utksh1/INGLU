import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ProblemSolution = () => {
    return (
        <section className="py-24 bg-[#05050A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* The Problem */}
                    <div className="space-y-8 relative">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            The Gap Between <br />
                            <span className="text-gray-500">Education</span> & Experience
                        </h2>
                        <div className="h-0.5 w-24 bg-gray-800" />
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Traditional academics provide the theory, but the real world demands more. Students today face a disconnect—navigating the leap from campus to career without the practical skills, network, or guidance needed to thrive.
                        </p>
                        <div className="pt-8">
                            <span className="text-xs font-semibold tracking-widest text-white/20 uppercase">The Challenge</span>
                        </div>
                    </div>

                    {/* The INGLU Response (Card) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-b from-blue-600/50 to-purple-600/20 rounded-3xl blur opacity-30" />

                        <div className="relative bg-[#0F1021] border border-blue-500/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-8">
                                <Sparkles size={24} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">
                                The INGLU Response
                            </h3>

                            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                                We bridge that gap. By combining <span className="text-white font-semibold">skill-based learning</span> with <span className="text-white font-semibold">real-world internships</span> and <span className="text-white font-semibold">community events</span>, we create an ecosystem where growth is inevitable. We don't just prepare you for the future; we help you build it today.
                            </p>

                            <ul className="space-y-3">
                                {[
                                    "Practical Experience",
                                    "Mentorship Network",
                                    "Holistic Growth"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
