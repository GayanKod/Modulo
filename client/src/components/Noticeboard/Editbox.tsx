import "../../styles/NoticeCard.scss";
import "../Noticeboard/NoticeCard.tsx";
import {INotice} from "./interface";
import React, {FC, ChangeEvent, useState} from 'react';

interface Props {

    notice: INotice;  
    editNotice(noticeToEdit: string): void;
   
  }
  

//   const [notice, setNotice] =useState<string>("");
//   const [description, setDescription] =useState<string>("");
//   const [noticeList, setNoticeList] =useState<INotice[]>([]);

//   const newNotice ={noticeTitle: notice, description: description };
//   setNoticeList([...noticeList, newNotice]);
//   setNotice("");
//   setDescription(""); 

const Editbox = ({notice, editNotice}: Props) => {

    return (
        <div className="notice">
            <div className="content">

                <div className="title">
                    {notice.noticeTitle}
                </div>

                <span className="date">
                    {Date}
                </span>
                <hr></hr>
                <br></br>

                <div className="description">
                    {notice.description}
                </div>
            </div>
        </div>
    );
}

export default Editbox;