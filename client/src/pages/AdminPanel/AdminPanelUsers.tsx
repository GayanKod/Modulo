import React from 'react'
import "../../styles/AdminPanelHome.scss";
import NavbarAP from '../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../components/AdminPanelComponents/SidebarAP';
import UserListAP from './UserListAP';

const AdminPanelUsers = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <UserListAP  />
        </div>
    </>
  )
}

export default AdminPanelUsers;