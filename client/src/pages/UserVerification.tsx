import { useState, SyntheticEvent } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import "../styles/Verify.scss"
import loginImg from '../assets/img/login.png'
import { isAuth } from '../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router'


const UserVerification = () => {

    const [token, setToken] = useState<string>();

      const handleChange = (text:string) => (e:SyntheticEvent) => {
        const target = e.target as HTMLTextAreaElement;
        setToken(target.value);
      };

      let navigate = useNavigate();

      const handleSubmit = (e:SyntheticEvent) => {
        
        e.preventDefault();
        if (token) {
          axios
            .post(`https://localhost:5000/api/Auth/verify?token=`+
              token)
            .then(res => {
                toast.success("User Verified Successfully!");
                setTimeout(() => {navigate('/login');},1000)
            })
            .catch(err => {
                
                toast.error(err.response.data);
                toast.error(err.response.data.title);
            });
              
            
        } else {
          toast.error('Invalid Token!');
        }
      };

    

  return (
    <>
        <Navbar />

        <div className="verify-container">
            {isAuth() ? <Navigate to='/admin-panel' /> : null}
            <ToastContainer />
            <div className="verify-container-content">
                <p className="verify-title">Please check your emails and Verify your Email Address</p>
                <div className="verify-form">
                    <form onSubmit={handleSubmit}>
                        <div className="verify-formblock">
                            <p className="verify-up">Enter your verification Token</p>
                            <input 
                                type="text"
                                className="verify-username"
                                onChange={handleChange('token')}
                                value={token}
                            />
                        </div>
                        <div className="verify-PagebtnWrapper">
                            <button type='submit' className="verify-Pagebtn">Verify</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="verify-container-loginImg">
                <img src={loginImg} alt="verify" />
            </div>
        </div>
    </>
  )
}

export default UserVerification;