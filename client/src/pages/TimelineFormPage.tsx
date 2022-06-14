import Navbar2 from "../components/Navbar2";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer/Footer"
import TimelineForm from "../components/Timeline/TimelineForm"
function TimelineFormPage(){
    return(
        <>
        <Navbar2/>
        <PageTitle title="Timeline Construction"/>
        <TimelineForm/>
        <Footer/>
        </>
        
    );
   
}
export default TimelineFormPage;