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
   const [clicked, setClicked] = useState(false);

    return (
    
    <div className="notice">

      <div className="content">
        {clicked?
        <div className="title"> 
          <input 
            type="text"
            className="title"
            placeholder={notice.noticeTitle}
          />
          
          &nbsp;&nbsp;
          </div>
          :
          <div className="title">
          {notice.noticeTitle}
          &nbsp;&nbsp;
          <p className='notice-published-date'>Published Date and Time: {date}</p>
                   
          </div>

}

          <hr></hr>
          {clicked? 
          <input
              type='text'
              className='notice-description-input'
              placeholder={notice.description}
          /> : 
            <p> {notice.description}</p>
          }
          
          
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
                        {/* <button onClick={() => setEditBox(false)}> */}
                
                {clicked?
                
                <button onClick={()=>
                  setClicked(!clicked)
                  }>
                  <EditOutlinedIcon /> 
                  &nbsp;Save </button>

                  :
                  
                  <button onClick={()=>
                    setClicked(!clicked)
                    }>
                    <EditOutlinedIcon /> 
                    &nbsp;Edit Notice </button>

                }
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
