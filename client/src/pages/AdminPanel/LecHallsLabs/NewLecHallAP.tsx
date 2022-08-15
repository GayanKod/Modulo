import React,{useState} from "react";
import axios from "axios";
import {isAuth} from "../../../helpers/auth";
import {  useNavigate } from "react-router-dom";
import "../../../styles/User.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
  export default function NewLecHallAP() {

    let navigate = useNavigate();

    //const [file, setFile] = useState<File>();

    const [formData, setFormData] = useState({
      floorNumber: "",
      buildingNumber: "",
      hallNo: "",
      capacity: "",
      labType:"",
      classRoomType:"",
      instituteId:isAuth().institutes[0].id       
    });

    const handleChange = (text:string) => (e:any) => {
      setFormData({ ...formData, [text]: e.target.value });
    };

    const {
      floorNumber,
      buildingNumber,
      hallNo,
      capacity,
      labType,
      classRoomType,
      instituteId }  = formData;

    function AddLecHall(e:any){

      e.preventDefault();

      axios
      .post(`https://localhost:5000/api/ClassRoom/AddClassRoom`, {
            floorNumber,
            buildingNumber,
            hallNo,
            capacity,
            labType,
            classRoomType,
            instituteId
          })
            .then(res => {
              toast.success("Lecture Hall/Lab Added Successfully!");
              setFormData({
                    ...formData,
                    floorNumber: "",
                    buildingNumber: "",
                    hallNo: "",
                    capacity: "",
                    labType:"",
                    classRoomType:""
              });
            })
            .catch(err => {
              console.log(err.response);
              toast.error(err.response.data);
              toast.error(err.response.data.title);
            });
    }

    return (
      <div className="user">
        <ToastContainer />
        <div className="userTitleContainer">
          <h1 className="userTitle">Add New Lecture Halls/Labs</h1>
        </div>
        <div className="userContainer">
          <div className="userUpdate">
            <span className="userUpdateTitle">Fill all fields</span>
            <form className="userUpdateForm" onSubmit={AddLecHall}>
              <div className="userUpdateLeft">
                <table>
                  <tr>
                    <td>
                    <div className="userUpdateItem">
                      <label>Floor Number</label>
                      <input
                        type="text"
                        placeholder=""
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
                          placeholder=""
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
                          placeholder=""
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
                          placeholder=""
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
                          placeholder=""
                          value={labType}
                          className="userUpdateInput"
                          onChange = {handleChange('labType')}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Classroom Type (Enter 0 - Lecture Hall, 1- Lab)</label>
                        <input
                          type="text"
                          placeholder=""
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
                <button className="userUpdateButton">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }