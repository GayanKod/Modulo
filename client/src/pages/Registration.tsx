import React, { useState }  from 'react';
import Navbar from "../components/Navbar/Navbar";
import loginImg from '../assets/img/registration.png';
import "../styles/Registration.scss";


function Registration(){

    let time = new Date().getHours();

    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        textChange: 'Login'
      });
      const { email, password1, textChange } = formData;

    const handleChange = (text:any) => (e:any) => {
        setFormData({ ...formData, [text]: e.target.value });
    };

    const handleSubmit =() => {}

    return(
        <>

        <Navbar />

        <div className="registration-container">
            <div className="registration-container-content">
                <p className="registration-hello">Hello,</p>
                <p className="registration-greeting">{time < 12 ? "Good morning!" : ''}{12 <= time && time < 17 ? "Good Afternoon!" : ''}{time >= 17 && time < 24 ? "Good evening!" : ''}</p>
                <p className="registration-title">Register your Institute</p>
                <div className="registration-form">
                    <form onSubmit={handleSubmit}>
                        <div className="registration-formblock">
                            <table className="formblock-tbl">
                                <tr className="formblock-tbl-tr">
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">First Name</p>
                                        <input 
                                            type="text"
                                            className="registration-input"
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Last Name</p>
                                        <input 
                                            type="text"
                                            className="registration-input"
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
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Date of Birth</p>
                                        <input 
                                            type="date"
                                            className="registration-input"
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="registration-formblock">
                            <p className="registration-up">Gender</p>
                            <select className="registration-gender-select" name="gender" id="gender">
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
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Street</p>
                                        <input 
                                            type="text"
                                            className="registration-input"
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Town</p>
                                        <input 
                                            type="text"
                                            className="registration-input"
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
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p className="registration-up">Institute Contact Number</p>
                                        <input 
                                            type="tel"
                                            className="registration-input"
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
                                        />
                                    </td>
                                    <td className="formblock-tbl-td">
                                        <p  className="registration-up">Confirm Password</p>
                                        <input 
                                            type="password" 
                                            className="registration-input confirmpassword"
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
                <img src={loginImg} alt="registration" />
            </div>
        </div>
            
        </>
    );
}

export default Registration;