import "../../../styles/AdminPanelHome.scss";
import NavbarAP from '../../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../../components/AdminPanelComponents/SidebarAP';
import LecHallList from './DegreeList';

const APLecHallsPage = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <div className="AP-AdminsTitle">
            </div>
            <LecHallList  />
        </div>
    </>
  )
}

export default APLecHallsPage;