import React,{useState, useEffect} from "react";
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
  import UploadIcon from '@mui/icons-material/Upload';
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import CircleIcon from '@mui/icons-material/Circle';

  
  export default function Degree() {

    let params = useParams();

    const [thisDegreeName, setThisDegreeName] = useState('');
    const [thisDescription, setThisDescription] = useState('');
    const [thisDurationInYears, setThisDurationInYears] = useState('');


    const [formData, setFormData] = useState({
      degreeId:params.degreeId,
      degreeName:'',
      description: '',
      durationInYears:''      
    });

    const {
      degreeId,
      degreeName,
      description,
      durationInYears}  = formData;


    function GetDegreebyId(){

      useEffect(() => {
        axios
            .get(`https://localhost:5000/api/Degree/get-degrees/${params.degreeId}`)
            .then(res => [
                setThisDegreeName(res.data.degreeName),
                setThisDescription(res.data.description),
                setThisDurationInYears(res.data.durationInYears)
            ] ).catch(error => {
              console.log(error)
            });

      }, []);
    }

    const handleChange = (text:string) => (e:any) => {
      setFormData({ ...formData, [text]: e.target.value });
    };

    function updateDegree(e:any){

      e.preventDefault();

        axios
            .put(`https://localhost:5000/api/Degree/update-degree`, {
              degreeId,
              degreeName,
              description,
              durationInYears 
            })
            .then(res => {
              toast.success("Degree updated successfully!");
              window.location.reload();
            })
            .catch(err => {
              console.log(err.response);
              toast.error(err.response.data);
              toast.error(err.response.data.title);
            });

    }

    GetDegreebyId();

    return (
      <div className="user">
        <ToastContainer />
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Degree</h1>
          <Link to="/admin-panel/adddegrees">
            <div className="APAddBtn-wrapper">
              <div className="APAddBtn text" id="APaddbtn-text">Add New Degree</div><AddCircleIcon fontSize="large" className="APAddBtn"/>
            </div>
          </Link> 
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">{thisDegreeName}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Degree Details</span>
              <div className="userShowInfo">
                <CircleIcon className="userShowIcon" />
                <span className="userShowInfoTitle">{thisDescription}</span>
              </div>
              <div className="userShowInfo">
                <CircleIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Duration : {thisDurationInYears} Years</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Fill all fields</span>
            <form className="userUpdateForm" onSubmit={updateDegree}>
              <div className="userUpdateLeft">
                <table>
                  <tr>
                    <td>
                    <div className="userUpdateItem">
                      <label>Degree Name</label>
                      <input
                        type="text"
                        placeholder={thisDegreeName}
                        className="userUpdateInput"
                        value={degreeName}
                        onChange = {handleChange('degreeName')}
                      />
                    </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Duration In Years</label>
                        <input
                          type="text"
                          placeholder={thisDurationInYears}
                          value={durationInYears}
                          className="userUpdateInput"
                          onChange = {handleChange('durationInYears')}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      <div className="userUpdateItem">
                        <label>Description</label>
                        <input
                          type="text"
                          placeholder={thisDescription}
                          value={description}
                          className="userUpdateInput"
                          onChange = {handleChange('description')}
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
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }