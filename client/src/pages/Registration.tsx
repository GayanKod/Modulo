import React, { useState }  from 'react';
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import RegImg from '../assets/img/registration.png';
import {useNavigate} from "react-router";
import "../styles/Registration.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Registration(){

    let navigate = useNavigate();
    let time = new Date().getHours();
    
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

    const handleChange = (text:string) => (e:any) => {
        setFormData({ ...formData, [text]: e.target.value });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();

          axios
            .post(`https://localhost:5000/api/Auth/register`, {
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
                confirmPassword
            })
            .then(res => {
              toast.success("Registration Success!");
              setFormData({
                    ...formData,
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
              navigate('/login');
            })
            .catch(err => {
              console.log(err.response);
              toast.error(err.response.data);
              toast.error(err.response.data.title);
            });
      };


    return(
        <>

        <Navbar />

        <div className="registration-container">
        <ToastContainer />
            <div className="registration-container-content">
                <p className="registration-hello">Hello,</p>
                <p className="registration-greeting">{time < 12 ? "Good morning!" : ''}{12 <= time && time < 17 ? "Good Afternoon!" : ''}{time >= 17 && time < 24 ? "Good evening!" : ''}</p>
                <p className="registration-title">Register your Institute</p>
                <div className="registration-form">
                    <form onSubmit={handleSubmit} id="reg_form">
                        <div className="registration-formblock">
                            <table className="formblock-tbl">
                                <tr className="formblock-tbl-tr">
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">First Name</p>
                                        <input 
                                            type="text"
                                            className="registration-input"
                                            onChange={
                                                handleChange('userFName')
                                            }
                                            value={userFName}
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Last Name</p>
                                        <input 
                                            type="text"
                                            className="registration-input"
                                            onChange={
                                                handleChange('userLName')
                                            }
                                            value={userLName}
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="registration-formblock">
                        <table className="formblock-tbl">
                                <tr className="formblock-tbl-tr">
                                    <td className="formblock-tbl-td email">
                                        <p className="registration-up">E-mail</p>
                                        <input 
                                            type="text"
                                            className="registration-input email"
                                            onChange={
                                                handleChange('email')
                                            }
                                            value={email}
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Date of Birth</p>
                                        <input 
                                            type="date"
                                            className="registration-input"
                                            onChange={
                                                handleChange('dob')
                                            }
                                            value={dob}
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="registration-formblock">
                            <p className="registration-up">Gender</p>
                            <select 
                                className="registration-gender-select" 
                                name="gender" 
                                id="gender"
                                onChange={
                                    handleChange('gender')
                                }
                                value={gender}
                            >
                                <option></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="registration-formblock">
                            <p className="registration-up">Your Address</p>
                            <table className="formblock-tbl">
                                <tr className="formblock-tbl-tr">
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Home No.</p>
                                        <input 
                                            type="text"
                                            className="registration-input"
                                            onChange={
                                                handleChange('homeNo')
                                            }
                                            value={homeNo}
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Street</p>
                                        <input 
                                            type="text"
                                            className="registration-input"
                                            onChange={
                                                handleChange('street')
                                            }
                                            value={street}
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Town</p>
                                        <input 
                                            type="text"
                                            className="registration-input"
                                            onChange={
                                                handleChange('town')
                                            }
                                            value={town}
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="registration-formblock">
                        <table className="formblock-tbl">
                                <tr className="formblock-tbl-tr">
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Mobile Number</p>
                                        <input 
                                            type="tel"
                                            className="registration-input"
                                            style={{"width":"310px"}}
                                            onChange={
                                                handleChange('mobileNumber')
                                            }
                                            value={mobileNumber}
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="registration-formblock">
                        <table className="formblock-tbl">
                                <tr className="formblock-tbl-tr">
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Institute Name</p>
                                        <input 
                                            type="text"
                                            className="registration-input"
                                            onChange={
                                                handleChange('instituteName')
                                            }
                                            value={instituteName}
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Institute Contact Number</p>
                                        <input 
                                            type="tel"
                                            className="registration-input"
                                            onChange={
                                                handleChange('instituteContactNo')
                                            }
                                            value={instituteContactNo}
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="registration-formblock">
                        <table className="formblock-tbl">
                                <tr className="formblock-tbl-tr">
                                    <td className="formblock-tbl-td">
                                        <p  className="registration-up">Password</p>
                                        <input 
                                            type="password" 
                                            className="registration-input password"
                                            onChange={
                                                handleChange('password')
                                            }
                                            value={password}
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p  className="registration-up">Confirm Password</p>
                                        <input 
                                            type="password" 
                                            className="registration-input confirmpassword"
                                            onChange={
                                                handleChange('confirmPassword')
                                            }
                                            value={confirmPassword}
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="registration-PagebtnWrapper">
                            <button type='submit' className="registration-Pagebtn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="registration-container-loginImg">
                <img src={RegImg} alt="registration" />
            </div>
        </div>
            
        </>
    );
}

export default Registration;