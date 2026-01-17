import { Filter, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { categories, sortOptions } from '../../data/shopData';

const FilterBar = ({ selectedCategory, setSelectedCategory, sortOption, setSortOption }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="sticky top-20 z-30 w-full bg-inglu-dark/80 backdrop-blur-xl border-y border-white/10 py-4 mb-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Desktop Categories */}
                <div className="hidden md:flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === cat
                                    ? 'bg-white text-black'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Mobile Filter Toggle & Sort */}
                <div className="flex w-full md:w-auto justify-between gap-4">
                    {/* Mobile Category Toggle */}
                    <button
                        className="md:hidden flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-white text-sm"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Filter size={16} />
                        <span>Filter: {selectedCategory}</span>
                    </button>

                    {/* Sort Dropdown */}
                    <div className="relative group">
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="appearance-none bg-white/5 text-white pl-4 pr-10 py-2 rounded-full text-sm font-medium focus:outline-none focus:ring-1 focus:ring-inglu-primary cursor-pointer hover:bg-white/10 transition-colors"
                        >
                            {sortOptions.map((opt) => (
                                <option key={opt.value} value={opt.value} className="bg-gray-900 text-white">
                                    {opt.name}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                    </div>
                </div>
            </div>

            {/* Mobile Filter Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden border-t border-white/5 bg-black/40 backdrop-blur-xl"
                    >
                        <div className="p-4 grid grid-cols-2 gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${selectedCategory === cat
                                            ? 'bg-inglu-primary/20 text-inglu-primary border border-inglu-primary/30'
                                            : 'bg-white/5 text-gray-400'
                                        }`}
                                >
                                    {cat}
                                    {selectedCategory === cat && <Check size={14} />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FilterBar;
