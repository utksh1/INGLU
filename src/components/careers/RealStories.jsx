import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const stories = [
    {
        quote: "INGLU didn't just give me a job; they gave me a playground to break things and learn. I shipped code that 10k users saw on Day 1.",
        name: "Aarav Sharma",
        role: "Former Tech Intern",
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
        quote: "From a campus ambassador to leading a team of 15. The growth curve here is vertical if you have the hunger.",
        name: "Priya Patel",
        role: "Marketing Lead",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
        quote: "I built my entire portfolio here. Real projects, creative freedom, and mentors who actually care about your career.",
        name: "David Chen",
        role: "Design Volunteer",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
];

const RealStories = () => {
    return (
        <section id="stories" className="py-32 bg-[#05050A]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left Side: Header */}
                    <div className="lg:w-1/3 pt-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-transprent border-2 border-blue-500/30 p-3 rounded-2xl w-fit mb-8"
                        >
                            <Quote size={32} className="text-blue-500 fill-blue-500" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            Real Stories from <br />
                            Real People
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg leading-relaxed"
                        >
                            Don't just take our word for it. Hear from the people who built their careers with us.
                        </motion.p>
                    </div>

                    {/* Right Side: Grid */}
                    <div className="lg:w-2/3">
                        <div className="grid md:grid-cols-2 gap-6">
                            {stories.map((story, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-8 rounded-3xl bg-[#090910] border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300 ${index === 1 ? 'md:translate-y-12' : ''}`}
                                >
                                    {/* Background Quote Watermark */}
                                    <div className="absolute top-6 right-8 opacity-5">
                                        <Quote size={80} fill="currentColor" />
                                    </div>

                                    <p className="text-gray-300 text-lg leading-relaxed mb-8 italic relative z-10">
                                        "{story.quote}"
                                    </p>

                                    <div className="flex items-center gap-4 relative z-10">
                                        <img
                                            src={story.img}
                                            alt={story.name}
                                            className="w-12 h-12 rounded-full object-cover border border-white/10"
                                        />
                                        <div>
                                            <h4 className="text-white font-bold text-sm">{story.name}</h4>
                                            <p className="text-gray-500 text-xs">{story.role}</p>
                                        </div>
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

export default RealStories;
