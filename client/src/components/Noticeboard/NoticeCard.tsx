import React, {useState}  from 'react';
import { render } from 'react-dom';
import "../../styles/NoticeCard.scss";
import {INotice} from "./interface";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

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
            &nbsp;&nbsp;&nbsp;
          {/* <div className="date">
          
            {notice.date}
          </div> */}
          
            </div>

          <hr></hr>
          <p> {notice.description}</p>
          
          <br></br>

          <div className="buttons">

                <span className='btn1'>
                  <button onClick={() => {
                deleteNotice(notice.noticeTitle);
                }}
                >
                  <DeleteOutlineIcon />       &nbsp;Delete Notice </button> 

                </span>
                
                &nbsp;&nbsp;&nbsp;


                <span className='btn2'>
                        {/* <button onClick={() => {
                      editNotice(notice.noticeTitle);
                }}> */}
                <button><EditOutlinedIcon />       &nbsp;Edit Notice </button> 

                </span>

                &nbsp;&nbsp;&nbsp;


                <span className='btn3'>
                        {/* <button onClick={() => {
                      sendSMS(notice.noticeTitle);
                }}> */}
                  <button><MessageOutlinedIcon />       &nbsp;Send SMS </button> 

                </span>
          </div>
      </div>

      
      
    </div>
    );
};

export default NoticeCard;
