import React from 'react'
import "../../../styles/AdminPanelHome.scss";
import NavbarAP from '../../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../../components/AdminPanelComponents/SidebarAP';
import SubscribersListAP from './SubscribersListAP';

const APSubscribersPage = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <div className="AP-AdminsTitle">
            </div>
            <SubscribersListAP  />
        </div>
    </>
  )
}

export default APSubscribersPage;