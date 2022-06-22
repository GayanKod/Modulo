import React from 'react'
import "../../../styles/AdminPanelHome.scss";
import NavbarAP from '../../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../../components/AdminPanelComponents/SidebarAP';
import AdminsListAP from './AdminsListAP';

const AdminPanelUsers = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <div className="AP-AdminsTitle">
            </div>
            <AdminsListAP  />
        </div>
    </>
  )
}

export default AdminPanelUsers;