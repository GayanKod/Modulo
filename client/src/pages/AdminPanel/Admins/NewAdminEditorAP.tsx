import {useState} from "react";
import axios from "axios";
import {isAuth} from "../../../helpers/auth";
import "../../../styles/User.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
  export default function User() {

    //const [file, setFile] = useState<File>();
    // Need for future improvemnet

    const [formData, setFormData] = useState({
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
        password:'',
        confirmPassword:'',
        instituteId:isAuth().institutes[0].id       
    });

    const handleChange = (text:string) => (e:any) => {
      setFormData({ ...formData, [text]: e.target.value });
    };

    const {
        firstName,
        lastName,
        dob,
        gender,
        email,
        role,
        mobileNumber,
        homeNo,
        street,
        town,
        password,
        confirmPassword,
        instituteId}  = formData;

    function AddUser(e:any){

      e.preventDefault();

      axios
      .post(`https://localhost:5000/api/User/add-user`, {
              firstName,
              lastName,
              dob,
              gender,
              email,
              role,
              mobileNumber,
              homeNo,
              street,
              town,
              password,
              confirmPassword,
              instituteId
            })
            .then(res => {
              toast.success("User Added Successfully!");
              setFormData({
                    ...formData,
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
                    password:'',
                    confirmPassword:''
              });
            })
            .catch(err => {
              
              toast.error(err.response.data);
              toast.error(err.response.data.title);
            });
    }

    return (
      <div className="user">
        <ToastContainer />
        <div className="userTitleContainer">
          <h1 className="userTitle">Add New Admins/Editors</h1>
        </div>
        <div className="userContainer">
          <div className="userUpdate">
            <span className="userUpdateTitle">Fill all fields</span>
            <form className="userUpdateForm" onSubmit={AddUser}>
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
                        value={firstName}
                        onChange = {handleChange('firstName')}
                      />
                    </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Last Name</label>
                        <input
                          type="text"
                          placeholder=""
                          value={lastName}
                          className="userUpdateInput"
                          onChange = {handleChange('lastName')}
                        />
                      </div>
                    </td>
                  </tr>
                  {isAuth().role === 'Super Admin' ?
                  <tr>
                    <td>
                        <div className="userUpdateItem">
                          <label>Role</label>
                            <select className="userUpdateInput"
                              onChange = {handleChange('role')}
                              value={role}
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
                          <select className="userUpdateInput"
                            onChange = {handleChange('role')}
                            value = {role}
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
                            placeholder=""
                            className="userUpdateInput"
                            onChange = {handleChange('dob')}
                            value = {dob}
                          />
                      </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Gender</label>
                        <select className="userUpdateInput"
                          onChange = {handleChange('gender')}
                          value = {gender}
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
                            placeholder=""
                            className="userUpdateInput"
                            onChange = {handleChange('email')}
                            value = {email}
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
                              onChange = {handleChange('mobileNumber')}
                              value = {mobileNumber}
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
                            onChange = {handleChange('homeNo')}
                            value = {homeNo}
                          />
                          <input
                            type="text"
                            placeholder="Street"
                            className="userUpdateInput"
                            onChange = {handleChange('street')}
                            value = {street}
                          />
                          <input
                            type="text"
                            placeholder="Town"
                            className="userUpdateInput"
                            onChange = {handleChange('town')}
                            value = {town}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="userUpdateItem">
                          <label>Password</label>
                            <input
                              type="password"
                              placeholder=""
                              className="userUpdateInput"
                              onChange = {handleChange('password')}
                              value ={password}
                            />
                        </div>
                        <div className="userUpdateItem">
                          <label>Confirm Password</label>
                            <input
                              type="password"
                              placeholder=""
                              className="userUpdateInput"
                              onChange = {handleChange('confirmPassword')}
                              value = {confirmPassword}
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