import {useState} from "react";
import axios from "axios";
import {isAuth} from "../../../helpers/auth";
import "../../../styles/User.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
  export default function NewBatchAP() {

    //const [file, setFile] = useState<File>();

    const [formData, setFormData] = useState({
      batchName:"",
      startDate:"",
      endDate:"",
      instituteId:isAuth().institutes[0].id   
    });

    const handleChange = (text:string) => (e:any) => {
      setFormData({ ...formData, [text]: e.target.value });
    };

    const {
      batchName,
      startDate,
      endDate,
      instituteId}  = formData;

    function AddBatch(e:any){

      e.preventDefault();

      axios
      .post(`https://localhost:5000/api/Batch/add-batch`, {
            batchName,
            startDate,
            endDate,
            instituteId
          })
            .then(res => {
              toast.success("Batch Added Successfully!");
              setFormData({
                    ...formData,
                    batchName:"",
                    startDate:"",
                    endDate:"",
              });
            })
            .catch(err => {
              console.log(err.response);
              toast.error(err.response.data);
              toast.error(err.response.data.title);
            });
    }

    return (
      <div className="user">
        <ToastContainer />
        <div className="userTitleContainer">
          <h1 className="userTitle">Add New Batch</h1>
        </div>
        <div className="userContainer">
          <div className="userUpdate">
            <span className="userUpdateTitle">Fill all fields</span>
            <form className="userUpdateForm" onSubmit={AddBatch}>
              <div className="userUpdateLeft">
                <table>
                  <tr>
                    <td>
                    <div className="userUpdateItem">
                      <label>Batch Name</label>
                      <input
                        type="text"
                        placeholder=""
                        className="userUpdateInput"
                        value={batchName}
                        onChange = {handleChange('batchName')}
                      />
                    </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      <div className="userUpdateItem">
                        <label>Start Date</label>
                        <input
                          type="date"
                          placeholder=""
                          value={startDate}
                          className="userUpdateInput"
                          onChange = {handleChange('startDate')}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="userUpdateItem">
                        <label>End Date</label>
                        <input
                          type="date"
                          placeholder=""
                          value={endDate}
                          className="userUpdateInput"
                          onChange = {handleChange('endDate')}
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