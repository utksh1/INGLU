import AboutHero from '../components/about/AboutHero';
import ProblemSolution from '../components/about/ProblemSolution';
import ImpactStats from '../components/about/ImpactStats';
import KeySegments from '../components/sections/KeySegments';
import CommunityCulture from '../components/about/CommunityCulture';
import AboutCTA from '../components/about/AboutCTA';
import ParallaxFloatingElements from '../components/common/ParallaxFloatingElements';

const About = () => {
    return (
        <div className="min-h-screen bg-[#05050A] text-white relative overflow-hidden">
            <ParallaxFloatingElements />
            <AboutHero />
            <ProblemSolution />
            <KeySegments />
            <CommunityCulture />
            <ImpactStats />
            <AboutCTA />
        </div>
    );
};

export default About;
