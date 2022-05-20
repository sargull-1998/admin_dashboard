import React from 'react'
import "./sidebar.css"
import {LineStyle,Timeline,TrendingUp,PermIdentity,Storefront,AttachMoney,AssessmentOutlined,MailOutlineOutlined,FeedbackOutlined,ChatOutlined, WorkOutlineOutlined, ReportRounded} from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
  <div className="sidebarWrapper">
      <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
             <Link className="link" to="/">
             <li className="sidebarListItem active">
               <LineStyle className="sidebarIcon"/>
               Home
              </li>
              </Link>
              <li className="sidebarListItem">
               <Timeline className="sidebarIcon"/>
               Analytics
              </li>
              <li className="sidebarListItem">
               <TrendingUp className="sidebarIcon"/>
               Sales
              </li>
          </ul>
      </div>

      <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
             <Link className="link" to="/users">
             <li className="sidebarListItem ">
               <PermIdentity className="sidebarIcon"/>
               Users
              </li>
             </Link>
             <Link className="link" to="/products">
             <li className="sidebarListItem">
               <Storefront className="sidebarIcon"/>
               Products
              </li>
             </Link>
              <li className="sidebarListItem">
               <AttachMoney className="sidebarIcon"/>
              Transactions
              </li>
              <li className="sidebarListItem">
               <AssessmentOutlined className="sidebarIcon"/>
              Reports
              </li>
          </ul>
      </div>

      <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
              <li className="sidebarListItem ">
               <MailOutlineOutlined className="sidebarIcon"/>
              Mail
              </li>
              <li className="sidebarListItem">
               <FeedbackOutlined className="sidebarIcon"/>
               Feedback
              </li>
              <li className="sidebarListItem">
               <ChatOutlined className="sidebarIcon"/>
               Messages
              </li>
          </ul>
      </div>

      <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
              <li className="sidebarListItem ">
               <WorkOutlineOutlined className="sidebarIcon"/>
              Manage
              </li>
              <li className="sidebarListItem">
               <Timeline className="sidebarIcon"/>
               Analytics
              </li>
              <li className="sidebarListItem">
               <ReportRounded className="sidebarIcon"/>
               Reports
              </li>
          </ul>
      </div>
    
  </div>

    </div>
  )
}
