import { DataGrid} from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../../styles/UserListAP.scss";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';
import {isAuth} from '../../../helpers/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LecHallList() {

  const [data, setData] = useState([]);

  //Get data from Backend
  useEffect(() => {
    function getDegrees(){
        axios.get(`https://localhost:5000/api/Degree/get-degrees/inst/${isAuth().institutes[0].id}`).then((res) => {
            setData(res.data);
        }).catch((err) => {
            console.log(err.message);
        })
    }
    getDegrees();
  }, [])  

  const handleDelete = (id:number) => {
    axios.delete(`https://localhost:5000/api/Degree/delete-degree/${id}`).then((res) => {
            toast.error("Degree deleted!")
            window.location.reload();
          }).catch((err) => {
            console.log(err.response.data);
            toast.error(err.response.data);
          })
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 50},
    {
        field: "degreeName",
        headerName: "Degree Name",
        width: 320,
    },
    {
      field: "description",
      headerName: "Description",
      width: 380,
    },
    { field: "durationInYears", headerName: "Duration in Years", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params:any) => {
        return (
          <>
            <Link to={"/admin-panel/degrees/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
    <ToastContainer/>
    <Link to="/admin-panel/adddegrees">
      <div className="APAddBtn-wrapper">
        <div className="APAddBtn text" id="APaddbtn-text">Add New Degrees</div><AddCircleIcon fontSize="large" className="APAddBtn"/>
      </div>
    </Link>
    <div className="userList">
      
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={9}
        checkboxSelection
      />
    </div>
    </>
  );
}