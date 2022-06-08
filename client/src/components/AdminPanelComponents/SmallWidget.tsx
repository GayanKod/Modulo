import React from 'react';
import "../../styles/SmallWidget.scss";
import { Visibility } from "@mui/icons-material";

const SmallWidget = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Username</span>
            <span className="widgetSm-userTitle">Bsc. IT (hons)</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Username</span>
            <span className="widgetSm-userTitle">Bsc. IT (hons)</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Username</span>
            <span className="widgetSm-userTitle">Bsc. IT (hons)</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Username</span>
            <span className="widgetSm-userTitle">Bsc. IT (hons)</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Username</span>
            <span className="widgetSm-userTitle">Bsc. IT (hons)</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default SmallWidget