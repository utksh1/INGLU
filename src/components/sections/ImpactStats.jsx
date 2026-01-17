import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Counter = ({ from, to, duration = 2 }) => {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (inView) {
            let startTime;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * (to - from) + from));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [inView, from, to, duration]);

    return <span ref={nodeRef}>{count.toLocaleString()}</span>;
};

const stats = [
    { label: 'Students Educated', value: 50000, suffix: '+' },
    { label: 'Internships Provided', value: 100000, suffix: '+' },
    { label: 'Brands Served', value: 1000, suffix: '+' },
    { label: 'Events Organized', value: 500, suffix: '+' },
];

const ImpactStats = () => {
    return (
        <section className="py-20 bg-inglu-dark relative border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-inglu-primary/30 transition-colors group"
                        >
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-inglu-primary group-hover:to-inglu-accent transition-all duration-300">
                                <Counter from={0} to={stat.value} />{stat.suffix}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base font-medium text-balance">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
