import { motion } from 'framer-motion';

const Brands = () => {
    const brandLogos = [
        { src: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg", alt: "Slack", href: "#" },
        { src: "https://www.vectorlogo.zone/logos/netflix/netflix-icon.svg", alt: "Netflix", href: "#" },
        { src: "https://www.vectorlogo.zone/logos/google/google-icon.svg", alt: "Google", href: "#" },
        { src: "https://www.vectorlogo.zone/logos/airbnb/airbnb-icon.svg", alt: "Airbnb", href: "#" },
        { src: "https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg", alt: "YouTube", href: "#" },
        { src: "https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg", alt: "Instagram", href: "#" }
    ];

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

                {/* Simple Logo Grid */}
                <div className="flex items-center justify-center flex-wrap gap-12 md:gap-16">
                    {brandLogos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-12 md:h-16 w-auto object-contain"
                            />
                            <span className="text-gray-400 text-sm md:text-base font-medium">
                                {logo.alt}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
