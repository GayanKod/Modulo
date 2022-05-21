import React from 'react'

import "../../styles/AdminPanelHome.scss";
import NavbarAP from '../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../components/AdminPanelComponents/SidebarAP';
import HomeAP from './HomeAP';

const AdminPanelHome = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <HomeAP />
        </div>
    </>
  )
}

export default AdminPanelHome;