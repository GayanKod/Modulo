import Dropdown from '../components/Noticeboard/Dropdown';
import {INotice} from "../components/Noticeboard/interface";
import NoticeData from '../components/Noticeboard/NoticeData';
import "../styles/NoticeBoard.scss";
import "../styles/StudentNoticesStyles.scss";
import Navbar2 from '../components/Navbar2';
import NoticeContainer from "../components/Noticeboard/NoticeBox";
import NoticeItem from '../components/Noticeboard/NoticeItem';
import Footer from '../components/Footer/Footer';

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
               <div className='btn3'>
                     <button>
                        <h2>Accouncements</h2>
                     </button> 
                     </div>
                    
                     &nbsp;&nbsp;&nbsp;

                    <div className='btn4'>
                    <button>
                        <h2>Accomplishments</h2>
                    </button> 
                    </div> 

                    <br></br><br></br><br></br>
                    <br></br><br></br><br></br>
                    <br></br><br></br><br></br>
                    <br></br><br></br><br></br>

                    <div>
                     
                           <NoticeContainer/>
                     
                 
                </div>                       
              </div>
            </div>
            
         </div>


         
     );

  }
  export default NoticeboardStudent;