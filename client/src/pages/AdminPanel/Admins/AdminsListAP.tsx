import { DataGrid} from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../../styles/UserListAP.scss";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';

export default function UserList() {

  const [data, setData] = useState([]);

  //Get data from Backend
  useEffect(() => {
    function getAdmins(){
        axios.get("https://localhost:5000/api/User/get-admins").then((res) => {
            setData(res.data);
        }).catch((err) => {
            console.log(err.message);
        })
    }
    getAdmins();
  }, [])  

  const handleDelete = (id:number) => {
    setData(data.filter((item:any) => item.id !== id));
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
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
    <Link to="/admin-panel/admins/newadmin">
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