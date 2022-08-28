import "../../styles/HomeAP.scss";
import FeaturedInfo from "../../components/AdminPanelComponents/FeaturedInfo";
import SmallWidget from "../../components/AdminPanelComponents/SmallWidget";

const HomeAP = () => {
  return (
    <div className="homeAP-container">
        <FeaturedInfo />
        <div className="home-widgets">
            <SmallWidget />
        </div>
    </div>
  )
}

export default HomeAP;