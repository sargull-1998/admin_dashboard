import React, { useState } from 'react';
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import {userRows} from '../../dummyData'
import { Link } from 'react-router-dom';

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) =>{
    setData(data.filter(item =>item.id !== id));
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 180,
     
      renderCell: (params)=>{
        return (
          <div className="userListUsers">
            <img src={params.row.avatar} alt="" className="userListImage"/>
            {params.row.userName}
          </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 180,
      
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 170,
      renderCell: (params)=>{
return(
  <>
  <Link to={"/user/" + params.row.id }>
  <button className="userListEdit">Edit</button>
  </Link>
   <DeleteOutlineOutlined className="userListDelete" onClick={()=> handleDelete(params.row.id)}></DeleteOutlineOutlined>
  </>
)
      }
    },
  ];
  

  return (
    <div className="userList">
        <DataGrid disableSelectionOnClick rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection/>
        </div>
  )
}
