import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Star } from 'lucide-react';

const ProductCard = ({ product, onQuickView, onAddToCart }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-inglu-primary/30 transition-all duration-300 flex flex-col h-full"
        >
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                {product.badge && (
                    <span className="bg-inglu-primary/90 text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-md shadow-lg">
                        {product.badge}
                    </span>
                )}
                {!product.inStock && (
                    <span className="bg-red-500/90 text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-md shadow-lg">
                        Sold Out
                    </span>
                )}
            </div>

            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-900">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <button
                        onClick={() => onQuickView(product)}
                        className="p-3 bg-white text-black rounded-full hover:bg-inglu-primary hover:text-white transition-all transform hover:scale-110 shadow-lg"
                        title="Quick View"
                    >
                        <Eye size={20} />
                    </button>
                    {product.inStock && (
                        <button
                            onClick={() => onAddToCart(product)}
                            className="p-3 bg-white text-black rounded-full hover:bg-inglu-primary hover:text-white transition-all transform hover:scale-110 shadow-lg"
                            title="Add to Cart"
                        >
                            <ShoppingCart size={20} />
                        </button>
                    )}
                </div>
            </div>

            {/* Product Details */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{product.category}</span>
                    <div className="flex items-center gap-1 text-yellow-500 text-xs">
                        <Star size={12} fill="currentColor" />
                        <span>{product.rating}</span>
                    </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-2 leading-tight group-hover:text-inglu-primary transition-colors line-clamp-2">
                    {product.name}
                </h3>

                <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                    <div className="flex flex-col">
                        {product.originalPrice && (
                            <span className="text-gray-500 text-sm line-through">₹{product.originalPrice}</span>
                        )}
                        <span className="text-xl font-bold text-white">₹{product.price}</span>
                    </div>
                    {product.inStock ? (
                        <button
                            onClick={() => onAddToCart(product)}
                            className="text-sm font-semibold text-inglu-primary hover:text-white transition-colors"
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <span className="text-sm text-red-400 font-medium">Out of Stock</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
