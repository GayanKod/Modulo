
import "../../../styles/AdminPanelHome.scss";
import NavbarAP from '../../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../../components/AdminPanelComponents/SidebarAP';
import NewLecHallAP from './NewBatchAP';

const APNewLecHall = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <NewLecHallAP  />
        </div>
    </>
  )
}

export default APNewLecHall;