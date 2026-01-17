import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';
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

  // --- Filter & Sort Logic ---
  const filteredProducts = useMemo(() => {
    let items = [...products];

    // Filter by Category
    if (selectedCategory !== 'All') {
      items = items.filter(p => p.category === selectedCategory);
    }

    // Sort
    switch (sortOption) {
      case 'price_asc':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Assuming newer items have higher IDs for this mock
        items.sort((a, b) => b.id - a.id);
        break;
      default: // popular (assuming rating/reviews correlate)
        items.sort((a, b) => b.reviews - a.reviews);
    }

    return items;
  }, [selectedCategory, sortOption]);

  // --- Cart Actions ---
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1, selectedSize: product.sizes ? product.sizes[0] : null }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  return (
    <div className="min-h-screen bg-inglu-dark text-white pt-20">
      {/* Header / Nav Overrides or Extras could go here */}
      {/* Floating Cart Button (Mobile) */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 md:hidden z-40 bg-inglu-primary text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <div className="relative">
          <ShoppingBag />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </div>
      </button>

      {/* Floating Cart Button (Desktop Sticky Header integration usually, using fixed for now) */}
      {/* Note: The main Navbar typically handles this, but we'll add a trigger if needed. For now relying on main nav or mobile button. */}

      <ShopHero />

      <div id="shop-grid" className="min-h-screen">
        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <div className="container mx-auto px-6 pb-24">
          <AnimatePresence mode='wait'>
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={setQuickViewProduct}
                    onAddToCart={addToCart}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-gray-500"
              >
                <p className="text-xl">No products found in this category.</p>
                <button onClick={() => setSelectedCategory('All')} className="text-inglu-primary mt-4 hover:underline">View All Products</button>
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickViewProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-inglu-dark border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden relative z-10 shadow-2xl"
            >
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-20 bg-black/20 p-2 rounded-full backdrop-blur-md"
              >
                <X size={24} />
              </button>

              <div className="relative aspect-video">
                <img src={quickViewProduct.images[0]} alt={quickViewProduct.name} className="w-full h-full object-cover" />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-2">{quickViewProduct.name}</h2>
                <p className="text-gray-400 mb-6 line-clamp-3">{quickViewProduct.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-white">₹{quickViewProduct.price}</span>
                  <button
                    onClick={() => { addToCart(quickViewProduct); setQuickViewProduct(null); }}
                    className="bg-inglu-primary hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all"
                  >
                    Add to Cart
                  </button>
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