import {useState, useEffect} from "react";
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
  // import UploadIcon from '@mui/icons-material/Upload';
  // Need for future improvemnet
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  
  export default function User() {

    let params = useParams();
    // const [file, setFile] = useState<File>();
    // Need for future improvemnet

    const [adfirstName, setFirstName] = useState('');
    const [adlastName, setLastName] = useState('');
    const [adRole, setRole] = useState('');
    const [adEmail, setAdEmail] = useState('');
    const [adDob, setAdDob] = useState('');
    const [adGender, setAdGender] = useState('');
    const [adHomeNo, setAdHomeNo] = useState('');
    const [adStreet, setAdStreet] = useState('');
    const [adTown, setAdTown] = useState('');
    const [adMobile, setAdMobile] = useState('');

    const [formData, setFormData] = useState({
        userId: params.userId,
        firstName:'',
        lastName:'',
        dob:'',
        gender:'',
        email:'',
        role:'',
        mobileNumber:'',
        homeNo:'',
        street:'',
        town:'',      
    });

    const {
      userId,
      firstName, 
      lastName,
      dob, 
      gender, 
      email, 
      role, 
      mobileNumber, 
      homeNo, 
      street, 
      town}  = formData;

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
              console.log(error)
            });

      }, []);
    }

    const handleChange = (text:string) => (e:any) => {
      setFormData({ ...formData, [text]: e.target.value });
    };

    function updateAdmin(e:any){

      e.preventDefault();

        axios
            .put(`https://localhost:5000/api/User/update-user`, {
                userId,
                firstName, 
                lastName,
                dob, 
                gender, 
                email, 
                role, 
                mobileNumber, 
                homeNo, 
                street, 
                town 
            })
            .then(res => {
              toast.success("User updated successfully!");
              window.location.reload();
            })
            .catch(err => {
              console.log(err.response);
              toast.error(err.response.data);
              toast.error(err.response.data.title);
            });

    }

    GetAdminbyId();

    return (
      <div className="user">
        <ToastContainer />
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Admin</h1>
          <Link to="/admin-panel/addadmineditor">
            <div className="APAddBtn-wrapper">
              <div className="APAddBtn text" id="APaddbtn-text">Add New Admins</div><AddCircleIcon fontSize="large" className="APAddBtn"/>
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
                <span className="userShowUsername">{adfirstName} {adlastName}</span>
                <span className="userShowUserTitle">{adRole}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{adDob}</span>
              </div>
              <div className="userShowInfo">
                {adGender === "Male" ? <MaleIcon className="userShowIcon"/> : <FemaleIcon className="userShowIcon"/>}
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
            <form className="userUpdateForm" onSubmit={updateAdmin}>
              <div className="userUpdateLeft">
                <table>
                  <tr>
                    <td>
                    <div className="userUpdateItem">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder={adfirstName}
                        className="userUpdateInput"
                        onChange = {handleChange('firstName')}
                      />
                    </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Last Name</label>
                        <input
                          type="text"
                          placeholder={adlastName}
                          className="userUpdateInput"
                          onChange = {handleChange('lastName')}
                        />
                      </div>
                    </td>
                  </tr>
                  {isAuth().role === 'Super Admin'?
                  <tr>
                    <td>
                        <div className="userUpdateItem">
                          <label>Role</label>
                            <select 
                              className="userUpdateInput"
                              onChange = {handleChange('role')}
                            >
                              <option value="" disabled selected >--Select the role--</option>
                              <option value="Super Admin">Super Admin</option>
                              <option value="Admin">Admin</option>
                              <option value="Super Editor">Super Editor</option>
                              <option value="Editor">Editor</option>
                            </select>
                        </div>
                    </td> 
                  </tr>: 
                  <tr>
                  <td>
                      <div className="userUpdateItem">
                        <label>Role</label>
                          <select 
                            className="userUpdateInput"
                            onChange = {handleChange('role')}
                          >
                            <option value="" disabled selected >--Select the role--</option>
                            <option value="Admin">Admin</option>
                            <option value="Super Editor">Super Editor</option>
                            <option value="Editor">Editor</option>
                          </select>
                      </div>
                  </td> 
                </tr>
                }
                  <tr>
                    <td>
                      <div className="userUpdateItem">
                        <label>Date of Birth</label>
                          <input
                            type="date"
                            placeholder={adDob}
                            className="userUpdateInput"
                            onChange = {handleChange('dob')}
                          />
                      </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Gender</label>
                        <select 
                          className="userUpdateInput"
                          onChange = {handleChange('gender')}
                        >
                          <option value="" disabled selected >--Select the gender--</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
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
                            onChange = {handleChange('email')}
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
                              onChange = {handleChange('mobileNumber')}
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
                            onChange = {handleChange('homeNo')}
                          />
                          <input
                            type="text"
                            placeholder={adStreet}
                            className="userUpdateInput"
                            onChange = {handleChange('street')}
                          />
                          <input
                            type="text"
                            placeholder={adTown}
                            className="userUpdateInput"
                            onChange = {handleChange('town')}
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