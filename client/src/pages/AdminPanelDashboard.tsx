import React from 'react'
import "../styles/AdminPanelDashboard.scss";
import NavbarAP from '../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../components/AdminPanelComponents/SidebarAP';

const AdminPanelDashboard = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <div className="dashboardspace">dashboard space</div>
        </div>
    </>
  )
}

export default AdminPanelDashboard