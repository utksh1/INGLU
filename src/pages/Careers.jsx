import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Briefcase, Users, Target, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        college: '',
        whyHire: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    const internshipPrograms = [
        {
            title: 'PUBLIC RELATIONS',
            duration: '2 months',
            stipend: '7,500/month',
            image: 'https://images.unsplash.com/photo-1573417087-4d99-4b42-81c2-712c8e78da?auto=format&fit=crop&q=80&w=400'
        },
        {
            title: 'EVENT MANAGEMENT',
            duration: '2 months',
            stipend: '6,000/month',
            image: 'https://images.unsplash.com/photo-1542744175-3f52-9e2e-9e87-c7675d7f21?auto=format&fit=crop&q=80&w=400'
        },
        {
            title: 'SOCIAL MEDIA MARKETING',
            duration: '2 months',
            stipend: '5,000/month',
            image: 'https://images.unsplash.com/photo-1611224942175-96d3d89640e5d8dcd1f0b6?auto=format&fit=crop&q=80&w=400'
        },
        {
            title: 'STREAMER',
            duration: '2 months',
            stipend: '5,000/month',
            image: 'https://images.unsplash.com/photo-1573165174940-85ba1bb8c6a?auto=format&fit=crop&q=80&w=400'
        },
        {
            title: 'SALES AND MARKETING',
            duration: '2 months',
            stipend: '7,500-10,000/month',
            image: 'https://images.unsplash.com/photo-1552664730-d6d62fda20?auto=format&fit=crop&q=80&w=400'
        },
        {
            title: 'VIDEO EDITOR',
            duration: '2 months',
            stipend: '7,500/month',
            image: 'https://images.unsplash.com/photo-1611166946952-cc931b8f3f?auto=format&fit=crop&q=80&w=400'
        },
        {
            title: 'WEB DEVELOPER',
            duration: '2 months',
            stipend: '5,000/month',
            image: 'https://images.unsplash.com/photo-1461749280689-d9a22c9a5a?auto=format&fit=crop&q=80&w=400'
        },
        {
            title: 'APP DEVELOPER',
            duration: '2 months',
            stipend: '5,000/month',
            image: 'https://images.unsplash.com/photo-1512927710757-ad1c484208?auto=format&fit=crop&q=80&w=400'
        },
        {
            title: 'CAMPUS HEAD',
            duration: '2 months',
            stipend: '5,000/month',
            image: 'https://images.unsplash.com/photo-1521737604894-d14cc2379ce?auto=format&fit=crop&q=80&w=400'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a2a] to-[#200d42] pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden min-h-screen">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* VR Gaming Image */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <img 
                                src="https://i0.wp.com/ingluglobal.in/wp-content/uploads/2023/11/7-Johny-Playing-VR-1-1.png?w=911"
                                alt="VR Gaming Experience"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <div className="relative z-10 mb-8">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="p-3 rounded-full bg-inglu-primary/20 backdrop-blur-md border border-white/20">
                                    <Briefcase className="w-8 h-8 text-inglu-primary" />
                                </div>
                                <div className="p-3 rounded-full bg-inglu-accent/20 backdrop-blur-md border border-white/20">
                                    <Users className="w-8 h-8 text-inglu-accent" />
                                </div>
                                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                Build Your Future With <span className="bg-gradient-to-r from-inglu-primary to-inglu-accent bg-clip-text text-transparent">Inglu Global</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Join a dynamic team shaping ideas, innovation, and global impact. At Inglu Global, we believe in empowering individuals with opportunities to grow, learn, and build meaningful careers. Explore roles that challenge your creativity and enhance your professional journey.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                                    <TrendingUp className="w-8 h-8 text-inglu-primary mx-auto mb-2" />
                                    <h3 className="text-lg font-semibold text-white">Real-World Experience</h3>
                                    <p className="text-gray-300 text-sm">Hands-on training</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                                    <Award className="w-8 h-8 text-inglu-primary mx-auto mb-2" />
                                    <h3 className="text-lg font-semibold text-white">Skill Enhancement</h3>
                                    <p className="text-gray-300 text-sm">Professional growth</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                                    <Users className="w-8 h-8 text-inglu-primary mx-auto mb-2" />
                                    <h3 className="text-lg font-semibold text-white">Community & Networking</h3>
                                    <p className="text-gray-300 text-sm">Build connections</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
                            <h2 className="text-2xl font-bold text-white mb-6">Kickstart Your Career</h2>
                            <p className="text-gray-300 mb-8">
                                Internship Programs at Inglu Global
                            </p>
                            <p className="text-inglu-primary font-semibold mb-6">
                                Kickstart your professional journey with hands-on experience.
                            </p>
                        </div>
                        
                        {/* Additional Content to Fill Space */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-white mb-4">Why Choose INGLU?</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-inglu-primary rounded-full"></div>
                                        <span>Industry-relevant skills development</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-inglu-primary rounded-full"></div>
                                        <span>Experienced mentorship guidance</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-inglu-primary rounded-full"></div>
                                        <span>Global networking opportunities</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-inglu-primary rounded-full"></div>
                                        <span>Certificate of completion</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-white mb-4">Growth Journey</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-inglu-primary text-white flex items-center justify-center text-sm font-bold">1</div>
                                        <span className="text-gray-300">Apply & Get Selected</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-inglu-primary text-white flex items-center justify-center text-sm font-bold">2</div>
                                        <span className="text-gray-300">Learn & Work</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-inglu-primary text-white flex items-center justify-center text-sm font-bold">3</div>
                                        <span className="text-gray-300">Enhance Skills</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-inglu-primary text-white flex items-center justify-center text-sm font-bold">4</div>
                                        <span className="text-gray-300">Grow Your Career</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Internship Programs */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-12">Internship Programs</h2>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {internshipPrograms.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <img 
                                        src={program.image} 
                                        alt={program.title} 
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                                        <div className="space-y-1 text-gray-300">
                                            <p className="text-sm">Duration: <span className="text-inglu-primary font-semibold">{program.duration}</span></p>
                                            <p className="text-sm">Stipend: <span className="text-inglu-primary font-semibold">{program.stipend}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Model */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">This model was developed by INGLU</h3>
                        <p className="text-gray-300 leading-relaxed text-center">
                            This model was developed by INGLU to address the vicious cycle of experience that every student must endure, i.e., we need internships to get experience, and for the experience we need internships.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div className="text-center">
                                <h4 className="text-lg font-semibold text-inglu-primary mb-3">EXPERIENCE</h4>
                                <p className="text-gray-300">Hands-on training</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-lg font-semibold text-inglu-primary mb-3">SOCIAL FOCUS</h4>
                                <p className="text-gray-300">Community building</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-lg font-semibold text-inglu-primary mb-3">INCLUSION</h4>
                                <p className="text-gray-300">Equal opportunities</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-12">Common Queries</h2>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                            <h4 className="text-lg font-semibold text-white mb-3">Q: Do internships come with certificates?</h4>
                            <p className="text-gray-300">Yes, all interns receive verified completion certificates.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                            <h4 className="text-lg font-semibold text-white mb-3">Can internships turn into jobs?</h4>
                            <p className="text-gray-300">High-performing interns may receive job offers based on performance.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                            <h4 className="text-lg font-semibold text-white mb-3">Are internships remote or onsite?</h4>
                            <p className="text-gray-300">We offer both remote and onsite internship opportunities.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                            <h4 className="text-lg font-semibold text-white mb-3">What's the application process?</h4>
                            <p className="text-gray-300">Simple online application with quick response time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch With INGLU</h2>
                        <p className="text-gray-300 mb-12">Hey, here we are. If you need any help, just contact us with the help of below information</p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-gray-300">
                                <Mail className="shrink-0" size={20} />
                                <span>info@ingluglobal.in</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <Phone className="shrink-0" size={20} />
                                <span>+91 7827808413</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <MapPin className="shrink-0" size={20} />
                                <span>82, SatyaNiketan, First Floor, New Delhi - 110021</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-white font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-inglu-primary focus:ring-2 focus:ring-inglu-primary/20"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-white font-medium mb-2">Email Id</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-inglu-primary focus:ring-2 focus:ring-inglu-primary/20"
                                    placeholder="Email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Contact Number</label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-inglu-primary focus:ring-2 focus:ring-inglu-primary/20"
                                    placeholder="Contact Number"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">College / Institute / Organisation</label>
                                <input
                                    type="text"
                                    name="college"
                                    value={formData.college}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-inglu-primary focus:ring-2 focus:ring-inglu-primary/20"
                                    placeholder="College / Institute / Organisation"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Why should we hire you?</label>
                                <textarea
                                    name="whyHire"
                                    value={formData.whyHire}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-inglu-primary focus:ring-2 focus:ring-inglu-primary/20 resize-none"
                                    placeholder="Why should we choose you?"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-lg bg-inglu-primary hover:bg-blue-600 text-white font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
