import React from 'react';
import "../styles/LandingPgHeader.scss";

function LandingPgHeader(props){

    return(
            <div className="header-wrapper">
                <div className="header-title">{props.title}</div> <div className="header-divider" />
            </div>
    );

}

export default LandingPgHeader;