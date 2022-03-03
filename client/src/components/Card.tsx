import React from 'react';
import "../styles/Card.scss";

type CardProps = { 
    title:String;
    desc:String;
    key:number;
}

function Card(props:CardProps){
    

    return(
        <>
            <div className="card-container">
                <div className="card-title">{props.title}</div>
                <div className="card-desc">{props.desc}</div>
            </div>
        </>
    );
}

export default Card;