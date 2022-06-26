import React, { useState, SyntheticEvent } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import "../styles/Login.scss"
import loginImg from '../assets/img/login.png'
import { authenticate, isAuth } from '../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router'


const Login = () => {

    let time = new Date().getHours();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
      const { email, password } = formData;
      const handleChange = (text:string) => (e:SyntheticEvent) => {
        const target = e.target as HTMLTextAreaElement;
        setFormData({ ...formData, [text]: target.value });
      };

      let navigate = useNavigate();

      const handleSubmit = (e:SyntheticEvent) => {
        console.log('https://localhost:5000/api/Auth/login');
        e.preventDefault();
        if (email && password) {
          axios
            .post(`https://localhost:5000/api/Auth/login`, {
              email,
              password: password
            })
            .then(res => {
              authenticate(res, () => {
                setFormData({
                  ...formData,
                  email: '',
                  password: ''
                });
                toast.success("Login Successfully!");
                setTimeout(() => {isAuth()
                  ? navigate('/admin-panel')
                  : navigate('/login');},1000) 
              });
            })
            .catch(err => {
              setFormData({
                ...formData,
                email: '',
                password: ''
              });
              console.log(err.response);
              toast.error(err.response.data);
              toast.error(err.response.data.title);
            });
        } else {
          toast.error('Please fill all fields');
        }
      };

    

  return (
    <>
        <Navbar />

        <div className="login-container">
            {isAuth() ? <Navigate to='/admin-panel' /> : null}
            <ToastContainer />
            <div className="login-container-content">
                <p className="login-hello">Hello,</p>
                <p className="login-greeting">{time < 12 ? "Good morning!" : ''}{12 <= time && time < 17 ? "Good Afternoon!" : ''}{time >= 17 && time < 24 ? "Good evening!" : ''}</p>
                <p className="login-title">Login to your account</p>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="login-formblock">
                            <p className="login-up">E-mail</p>
                            <input 
                                type="text"
                                className="login-username"
                                onChange={handleChange('email')}
                                value={email}
                            />
                        </div>
                        <div className="login-formblock">
                            <p  className="login-up">Password</p>
                            <input 
                                type="password" 
                                className="login-password"
                                onChange={handleChange('password')}
                                value={password}
                            />
                        </div>
                        <div className="login-PagebtnWrapper">
                            <button type='submit' className="login-Pagebtn">Login</button>
                        </div>
                    </form>
                </div>
                <a className="login-forgotpw" href="/login/forgotpw">forgot password?</a>
            </div>
            <div className="login-container-loginImg">
                <img src={loginImg} alt="login" />
            </div>
        </div>
    </>
  )
}

export default Login;