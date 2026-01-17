import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-inglu-dark pb-20">
            {/* Hero */}
            <div className="relative py-32 bg-slate-900 border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />

                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About INGLU</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Founded with a vision to revolutionize youth development, we are now a global community of dreamers, doers, and achievers.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="w-14 h-14 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                            <Target size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            To empower the youth by bridging the gap between academic learning and industry requirements through a unique blend of Experience, Enhancement, and Entertainment.
                        </p>
                    </div>
                    <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="w-14 h-14 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                            <Lightbulb size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            To become the world's largest and most trusted youth community, creating a future where every student has the skills, confidence, and network to succeed.
                        </p>
                    </div>
                </div>

                {/* Stats / history */}
                <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200"
                            alt="Team meeting"
                            className="rounded-3xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-4xl font-bold text-white">6+ Years of Impact</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Started in a small dorm room, INGLU has grown into a movement. We have touched the lives of over 50,000 students across the globe, organizing massive events, facilitating career-defining internships, and building a support system that lasts a lifetime.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                                <h3 className="text-3xl font-bold text-white">50k+</h3>
                                <p className="text-sm text-gray-500">Students</p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                                <h3 className="text-3xl font-bold text-white">100+</h3>
                                <p className="text-sm text-gray-500">Partner Colleges</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team CTA */}
                <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-16 border border-white/10">
                    <Users size={48} className="mx-auto text-inglu-primary mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Meet The Team</h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8">
                        We are a group of passionate individuals dedicated to the growth of students worldwide.
                    </p>
                    <button className="px-8 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-gray-200 transition-colors cursor-pointer">
                        Join Our Internal Team
                    </button>
                </div>

            </div>
        </div>
    );
};
export default About;
