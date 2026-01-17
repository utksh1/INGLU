import { useRef } from 'react';
import CareerHero from '../components/careers/CareerHero';
import WhyJoin from '../components/careers/WhyJoin';
import GrowthJourney from '../components/careers/GrowthJourney';
import RoleListing from '../components/careers/RoleListing';
import CareerTestimonials from '../components/careers/CareerTestimonials';

const Careers = () => {
    // Create a ref for the RoleListing section (the target)
    const roleListingRef = useRef(null);

    const scrollToJobs = () => {
        const element = document.getElementById('roles');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-inglu-primary/30">
            {/* 1. Hero Section */}
            <CareerHero scrollToJobs={scrollToJobs} />

            {/* 2. Why Join Us */}
            <WhyJoin />

            {/* 3. Growth Journey Roadmap */}
            <GrowthJourney />

            {/* 4. Opportunities Listing (Target for Scroll) */}
            <RoleListing />

            {/* 5. Real Stories */}
            <CareerTestimonials />
        </div>
    );
};

export default Careers;
