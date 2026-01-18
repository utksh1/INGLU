import MembershipHero from '../components/membership/MembershipHero';
import MembershipWhyJoin from '../components/membership/WhyJoin';
import MembershipForm from '../components/membership/RegistrationForm';
import ParallaxFloatingElements from '../components/common/ParallaxFloatingElements';

const Membership = () => {
    return (
        <div className="min-h-screen text-white overflow-hidden relative">
            <ParallaxFloatingElements />
            <MembershipHero />
            <MembershipWhyJoin />
            <MembershipForm />
        </div>
    );
};

export default Membership;
