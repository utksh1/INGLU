import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxFloatingElements = () => {
    const { scrollY } = useScroll();

    // Create disparate parallax speeds
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y3 = useTransform(scrollY, [0, 1000], [0, 300]);
    const y4 = useTransform(scrollY, [0, 1000], [0, -250]);

    const rotate1 = useTransform(scrollY, [0, 1000], [0, 90]);
    const rotate2 = useTransform(scrollY, [0, 1000], [0, -60]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Element 1: Top Left Blur */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute top-[10%] left-[5%] w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"
            />

            {/* Element 2: Center Right Geometric */}
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute top-[40%] right-[10%] w-48 h-48 border border-blue-500/10 rounded-[2rem] backdrop-blur-[2px]"
            />

            {/* Element 3: Bottom Left Blob */}
            <motion.div
                style={{ y: y3 }}
                className="absolute top-[70%] left-[15%] w-80 h-80 bg-blue-600/5 rounded-full blur-3xl mix-blend-screen"
            />

            {/* Element 4: Top Right Accent */}
            <motion.div
                style={{ y: y4, rotate: rotate1 }}
                className="absolute top-[20%] right-[20%] w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"
            />

            {/* Element 5: Floating Crosses/Shapes */}
            <motion.div
                style={{ y: y2, x: 50 }}
                className="absolute top-[85%] right-[30%] opacity-20"
            >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 0V40M0 20H40" stroke="currentColor" className="text-white" strokeWidth="2" />
                </svg>
            </motion.div>
        </div>
    );
};

export default ParallaxFloatingElements;
