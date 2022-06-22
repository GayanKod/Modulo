import React, {FC, ChangeEvent, useState} from 'react';
import {INotice} from "./interface";
import "../../styles/NoticeInput.scss";
import NoticeCard from './NoticeCard';
import { ToastContainer, toast } from 'react-toastify';

const NoticeInputV2 :FC = () => {

    const [notice, setNotice] =useState<string>("");
    const [description, setDescription] =useState<string>("");
    const [noticeList, setNoticeList] =useState<INotice[]>([]);
    const [edit, setEdit] =useState<boolean>(false);
    const [error, setError] = React.useState('');
    const [value, setValue] = useState({});

    const handleChange =(event:ChangeEvent<HTMLInputElement> ) : void => {
     
     if(event.target.name==="notice"){
       setNotice(event.target.value);
     }
     else if (event.target.value=="null"){
        setError('Title is required');
     }
     else {
        setDescription(event.target.value);
     }
    
    };
   
     const addNotice = (): void => {
       
         if((!notice || /^\s*$/.test(notice)) || (!description || /^\s*$/.test(notice))){
            alert("You should enter both notice title and description!!");
            toast.error('You should enter both notice title and description!');
         return;
       }

       const newNotice ={noticeTitle: notice, description: description };
        setNoticeList([...noticeList, newNotice]);
        setNotice("");
        setDescription(""); 
     
     };
   
     const deleteNotice =(noticeTitleToDelete: string): void =>
      {
         setNoticeList(noticeList.filter((notice)=>{
          return notice.noticeTitle !== noticeTitleToDelete;
   
        }));
     };

     const editNotice =(noticeToEdit: string): void =>
     {
        setNoticeList(noticeList.filter((notice)=>{
         return notice.noticeTitle !== noticeToEdit;
  
       }));
    };

    const sendSMS =(noticeToSendSMS: string): void =>
    {
       setNoticeList(noticeList.filter((notice)=>{
        return notice.noticeTitle !== noticeToSendSMS;
 
      }));
   };
  
   
     return  (
       <div className="NoticeInput-container">
        
            <div className="notice-input-header">
            <br>
            </br>
            <div className="notice-InputTitle">
            <p className='notice-new-name'>New Notice</p>
            </div>

                <hr></hr>
                <br></br>

            <div>
            <p className ='notice-title-name'>Notice Title:</p>
            <div className="notice-inputContainer">
            <input 
            type="text" 
            name="notice" 
            placeholder="Notice title is required" required
            value={notice}
            onChange={handleChange}         
            />       
            </div>
            </div>
         
        <br></br>

        <div>
            <p className='notice-name-description'>Description:</p>
            <div className="notice-inputContainer">
            <input 
            type="text" 
            name="description" 
            placeholder="Description is required" required
            value={description}
            onChange={handleChange}/>     
         </div>
        </div>
        <br></br>


        <div>
            <div className='notice-radio-button-topic'>
            <p className='notice-radio-buttons'>Select the notice category from below:</p><br></br>
            </div>
            
            <div className="notice-radio-button-container">

                 <div id='leftbox'>
                 <input type="radio" value="Accouncements" name="category" /> Accouncements
                 </div> 

                 <div id='rightbox'>
                 <input type="radio" value="Accomplishments" name="category" />Accomplishments
                 </div>
                       
                  </div>
               </div>
        <br></br>
        
         <div className="AddButton">
              <button onClick={addNotice}>+ Add Notice</button>
         </div>
        
         </div>
         <div className="noticeList">
          {noticeList.map((notice: INotice, key:number) => {
         return <NoticeCard key={key} notice={notice} deleteNotice={deleteNotice} editNotice={editNotice} sendSMS={sendSMS}/>;
       })}
        </div>
       </div>
     );
   };
   
export default NoticeInputV2;