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

  
  export default function User() {

    let params = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [adEmail, setAdEmail] = useState('');
    const [adDob, setAdDob] = useState('');
    const [adGender, setAdGender] = useState('');
    const [adHomeNo, setAdHomeNo] = useState('');
    const [adStreet, setAdStreet] = useState('');
    const [adTown, setAdTown] = useState('');
    const [adMobile, setAdMobile] = useState('');

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

    function GetAdminbyId(){

      useEffect(() => {
        axios
            .get(`https://localhost:5000/api/User/get-users/${params.userId}`)
            .then(res => [
                setFirstName(res.data.firstName),
                setLastName(res.data.lastName),
                setAdEmail(res.data.email),
                setAdGender(res.data.gender),
                setAdHomeNo(res.data.homeNo),
                setAdStreet(res.data.street),
                setAdTown(res.data.town),
                setAdMobile(res.data.mobileNumber),
                setAdDob(res.data.dob),
                setRole(res.data.role)
                
            ] ).catch(error => {
              console.log("sddad")
              console.log(error)
            });

      }, []);
    }

    GetAdminbyId();

    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Admin</h1>
          <Link to="/admin-panel/admins/newadmin">
            <button className="userAddButton">Add user</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <Avatar
                src="https://pbs.twimg.com/profile_images/1463854908700909570/vgRLZy_R_400x400.jpg"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{firstName} {lastName}</span>
                <span className="userShowUserTitle">{role}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{adDob}</span>
              </div>
              <div className="userShowInfo">
                {adGender === "male" ? <MaleIcon className="userShowIcon"/> : <FemaleIcon className="userShowIcon"/>}
                <span className="userShowInfoTitle">{adGender}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{adMobile}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{adEmail}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{adHomeNo}, {adStreet}, {adTown}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <table>
                  <tr>
                    <td>
                    <div className="userUpdateItem">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder={firstName}
                        className="userUpdateInput"
                      />
                    </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Last Name</label>
                        <input
                          type="text"
                          placeholder={lastName}
                          className="userUpdateInput"
                        />
                      </div>
                    </td>
                  </tr>
                  {isAuth().role === 'Super Admin' ?
                  <tr>
                    <td>
                        <div className="userUpdateItem">
                          <label>Role</label>
                            <select className="userUpdateInput">
                              <option value="" disabled selected >--Select the role--</option>
                              <option value="Super Admin">Super Admin</option>
                              <option value="Admin">Admin</option>
                              <option value="Super Editor">Super Editor</option>
                              <option value="Editor">Editor</option>
                              <option value="Subscriber">Subscriber</option>
                            </select>
                        </div>
                    </td> 
                  </tr>: ""}
                  <tr>
                    <td>
                      <div className="userUpdateItem">
                        <label>Date of Birth</label>
                          <input
                            type="date"
                            placeholder={adDob}
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
                            placeholder={adEmail}
                            className="userUpdateInput"
                          />
                      </div>
                    </td>
                    <td>
                        <div className="userUpdateItem">
                          <label>Phone</label>
                            <input
                              type="text"
                              placeholder={adMobile}
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
                            placeholder={adHomeNo}
                            className="userUpdateInput"
                          />
                          <input
                            type="text"
                            placeholder={adStreet}
                            className="userUpdateInput"
                          />
                          <input
                            type="text"
                            placeholder={adTown}
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
                    src="https://pbs.twimg.com/profile_images/1463854908700909570/vgRLZy_R_400x400.jpg"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                {isAuth().role === 'Admin' && role === "Super Admin" ? 
                <button className="userUpdateButton-disabled" disabled>Update</button> :
                <button className="userUpdateButton">Update</button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }