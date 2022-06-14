import React, {FC, ChangeEvent, useState} from 'react';
import Dropdown from '../components/Noticeboard/Dropdown';
import DropdownV2 from '../components/Noticeboard/DropdownV2';
import "../styles/NoticeBoard.scss";
import Navbar2 from '../components/Navbar2';
import NoticeContainer from '../components/Noticeboard/NoticeBox';
import Footer from '../components/Footer/Footer';

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
                    <br></br>
                </div>
                    
           </div>
               <div>
               <Footer/>
               </div>
       </div>    
       
  );
  }
  
       
  
  export default NoticeboardStaff;