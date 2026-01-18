import Hero from '../components/sections/Hero';
import E3Model from '../components/sections/E3Model';
import HomeSegments from '../components/sections/HomeSegments';
import Brands from '../components/sections/Brands';
import Analytics from '../components/sections/Analytics';
import Testimonials from '../components/sections/Testimonials';
import ParallaxFloatingElements from '../components/common/ParallaxFloatingElements';

const Home = () => {
    return (
        <>
            <ParallaxFloatingElements />
            <Hero />
            <E3Model />
            <HomeSegments />
            <Brands />
            <Analytics />
            <Testimonials />
        </>
    );
};

export default Home;
