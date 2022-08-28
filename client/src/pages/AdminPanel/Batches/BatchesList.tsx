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

export default function BatchesList() {

  const [data, setData] = useState([]);

  //Get data from Backend
  useEffect(() => {
    function getBatches(){
        axios.get(`https://localhost:5000/api/Batch/get-batches/inst/${isAuth().institutes[0].id}`).then((res) => {
            setData(res.data);
        }).catch((err) => {
            
        })
    }
    getBatches();
  }, [])  

  const handleDelete = (id:number) => {
    axios.delete(`https://localhost:5000/api/Batch/delete-batch/${id}`).then((res) => {
            toast.error("Batch deleted!")
            window.location.reload();
          }).catch((err) => {
            
            toast.error(err.response.data);
          })
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 50},
    {
        field: "batchName",
        headerName: "Batch Name",
        width: 380,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      width: 250,
    },
    { field: "endDate", headerName: "End Date", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params:any) => {
        return (
          <>
            <Link to={"/admin-panel/batches/" + params.row.id}>
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
    <Link to="/admin-panel/addbatches">
      <div className="APAddBtn-wrapper">
        <div className="APAddBtn text" id="APaddbtn-text">Add New Batches</div><AddCircleIcon fontSize="large" className="APAddBtn"/>
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