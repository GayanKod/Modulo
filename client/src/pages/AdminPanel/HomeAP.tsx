import React from 'react';
import "../../styles/HomeAP.scss";
import FeaturedInfo from "../../components/AdminPanelComponents/FeaturedInfo";
import SmallWidget from "../../components/AdminPanelComponents/SmallWidget";
import LargeWidget from "../../components/AdminPanelComponents/LargeWidget";

const HomeAP = () => {
  return (
    <div className="homeAP-container">
        <FeaturedInfo />
        <div className="home-widgets">
            <SmallWidget />
            {/* <LargeWidget /> */}
        </div>
    </div>
  )
}

export default HomeAP;