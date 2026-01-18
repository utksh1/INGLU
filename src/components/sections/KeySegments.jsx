import { ArrowRight, Ticket, Gamepad2, Video, GraduationCap, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

const segments = [
    {
        id: 'events',
        title: 'INGLU Events',
        tag: 'The One Stop Solution for All Event Needs',
        desc: 'INGLU Events is a dynamic and innovative EVENT CURATION COMPANY known for organizing and executing a wide range of engaging and memorable events. We provide end-to-end services for any event.',
        features: ['Sponsorship Management', 'Marketing', 'Artist Management', 'Production Management', 'Stalls Procurement', 'Security & TBL'],
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
        color: 'text-purple-400',
        icon: Ticket,
        link: '/events'
    },
    {
        id: 'esports',
        title: 'INGLU E-Sports',
        tag: 'Fostering & Promoting Esports Talent',
        desc: 'A premier organization in the competitive gaming industry. We specialize in organizing high-stakes tournaments, leagues, and community events to showcase skills and engage with a passionate audience.',
        features: ['High-Stakes Tournaments', 'Community Leagues', 'Talent Management', 'Live Streaming'],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80',
        color: 'text-pink-500',
        icon: Gamepad2,
        link: '/esports',
        reversed: true
    },
    {
        id: 'creators',
        title: 'INGLU Creators',
        tag: 'Nurturing Creativity & Collaboration',
        desc: 'Bringing in the most unique YOUTH INFLUENCER AND YOUTH MARKETING SERVICES. We provide resources, networking opportunities, and exposure to help creators grow their audience.',
        features: ['Influencer Marketing', 'Content Strategy', 'Brand Collaborations', 'Workshops & Showcases'],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
        color: 'text-orange-400',
        icon: Video,
        link: '/creators'
    },
    {
        id: 'education',
        title: 'INGLU Education',
        tag: 'Global Certification & Skill Development',
        desc: 'A leading provider of skill-based courses, offering globally recognized certifications that are Startup India verified. Our programs focus on practical, industry-relevant skills designed to enhance employability.',
        features: ['Startup India Verified', 'Industry-Relevant Skills', 'Expert Instructors', 'Global Certification'],
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
        color: 'text-cyan-400',
        icon: GraduationCap,
        link: '/education',
        reversed: true
    },
    {
        id: 'travels',
        title: 'INGLU Travels',
        tag: 'Luxury Experiences for Youth',
        desc: 'Specializing in crafting luxury travel experiences tailored for the youth. By combining opulent accommodations, exclusive activities, and personalized itineraries, we ensure young travelers enjoy the finest in comfort.',
        features: ['Luxury Accommodations', 'Exclusive Itineraries', 'Youth-Centric Adventures', 'Global Destinations'],
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80',
        color: 'text-emerald-400',
        icon: Plane,
        link: '/travels'
    }
];

const KeySegments = () => {
    return (
        <section className="py-24 bg-[#05050A]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
                        Our <span className="text-blue-500">Segments</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="space-y-32">
                    {segments.map((segment, index) => (
                        <div key={segment.id} className={`flex flex-col ${segment.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="w-full lg:w-1/2 relative group"
                            >
                                <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${segment.reversed ? 'from-purple-600 to-blue-600' : 'from-blue-600 to-purple-600'} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500`} />
                                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={segment.image}
                                        alt={segment.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <segment.icon className={segment.color} size={24} />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: segment.reversed ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-full lg:w-1/2 space-y-6"
                            >
                                <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-medium tracking-wider uppercase">
                                    {segment.tag}
                                </span>

                                <h3 className="text-4xl font-bold text-white">{segment.title}</h3>

                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {segment.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    {segment.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${segment.color.replace('text', 'bg')}`} />
                                            <span className="text-sm text-gray-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <a href={segment.link} className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase hover:text-blue-400 transition-colors group">
                                        Explore {segment.title.split(' ')[1]} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeySegments;
