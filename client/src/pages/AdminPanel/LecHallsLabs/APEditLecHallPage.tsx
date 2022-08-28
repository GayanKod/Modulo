
import "../../../styles/AdminPanelHome.scss";
import NavbarAP from '../../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../../components/AdminPanelComponents/SidebarAP';
import EditLecHall from './EditLecHall';

const APEditLecHallPage = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <EditLecHall  />
        </div>
    </>
  )
}

export default APEditLecHallPage;