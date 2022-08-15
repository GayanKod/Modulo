import React,{useState, useEffect} from "react";
import {isAuth} from "../../../helpers/auth";
import axios from "axios";
  import { Link, useParams } from "react-router-dom";
  import "../../../styles/User.scss";
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import CircleIcon from '@mui/icons-material/Circle';

  
  export default function User() {

    let params = useParams();

    const [thisBatchName, setThisBatchName] = useState('');
    const [thisStartDate, setThisStartDate] = useState('');
    const [thisEndDate, setThisEndDate] = useState('')


    const [formData, setFormData] = useState({
      batchId:params.batchId,
      batchName:"",
      startDate:"",
      endDate: "",
      instituteId: isAuth().institutes[0].id    
    });

    const {
      batchId,
      batchName,
      startDate,
      endDate,
      instituteId}  = formData;

    function GetBatchById(){

      useEffect(() => {
        axios
            .get(`https://localhost:5000/api/Batch/get-batches/${params.batchId}`)
            .then(res => [
                setThisBatchName(res.data.batchName),
                setThisStartDate(res.data.startDate),
                setThisEndDate(res.data.endDate),
            ] ).catch(error => {
              console.log(error)
            });

      }, []);
    }

    const handleChange = (text:string) => (e:any) => {
      setFormData({ ...formData, [text]: e.target.value });
    };

    function updateBatches(e:any){

      e.preventDefault();

        axios
            .put(`https://localhost:5000/api/Batch/update-batch`, {
              batchId,
              batchName,
              startDate,
              endDate,
              instituteId 
            })
            .then(res => {
              toast.success("Batch updated successfully!");
              window.location.reload();
            })
            .catch(err => {
              console.log(err.response);
              toast.error(err.response.data);
              toast.error(err.response.data.title);
            });

    }

    GetBatchById();

    return (
      <div className="user">
        <ToastContainer />
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Batch</h1>
          <Link to="/admin-panel/addbatches">
            <div className="APAddBtn-wrapper">
              <div className="APAddBtn text" id="APaddbtn-text">Add New Batch</div><AddCircleIcon fontSize="large" className="APAddBtn"/>
            </div>
          </Link> 
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">{thisBatchName}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Batch Details</span>
              <div className="userShowInfo">
                <CircleIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Start Date : {thisStartDate}</span>
              </div>
              <div className="userShowInfo">
                <CircleIcon className="userShowIcon" />
                <span className="userShowInfoTitle">End Date : {thisEndDate}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Fill all fields</span>
            <form className="userUpdateForm" onSubmit={updateBatches}>
              <div className="userUpdateLeft">
              <table>
                  <tr>
                    <td>
                    <div className="userUpdateItem">
                      <label>Batch Name</label>
                      <input
                        type="text"
                        placeholder={thisBatchName}
                        className="userUpdateInput"
                        value={batchName}
                        onChange = {handleChange('batchName')}
                      />
                    </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      <div className="userUpdateItem">
                        <label>Start Date</label>
                        <input
                          type="date"
                          placeholder={thisStartDate}
                          value={startDate}
                          className="userUpdateInput"
                          onChange = {handleChange('startDate')}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>End Date</label>
                        <input
                          type="date"
                          placeholder={thisEndDate}
                          value={endDate}
                          className="userUpdateInput"
                          onChange = {handleChange('endDate')}
                        />
                      </div>
                    </td> 
                  </tr>
                </table>
              </div>


              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  {/* <img
                    className="userUpdateImg"
                    src={
                      file
                          ? URL.createObjectURL(file)
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                  />
                   <label htmlFor="file">
                      Image: <UploadIcon className="userUpdateUpload-icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      if (!event.target.files) return
                      setFile(event.target.files[0])
                    }}
                  /> */}
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }