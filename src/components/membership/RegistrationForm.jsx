import { motion } from 'framer-motion';
import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        course: '',
        reason: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert("Application Submitted!");
    };

    return (
        <section id="join-form" className="py-24 bg-[#05050A]">
            <div className="max-w-2xl mx-auto px-6">
                <div className="bg-[#0F1016] border border-white/5 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-white mb-2">Registration Form</h2>
                        <p className="text-gray-500 text-sm">Fill in your details to start your journey.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-[#05050A] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-[#05050A] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400 ml-1">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full bg-[#05050A] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400 ml-1">College/University</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-[#05050A] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700"
                                    placeholder="Delhi University"
                                    value={formData.college}
                                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 ml-1">Course & Year</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-[#05050A] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700"
                                placeholder="B.Tech, 3rd Year"
                                value={formData.course}
                                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 ml-1">Why do you want to join INGLU?</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full bg-[#05050A] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700 resize-none"
                                placeholder="Tell us about your interests and goals..."
                                value={formData.reason}
                                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-3 rounded-lg bg-[#6366F1] hover:bg-[#5558E3] text-white font-bold text-sm shadow-lg transition-colors"
                        >
                            Submit Application
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
