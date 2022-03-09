import React, {useState}  from 'react';
import "../../styles/NoticeCard.scss";
import {INotice} from "./interface";



interface Props {

  notice: INotice;
  deleteNotice(noticeTitleToDelete: string): void;
  editNotice(noticeToEdit: string): void;
  sendSMS(noticeToSendSMS: string): void;

}



const NoticeCard = ({notice, deleteNotice, editNotice, sendSMS}: Props)=>
{
    return (
     
    <div className="notice">

      <div className="content">
          <div className="title">
            {notice.noticeTitle}
               
                  
             
            
            </div>

          <hr></hr>
          <p> {notice.description}</p>
          
          <br></br>

          <div className="buttons">

                <span className='btn1'>
                  <button onClick={() => {
                deleteNotice(notice.noticeTitle);
                }}
                >Delete Notice</button> 

                </span>
                
                &nbsp;&nbsp;&nbsp;


                <span className='btn2'>
                        <button onClick={() => {
                      editNotice(notice.noticeTitle);
                }}
                >Edit Notice</button> 

                </span>

                &nbsp;&nbsp;&nbsp;


                <span className='btn3'>
                        <button onClick={() => {
                      sendSMS(notice.noticeTitle);
                }}
                >Send SMS</button> 

                </span>

          

          </div>
        


      </div>

      
      
    </div>
    );
};

export default NoticeCard;
