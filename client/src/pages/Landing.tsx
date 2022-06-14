import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/AppFeatures/FeaturesSection";
import OurTeamSection from "../components/OurTeam/OurTeamSection";
import Footer from "../components/Footer/Footer";

function Landing(){

    return(
        <>
            <Navbar />
            <HeroSection />
            <FeaturesSection/>
            <OurTeamSection/>
            <Footer/>
        </>
    );
}

export default Landing;