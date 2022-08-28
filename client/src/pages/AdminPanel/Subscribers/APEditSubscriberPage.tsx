import "../../../styles/AdminPanelHome.scss";
import NavbarAP from '../../../components/AdminPanelComponents/NavbarAP';
import SidebarAP from '../../../components/AdminPanelComponents/SidebarAP';
import EditSubscriber from './EditSubscriber';

const APEditSubscriberPage = () => {
  return (
    <>
        <NavbarAP />
        <div className="sidebarAP-container">
            <SidebarAP />
            <EditSubscriber  />
        </div>
    </>
  )
}

export default APEditSubscriberPage;