import { useRef, useState } from 'react';
import ScrollFloat from '../ui/ScrollFloat';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactSection = () => {
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <section className="py-24 bg-inglu-dark relative border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                        containerClassName="mb-4"
                        textClassName="text-4xl font-bold text-white"
                    >
                        Want to connect with us!
                    </ScrollFloat>
                    <p className="text-gray-400">Fill the form our team will reach out to you soon!</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Contact</label>
                                <input
                                    type="tel"
                                    placeholder="Enter contact number"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter email address"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
                                />
                            </div>
                        </div>

                        <div className="space-y-6 flex flex-col">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Select Reason</label>
                                <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors">
                                    <option className="bg-slate-900">General Inquiry</option>
                                    <option className="bg-slate-900">Collab/Partnership</option>
                                    <option className="bg-slate-900">Internship</option>
                                    <option className="bg-slate-900">Event Support</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Enter Your Message *</label>
                                <textarea
                                    required
                                    placeholder="Type your message here..."
                                    className="w-full h-full min-h-[120px] bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600 resize-none"
                                />
                            </div>
                        </div>

                        <div className="md:col-span-2 pt-4">
                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success' ? 'bg-green-500 text-white' : 'bg-inglu-primary hover:bg-blue-600 text-white cursor-pointer'}`}
                            >
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
