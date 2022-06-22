import React,{useState, useEffect} from "react";
import {isAuth} from "../../../helpers/auth";
import axios from "axios";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish
  } from "@mui/icons-material";
  import Avatar from '@mui/material/Avatar';
  import FemaleIcon from '@mui/icons-material/Female';
  import MaleIcon from '@mui/icons-material/Male';
  import { Link, useParams } from "react-router-dom";
  import "../../../styles/User.scss";
  import UploadIcon from '@mui/icons-material/Upload';
  import AddCircleIcon from '@mui/icons-material/AddCircle';

  
  export default function Subscriber() {

    let params = useParams();
    const [file, setFile] = useState<File>();

    const [formData, setFormData] = useState({
        userFName:'',
        userLName:'',
        email:'',
        dob:'',
        gender:'',
        homeNo:'',
        street:'',
        town:'',
        mobileNumber:'',
        instituteName:'',
        instituteContactNo:'',
        password:'',
        confirmPassword:''       
    });

    const {
      userFName, 
      userLName, 
      email, 
      dob, 
      gender, 
      homeNo, 
      street, 
      town, 
      mobileNumber, 
      instituteName, 
      instituteContactNo, 
      password, 
      confirmPassword}  = formData;


    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Add New Subscribers</h1>
        </div>
        <div className="userContainer">
          <div className="userUpdate">
            <span className="userUpdateTitle">Fill all fields</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <table>
                  <tr>
                    <td>
                    <div className="userUpdateItem">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder=""
                        className="userUpdateInput"
                      />
                    </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Last Name</label>
                        <input
                          type="text"
                          placeholder=""
                          className="userUpdateInput"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                        <div className="userUpdateItem">
                          <label>Degree</label>
                            <select className="userUpdateInput">
                              <option value="" disabled selected >--Select the degree--</option>
                              <option value="Super Admin">Super Admin</option>
                              <option value="Admin">Admin</option>
                              <option value="Super Editor">Super Editor</option>
                              <option value="Editor">Editor</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="userUpdateItem">
                          <label>Batch</label>
                            <select className="userUpdateInput">
                              <option value="" disabled selected >--Select the batch--</option>
                              <option value="Super Admin">Super Admin</option>
                              <option value="Admin">Admin</option>
                              <option value="Super Editor">Super Editor</option>
                              <option value="Editor">Editor</option>
                            </select>
                        </div>
                    </td> 
                  </tr> 
                  <tr>
                    <td>
                      <div className="userUpdateItem">
                        <label>Date of Birth</label>
                          <input
                            type="date"
                            placeholder=""
                            className="userUpdateInput"
                          />
                      </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Gender</label>
                        <select className="userUpdateInput">
                          <option value="" disabled selected >--Select the gender--</option>
                          <option value="Super Admin">Male</option>
                          <option value="Admin">Female</option>
                        </select>
                       </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="userUpdateItem">
                          <label>Email</label>
                          <input
                            type="text"
                            placeholder=""
                            className="userUpdateInput"
                          />
                      </div>
                    </td>
                    <td>
                        <div className="userUpdateItem">
                          <label>Phone</label>
                            <input
                              type="text"
                              placeholder=""
                              className="userUpdateInput"
                            />
                        </div>
                    </td>
                  </tr>
                  <tr>
                      <td>
                        <div className="userUpdateItem">
                          <label>Address</label>
                          <input
                            type="text"
                            placeholder="Home No."
                            className="userUpdateInput"
                          />
                          <input
                            type="text"
                            placeholder="Street"
                            className="userUpdateInput"
                          />
                          <input
                            type="text"
                            placeholder="Town"
                            className="userUpdateInput"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="userUpdateItem">
                          <label>Default Password</label>
                            <input
                              type="password"
                              placeholder=""
                              className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                          <label>Confirm Default Password</label>
                            <input
                              type="password"
                              placeholder=""
                              className="userUpdateInput"
                            />
                        </div>
                      </td>
                  </tr>
                </table>
              </div>


              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
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
                  />
                </div>
                <button className="userUpdateButton">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }