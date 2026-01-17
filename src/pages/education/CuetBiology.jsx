import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Calendar,
    CheckCircle,
    Clock,
    Award,
    BarChart,
    HelpCircle,
    ChevronDown,
    ChevronUp,
    ArrowRight,
    Target,
    Users,
    Brain,
    Zap,
    Layout as LayoutIcon,
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = [
    { title: "Sexual Reproduction in Flowering Plants", link: "#" },
    { title: "Human Reproduction", link: "#" },
    { title: "Reproductive Health", link: "#" },
    { title: "Principles of Inheritance and Variation", link: "#" },
    { title: "Molecular Basis of Inheritance", link: "#" },
    { title: "Biotechnology: Principles and Processes", link: "#" }
];

const features = [
    { icon: <LayoutIcon size={24} />, title: "Real Exam Pattern", desc: "PYQs show the exact types and difficulty levels of questions asked." },
    { icon: <Target size={24} />, title: "Spot Important Topics", desc: "Find high-weightage chapters that are frequently asked each year." },
    { icon: <Zap size={24} />, title: "Improve Speed", desc: "Regular practice builds confidence and helps in time management." },
    { icon: <BarChart size={24} />, title: "Analyze Weaknesses", desc: "Determine which sections need more focus to plan specific revision." },
    { icon: <Brain size={24} />, title: "Question Trends", desc: "Understand question patterns to make preparation smarter." },
    { icon: <Award size={24} />, title: "Boost Confidence", desc: "Reduces anxiety by offering an environment similar to actual CUET." },
];

const faqs = [
    { q: "What are CUET Biology PYQs?", a: "CUET Biology PYQs are previous year question papers from the actual CUET exams, helping you understand the format and difficulty." },
    { q: "Why should I practice CUET Biology PYQs on Inglu?", a: "Inglu provides an NTA-like interface, instant analysis, and topic-wise sorting to make your practice highly effective." },
    { q: "Are the PYQs on Inglu based on the latest CUET Biology pattern?", a: "Yes, all our question sets are updated to reflect the latest NTA CUET exam structure and marking scheme." },
    { q: "Does Inglu provide topic-wise CUET Biology questions?", a: "Yes, we break down questions by chapter and topic so you can focus on specific areas of improvement." }
];

