import React from 'react'
import "../../styles/AdminPanelHome.scss";
import NavbarAP from '../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../components/AdminPanelComponents/SidebarAP';
import NewUserAP from './NewUserAP';

const AdminPanelNewUser = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <NewUserAP  />
        </div>
    </>
  )
}

export default AdminPanelNewUser;