import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, CreditCard, MapPin, User, Mail, Phone, Package, Star } from 'lucide-react';

const ShopForm = ({ onOrderSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    productName: '',
    quantity: 1,
    specialInstructions: '',
    paymentMethod: 'card',
    newsletter: false
  });
  
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      if (onOrderSubmit) {
        onOrderSubmit(formData);
      }
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          country: 'India',
          productName: '',
          quantity: 1,
          specialInstructions: '',
          paymentMethod: 'card',
          newsletter: false
        });
        setStatus(null);
      }, 2000);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl w-full max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-inglu-primary/20 rounded-full mb-4">
          <ShoppingBag className="w-8 h-8 text-inglu-primary" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Place Your Order</h2>
        <p className="text-gray-400">Fill in your details to complete your purchase</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <User className="w-5 h-5" /> Personal Info
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Full Name *</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Email Address *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Phone Number *</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Shipping Info
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Address *</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Street address"
                className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="City"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">State *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                placeholder="State"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">ZIP Code *</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                placeholder="ZIP Code"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="Country"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6 lg:col-span-2">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Package className="w-5 h-5" /> Product Details
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Product *</label>
              <select
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors"
              >
                <option value="" className="bg-slate-900">Select a product</option>
                <option value="DELHI 6 UNDERGROUND VIP" className="bg-slate-900">FANPIT Access: DELHI 6 UNDERGROUND FT. FOOSIE GANG - ₹1,799</option>
                <option value="DELHI 6 UNDERGROUND GENERAL" className="bg-slate-900">General Access: DELHI 6 UNDERGROUND FT. FOOSIE GANG - ₹1,199</option>
                <option value="HOLI BASH VIP" className="bg-slate-900">HOLI BASH SEASON 4 : VIP - ₹1,999</option>
                <option value="HOLI BASH GENERAL" className="bg-slate-900">HOLI BASH SEASON 4 : GENERAL ACCESS - ₹999</option>
                <option value="MARKETING 101 COURSE" className="bg-slate-900">MARKETING 101 - ₹999</option>
                <option value="MONTHLY MEMBERSHIP" className="bg-slate-900">MONTHLY MEMBERSHIP - ₹49</option>
                <option value="QUARTERLY MEMBERSHIP" className="bg-slate-900">QUARTERLY MEMBERSHIP - ₹149</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Quantity *</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                max="10"
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Special Instructions</label>
            <textarea
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              placeholder="Any special delivery instructions or notes..."
              className="w-full h-24 min-h-[100px] bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600 resize-none"
            />
          </div>
        </div>

        {/* Payment Method */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
            <CreditCard className="w-5 h-5" /> Payment Method
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {['card', 'upi', 'netbanking'].map((method) => (
              <label key={method} className="flex items-center space-x-3 p-4 bg-black/20 border border-white/10 rounded-xl cursor-pointer hover:border-inglu-primary transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={formData.paymentMethod === method}
                  onChange={handleChange}
                  className="text-inglu-primary focus:ring-inglu-primary"
                />
                <span className="capitalize text-white">{method.replace('netbanking', 'Net Banking')}</span>
              </label>
            ))}
          </div>
          
          <div className="flex items-center space-x-3 mb-6">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="text-inglu-primary focus:ring-inglu-primary"
            />
            <label className="text-gray-400 text-sm">
              Subscribe to our newsletter for updates and special offers
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-2 pt-4">
          <button
            type="submit"
            disabled={status === 'sending' || status === 'success'}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
              status === 'success' 
                ? 'bg-green-500 text-white' 
                : 'bg-inglu-primary hover:bg-blue-600 text-white cursor-pointer'
            }`}
          >
            {status === 'sending' ? (
              'Processing Order...'
            ) : status === 'success' ? (
              'Order Placed Successfully!'
            ) : (
              <>
                <ShoppingBag size={20} />
                Place Order Now
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ShopForm;