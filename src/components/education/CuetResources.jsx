import { motion } from 'framer-motion';
import { FileText, PenTool, Layout, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CuetResources = () => {
    const resources = [
        {
            icon: <FileText size={24} className="text-emerald-400" />,
            title: "Previous Year Questions",
            description: "Practice with actual exam questions to understand pattern and difficulty.",
            link: "/education/cuet-pyqs",
            cta: "View PYQs",
            color: "group-hover:border-emerald-500/30"
        },
        {
            icon: <PenTool size={24} className="text-indigo-400" />,
            title: "Mock Tests",
            description: "Simulate the exam environment with timed practice tests.",
            link: "/education",
            cta: "Coming Soon",
            disabled: true,
            color: "group-hover:border-indigo-500/30"
        },
        {
            icon: <Layout size={24} className="text-amber-400" />,
            title: "Syllabus & Pattern",
            description: "Detailed breakdown of syllabus for all domains and language papers.",
            link: "/education",
            cta: "Coming Soon",
            disabled: true,
            color: "group-hover:border-amber-500/30"
        },
        {
            icon: <Lightbulb size={24} className="text-rose-400" />,
            title: "Preparation Tips",
            description: "Strategies from toppers to optimize your study schedule.",
            link: "/education",
            cta: "Coming Soon",
            disabled: true,
            color: "group-hover:border-rose-500/30"
        }
    ];

    return (
        <section className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Essential Resources</h2>
                        <p className="text-gray-400 max-w-xl">
                            Curated materials to boost your preparation at every stage.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={item.disabled ? '#' : item.link}
                                className={`block h-full bg-[#0F1016] border border-white/5 rounded-3xl p-8 transition-all duration-300 group hover:bg-[#13141c] ${item.color} ${item.disabled ? 'cursor-not-allowed opacity-70' : ''}`}
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div className={`px-4 py-1.5 rounded-full text-xs font-semibold ${item.disabled ? 'bg-white/5 text-gray-500' : 'bg-white/10 text-white'}`}>
                                        {item.disabled ? 'Coming Soon' : 'Available Now'}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    {item.description}
                                </p>

                                <div className={`flex items-center gap-2 font-semibold text-sm ${item.disabled ? 'text-gray-600' : 'text-blue-400 group-hover:translate-x-2 transition-transform'}`}>
                                    {item.cta}
                                    {!item.disabled && <ArrowRight size={16} />}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CuetResources;
