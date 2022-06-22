import React from 'react'
import "../../../styles/AdminPanelHome.scss";
import NavbarAP from '../../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../../components/AdminPanelComponents/SidebarAP';
import NewAdminAP from './NewAdminEditorAP';

const AdminPanelNewUser = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <NewAdminAP  />
        </div>
    </>
  )
}

export default AdminPanelNewUser;