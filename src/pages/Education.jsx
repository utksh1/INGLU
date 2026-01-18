import CuetHero from '../components/education/CuetHero';
import WhatIsCuet from '../components/education/WhatIsCuet';
import CuetResources from '../components/education/CuetResources';
import PreparationFlow from '../components/education/PreparationFlow';
import CuetTrust from '../components/education/CuetTrust';
import ParallaxFloatingElements from '../components/common/ParallaxFloatingElements';

const Education = () => {
    return (
        <div className="min-h-screen text-white relative overflow-hidden">
            <ParallaxFloatingElements />

            {/* Global Background (inherits from body but added here for extra depth if needed) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-purple-900/5 pointer-events-none" />

            <CuetHero />
            <WhatIsCuet />
            <CuetResources />
            <PreparationFlow />
            <CuetTrust />

            {/* Bottom CTA for final push */}
            <section className="py-20 text-center relative z-10">
                <p className="text-gray-400 mb-6">Ready to start?</p>
                <button className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-bold transition-colors">
                    Access Study Material
                </button>
            </section>
        </div>
    );
};

export default Education;
