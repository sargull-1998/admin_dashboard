import React from 'react'
import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
        
        <h1 className="newUserTitle">New User</h1>
        <form action="" className="newUserForm">

         <div className="newUserItem">
         <label htmlFor="">Username</label>
            <input type="text" placeholder="ahmad" />
         </div>
         <div className="newUserItem">
         <label htmlFor="">Full Name</label>
            <input type="text" placeholder="ahmad mhamad" />
         </div>

         <div className="newUserItem">
         <label htmlFor="">Email</label>
            <input type="email" placeholder="ahmad@gmail.com" />
         </div>

         <div className="newUserItem">
         <label htmlFor="">Password</label>
            <input type="password" placeholder="password" />
         </div>

         <div className="newUserItem">
         <label htmlFor="">Phone Number</label>
            <input type="number" placeholder="0751 765 29 10" />
         </div>

         <div className="newUserItem">
         <label htmlFor="">Address</label>
            <input type="text" placeholder="dhok | kurdistan" />
         </div>
         
         <div className="newUserItem">
         <label htmlFor="">Address</label>
            <input type="text" placeholder="dhok | kurdistan" />
         </div>


         <div className="newUserItem">
         <label htmlFor="">Gender</label>
           <div className="newUserGender">
           <input type="radio" name="gender" id="male" value="male"/>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female"/>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other"/>
            <label for="other">Other</label>
           </div>
         </div>
         <div className="newUserItem">
             <label htmlFor="">Active</label>
             <select  className="newUserSelect" name="active" id="active">
                 <option value="yes">Yes</option>
                 <option value="no">No</option>
             </select>
         </div>
         <button className="newUserButton">
             Create
         </button>

        </form>
        </div>
  )
}
