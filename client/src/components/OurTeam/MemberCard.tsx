import React from 'react';
import "../../styles/MemberCard.scss";

//Reference to use React FC in TS "https://www.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript"

const MemberCard: React.FC<
    {
        image:string,
        name:string,
        role:string,
        desc:string,
        tw:string,
        li:string,
        insta:string,
        fb:string,
        gh:string,
        id:number
    }> = 
    ({name, role, desc, tw, li, insta, fb, gh, image, id}) => {
    return (
            <>
            <div className="mcard-container">
                <div className="mcard-team" key={id}>
                    <div className="mcard-team-img">
                        <img src={image} alt="Team member"/>
                        <div className="mcard-team-social">
                            <a href={tw} className="mcard-social-tw"><i className="fab fa-brands fa-twitter"></i></a>
                            <a href={fb} className="mcard-social-fb"><i className="fab fa-brands fa-facebook-f"></i></a>
                            <a href={li} className="mcard-social-li"><i className="fab fa-brands fa-linkedin-in"></i></a>
                            <a href={insta} className="mcard-social-in"><i className="fab fa-brands fa-instagram"></i></a>
                            <a href={gh} className="mcard-social-gh"><i className="fab fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="mcard-team-content">
                        <h2>{name}</h2>
                        <h3>{role}</h3>
                        <p>{desc}</p>
                     </div>
                </div>
            </div>
        </>
    );
}

export default MemberCard;