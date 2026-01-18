import { motion } from 'framer-motion';
import CountUp from '../../components/ui/CountUp';

const ImpactStats = () => {
    const stats = [
        { label: "Students Impacted", value: 50000, suffix: "+" },
        { label: "Partner Colleges", value: 100, suffix: "+" },
        { label: "Corporate Partners", value: 50, suffix: "+" },
        { label: "Community Events", value: 200, suffix: "+" },
    ];

    return (
        <section className="py-20 bg-slate-950 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-white">Our Impact</h2>
                        <p className="text-gray-400 mt-2">The numbers behind the movement.</p>
                    </div>
                    <div className="h-px bg-white/10 flex-1 ml-8 hidden md:block" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="relative group">
                            <div className="mb-2 flex items-baseline">
                                <span className="text-4xl md:text-5xl font-bold text-white font-mono tracking-tighter">
                                    <CountUp
                                        to={stat.value}
                                        duration={2}
                                        separator=","
                                        startWhen={true}
                                    />
                                </span>
                                <span className="text-blue-500 text-2xl font-bold ml-1">{stat.suffix}</span>
                            </div>
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
