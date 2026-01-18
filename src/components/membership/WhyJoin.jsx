import { motion } from 'framer-motion';
import { Zap, Users, Award, Star, CreditCard, CheckCircle } from 'lucide-react';

const benefits = [
    {
        icon: Zap,
        color: "text-yellow-400",
        title: "Exclusive Internships",
        description: "Get priority access to internship opportunities with top brands and startups."
    },
    {
        icon: Users,
        color: "text-blue-400",
        title: "Networking Events",
        description: "Connect with like-minded individuals and industry leaders at exclusive meetups."
    },
    {
        icon: Award,
        color: "text-green-400",
        title: "Certified Workshops",
        description: "Participate in skill-building workshops and earn certificates to boost your resume."
    },
    {
        icon: Star,
        color: "text-purple-400",
        title: "VIP Event Access",
        description: "Free or discounted entry to concerts, fests, and INGLU organized events."
    },
    {
        icon: CreditCard,
        color: "text-red-400",
        title: "Membership ID Card",
        description: "Receive an official physical/digital ID card offering discounts at partner outlets."
    },
    {
        icon: CheckCircle,
        color: "text-teal-400",
        title: "Merch Discounts",
        description: "Enjoy special pricing on exclusive INGLU merchandise and apparel."
    }
];

const WhyJoin = () => {
    return (
        <section className="py-24 bg-[#05050A]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Join Us?</h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        More than just a community, it's a launchpad for your future. Here's what you get.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-[#0F1016] border border-white/5 hover:border-white/10 transition-all group"
                        >
                            <div className={`mb-6 p-3 rounded-lg bg-white/5 w-fit ${benefit.color} group-hover:scale-110 transition-transform`}>
                                <benefit.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoin;
