import CountUp from '../ui/CountUp';
import ScrollFloat from '../ui/ScrollFloat';
import { motion } from 'framer-motion';

const stats = [
    {
        value: 100000,
        label: 'Youth Impacted',
        separator: ','
    },
    {
        value: 18,
        label: 'Countries'
    },
    {
        value: 500,
        label: 'Events Curated'
    },
    {
        value: 1000,
        label: 'Collaborations',
        separator: ','
    },
];

const ImpactStats = () => {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    containerClassName="mb-4"
                    textClassName="text-4xl md:text-5xl font-bold text-white"
                >
                    The Impact We've Made
                </ScrollFloat>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-5xl md:text-7xl font-bold mb-3">
                                <CountUp
                                    from={0}
                                    to={stat.value}
                                    separator={stat.separator || ''}
                                    direction="up"
                                    duration={2}
                                    className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                                />
                                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">+</span>
                            </div>
                            <p className="text-gray-400 text-lg font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
