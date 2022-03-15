import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import "../styles/Login.scss"
import loginImg from '../assets/img/login.png'

const Login = () => {

    let time = new Date().getHours();

  return (
    <>
        <Navbar />

        <div className="login-container">
            <div className="login-container-content">
                <p className="login-hello">Hello,</p>
                <p className="login-greeting">{time < 12 ? "Good morning!" : ''}{12 <= time && time < 17 ? "Good Afternoon!" : ''}{time >= 17 && time < 24 ? "Good evening!" : ''}</p>
                <p className="login-title">Login to your account</p>
                <div className="login-form">
                    <form>
                        <div className="login-formblock">
                            <p className="login-up">Username</p>
                            <input type="text" className="login-username"/>
                        </div>
                        <div className="login-formblock">
                            <p  className="login-up">Password</p>
                            <input type="password" className="login-password"/>
                        </div>
                    </form>
                </div>
                <a className="login-forgotpw" href="#">forgot password?</a>
            </div>
            <div className="login-container-loginImg">
                <img src={loginImg} alt="login" />
            </div>
            <div className="login-PagebtnWrapper">
                <button className="login-Pagebtn">Login</button>
            </div>
        </div>
    </>
  )
}

export default Login;