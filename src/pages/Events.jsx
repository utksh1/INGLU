import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Filter } from 'lucide-react';

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
        description: ' compete for a prize pool of ₹50,000 in the ultimate showdown.'
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
        <div className="min-h-screen bg-inglu-dark pb-20">
            {/* Header */}
            <div className="relative pt-32 pb-20 bg-slate-900 border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-50%] left-[-20%] w-[70%] h-[70%] bg-inglu-accent/10 rounded-full blur-[100px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Events & Travels</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore the world, learn new skills, and compete with the best.
                        Join our upcoming experiences.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium ${filter === cat
                                    ? 'bg-inglu-primary border-inglu-primary text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredEvents.map((event) => (
                            <motion.div
                                layout
                                key={event.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-inglu-primary/30 transition-all hover:shadow-xl hover:shadow-blue-500/10"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                                        {event.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} className="text-inglu-primary" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} className="text-inglu-primary" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-inglu-primary transition-colors">{event.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                        {event.description}
                                    </p>
                                    <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white font-medium flex items-center justify-center gap-2 group/btn">
                                        Register Now <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
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
