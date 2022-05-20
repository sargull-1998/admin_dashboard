import { EmailSharp, EventSharp, PermIdentity, PhoneSharp, PinDrop, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./user.css"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="title">Edit User</h1>
            <Link to="/newuser">
                <button className="userButton">Create</button>
                </Link>
        </div>
        <div className="userContainer">
            <div className="userDisplay">
                <div className="userDisplayTop">
                    <img src="https://th.bing.com/th/id/OIP.IMefSgIB-5OKx2ulz_vNzgHaL9?w=185&h=299&c=7&r=0&o=5&pid=1.7" alt="" className="userImage" />
                    <div className="userDisplayTopTitle">
                        <span className="userDisplayName">nahla marewan</span>
                        <span className="userDisplayJobTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userDisplayBottom">
                    <span className="userDisplayTitle">Account Details</span>
                    
                    <div className="userDisplayInfo">
                    <PermIdentity className="userIcon"/>
                    <span className="userShowInfoTitle">nahla99</span>
                    </div>

                    <div className="userDisplayInfo">
                    <EventSharp className="userIcon"/>
                    <span className="userShowInfoTitle">10.2.1996</span>
                    </div>

                    <span className="userDisplayTitle">Contact Details</span>
                    
                    <div className="userDisplayInfo">
                    <PhoneSharp className="userIcon"/>
                    <span className="userShowInfoTitle">0751 245 54 78</span>
                    </div>

                    <div className="userDisplayInfo">
                    <EmailSharp className="userIcon"/>
                    <span className="userShowInfoTitle">nahal99@gmail.com</span>
                    </div>

                    <div className="userDisplayInfo">
                    <PinDrop className="userIcon"/>
                    <span className="userShowInfoTitle">erbil | urdistan</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>

                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">

                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text"  placeholder="nahla99" className="userUpdateInput"/>
                            </div>

                            <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text"  placeholder="nahla marewan" className="userUpdateInput"/>
                            </div>

                            <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text"  placeholder="nahla99@gamil.com" className="userUpdateInput"/>
                            </div>

                            <div className="userUpdateItem">
                            <label>Phone Number</label>
                            <input type="text"  placeholder="0751 245 54 78" className="userUpdateInput"/>
                            </div>

                            <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text"  placeholder="erbil | kurdistan" className="userUpdateInput"/>
                            </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://th.bing.com/th/id/OIP.IMefSgIB-5OKx2ulz_vNzgHaL9?w=185&h=299&c=7&r=0&o=5&pid=1.7" alt="" className="imgUpadate" />
                       
                       <label htmlFor="file"><Publish className="publishIcon"></Publish></label>
                        <input type="file"  id="file" style={{display:"none"}}/>
                        </div>
                        <button className="updateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
