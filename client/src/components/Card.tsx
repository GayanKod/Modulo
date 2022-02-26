import React from 'react';
import "../styles/Card.scss";

function Card(props){

    

    return(
        <>
            <div className="card-container" style={
                {
                    width: props.width,
                    height: props.height
                }
            }>
                <div className="card-title">{props.title}</div>
                <div className="card-desc">{props.desc}</div>
            </div>
        </>
    );
}

export default Card;