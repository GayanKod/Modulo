import {useState} from "react";
import axios from "axios";
import {isAuth} from "../../../helpers/auth";
import "../../../styles/User.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
  export default function NewLecHallAP() {


    //const [file, setFile] = useState<File>();
    // Need for future improvemnet

    const [formData, setFormData] = useState({
      degreeName:'',
      description:'',
      durationInYears:'',
      instituteId: isAuth().institutes[0].id      
    });

    const handleChange = (text:string) => (e:any) => {
      setFormData({ ...formData, [text]: e.target.value });
    };

    const {
      degreeName,
      description,
      durationInYears,
      instituteId}  = formData;

    function AddDegree(e:any){

      e.preventDefault();

      axios
      .post(`https://localhost:5000/api/Degree/add-degree`, {
          degreeName,
          description,
          durationInYears,
          instituteId
          })
            .then(res => {
              toast.success("Lecture Hall/Lab Added Successfully!");
              setFormData({
                    ...formData,
                    degreeName:'',
                    description:'',
                    durationInYears:''
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
          <h1 className="userTitle">Add New Degrees</h1>
        </div>
        <div className="userContainer">
          <div className="userUpdate">
            <span className="userUpdateTitle">Fill all fields</span>
            <form className="userUpdateForm" onSubmit={AddDegree}>
              <div className="userUpdateLeft">
                <table>
                  <tr>
                    <td>
                    <div className="userUpdateItem">
                      <label>Degree Name</label>
                      <input
                        type="text"
                        placeholder=""
                        className="userUpdateInput"
                        value={degreeName}
                        onChange = {handleChange('degreeName')}
                      />
                    </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>Duration in Years</label>
                        <input
                          type="text"
                          placeholder=""
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
                          placeholder=""
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
                <button className="userUpdateButton">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }