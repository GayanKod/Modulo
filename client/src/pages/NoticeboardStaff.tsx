import React, {FC, ChangeEvent, useState} from 'react';
import NoticeCard from "../components/Noticeboard/NoticeCard";
import Dropdown from '../components/Noticeboard/Dropdown';
import DropdownV2 from '../components/Noticeboard/DropdownV2';
import "../styles/NoticeBoard.scss";
import Navbar2 from '../components/Navbar2';
import NoticeContainer from '../components/Noticeboard/NoticeBox';


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
                     <br></br>
                     <p>Display by:</p><DropdownV2/>
                     </div>

                                    
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                    <NoticeContainer/>
                </div>
                      
           </div>
                  
       </div>    
       
  );
  }
  
       
  
  export default NoticeboardStaff;