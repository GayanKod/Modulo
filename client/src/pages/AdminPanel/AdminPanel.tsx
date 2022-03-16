import React from 'react'
import "../../styles/AdminPanel.scss";
import NavbarAP from '../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../components/AdminPanelComponents/SidebarAP';
import HomeAP from '../AdminPanel/HomeAP';

const AdminPanel = () => {
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

export default AdminPanel;