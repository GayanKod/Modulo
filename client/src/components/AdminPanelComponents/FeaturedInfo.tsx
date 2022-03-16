import React from 'react';
import "../../styles/FeaturedInfo.scss";

const FeaturedInfo = () => {
  return (
    <div className="featuredAP">
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Super Admins</span>
        <div className="featuredAP-MoneyContainer">
          <span className="featuredAP-Money">02</span>
        </div>
        <span className="featuredAP-Sub">Total registered super admins</span>
      </div>
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Degrees</span>
        <div className="featuredAP-MoneyContainer">
          <span className="featuredAP-Money">03</span>
        </div>
        <span className="featuredAP-Sub">Total degrees offer</span>
      </div>
      <div className="featuredAP-Item">
        <span className="featuredAP-Title">Subscribers</span>
        <div className="featuredAP-MoneyContainer">
          <span className="featuredAP-Money">2,225</span>
        </div>
        <span className="featuredAP-Sub">Total no. of registered students</span>
      </div>
    </div>
  )
}

export default FeaturedInfo;