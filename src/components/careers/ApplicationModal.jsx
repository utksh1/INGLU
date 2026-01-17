import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

const ApplicationModal = ({ isOpen, onClose, roleTitle }) => {
    const [step, setStep] = useState('form'); // form | submitting | success
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: null,
        coverNote: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStep('submitting');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStep('success');
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 max-w-lg w-full shadow-2xl overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {step === 'form' && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Apply for {roleTitle}</h3>
                                <p className="text-gray-400 text-sm">Show us what you've got. No stiff cover letters needed.</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors"
                                        placeholder="Jane Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors"
                                        placeholder="jane@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Why you?</label>
                                    <textarea
                                        rows={3}
                                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors resize-none"
                                        placeholder="Tell us about a project you're proud of or why you want this role..."
                                        value={formData.coverNote}
                                        onChange={e => setFormData({ ...formData, coverNote: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Resume / Portfolio Link</label>
                                    <input
                                        type="url"
                                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors"
                                        placeholder="https://linkedin.com/in/..."
                                        value={formData.resume}
                                        onChange={e => setFormData({ ...formData, resume: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                            >
                                Submit Application
                            </button>
                        </form>
                    )}

                    {step === 'submitting' && (
                        <div className="flex flex-col items-center justify-center py-12 space-y-4">
                            <Loader2 className="animate-spin text-inglu-primary" size={48} />
                            <p className="text-gray-300 font-medium">Sending your application...</p>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="flex flex-col items-center justify-center py-8 text-center space-y-6">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                                <CheckCircle size={40} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Application Sent!</h3>
                                <p className="text-gray-400">We've received your details. Keep an eye on your inbox—we'll be in touch within 48 hours.</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-white/10 border border-white/10 text-white rounded-xl hover:bg-white/20 transition-colors font-medium"
                            >
                                Close
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ApplicationModal;
