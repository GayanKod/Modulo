import React from 'react';
import LandingPgHeader from '../LandingPgHeader';
import Card from "../Card";
import {FeaturesDetails} from "../AppFeatures/FeaturesDetails";
import "../../styles/FeaturesSection.scss";

function FeaturesSection(){

    return(
        <>
            <LandingPgHeader title="Features"/>
            <div className="features-card-container">
                {FeaturesDetails.map((item,index)=>{
                    return(
                        <Card key={index} desc={item.desc} title={item.title}/>
                    );
                })} 
            </div>
        </>
    );
}

export default FeaturesSection;