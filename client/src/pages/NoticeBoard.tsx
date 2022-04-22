import React, {FC, ChangeEvent, useState} from 'react';
import NoticeCard from "../components/Noticeboard/NoticeCard";
import NoticeInput from '../components/Noticeboard/NoticeInput';
import Dropdown from '../components/Noticeboard/Dropdown';
import "../styles/NoticeBoard.scss";
import Navbar2 from '../components/Navbar2';

function NoticeBoard(){

  return  (
     <div>
            <Navbar2 />
            <div className="NoticeBoard">
                  <span className ="NoticeBoard-title">   
                                  <h1>Notice Board</h1>
                                  <p>Order by:</p><Dropdown/>
                  </span>
                  <br></br>
                  <div>
                  <NoticeInput />
                  </div>     
         </div>
     </div>    
       
);
}

     

export default NoticeBoard;
   