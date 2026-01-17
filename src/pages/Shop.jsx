import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Star, ChevronLeft, ChevronRight, Ruler } from 'lucide-react';
import ShopHero from '../components/shop/ShopHero';
import FilterBar from '../components/shop/FilterBar';
import ProductCard from '../components/shop/ProductCard';
import CartDrawer from '../components/shop/CartDrawer';
import { products } from '../data/shopData';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('popular');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  // --- Filter & Sort Logic ---
  const filteredProducts = useMemo(() => {
    let items = [...products];

    if (selectedCategory !== 'All') {
      items = items.filter(p => p.category === selectedCategory);
    }

    switch (sortOption) {
      case 'price_asc':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        items.sort((a, b) => b.id - a.id);
        break;
      default:
        items.sort((a, b) => b.reviews - a.reviews);
    }

    return items;
  }, [selectedCategory, sortOption]);

  // --- Cart Actions ---
  const addToCart = (product, size = null) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size || (product.sizes ? product.sizes[0] : null) }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const openQuickView = (product) => {
    setQuickViewProduct(product);
    setSelectedImageIndex(0);
    setSelectedSize(product.sizes ? product.sizes[0] : null);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Floating Cart Button (Mobile) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 md:hidden z-40 bg-gradient-to-r from-inglu-primary to-purple-500 text-white p-4 rounded-full shadow-2xl shadow-inglu-primary/30"
      >
        <div className="relative">
          <ShoppingBag size={24} />
          {cartItems.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-white text-slate-900 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
            >
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </motion.span>
          )}
        </div>
      </motion.button>

      {/* Desktop Cart Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsCartOpen(true)}
        className="hidden md:flex fixed top-28 right-6 z-40 items-center gap-2 px-5 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
      >
        <ShoppingBag size={18} />
        <span>Bag</span>
        {cartItems.length > 0 && (
          <span className="bg-inglu-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </motion.button>

      <ShopHero />

      <div id="shop-grid" className="min-h-screen pb-20">
        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <div className="max-w-7xl mx-auto px-6">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-400">
              Showing <span className="text-white font-medium">{filteredProducts.length}</span> products
            </p>
          </div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={openQuickView}
                    onAddToCart={addToCart}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <ShoppingBag size={40} className="text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try changing your filters or browse our full collection.</p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="px-6 py-3 rounded-xl bg-inglu-primary text-white font-semibold hover:bg-blue-600 transition-colors"
                >
                  View All Products
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickViewProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-slate-900 border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
                {/* Image Gallery */}
                <div className="w-full md:w-1/2 relative bg-slate-800/50">
                  <div className="aspect-square">
                    <img
                      src={quickViewProduct.images[selectedImageIndex]}
                      alt={quickViewProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Image Navigation */}
                  {quickViewProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setSelectedImageIndex(prev => prev === 0 ? quickViewProduct.images.length - 1 : prev - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => setSelectedImageIndex(prev => prev === quickViewProduct.images.length - 1 ? 0 : prev + 1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70"
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Thumbnail Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {quickViewProduct.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${idx === selectedImageIndex ? 'bg-white w-6' : 'bg-white/40'
                              }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 p-8 flex flex-col">
                  {/* Badge */}
                  {quickViewProduct.badge && (
                    <span className="inline-block px-3 py-1 rounded-full bg-inglu-primary/20 text-inglu-primary text-xs font-bold mb-4 w-fit">
                      {quickViewProduct.badge}
                    </span>
                  )}

                  {/* Category */}
                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    {quickViewProduct.category}
                  </span>

                  {/* Name */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
                    {quickViewProduct.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(quickViewProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">{quickViewProduct.reviews} reviews</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {quickViewProduct.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl font-bold text-white">
                      ₹{quickViewProduct.price.toLocaleString()}
                    </span>
                    {quickViewProduct.originalPrice && (
                      <>
                        <span className="text-lg text-gray-500 line-through">
                          ₹{quickViewProduct.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-sm font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                          {Math.round((1 - quickViewProduct.price / quickViewProduct.originalPrice) * 100)}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  {/* Size Selection */}
                  {quickViewProduct.sizes && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-300">Select Size</span>
                        <button className="text-sm text-inglu-primary flex items-center gap-1 hover:underline">
                          <Ruler size={14} /> Size Guide
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {quickViewProduct.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedSize === size
                                ? 'bg-inglu-primary text-white'
                                : 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/30'
                              }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stock & Delivery */}
                  <div className="flex items-center gap-4 mb-8 text-sm">
                    <span className={`flex items-center gap-2 ${quickViewProduct.inStock ? 'text-green-400' : 'text-red-400'}`}>
                      <span className={`w-2 h-2 rounded-full ${quickViewProduct.inStock ? 'bg-green-400' : 'bg-red-400'}`} />
                      {quickViewProduct.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">Free delivery on orders above ₹999</span>
                  </div>

                  {/* Add to Cart */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      addToCart(quickViewProduct, selectedSize);
                      setQuickViewProduct(null);
                    }}
                    disabled={!quickViewProduct.inStock}
                    className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${quickViewProduct.inStock
                        ? 'bg-gradient-to-r from-inglu-primary to-purple-500 text-white shadow-lg shadow-inglu-primary/25'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    <ShoppingBag size={20} />
                    {quickViewProduct.inStock ? 'Add to Bag' : 'Sold Out'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;