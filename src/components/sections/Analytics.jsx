import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const Analytics = () => {
    const stats = [
        {
            icon: <Users className="w-8 h-8" />,
            label: 'Youth Impacted',
            value: '100,000+',
            description: 'Active youth community members'
        },
        {
            icon: <Globe className="w-8 h-8" />,
            label: 'Countries',
            value: '18+',
            description: 'Global presence across nations'
        },
        {
            icon: <Award className="w-8 h-8" />,
            label: 'Events Curated',
            value: '500+',
            description: 'Successful events organized'
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            label: 'Collaborations',
            value: '1,000+',
            description: 'Brand partnerships established'
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">The Impact We've Made</h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-3 rounded-full bg-inglu-primary/20">
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-300 text-sm text-center">{stat.label}</p>
                            <p className="text-gray-400 text-xs text-center mt-2">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Analytics;
