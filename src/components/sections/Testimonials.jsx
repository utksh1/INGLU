const testimonials = [
    {
        name: 'Aarva Sharma',
        role: 'Student, Delhi University',
        quote: 'INGLU helped me land my first internship within weeks of joining. The workshops are truly game-changing.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Rohan Mehta',
        role: 'Content Creator',
        quote: 'The community support for creators is unmatched. I found my team here and we just launched our channel.',
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Simran Kaur',
        role: 'Event Lead',
        quote: 'From attending events to organizing them, my journey with INGLU has been incredible. Best growth platform ever.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-inglu-dark border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-inglu-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">What Our Community Says</h2>
                    <p className="text-gray-400">Real stories from real students.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm relative hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-inglu-primary" />
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-inglu-primary text-xs uppercase font-semibold">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic leading-relaxed">"{t.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Testimonials;
