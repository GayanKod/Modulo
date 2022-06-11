import React, {FC, ChangeEvent, useState} from 'react';
import NoticeCard from "../components/Noticeboard/NoticeCard";
import Dropdown from '../components/Noticeboard/Dropdown';
import "../styles/NoticeBoard.scss";
import Navbar2 from '../components/Navbar2';


function NoticeboardStaff(){

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
                    <br></br>
                      
           </div>
       </div>    
         
  );
  }
  
       
  
  export default NoticeboardStaff;