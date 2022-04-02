import React from 'react'
import "../../styles/LargeWidget.scss";

const LargeWidget = () => {
      return (
        <div className="widgetLg-container">
          <h3 className="widgetLgTitle">Recent User Logins</h3>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Username</th>
              <th className="widgetLgTh">Date/Time</th>
              <th className="widgetLgTh">IP Address</th>
              <th className="widgetLgTh">Login Status</th>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLg-user">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
                  alt=""
                  className="widgetLg-Img"
                />
                <span className="widgetLg-username">194081L</span>
              </td>
              <td className="widgetLg-date">2 Jun 2021 19:55:51</td>
              <td className="widgetLg-ip">112.124.1.34</td>
              <td className="widgetLg-status">
                {/* <Button type="Approved" /> */}
                <button className="widgetLgButton Approved">Approved</button>
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLg-user">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
                  alt=""
                  className="widgetLg-Img"
                />
                <span className="widgetLg-username">194081L</span>
              </td>
              <td className="widgetLg-date">2 Jun 2021 19:34:18</td>
              <td className="widgetLg-ip">112.124.1.34</td>
              <td className="widgetLg-status">
                {/* <Button type="Declined" /> */}
                <button className="widgetLgButton Declined">Declined</button>
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLg-user">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
                  alt=""
                  className="widgetLg-Img"
                />
                <span className="widgetLg-username">194081L</span>
              </td>
              <td className="widgetLg-date">2 Jun 2021 19:32:43</td>
              <td className="widgetLg-ip">112.124.1.34</td>
              <td className="widgetLg-status">
                {/* <Button type="Pending" /> */}
                <button className="widgetLgButton Declined">Declined</button>
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLg-user">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png"
                  alt=""
                  className="widgetLg-Img"
                />
                <span className="widgetLg-username">194081L</span>
              </td>
              <td className="widgetLg-date">2 Jun 2021 19:32:23</td>
              <td className="widgetLg-ip">112.124.1.34</td>
              <td className="widgetLg-status">
                {/* <Button type="Approved" /> */}
                <button className="widgetLgButton Declined">Declined</button>
              </td>
            </tr>
          </table>
        </div>
      );
}

export default LargeWidget