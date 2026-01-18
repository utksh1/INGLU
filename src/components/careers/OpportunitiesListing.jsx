import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Clock, Briefcase } from 'lucide-react';

const OpportunitiesListing = () => {
    const [filter, setFilter] = useState('All');

    // Mock Data
    const roles = [
        {
            id: 1,
            title: "Public Relations Intern",
            department: "Marketing",
            type: "Internship",
            location: "Remote",
            duration: "2 Months",
            stipend: "₹7,500/mo"
        },
        {
            id: 2,
            title: "Event Management Trainee",
            department: "Operations",
            type: "Internship",
            location: "On-site (Delhi)",
            duration: "3 Months",
            stipend: "₹6,000/mo"
        },
        {
            id: 3,
            title: "Social Media Manager",
            department: "Marketing",
            type: "Part-time",
            location: "Remote",
            duration: "6 Months",
            stipend: "₹10,000/mo"
        },
        {
            id: 4,
            title: "Campus Ambassador",
            department: "Community",
            type: "Volunteer",
            location: "Remote",
            duration: "Flexible",
            stipend: "Performance Based"
        },
        {
            id: 5,
            title: "Web Developer",
            department: "Tech",
            type: "Internship",
            location: "Remote",
            duration: "3 Months",
            stipend: "₹8,000/mo"
        },
        {
            id: 6,
            title: "Content Writer",
            department: "Creative",
            type: "Internship",
            location: "Remote",
            duration: "2 Months",
            stipend: "₹5,000/mo"
        }
    ];

    const categories = ['All', 'Marketing', 'Tech', 'Operations', 'Creative', 'Community'];

    const filteredRoles = filter === 'All'
        ? roles
        : roles.filter(role => role.department === filter);

    return (
        <section className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header & Filter */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Open Roles</h2>
                        <p className="text-gray-400">Find the perfect fit for your skills.</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredRoles.map((role) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={role.id}
                                className="group p-6 rounded-2xl bg-slate-900 border border-white/10 hover:border-blue-500/50 hover:bg-slate-800 transition-all cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
                                        {role.department}
                                    </span>
                                    {role.type === "Internship" && (
                                        <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold border border-purple-500/20">
                                            {role.type}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {role.title}
                                </h3>

                                <div className="space-y-3 text-sm text-gray-400 mb-6">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} /> {role.location}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} /> {role.duration}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Briefcase size={16} /> {role.stipend}
                                    </div>
                                </div>

                                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors group-hover:bg-blue-600 group-hover:border-blue-600">
                                    View Details
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredRoles.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No open positions in this category right now.</p>
                        <button
                            onClick={() => setFilter('All')}
                            className="mt-4 text-blue-400 hover:underline"
                        >
                            View all roles
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};

export default OpportunitiesListing;
