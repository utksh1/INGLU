import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Star, Heart } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product, onQuickView, onAddToCart }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const badgeColors = {
        'Best Seller': 'bg-gradient-to-r from-amber-500 to-orange-500',
        'Limited Drop': 'bg-gradient-to-r from-purple-500 to-pink-500',
        'Selling Fast': 'bg-gradient-to-r from-red-500 to-rose-500',
        'New': 'bg-gradient-to-r from-inglu-primary to-blue-400',
        'Early Bird': 'bg-gradient-to-r from-green-500 to-emerald-400',
        'Bundle Deal': 'bg-gradient-to-r from-violet-500 to-purple-400',
        'Sold Out': 'bg-gray-600'
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-white/[0.02] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-800/50">
                {/* Skeleton Loader */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
                )}

                {/* Main Image */}
                <motion.img
                    src={product.images[0]}
                    alt={product.name}
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                        } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Hover Overlay */}
                <motion.div
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                />

                {/* Badge */}
                {product.badge && (
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white ${badgeColors[product.badge] || 'bg-gray-600'}`}>
                        {product.badge}
                    </div>
                )}

                {/* Like Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsLiked(!isLiked)}
                    className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all ${isLiked
                            ? 'bg-pink-500 text-white'
                            : 'bg-black/30 text-white/70 hover:text-white'
                        }`}
                >
                    <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                </motion.button>

                {/* Quick Actions - Visible on Hover */}
                <motion.div
                    initial={false}
                    animate={{
                        y: isHovered ? 0 : 20,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-4 right-4 flex gap-2"
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                        className={`flex-1 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${product.inStock
                                ? 'bg-white text-slate-900 hover:bg-gray-100'
                                : 'bg-white/20 text-white/50 cursor-not-allowed'
                            }`}
                    >
                        <ShoppingBag size={16} />
                        {product.inStock ? 'Add to Bag' : 'Sold Out'}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onQuickView(product)}
                        className="py-3 px-4 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all"
                    >
                        <Eye size={18} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Product Info */}
            <div className="p-5">
                {/* Category Tag */}
                <span className="text-xs font-medium text-inglu-primary/80 uppercase tracking-wider">
                    {product.category}
                </span>

                {/* Name */}
                <h3 className="text-white font-semibold text-lg mt-1 mb-2 line-clamp-1 group-hover:text-inglu-primary transition-colors">
                    {product.name}
                </h3>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-white">{product.rating}</span>
                    </div>
                    <span className="text-gray-600">•</span>
                    <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-white">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                    {product.originalPrice && (
                        <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </span>
                    )}
                </div>

                {/* Sizes Preview */}
                {product.sizes && (
                    <div className="flex gap-1.5 mt-4">
                        {product.sizes.slice(0, 4).map((size) => (
                            <span
                                key={size}
                                className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-md border border-white/5"
                            >
                                {size}
                            </span>
                        ))}
                        {product.sizes.length > 4 && (
                            <span className="px-2.5 py-1 text-xs font-medium text-gray-500">
                                +{product.sizes.length - 4}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProductCard;
