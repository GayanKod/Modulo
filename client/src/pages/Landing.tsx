import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/AppFeatures/FeaturesSection";
import OurTeamSection from "../components/OurTeam/OurTeamSection";

function Landing(){

    return(
        <>
            <Navbar />
            <HeroSection />
            <FeaturesSection/>
            <OurTeamSection/>
        </>
    );
}

export default Landing;