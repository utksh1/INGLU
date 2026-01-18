import { motion } from 'framer-motion';
import { Send, CheckCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

const ApplicationCTA = () => {
    const [submitted, setSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API call
        setTimeout(() => setSubmitted(false), 3000); // Reset for demo
    };

    return (
        <section className="relative py-32 overflow-hidden bg-[#05050A]">

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] p-1 border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl"
                >
                    <div className="rounded-[2.3rem] bg-[#0A0A12]/80 backdrop-blur-xl p-8 md:p-14 overflow-hidden relative">

                        {/* Subtle Grid Pattern Overlay */}
                        <div className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }}
                        />

                        <div className="relative z-10">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
                                    <Sparkles size={14} />
                                    <span>Join the Community</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                    Registration <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Form</span>
                                </h2>
                                <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                                    Fill in your details to start your journey.
                                </p>
                            </div>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                                            <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'name' ? 'ring-2 ring-blue-500/50 bg-white/5' : 'bg-white/5 hover:bg-white/10'}`}>
                                                <input
                                                    type="text"
                                                    required
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full px-5 py-4 rounded-xl bg-transparent text-white placeholder-gray-500 outline-none border-none"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                            <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'email' ? 'ring-2 ring-blue-500/50 bg-white/5' : 'bg-white/5 hover:bg-white/10'}`}>
                                                <input
                                                    type="email"
                                                    required
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full px-5 py-4 rounded-xl bg-transparent text-white placeholder-gray-500 outline-none border-none"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Phone Number</label>
                                            <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'phone' ? 'ring-2 ring-blue-500/50 bg-white/5' : 'bg-white/5 hover:bg-white/10'}`}>
                                                <input
                                                    type="tel"
                                                    required
                                                    onFocus={() => setFocusedField('phone')}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full px-5 py-4 rounded-xl bg-transparent text-white placeholder-gray-500 outline-none border-none"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-medium text-gray-300 ml-1">College/University</label>
                                            <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'college' ? 'ring-2 ring-blue-500/50 bg-white/5' : 'bg-white/5 hover:bg-white/10'}`}>
                                                <input
                                                    type="text"
                                                    required
                                                    onFocus={() => setFocusedField('college')}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full px-5 py-4 rounded-xl bg-transparent text-white placeholder-gray-500 outline-none border-none"
                                                    placeholder="Delhi University"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Course & Year</label>
                                        <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'course' ? 'ring-2 ring-blue-500/50 bg-white/5' : 'bg-white/5 hover:bg-white/10'}`}>
                                            <input
                                                type="text"
                                                required
                                                onFocus={() => setFocusedField('course')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full px-5 py-4 rounded-xl bg-transparent text-white placeholder-gray-500 outline-none border-none"
                                                placeholder="B.Tech, 3rd Year"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Why do you want to join INGLU?</label>
                                        <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'why' ? 'ring-2 ring-blue-500/50 bg-white/5' : 'bg-white/5 hover:bg-white/10'}`}>
                                            <textarea
                                                rows="4"
                                                required
                                                onFocus={() => setFocusedField('why')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full px-5 py-4 rounded-xl bg-transparent text-white placeholder-gray-500 outline-none border-none resize-none"
                                                placeholder="Tell us about your interests and goals..."
                                            />
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-lg transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 mt-4"
                                    >
                                        <Send size={20} /> Register Now
                                    </motion.button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-24 h-24 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-8 ring-1 ring-green-500/20">
                                        <CheckCircle size={48} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Registration Successful!</h3>
                                    <p className="text-gray-400 text-lg">Keep an eye on your inbox. We'll be in touch soon.</p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ApplicationCTA;
