import React from 'react'
import "./widgetLa.css"

export default function widgetLa() {
  const Button = ({type}) =>{
    return <button className={"widgetLaButton " + type}>{type}</button>
  }
  return (
  <div className="widgetLa">
    <h3 className="widgetLaTitle">Latest Transactions</h3>
    <table className="widgetLaTable">
      <tr className="widgetLaTr">
        <th className="widgetLaTh">Customer</th>
        <th className="widgetLaTh">Date</th>
        <th className="widgetLaTh">Amount</th>
        <th className="widgetLaTh">Status</th>
      </tr>
      <tr className="widgetLaTr">
        <td className="widgetLaUser">
          <img src="https://th.bing.com/th/id/OIP.fuWOFeeHOrO-nuv-uJWpaQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="widgetLaImg" />
          <span className="widgetLaName">taman karem</span>
        </td>
        <td className="widgetLaDate"> 1 Jun 2021</td>
        <td className="widgetLaAmount">$123.00</td>
        <td className="widgetLaStatus"><Button type="Approved"/></td>
      </tr>

      <tr className="widgetLaTr">
        <td className="widgetLaUser">
          <img src="https://th.bing.com/th/id/OIP.fuWOFeeHOrO-nuv-uJWpaQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="widgetLaImg" />
          <span className="widgetLaName">taman karem</span>
        </td>
        <td className="widgetLaDate"> 1 Jun 2021</td>
        <td className="widgetLaAmount">$123.00</td>
        <td className="widgetLaStatus"><Button type="Declined"/></td>
      </tr>

      <tr className="widgetLaTr">
        <td className="widgetLaUser">
          <img src="https://th.bing.com/th/id/OIP.fuWOFeeHOrO-nuv-uJWpaQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="widgetLaImg" />
          <span className="widgetLaName">taman karem</span>
        </td>
        <td className="widgetLaDate"> 1 Jun 2021</td>
        <td className="widgetLaAmount">$123.00</td>
        <td className="widgetLaStatus"><Button type="Pendding"/></td>
      </tr>


      <tr className="widgetLaTr">
        <td className="widgetLaUser">
          <img src="https://th.bing.com/th/id/OIP.fuWOFeeHOrO-nuv-uJWpaQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="widgetLaImg" />
          <span className="widgetLaName">taman karem</span>
        </td>
        <td className="widgetLaDate"> 1 Jun 2021</td>
        <td className="widgetLaAmount">$123.00</td>
        <td className="widgetLaStatus"><Button type="Approved"/></td>
      </tr>

      <tr className="widgetLaTr">
        <td className="widgetLaUser">
          <img src="https://th.bing.com/th/id/OIP.fuWOFeeHOrO-nuv-uJWpaQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="widgetLaImg" />
          <span className="widgetLaName">taman karem</span>
        </td>
        <td className="widgetLaDate"> 1 Jun 2021</td>
        <td className="widgetLaAmount">$123.00</td>
        <td className="widgetLaStatus"><Button type="Approved"/></td>
      </tr>
    </table>
  </div>
  )
}
