import Hero from '../components/sections/Hero';
import ImpactStats from '../components/sections/ImpactStats';
import E3Model from '../components/sections/E3Model';
import KeySegments from '../components/sections/KeySegments';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <ImpactStats />
            <E3Model />
            <KeySegments />
            <Testimonials />
        </>
    );
};

export default Home;
