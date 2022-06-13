import TimelineContainer from "../components/Timeline/TimelineContainer";
import Navbar2 from "../components/Navbar2";
import PageTitle from "../components/PageTitle";
import "../styles/TimelinePage.scss";
import Footer from "../components/Footer/Footer"
function Timeline(){
    return(
        <>
        <Navbar2/>
        <PageTitle title="Activity Timeline"/>
        <TimelineContainer/>
        <Footer/>
        </>
        
    );
   
}
export default Timeline;