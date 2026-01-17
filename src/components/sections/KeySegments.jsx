import { ArrowRight, GraduationCap, Plane, Gamepad2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const segments = [
    {
        title: 'INGLU Education',
        description: 'Skill-based courses, workshops, and future-readiness programs.',
        icon: GraduationCap,
        link: '/education',
        color: 'bg-blue-500',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
    },
    {
        title: 'Events & Travels',
        description: 'Curated experiences, trips, and on-ground events.',
        icon: Plane,
        link: '/events',
        color: 'bg-orange-500',
        image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800'
    },
    {
        title: 'Gaming & Creators',
        description: 'E-Sports lineups, creator ecosystem, and artist support.',
        icon: Gamepad2,
        link: '/gaming',
        color: 'bg-purple-500',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800'
    },
    {
        title: 'Social Impact',
        description: 'Non-profit initiatives focused on youth growth and giving back.',
        icon: Heart,
        link: '/community',
        color: 'bg-red-500',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800'
    }
];

const KeySegments = () => {
    return (
        <section className="py-24 bg-inglu-dark relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4">Explore Our Ecosystem</h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            Discover the different ways you can grow, learn, and enjoy with INGLU.
                        </p>
                    </div>
                    <button className="text-inglu-primary hover:text-white font-semibold flex items-center gap-2 transition-colors cursor-pointer">
                        View All Programs <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {segments.map((segment, idx) => (
                        <Link key={idx} to={segment.link} className="group relative rounded-2xl overflow-hidden aspect-[4/5] block border border-white/5 hover:border-inglu-primary/50 transition-colors">
                            <div className="absolute inset-0 bg-slate-900">
                                <img
                                    src={segment.image}
                                    alt={segment.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 flex flex-col justify-end">
                                <div className={`w-12 h-12 rounded-xl ${segment.color} flex items-center justify-center mb-4 text-white shadow-lg group-hover:-translate-y-2 transition-transform duration-300`}>
                                    <segment.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{segment.title}</h3>
                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{segment.description}</p>
                                <div className="flex items-center text-white font-medium text-sm group-hover:translate-x-2 transition-transform">
                                    Explore <ArrowRight size={16} className="ml-2" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default KeySegments;
