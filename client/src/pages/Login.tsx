import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import "../styles/Login.scss"
import loginImg from '../assets/img/login.png'
import { authenticate, isAuth } from '../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from 'react-router-dom';

const Login = (history:any) => {

    let time = new Date().getHours();

    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        textChange: 'Sign In'
      });
      const { email, password1, textChange } = formData;
      const handleChange = (text:any) => (e:any) => {
        setFormData({ ...formData, [text]: e.target.value });
      };

      const handleSubmit = (e:any) => {
        console.log('https://localhost:5000/api/Auth/login');
        e.preventDefault();
        if (email && password1) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .post(`https://localhost:5000/api/Auth/login`, {
              email,
              password: password1
            })
            .then(res => {
              authenticate(res, () => {
                setFormData({
                  ...formData,
                  email: '',
                  password1: '',
                  textChange: 'Submitted'
                });
                isAuth()
                  ? history.push('/')
                  : history.push('/login');
                toast.success(`Welcome back!`);
              });
            })
            .catch(err => {
              setFormData({
                ...formData,
                email: '',
                password1: '',
                textChange: 'Sign In'
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
            {isAuth() ? <Navigate to='/home' /> : null}
            <ToastContainer />
            <div className="login-container-content">
                <p className="login-hello">Hello,</p>
                <p className="login-greeting">{time < 12 ? "Good morning!" : ''}{12 <= time && time < 17 ? "Good Afternoon!" : ''}{time >= 17 && time < 24 ? "Good evening!" : ''}</p>
                <p className="login-title">Login to your account</p>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="login-formblock">
                            <p className="login-up">Username</p>
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
                                onChange={handleChange('password1')}
                                value={password1}
                            />
                        </div>
                        <div className="login-PagebtnWrapper">
                            <button type='submit' className="login-Pagebtn">Login</button>
                        </div>
                    </form>
                </div>
                <a className="login-forgotpw" href="#">forgot password?</a>
            </div>
            <div className="login-container-loginImg">
                <img src={loginImg} alt="login" />
            </div>
        </div>
    </>
  )
}

export default Login;