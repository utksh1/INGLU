import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MembershipLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1; // Increment progress
            });
        }, 20); // Adjust speed: 20ms * 100steps = 2000ms duration

        // Trigger completion slightly after progress hits 100
        const completeTimer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 overflow-hidden"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Abstract Background Emitters */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-6">
                {/* Animated Main Text */}
                <div className="overflow-hidden mb-8 h-20 flex items-center justify-center">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        INGLU <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">MEMBER</span>
                    </motion.h2>
                </div>

                {/* Dynamic Progress Bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ type: "spring", stiffness: 50 }}
                    />
                </div>

                {/* Status Text Cycler */}
                <div className="mt-4 h-6 text-center">
                    <motion.p
                        key={progress > 30 ? (progress > 70 ? "c3" : "c2") : "c1"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-gray-400 text-sm font-medium tracking-wide uppercase"
                    >
                        {progress < 35 && "Initiating..."}
                        {progress >= 35 && progress < 75 && "Connecting to Community..."}
                        {progress >= 75 && "Ready for Liftoff"}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default MembershipLoader;
