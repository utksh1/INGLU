import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity }) => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 999 ? 0 : 99;
    const total = subtotal + shipping;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-slate-900 border-l border-white/10 z-50 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-inglu-primary/20">
                                    <ShoppingBag size={20} className="text-inglu-primary" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">Your Bag</h2>
                                    <p className="text-sm text-gray-500">{cartItems.length} items</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {cartItems.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                        <ShoppingBag size={32} className="text-gray-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Your bag is empty</h3>
                                    <p className="text-gray-500 text-sm mb-6">Looks like you haven't added anything yet.</p>
                                    <button
                                        onClick={onClose}
                                        className="px-6 py-3 rounded-xl bg-inglu-primary text-white font-semibold hover:bg-blue-600 transition-colors"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                                    >
                                        {/* Product Image */}
                                        <div className="w-20 h-24 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                                            <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-white font-semibold text-sm line-clamp-1 mb-1">{item.name}</h4>
                                            {item.selectedSize && (
                                                <p className="text-xs text-gray-500 mb-2">Size: {item.selectedSize}</p>
                                            )}
                                            <p className="text-inglu-primary font-bold">₹{item.price.toLocaleString()}</p>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3 mt-3">
                                                <div className="flex items-center bg-white/5 rounded-lg">
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                        className="p-2 text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="px-3 text-white font-medium text-sm">{item.quantity}</span>
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => onRemoveItem(item.id)}
                                                    className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-white/5 space-y-4">
                                {/* Free Shipping Notice */}
                                {subtotal < 999 && (
                                    <div className="p-3 rounded-xl bg-inglu-primary/10 border border-inglu-primary/20">
                                        <p className="text-sm text-center">
                                            <span className="text-gray-400">Add </span>
                                            <span className="text-inglu-primary font-bold">₹{(999 - subtotal).toLocaleString()}</span>
                                            <span className="text-gray-400"> more for </span>
                                            <span className="text-green-400 font-semibold">FREE shipping!</span>
                                        </p>
                                    </div>
                                )}

                                {/* Price Summary */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Subtotal</span>
                                        <span className="text-white">₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Shipping</span>
                                        <span className={shipping === 0 ? 'text-green-400' : 'text-white'}>
                                            {shipping === 0 ? 'FREE' : `₹${shipping}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between pt-3 border-t border-white/5">
                                        <span className="text-white font-semibold">Total</span>
                                        <span className="text-xl font-bold text-white">₹{total.toLocaleString()}</span>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-inglu-primary to-purple-500 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-inglu-primary/25"
                                >
                                    Proceed to Checkout <ArrowRight size={20} />
                                </motion.button>

                                <button
                                    onClick={onClose}
                                    className="w-full py-3 text-gray-400 hover:text-white text-sm font-medium transition-colors"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
