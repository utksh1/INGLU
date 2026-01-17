import { motion } from 'framer-motion';
import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: 'Harsh',
        role: 'Graphics Intern',
        quote: 'The seniors were very polite and easy to work with....have had spend a wonderful time ....',
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200',
        rating: 5
    },
    {
        name: 'Nishant',
        role: 'Operations',
        quote: 'Working in Inglu as an intern was really a good experience, gained a lot of new things to learn. I enjoyed this internship',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        rating: 5
    },
    {
        name: 'Mayank',
        role: 'Ex- Media Head',
        quote: 'At Inglu, I had a crazy experience. Made many friends here with whom I made tons of memories. I got exposure as a Concert Photographer & shot artists like Paradox, Amit Trivedi, Arjun Kanungo etc.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        rating: 5
    },
    {
        name: 'Chahat Adhikari',
        role: 'Operations',
        quote: 'Its an amazing experience to be a part of this organisation, I\'ve got to learn so many things from webinars and tasks that were allotted during the internship period.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
        rating: 5
    },
    {
        name: 'Divyansh Srivastav',
        role: 'Project Head',
        quote: 'Excellent work environment. Got a lot to learn from seniors. Have been a great work time. I just completed my social media marketing internship here and have got the best mentorship.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
        rating: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-inglu-primary/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-inglu-accent/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-white mb-4">What Our Community Says</h2>
                    <p className="text-gray-400 text-lg">Real stories from real students who transformed their careers</p>
                </motion.div>

                {/* Main Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-[400px] md:h-[350px]">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="relative">
                                {/* Quote Icon */}
                                <div className="absolute -top-8 -left-8 text-inglu-primary/20">
                                    <Quote size={80} />
                                </div>

                                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl max-w-3xl mx-auto">
                                    {/* Rating Stars */}
                                    <div className="flex justify-center gap-1 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 text-center italic">
                                        "{testimonials[currentIndex].quote}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="relative">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="w-16 h-16 rounded-full object-cover border-3 border-inglu-primary shadow-lg"
                                            />
                                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-inglu-primary rounded-full flex items-center justify-center">
                                                <Star size={12} className="fill-white text-white" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                                            <p className="text-inglu-primary font-semibold">{testimonials[currentIndex].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`relative group transition-all duration-300 ${index === currentIndex ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-80'
                                }`}
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover border-2 transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'border-inglu-primary shadow-lg shadow-inglu-primary/30' 
                                        : 'border-white/20 group-hover:border-inglu-primary/50'
                                }"
                            />
                            {index === currentIndex && (
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-inglu-primary rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
