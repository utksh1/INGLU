import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import LogoLoop from '../ui/LogoLoop';

const Brands = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const brandLogos = [
        { src: "https://logo.clearbit.com/google.com", alt: "Google", href: "https://google.com" },
        { src: "https://logo.clearbit.com/microsoft.com", alt: "Microsoft", href: "https://microsoft.com" },
        { src: "https://logo.clearbit.com/spotify.com", alt: "Spotify", href: "https://spotify.com" },
        { src: "https://logo.clearbit.com/amazon.com", alt: "Amazon", href: "https://amazon.com" },
        { src: "https://logo.clearbit.com/netflix.com", alt: "Netflix", href: "https://netflix.com" },
        { src: "https://logo.clearbit.com/airbnb.com", alt: "Airbnb", href: "https://airbnb.com" },
        { src: "https://logo.clearbit.com/uber.com", alt: "Uber", href: "https://uber.com" },
        { src: "https://logo.clearbit.com/adobe.com", alt: "Adobe", href: "https://adobe.com" },
        { src: "https://logo.clearbit.com/salesforce.com", alt: "Salesforce", href: "https://salesforce.com" },
        { src: "https://logo.clearbit.com/zoom.us", alt: "Zoom", href: "https://zoom.us" }
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + brandLogos.length) % brandLogos.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % brandLogos.length);
    };

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Brands who used our services</h2>
                </motion.div>

                {/* Logo Carousel */}
                <div className="relative">
                    <div className="flex items-center justify-center gap-4">
                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrev}
                            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                            aria-label="Previous brands"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Logo Loop Container */}
                        <div className="flex-1 overflow-hidden">
                            <LogoLoop
                                logos={brandLogos}
                                speed={80}
                                direction="left"
                                logoHeight={60}
                                gap={40}
                                pauseOnHover={true}
                                hoverSpeed={0}
                                scaleOnHover={true}
                                className="w-full"
                                ariaLabel="Partner brands"
                            />
                        </div>

                        <button
                            onClick={handleNext}
                            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                            aria-label="Next brands"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
