import React,{useState, useEffect} from "react";
import {isAuth} from "../../../helpers/auth";
import axios from "axios";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PhoneAndroid
  } from "@mui/icons-material";
  import Avatar from '@mui/material/Avatar';
  import FemaleIcon from '@mui/icons-material/Female';
  import MaleIcon from '@mui/icons-material/Male';
  import { Link, useParams } from "react-router-dom";
  import "../../../styles/User.scss";
  import UploadIcon from '@mui/icons-material/Upload';
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  
  export default function User() {

    let params = useParams();
    const [file, setFile] = useState<File>();

    const [thisfloorNumber, setThisfloorNumber] = useState('');
    const [thisBuildingNumber, setThisBuildingNumber] = useState('');
    const [thisCapacity, setThisCapacity] = useState('');
    const [thisLabType, setThisLabType] = useState('');
    const [thisClassRoomType, setThisClassRoomType] = useState('');
    const [thisHallNo, setThisHallNo] = useState('');


    const [formData, setFormData] = useState({
      id:params.lecHallId,
      floorNumber:'',
      buildingNumber: '',
      hallNo:'',
      capacity: '',
      labType: '',
      classRoomType:''      
    });

    const {
      id,
      floorNumber,
      buildingNumber,
      hallNo,
      capacity,
      labType,
      classRoomType}  = formData;

    function GetLecHallbyId(){

      useEffect(() => {
        axios
            .get(`https://localhost:5000/api/ClassRoom/${params.lecHallId}`)
            .then(res => [
                setThisfloorNumber(res.data.floorNumber),
                setThisBuildingNumber(res.data.buildingNumber),
                setThisCapacity(res.data.capacity),
                setThisLabType(res.data.labType),
                setThisClassRoomType(res.data.classRoomType),
                setThisHallNo(res.data.hallNo)
            ] ).catch(error => {
              console.log(error)
            });

      }, []);
    }

    const handleChange = (text:string) => (e:any) => {
      setFormData({ ...formData, [text]: e.target.value });
    };

    function updateLecHall(e:any){

      e.preventDefault();

        axios
            .put(`https://localhost:5000/api/ClassRoom/update-lec-hall-lab`, {
                id,
                floorNumber,
                buildingNumber,
                hallNo,
                capacity,
                labType,
                classRoomType 
            })
            .then(res => {
              toast.success("Lecture Hall/Lab updated successfully!");
              window.location.reload();
            })
            .catch(err => {
              console.log(err.response);
              toast.error(err.response.data);
              toast.error(err.response.data.title);
            });

    }

    GetLecHallbyId();

    return (
      <div className="user">
        <ToastContainer />
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Lecture Hall/Lab</h1>
          <Link to="/admin-panel/addlechallslabs">
            <div className="APAddBtn-wrapper">
              <div className="APAddBtn text" id="APaddbtn-text">Add New Lecture Hall/Lab</div><AddCircleIcon fontSize="large" className="APAddBtn"/>
            </div>
          </Link> 
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">{thisHallNo}</span>
                <span className="userShowUserTitle">{thisClassRoomType? "Lab" : "Lecture Hall"}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Lecture Hall/ Lab Details</span>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">Floor Number : {thisfloorNumber}</span>
              </div>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">Buildiing Number : {thisBuildingNumber}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">Capacity : {thisCapacity}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Lab Type : {thisLabType}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Fill all fields</span>
            <form className="userUpdateForm" onSubmit={updateLecHall}>
              <div className="userUpdateLeft">
                <table>
                  <tr>
                    <td>
                    <div className="userUpdateItem">
                      <label>Floor Number</label>
                      <input
                        type="text"
                        placeholder={thisfloorNumber}
                        className="userUpdateInput"
                        value={floorNumber}
                        onChange = {handleChange('floorNumber')}
                      />
                    </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Building Number</label>
                        <input
                          type="text"
                          placeholder={thisBuildingNumber}
                          value={buildingNumber}
                          className="userUpdateInput"
                          onChange = {handleChange('buildingNumber')}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      <div className="userUpdateItem">
                        <label>Capacity</label>
                        <input
                          type="text"
                          placeholder={thisCapacity}
                          value={capacity}
                          className="userUpdateInput"
                          onChange = {handleChange('capacity')}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Hall No (Hall Name)</label>
                        <input
                          type="text"
                          placeholder={thisHallNo}
                          value={hallNo}
                          className="userUpdateInput"
                          onChange = {handleChange('hallNo')}
                        />
                      </div>
                    </td> 
                  </tr>
                  <tr>
                  <td>
                      <div className="userUpdateItem">
                        <label>Lab Type</label>
                        <input
                          type="text"
                          placeholder={thisLabType}
                          value={labType}
                          className="userUpdateInput"
                          onChange = {handleChange('labType')}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Classroom Type (0 - Lecture Hall, 1- Lab)</label>
                        <input
                          type="text"
                          placeholder={thisClassRoomType}
                          value={classRoomType}
                          className="userUpdateInput"
                          onChange = {handleChange('classRoomType')}
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