import { ArrowRight } from 'lucide-react';
import ScrollFloat from '../ui/ScrollFloat';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const segments = [
    {
        title: 'INGLU EDUCATION',
        description: 'The segment focuses on the educational development of the youth.',
        iconImg: '/imgi_105_Icon.png',
        link: '/education',
        className: 'md:col-span-1 bg-gradient-to-br from-orange-400 to-rose-500',
        iconBg: 'bg-white/20'
    },
    {
        title: 'INGLU EVENTS',
        description: 'This segment where we CURATE EVENTS, organize our own events and also partner with other happening event. Working on Artist Management, Production, Security, Volunteer Management, Sponsorships, Stalls, Marketing and all aspects involved in Event.',
        iconImg: '/imgi_105_Icon.png',
        link: '/events',
        className: 'md:col-span-1 md:row-span-2 bg-gradient-to-b from-indigo-600 to-violet-800',
        iconBg: 'bg-white/20'
    },
    {
        title: 'INGLU MERCHANDISE',
        description: 'The segment offers a curated collection of trendy and high-quality youth products.',
        iconImg: '/imgi_110_Cloud-Images.png',
        link: '/shop',
        className: 'md:col-span-1 bg-gradient-to-br from-blue-600 to-indigo-700',
        iconBg: 'bg-white/20'
    },
    {
        title: 'INGLU TRAVELS',
        description: 'The area that is focusing on organizing the most amazing & unique youth trips.',
        iconImg: '/imgi_110_Cloud-Images.png',
        link: '/travels',
        className: 'md:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10',
        iconBg: 'bg-gradient-to-br from-gray-700 to-gray-600'
    },
    {
        title: 'INGLU E-SPORTS',
        description: 'The segment excels in crafting elite competitive lineups for popular titles such as BGMI and other games.',
        iconImg: '/imgi_108_CONSULT.png',
        link: '/esports',
        className: 'md:col-span-1 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10',
        iconBg: 'bg-white/10'
    },
    {
        title: 'INGLU CREATORS',
        description: 'A dynamic segment that empowers budding youth creators by providing essential support and resources, fostering a vibrant platform for creative expression and growth',
        iconImg: '/imgi_108_CONSULT.png',
        link: '/creators',
        className: 'md:col-span-1 bg-gradient-to-br from-violet-600 to-fuchsia-600',
        iconBg: 'bg-white/20'
    },
    {
        title: 'INGLU SOCIAL',
        description: 'A non-profit segment within the INGLU that fervently focuses on enhancing the experience and growth of youth through various philanthropic initiatives',
        iconImg: '/logo.png',
        link: '/social',
        className: 'md:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10',
        iconBg: 'bg-gradient-to-br from-gray-700 to-gray-600'
    },
    {
        title: 'MUSE RECORDS',
        description: 'a pioneering segment of INGLU, passionately collaborates with emerging artists, offering dedicated management and support to nurture their talents and propel them into the spotlight',
        iconImg: 'https://img.icons8.com/3d-fluency/94/microphone.png',
        link: '/records',
        className: 'md:col-span-1 bg-gradient-to-br from-orange-400 to-amber-500',
        iconBg: 'bg-white/20'
    }
];

const KeySegments = () => {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                        containerClassName="mb-4"
                        textClassName="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight"
                    >
                        Our Segments
                    </ScrollFloat>
                    <p className="text-gray-400 text-lg">
                        Delivering unparalleled services tailored to your unique needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {segments.map((segment, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${segment.className} rounded-3xl p-8 relative group overflow-hidden transition-all duration-300 hover:-translate-y-2`}
                        >
                            <div className="block h-full flex flex-col items-center justify-center text-center">
                                <div className={`w-20 h-20 rounded-2xl ${segment.iconBg} flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                                    <img
                                        src={segment.iconImg}
                                        alt={segment.title}
                                        className="w-16 h-16 object-contain drop-shadow-md"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">{segment.title}</h3>
                                <p className="text-white/80 text-sm leading-relaxed font-medium max-w-xs mx-auto">
                                    {segment.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeySegments;
