import { Link } from 'react-router-dom';
import "../styles/HeroSection.scss";
import heroImg from "../assets/img/heroImg.png";

function HeroSection(){

    return(
        <>
        <div className="hero-section">
            <div className="hero-section-title">Make your</div><br/>
            <div className="hero-section-title Edu">Educational</div><br/>
            <div className="hero-section-title Env">Environment</div><br/>
            <div className="hero-section-title">One Click Away</div>
        </div>
        <div className="hero-image-wrapper">
            <img src={heroImg} alt="hero-section" className="hero-image" />
        </div>
        <div className="login-btn-wrapper">
            <Link to="/login"><button className="login-btn">Login</button></Link>
        </div>
        </>
    );


}

export default HeroSection;