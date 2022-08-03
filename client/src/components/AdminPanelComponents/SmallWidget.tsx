import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {isAuth} from "../../helpers/auth"
import axios from 'axios';
import "../../styles/SmallWidget.scss";
import { Visibility } from "@mui/icons-material";

const SmallWidget = () => {

  const [row1, setRow1] = useState<any>([]);
  const [row2, setRow2] = useState<any>([]);
  const [row3, setRow3] = useState<any>([]);
  const [row4, setRow4] = useState<any>([]);
  const [row5, setRow5] = useState<any>([]);
  //Get data from Backend
  useEffect(() => {
    function getRecenetUsers(){
        axios.get(`https://localhost:5000/api/User/get-users/usersRecent/${isAuth().institutes[0].id}`).then((res) => {
            setRow1(res.data[0]);
            setRow2(res.data[1]);
            setRow3(res.data[2]);
            setRow4(res.data[3]);
            setRow5(res.data[4]);
            console.log(res.data);
        }).catch((err) => {
            console.log(err.message);
        })
    }
    getRecenetUsers();
  }, [])


  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Recently Joined Users</span>
      <table className="widgetSm-table">
        <tr>
          <td>
            <img
              src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
              alt=""
              className="widgetSmImg"
            />
          </td>
          <td>
            <div className="widgetSm-user">
              <span className="widgetSm-username">{row1.firstName} {row1.lastName}</span>
            </div>
          </td>
          <td>
            <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row1.gender}</span>
            </div>
          </td>
          <td>
            <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row1.role}</span>
            </div>
          </td>
          <td>
            <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row1.email}</span>
            </div>
          </td>
          <td>
            <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row1.mobileNumber}</span>
            </div>
          </td>
          <td>
            <Link to={"/admin-panel/admins/" + row1.id}>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
          </td>
        </tr>
        {row2 !== undefined ?
        <tr>
            <td>
                <img
                src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
                alt=""
                className="widgetSmImg"
              />
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-username">{row2.firstName} {row2.lastName}</span>
               </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row2.gender}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row2.role}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row2.email}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row2.mobileNumber}</span>
              </div>
            </td>
            <td>
            <Link to={"/admin-panel/admins/" + row2.id}>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
            </td>
        </tr>:""}
        {row3 !== undefined ?
        <tr>
            <td>
                <img
                src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
                alt=""
                className="widgetSmImg"
              />
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-username">{row3.firstName} {row3.lastName}</span>
               </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row3.gender}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row3.role}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row3.email}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row3.mobileNumber}</span>
              </div>
            </td>
            <td>
            <Link to={"/admin-panel/admins/" + row3.id}>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
            </td>
        </tr>:""}
        {row4 !== undefined ?
        <tr>
            <td>
                <img
                src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
                alt=""
                className="widgetSmImg"
              />
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-username">{row4.firstName} {row4.lastName}</span>
               </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row4.gender}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row4.role}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row4.email}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row4.mobileNumber}</span>
              </div>
            </td>
            <td>
            <Link to={"/admin-panel/admins/" + row4.id}>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
            </td>
        </tr>:""}
        {row5 !== undefined ?
        <tr>
            <td>
                <img
                src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
                alt=""
                className="widgetSmImg"
              />
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-username">{row5.firstName} {row5.lastName}</span>
               </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row5.gender}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row5.role}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row5.email}</span>
              </div>
            </td>
            <td>
              <div className="widgetSm-user">
              <span className="widgetSm-userTitle">{row5.mobileNumber}</span>
              </div>
            </td>
            <td>
            <Link to={"/admin-panel/admins/" + row5.id}>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
            </td>
        </tr>:""}
      </table>
    </div>
  )
}

export default SmallWidget