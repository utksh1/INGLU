import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-inglu-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to our team and we'll get back to you soon!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo/Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full">
              <div className="text-center mb-8">
                <img 
                  src="https://i0.wp.com/ingluglobal.in/wp-content/uploads/2023/11/7-Johny-Playing-VR-1-1.png?w=911" 
                  alt="INGLU Contact" 
                  className="w-full max-w-xs mx-auto rounded-xl shadow-2xl"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-inglu-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-inglu-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Our Office</h3>
                    <p className="text-gray-400 text-sm">
                      82, SatyaNiketan<br />
                      First Floor<br />
                      New Delhi - 110021
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-inglu-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-inglu-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-400 text-sm">
                      +91 7827808413<br />
                      +91 999 046 1299
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-inglu-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-inglu-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-400 text-sm">
                      info@ingluglobal.in<br />
                      contact@ingluglobal.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-inglu-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-inglu-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-400 text-sm">
                      Mon-Fri: 10:00 AM - 6:00 PM<br />
                      Sat-Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Want to connect with us!
                </h2>
                <p className="text-gray-400">
                  Fill the form and our team will reach out to you soon!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter contact number"
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                    Select Reason
                  </label>
                  <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors">
                    <option className="bg-slate-900">General Inquiry</option>
                    <option className="bg-slate-900">Collab/Partnership</option>
                    <option className="bg-slate-900">Internship</option>
                    <option className="bg-slate-900">Event Support</option>
                    <option className="bg-slate-900">Membership Query</option>
                    <option className="bg-slate-900">Feedback/Suggestions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                    Enter Your Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Type your message here..."
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-inglu-primary transition-colors placeholder-gray-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    status === 'success' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-inglu-primary hover:bg-blue-600 text-white cursor-pointer'
                  }`}
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : status === 'success' ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;