import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const segments = [
    {
        id: 'education',
        title: 'INGLU EDUCATION',
        desc: 'The segment focuses on the educational development of the youth.',
        image: '/imgi_105_Icon.png',
        color: 'from-orange-400 to-rose-500',
        bgIcon: 'bg-white/20',
        area: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 'events',
        title: 'INGLU EVENTS',
        desc: 'This segment where we CURATE EVENTS, organize our own events and also partner with other happening event.',
        subtext: 'Working on Artist Management, Production, Security, Volunteer Management, Sponsorships, Stalls, Marketing and all aspects involved in Event.',
        image: '/imgi_108_CONSULT.png',
        color: 'from-indigo-600 to-purple-600',
        bgIcon: 'bg-white/20',
        area: 'md:col-span-1 md:row-span-2' // Tall card in center
    },
    {
        id: 'merchandise',
        title: 'INGLU MERCHANDISE',
        desc: 'The segment offers a curated collection of trendy and high-quality youth products.',
        image: '/imgi_110_Cloud-Images.png',
        color: 'from-blue-600 to-indigo-600',
        bgIcon: 'bg-white/20',
        area: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 'travels',
        title: 'INGLU TRAVELS',
        desc: 'The area that is focusing on organizing the most amazing & unique youth trips.',
        image: '/imgi_110_Cloud-Images.png',
        color: 'bg-[#1A1B23]', // Dark Card
        bgIcon: 'bg-gray-700',
        area: 'md:col-span-1 md:row-span-1',
        isDark: true
    },
    {
        id: 'esports',
        title: 'INGLU E-SPORTS',
        desc: 'The segment excels in crafting elite competitive lineups for popular titles such as BGMI and other games.',
        image: '/imgi_105_Icon.png',
        color: 'bg-[#1A1B23]', // Dark Card
        bgIcon: 'bg-gray-700',
        area: 'md:col-span-1 md:row-span-1',
        isDark: true
    },
    {
        id: 'creators',
        title: 'INGLU CREATORS',
        desc: 'A dynamic segment that empowers budding youth creators by providing essential support and resources.',
        image: '/imgi_108_CONSULT.png',
        color: 'from-purple-500 to-fuchsia-500',
        bgIcon: 'bg-white/20',
        area: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 'social',
        title: 'INGLU SOCIAL',
        desc: 'A non-profit segment within the INGLU that fervently focuses on enhancing the experience and growth of youth through various philanthropic initiatives.',
        image: '/imgi_105_Icon.png',
        color: 'bg-[#1A1B23]', // Dark Card
        bgIcon: 'bg-gray-700',
        area: 'md:col-span-1 md:row-span-1',
        isDark: true
    },
    {
        id: 'muse',
        title: 'MUSE RECORDS',
        desc: 'A pioneering segment of INGLU, passionately collaborates with emerging artists, offering dedicated management and support.',
        image: '/imgi_110_Cloud-Images.png',
        color: 'from-yellow-400 to-orange-500',
        bgIcon: 'bg-white/20',
        area: 'md:col-span-1 md:row-span-1'
    }
];

const HomeSegments = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
    const sScale = useTransform(scrollYProgress, [0, 0.5], [1.5, 1]);
    const sOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={sectionRef} className="py-32 bg-[#05050A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header with Parallax & Scroll Animation */}
                <div className="text-center mb-32 relative">
                    <motion.h2
                        style={{ y: titleY }}
                        className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-0 relative z-10"
                    >
                        OUR SEGMENT
                    </motion.h2>
                    <motion.div
                        style={{ scale: sScale, opacity: sOpacity }}
                        className="text-[12rem] md:text-[20rem] font-black text-white/20 leading-none absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none"
                    >
                        S
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg mt-8 max-w-xl mx-auto relative z-20"
                    >
                        Delivering unparalleled services tailored to your unique needs
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">

                    {/* Education */}
                    <SegmentCard segment={segments[0]} />

                    {/* Events (Tall Center) */}
                    <SegmentCard segment={segments[1]} />

                    {/* Merchandise */}
                    <SegmentCard segment={segments[2]} />

                    {/* Travels */}
                    <SegmentCard segment={segments[3]} />

                    {/* E-Sports */}
                    <SegmentCard segment={segments[4]} />

                    {/* Creators */}
                    <SegmentCard segment={segments[5]} />

                    {/* Social */}
                    <SegmentCard segment={segments[6]} />

                    {/* Muse Records */}
                    <SegmentCard segment={segments[7]} />

                </div>
            </div>
        </section>
    );
};

const SegmentCard = ({ segment }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`
                relative rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group overflow-hidden
                ${segment.isDark ? segment.color + ' border border-white/5' : `bg-gradient-to-br ${segment.color}`}
                ${segment.area}
            `}
        >
            <div className={`w-16 h-16 rounded-2xl ${segment.bgIcon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl overflow-hidden`}>
                <img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{segment.title}</h3>

            <p className="text-white/80 text-sm leading-relaxed max-w-xs font-medium">
                {segment.desc}
            </p>

            {segment.subtext && (
                <p className="text-white/60 text-xs mt-4 max-w-xs">
                    {segment.subtext}
                </p>
            )}

            {!segment.isDark && (
                <div className="absolute top-0 left-0 w-full h-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none" />
            )}
        </motion.div>
    );
};

export default HomeSegments;
