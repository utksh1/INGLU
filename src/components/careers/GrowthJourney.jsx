import { motion } from 'framer-motion';

const steps = [
    {
        id: '01',
        title: 'Apply & Connect',
        description: 'Submit your profile. No lengthy forms—just show us who you are and what you\'ve done.'
    },
    {
        id: '02',
        title: 'Learn & Adapt',
        description: 'Undergo an intensive onboarding. Learn the tools, the culture, and the mission.'
    },
    {
        id: '03',
        title: 'Work & Lead',
        description: 'Take ownership of projects. Make mistakes, fix them, and ship real value.'
    },
    {
        id: '04',
        title: 'Grow & Evolve',
        description: 'Get promoted, lead teams, or use your experience to launch your own venture.'
    }
];

const GrowthJourney = () => {
    return (
        <section className="py-24 bg-slate-950 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Your Journey <br />
                            <span className="text-gray-500">From Day 1</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We view your time here as a crucial chapter in your professional story. Whether you stay for 6 months or 6 years, you'll leave better than you arrived.
                        </p>
                        <button className="text-white border-b border-inglu-primary pb-1 hover:text-inglu-primary transition-colors font-medium">
                            Read Success Stories
                        </button>
                    </div>

                    <div className="w-full md:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden sm:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative z-10 bg-slate-900 border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-colors"
                                >
                                    <div className="text-5xl font-bold text-white/5 mb-4 absolute top-4 right-4">{step.id}</div>
                                    <h3 className="text-xl font-bold text-white mb-3 relative">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed relative">
                                        {step.description}
                                    </p>
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
