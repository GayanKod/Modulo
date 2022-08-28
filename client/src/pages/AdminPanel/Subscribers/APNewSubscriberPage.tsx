import "../../../styles/AdminPanelHome.scss";
import NavbarAP from '../../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../../components/AdminPanelComponents/SidebarAP';
import NewSubscriberAP from './NewSubscriberAP';

const APNewSubsciberPage = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <NewSubscriberAP  />
        </div>
    </>
  )
}

export default APNewSubsciberPage;