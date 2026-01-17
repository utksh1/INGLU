import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { categories, sortOptions } from '../../data/shopData';

const FilterBar = ({ selectedCategory, setSelectedCategory, sortOption, setSortOption }) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

    const currentSortLabel = sortOptions.find(o => o.value === sortOption)?.name || 'Sort';

    return (
        <>
            {/* Desktop Filter Bar */}
            <div className="sticky top-20 z-30 w-full backdrop-blur-xl border-y border-white/5 py-4 mb-8 hidden md:block">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between gap-6">
                        {/* Category Pills */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                            {categories.map((cat) => (
                                <motion.button
                                    key={cat}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === cat
                                            ? 'bg-gradient-to-r from-inglu-primary to-purple-500 text-white shadow-lg shadow-inglu-primary/25'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                        }`}
                                >
                                    {cat}
                                </motion.button>
                            ))}
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all text-sm font-medium"
                            >
                                {currentSortLabel}
                                <ChevronDown size={16} className={`transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {sortDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50"
                                    >
                                        {sortOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => {
                                                    setSortOption(option.value);
                                                    setSortDropdownOpen(false);
                                                }}
                                                className={`w-full px-4 py-3 text-left text-sm transition-colors ${sortOption === option.value
                                                        ? 'bg-inglu-primary/20 text-inglu-primary'
                                                        : 'text-gray-300 hover:bg-white/5'
                                                    }`}
                                            >
                                                {option.name}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="md:hidden sticky top-20 z-30 px-4 py-3 backdrop-blur-xl border-b border-white/5">
                <button
                    onClick={() => setMobileFiltersOpen(true)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium"
                >
                    <SlidersHorizontal size={18} />
                    Filters & Sort
                </button>
            </div>

            {/* Mobile Filter Bottom Sheet */}
            <AnimatePresence>
                {mobileFiltersOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileFiltersOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
                        />

                        {/* Bottom Sheet */}
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-white/10 rounded-t-3xl z-50 md:hidden max-h-[80vh] overflow-y-auto"
                        >
                            {/* Handle */}
                            <div className="flex justify-center py-3">
                                <div className="w-10 h-1 bg-white/20 rounded-full" />
                            </div>

                            {/* Header */}
                            <div className="flex items-center justify-between px-6 pb-4 border-b border-white/5">
                                <h3 className="text-lg font-bold text-white">Filters</h3>
                                <button
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="p-2 rounded-full bg-white/5 text-gray-400"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Categories */}
                            <div className="p-6">
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Category</h4>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                                                    ? 'bg-inglu-primary text-white'
                                                    : 'bg-white/5 text-gray-400 border border-white/10'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sort */}
                            <div className="px-6 pb-6">
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Sort By</h4>
                                <div className="space-y-2">
                                    {sortOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => setSortOption(option.value)}
                                            className={`w-full px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${sortOption === option.value
                                                    ? 'bg-inglu-primary/20 text-inglu-primary border border-inglu-primary/30'
                                                    : 'bg-white/5 text-gray-300 border border-white/5'
                                                }`}
                                        >
                                            {option.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Apply Button */}
                            <div className="p-6 pt-0">
                                <button
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-inglu-primary to-purple-500 text-white font-bold text-lg"
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Click Outside to Close Sort Dropdown */}
            {sortDropdownOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setSortDropdownOpen(false)}
                />
            )}
        </>
    );
};

export default FilterBar;
