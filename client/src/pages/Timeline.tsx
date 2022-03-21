import TimelineContainer from "../components/Timeline/TimelineContainer";
import Navbar2 from "../components/Navbar2";
import PageTitle from "../components/PageTitle";
import "../styles/TimelinePage.scss";
function Timeline(){
    return(
        <>
        <Navbar2/>
        <PageTitle title="Activity Timeline"/>
        <TimelineContainer/>
        </>
        
    );
   
}
export default Timeline;