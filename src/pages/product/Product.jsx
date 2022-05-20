import React from 'react'
import { Link } from 'react-router-dom'
import "./product.css"
import Chart from '../../components/chart/Chart'
import {productData} from '../../dummyData'
import { Publish } from '@material-ui/icons'

export default function Product() {
  return (
    <div className="product">

       <div className="productTitleContainer">
           <h1 className="productTitle">Product</h1>
          <Link to="/newproduct">
          <button className="productAddButton">Create</button>
          </Link>
       </div>

       <div className="productTopContainer">
       <div className="productTopLeftt">
               <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
         </div>
           <div className="productTopRightt">

               <div className="productInfoTop">
                   <img className="productImg" src="https://th.bing.com/th/id/OIP.9XnNX6ds3XAToj6gUSJdRwHaDx?w=289&h=178&c=7&r=0&o=5&pid=1.7" alt=""  />
               <span className="productName">Apple Airpods</span>
               </div>

               <div className="productInfoButtom">
                    <div className="productItem">
                        <span className="productKey">id:</span>
                        <span className="productValue">123</span>
                    </div>

                    <div className="productItem">
                        <span className="productKey">sales:</span>
                        <span className="productValue">6123</span>
                    </div>

                    <div className="productItem">
                        <span className="productKey">active:</span>
                        <span className="productValue">yes</span>
                    </div>

                    <div className="productItem">
                        <span className="productKey">in stock:</span>
                        <span className="productValue">none</span>
                    </div>

               </div>

           </div>
       </div>
       <div className="productButtomContainer">
           <form action="" className="productButtomForm">
           <div className="formLeftContianer">

                            <label>Product Name</label>
                            <input type="text"  placeholder="Apple Airpods" className="userUpdateInput"/>
                           
                           <label htmlFor="">In Stock</label>
                            <select name="inStock" id="inStock">
                                <option value="yes"> Yes</option>
                                <option value="no"> No</option>
                            </select>

                            <label htmlFor="">Active</label>
                            <select name="active" id="active">
                                <option value="yes"> Yes</option>
                                <option value="no"> No</option>
                            </select>
           </div>
           <div className="formRightContianer">

              <div className="productUpload">
                  <img src="https://th.bing.com/th/id/OIP.9XnNX6ds3XAToj6gUSJdRwHaDx?w=289&h=178&c=7&r=0&o=5&pid=1.7" alt="" className="productImgUpload" />
             <label for="file">
                 <Publish></Publish>
             </label>
             <input type="file" id="file" style={{display: "none"}} />
              </div>

              <button className="productButton">Update</button>
          
           </div>
           </form>

       </div>
        </div>
  )
}

