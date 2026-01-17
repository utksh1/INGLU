import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Star, Users, Zap, Award, CreditCard } from 'lucide-react';
import { useState } from 'react';
import MembershipLoader from '../components/membership/MembershipLoader';
import MembershipHero from '../components/membership/MembershipHero';

const Membership = () => {
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        course: '',
        reason: ''
    });

    const handleLoaderComplete = () => {
        setLoading(false);
    };

    const benefits = [
        {
            icon: <Zap className="text-yellow-400" size={32} />,
            title: "Exclusive Internships",
            description: "Get priority access to internship opportunities with top brands and startups."
        },
        {
            icon: <Users className="text-blue-400" size={32} />,
            title: "Networking Events",
            description: "Connect with like-minded individuals and industry leaders at exclusive meetups."
        },
        {
            icon: <Award className="text-green-400" size={32} />,
            title: "Certified Workshops",
            description: "Participate in skill-building workshops and earn certificates to boost your resume."
        },
        {
            icon: <Star className="text-purple-400" size={32} />,
            title: "VIP Event Access",
            description: "Free or discounted entry to concerts, fests, and INGLU organized events."
        },
        {
            icon: <CreditCard className="text-red-400" size={32} />,
            title: "Membership ID Card",
            description: "Receive an official physical/digital ID card offering discounts at partner outlets."
        },
        {
            icon: <CheckCircle className="text-teal-400" size={32} />,
            title: "Merch Discounts",
            description: "Enjoy special pricing on exclusive INGLU merchandise and apparel."
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert("Thanks for applying! We'll get back to you soon.");
    };

    return (
        <div className="bg-slate-950 min-h-screen">
            <AnimatePresence mode="wait">
                {loading && <MembershipLoader onComplete={handleLoaderComplete} />}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <MembershipHero />

                    {/* Benefits Grid */}
                    <section className="px-6 py-16 bg-black/20">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Join Us?</h2>
                                <p className="text-gray-400 max-w-2xl mx-auto">
                                    More than just a community, it's a launchpad for your future. Here's what you get.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-inglu-primary/50 hover:bg-white/10 transition-all group"
                                    >
                                        <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Registration Form */}
                    <section id="join-form" className="px-6 py-20">
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-bold text-white mb-2">Registration Form</h2>
                                    <p className="text-gray-400">Fill in your details to start your journey.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary focus:ring-1 focus:ring-inglu-primary transition-all placeholder:text-gray-600"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary focus:ring-1 focus:ring-inglu-primary transition-all placeholder:text-gray-600"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary focus:ring-1 focus:ring-inglu-primary transition-all placeholder:text-gray-600"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300 ml-1">College/University</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary focus:ring-1 focus:ring-inglu-primary transition-all placeholder:text-gray-600"
                                                placeholder="Delhi University"
                                                value={formData.college}
                                                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Course & Year</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary focus:ring-1 focus:ring-inglu-primary transition-all placeholder:text-gray-600"
                                            placeholder="B.Tech, 3rd Year"
                                            value={formData.course}
                                            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Why do you want to join INGLU?</label>
                                        <textarea
                                            required
                                            rows={4}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary focus:ring-1 focus:ring-inglu-primary transition-all placeholder:text-gray-600 resize-none"
                                            placeholder="Tell us about your interests and goals..."
                                            value={formData.reason}
                                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-inglu-primary to-inglu-accent hover:opacity-90 text-white font-bold text-lg shadow-lg transition-all transform hover:scale-[1.02]"
                                    >
                                        Submit Application
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </motion.div>
            )}
        </div>
    );
};

export default Membership;
