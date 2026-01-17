import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { careerTestimonials } from '../../data/careersData';

const CareerTestimonials = () => {
    return (
        <section className="py-24 bg-slate-900 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="w-full md:w-1/3">
                        <Quote size={48} className="text-inglu-primary mb-6" />
                        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                            Real Stories from <br />Real People
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Don't just take our word for it. Hear from the people who built their careers with us.
                        </p>
                    </div>

                    <div className="w-full md:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {careerTestimonials.map((story, index) => (
                                <motion.div
                                    key={story.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-950 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors relative"
                                >
                                    <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                                        "{story.quote}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={story.image}
                                            alt={story.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-slate-800"
                                        />
                                        <div>
                                            <h4 className="text-white font-bold">{story.name}</h4>
                                            <p className="text-sm text-gray-500">{story.role}</p>
                                        </div>
                                    </div>

                                    {/* Decoration */}
                                    <div className="absolute top-0 right-0 p-6 opacity-10">
                                        <Quote size={80} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerTestimonials;
