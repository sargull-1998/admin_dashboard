import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,SettingsOutlined} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">gullaAdmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                  <NotificationsNone/>
                  <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                  <Language/>
                  <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                  <SettingsOutlined/>
                </div>
                <img src="https://th.bing.com/th/id/OIP.FCtRb-r1AWctp56G0GywTwHaEK?pid=ImgDet&rs=1" alt="" className="topAvatar" />
            </div>
        </div>
        </div>
  )
}
