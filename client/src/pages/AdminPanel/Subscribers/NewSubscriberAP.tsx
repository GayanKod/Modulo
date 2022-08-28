import {useState, useEffect} from "react";
import {isAuth} from "../../../helpers/auth";
import axios from "axios";
import "../../../styles/User.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
  export default function Subscriber() {

    // to store all the batches
    const [batches, setBatches] = useState<any[]>([]);
    const [degrees, setDegrees] = useState<any[]>([]);

    // to store selected batches
    const [selectedBatch] = useState('');
    const [selectedDegree] = useState('');

    useEffect(() => {
      fetch(`https://localhost:5000/api/Batch/get-batches/inst/${isAuth().institutes[0].id}`)
        .then(res => res.json())
        .then(data => {
          setBatches(data);
        });
    }, []);

    useEffect(() => {
      fetch(`https://localhost:5000/api/Degree/get-degrees/inst/${isAuth().institutes[0].id}`)
        .then(res => res.json())
        .then(data => {
          setDegrees(data);
        });
    }, []);

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      degree: selectedDegree,
      batch: selectedBatch,
      dob: "",
      gender: "",
      email: "",
      mobileNumber: "",
      homeNo: "",
      street: "",
      town: "",
      password: "",
      confirmPassword:"",
      instituteId:isAuth().institutes[0].id       
  });

  const handleChange = (text:string) => (e:any) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const {
    firstName,
    lastName,
    degree,
    batch,
    dob,
    gender,
    email,
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
    .post(`https://localhost:5000/api/User/add-subscriber`, {
            firstName,
            lastName,
            degree,
            batch,
            dob,
            gender,
            email,
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
                  firstName: "",
                  lastName: "",
                  degree: "",
                  batch: "",
                  dob: "",
                  gender: "",
                  email: "",
                  mobileNumber: "",
                  homeNo: "",
                  street: "",
                  town: "",
                  password: "",
                  confirmPassword:""
            });
          })
          .catch(err => {
            
            toast.error(err.response.data);
            toast.error(err.response.data.title);
          });
  }


    return (
      <div className="user">
        <ToastContainer/>
        <div className="userTitleContainer">
          <h1 className="userTitle">Add New Subscribers</h1>
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
                        onChange = {handleChange('firstName')}
                        value = {firstName}
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
                          onChange = {handleChange('lastName')}
                          value = {lastName}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                        <div className="userUpdateItem">
                          <label>Degree</label>
                            <div style={{fontSize:"12px"}}>Selected Degree: {selectedDegree}</div>
                            <select className="userUpdateInput" onChange={handleChange('degree')}>
                              <option value="">--Select the Degree--</option>
                              {degrees.map(degree => (
                                <option value={degree.degreeName} key={degree.id}>{degree.degreeName}</option>
                              ))}
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="userUpdateItem">
                          <label>Batch</label>
                          <div style={{fontSize:"12px"}}>Selected Batch: {selectedBatch}</div>
                            <select className="userUpdateInput" onChange={handleChange('batch')}>
                              <option value="">--Select the batch--</option>
                              {batches.map(batch => (
                                <option value={batch.batchName} key={batch.id}>{batch.batchName}</option>
                              ))}
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
                            onChange = {handleChange('dob')}
                            value = {dob}
                          />
                      </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Gender</label>
                        <select className="userUpdateInput" onChange = {handleChange('gender')}>
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
                              value={mobileNumber}
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
                            value={homeNo}
                          />
                          <input
                            type="text"
                            placeholder="Street"
                            className="userUpdateInput"
                            onChange = {handleChange('street')}
                            value={street}
                          />
                          <input
                            type="text"
                            placeholder="Town"
                            className="userUpdateInput"
                            onChange = {handleChange('town')}
                            value={town}
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
                              onChange = {handleChange('password')}
                              value={password}
                            />
                        </div>
                        <div className="userUpdateItem">
                          <label>Confirm Default Password</label>
                            <input
                              type="password"
                              placeholder=""
                              className="userUpdateInput"
                              onChange = {handleChange('confirmPassword')}
                              value={confirmPassword}
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
                  {/* Need for future improvemnet */}
                </div>
                <button className="userUpdateButton">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }