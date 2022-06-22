import React,{useState, useEffect} from "react";
import {isAuth} from "../helpers/auth";
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
  import SchoolIcon from '@mui/icons-material/School';
  import GroupsIcon from '@mui/icons-material/Groups';
  import { Link, useParams, useNavigate } from "react-router-dom";
  import "../styles/User.scss";
  import UploadIcon from '@mui/icons-material/Upload';
  import AddCircleIcon from '@mui/icons-material/AddCircle';

  
  export default function MyProfileDisplayEdit() {

    let params = useParams();
    let navigate = useNavigate();

    const [file, setFile] = useState<File>();

    const [myfirstName, setMyFirstName] = useState('');
    const [mylastName, setMyLastName] = useState('');
    const [myrole, setMyRole] = useState('');
    const [myEmail, setMyEmail] = useState('');
    const [myDob, setMyDob] = useState('');
    const [myGender, setMyGender] = useState('');
    const [myHomeNo, setMyHomeNo] = useState('');
    const [myStreet, setMyStreet] = useState('');
    const [myTown, setMyTown] = useState('');
    const [myMobile, setMyMobile] = useState('');

    // const [formData, setFormData] = useState({
    //     userFName:'',
    //     userLName:'',
    //     email:'',
    //     dob:'',
    //     gender:'',
    //     homeNo:'',
    //     street:'',
    //     town:'',
    //     mobileNumber:'',
    //     instituteName:'',
    //     instituteContactNo:'',
    //     password:'',
    //     confirmPassword:''       
    // });

    // const {
    //   userFName, 
    //   userLName, 
    //   email, 
    //   dob, 
    //   gender, 
    //   homeNo, 
    //   street, 
    //   town, 
    //   mobileNumber, 
    //   instituteName, 
    //   instituteContactNo, 
    //   password, 
    //   confirmPassword}  = formData;

    function GetMyProfileInfo(){

      useEffect(() => {
        
            if(isAuth()){
                setMyFirstName(isAuth().firstName);
                setMyLastName(isAuth().lastName);
                setMyRole(isAuth().role);
                setMyEmail(isAuth().email);
                setMyDob(isAuth().dob);
                setMyGender(isAuth().gender);
                setMyHomeNo(isAuth().homeNo);
                setMyStreet(isAuth().street);
                setMyTown(isAuth().town);
                setMyMobile(isAuth().mobileNumber);
            }else{
                navigate("/login");
            }

      }, []);
    }

    GetMyProfileInfo();

    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">My Profile</h1> 
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
                <span className="userShowUsername">{myfirstName} {mylastName}</span>
                <span className="userShowUserTitle">{myrole}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{myDob}</span>
              </div>
              <div className="userShowInfo">
                {myGender === "male" ? <MaleIcon className="userShowIcon"/> : <FemaleIcon className="userShowIcon"/>}
                <span className="userShowInfoTitle">{myGender}</span>
              </div>
              <div className="userShowInfo">
                <SchoolIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Degree here</span>
              </div>
              <div className="userShowInfo">
                <GroupsIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Batch here</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{myMobile}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{myEmail}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{myHomeNo}, {myStreet}, {myTown}</span>
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
                        placeholder={myfirstName}
                        className="userUpdateInput"
                      />
                    </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Last Name</label>
                        <input
                          type="text"
                          placeholder={mylastName}
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
                            placeholder={myDob}
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
                            placeholder={myEmail}
                            className="userUpdateInput"
                          />
                      </div>
                    </td>
                    <td>
                        <div className="userUpdateItem">
                          <label>Phone</label>
                            <input
                              type="text"
                              placeholder={myMobile}
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
                            placeholder={myHomeNo}
                            className="userUpdateInput"
                          />
                          <input
                            type="text"
                            placeholder={myStreet}
                            className="userUpdateInput"
                          />
                          <input
                            type="text"
                            placeholder={myTown}
                            className="userUpdateInput"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="userUpdateItem">
                          <label> New Password</label>
                            <input
                              type="password"
                              className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                          <label> Confirm New Password</label>
                            <input
                              type="password"
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
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }