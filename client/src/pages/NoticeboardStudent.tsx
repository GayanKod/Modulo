import Dropdown from '../components/Noticeboard/Dropdown';
import "../styles/NoticeBoard.scss";
import "../styles/StudentNoticesStyles.scss";
import Navbar2 from '../components/Navbar2';
import NoticeContainer from "../components/Noticeboard/NoticeBox";
import Footer from '../components/Footer/Footer';

function NoticeboardStudent(){

    return  (
      <div>
       <div>
            <Navbar2 />
            <div className="NoticeBoard">
                    <span className ="NoticeBoard-title">  
                   
                     <div id='leftbox'>
                     <h1>Notice Board</h1>
                     </div>
                     <div id='rightbox'>
                     <p>Order by:</p><Dropdown/>
                     </div>
                     </span>
                     <br></br>
         
            <div className="stu-buttons">
                     <div id='leftbox'>
                     <div className='btn3'>
                     <button className='A1'>
                        Announcements
                     </button> 
                     </div>
                     </div>                  
                    
                     &nbsp;&nbsp;&nbsp;

                     <div id='rightbox'>
                     <div className='btn4'>
                     <button className='A2'>
                        Accomplishments
                     </button> 
                     </div>

                     </div>
            </div>

                    <br></br>
                    <br></br>
                    <div>        
                           <NoticeContainer/>    
                           <br></br>
                 </div> 
                <br></br>                      
               
              <br></br>   
             </div>  
            <br></br>  
         </div>
         <Footer/>
      </div>


         
     );

  }
  export default NoticeboardStudent;