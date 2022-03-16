import React from 'react'
import "../../styles/NavbarAP.scss";

const NavbarAP = () => {
  return (
    <div className="adminpanel-topbar">
      <div className="adminpanel-topbarWrapper">
        <div className="adminpanel-topLeft">
          <span className="adminpanel-logo">modulo</span>
        </div>
        <div className="adminpanel-topCenter">
            <span className="adminpanel-institute-name">Faculty of IT, University of Moratuwa</span>
        </div>
        <div className="adminpanel-topRight">
          <img src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg" alt="" className="adminpanel-topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default NavbarAP;