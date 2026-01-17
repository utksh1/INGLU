import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const segments = [
    {
        id: 'events',
        title: 'INGLU Events',
        tagline: 'The One-Stop Solution for All Event Needs',
        description: "INGLU Events is a dynamic and innovative EVENT CURATION COMPANY known for organizing and executing a wide range of engaging and memorable events, specializing in working on both aspects of events: INCOME MAXIMISATION and EXPENSE MINIMISATION. It's the only company which provides end-to-end service for any event.",
        features: [
            'Sponsorship Management',
            'Marketing',
            'Artist Management',
            'Production Management',
            'Stalls Procurement',
            'Security & TBL'
        ],
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000', // Concert/Stage
        color: 'from-blue-600 to-purple-600'
    },
    {
        id: 'esports',
        title: 'INGLU E-Sports',
        tagline: 'Fostering & Promoting Esports Talent',
        description: "INGLU E-Sports is a premier organization in the competitive gaming industry, dedicated to fostering and promoting esports talent. Specializing in organizing high-stakes tournaments, leagues, and community events, we provide a platform for gamers to showcase their skills and engage with a passionate audience. Committed to excellence, innovation, and fair play, we are at the forefront of the esports revolution.",
        features: [
            'High-Stakes Tournaments',
            'Community Leagues',
            'Talent Management',
            'Live Streaming'
        ],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000', // Gaming
        color: 'from-fuchsia-600 to-pink-600'
    },
    {
        id: 'creators',
        title: 'INGLU Creators',
        tagline: 'Nurturing Creativity & Collaboration',
        description: "Bringing in the most unique YOUTH INFLUENCER AND YOUTH MARKETING SERVICES. INGLU Creators is a vibrant community and platform for content creators across various media, including digital, visual, and performing arts. We provide resources, networking opportunities, and exposure to help creators grow their audience and refine their craft through workshops, showcases, and collaborative projects.",
        features: [
            'Influencer Marketing',
            'Content Strategy',
            'Brand Collaborations',
            'Workshops & Showcases'
        ],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000', // Creator/Social
        color: 'from-orange-500 to-red-500'
    },
    {
        id: 'education',
        title: 'INGLU Education',
        tagline: 'Global Certification & Skill Development',
        description: "INGLU Education is a leading provider of skill-based courses, offering globally recognized certifications that are Startup India verified. Our programs focus on practical, industry-relevant skills designed to enhance employability and career growth. With expert instructors and a commitment to excellence, we ensure learners gain valuable, up-to-date knowledge that meets international standards.",
        features: [
            'Startup India Verified',
            'Industry-Relevant Skills',
            'Expert Instructors',
            'Global Certification'
        ],
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000', // Education
        color: 'from-cyan-500 to-blue-500'
    },
    {
        id: 'travels',
        title: 'INGLU Travels',
        tagline: 'Luxury Experiences for Youth',
        description: "INGLU Travels specializes in crafting luxury travel experiences tailored for the youth, offering unique and unforgettable journeys that stand out in the travel industry. By combining opulent accommodations, exclusive activities, and personalized itineraries, we ensure young travelers enjoy the finest in comfort and style. We blend sophistication with youthful energy and excitement.",
        features: [
            'Luxury Accommodations',
            'Exclusive Itineraries',
            'Youth-Centric Adventures',
            'Global Destinations'
        ],
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000', // Travel
        color: 'from-emerald-500 to-teal-500'
    }
];

const DetailedSegments = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Segments</span>
                        </h2>
                        <div className="h-1 w-24 bg-white/10 mx-auto rounded-full" />
                    </motion.div>
                </div>

                <div className="space-y-32">
                    {segments.map((segment, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={segment.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-20 blur-[100px] rounded-full group-hover:opacity-30 transition-opacity duration-500`} />
                                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-10 mix-blend-overlay`} />
                                        <img
                                            src={segment.image}
                                            alt={segment.title}
                                            className="w-full h-auto aspect-[4/3] object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    {/* Decorative Elements */}
                                    <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-24 h-24 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center p-6 shadow-xl`}>
                                        <div className={`w-full h-full rounded-full bg-gradient-to-br ${segment.color} opacity-80`} />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-8">
                                    <div>
                                        <div className={`inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white mb-4`}>
                                            {segment.tagline}
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                            {segment.title}
                                        </h3>
                                        <p className="text-gray-400 text-lg leading-relaxed">
                                            {segment.description}
                                        </p>
                                    </div>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {segment.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className={`p-1 rounded-full bg-gradient-to-br ${segment.color}`}>
                                                    <CheckCircle2 size={14} className="text-white" />
                                                </div>
                                                <span className="text-gray-300 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="group flex items-center gap-2 text-white font-semibold hover:text-inglu-primary transition-colors">
                                        Explore {segment.title.split(' ')[1]} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DetailedSegments;
