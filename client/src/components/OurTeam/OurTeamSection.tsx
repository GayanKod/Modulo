import React from 'react';
import LandingPgHeader from "../LandingPgHeader";
import MemberCard from "./MemberCard";
import {OurTeamDetails} from "./OurTeamDetails";
import "../../styles/OurTeamSection.scss";

function OurTeamSection(){

    return(
        <>
        <LandingPgHeader title="Our Team"/>
        <div className="teammember-card-container" id="Our-Team">

            {OurTeamDetails.map((item, index) => {
                return(
                    <MemberCard 
                        name = {item.name}
                        role = {item.role}
                        desc = {item.desc}
                        image = {item.image}
                        li = {item.li}
                        tw = {item.tw}
                        fb = {item.fb}
                        insta = {item.insta}
                        gh = {item.gh}
                        id = {index}
                    />
                );
            })}
        </div>
        </>
    );
}

export default OurTeamSection;
