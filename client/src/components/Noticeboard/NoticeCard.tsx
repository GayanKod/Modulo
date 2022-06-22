import { render } from 'react-dom';
import  React, { useState , useEffect } from 'react'
import "../../styles/NoticeCard.scss";
import {INotice} from "./interface";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { time } from 'console';
import Editbox from '../Noticeboard/Editbox';

const [visible, setVisible] = React.useState(false);

interface Props {

  notice: INotice;
  
  deleteNotice(noticeTitleToDelete: string): void;
  editNotice(noticeToEdit: string): void;
  sendSMS(noticeToSendSMS: string): void;
}


const current = new Date();
const date = `On ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} at ${current.getHours()}:${current.getMinutes()}`;


const NoticeCard = ({notice, deleteNotice, editNotice, sendSMS}: Props)=>
{
   
    return (
    
    <div className="notice">

      <div className="content">
          <div className="title">
            {notice.noticeTitle}
            &nbsp;&nbsp;
            <p className='notice-published-date'>Published Date and Time: {date}</p>
                     
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
                {/* <Link to ="/noticeboard-edit"> */}
                <span className='btn2'>
                        {/* <button onClick={handleClick}> */}
                        <button onClick={() => 
                        setVisible(!visible)}>{visible ? 'Hide' : 'Show'}  
                        <EditOutlinedIcon />       
                        &nbsp;Edit Notice 
                        </button>

                        {visible && <div><Editbox notice={notice} editNotice={function (noticeToEdit: string): void {
                throw new Error('Function not implemented.');
              } }/></div>}
           
             
                
                </span>   
                {/* </Link> */}

                &nbsp;&nbsp;&nbsp;

                {/* <Link to ="/Noticeboard/EditNotice">
                <span className='btn3'> */}
                        {/* <button onClick={() => {
                      sendSMS(notice.noticeTitle);
                }}> */}
                  {/* <button><MessageOutlinedIcon />       &nbsp;Send SMS </button> 
                </span></Link> */}
          </div>
      </div>     
    </div>
    );
};

export default NoticeCard;
