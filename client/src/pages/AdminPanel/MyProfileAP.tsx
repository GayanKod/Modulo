import React from 'react'
import "../../styles/AdminPanelHome.scss";
import NavbarAP from "../../components/AdminPanelComponents/NavbarAP";
import SidebarAP from '../../components/AdminPanelComponents/SidebarAP';
import MyProfileDisplayEdit from "../../components/MyProfileDisplayEdit";


const MyProfileAP = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <MyProfileDisplayEdit  />
        </div>
    </>
  )
}

export default MyProfileAP;