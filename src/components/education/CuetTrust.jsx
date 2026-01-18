import { motion } from 'framer-motion';

const CuetTrust = () => {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-[3rem] border border-white/10 p-12 md:p-20 text-center overflow-hidden relative">

                    {/* Background blob */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Join a Community of Learners
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-12">
                            You're not alone in this journey. Thousands of students rely on INGLU for accurate resources and guidance.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                { number: "15k+", label: "Students" },
                                { number: "500+", label: "Resources" },
                                { number: "50+", label: "Universities" },
                                { number: "24/7", label: "Community" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CuetTrust;
