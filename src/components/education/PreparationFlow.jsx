import { motion } from 'framer-motion';

const PreparationFlow = () => {
    const steps = [
        {
            number: "01",
            title: "Understand",
            description: "Know the syllabus, exam pattern, and eligibility criteria for your target universities."
        },
        {
            number: "02",
            title: "Practice",
            description: "Solve chapter-wise problems and previous year questions to build conceptual clarity."
        },
        {
            number: "03",
            title: "Analyze",
            description: "Identify weak areas through mock tests and performance analysis."
        },
        {
            number: "04",
            title: "Improve",
            description: "Refine your strategy and focus on strengthening weak topics before the exam."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Path to Success</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A structured approach to guide you from confusion to confidence.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-[#05050A] border border-white/10 rounded-2xl p-8 relative group hover:border-blue-500/30 transition-colors"
                            >
                                <div className="text-6xl font-bold text-white/5 mb-6 group-hover:text-blue-500/10 transition-colors">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreparationFlow;
