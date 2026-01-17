import { motion } from 'framer-motion';
import { Heart, Users, Gamepad2, Mic, ArrowRight } from 'lucide-react';

const verticals = [
    {
        title: 'INGLU Social',
        description: 'A non-profit initiative driving real change. From plantation drives to education for the underprivileged, we believe in giving back.',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800',
        stats: '50+ NGOs Partnered',
        color: 'text-red-500',
        bg: 'bg-red-500/10'
    },
    {
        title: 'Gaming & E-Sports',
        description: 'The ultimate battleground for gamers. Participate in competitive BGMI lineups, FIFA tournaments, and build your clan.',
        icon: Gamepad2,
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
        stats: '10k+ Gamers',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10'
    },
    {
        title: 'Creator Ecosystem',
        description: 'Fueling the next generation of storytellers. We provide equipment, studio space, and brand deals to aspiring creators.',
        icon: Mic,
        image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&q=80&w=800',
        stats: '1M+ Reach',
        color: 'text-orange-500',
        bg: 'bg-orange-500/10'
    }
];

const Community = () => {
    return (
        <div className="min-h-screen bg-inglu-dark pb-20">
            {/* Header */}
            <div className="relative pt-32 pb-20 bg-slate-900 border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-inglu-primary/10 rounded-full blur-[100px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-inglu-primary text-sm font-medium mb-6 border border-white/5">
                        More Than Just A Network
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Community</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A thriving ecosystem of changemakers, gamers, and creators. Find your tribe.
                    </p>
                </div>
            </div>

            {/* Verticals */}
            <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
                {verticals.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        key={index}
                        className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2 relative group">
                            <div className={`absolute -inset-4 rounded-3xl ${item.bg} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video md:aspect-[4/3]">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center`}>
                                <item.icon size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">{item.title}</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {item.description}
                            </p>

                            <div className="border-t border-white/10 pt-6 flex items-center gap-8">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">Impact</p>
                                    <p className="text-2xl font-bold text-white">{item.stats}</p>
                                </div>
                                <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-colors flex items-center gap-2 cursor-pointer">
                                    Join Now <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-6 text-center mt-20">
                <div className="p-12 rounded-3xl bg-gradient-to-r from-inglu-primary/20 to-inglu-accent/20 border border-white/10 backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to make a difference?</h2>
                    <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                        Whether you want to volunteer, compete, or create - there's a place for you in INGLU.
                    </p>
                    <button className="px-8 py-4 rounded-full bg-white text-inglu-dark font-bold hover:bg-gray-100 transition-colors shadow-xl cursor-pointer">
                        Be a Part of the Family
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Community;
