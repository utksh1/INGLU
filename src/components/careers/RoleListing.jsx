import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, MapPin, Clock, ArrowRight, Search, Briefcase } from 'lucide-react';
import { careerRoles } from '../../data/careersData';
import ApplicationModal from './ApplicationModal';

const RoleListing = () => {
    const [filterDomain, setFilterDomain] = useState('All');
    const [filterType, setFilterType] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRole, setSelectedRole] = useState(null); // For modal

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const filteredRoles = careerRoles.filter(role => {
        const matchesDomain = filterDomain === 'All' || role.domain === filterDomain;
        const matchesType = filterType === 'All' || role.type === filterType;
        const matchesSearch = role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            role.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesDomain && matchesType && matchesSearch;
    });

    const domains = ['All', ...new Set(careerRoles.map(r => r.domain))];
    const types = ['All', ...new Set(careerRoles.map(r => r.type))];

    return (
        <section id="roles" className="py-24 bg-slate-950 px-6 min-h-[800px]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-2">Open Roles</h2>
                        <p className="text-gray-400">Find where you fit in.</p>
                    </div>

                    {/* Filters & Search */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search roles..."
                                className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-inglu-primary focus:bg-white/10 transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                            <select
                                value={filterDomain}
                                onChange={(e) => setFilterDomain(e.target.value)}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary cursor-pointer appearance-none min-w-[140px]"
                            >
                                {domains.map(d => <option key={d} value={d} className="bg-slate-900">{d} Roles</option>)}
                            </select>

                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary cursor-pointer appearance-none min-w-[140px]"
                            >
                                {types.map(t => <option key={t} value={t} className="bg-slate-900">{t}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Listing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {isLoading ? (
                            // Skeleton Loader
                            [...Array(6)].map((_, i) => (
                                <motion.div
                                    key={`skeleton-${i}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-64 bg-white/5 rounded-3xl animate-pulse border border-white/5"
                                />
                            ))
                        ) : filteredRoles.length > 0 ? (
                            filteredRoles.map((role) => (
                                <motion.div
                                    layout
                                    key={role.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-slate-900/50 border border-white/10 rounded-3xl p-6 hover:border-white/20 hover:bg-slate-900 transition-all group flex flex-col h-full"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                                            {role.domain}
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                                            <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-inglu-primary transition-colors">{role.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                                        <div className="flex items-center gap-1.5">
                                            <Briefcase size={14} />
                                            {role.type}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={14} />
                                            {role.location}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={14} />
                                            {role.duration}
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {role.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {role.tags.map(tag => (
                                            <span key={tag} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setSelectedRole(role)}
                                        className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white hover:text-slate-950 transition-all"
                                    >
                                        Apply Now
                                    </button>
                                </motion.div>
                            ))
                        ) : (
                            // Empty State
                            <div className="col-span-full py-20 text-center">
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-500">
                                    <Search size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">No roles found</h3>
                                <p className="text-gray-400">Try adjusting your filters or check back later.</p>
                                <button
                                    onClick={() => { setFilterDomain('All'); setFilterType('All'); setSearchQuery('') }}
                                    className="mt-6 px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <ApplicationModal
                isOpen={!!selectedRole}
                onClose={() => setSelectedRole(null)}
                roleTitle={selectedRole?.title}
            />
        </section>
    );
};

export default RoleListing;
