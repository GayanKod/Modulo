import { DataGrid} from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../../styles/UserListAP.scss";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import {isAuth, signout} from '../../../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminsList() {

  let navigate = useNavigate();

  const [data, setData] = useState([]);

  //Get data from Backend
  useEffect(() => {
    function getAdmins(){
        axios.get(`https://localhost:5000/api/User/get-users/admins/${isAuth().institutes[0].id}`).then((res) => {
            setData(res.data);
        }).catch((err) => {
            
        })
    }
    getAdmins();
  }, [])  

  const handleDelete = (id:number, role:string) => {

      if(!(isAuth().role === "Admin" && role === "Super Admin")){
        if (isAuth().id === id){
          axios.delete(`https://localhost:5000/api/User/delete-user/${id}`).then((res) => {
            signout(() => {
              navigate('/');
            })
          }).catch((err) => {
              
              toast.error(err.response.data);
          })
        }else{
          axios.delete(`https://localhost:5000/api/User/delete-user/${id}`).then((res) => {
              toast.error("User deleted!");
          }).catch((err) => {
              
              toast.error(err.response.data);
          })
        }  
      }else{
        toast.error("You cannot delete this user");
      }

    
    

    //setData(data.filter((item:any) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 100},
    {
      field: "firstName",
      headerName: "User",
      width: 200,
      renderCell: (params:any) => {
        return (
          <div className="userListUser">
            <Avatar className="userListImg" src={params.row.avatar} alt={params.row.firstName} />
            {params.row.firstName} {params.row.lastName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "role",
      headerName: "Role",
      width: 120,
    },
    {
      field: "mobileNumber",
      headerName: "Tel.",
      width: 160,
    },
    {
      field: "verifiedAt",
      headerName: "Verified Date",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params:any) => {
        return (
          <>
            <Link to={"/admin-panel/admins/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id, params.row.role)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
    <ToastContainer />
    <Link to="/admin-panel/addadmineditor">
      <div className="APAddBtn-wrapper">
        <div className="APAddBtn text" id="APaddbtn-text">Add New Admins</div><AddCircleIcon fontSize="large" className="APAddBtn"/>
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