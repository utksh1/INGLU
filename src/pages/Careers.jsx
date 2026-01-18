import CareerHero from '../components/careers/CareerHero';
import WhyJoin from '../components/careers/WhyJoin';
import OpportunitiesListing from '../components/careers/OpportunitiesListing';
import GrowthJourney from '../components/careers/GrowthJourney';
import RealStories from '../components/careers/RealStories';
import ApplicationCTA from '../components/careers/ApplicationCTA';
import ParallaxFloatingElements from '../components/common/ParallaxFloatingElements';

const Careers = () => {
    return (
        <div className="min-h-screen text-white overflow-hidden relative">
            <ParallaxFloatingElements />
            <CareerHero />
            <WhyJoin />
            <GrowthJourney />
            <OpportunitiesListing />
            <RealStories />
            <ApplicationCTA />
        </div>
    );
};

export default Careers;
