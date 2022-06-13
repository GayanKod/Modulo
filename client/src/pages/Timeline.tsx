import TimelineContainer from "../components/Timeline/TimelineContainer";
import Navbar2 from "../components/Navbar2";
import PageTitle from "../components/PageTitle";
import "../styles/TimelinePage.scss";
import Footer from "../components/Footer/Footer"
import TimelineForm from "../components/Timeline/TimelineForm"
function Timeline(){
    return(
        <>
        <Navbar2/>
        <PageTitle title="Activity Timeline"/>
        <TimelineContainer/>
        <TimelineForm/>
        <Footer/>
        </>
        
    );
   
}
export default Timeline;