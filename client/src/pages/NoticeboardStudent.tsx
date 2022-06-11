import React, {FC, ChangeEvent, useState} from 'react';
import NoticeCard from "../components/Noticeboard/NoticeCard";
import Dropdown from '../components/Noticeboard/Dropdown';
import "../styles/NoticeBoard.scss";
import "../styles/StudentNoticesStyles.scss";
import Navbar2 from '../components/Navbar2';


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
                    <span className='btn4'>
                    <button>Accouncements</button> 
                    </span>
                    
                    &nbsp;&nbsp;&nbsp;


                    <span className='btn4'>
                    <button>Accomplishments</button> 
                    </span>                      
              </div>
            </div>
                 
        </div>   
       
     
         
     );

  }
  
       

  export default NoticeboardStudent;