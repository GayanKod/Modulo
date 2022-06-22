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
  import SchoolIcon from '@mui/icons-material/School';
  import GroupsIcon from '@mui/icons-material/Groups';
  import { Link, useParams } from "react-router-dom";
  import "../../../styles/User.scss";
  import UploadIcon from '@mui/icons-material/Upload';
  import AddCircleIcon from '@mui/icons-material/AddCircle';

  
  export default function EditSubscriber() {

    let params = useParams();
    const [file, setFile] = useState<File>();

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

    function GetAdminbyId(){

      useEffect(() => {
        axios
            .get(`https://localhost:5000/api/User/get-users/${params.userId}`)
            .then(res => [
               console.log(res),
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
          <h1 className="userTitle">Edit Subscriber</h1>
          <Link to="/admin-panel/addsubscriber">
            <div className="APAddBtn-wrapper">
              <div className="APAddBtn text" id="APaddbtn-text">Add New Subscribers</div><AddCircleIcon fontSize="large" className="APAddBtn"/>
            </div>
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