const CuetBiology = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-inglu-dark text-gray-200 font-sans pt-20">

            {/* Hero Section */}
            <section className="relative py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-inglu-primary/10 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-inglu-primary/20 text-inglu-primary font-semibold text-sm mb-6 border border-inglu-primary/20">
                            CUET Biology Prep
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Practice CUET Biology <span className="text-transparent bg-clip-text bg-gradient-to-r from-inglu-primary to-inglu-accent">PYQs with Answers</span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Solve CUET Biology previous year questions online in an actual NTA-like interface. No PDFs, no downloads—practice directly, analyze results, and track performance instantly.
                        </p>
                        <button className="bg-inglu-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2">
                            Start Practising FREE <ArrowRight size={20} />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-gray-400 text-sm">Target Score</p>
                                    <p className="text-3xl font-bold text-white">200/200</p>
                                </div>
                                <div className="h-12 w-12 bg-inglu-accent/20 rounded-full flex items-center justify-center text-inglu-accent">
                                    <Award size={24} />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4">
                                    <CheckCircle className="text-green-500" size={24} />
                                    <div>
                                        <p className="text-white font-medium">Topic-wise Analysis</p>
                                        <p className="text-xs text-gray-500">Identify weak areas instantly</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4">
                                    <Clock className="text-orange-500" size={24} />
                                    <div>
                                        <p className="text-white font-medium">Real-time Simulation</p>
                                        <p className="text-xs text-gray-500">Master time management</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Topics Section */}
            <section className="py-16 px-6 bg-black/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Topic-Wise Breakdown</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Inglu organizes PYQs topic-wise so you can focus on your weak areas and prepare smarter.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map((topic, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-inglu-primary/50 hover:bg-white/10 transition-all cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-inglu-dark rounded-lg text-inglu-primary group-hover:bg-inglu-primary group-hover:text-white transition-colors">
                                        <BookOpen size={24} />
                                    </div>
                                    <ArrowRight className="text-gray-600 group-hover:text-inglu-primary -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
                                <p className="text-sm text-inglu-primary font-medium mt-4">Practice Now &rarr;</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <button className="text-white border-b border-inglu-primary hover:text-inglu-primary transition-colors pb-1">View All Topics</button>
                    </div>
                </div>
            </section>

            {/* Yearly Packs */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Practice by Year</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {['2023', '2024', '2025'].map((year, idx) => (
                            <div key={year} className="relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                                <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">FREE</div>
                                <h3 className="text-5xl font-bold text-white mb-2">PYQ {year}</h3>
                                <div className="flex justify-center gap-4 text-sm text-gray-400 mb-8">
                                    <span>60 Min</span> • <span>50 Ques</span> • <span>250 Marks</span>
                                </div>
                                <button className="w-full py-3 rounded-xl bg-inglu-primary hover:bg-blue-600 text-white font-semibold transition-colors">
                                    Start Free Test
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exam Pattern */}
            <section className="py-20 px-6 bg-black/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Exam Pattern & Syllabus</h2>
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                        {[
                            ['Subject', 'Biology'],
                            ['Number of Questions', '50 (No Choice)'],
                            ['Time', '60 Minutes'],
                            ['Total Marks', '250 Marks'],
                            ['Question Type', 'Multiple Choice Questions (MCQs)'],
                            ['Marking Scheme', '+5 for Correct, -1 for Wrong'],
                            ['Difficulty', 'Moderate to Easy'],
                            ['Conducted By', 'NTA (National Testing Agency)']
                        ].map(([label, value], idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row p-6 ${idx !== 7 ? 'border-b border-white/5' : ''}`}>
                                <div className="w-full md:w-1/3 text-gray-400 font-medium mb-2 md:mb-0">{label}</div>
                                <div className="w-full md:w-2/3 text-white font-semibold">{value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Test Series Stats */}
            <section className="py-12 px-6 border-y border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-inglu-primary/10 border border-inglu-primary/20 rounded-2xl p-6 flex items-center justify-between">
                        <div>
                            <h4 className="text-2xl font-bold text-white">English Test Series</h4>
                            <p className="text-gray-400">551 Total Tests • 87k+ Attempted</p>
                        </div>
                        <button className="px-6 py-2 bg-white text-inglu-dark font-bold rounded-lg hover:bg-gray-200 transition-colors">Start</button>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6 flex items-center justify-between">
                        <div>
                            <h4 className="text-2xl font-bold text-white">General Aptitude</h4>
                            <p className="text-gray-400">187 Total Tests • 14k+ Attempted</p>
                        </div>
                        <button className="px-6 py-2 bg-white text-inglu-dark font-bold rounded-lg hover:bg-gray-200 transition-colors">Start</button>
                    </div>
                </div>
            </section>

            {/* Other Subjects */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">Other CUET Subjects</h2>
                    <div className="flex flex-wrap gap-4">
                        {['English', 'Accountancy', 'Business Studies', 'Political Science', 'Geography', 'Chemistry', 'Physics', 'Mathematics', 'History'].map((sub) => (
                            <Link key={sub} to="#" className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-inglu-primary/50 text-gray-300 hover:text-white transition-all">
                                {sub}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How To Use & Why Choose */}
            <section className="py-20 px-6 bg-gradient-to-b from-black/0 to-black/40">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8">How to Use INGLU's Platform</h2>
                        <div className="space-y-8">
                            {[
                                { step: "1", title: "Choose Your Paper", text: "Select CUET Biology PYQ year or specific topic." },
                                { step: "2", title: "Attempt Online", text: "Solve the paper in a real CUET exam simulator." },
                                { step: "3", title: "View Solutions", text: "Instantly check answers and detailed explanations." },
                                { step: "4", title: "Analyze Progress", text: "Identify weak topics and improve scores." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-inglu-primary flex items-center justify-center font-bold text-white">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                                        <p className="text-gray-400">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8">Why Practice with Us?</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feat, i) => (
                                <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="text-inglu-primary mb-4">{feat.icon}</div>
                                    <h4 className="text-lg font-semibold text-white mb-2">{feat.title}</h4>
                                    <p className="text-sm text-gray-400">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">What Your Seniors Said</h2>
                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white/5 p-8 rounded-2xl border border-white/10 snap-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 rounded-full bg-gray-600" />
                                    <div className="text-left">
                                        <p className="text-white font-bold">Student Name {i}</p>
                                        <p className="text-xs text-inglu-primary">CUET 2024 Topper</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-left italic">"The exam interface was exactly like the real thing. Practicing here gave me so much confidence!"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 bg-black/20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white/5 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-semibold text-white">{faq.q}</span>
                                    {openFaq === index ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6 text-gray-400">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to ace your Exam?</h2>
                    <button className="bg-gradient-to-r from-inglu-primary to-inglu-accent hover:opacity-90 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-blue-500/30 transition-all transform hover:scale-105">
                        Attempt Biology PYQs Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CuetBiology;
