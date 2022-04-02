import React from 'react';
import "../../styles/FeaturedInfo.scss";

const FeaturedInfo = () => {
  return (
    <div className="featuredAP">
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Super Admins</span>
        <div className="featuredAP-CountContainer">
          <span className="featuredAP-Count">02</span>
        </div>
        <span className="featuredAP-Des">Total registered super admins</span>
      </div>
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Degrees</span>
        <div className="featuredAP-CountContainer">
          <span className="featuredAP-Count">03</span>
        </div>
        <span className="featuredAP-Des">Total degrees offer</span>
      </div>
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Subscribers</span>
        <div className="featuredAP-CountContainer">
          <span className="featuredAP-Count">2,225</span>
        </div>
        <span className="featuredAP-Des">Total no. of registered students</span>
      </div>
    </div>
  )
}

export default FeaturedInfo;