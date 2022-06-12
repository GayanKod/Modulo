import Dropdown from '../components/Noticeboard/Dropdown';
import "../styles/NoticeBoard.scss";
import "../styles/StudentNoticesStyles.scss";
import Navbar2 from '../components/Navbar2';
import NoticeContainer from "../components/Noticeboard/Noticebox";


function NoticeboardStudent(){

    return  (
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
           
            

            <div className="buttons1">
            
        
                     <span className='btn3'>
                     <button>Accouncements</button> 
                     </span>
                    
                     &nbsp;&nbsp;&nbsp;

                    <span className='btn4'>
                    <button>Accomplishments</button> 
                    </span> 

                    <div>
                    <NoticeContainer/>
                </div>                       
              </div>
            </div>
         </div>
         
     );

  }
  
       

  export default NoticeboardStudent;