import React, { useState } from 'react';
import "./productList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import {productRows} from '../../dummyData'
import { Link } from 'react-router-dom';

export default function UserList() {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) =>{
    setData(data.filter(item =>item.id !== id));
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 180,
     
      renderCell: (params)=>{
        return (
          <div className="productListItems">
            <img src={params.row.img} alt="" className="productListImage"/>
            {params.row.name}
          </div>
        )
      }
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 180,
      
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      
    },
    {
      field: 'price',
      headerName: 'Price',
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
  <Link to={"/product/" + params.row.id }>
  <button className="productListEdit">Edit</button>
  </Link>
   <DeleteOutlineOutlined className="productListDelete" onClick={()=> handleDelete(params.row.id)}></DeleteOutlineOutlined>
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
