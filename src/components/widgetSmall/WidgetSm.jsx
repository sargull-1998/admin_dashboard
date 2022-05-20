import { VisibilityRounded } from '@material-ui/icons'
import React from 'react'
import "./widgetSm.css"

export default function widgetSm() {
  return (
  <div className="widgetSm">
    <span className="widgetSmTitle">
      New Joint Members
    </span>
    <ul className="widgetSmList">
      <li className="widgetSmListItem">
      <img src="https://th.bing.com/th/id/OIP.fuWOFeeHOrO-nuv-uJWpaQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="widgetSmImage" />
      <div className="widgetSmUser">
        <span className="widgetSmUsername">
          taman karem
        </span>
        <span className="widgetSmUserJob">Lawyer</span>
      </div>
      <button className="widgetSmButton">
      <VisibilityRounded className="widgetSmIcon"/>
        Display
      </button>
      </li>
      <li className="widgetSmListItem">
      <img src="https://th.bing.com/th/id/OIP.MLBOBDkeuB6H7t4Y0DmB0QHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="widgetSmImage" />
      <div className="widgetSmUser">
        <span className="widgetSmUsername">jwan rashid</span>
        <span className="widgetSmUserJob">Model</span>
      </div>
      <button className="widgetSmButton">
      <VisibilityRounded className="widgetSmIcon"/>
        Display
      </button>
      </li>
      <li className="widgetSmListItem">
      <img src="https://th.bing.com/th/id/OIP.MwcFjRDuaGYnTsLHqG9rPAHaKO?w=186&h=257&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="widgetSmImage" />
      <div className="widgetSmUser">
        <span className="widgetSmUsername">krystal kaban </span>
        <span className="widgetSmUserJob">Pharmacist</span>
      </div>
      <button className="widgetSmButton">
      <VisibilityRounded className="widgetSmIcon"/>
        Display
      </button>
      </li>
      <li className="widgetSmListItem">
      <img alt="" className="widgetSmImage" src="https://th.bing.com/th/id/OIP.lYPYq1wn6mRMQu_ntFlNxQHaKX?w=186&h=260&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
      <div className="widgetSmUser">
        <span className="widgetSmUsername">Eman adil</span>
        <span className="widgetSmUserJob">Teacher</span>
      </div>
      <button className="widgetSmButton">
      <VisibilityRounded className="widgetSmIcon"/>
        Display
      </button>
      </li>
      <li className="widgetSmListItem">
      <img src="https://th.bing.com/th/id/OIP.z0a015MYEhIfUujOPQkB-wAAAA?w=186&h=280&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="widgetSmImage"/>
      <div className="widgetSmUser">
        <span className="widgetSmUsername">aeman xurshid </span>
        <span className="widgetSmUserJob"> Engineer</span>
      </div>
      <button className="widgetSmButton">
        <VisibilityRounded className="widgetSmIcon"/>
        Display
      </button>
      </li>
    </ul>
  </div>
  )
}
