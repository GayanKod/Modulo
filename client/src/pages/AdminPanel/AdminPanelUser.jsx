import React from 'react'
import "../../styles/AdminPanelHome.scss";
import NavbarAP from '../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../components/AdminPanelComponents/SidebarAP';
import User from './User';

const AdminPanelUser = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <User  />
        </div>
    </>
  )
}

export default AdminPanelUser