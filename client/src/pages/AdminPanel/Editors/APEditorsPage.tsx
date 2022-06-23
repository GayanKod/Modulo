import React from 'react'
import "../../../styles/AdminPanelHome.scss";
import NavbarAP from '../../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../../components/AdminPanelComponents/SidebarAP';
import EditorsListAP from './EditorsListAP';

const APEditorsPage = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <div className="AP-AdminsTitle">
            </div>
            <EditorsListAP  />
        </div>
    </>
  )
}

export default APEditorsPage;