import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Filter, Sparkles } from 'lucide-react';
import ParallaxFloatingElements from '../components/common/ParallaxFloatingElements';

const events = [
    {
        id: 1,
        title: 'Manali Winter Trek',
        category: 'Trip',
        date: 'Dec 24 - Jan 1',
        location: 'Manali, Himanchal',
        image: 'https://images.unsplash.com/photo-1518158003464-aa310ebd690d?auto=format&fit=crop&q=80&w=800',
        description: 'Experience the snow-capped peaks and inclusive bonfire nights with 50+ students.'
    },
    {
        id: 2,
        title: 'Digital Marketing Workshop',
        category: 'Workshop',
        date: 'Jan 15, 2026',
        location: 'Online (Zoom)',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
        description: 'Learn SEO, SEM, and Content Strategy from industry experts.'
    },
    {
        id: 3,
        title: 'BGMI Championship',
        category: 'E-Sports',
        date: 'Feb 10, 2026',
        location: 'Delhi Arena',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
        description: 'Compete for a prize pool of ₹50,000 in the ultimate showdown.'
    },
    {
        id: 4,
        title: 'Global Youth Summit',
        category: 'Event',
        date: 'March 05, 2026',
        location: 'Mumbai',
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800',
        description: 'Networking event with top CEOs and creators from around the globe.'
    },
    {
        id: 5,
        title: 'Jaipur Heritage Tour',
        category: 'Trip',
        date: 'March 20, 2026',
        location: 'Jaipur, Rajasthan',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800',
        description: 'Explore the Pink City with a curated cultural experience.'
    },
    {
        id: 6,
        title: 'Content Creator Bootcamp',
        category: 'Workshop',
        date: 'April 12, 2026',
        location: 'Online',
        image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800',
        description: 'Master the art of storytelling and video editing.'
    }
];

const categories = ['All', 'Trip', 'Workshop', 'Event', 'E-Sports'];

const Events = () => {
    const [filter, setFilter] = useState('All');

    const filteredEvents = filter === 'All'
        ? events
        : events.filter(e => e.category === filter);

    return (
        <div className="min-h-screen bg-[#05050A] relative overflow-hidden">
            <ParallaxFloatingElements />

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
                        alt="Events Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/80 via-[#05050A]/50 to-[#05050A]" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-medium mb-6">
                            <Sparkles size={14} className="text-yellow-400" />
                            <span>Unforgettable Experiences</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Travels</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Explore the world, learn new skills, and compete with the best.
                            Join a community that never stops moving.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                {/* Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium text-sm backdrop-blur-md ${filter === cat
                                ? 'bg-white/10 border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                                : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredEvents.map((event) => (
                            <motion.div
                                layout
                                key={event.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-[#0A0A12] rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/10 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-transparent to-transparent z-10" />
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full text-xs font-bold text-white border border-white/10 shadow-lg">
                                        {event.category}
                                    </div>
                                </div>
                                <div className="p-8 relative z-20 -mt-12">
                                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4 bg-[#0A0A12]/80 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/5">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={12} className="text-blue-400" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-gray-600" />
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={12} className="text-purple-400" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{event.title}</h3>
                                    <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2">
                                        {event.description}
                                    </p>

                                    <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white font-semibold flex items-center justify-center gap-2 group/btn hover:border-white/20">
                                        Register Now <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p>No events found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
